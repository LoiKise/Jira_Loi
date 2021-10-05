import React, { useState } from 'react'
import styleSideBar from '../../index.scss'
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    BarsOutlined,
    UploadOutlined,
    PlusOutlined,
    SearchOutlined
} from '@ant-design/icons';


const { Header, Sider, Content } = Layout;

export default function SidebarJiraBugs(props) {


    const [state, setState] = useState({
        collapsed: false,
    })

    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        });
    };

    return (
        <div>
            <Sider trigger={null} collapsible collapsed={state.collapsed} style={{ minHeight: '100vh' }}>
                <div className="text-right pr-2" onClick={toggle} ><BarsOutlined style={{ cursor: 'pointer', color: '#fff', fontSize: 25 }} /></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<PlusOutlined style={{ fontSize: '20' }} />}>
                        Create task
                    </Menu.Item>
                    <Menu.Item key="2" icon={<SearchOutlined style={{ fontSize: '20' }}/>}>
                        Search
                    </Menu.Item>
                </Menu>
            </Sider>
        </div >
    )
}
