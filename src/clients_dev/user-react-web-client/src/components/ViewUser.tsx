/** This component is for displaying each item in the record, passed to it from UserList */
import React, { useContext } from 'react';
import { IUser } from '../app.interfaces';
import { AppContext } from '../App';

type Props = {
    user: IUser,
}

const ViewUser: React.FC<Props> = ({ user }) => {

    //declare applicable contexts
    const appContext = useContext(AppContext);

    //callback function for delete button onClick event. We could have also embedded this function definition directly rather than define it first here
    const onDeleteUser = () => {
        appContext!.handleDeleteUser!(user.id, appContext!.dispatch); ////notice here that we are invoking the handleDeleteUser() via appContext. The exclamation mark is because of the possible null which will not really happen
    };

    //callback function for edit button
    const onEditUser = () => {
        //appContext!.handleEditUser!(user.id, appContext!.dispatch); //notice here that we are invoking the handleEditUser() via appContext. The exclamation mark is because of the possible null which will not really happen
        appContext!.dispatch({ type: 'HandleEditUser', payload: { id: user.id } });
    };

    const onClickCloseButton = () => {
        appContext!.dispatch({type: 'HandleCloseViewUser'})
    }

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{`Details of ${user.name}`}</p>
                    <button className="delete" aria-label="close" onClick={onClickCloseButton}/>
                </header>
                <section className="modal-card-body">
                    {/*<!-- Content ... -->*/}
                    <div className="columns">
                        <div className="column is-two-fifths">
                            Code:
                        </div>
                        <div className="column">
                            {user.code}
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-two-fifths">
                            Name:
                        </div>
                        <div className="column">
                            {user.name}
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-two-fifths">
                            Contact firstname:
                        </div>
                        <div className="column">
                            {user.contactFirstName}
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-two-fifths">
                            Contact lastname:
                        </div>
                        <div className="column">
                            {user.contactLastName}
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-two-fifths">
                            Email:
                        </div>
                        <div className="column">
                            {user.email}
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-two-fifths">
                            Default URL Slug:
                        </div>
                        <div className="column">
                            {user.defaultURLSlug}
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-two-fifths">
                            Active:
                        </div>
                        <div className="column">
                            {user.active? "Yes" : "No"}
                        </div>
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <div className="buttons are-small">
                        <button className="button is-warning" onClick={onEditUser}>Edit</button>
                        <button className="button is-danger" onClick={() => { if (window.confirm('This action cannot be reversed! Are you sure you want to delete?')) onDeleteUser() }}>Delete</button>
                    </div>
                </footer>
            </div>
        </div>

    );
}

export default ViewUser;