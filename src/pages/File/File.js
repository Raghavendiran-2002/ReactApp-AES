import React, { useState } from "react";
import "./FileUpload.css"; // Import your CSS file

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setErrorMessage("File size exceeds 2 MB limit");
      } else {
        setSelectedFile(file);
        setErrorMessage("");
      }
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="file-upload-container">
      <input
        type="file"
        accept=".pdf, .docx, .doc, .xls, .xlsx"
        onChange={handleFileChange}
      />

      {selectedFile && (
        <div className="selected-file-container">
          <p>Selected File: {selectedFile.name}</p>
          <button onClick={handleRemoveFile}>Remove File</button>
        </div>
      )}

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default FileUpload;
