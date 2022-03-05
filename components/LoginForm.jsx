import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import MyContext from '../context/myContext';
import getUserInfos from '../helpers/getUserInfos';

function LoginForm() {
  const [inputValue, setInputValue] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { userName, setUserName, userImage, setUserImage } = useContext(MyContext);

  const router = useRouter();

  async function handleChange({ target: { value } }) {
    setInputValue(value);

    const { user, imageUrl } = await getUserInfos(value);
  
    setUserName(user);
    setUserImage(imageUrl);

    if (value.length < 1) {
      setIsButtonDisabled(true);
      setUserName('SP-Sam');
      setUserImage('https://avatars.githubusercontent.com/u/72403810');
    } else if (user === undefined) {
      setUserName(value);
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const userInfos = {
      userName,
      userImage: userImage ? userImage : ''
    };
    
    localStorage.setItem('userInfos', JSON.stringify(userInfos));

    router.push('/chat');
  }

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          placeholder="Usuário do GitHub"
          value={ inputValue }
          onChange={ handleChange }
        />

        <button type="submit" disabled={isButtonDisabled}>
          Entrar
        </button>
      </form>

      <style jsx>{`
          form {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
          }

          input {
            padding: 0.8rem 0.5rem;
            background-color: #2f1646;
            border: 1px solid #3c0074;
            border-radius: 5px;
            color: white;
            font-size: 1rem;
          }
          input:focus {
            outline: 2px solid #512C7B;
          }

          button {
            margin-top: 5px;
            padding: 0.8rem 0;
            background-color: #AB4FBB;
            border: none;
            border-radius: 5px;
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

          @media screen and (min-width: 640px) {
            input {
              padding: 0.5rem;
            }
            button {
              padding: 0.5rem;
            }
          }
        `}</style>
    </>
  )
}

export default LoginForm;