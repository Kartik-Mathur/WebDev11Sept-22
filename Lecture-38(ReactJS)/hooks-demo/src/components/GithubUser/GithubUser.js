import React from 'react'
import styles from './GithubUser.module.css'

const GithubUser = (props) => {
    function deleteHandler(){
        props.deleteUser(props.id);
    }

    return (
        <div className={styles.box}>
            <div className="username">
                {props.name} &nbsp;&nbsp;&nbsp;
                <button onClick={deleteHandler}>🗑</button>
            </div>
            <img className={styles.img} src={props.imgUrl} />
        </div>
    )
}

export default GithubUser
