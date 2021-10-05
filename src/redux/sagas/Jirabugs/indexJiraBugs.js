import React from 'react'
import ContentMain from '../../../components/JiraBugsJira/Main/ContentMain'
import HeaderMain from '../../../components/JiraBugsJira/Main/HeaderMain'
import InfoMain from '../../../components/JiraBugsJira/Main/InfoMain'

export default function indexJiraBugs() {
    return (
        <div className="main">
            <HeaderMain />
            <InfoMain />
            <ContentMain />
        </div>
    )
}
