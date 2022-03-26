import Image from 'next/image';
import { useState } from 'react';
import sendIcon from '../public/sendIcon.png';

function ChatForm({ userName, supabase }) {
  const [inputValue, setInputValue] = useState('');

  function handleChange({ target: { value } }) {
    setInputValue(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const newMessage = {
      from: userName,
      message: inputValue
    };

    await supabase.from('messages').insert([newMessage]);

    setInputValue('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='Digite sua mensagem'
          onChange={handleChange}
          value={inputValue}
        />

        <button type="submit">
          <Image src={sendIcon} />
        </button>
      </form>

      <style jsx>{`
          form {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }

          input {
            width: 80%;
            padding: 0.8rem;
            background-color: #2f1646;
            border: 1px solid #3c0074;
            border-radius: 3px;
            color: white;
          }
          input:focus {
            outline: 2px solid #512C7B;
          }

          button {
            width: 19%;
            padding: 0.5rem;
            background-color: #AB4FBB;
            border: none;
            border-radius: 3px;
            font-weight: bold;
            color: white;
          }
          button:hover {
            background-color: #9b00b6;
            cursor: pointer;
            transition: 0.15s;
          }
          button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transition: 0.15s;
          }
          button:disabled:hover {
            background-color: #AB4FBB;
          }
        `}</style>
    </>
  )
}

export default ChatForm;