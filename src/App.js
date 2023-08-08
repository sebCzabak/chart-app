import React from 'react';
import { createTheme, ThemeProvider, AppBar, Toolbar, Typography, Grid, Card, CardContent, IconButton } from '@mui/material';
import ThreeDChart from './components/ThreeDChart';
import MyTabs from './components/MuiComponents/Tabs';
import { TabContent1, TabContent2, TabContent3 } from './components/MuiComponents/TabsContent';
import Share from './components/MuiComponents/Share';
import Print from './components/MuiComponents/Print';

const customTheme = createTheme({

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1818',
        },
      },
    },
  }
});

const App = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6">DIGINVISION</Typography>
            <div style={{ flexGrow: 1 }} /> {/* Pusty element, aby przyciski były na końcu */}
            <IconButton color="inherit">
              Share {/* Ikona "udostępnij jeszcze pusta " */}
            </IconButton>
            <IconButton color="inherit">
              <Print /> {/* Ikona "Drukuj jeszcze pusta " */}
            </IconButton>
          </Toolbar>
        </AppBar>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} className="left-column">
            <div className="chart-container">
              <ThreeDChart className="chart" />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="right-column">
            <MyTabs selectedTab={selectedTab} handleTabChange={handleTabChange} />
            <div className="tabs-content">
              {selectedTab === 0 && <TabContent1 />}
              {selectedTab === 1 && <TabContent2 />}
              {selectedTab === 2 && <TabContent3 />}
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};


export default App;





