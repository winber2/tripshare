import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

class Home extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.main}>
        <Button title="Map" onPress={() => navigate('Map')} />
        <Button title="Profile" onPress={() => navigate('Profile')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default Home;
