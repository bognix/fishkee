import {combineReducers} from 'redux'

const initialState = {
    fishkee: []
}

const fishkee = (state = initialState, {type, ...payload}) => {
    switch(type) {
        default:
            return state
    }
}

export default combineReducers({
    fishkee
})
