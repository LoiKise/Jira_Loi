import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd';
// thư viện antd
const { Sider, Content } = Layout;


export const UserTemplate = (props) => {


    const [{ width, height }, setSize] = useState({ width: Math.round(window.innerWidth), height: Math.round(window.innerHeight) })

    useEffect(() => {

        window.onresize = () => {
            setSize({
                height: Math.round(window.innerHeight),
                width: Math.round(window.innerWidth)
            })

        }


    }, [])

    let { Component, ...restRoute } = props;

    return <Route {...restRoute} render={(propsRoute) => {
        return <>
            <Layout>

                <Sider width={width / 2} style={{ height: height, backgroundImage: `url(https://picsum.photos/${Math.round(width / 2)}/${height})`, backgroundSize: '100%' }}>

                </Sider>

                <Content>
                    <Component {...propsRoute} />
                </Content>

            </Layout>
        </>
    }} />

}