import { useState, useEffect } from 'react';


import LoginForm from '../components/LoginForm';
import LoginImage from '../components/LoginImage';
import Title from '../components/Title';

function LoginPage() {
  return (
    <>
      <main>
        <div className="login-container">
          <LoginImage />

          <div>
            <Title
              tag="h1"
              size="1.5rem"
              color="white"
            >
              Boas vindas de volta!
            </Title>
            <Title
              tag="h2"
              size="1rem"
              color="grey"
            >
              Discord - Samuel Pereira
            </Title>

            <LoginForm />
          </div>
        </div>
      </main>

      <style jsx>{`
          main {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .login-container {
            width: 85%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 8rem;
          }

          @media screen and (min-width: 640px) {
            .login-container {
              border: 1px solid #AB4FBB;
              width: 80%; 
              justify-content: space-around;
              flex-direction: row;
              align-items: center;
              border-radius: 10px;
              padding: 2rem 1rem;
              background-color: #4b2a69;
            }
          }
          @media screen and (min-width: 1024px) {
            .login-container {
              width: 53.12rem;
            }
          }
        `}</style>
    </>
  );
}

export default LoginPage;