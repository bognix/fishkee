import {combineReducers} from 'redux'
import {UI} from './consts'

const initialState = {
    fishkee: [1],
    ui: {
        showDialog: false
    }
}

const fishkee = (state = initialState.fishkee, {type, payload}) => {
    switch(type) {
        default:
            return state
    }
}

const ui = (state = initialState.ui, {type, payload}) => {
    switch(type) {
        case UI.SHOW_DIALOG:
            return {
                ...state,
                showDialog: payload.show
            }
        default:
            return state
    }
}

export default combineReducers({
    fishkee,
    ui
})
