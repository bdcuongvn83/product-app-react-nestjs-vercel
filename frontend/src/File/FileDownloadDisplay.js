import React, { useState, useEffect } from "react";
import BASE_URL from "../config";

const FileDownloadDisplay = ({ docId, className, style, altText }) => {
  const [fileUrl, setFileUrl] = useState("");
  let isInitData = false;
  // useEffect(() => {
  //   return () => {
  //     if (!isInitData) {
  //       downloadFile(docId);
  //       isInitData = true;
  //     }
  //     if (fileUrl) {
  //       //console.log("URL.revokeObjectURL start docId:", docId);
  //       URL.revokeObjectURL(fileUrl); // Release memory
  //     }
  //   };
  // }, [fileUrl]);

  useEffect(() => {
    const fetchData = async () => {
      // console.log("fetchData downloadFile docId:", docId);
      if (docId) {
        await downloadFile(docId);
      }
    };

    fetchData();

    return () => {
      if (fileUrl) {
        URL.revokeObjectURL(fileUrl);
      }
    };
  }, [docId]); // docId thay vì fileUrl

  const downloadFile = async (docId) => {
    try {
      const timestamp = new Date().getTime(); // Unique timestamp to bypass cache
      //const response = await fetch(`/api/filemanage/1?timestamp=${timestamp}`); // Fetch the file
      const downloadFileUrl = `${BASE_URL}/api/filemanage/${docId}?timestamp=${timestamp}`;
      // console.log("downloadFileUrl:", downloadFileUrl);

      const response = await fetch(downloadFileUrl); // Fetch the file

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob(); // Parse the response as a Blob
      // console.log("Blob received:", blob);
      // console.log("Blob type:", blob.type);
      const url = URL.createObjectURL(blob); // Create a Blob URL
      // console.log("Blob received url:", url);
      setFileUrl(url); // Update state with the Blob URL
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <div>
      {fileUrl && (
        <div>
          {/* <img
            className="img_cart"
            src={fileUrl}
            alt="Downloaded file"
            style={{ maxWidth: "100%" }}
          /> */}
          <img
            className={className}
            src={fileUrl}
            alt={altText}
            style={style}
          />
        </div>
      )}
    </div>
  );
};

export default FileDownloadDisplay;
