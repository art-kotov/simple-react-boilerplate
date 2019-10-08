// Core
import React from "react";
import { useSelector, useDispatch } from "react-redux";
//Actions
import { usersActions } from "models/list/actions";

const UserList = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {users.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
      <button onClick={() => dispatch(usersActions.fetchUsersAsync())}>
        Fetch Users
      </button>
    </div>
  );
};

export default UserList;
