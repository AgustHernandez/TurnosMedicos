import React from 'react';
import { Calendar, theme } from 'antd';
import { useGlobalContext } from './utils/global.context';

const onPanelChange = (value, mode, onFechaChange) => {
  const formattedDate = value.format('YYYY-MM-DD');
  console.log(formattedDate, mode);
  onFechaChange(formattedDate);
};

function Calendario({ onFechaChange }) {
  const {changeFecha} = useGlobalContext()
  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 1000,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  
  return (
    <div style={wrapperStyle}>
      <Calendar
        onChange ={(date) => {
            changeFecha(JSON.stringify(date.$d));
        }}
        fullscreen={false}
        onPanelChange={(value, mode) => onPanelChange(value, mode, onFechaChange)}
      />
    </div>
  );
}

export default Calendario;
