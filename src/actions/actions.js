import Api from '../api/Api';

export const scope = 'USER_FETCH_REQUESTED';

export const getDataUsers = (dispatch, getState) => {
    Api.fetchUser({
        onSuccess: (data) => console.log(data),
        onError: (message) => console.log(message)
    });
};

export const USER_FETCH_REQUESTED = () => {
    
};
export const USER_FETCH_SUCCESS = () => {
    
};
export const USER_FETCH_ERROR = () => {
    
};