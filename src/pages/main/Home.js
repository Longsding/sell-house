import React, { Component } from 'react';
import { Flex, WingBlank, Carousel, WhiteSpace, Grid } from 'antd-mobile';

import { withRouter } from 'react-router-dom';
import HomelistItem from '../../components/HomelistItem';

import { gethomelist } from '../../api/apis'



const data = [
    {
        icon: 'list (1).png',
        text: '新房'
    },
    {
        icon: 'list (2).png',
        text: '二手房'
    },
    {
        icon: 'list (3).png',
        text: '行房'
    }, {
        icon: 'list (4).png',
        text: '类房'
    }, {
        icon: 'list (5).png',
        text: '构房'
    }, {
        icon: 'list (6).png',
        text: '参房'
    }, {
        icon: 'list (7).png',
        text: '非房'
    }, {
        icon: 'list (8).png',
        text: '空房'
    },
].map(v => {
    return {
        icon: `${require('../../assets/images/' + v.icon)}`,
        text: v.text
    }
})

class Home extends Component {

    state = {
        city: '定位中..',
        // 轮播
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        imgHeight: 176,
        list: []

    }

    gotocity = () => {
        this.props.history.push('/citylist');
    }
    gotomap = () => {
        this.props.history.push('/map');
    }
    gotosearch = () => {
        this.props.history.push('/search');
    }

    componentDidMount() {
        const that = this;
        window.AMap.plugin('AMap.CitySearch', function () {
            var citySearch = new window.AMap.CitySearch()
            citySearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    that.setState({ city: result.city })
                }
            })
        })
        this.getlist()
    }

    getlist = () => {
        gethomelist()
            .then(res => {
                this.setState({ list: res.data.data })
            })
            .catch(e => {
                console.log(e);
            })
    }

    render() {
        const { city, list } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* 头部 */}
                <Flex style={{ height: 50, backgroundColor: '#8BCCED', textIndent: 10, fontSize: 14, position: 'relative' }}>
                    <div style={{ width: 100, color: '#fff' }} onClick={this.gotocity}>
                        {city}▼
                    </div>
                    <Flex style={{ flex: 1, backgroundColor: "#fff", borderRadius: 20, height: 40 }} onClick={this.gotosearch}>
                        <img style={{ width: 24, height: 24, marginLeft: 10 }} src={require('../../assets/images/search.png')} alt='' />
                        <span>挑好房 上源码搜房</span>
                    </Flex>
                    <Flex style={{ width: 50 }} justify='center' align='center'>
                        <img style={{ width: 30, height: 30 }} src={require('../../assets/images/address.png')} alt='' onClick={this.gotomap} />
                    </Flex>
                </Flex>
                {/* 轮播图 */}
                <div style={{ flex: 1, overflow: 'auto' }} >
                    <WhiteSpace size="sm" />
                    <WingBlank size="sm">
                        <Carousel
                            autoplay={true}
                            infinite
                        >
                            {this.state.data.map(val => (
                                <a
                                    key={val}
                                    href="http://www.alipay.com"
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img

                                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top', borderRadius: 5 }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>

                        <WhiteSpace size="sm" />
                        <WhiteSpace size="sm" />
                        {/* 宫格 */}
                        <Grid data={data} isCarousel />
                        <WhiteSpace size="sm" />
                        <WhiteSpace size="sm" />
                    </WingBlank>
                    {/* 猜你喜欢 */}
                    <div style={{ backgroundColor: '#fff', padding: 10, fontSize: 16 }}>猜你喜欢</div>
                    <div style={{ backgroundColor: '#fff', paddingLeft: 10, paddingRight: 10 }}>
                        {list.map(v => {
                            return <HomelistItem item={v} key={v.id} />
                        })}
                    </div>
                </div >
            </div >
        )
    }
}
export default withRouter(Home);
