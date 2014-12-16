var $banda1 = ('.banda1'),
	$banda2 = ('.banda2'),
	$banda3 = ('.banda3'),
	$banda4 = ('.banda4'),
	$banda5 = ('.banda5'),
	$btn1up = ('.banda1up'),
	$btn2up = ('.banda2up'),
	$btn3up = ('.banda3up'),
	$btn4up = ('.banda4up'),
	$btn5up = ('.banda5up'),
	$btn1down = ('.banda1down'),
	$btn2down = ('.banda2down'),
	$btn3down = ('.banda3down'),
	$btn4down = ('.banda4down'),
	$btn5down = ('.banda5down'),
	colorB1 = colorB2 = colorB3 = colorB4 = colorB5 = 'inicio';

function cambioColorMas(color,banda){
	var cambio;
	if(color == 'inicio'){
		$(banda).css('background','black');
		cambio = 0;
	}else if(color == 0){
		$(banda).css('background','brown');
		cambio = 1;
	}else if(color == 1){
		$(banda).css('background','red');
		cambio = 2;
	}else if(color == 2){
		$(banda).css('background','orange');
		cambio = 3;
	}else if(color == 3){
		$(banda).css('background','yellow');
		cambio = 4;
	}else if(color == 4){
		$(banda).css('background','green');
		cambio = 5;
	}else if(color == 5){
		$(banda).css('background','blue');
		cambio = 6;
	}else if(color == 6){
		$(banda).css('background','purple');
		cambio = 7;
	}else if(color == 7){
		$(banda).css('background','gray');
		cambio = 8;
	}else if(color == 8){
		$(banda).css('background','white');
		cambio = 9;
	}else if(color == 9){
		$(banda).css('background','transparent');
		cambio = 'inicio';
	}
	return cambio;
}
function cambioColorMenos(color,banda){
	var cambio;
	if(color == 'inicio'){
		$(banda).css('background','white');
		cambio = 9;
	}else if(color == 0){
		$(banda).css('background','transparent');
		cambio = 'inicio';
	}else if(color == 1){
		$(banda).css('background','black');
		cambio = 0;
	}else if(color == 2){
		$(banda).css('background','brown');
		cambio = 1;
	}else if(color == 3){
		$(banda).css('background','red');
		cambio = 2;
	}else if(color == 4){
		$(banda).css('background','orange');
		cambio = 3;
	}else if(color == 5){
		$(banda).css('background','yellow');
		cambio = 4;
	}else if(color == 6){
		$(banda).css('background','green');
		cambio = 5;
	}else if(color == 7){
		$(banda).css('background','blue');
		cambio = 6;
	}else if(color == 8){
		$(banda).css('background','purple');
		cambio = 7;
	}else if(color == 9){
		$(banda).css('background','gray');
		cambio = 8;
	}
	return cambio;
}
function cambioColorToleranciaMas(color,banda){
	var cambio;
	if(color == 'inicio'){
		$(banda).css('background','brown');
		cambio = 1;
	}else if(color == 1){
		$(banda).css('background','red');
		cambio = 2;
	}else if(color == 2){
		$(banda).css('background','#EAC102');
		cambio = 5;
	}else if(color == 5){
		$(banda).css('background','#E3E4E5');
		cambio = 10;
	}else if(color == 10){
		$(banda).css('background','transparent');
		cambio = 'inicio';
	}
	return cambio;
}
function btn1upPress(e){
	e.preventDefault();
	colorB1 = cambioColorMas(colorB1,'.banda1');
}
function btn2upPress(e){
	e.preventDefault();
	colorB2 = cambioColorMas(colorB2,'.banda2');
}
function btn3upPress(e){
	e.preventDefault();
	colorB3 = cambioColorMas(colorB3,'.banda3');
}
function btn4upPress(e){
	e.preventDefault();
	colorB4 = cambioColorToleranciaMas(colorB4,'.banda4');
}
function btn5upPress(e){
	e.preventDefault();
	colorB5 = cambioColorToleranciaMas(colorB5,'.banda5');
}
function btn1downPress(e){
	e.preventDefault();
	colorB1 = cambioColorMenos(colorB1,'.banda1');
}
function btn2downPress(e){
	e.preventDefault();
	colorB2 = cambioColorMenos(colorB2,'.banda2');
}
function btn3downPress(e){
	e.preventDefault();
	colorB3 = cambioColorMenos(colorB3,'.banda3');
}
function btn4downPress(e){
	e.preventDefault();
	colorB4 = cambioColorMenos(colorB4,'.banda4');
}
function btn5downPress(e){
	e.preventDefault();
	colorB5 = cambioColorMenos(colorB5,'.banda5');
}
$('.banda1up').click( btn1upPress );
$('.banda2up').click( btn2upPress );
$('.banda3up').click( btn3upPress );
$('.banda4up').click( btn4upPress );
$('.banda5up').click( btn5upPress );
$('.banda1down').click( btn1downPress );
$('.banda2down').click( btn2downPress );
$('.banda3down').click( btn3downPress );
$('.banda4down').click( btn4downPress );
$('.banda5down').click( btn5downPress );