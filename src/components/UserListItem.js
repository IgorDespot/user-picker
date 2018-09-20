import React from 'react';

const UserListItem = ({ id, name }) => (
  <a className="list-group-item">
    <h4 className="list-group-item-heading">{id}</h4>
    <p className="list-group-item-text">{name}</p>
  </a>
);

export default UserListItem;