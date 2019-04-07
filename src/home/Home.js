import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

class Home extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.main}>
        <Text> asdf </Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
