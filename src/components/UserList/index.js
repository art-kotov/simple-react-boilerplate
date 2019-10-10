// Core
import React, { useContext } from "react";
import { observer, inject, MobXProviderContext } from "mobx-react";

const UserList = observer(() => {
  const { userStore } = useContext(MobXProviderContext);

  return (
    <div>
      <div>
        {userStore.userData.map(i => (
          <div>123</div>
        ))}
      </div>
      <button onClick={userStore.fetchUsers}>Fetch Users</button>
    </div>
  );
});

export default UserList;
