import React, { useState, useEffect } from 'react';
import dataFromFile from './data.json';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';

//TODO
const StudentData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(dataFromFile);
    }, []);

    if (!data) {

        return <div>Loading...</div>;
    }
    const StudentData = ({ data }) => {
        return (
            <Paper elevation={16} style={{ padding: '16px', borderRadius: '8px', maxWidth: '400px', backgroundColor: '#1a1818' }}>
                <Typography variant="h6" style={{ color: '#fff' }}>Dane studenta:</Typography>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{ color: '#fff' }}>Task ID:</TableCell>
                            <TableCell style={{ color: '#fff' }}>{data.task_id}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ color: '#fff' }}>Student GUID:</TableCell>
                            <TableCell style={{ color: '#fff' }}>{data.student_guid}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ color: '#fff' }}>Start Time:</TableCell>
                            <TableCell style={{ color: '#fff' }}>{new Date(data.start_time).toLocaleString('pl-PL')}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ color: '#fff' }}>End Time:</TableCell>
                            <TableCell style={{ color: '#fff' }}>{new Date(data.end_time).toLocaleString('pl-PL')}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        );
    };
    const TaskData = () => {
        return (
            <Paper elevation={16} style={{ padding: '16px', borderRadius: '8px', maxWidth: '400px', backgroundColor: '#1a1818' }}>
                <Typography variant="h6" style={{ color: '#fff' }}>Zadanie:</Typography>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{ color: '#fff' }}>Rodzaj próbki:</TableCell>
                            <TableCell style={{ color: '#fff' }}></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ color: '#fff' }}>Materiał:</TableCell>
                            <TableCell style={{ color: '#fff' }}></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ color: '#fff' }}>Grubość:</TableCell>
                            <TableCell style={{ color: '#fff' }}></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ color: '#fff' }}>Pozycja:</TableCell>
                            <TableCell style={{ color: '#fff' }}></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ color: '#fff' }}>Długość Spoiny:</TableCell>
                            <TableCell style={{ color: '#fff' }}></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ color: '#fff' }}>Technika:</TableCell>
                            <TableCell style={{ color: '#fff' }}></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ color: '#fff' }}>Ilość Spawów:</TableCell>
                            <TableCell style={{ color: '#fff' }}></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ color: '#fff' }}>Tryb asystenta:</TableCell>
                            <TableCell style={{ color: '#fff' }}></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        );
    };

    return (
        <Box p={2}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <StudentData data={dataFromFile} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TaskData />
                </Grid>
            </Grid>
        </Box>
    );
}

export default StudentData;
