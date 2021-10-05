import React from 'react'

export default function InfoMain() {
    return (
        <>
            <h3>Jira Board</h3>
            <div className="info" style={{ display: 'flex' }}>
                <div className="search-block">
                    <input className="search" />
                    <i className="fa  fa-search" />
                </div>
                <div className="avatar-group" style={{ display: 'flex' }}>
                    <div className="avtar">
                        <img src="https://picsum/200/200" alt="avtar" />
                    </div>
                    <div className="avtar">
                        <img src="https://picsum/200/200" alt="avtar" />
                    </div>
                    <div className="avtar">
                        <img src="https://picsum/200/200" alt="avtar" />
                    </div>
                </div>
                <div className="text" style={{ marginLeft: 20 }}>
                    Only My Issues
                </div>
                <div className="text" style={{ marginLeft: 20 }}>
                    Recently Update
                </div>
            </div>
        </>


    )
}
