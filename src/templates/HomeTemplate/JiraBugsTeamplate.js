import React from 'react'
import { Route } from 'react-router-dom'
import { Header } from 'antd/lib/layout/layout'
import SidebarJiraBugs from '../../components/JiraBugsJira/SidebarJiraBugs'
import MenuJiraBugs from '../../components/JiraBugsJira/MenuJiraBugs'
import InfoMain from '../../components/JiraBugsJira/Main/InfoMain'
import ContentMain from '../../components/JiraBugsJira/Main/ContentMain'
import HeaderMain from '../../components/JiraBugsJira/Main/HeaderMain'
import ModalJiraBugs from '../../components/JiraBugsJira/ModalJiraBugs/ModalJiraBugs'

export default function JiraBugsTeamplate(props) {
    //restParam là những thành phần con lại k được khai báo 
    const { Component, ...restParam } = props
    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <div className="jira">
                <SidebarJiraBugs />
                <MenuJiraBugs />
                <Component {...propsRoute} />
                <ModalJiraBugs />
            </div>
        </>
    }} />
}
