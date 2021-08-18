import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import loader from "./bll/krutilka.gif"
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch ()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {dispatch(loadingAC(false))},  5000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading ? (<div><img src={loader}/></div>) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
        </div>
    )
}

export default HW10
