import React from 'react'
import { useSelector } from 'react-redux'

export default function Home(props) {

    const userLogin = useSelector(state => state.UserLoginJiraBugReducer.userLogin)


    const renderUserLogin = () => {
        if (userLogin != null) {
            return (
                <div>
                    Hello!!    {userLogin.name}
                    <img src={userLogin.avatar} alt='avtar' />
                </div>
            )
        }
        else {
            return (
                <h1>
                    mời bạn đăng nhập
                </h1>
            )
        }
    }
    return (
        <div>
            {renderUserLogin()}
        </div>
    )
}
