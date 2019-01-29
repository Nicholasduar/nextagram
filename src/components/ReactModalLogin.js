/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react";
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import SignUp from "./signupForm";

class ReactModalLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: false,
      email: "",
      password: "",
      username: ""
    };
  }
  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  signupToggle = () => {
    this.setState({ signup: !this.state.signup });
  };

  render() {
    const closeBtn = (
      <button className="close" onClick={this.props.toggle}>
        &times;
      </button>
    );

    return (
      <div>
        {this.state.signup ? (
          <SignUp
            signup={this.state.signup}
            signupToggle={this.toggle}
            toggle={this.props.toggle}
          />
        ) : (
          <Modal
            isOpen={this.props.modalOpen}
            toggle={this.props.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle} close={closeBtn}>
              Log In
            </ModalHeader>
            <ModalBody>
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-50">
                  <Label for="exampleEmail" className="mr-sm-2">
                    Email
                  </Label>
                  <Input
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                    type="email"
                    id="exampleEmail"
                  />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-50">
                  <Label for="examplePassword" className="mr-sm-2">
                    Password
                  </Label>
                  <Input
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={e => this.change(e)}
                    type="password"
                    id="examplePassword"
                  />
                  <Button onClick={() => this.onSubmit()}> Submit </Button>
                </FormGroup>
              </Form>
              <Button color="primary" onClick={this.signupToggle}>
                Sign Up
              </Button>{" "}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.props.toggle}>
                Log In
              </Button>{" "}
              <Button color="secondary" onClick={this.props.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </div>
    );
  }
}

export default ReactModalLogin;
