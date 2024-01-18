import { useState } from 'react';
import { Calendar, theme } from 'antd';


const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};
function Calendario() {
    const { token } = theme.useToken();
        const wrapperStyle = {
            width: 1000,
            border: `1px solid ${token.colorBorderSecondary}`,
            borderRadius: token.borderRadiusLG,
            marginTop: 30 
        };
    return (
        <div style={wrapperStyle}>
            <Calendar fullscreen={true} onPanelChange={onPanelChange} />
        </div>
        );
}

export default Calendario