export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.updateMarkers = this.updateMarkers.bind(this);
    this.createMarkerFromEvent = this.createMarkerFromEvent.bind(this)
  }

  updateMarkers(events) {
    let eventObj = {};
    events.forEach(event => eventObj[event.id] = event); // create events obj for filtering

    events
      .filter(event => !this.markers[event.id])
      .forEach(newEvent => this.createMarkerFromEvent(newEvent)) // create marker for events not already in marker obj

    Object.keys(this.markers)
        .filter(eventId => !eventObj[eventId])
        .forEach(eventId => this.removeMarker(this.markers[eventId])) //must remove markers that are not in the eventObj
  }

  createMarkerFromEvent(event) {
    const position = new google.maps.LatLng(event.lat, event.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      eventId: event.id
    });

    this.markers[marker.eventId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.eventId].setMap(null);
    delete this.markers[marker.eventId];
  }
}
