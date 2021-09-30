const INITIAL_STATE = {
    ip: '192.181.19.0',
    location: {
        city: 'SAO PAULO',
        timezone: 'UTC -05:00'
    },
    as:{
        name:'SPACE X STARLINK'
    },
} || null;

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'REQUEST_FETCHING':
            return { ...state, fetching: true }
        case 'REQUEST_SUCCESS':
            return { fetching: false, state: action.payload }
        case 'REQUEST_ERROR':
            return { ...state, fetching: false }
        default:
            return state;
    }
}
