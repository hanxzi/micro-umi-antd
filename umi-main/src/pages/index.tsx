import React from 'react';
import styles from './index.css';
import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;
import { Redirect, Link, connect, useModel } from 'umi';
export default function () {
    return (
        <div className={styles.normal}>
            <Layout className={styles.layout}>
                <Sider width={200} className={styles.sider}>
                    <Menu
                        mode="inline"
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="dashboard">
                            <Link to='/'>App1 Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key="user">
                            <Link to="/app-react">app-react</Link>
                        </Menu.Item>
                        <Menu.Item key="antd">
                            <Link to="/antd-pro">antd-pro</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
            <Content>
                <div className={styles.welcome} />
            </Content>
        </div>
    );
}
