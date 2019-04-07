import React from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';

import GoogleMaps from './GoogleMaps';

class Map extends React.Component {
  state = {
    showInput: false,
    markers: [
      {
        label: 'Test',
        coords: {
          latitude: 37.78825,
          longitude: -122.4324,
        },
      },
    ],
  };

  onPoiClick = coords => {
    const markers = [
      ...this.state.markers,
      {
        label: 'f' + Math.random(),
        coords: {
          ...coords,
        },
      },
    ];
    this.setState({ markers });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View
          style={
            {
              // ...styles.input,
              // display: this.state.showInput ? 'flex' : 'none',
            }
          }
        >
          <Text>asdfa</Text>
          <TextInput style={{ height: 30 }} value={'awwww'} />
        </View>
        <GoogleMaps markers={this.state.markers} onPoiClick={this.onPoiClick} />
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
  input: {
    position: 'absolute',
    backgroundColor: 'white',
    top: 15,
    left: 15,
    width: '80%',
    height: 100,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
});

export default Map;
