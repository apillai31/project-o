import react from "react";
import {useState} from "react";
import {FileButton} from "../components/FileButton"
import {Button, Box, Typography} from "@mui/material"
import {Navbar} from "../components/Navbar"
import { Loading } from "../components/LoadingAnimations";
import TableComponent from "../components/TableComponent"
export const Home = () => {
    const [showLoading, setShowLoading] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const handleShowTable = () => {
      setShowLoading(false);
      setShowTable(true);
    }
    const handleClick = () => {
        showTable ? setShowLoading(false) : setShowLoading(true);
        // setShowLoading(true);
        handleShowTable();
        // setShowLoading(false);
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
                <FileButton display="Attach File 1" />
                <FileButton display="Attach File 2" />
            </Box>
            <Button onClick={handleClick} sx={{ display: 'flex', gap: 2 }}>Submit</Button>
            {showLoading && showTable ? <TableComponent /> : <Loading />}
            
          </Box>
          <hr />
          
            
          {showTable && <TableComponent />}
        </>
    )
} 
