import React, {useState} from 'react';
import './qrcode-generator.css';
import QRCode from 'qrcode.react'

function QrcodeGenerator() {
    const [value, setValue] = useState('');
    const handleInputChange = (e) => {
        const val = e.target.value;
        setValue(val);
    }
    return (
        <div className={"container"}>
            <QRCode
                value={value}
                size={150}
                renderAs="svg"
            />
            <hr/>
            <input value={value} onInput={handleInputChange}/>
        </div>
    );
}

export default QrcodeGenerator;
