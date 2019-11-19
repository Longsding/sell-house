import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Flex, WhiteSpace, WingBlank, InputItem, Button } from 'antd-mobile';
import './login.scss';

import { userlogin } from '../../api/apis'


export default class Login extends Component {

    state = {
        username: '',
        pwd: ''
    }

    login = () => {
        const { username, pwd } = this.state
        userlogin({ phoneNum: username, password: pwd })
            .then((res) => {
                if (res.status === 200) {
                    const { data, token } = res.data;
                    window.localStorage.setItem('token', token);
                    window.localStorage.setItem('data', JSON.stringify(data));
                    console.log(this);
                    this.props.history.replace('/')
                }
            })
            .catch((e) => {
                console.log(e);
            })
    }

    changeuser = (value) => {
        this.setState({ username: value })
    }
    changepwd = (value) => {
        this.setState({ pwd: value })
    }
    render() {
        let { username, pwd } = this.state;

        return (
            <div className="login">
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <WhiteSpace size="xl" />
                <Flex justify="center">
                    <img style={{ width: "80px", height: "80px" }} src={require('../../assets/images/logo.png')} alt='' />
                </Flex>
                <WhiteSpace size="lg" />
                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                    <InputItem onChange={this.changeuser} placeholder="请输入手机号" value={username}>
                        <div style={{ backgroundImage: `url(${require('../../assets/images/user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="lg" />
                    <InputItem onChange={this.changepwd} placeholder="请输入密码" value={pwd}>
                        <div style={{ backgroundImage: `url(${require('../../assets/images/pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="lg" />
                    <WhiteSpace size="lg" />
                    <Button onClick={this.login} style={{ backgroundColor: "rgba(51,51,51,.4)", color: "#666" }}>登录</Button>
                    <WhiteSpace size="lg" />
                    <Flex justify="between">
                        <Link to="/res" style={{ color: "#666" }}>点击注册</Link>
                        <Link to="/forget" style={{ color: "#666" }}>忘记密码</Link>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
}
