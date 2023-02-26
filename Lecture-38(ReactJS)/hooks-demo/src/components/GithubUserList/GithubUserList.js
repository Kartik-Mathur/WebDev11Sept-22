import React from 'react'
import GithubUser from '../GithubUser/GithubUser';
import { v4 as uuid } from 'uuid';


const GithubUserList = (props) => {
    return (
        <div>
            {
                props.users.map((user) => {
                    return <GithubUser key={user.id} name={user.name} imgUrl={user.imgUrl} />
                })
            }
        </div>
    )
}

export default GithubUserList
