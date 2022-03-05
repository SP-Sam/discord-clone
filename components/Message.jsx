import React from 'react';

function Message({ message, userName }) {
  return (
    <>
      <div className='message-container'>
        <div>
          <img src={`https://github.com/${userName}.png`} alt={`Imagem de ${userName}`} />
          <span>{userName}</span>
        </div>
        <p>
          {message}
        </p>
      </div>

      <style jsx>{`
          .message-container {
            display: flex;
            flex-direction: column;
            width: 99%;
          }

          .message-container div {
            display: flex;
            align-items: center;
            height: 40px;
            margin-bottom: 5px;
          }
          img {
            width: 30px;
            border-radius: 30%;
            margin-right: 10px;
          }
          span {
            color: #acacac;
          }
          
        `}</style>
    </>
  )
}

export default Message