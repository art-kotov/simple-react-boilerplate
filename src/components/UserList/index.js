// Core
import React from "react";
import { observer, inject } from "mobx-react";

const UserList = inject("userStore")(
  observer(props => {
    console.log(props);
    return (
      <div>
        <div>
          {props.userStore.userData.map(i => (
            <div>123</div>
          ))}
        </div>
        <button onClick={props.userStore.fetchUsers}>Fetch Users</button>
      </div>
    );
  })
);

export default UserList;
