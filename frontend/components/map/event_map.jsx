import React from 'react';
import MarkerManager from '../../util/marker_manager';

class EventMap extends React.Component {

  constructor(props){
    super(props);
    this.lat = this.props.lat;
    this.lng = this.props.lng;
    this.events = this.props.events;
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: this.lat, lng: this.lng },
      zoom: 14
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers([this.events])

  }

  componentDidUpdate(){
    this.MarkerManager.updateMarkers(this.props.events)
  }

  render() {
    return (
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    )
  }
}

export default EventMap;
