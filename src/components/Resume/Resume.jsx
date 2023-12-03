import React from "react";

const GoogleDocsViewer = () => {
  const documentUrl =
    "https://docs.google.com/document/d/1fD8ZhH8vOv1b__Fju_iPjQa8TRa1BeM23ZNMhR9Z78M/edit?usp=sharing";

  return (
    <div>
      <iframe
        title="Google Docs Viewer"
        src={documentUrl}
        width="100%"
        height="800px"
      />
    </div>
  );
};

export default GoogleDocsViewer;