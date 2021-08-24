/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYmhha3RpMTIzIiwiYSI6ImNrc2lzcHNvNjFwdGEycG51eDQ0ZHg0aDIifQ.G8o7xUbkX4fwhD1afbWw7g';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/bhakti123/cksivhx7hd6tv17pe87mdtd7j',
    scrollZoom: false,
    // center: [-118.315192, 34.006905],
    // zoom: 1,
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create Marker
    const el = document.createElement('div');
    el.className = 'marker';

    //Add Marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //App popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    //Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
