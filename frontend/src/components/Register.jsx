import React from 'react';
import PropTypes from 'prop-types';
import Toggle from './common/Toggle';
import GithubButton from '../components/common/GithubButton';

const Register = ({ toggleForm }) => {
  return (
    <div className="card text-black bg-white dark:bg-black/70 dark:backdrop-blur-md w-full max-w-2xl h-[600px] shadow-2xl mb-32">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black dark:text-white">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered text-black dark:text-white bg-slate-200 dark:bg-black/60"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black dark:text-white">
              Password
            </span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered text-black dark:text-white bg-slate-200 dark:bg-black/60"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black dark:text-white">
              Confirm Password
            </span>
          </label>
          <input
            type="password"
            placeholder="confirm password"
            className="input input-bordered text-black dark:text-white bg-slate-200 dark:bg-black/60"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-custom-blue dark:bg-custom-red hover:bg-slate-400 hover:shadow-xl hover:scale-105 duration-300 dark:hover:bg-custom-black mb-4">
            Register
          </button>
        </div>

        <div className="form-control">
          <GithubButton text="Sign up with Github" />
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
