import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Login from './Login';
import Register from './Register';
import NBAVerseImg from '../Images/NBAVerse.png';
import UserImg from '../Images/UserImg.png';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { t } = useTranslation();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 mt-36">
      <div className="w-full md:w-2/3 flex items-center justify-center mb-10 order-2 md:order-1">
        <div className="w-full max-w-lg mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">
            {isLogin ? t('auth.loginNow') : t('auth.registerNow')}
          </h1>
          {isLogin ? (
            <Login toggleForm={toggleForm} />
          ) : (
            <Register toggleForm={toggleForm} />
          )}
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-8 md:mb-60 order-1 md:order-2 md:mr-8">
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
            <div className="chat-bubble">{t('auth.nbaverseAccount')}</div>
            <div className="chat-footer opacity-50">{t('auth.delivered')}</div>
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
            <div className="chat-bubble">{t('auth.userReply')}</div>
            <div className="chat-footer opacity-50">
              {t('auth.seenAt')} 12:46
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
