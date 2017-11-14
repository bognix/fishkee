import {connect} from 'react-redux'
import {closeDialog} from '../actions'
import Dialog from '../components/Dialog'

const mapStateToProps = (state) => {
    return {
        show: state.ui.showDialog
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDialogClose: () => dispatch(closeDialog())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialog)
