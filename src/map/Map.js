import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapView } from 'expo';

class Map extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Map markers={markers} />
        <View style={styles.button}>
          <Button title="Click" onPress={() => navigate('Profile')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
});

export default Map;
