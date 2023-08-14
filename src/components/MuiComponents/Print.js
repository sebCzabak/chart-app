import React, { useState, useRef } from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Print = ({ chartComponentRef, tabsContentRef }) => {
    const handlePrint = async () => {
        const chartCanvas = await html2canvas(chartComponentRef.current);
        const tabsCanvas = await html2canvas(tabsContentRef.current);

        const pdf = new jsPDF();
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (tabsCanvas.height * pdfWidth) / tabsCanvas.width;

        pdf.addImage(chartCanvas.toDataURL('image/png'), 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.addPage();
        pdf.addImage(tabsCanvas.toDataURL('image/png'), 'PNG', 0, 0, pdfWidth, pdfHeight);

        pdf.save('download.pdf');
    };



    return (
        <div>
            <button onClick={handlePrint}>Generate PDF</button>
        </div>
    );
};

export default Print;