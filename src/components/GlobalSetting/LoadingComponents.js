import React from 'react'
// import styleLoading from '../LoadingComponents.scss';
import imgLoading from '../../assets/imgLoading/Bean Eater-1s-200px (1).gif'
import { useSelector } from 'react-redux';
import './LoadingComponents.scss'

export default function LoadingComponents(props) {

    //bốc tách phần tử
    const { isLoading } = useSelector(state => state.LoadingReducer)


    if (isLoading) {
        return (
            <div className="bg_loading">
                <img src={imgLoading} alt="Loading" />
            </div>
        )
    }
    else {
        return ''
    }
}
