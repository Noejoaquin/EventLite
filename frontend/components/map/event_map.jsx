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

<<<<<<< HEAD
  componentDidMount() {
    const mapOptions = {
      center: { lat: this.lat, lng: this.lng },
      zoom: 14
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
=======
  createMap(mapOptions){
    this.map = new google.maps.Map(this.mapNode, mapOptions)
>>>>>>> Filter
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers([this.events])
    let that = this
    let center = this.map.getCenter()
    let mapOnDom;
    let height;
    if (this.page === 'search') {
      mapOnDom = document.querySelector('.map-container-search')
      height = window.getComputedStyle(mapOnDom).height
    }
    this.map.addListener('bounds_changed', () => {
      if (that.page === 'search' && height !== window.getComputedStyle(mapOnDom).height) {
        that.map.setCenter(center)
        height = window.getComputedStyle(mapOnDom).height
      }
    })
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
    window.addEventListener('resize', this.resize)

    if (this.props.page === 'show'){
      this.MarkerManager.updateMarkers([this.props.events])
    } else {
      this.MarkerManager.updateMarkers(this.props.events)
    }
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.resize)
  }

  render() {
    let mapClass = this.page === 'search' ? 'map-container-search': 'map-container-show'
    return (
      <div className={mapClass} ref={ map => this.mapNode = map }></div>
    )
  }
}

export default EventMap;
