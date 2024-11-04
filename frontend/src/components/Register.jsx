import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Toggle from './common/Toggle';
import GithubButton from '../components/common/GithubButton';
import { useTranslation } from 'react-i18next';

const Register = ({ toggleForm }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        ' https://pleased-usually-corgi.ngrok-free.app/api/register',
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.password_confirmation,
        }
      );
      setSuccess(t('registrationSuccess'));
      setError(null);
      console.log(response.data);
    } catch (err) {
      setError(err.response?.data?.message || t('registrationFailed'));
      setSuccess(null);
    }
  };

  return (
    <div className="card text-black bg-white dark:bg-black/70 dark:backdrop-blur-md w-full max-w-2xl h-[600px] shadow-2xl mb-32">
      <form className="card-body" onSubmit={handleSubmit}>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}

        <div className="form-control">
          <label className="label">
            <span className="label-text text-black dark:text-white">
              {t('name')}
            </span>
          </label>
          <input
            type="text"
            name="name"
            placeholder={t('namePlaceholder')}
            className="input input-bordered text-black dark:text-white bg-slate-200 dark:bg-black/60"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

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

        <div className="form-control">
          <label className="label">
            <span className="label-text text-black dark:text-white">
              {t('confirmPassword')}
            </span>
          </label>
          <input
            type="password"
            name="password_confirmation"
            placeholder={t('confirmPasswordPlaceholder')}
            className="input input-bordered text-black dark:text-white bg-slate-200 dark:bg-black/60"
            value={formData.password_confirmation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn text-white bg-custom-blue dark:bg-custom-red hover:bg-slate-400 hover:shadow-xl hover:scale-105 duration-300 dark:hover:bg-custom-black mb-4">
            {t('register')}
          </button>
        </div>

        <div className="form-control">
          <GithubButton text={t('signUpWithGithub')} />
        </div>

        <Toggle toggleForm={toggleForm} isLogin={false} />
      </form>
    </div>
  );
};

Register.propTypes = {
  toggleForm: PropTypes.func.isRequired,
};

export default Register;
