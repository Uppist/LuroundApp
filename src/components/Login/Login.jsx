/** @format */

import styles from "./Login.module.css";

export default function Login({ logindetail, Submit, LoginDetail }) {
  return (
    <form onSubmit={Submit}>
      <div>
        <div className={styles.login}>
          <label>Login</label>

          <div className={styles.logindetail}>
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
          <div className={styles.passwordcheck}>
            <div className={styles.checkpass}>
              <input type='checkbox' className='checkbox box' />
              <label>Show Password</label>
            </div>
            <label>Forgot Password?</label>
          </div>
          <div className={styles.loginbutton}>
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
