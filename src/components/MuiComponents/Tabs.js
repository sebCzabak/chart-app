import React from 'react';
import { createTheme, ThemeProvider, Tabs, Tab, Box } from '@mui/material';

const customTheme = createTheme({
    components: {
        MuiTabs: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1a1818',
                },
                indicator: {
                    backgroundColor: '#fff',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: '#fff',
                    '&.Mui-selected': {
                        color: '#fff',

                    },
                },
            },
        },
    },
});

const MyTabs = ({ selectedTab, handleTabChange }) => {
    return (
        <ThemeProvider theme={customTheme}>
            <Tabs value={selectedTab} onChange={handleTabChange} centered>
                <Tab label="Tab 1" />
                <Tab label="Tab 2" />
                <Tab label="Tab 3" />
            </Tabs>
        </ThemeProvider>
    );
};

export default MyTabs;
