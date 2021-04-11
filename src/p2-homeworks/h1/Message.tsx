import React from 'react'
import classes from './Message.module.css'

type MassageType = {
    name: string
    message: string
    time: string
    avatar: string
}

function Message(props: MassageType) {
    return <div className={classes.messageComponent}>
        <img src={props.avatar} className={classes.avatar}/>

        <div className={classes.angle}/>

        <div className={classes.content}>
            <div className={classes.name}>{props.name}</div>
            <div className={classes.message}> {props.message}</div>
            <div className={classes.time}> {props.time} </div>
        </div>

    </div>
        }

        export default Message;
