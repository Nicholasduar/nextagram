import React from "react";
import { Route, Link } from "react-router-dom";
import UserProfilePage from "./pages/UserProfilePage";
import "./App.css";
import axios from "axios";
import HomePage from "../src/pages/homepage";
import Navbar from "../src/components/Navbar";

class App extends React.Component {
  state = {
    users: []
  };
  //...

  componentDidMount() {
    // performing a GET request to '/api-end-point'
    axios
      .get("https://insta.nextacademy.com/api/v1/users")
      .then(result => {
        // If successful, we do stuffs with 'result'
        this.setState({ users: result.data });
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }

  render() {
    return (
      <div>
        <Navbar>
          <Link to="/">Home</Link>
          {/* We temporarily hardcode this to user id 1*/}
          <Link to="/users/1">My Profile</Link>
        </Navbar>
        <Route
          exact
          path="/"
          component={props => <HomePage users={this.state.users} {...props} />}
        />
        <Route path="/users/:id" component={UserProfilePage} />
      </div>
    );
  }
}

export default App;
