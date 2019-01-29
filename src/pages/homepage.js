import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, Col, Row } from "reactstrap";

class homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Row>
          <Col sm="3">
            <Card
              className="text-center"
              body
              inverse
              style={{ backgroundColor: "#555", borderColor: "#000" }}
            >
              <ul>
                {this.props.users.map(user => (
                  <Row>
                    {user.id}: {user.username}
                    <CardImg src={user.profileImage} width="50%" />
                    <Link to={`users/${user.id}`} />
                  </Row>
                ))}
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default homepage;
