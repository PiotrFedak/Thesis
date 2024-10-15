import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import NBAVerseImg from '../Images/NBAVerse.png';
import UserImg from '../Images/UserImg.png';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:pl-36 mt-36">
      <div className="w-full md:w-2/3 flex items-center justify-center order-2 md:order-1 mb-10 ml-16">
        <div className="w-full max-w-lg">
          <h1 className="text-4xl font-bold mb-6 text-center">
            {isLogin ? 'Login now!' : 'Register now!'}
          </h1>
          {isLogin ? (
            <Login toggleForm={toggleForm} />
          ) : (
            <Register toggleForm={toggleForm} />
          )}
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-60 order-1 md:order-2 md:mr-8 md:pr-56">
        <div className="w-full max-w-md space-y-16">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-16 md:w-20 rounded-full">
                <img alt="NBAVerse Logo" src={NBAVerseImg} />
              </div>
            </div>
            <div className="chat-header">
              NBAVerse
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">
              Zakładając konto na NBAVerse możesz dodawać swoje ulubione zespoły
              i łatwo śledzić zmiany w NBA!
            </div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>

          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-16 md:w-20 rounded-full">
                <img alt="User Avatar" src={UserImg} />
              </div>
            </div>
            <div className="chat-header">
              User
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">O naprawdę? Już zakładam konto!</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
