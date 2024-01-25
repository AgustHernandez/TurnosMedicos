import React from 'react';
import { Calendar, theme } from 'antd';
import { useGlobalContext } from './utils/global.context';

/*const onPanelChange = (value, mode, onFechaChange) => {
  const formattedDate = value.format('YYYY-MM-DD');
  console.log(formattedDate, mode);
  onFechaChange(formattedDate);
};*/

function Calendario() {
  const {changeFecha} = useGlobalContext()

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
            changeFecha(date.$d);
          }
        }}
        fullscreen={false}
      />
    </div>
  );
}

export default Calendario;
