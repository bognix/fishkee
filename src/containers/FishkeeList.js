import {connect} from 'react-redux'
import FishkeeList from '../components/FishkeeList'
import {showDialog} from '../actions'

const mapStateToProps = (state) => {
    return {
        fishkee: state.fishkee
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddButtonClick: () => dispatch(showDialog())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FishkeeList)
