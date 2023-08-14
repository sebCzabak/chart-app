import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import dataFromFile from './data.json';
import Axios from './Axios';

const ThreeDChart = () => {
    const [data, setData] = useState(null);

    // uzywać tego jak bedzie podany url do servera z danymi;
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const jsonData = await Axios.fetchJsonData('url');
    //             setData(jsonData);
    //         } catch (error) {
    //             console.error("Error when fetching the data", error);
    //         }
    //     };
    //     fetchData();
    // },[]);


    //pobieranie lokalnego jsona
    useEffect(() => {
        if (dataFromFile) {
            setData(dataFromFile.data);
        }
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }
    const xValues = [...data.map((sample) => sample.coordinate_x)];
    const yValues = [...data.map((sample) => sample.coordinate_y)];
    const zValues = [...data.map((sample) => sample.coordinate_z)];
    const distToSplineValues = data.map((sample) => sample.dist_to_spline * 10);

    const trace = {
        type: 'scatter3d',
        mode: 'lines+markers',
        line: {
            color: 'white',
        },
        x: xValues,
        y: yValues,
        z: zValues,

        marker: {
            size: 5,
            color: distToSplineValues,
            colorscale: 'Jet',
            colorbar: {
                title: 'Distance to Spline',
            },
        }
    };

    const layout = {
        title: 'Wykres 3D',
        font: {
            color: 'white',
        },
        scene: {
            camera: { eye: { x: -1.97, y: -0.88, z: 0.64 } },
        },
        autosize: true,
        width: 800,
        height: 800,

        margin: {
            l: 50,
            r: 50,
            b: 55,
            t: 100,
        },
        paper_bgcolor: '#1a1818',
        xaxis: {
            gridcolor: '#ffffff',
            linecolor: '#ffffff',
        },
        yaxis: {
            gridcolor: '#ffffff'
        },
    };

    return (
        <Plot
            layout={layout}
            data={[trace]}

        />
    );
};

export default ThreeDChart;
