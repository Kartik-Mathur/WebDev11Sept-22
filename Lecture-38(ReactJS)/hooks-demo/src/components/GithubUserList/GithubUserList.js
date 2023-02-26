import React from 'react'
import GithubUser from '../GithubUser/GithubUser';

const GithubUserList = (props) => {
    return (
        <div>
            {
                props.users.map((user) => {
                    return <GithubUser id={user.id} deleteUser={props.deleteUser} key={user.id} name={user.name} imgUrl={user.imgUrl} />
                })
            }
        </div>
    )
}

export default GithubUserList
