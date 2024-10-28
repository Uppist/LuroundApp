/** @format */

import { useState } from "react";

export default function Login({ logindetail, Submit, LoginDetail }) {
  return (
    <form onSubmit={Submit}>
      <div>
        <div className='login'>
          <label>Login</label>

          <div className='login-detail'>
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={logindetail.email}
              onChange={(e) => LoginDetail(e)}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={logindetail.password}
              onChange={(e) => LoginDetail(e)}
            />
          </div>
          <div className='password-check'>
            <div className='check-pass'>
              <input type='checkbox' className='checkbox box' />
              <label>Show Password</label>
            </div>
            <label>Forgot Password?</label>
          </div>
          <div className='login-button'>
            <button type='submit'>login</button>
            <label>
              Don't have an account? <span>Sign up</span>
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}
