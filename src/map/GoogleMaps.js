import React from 'react';
import { MapView } from 'expo';

import { Marker } from 'react-native-maps';
import { NOOP } from 'src/common/constants/app';

class GoogleMaps extends React.Component {
  static defaultProps = {
    onPoiClick: NOOP,
  };

  onPoiClick = e => {
    const { coordinate } = e.nativeEvent;
    console.log(coordinate, e.nativeEvent);
    this.props.onPoiClick(coordinate);
  };

  renderMarker = marker => (
    <Marker key={marker.label} coordinate={marker.coords} />
  );

  render() {
    return (
      <MapView
        onPoiClick={this.onPoiClick}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {this.props.markers.map(this.renderMarker)}
      </MapView>
    );
  }
}

export default GoogleMaps;
