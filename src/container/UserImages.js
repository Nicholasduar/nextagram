import React from "react";
import axios from "axios";
import Image from "react-graceful-image";
import Loader from "react-loader-spinner";

class UserImages extends React.Component {
  state = {
    images: [],
    isLoading: true
  };

  componentDidMount() {
    // performing a GET request to '/api-end-point'
    axios
      .get(
        `https://insta.nextacademy.com/api/v1/images?userId=${
          this.props.userId
        }`
      )

      .then(result => {
        // If successful, we do stuffs with 'result'
        this.setState({ images: result.data, isLoading: false });
      })
      .catch(error => {
        // If unsuccessful, we notify users what went wrong
        console.log("ERROR: ", error);
      });
  }

  render() {
    return (
      <div>
        <h1>User Images</h1>
        <ul>
          {this.state.images.map((image, index) => (
            <li key={index}>
              {this.state.isLoading ? (
                <Loader type="Grid" color="#somecolor" height={80} width={80} />
              ) : null}
              <Image src={image} className="rounded-circle" height={200} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserImages;
