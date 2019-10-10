// Core
import React, { useContext } from "react";
import { observer, MobXProviderContext } from "mobx-react";

const UserList = observer(() => {
  const { userStore } = useContext(MobXProviderContext);

  return (
    <div>
      <div>
        {userStore.userData.map(i => (
          <div key={i.id}>{i.name}</div>
        ))}
      </div>
      <button onClick={userStore.fetchUsers}>Fetch Users</button>
    </div>
  );
});

export default UserList;
