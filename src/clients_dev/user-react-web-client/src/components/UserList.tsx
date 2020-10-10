import React from 'react';
import { IUser } from '../app.interfaces';
import User from './User';
import UserListHeader from './UserListHeader';


//declare type for Props passed to this 
type Props = {
    users: IUser[],
}

const UserList: React.FC<Props> = (props) => {

    //prepare users for display in a table
    let userListRows = null;
    userListRows = props.users.map((user) => {
        return <User user={user} />
    })

    return (
        <div className="table is-striped is-narrow is-hoverable" >
            <caption><h3>Available users</h3></caption>
            <UserListHeader />
            <tbody>
                {userListRows}
            </tbody>
        </div>
    );
}

export default UserList;