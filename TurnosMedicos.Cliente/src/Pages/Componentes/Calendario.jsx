import { useState } from 'react';
import { Calendar, theme } from 'antd';


const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};

function Calendario() {
    const { token } = theme.useToken();
    const wrapperStyle = {
        width: 381,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
        
    };
    return (
        <div style={wrapperStyle}>
            <Calendar
                onSelect={(date, { source }) => {
                    if (source === 'date') {
                        console.log('Panel Select:', JSON.stringify(date.$d));
                    }
                }}
                fullscreen={false} onPanelChange={onPanelChange} />
        </div>
        );
}

export default Calendario