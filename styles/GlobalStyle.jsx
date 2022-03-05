import React from 'react';

function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: sans-serif;
        background-color: #3F3545;
        font-size: 16px;
      }
    `}</style>
  )
}

export default GlobalStyle;