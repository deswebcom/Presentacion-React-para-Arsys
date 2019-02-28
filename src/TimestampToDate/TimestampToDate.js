import React from 'react';

const TimestampToDate = (props) => {
  let date = new Date(parseInt(props.timestamp, 10));
  let fecha = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  return ( 
    <span>{fecha}</span>
  );
}

export default TimestampToDate;