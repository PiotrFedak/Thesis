import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import Toggle from './comon/Toggle';

const Login = ({ toggleForm }) => {
  return (
    <div className="card bg-base-100 w-full max-w-2xl h-[600px] shadow-2xl mb-32">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary mb-4">Login</button>
        </div>

        <div className="form-control">
          <button className="btn btn-outline">
            <FaGithub className="mr-2" /> Sign in with Github
          </button>
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
