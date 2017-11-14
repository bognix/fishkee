import {combineReducers} from 'redux'

const initialState = {
    fishkee: [1]
}

const fishkee = (state = initialState, {type, ...payload}) => {
    switch(type) {
        default:
            return state.fishkee
    }
}

export default combineReducers({
    fishkee
})
