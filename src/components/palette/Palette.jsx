import React from "react";
import "./Palette.css";
const Palette = ({ colors, onColorSelect }) => {
  return (
    <div className="palette">
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          className="color-button"
          onClick={() => onColorSelect(color)}
        ></button>
      ))}
    </div>
  );
};

export default Palette;
