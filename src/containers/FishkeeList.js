import {connect} from 'react-redux'
import FishkeeList from '../components/FishkeeList'

const mapStateToProps = (state) => {
    return {
        fishkee: state.fishkee
    }
}

export default connect(mapStateToProps)(FishkeeList)
