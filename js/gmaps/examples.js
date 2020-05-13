$(function()
{
   $('#map').gMap();
   
   $('#map_controls').gMap(
   {
        latitude: -2.206,
        longitude: -79.897,
        maptype: 'TERRAIN', // 'HYBRID', 'SATELLITE', 'ROADMAP' or 'TERRAIN'
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
   
   
   	// Detect user location
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position)
		{
			$('#map_controls').gMap('addMarker', {
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
			$('#map_controls').gMap('centerAt', {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				zoom: 8
			});
		}, function()
		{
			//console.log('Couldn\'t find you :(');
		});
	}
	
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

	$("#map_extended").gMap({
		controls: false,
		scrollwheel: true,
		maptype: 'TERRAIN',
		zoom:2,
		markers: [
			{
				latitude: -26.096788,
				longitude: 27.978748,
				icon: {
					image: "js/gmaps/images/gmap-pin-red.png",
					iconsize: [26, 46],
					iconanchor: [12,46]
				},
				html:"Xgile-IT"
			},
	        
			{
				latitude: 17.410087,
				longitude: 78.460043,
				icon: {
					image: "js/gmaps/images/gmap-pin-green.png",
					iconsize: [26, 46],
					iconanchor: [12,46]
				}
				
			}
			
		],
		icon: {
			image: "js/gmaps/images/gmap-pin-blue.png", 
			iconsize: [26, 46],
			iconanchor: [12, 46]
		},
		
		
	});
	
	
	
	
	
	$('#map_controls_hybrid').gMap(
   {
        latitude: -2.206,
        longitude: -79.897,
        maptype: 'HYBRID', // 'HYBRID', 'SATELLITE', 'ROADMAP' or 'TERRAIN'
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
   
   
   	// Detect user location
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
			//console.log('Couldn\'t find you :(');
		});
	}
	
	
	
	
	
	
	$('#map_controls_satellite').gMap(
   {
        latitude: -2.206,
        longitude: -79.897,
        maptype: 'SATELLITE', // 'HYBRID', 'SATELLITE', 'ROADMAP' or 'TERRAIN'
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
   
   
   	// Detect user location
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position)
		{
			$('#map_controls_satellite').gMap('addMarker', {
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
			$('#map_controls_satellite').gMap('centerAt', {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				zoom: 8
			});
		}, function()
		{
			//console.log('Couldn\'t find you :(');
		});
	}
	
	
	
	
	$("#map_extended_full").gMap({
		controls: false,
		scrollwheel: true,
		maptype: 'TERRAIN',
		zoom:10,
		controls: {
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true
        },
		
		markers: [
			{
				latitude: -26.096788,
				longitude: 27.978748,
				icon: {
					image: "js/gmaps/images/gmap-pin-red.png",
					iconsize: [26, 46],
					iconanchor: [12,46]
				},
				html:"xgileIT"

				
			}]});
	
	
	
	
	
	

});