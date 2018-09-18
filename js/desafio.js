function fn_mal() {
	alert('No funciono');
}

window.onload = function fn_ok(rta) {

	var divMapa = document.getElementById('mapa');
	//navigator.geolocation.getCurrentPosition(fn_ok, fn_mal);

	//var lat= rta.coords.latitude;
	//var lon= rta.coords.longitude;
	
	var gLatLon = new google.maps.LatLng(13.715488, -89.152879);	
	var objConfig = {
		zoom: 50,
		center: gLatLon,
		mapTypeId: 'satellite'

		
	}
	var gMapa =  new google.maps.Map(divMapa,objConfig);
	
	var objConfigMarker = {
		position: gLatLon,
		map:gMapa,
		animation: google.maps.Animation.DROP,
		title:"Esta es tu ubicacion actual"
	}
	var gMarker = new google.maps.Marker(objConfigMarker);
		gMarker.setIcon('img/u.png')




//Este es para mostrar en el mapa la capilla UDB//


var hCoder = new google.maps.Geocoder();
	var objInformacion1={
		address:'Capilla UDB,Soyapango,El Salvador'
	}
	hCoder.geocode(objInformacion1, fn_coder);
	function fn_coder(datos1){
		var coordenadas1 = datos1[0].geometry.location; //obje latitu y longirtud google 

		var config={
			map: gMapa,
			animation: google.maps.Animation.DROP,
			position: coordenadas1,
			title:'Estas en la capilla UDB'
		}

		var gMarkerDv= new google.maps.Marker(config)
		gMarkerDv.setIcon('img/capilla.png')

		var objHTML6={
			content: '<div style="height:150px; width:300px"><h2>CAPILLA UDB</h2><h3>CAPILLA</h3><p>Aquí podrás encontrar tranquilidad y podrás hablar a solas con Dios</p></div>'
		}

		var gIW6 = new google.maps.InfoWindow(objHTML6);

		google.maps.event.addListener(gMarkerDv,'click',
			function(){

			gIW6.open(gMapa,gMarkerDv);

			});
	
	}



var hCoder2 = new google.maps.Geocoder();
	var objInformacion2={
		address:'Cafeterías del CITT,Universidad Don Bosco, Campus,Soyapango,El Salvador'
	}
	hCoder2.geocode(objInformacion2, fn_coder3);
	function fn_coder3(datos3){
		var coordenadas3 = datos3[0].geometry.location; //obje latitu y longirtud google 

		var config2={
			map: gMapa,
			animation: google.maps.Animation.DROP,
			position: coordenadas3,
			title:'CAFETERIA UDB'
		}

		var gMarkerDv2= new google.maps.Marker(config2)
		gMarkerDv2.setIcon('img/coffee.png')



		var objHTML4={
			content: '<div style="height:150px; width:300px"><h2>CAFETERIA UDB</h2><h3>Con excelente comida</h3><p>Esta es la segunda cafeteria esta cerca del edificio 6</p></div>'
		}

		var gIW4 = new google.maps.InfoWindow(objHTML4);

		google.maps.event.addListener(gMarkerDv2,'click',
			function(){

			gIW4.open(gMapa,gMarkerDv2);		


			});
	
	}



var hCoder4= new google.maps.Geocoder();
	var objInformacion4={
		address:'Edificio De Profesores,Autopista de Oro,San SalvadorEl Salvador'
	}
	hCoder4.geocode(objInformacion4, fn_coder4);
	function fn_coder4(datos4){
		var coordenadas4 = datos4[0].geometry.location; //obje latitu y longirtud google 

		var config4={
			map: gMapa,
			animation: google.maps.Animation.DROP,
			position: coordenadas4,
			suppressMarkers: true,
			title:'EDIFICIOS PROFESORES'
		}

		var gMarkerDv4= new google.maps.Marker(config4)
		gMarkerDv4.setIcon('img/edificio_profesores.png')


		var objHTML5={
			content: '<div style="height:150px; width:300px"><h2>EDIFICIOS DE PROFESORES</h2><h3>Profesores</h3><p>Aquí estan todos los profesores de todas las carreras divididos por facultad</p></div>'
		}

		var gIW5 = new google.maps.InfoWindow(objHTML5);

		google.maps.event.addListener(gMarkerDv4,'click',
			function(){

			gIW5.open(gMapa,gMarkerDv4);		

			});

	}




var hCoder5= new google.maps.Geocoder();
	var objInformacion5={
		address:'Servicios sanitarios,Soyapango,El Salvador'
	}

	hCoder5.geocode(objInformacion5, fn_coder5);
	function fn_coder5(datos5){
		var coordenadas5 = datos5[0].geometry.location; //obje latitu y longirtud google 

		var config5={
			map: gMapa,
			animation: google.maps.Animation.DROP,
			position: coordenadas5,
			suppressMarkers: true,
			title:'SERVICIOS SAITARIOS'
		}

		var gMarkerDv5= new google.maps.Marker(config5)
		gMarkerDv5.setIcon('img/sanitarios.png')



		var objHTML2={
			content: '<div style="height:150px; width:300px"><h2>SERVICIOS SANITARIOS</h2><h3>SANITARIOS</h3><p>Servicios sanitarios en el centro de la Universidad</p></div>'
		}

		var gIW2 = new google.maps.InfoWindow(objHTML2);

		google.maps.event.addListener(gMarkerDv5,'click',
			function(){

			gIW2.open(gMapa,gMarkerDv5);		


			});
	}

	




var hCoder6= new google.maps.Geocoder();
	var objInformacion6={
		address:'CTIC UDB, El Salvador,Calle Plan del Pino, Ciudadela Don Bosco, Frente al Punto de Buses 41-E, Soyapango,Calle Monseñor Romero Edificio 5, 2a Planta,Soyapango,El Salvador'
	}
	hCoder6.geocode(objInformacion6, fn_coder6);
	function fn_coder6(datos6){
		var coordenadas6 = datos6[0].geometry.location; //obje latitu y longirtud google 

		var config6={
			map: gMapa,
			animation: google.maps.Animation.DROP,
			position: coordenadas6,
			suppressMarkers: true,
			title:'CTIC UDB, El Salvador'
		}

		var gMarkerDv6= new google.maps.Marker(config6)
		gMarkerDv6.setIcon('img/edificio_profesores.png')




		var objHTML1={
			content: '<div style="height:150px; width:300px"><h2>Edificio 5</h2><p>En este edificio se imparten los laboratorios de diferentes materias</p></div>'
		}

		var gIW1 = new google.maps.InfoWindow(objHTML1);

		google.maps.event.addListener(gMarkerDv6,'click',
			function(){

			gIW1.open(gMapa,gMarkerDv6);		


			});
	}







var hCoder9= new google.maps.Geocoder();
	var objInformacion9={
		address:'Universidad Don Bosco,San Salvador,El Salvador'
	}
	hCoder9.geocode(objInformacion9, fn_coder9);
	function fn_coder9(datos9){
		var coordenadas9 = datos9[0].geometry.location; //obje latitu y longirtud google 

		var config9={
			map: gMapa,
			animation: google.maps.Animation.DROP,
			position: coordenadas9,
			suppressMarkers: true,
			title:'UNIVERSIDAD DON BOSCO'
		}

		var gMarkerDv9= new google.maps.Marker(config9)
		gMarkerDv9.setIcon('img/udb.png')




		var objHTML9={
			content: '<div style="height:150px; width:300px"><h2>UNIVERSIDAD DON BOSCO</h2><h3>Universidad Don Bosco esta situada en el municipio de Soyapango</h3><p>Mas informacion <a href="#">aca</a></p></div>'
		}

		var gIW9 = new google.maps.InfoWindow(objHTML9);

		google.maps.event.addListener(gMarkerDv9,'click',
			function(){

			gIW9.open(gMapa,gMarkerDv9);		


			});
	}



















//Este es para mostrar en el mapa la cafereria UDB//


	var hCoder1 = new google.maps.Geocoder();

	var objInformacion2={
		address:'Cafeteria UDB,Unnamed Road,Soyapango,El Salvador'
	}
	hCoder1.geocode(objInformacion2, fn_coder1);

	function fn_coder1(datos2){
		var coordenadas2 = datos2[0].geometry.location; //obje latitu y longirtud google 

		var config1={
			map: gMapa,
			animation: google.maps.Animation.DROP,
			position: coordenadas2,
			title:'Estas en la cafeteria UDB'
			
		}

		var gMarkerDv1= new google.maps.Marker(config1)
		gMarkerDv1.setIcon('img/coffee.png')

		var objHTML={
			content: '<div style="height:150px; width:300px"><h2>CAFETERIA UDB</h2><h3>Con excelente comida</h3><p>Esta es la primer cafeteria</p></div>'
		}

		var gIW = new google.maps.InfoWindow(objHTML);

		google.maps.event.addListener(gMarkerDv1,'click',
			function(){

			gIW.open(gMapa,gMarkerDv1);
			});
	}

	var objConfiDR = {
		map: gMapa,
		suppressMarkers: true,
	}

	var objConfiDS = {
		origin: gLatLon,
		destination: objInformacion1.address,
		travelMode:google.maps.TravelMode.WALKING
	}

//Este es para poder hacer el ruteo //

	var ds = new google.maps.DirectionsService(); //obtener coordenadas
	var dr = new google.maps.DirectionsRenderer(objConfiDR);//Traduce coordenadas a la linea o ruta

	ds.route(objConfiDS,fnRutear);

	function fnRutear(resultados, status) {
		// body...
		//mostrar linea entre punto a y b

		if(status=='OK'){
			dr.setDirections(resultados);
		}else{
			alert('ERROR'+status);
		}
	}

}