import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toggle from './common/Toggle';
import GithubButton from '../components/common/GithubButton';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import axiosClientWeb from '../lib/axiosClientWeb';

const Login = ({ toggleForm }) => {
  const { t } = useTranslation();
  const { setToken, setUser } = useStateContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClientWeb.post('/api/login', {
        email: formData.email,
        password: formData.password,
      });

      if (response.data && response.data.token) {
        setToken(response.data.token);
        setUser(response.data.user);
        setError(null);
        navigate('/');
      } else {
        setError(t('loginFailed'));
      }
    } catch (err) {
      setError(t('loginFailed'));
    }
  };

  const handleGithubClick = () => {
    const nameG = 'github';
    axiosClientWeb
      .get(`/auth/${nameG}/redirect`)
      .then(({ data }) => {
        window.location.href = data.authUrl;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card text-black bg-white dark:bg-black/70 dark:backdrop-blur-md w-full max-w-2xl h-[600px] shadow-2xl mb-32">
      <form className="card-body" onSubmit={handleSubmit}>
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <div className="form-control">
          <label className="label">
            <span className="label-text text-black dark:text-white">
              {t('email')}
            </span>
          </label>
          <input
            type="email"
            name="email"
            placeholder={t('emailPlaceholder')}
            className="input input-bordered text-black dark:text-white bg-slate-200 dark:bg-black/60"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-black dark:text-white">
              {t('password')}
            </span>
          </label>
          <input
            type="password"
            name="password"
            placeholder={t('passwordPlaceholder')}
            className="input input-bordered text-black dark:text-white bg-slate-200 dark:bg-black/60"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control mt-12">
          <button
            id="SubmitLogin"
            className="btn text-white bg-custom-blue dark:bg-custom-red hover:bg-slate-400 hover:shadow-xl hover:scale-105 duration-300 dark:hover:bg-custom-black mb-4"
          >
            {t('login')}
          </button>
        </div>

        <div className="form-control">
          <GithubButton
            text={t('signInWithGithub')}
            onClick={handleGithubClick}
          />
        </div>

        <Toggle toggleForm={toggleForm} isLogin={true} />
      </form>
    </div>
  );
};

Login.propTypes = {
  toggleForm: PropTypes.func.isRequired,
};

export default Login;
