// Core
import React from "react";
import { func, array } from "prop-types";
import { connect } from "react-redux";
//Actions
import { usersActions } from "models/list/actions";

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = {
  fetchUsersAsync: usersActions.fetchUsersAsync
};

const UserList = ({ users = [], fetchUsersAsync }) => {
  return (
    <div>
      <div>
        {users.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
      <button onClick={fetchUsersAsync}>Fetch Users</button>
    </div>
  );
};

UserList.propTypes = {
  fetchUsersAsync: func.isRequired,
  users: array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
