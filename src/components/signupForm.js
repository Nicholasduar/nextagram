import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
  Form
} from "reactstrap";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const closeBtn = (
      <button className="close" onClick={this.props.toggle}>
        &times;
      </button>
    );

    return (
      <div>
        <Modal
          isOpen={this.props.signup}
          toggle={this.props.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.props.toggle} close={closeBtn}>
            Sign Up
          </ModalHeader>
          <ModalBody>
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={e => this.change(e)}
                      type="email"
                      id="exampleEmail"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={e => this.change(e)}
                      type="password"
                      id="examplePassword"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleUsername">Username</Label>
                <Input
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={e => this.change(e)}
                  type="text"
                  id="exampleAddress"
                />

                <FormText color="muted">
                  Already a member?{" "}
                  <Button color="primary" onClick={this.props.signupToggle}>
                    Log In
                  </Button>{" "}
                </FormText>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggle}>
              Sign Up
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default SignUp;
