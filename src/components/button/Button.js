import React from 'react';

function Button(props) {
  return <button
    onClick={props.next}
    style={{
      background: 'silver',
      border: 'none',
      padding: '8px 15px',
      marginBottom: '10px',
      cursor: 'pointer'
    }}>
    ☻ Сделать запрос ☻
  </button>;
}

export default Button;