import React, { useRef, useEffect, useState } from "react";
import { CanvasStyle } from "./Paint.styles";
import "./Paint.css";
import Toolbar from "../toolbar/Toolbar";
import Palette from "../palette/Palette";
import Modal from "../paintModal/Modal";
import axios from "axios";
export default function Paint() {
  const canvasRef = useRef(null);
  const [getCtx, setGetCtx] = useState(null);
  const [painting, setPainting] = useState(false);
  const [selectedTool, setSelectedTool] = useState("펜");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [penColor, setPenColor] = useState("#000000");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [rainbowPen, setRainbowPen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 1150;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");
    ctx.lineJoin = "round";
    ctx.lineWidth = 2.5;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setGetCtx(ctx);
    saveHistory(canvas);
  }, []);

  useEffect(() => {
    if (getCtx) {
      if (selectedTool === "펜" || selectedTool === "넓은 붓") {
        getCtx.strokeStyle = rainbowPen ? getRandomColor() : penColor;
      } else if (selectedTool === "지우개") {
        getCtx.strokeStyle = "#FFFFFF";
      }
    }
  }, [penColor, selectedTool, getCtx, rainbowPen]);

  useEffect(() => {
    if (rainbowPen) {
      const interval = setInterval(() => {
        if (getCtx) {
          getCtx.strokeStyle = getRandomColor();
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [rainbowPen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "z") {
        undo();
      } else if (e.ctrlKey && e.key === "y") {
        redo();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [historyIndex]);

  useEffect(() => {
    if (historyIndex >= 0 && history.length > 0) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = history[historyIndex];
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
      };
    }
  }, [historyIndex, history]);

  const saveHistory = (canvas) => {
    const dataURL = canvas.toDataURL();
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(dataURL);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleColorSelect = (color) => {
    setPenColor(color);
    setSelectedColor(color);
    if (getCtx) {
      getCtx.strokeStyle = color;
    }
    if (selectedTool === "채우기") {
      const canvas = canvasRef.current;
      canvas.onclick = (e) => {
        const x = e.offsetX;
        const y = e.offsetY;
        floodFill(canvas, x, y, hexToRgb(color));
        saveHistory(canvas);
      };
    }
  };

  const handleToolSelect = (tool) => {
    setSelectedTool(tool.name);
    setRainbowPen(tool.name === "무지개 펜");
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.onclick = null;
    canvas.onmousemove = null;

    if (tool.name === "펜" || tool.name === "무지개 펜") {
      if (ctx) {
        ctx.lineWidth = 2.5;
        canvas.onmousemove = (e) => {
          if (painting) {
            const mouseX = e.nativeEvent.offsetX;
            const mouseY = e.nativeEvent.offsetY;
            getCtx.strokeStyle = getRandomColor();
            getCtx.lineTo(mouseX, mouseY);
            getCtx.stroke();
          }
        };
      }
    } else if (tool.name === "지우개") {
      if (ctx) {
        ctx.lineWidth = 10;
        ctx.strokeStyle = "#FFFFFF";
        canvas.onmousemove = (e) => {
          if (painting) {
            const mouseX = e.nativeEvent.offsetX;
            const mouseY = e.nativeEvent.offsetY;
            getCtx.lineTo(mouseX, mouseY);
            getCtx.stroke();
          }
        };
      }
    } else if (tool.name === "채우기") {
      canvas.onclick = (e) => {
        const x = e.offsetX;
        const y = e.offsetY;
        floodFill(canvas, x, y, hexToRgb(penColor));
        saveHistory(canvas);
      };
    } else if (tool.name === "넓은 붓") {
      if (ctx) {
        ctx.lineWidth = 10;
        canvas.onmousemove = (e) => {
          if (painting) {
            const mouseX = e.nativeEvent.offsetX;
            const mouseY = e.nativeEvent.offsetY;
            getCtx.lineTo(mouseX, mouseY);
            getCtx.stroke();
          }
        };
      }
    }
  };
  const resetCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    saveHistory(canvas);
  };
  const drawFn = (e) => {
    if (selectedTool !== "채우기" && e.nativeEvent) {
      const mouseX = e.nativeEvent.offsetX;
      const mouseY = e.nativeEvent.offsetY;

      if (!painting) {
        getCtx.beginPath();
        getCtx.moveTo(mouseX, mouseY);
      } else {
        getCtx.lineTo(mouseX, mouseY);
        getCtx.stroke();
      }
    }
  };

  const saveDrawingToServer = (dataURL) => {
    const formData = new FormData();
    formData.append("file", dataURL);
    formData.append("picTitle", "your-title-here"); // 제목과 내용은 필요에 따라 적절히 수정해주세요.
    formData.append("picContent", "your-content-here");

    axios
      .post("/paint", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("파일 서버 전송 성공:", response.data);
      })
      .catch((error) => {
        console.error("파일 서버 전송 실패:", error);
      });
  };

  // saveDrawing 함수 수정
  const saveDrawing = () => {
    const canvas = canvasRef.current;
    const dataURL = canvas.toDataURL("image/png");

    let fileName = prompt("저장할 파일 이름을 입력하세요:", "");
    if (!fileName) {
      console.error("파일 이름이 입력되지 않았습니다.");
      return;
    }

    fileName = `${fileName}.png`;

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = fileName;
    link.click();

    alert(`파일이 "${fileName}" 이름으로 저장되었습니다.`);
    setImageSrc(dataURL);
    setIsModalOpen(true);
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
    }
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const tools = [
    { name: "펜", icon: "✏️" },
    { name: "넓은 붓", icon: "🖌️" },
    { name: "지우개", icon: "🧽" },
    { name: "채우기", icon: "🧺" },
    { name: "무지개 펜", icon: "🌈" },
  ];
  const handleModalSubmit = (data) => {
    console.log("제목:", data.title);
    console.log("내용:", data.content);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("file", imageSrc);

    axios
      .post("/paint", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("게시글 등록 성공:", response.data);
      })
      .catch((error) => {
        console.error("게시글 등록 실패:", error);
      });
  };
  const colors = [
    "#000000",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FFA500",
    "#800080",
    "#FFFFFF",
    "#db694c",
    "#562124",
    "#156351",
  ];

  return (
    <CanvasStyle>
      <div className="view">
        <div className="canvasWrap">
          <div className="buttonContainer">
            <button onClick={resetCanvas} className="reset-button">
              Reset
            </button>
            <button onClick={undo} className="undo-button">
              Undo
            </button>
            <button onClick={redo} className="redo-button">
              Redo
            </button>
            <button onClick={saveDrawing} className="save-button">
              게시물 올리기
            </button>
          </div>
          <canvas
            className="canvas"
            ref={canvasRef}
            onMouseDown={() => setPainting(true)}
            onMouseUp={() => {
              setPainting(false);
              saveHistory(canvasRef.current);
            }}
            onMouseMove={(e) => drawFn(e)}
            onMouseLeave={() => setPainting(false)}
          ></canvas>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleModalSubmit}
            imageSrc={imageSrc}
          />
          <Toolbar
            tools={tools}
            onToolSelect={handleToolSelect}
            selectedTool={selectedTool}
          />
          <Palette
            colors={colors}
            onColorSelect={handleColorSelect}
            selectedColor={selectedColor}
          />
        </div>
      </div>
    </CanvasStyle>
  );
}

