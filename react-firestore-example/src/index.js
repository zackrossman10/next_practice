import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "react-notifications/lib/notifications.css";

import { NotificationContainer } from "react-notifications";
import RegisterUser from "./component/RegisterUser";

function App() {
  return (
    <div>
      <NotificationContainer />
      <div className="container my-2">
        <RegisterUser />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

