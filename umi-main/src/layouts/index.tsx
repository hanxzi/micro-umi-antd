import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Redirect, Link, connect, useModel } from 'umi';
import type { Dispatch } from 'umi';
import styles from './index.css';
export type BasicLayoutProps = {
    dispatch: Dispatch<any>;
    currentUser?: any;
    children: any,
    loading?: boolean;
}
const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
    const { children, dispatch, loading, currentUser } = props;
    const [isReady, setIsReady] = useState<boolean>(false);
    const { globalState, setQiankunGlobalState } = useModel('@@qiankunStateForSlave');
    useEffect(() => {
        dispatch({
            type: 'user/fetchCurrent',
        });
        setIsReady(true);
    }, []);
    useEffect(() => {
        if (currentUser && currentUser.phone) {
            setQiankunGlobalState({ "slogan": JSON.stringify(currentUser) })
            console.log('globalState', globalState)
        }
    }, [currentUser]);

    const isLogin = currentUser && currentUser.phone;

    if ((!isLogin && loading) || !isReady) {
        return <div>loading</div>;
    }

    if (!isLogin && window.location.pathname !== '/user/login') {
        return <Redirect to={`/user/login`} />;
    }

    return <div>{children}</div>;
}

export default connect(({ user, loading }: any) => ({
    currentUser: user.currentUser,
    loading: loading.models.user,
}))(BasicLayout);
