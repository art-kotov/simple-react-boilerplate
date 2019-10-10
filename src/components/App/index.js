// Core
import React from "react";
import Reactotron from "reactotron-react-js";
//Instruments
import "theme/index.scss";
//Components
import UserList from "../UserList";

const App = () => {
  Reactotron.log("hello rendering world");
  return (
    <div>
      <UserList />
    </div>
  );
};

export default App;
