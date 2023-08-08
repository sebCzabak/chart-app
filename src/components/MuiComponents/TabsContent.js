import React from 'react';
import { Typography } from '@mui/material';
import studentImg from '../images/studentImg.jpg';
import exampleImg from '../images/example.png';
import StudentData from '../StudentData';
import Overview from '../Overview';

const TabContent1 = () => {
    return (
        <Typography>
            <StudentData />

        </Typography>
    );
};

const TabContent2 = () => {
    return (
        <Typography>
            <Overview />
            <div className='image-container'>
                <img src={studentImg} alt='Example' />
            </div>
        </Typography>
    );
};

const TabContent3 = () => {
    return (
        <Typography>
            <div className='image-container'>
                <img src={exampleImg} alt='Example' />
            </div>
        </Typography>
    );
};

export { TabContent1, TabContent2, TabContent3 };
