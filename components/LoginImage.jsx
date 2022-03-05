import { useContext } from 'react';

import MyContext from '../context/myContext';

function LoginImage() {
  const { userName, userImage } = useContext(MyContext);

  return (
    <>
      {userImage === undefined
        ? (
          <div>
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="Foto padrão"
            />
            <span>{`Convidado (${userName})`}</span>
          </div>
        )
        : (
          <div>
            <img src={userImage} alt={`Imagem de ${userName}`} />
            <span>{userName}</span>
          </div>
        )}

      <style jsx>{`
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 11rem;
            margin-bottom: 1.5rem;
          }

          @media screen and (min-width: 640px) {
            div {
              margin: 0;
            }
          }

          img {
            width: 130px;
            border-radius: 50%;
            margin-bottom: 1rem;
            border: 1px solid #383838;
          }

          span {
            color: white;
            font-weight: bold;
            background-color: grey;
            padding: 0.2rem 0.4rem;
            border-radius: 1rem;
          }
        `}</style>
    </>
  );
}

export default LoginImage;