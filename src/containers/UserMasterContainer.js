import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserMasterPage from '../pages/UserMasterPage';
import * as userActions from '../actions';

class UserMasterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentWillMount() {
    this.props.actions.requestAllUsers();
  }
  render() {
    return (
      <div>
        { this.props.users ?
          <UserMasterPage
            users={this.props.users}
          />
          :
          <div>Loading Users...</div>
        }
      </div>
    );
  }
};

const mapStateToProps = state => ({
  users: state.userReducer.users,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, userActions), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMasterContainer);