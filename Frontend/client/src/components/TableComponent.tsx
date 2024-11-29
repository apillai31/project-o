import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableSortLabel, TableHead, TableRow, TextField, Paper, Typography } from '@mui/material';
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
    const [headers, setHeaders] = useState<DataRow[]>([]);
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('');

    const handleFileChange = (event:any) => {
        const file = event.target.files[0];
        if (file) {
          Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            dynamicTyping: true,
            complete: (results:any) => {
              setData(results.data);
              setHeaders(Object.keys(results.data[0]))
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
                            {headers.map((header) => (
                                <TableCell key={header}>
                                    <TableSortLabel>{header}</TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index}>
                            {headers.map((header) => (
                                <TableCell key={header}>{row[header]}</TableCell>
                            ))}
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