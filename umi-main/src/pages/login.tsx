import React from 'react';
import { connect } from 'umi';
import styles from './login.css';

const Login: React.FC<any> = (props) => {
  const { children, dispatch, currentUser } = props;
  const onFinishLogin = () => {
    dispatch({
      type: 'user/login',
    });
  }
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <button onClick={() => onFinishLogin()}>
          登录
        </button>
      </ul>
    </div>
  );
}

export default connect(({ user, loading }: any) => ({
  currentUser: user.currentUser,
}))(Login);
