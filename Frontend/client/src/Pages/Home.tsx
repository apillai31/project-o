import react from "react";
import { useState, useRef } from 'react';
import { FileButton } from "../components/FileButton"
import { Box, Typography } from "@mui/material"
import { Navbar } from "../components/Navbar"
import { Loading } from "../components/LoadingAnimations";
import axios from 'axios';
import TableComponent from "../components/TableComponent"

export const Home = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const handleShowTable = () => {
    setShowLoading(false);
    setShowTable(true);
  }
  const emptyFile: HTMLInputElement = document.createElement("input");
  const file1InputRef = useRef(emptyFile);
  const file2InputRef = useRef(emptyFile);

  async function handleClick() {
    setShowLoading(true);
    showTable ? setShowLoading(false) : setShowLoading(true);
    handleShowTable();
    var file1Input: HTMLInputElement = file1InputRef.current;
    var file2Input: HTMLInputElement = file2InputRef.current;
    if (file1Input == null || file2Input == null || file1Input.files == null || file2Input.files == null)
      return;

    var file1 = file1Input.files[0];
    var file2 = file2Input.files[0];
    const formData = new FormData();
    formData.append("file", file1);
    formData.append("filename", file1.name);
    formData.append("file", file2);
    formData.append("filename", file2.name);
    console.log(formData.getAll)
    console.log(file1.name + " " + file2.name);
    try {
      await axios.post("http://localhost:5100" + "/run", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 2000
      });
      console.log("sent")
    }
    catch (err) {
      console.log("Failed");
    }
  }

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: 2 // Space from Navbar
        }}
      >
        <Typography variant="h6" gutterBottom>
          Attach Files:
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FileButton fileInputRef={file1InputRef} display="Upload File 1" />
          <FileButton fileInputRef={file2InputRef} display="Upload File 2" />
        </Box>
        <button onClick={handleClick}>Submit</button>
        {showLoading && <Loading></Loading>}
      </Box>
      <hr />


      {showTable && <TableComponent />}
    </>
  )
}