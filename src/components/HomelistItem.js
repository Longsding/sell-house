import React, { Component } from 'react'
import { Flex } from 'antd-mobile'

export default class HomelistItem extends Component {

    static defineProps = {
        item: {}
    }

    render() {
        const { item } = this.props
        return (
            <Flex style={{ borderBottom: '1px solid #ccc', paddingBottom: 10, paddingTop: 10 }}>
                <img style={{ width: 100, height: 100 }} src={item.pic} alt='' />
                <Flex direction="column" align='start' justify='between' style={{ flex: 1, height: 100, padding: 10 }}>
                    <Flex justify='between' style={{ fontSize: 16, fontWeight: 'bold', width: '100%' }}>
                        <div>{item.name}</div>
                        <div style={{ color: 'red' }}>{item.price}/平</div>
                    </Flex>
                    <div>{item.address}</div>
                    <div>四室两厅</div>
                </Flex>
            </Flex>
        )
    }
}
