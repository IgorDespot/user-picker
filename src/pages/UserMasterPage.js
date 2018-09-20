import React from 'react';
import UserListItem from '../components/UserListItem';

const UserMasterPage = ({ users }) => (
  <div>
    { users.length > 0 ?
      <div className="list-group list-scrollable">
        { users.map(user =>
          <UserListItem
            key={user.id}
            id={user.id}
            name={user.name}
          /> 
        )}
      </div> :
      <div>No Users...</div>
    }
  </div>
);

export default UserMasterPage;