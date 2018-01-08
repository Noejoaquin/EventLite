import React from 'react';


class EventMap extends React.Component {

  constructor(props){
    super(props);
    this.lat = props.lat;
    this.lng = props.lng;
  }

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: this.lat, lng: this.lng }, // this is SF
      zoom: 15
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // // const marker = new google.maps.Marker({
    // //
    // // })
    // const position = new google.maps.LatLng(this.lat, this.lng)
  }

  render() {
    return (
      // ...
      <div id='map-container' ref={ map => this.mapNode = map }></div>
    )
  }

  //...
}

export default EventMap;
