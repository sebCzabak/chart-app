import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableRow, Typography, useTheme } from '@mui/material';
import dataFromFile from './data.json';

const patternDataFields = [
    { name: "Seam Number", value: 1 },
    { name: "Current", value: 16 },
    { name: "Wire Feed Speed", value: 19 },
    { name: "Traveling Speed", value: 115 },
    { name: "Shielding Gas Flow Rate", value: 3 }
];

const Overview = () => {
    const [data, setData] = useState(null);
    const theme = useTheme();

    useEffect(() => {
        setData(dataFromFile);
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <Box p={2}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <PatternData />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ResultData data={dataFromFile} />
                </Grid>
            </Grid>
        </Box>
    );
};

const PatternData = () => {
    return (
        <Paper elevation={24} style={{ padding: '16px', borderRadius: '8px', maxWidth: '400px', backgroundColor: '#1a1818' }}>
            <Typography variant="h6" style={{ color: '#fff' }}>Wymagane Parametry:</Typography>
            <Table>
                <TableBody>
                    {patternDataFields.map((field, index) => (
                        <TableRow key={index}>
                            <TableCell style={{ color: '#fff' }}>{field.name}:</TableCell>
                            <TableCell style={{ color: '#fff' }}>{field.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};
//TODO
const ResultData = ({ data }) => {
    const resultData = data.data[0] || {};
    console.log("nnie ma");

    return (
        <Paper elevation={16} style={{ padding: '16px', borderRadius: '8px', maxWidth: '400px', backgroundColor: '#1a1818' }}>
            <Typography variant="h6" style={{ color: '#fff' }}>Przegląd wyników:</Typography>
            <Table>
                <TableBody>
                    {patternDataFields.map((field, index) => {
                        const additionalValue = resultData[field.name.toLowerCase()];

                        const isInRange = additionalValue >= (field.value - 3) && additionalValue <= (field.value + 3);

                        return (
                            <TableRow key={index}>
                                <TableCell style={{ color: '#fff' }}>{field.name}:</TableCell>
                                <TableCell style={{ color: isInRange ? '#fff' : 'red' }}>{additionalValue}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default Overview;
