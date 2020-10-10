/**
 * Abstract base type for entities
 */
export interface IBaseAbstract {
    id?: number;
    dateCreated?: Date;
    createdBy?: string;
    dateLastModified?: Date;
    lastModifiedBy?: string;
    lastChangeInfo?: string;
    deletedBy?: string;
}
/**
 * CustomTheme type
 */
export interface IProfile extends IBaseAbstract{
    name?: string;
    description?: string;
    properties?: string;
    bulmaProperties?: {primaryColor: string, primaryBackground: string};
}

/**
 * User type
 */
export interface IUser extends IBaseAbstract{
    uuid?: string;
    code?: string;
    name?: string;
    contactFirstName?: string;
    contactLastName?: string;
    contactTitle?: string;
    address?: string;
    email?: string;
    defaultURLSlug?: string
    customURLSlug?: string
    dateOfRegistration?: Date
    active?: boolean;
    profile?: IProfile;
    [key: string]: any
}

/**
 * State variable type
 */
export interface IState {
    users?: IUser[];
    user?: IUser | null; //This can be use for User to edit or User to view, depending on the function being carried out
    onAddUser: boolean;
    onViewUser: boolean;
    onEditUser: boolean;
    alert: {
        show: boolean,
        message: string,
        type: any //problem making string compatible with type '"info" | "success" | "link" |
    }
}

/**
 * Action type for Reducer
 */
export interface IAction {
    //Indicate possible reducer action types here as you identify them in your codes
    type: 'FetchDataSuccess' | 'FetchDataFailure' | 'HandleOnAddUser' 
    | 'HandleCancelCreate' | 'BeforeCreateUser' | 'CreateUserSuccess' 
    | 'CreateUserFailure' | 'BeforeDeleteUser' | 'DeleteUserSuccess' 
    | 'DeleteUserFailure'| 'HandleEditUser' | 'HandleCancelUpdate' 
    | 'BeforeUpdateUser' | 'UpdateUserSuccess' | 'UpdateUserFailure' 
    | 'HandleCloseAlert' | 'HandleViewUser' | 'HandleCloseViewUser';
    payload?: {users?: IUser[], usersCount?: number, user?: IUser, error?: Error, 
        id?: number | string}

}

/*
The idea below is to provide room for specifying read
https://github.com/typeorm/typeorm/blob/master/docs/find-options.md
*/
export interface IFindOptions {
    select?: string[];
    relations?: string[];
    skip?: number;
    take?: number;
    cache?: boolean;
    where?: {}[] | {};
    order?: {};

}