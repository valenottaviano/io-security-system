"use client"
import React, { useState, useEffect } from 'react';
import QrReader from 'modern-react-qr-reader';


const QRCodeReader = ({ setQrData }) => {
    return (
        <>
            <QrReader
                delay={300}
                facingMode={"environment"}
                onError={(err) => {
                    console.log(err)
                }}
                onScan={(data) => {
                    if (data) {
                        setQrData(data)
                    }
                }}
                style={{ width: '100%' }}
            />
        </>
    );
};

export default QRCodeReader;
