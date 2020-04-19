import React from "react";
import ReactDOM from "react-dom";
import { NotificationManager } from "react-notifications";
import { db } from "../firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ShootDice from "./ShootDice"


const TableLobby = (props) => {
  console.log(props)
  const [hideOptions, setHideOptions] = React.useState(false)
  const onClick = () => setHideOptions(true)
  return (
    <div>
      <Router>
        <div className="row mb-5" hidden={hideOptions}>
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Table Lobby</h1>
            <p>{`Table: ${props.tableName}`}</p> 
            <p>{`Username: ${props.username}`}</p> 
            <p>{`Number of Players: ${props.username}`}</p>
            <p>{`Number of Dice: ${props.username}`}</p>
          </div>
        </div>
        <div>
          <Link 
            to={`/shootdice/${props.table}`}
            className="btn btn-primary btn-block"
            onClick={onClick}
            hidden={hideOptions}>
            <p style={linkStyle}>Start Game</p>
          </Link>
          <Switch>
              <Route path={"/shootdice/:handle"}>
                <div>
                  <p> HI </p>
                </div>
                {/*<ShootDice 
                  tid={`${props.tid}`}
                  tableName={`${props.tableName}`}
                  pid={`${props.pid}`} 
                  username={`${props.username}`}*/}
              </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

const linkStyle = {
  marginRight: 15
}

export default TableLobby;