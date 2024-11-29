import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Paper, Typography } from '@mui/material';
import Papa from 'papaparse';

interface DataRow {
    Table1: string;
    Table2: string;
    Column1: string;
    Column2: string;
    Similarity_Score: number;
}

const TableComponent: React.FC = () => {
    const [data, setData] = useState<DataRow[]>([]);
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');

    const handleFileChange = (event:any) => {
        const file = event.target.files[0];
        if (file) {
          Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: (results:any) => {
              setData(results.data);
            },
            error: (error) => {
              console.error("Error reading file:", error);
            },
          });
        }
    }

    const filteredData = data.filter(row =>
        Object.values(row).some(value =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div>
            <Typography variant="h4" align="center" marginBottom={2}>
                Mapping Table
            </Typography>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                onChange={(e) => setSearchTerm(e.target.value)}
                margin="normal"
            />
            <input type="file" accept=".csv" onChange={handleFileChange} />
            {data.length > 0 && 
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Table1</TableCell>
                            <TableCell>Table2</TableCell>
                            <TableCell>Column1</TableCell>
                            <TableCell>Column2</TableCell>
                            <TableCell>Similarity_Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow>
                                <TableCell>{row.Table1}</TableCell>
                                <TableCell>{row.Table2}</TableCell>
                                <TableCell>{row.Column1}</TableCell>
                                <TableCell>{row.Column2}</TableCell>
                                <TableCell>{row.Similarity_Score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        }
        </div>
    );
};

export default TableComponent;