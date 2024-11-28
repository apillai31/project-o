import react from "react";
import FileButton from "../components/FileButton"
import {Box, Typography} from "@mui/material"
import {Navbar} from "../components/Navbar"
export const Home = () => {
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
                <FileButton display="Attach File 1" />
                <FileButton display="Attach File 2" />
            </Box>
          </Box>

        </>
    )
} 
