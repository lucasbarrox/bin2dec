import React from 'react';

const Display = ({ inputBin, decNum }) => {
    return (
      <div className="display">
        {!inputBin.binary ? (
          <p className="info">
            Esperando por um número binário válido... 
          </p>
        ) : (
          <p>{decNum}</p>
        )}
      </div>
    )
  }

export default Display;