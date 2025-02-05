import React from "react";
import "./Toolbar.css";
const Toolbar = ({ tools, onToolSelect, selectedTool }) => {
  return (
    <div className="toolbar">
      {tools.map((tool) => (
        <button
          key={tool.name}
          className={selectedTool === tool.name ? "selected" : ""}
          onClick={() => onToolSelect(tool)}
        >
          {tool.icon}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
