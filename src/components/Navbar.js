import React from 'react';
import { Button } from 'reactstrap';


import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import ReactModalLogin from './ReactModalLogin';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      modalOpen: false
    };
  }
  toggle() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }
  render() {
    return (
      <div>
        {this.state.modalOpen ? <ReactModalLogin modalOpen={this.state.modalOpen} toggle={this.toggle} /> : null}
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">NEXTAGRAM</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Homepage</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/users/1">Profile Page</NavLink>
              </NavItem>
              <NavItem>
                <Button onClick={this.toggle}>Log In</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}