// Flood fill and utility functions
const floodFill = (canvas, x, y, fillColor) => {
  const context = canvas.getContext("2d");
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  const stack = [[x, y]];
  const baseColor = getColorAtPixel(data, x, y, canvas.width);

  if (colorMatch(baseColor, fillColor)) {
    return;
  }

  while (stack.length) {
    const [currentX, currentY] = stack.pop();
    const index = (currentY * canvas.width + currentX) * 4;

    if (
      !colorMatch(
        baseColor,
        getColorAtPixel(data, currentX, currentY, canvas.width)
      )
    ) {
      continue;
    }

    setColorAtPixel(data, currentX, currentY, canvas.width, fillColor);

    stack.push([currentX + 1, currentY]);
    stack.push([currentX - 1, currentY]);
    stack.push([currentX, currentY + 1]);
    stack.push([currentX, currentY - 1]);
  }

  context.putImageData(imageData, 0, 0);
};

const getColorAtPixel = (data, x, y, width) => {
  const index = (y * width + x) * 4;
  return [data[index], data[index + 1], data[index + 2], data[index + 3]];
};

const setColorAtPixel = (data, x, y, width, color) => {
  const index = (y * width + x) * 4;
  data[index] = color[0];
  data[index + 1] = color[1];
  data[index + 2] = color[2];
  data[index + 3] = color[3];
};

const colorMatch = (color1, color2) => {
  return color1.every((value, index) => value === color2[index]);
};

const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b, 255];
};
