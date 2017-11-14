import {UI} from './consts';

export const showDialog = () => {
    return {
        type: UI.SHOW_DIALOG,
        payload: {
            show: true
        }
    }
}

export const closeDialog = () => {
    return {
        type: UI.SHOW_DIALOG,
        payload: {
            show: false
        }
    }
}
