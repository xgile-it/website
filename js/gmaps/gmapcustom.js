$(function()
{
   $('#map').gMap();


//--------- Custom Controls and Map Type --------

$('#map_controls').gMap(
{
     latitude: -2.206,
     longitude: -79.897,
     maptype: 'TERRAIN',  // 'HYBRID', 'SATELLITE', 'ROADMAP' or 'TERRAIN'
     zoom: 8,
     controls: {
         panControl: true,
         zoomControl: false,
         mapTypeControl: true,
         scaleControl: false,
         streetViewControl: false,
         overviewMapControl: false
     }
});

if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position)
	{
		$('#map_controls').gMap('addMarker', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
			content: 'You are here!',
			icon: {
				image: "js/gmaps/images/gmap_pin.png", 
				iconsize: [26, 46],
				iconanchor: [12, 46]
			},
			popup: true
		});
		$('#map_controls').gMap('centerAt', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
			zoom: 8
		});
	}, function()
	{
		alert('Couldn\'t find you :(');
	});
}

//--------- Markers --------

$('#map_addresses').gMap({
	address: "Quito, Ecuador",
	zoom: 5,
	markers:[
		{
			latitude: -2.2014,
			longitude: -80.9763,
			html: "_latlng"
		},
		{
			address: "Guayaquil, Ecuador",
			html: "My Hometown",
			popup: true
		},
		{
			address: "Galapagos, Ecuador",
			html: "_address"
		}
	]
});


//--------- Kitchen Sink - Extended Usage --------

$("#map_extended").gMap({
		controls: false,
		scrollwheel: true,
		maptype: 'TERRAIN',
		markers: [
			{
				latitude: -26.096788,
				longitude: 27.978748,
				icon: {
					image: "gmap_pin_orange.png",
					iconsize: [26, 46],
					iconanchor: [12,46]
				}
			},
	        {
				latitude: 47.65197522925437,
				longitude: 9.47845458984375
			},
			{
				latitude: 47.594996,
				longitude: 9.600708,
				icon: {
					image: "gmap_pin_grey.png",
					iconsize: [26, 46],
					iconanchor: [12,46]
				}
			}
		],
		icon: {
			image: "gmap_pin.png", 
			iconsize: [26, 46],
			iconanchor: [12, 46]
		},
		latitude: 47.58969,
		longitude: 9.473413,
		zoom: 10
	});
	
	
	
	
	
	
//--------- map controls Hybrid --------	
	
	
	$('#map_controls_hybrid').gMap(
{
     latitude: -2.206,
     longitude: -79.897,
     maptype: 'HYBRID',  // 'HYBRID', 'SATELLITE', 'ROADMAP' or 'TERRAIN'
     zoom: 8,
     controls: {
         panControl: true,
         zoomControl: false,
         mapTypeControl: true,
         scaleControl: false,
         streetViewControl: false,
         overviewMapControl: false
     }
});

if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position)
	{
		$('#map_controls_hybrid').gMap('addMarker', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
			content: 'You are here!',
			icon: {
				image: "images/gmap_pin.png", 
				iconsize: [26, 46],
				iconanchor: [12, 46]
			},
			popup: true
		});
		$('#map_controls_hybrid').gMap('centerAt', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
			zoom: 8
		});
	}, function()
	{
		alert('Couldn\'t find you :(');
	});
}




//--------- map controls Satellite --------	
	
	
	$('#map_controls_satellite').gMap(
{
     latitude: -2.206,
     longitude: -79.897,
     maptype: 'SATELLITE',  // 'HYBRID', 'SATELLITE', 'ROADMAP' or 'TERRAIN'
     zoom: 8,
     controls: {
         panControl: true,
         zoomControl: false,
         mapTypeControl: true,
         scaleControl: false,
         streetViewControl: false,
         overviewMapControl: false
     }
});

if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position)
	{
		$('#map_controls_satellite').gMap('addMarker', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
			content: 'You are here!',
			icon: {
				image: "images/gmap_pin.png", 
				iconsize: [26, 46],
				iconanchor: [12, 46]
			},
			popup: true
		});
		$('#map_controls_satellite').gMap('centerAt', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
			zoom: 8
		});
	}, function()
	{
		alert('Couldn\'t find you :(');
	});
}




//--------- map controls Roadmap --------	
	
	
	$('#map_controls_roadmap').gMap(
{
     latitude: -2.206,
     longitude: -79.897,
     maptype: 'TERRAIN',  // 'HYBRID', 'SATELLITE', 'ROADMAP' or 'TERRAIN'
     zoom: 8,
     controls: {
         panControl: true,
         zoomControl: false,
         mapTypeControl: true,
         scaleControl: false,
         streetViewControl: false,
         overviewMapControl: false
     }
});

if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position)
	{
		$('#map_controls_roadmap').gMap('addMarker', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
			content: 'You are here!',
			icon: {
				image: "images/gmap_pin.png", 
				iconsize: [26, 46],
				iconanchor: [12, 46]
			},
			popup: true
		});
		$('#map_controls_roadmap').gMap('centerAt', {
			latitude: position.coords.latitude,
			longitude: position.coords.longitude,
			zoom: 8
		});
	}, function()
	{
		alert('Couldn\'t find you :(');
	});
}

});