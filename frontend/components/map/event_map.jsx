import React from 'react';
import MarkerManager from '../../util/marker_manager';

class EventMap extends React.Component {

  constructor(props){
    super(props);
    this.lat = this.props.lat;
    this.lng = this.props.lng;
    this.events = this.props.events;
    this.page = this.props.page
    this.createMap = this.createMap.bind(this)
  }

  createMap(mapOptions){
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers([this.events])
    // wrap the mapDOMNode in a Google Map
  }

  componentDidMount() {
    let mapOptions;
    if (this.page === 'search') {
        mapOptions = {
        center: { lat: this.lat, lng: this.lng },
        zoom: 10
      };
      this.createMap(mapOptions)
    } else {
        mapOptions = {
        center: { lat: this.lat, lng: this.lng },
        zoom: 14
      };
      this.createMap(mapOptions)
    }
  }

  componentDidUpdate(){
    if (this.props.page === 'show'){
      this.MarkerManager.updateMarkers([this.props.events])
    } else {
      this.MarkerManager.updateMarkers(this.props.events)
    }
  }

  render() {
    return (
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    )
  }
}

export default EventMap;
