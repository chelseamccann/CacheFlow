import { connect } from 'react-redux';
import Portfolio from './portfolio';

const msp = state => {
    let userId = state.session.id;
    debugger
    return { currentUser: state.entities.users[userId] }
}

export default connect(msp, null)(Portfolio);