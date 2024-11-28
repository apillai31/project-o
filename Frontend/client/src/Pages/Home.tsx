import react from "react";
import { useState } from 'react';
import { FileButton } from "../components/FileButton"
import { Box, Typography } from "@mui/material"
import { Navbar } from "../components/Navbar"
import { Loading } from "../components/LoadingAnimations";
export const Home = () => {
  const [showLoading, setShowLoading] = useState(false);

  const handleClick = () => {
    setShowLoading(true);
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
          <FileButton display="Upload File 1" />
          <FileButton display="Upload File 2" />
        </Box>
        <button onClick={handleClick}>Submit</button>
        {showLoading && <Loading></Loading>}
      </Box>

    </>
  )
} 
