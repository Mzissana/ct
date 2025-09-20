import React, { useState, useRef } from "react";
import cl from "./Dropzone.module.scss";

const Dropzone = () => {
  const [files, setFiles] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  const handleFiles = (newFiles) => {
    setFiles(Array.from(newFiles));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = () => setIsDragOver(false);

  return (
    <div>
      <div
        className={`${cl.dropzone} ${isDragOver ? cl.dragover : ""}`}
        onClick={() => fileInputRef.current.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}>
        Перетащите файлы сюда или нажмите
      </div>

      <input
        type="file"
        multiple
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => handleFiles(e.target.files)}
      />

      <ul className={cl.fileList}>
        {files.map((file, i) => (
          <li key={i}>
            {file.name} ({Math.round(file.size / 1024)} КБ)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropzone;
