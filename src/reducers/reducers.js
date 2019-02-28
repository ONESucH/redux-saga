import {
    scope,
    USER_FETCH_REQUESTED,
    USER_FETCH_SUCCESS,
    USER_FETCH_ERROR
} from '../actions/actions';

const accountingPrices = (state = {}, action) => {
    if (action.scope !== scope) return state;

    switch (action.type) {
        case USER_FETCH_REQUESTED:
            return {
                isPending: 'USER_FETCH_REQUESTED'
            };
        case USER_FETCH_SUCCESS:
            return {
                ...state,
                isPending: true,
                data: []
            };
        case USER_FETCH_ERROR:
            return {
                ...state,
                isPending: false,
                data: []
            };
        default:
            return state;
    }
};

export default accountingPrices;
