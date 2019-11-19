/* eslint-disable default-case */
import React, { Component } from 'react'

import { TabBar } from 'antd-mobile';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import History from './History';
import My from './My';
import Wechat from './Wechat';

export default class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '/home',
            list: [
                { id: 0, title: '首页', icon: 'home', url: '/home' },
                { id: 1, title: '历史', icon: 'history', url: '/home/history' },
                { id: 2, title: '微聊', icon: 'voice', url: '/home/wechat' },
                { id: 3, title: '我的', icon: 'nickname', url: '/home/my' }
            ]
        };
    }
    componentDidMount() {
        this.setState({ selectedTab: this.props.location.pathname })
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                {
                    <TabBar
                        // 未选中字体颜色
                        unselectedTintColor="#949494"
                        // 选中字体颜色
                        tintColor="#33A3F4"
                        // 背景颜色
                        barTintColor="white"
                    >

                        {this.state.list.map(v => {
                            return <TabBar.Item
                                title={v.title}
                                key={v.id}
                                icon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../../assets/images/' + v.icon + '.png')}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }
                                selectedIcon={<div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: `url(${require('../../assets/images/' + v.icon + '_s.png')}) center center /  21px 21px no-repeat`
                                }}
                                />
                                }

                                selected={this.state.selectedTab === v.url}
                                onPress={() => {
                                    this.props.history.push(v.url)
                                    this.setState({
                                        selectedTab: v.url,
                                    });
                                }}
                            >
                                {/* {this.renderContent(v.id)} */}

                                <HashRouter>
                                    <Switch>
                                        <Route path='/home' exact component={Home} />
                                        <Route path='/home/history' component={History} />
                                        <Route path='/home/my' component={My} />
                                        <Route path='/home/wechat' component={Wechat} />
                                    </Switch>
                                </HashRouter>


                            </TabBar.Item>
                        })}
                    </TabBar>
                }
            </div>

        )
    }
}
