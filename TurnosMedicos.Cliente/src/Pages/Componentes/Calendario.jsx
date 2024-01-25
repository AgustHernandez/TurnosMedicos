import React from 'react';
import { Calendar, theme } from 'antd';

const onPanelChange = (value, mode, onFechaChange) => {
  const formattedDate = value.format('YYYY-MM-DD');
  console.log(formattedDate, mode);
  onFechaChange(formattedDate);
};

function Calendario({ onFechaChange }) {
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
        fullscreen={false}
        onPanelChange={(value, mode) => onPanelChange(value, mode, onFechaChange)}
      />
    </div>
  );
}

export default Calendario;
