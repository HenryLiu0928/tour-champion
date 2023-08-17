/* eslint-disable */
console.log('hello from the client side');

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibGVvMTk5MDExMTQiLCJhIjoiY2xsNHJjcXZlMDdwazNjc3NmdXFpcDZxYyJ9.Z1XuZWO-bR7Bimx7qpZPFA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/leo19901114/cll4rmn6t009a01ojb0ev4m97',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
      focusAfterOpen: false,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

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
