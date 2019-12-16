import {GO_TO_LOBBY, GENERATE_ROOM_ID} from '../actions/types'

const initialState = {
    goToLobby: false,
    room_id: ''
}


export default function userHomepageReducer(state = initialState, action) {
    switch(action.type) {
        case GO_TO_LOBBY:
            return {
                ...state,
                goToLobby: true
            }
        case GENERATE_ROOM_ID:
            return {
                ...state,
                room_id: action.payload
            }
        default:
            return {
                ...state
            }
    }
}