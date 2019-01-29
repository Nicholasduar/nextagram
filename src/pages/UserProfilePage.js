import React, { } from 'react';
import UserImages from '../container/UserImages';

class UserProfilePage extends React.Component {

    render(){
      return (<>
        <h1>User Profile Page of</h1>

        <UserImages userId = {this.props.match.params.id} />
        </>
      )
    }
  }
  
  export default UserProfilePage;
  