import React from 'react';
import { View, Button } from 'react-native';

class Profile extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Home', { name: 'Jane' })}
      />
    );
  }
}

export default Profile;
