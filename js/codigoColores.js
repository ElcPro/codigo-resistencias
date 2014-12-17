var $valor  = ('#numero')
	$banda1 = ('.banda1'),
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
	colorB1 = colorB2 = colorB3 = colorB4 = colorB5 = colorB6 = 'inicio';

function cambioColorMas(color,banda){
	var cambio;
	if(color == 'inicio'){
		$(banda).css('background','black');
		$(banda+'up').css('color','brown');
		$(banda+'down').css('color','black');
		cambio = 0;
	}else if(color == 0){
		$(banda).css('background','brown');
		$(banda+'up').css('color','red');
		$(banda+'down').css('color','black');
		cambio = 1;
	}else if(color == 1){
		$(banda).css('background','red');
		$(banda+'up').css('color','orange');
		$(banda+'down').css('color','brown');
		cambio = 2;
	}else if(color == 2){
		$(banda).css('background','orange');
		$(banda+'up').css('color','yellow');
		$(banda+'down').css('color','red');
		cambio = 3;
	}else if(color == 3){
		$(banda).css('background','yellow');
		$(banda+'up').css('color','green');
		$(banda+'down').css('color','orange');
		cambio = 4;
	}else if(color == 4){
		$(banda).css('background','green');
		$(banda+'up').css('color','blue');
		$(banda+'down').css('color','yellow');
		cambio = 5;
	}else if(color == 5){
		$(banda).css('background','blue');
		$(banda+'up').css('color','purple');
		$(banda+'down').css('color','green');
		cambio = 6;
	}else if(color == 6){
		$(banda).css('background','purple');
		$(banda+'up').css('color','gray');
		$(banda+'down').css('color','blue');
		cambio = 7;
	}else if(color == 7){
		$(banda).css('background','gray');
		$(banda+'up').css('color','white');
		$(banda+'down').css('color','purple');
		cambio = 8;
	}else if(color == 8){
		$(banda).css('background','white');
		$(banda+'up').css('color','black');
		$(banda+'down').css('color','gray');
		cambio = 9;
	}else if(color == 9){
		$(banda).css('background','transparent');
		$(banda+'up').css('color','black');
		$(banda+'down').css('color','white');
		cambio = 'inicio';
	}
	return cambio;
}
function cambioColorMenos(color,banda){
	var cambio;
	if(color == 'inicio'){
		$(banda).css('background','white');
		$(banda+'up').css('color','black');
		$(banda+'down').css('color','gray');
		cambio = 9;
	}else if(color == 0){
		$(banda).css('background','transparent');
		$(banda+'up').css('color','black');
		$(banda+'down').css('color','white');
		cambio = 'inicio';
	}else if(color == 1){
		$(banda).css('background','black');
		$(banda+'up').css('color','brown');
		$(banda+'down').css('color','black');
		cambio = 0;
	}else if(color == 2){
		$(banda).css('background','brown');
		$(banda+'up').css('color','red');
		$(banda+'down').css('color','black');
		cambio = 1;
	}else if(color == 3){
		$(banda).css('background','red');
		$(banda+'up').css('color','orange');
		$(banda+'down').css('color','brown');
		cambio = 2;
	}else if(color == 4){
		$(banda).css('background','orange');
		$(banda+'up').css('color','yellow');
		$(banda+'down').css('color','red');
		cambio = 3;
	}else if(color == 5){
		$(banda).css('background','yellow');
		$(banda+'up').css('color','green');
		$(banda+'down').css('color','orange');
		cambio = 4;
	}else if(color == 6){
		$(banda).css('background','green');
		$(banda+'up').css('color','blue');
		$(banda+'down').css('color','yellow');
		cambio = 5;
	}else if(color == 7){
		$(banda).css('background','blue');
		$(banda+'up').css('color','purple');
		$(banda+'down').css('color','green');
		cambio = 6;
	}else if(color == 8){
		$(banda).css('background','purple');
		$(banda+'up').css('color','gray');
		$(banda+'down').css('color','blue');
		cambio = 7;
	}else if(color == 9){
		$(banda).css('background','gray');
		$(banda+'up').css('color','white');
		$(banda+'down').css('color','purple');
		cambio = 8;
	}
	return cambio;
}
function cambioColorToleranciaMas(color,banda){
	var cambio;
	if(color == 'inicio'){
		$(banda).css('background','brown');
		$(banda+'up').css('color','red');
		$(banda+'down').css('color','black');
		cambio = 1;
	}else if(color == 1){
		$(banda).css('background','red');
		$(banda+'up').css('color','#EAC102');
		$(banda+'down').css('color','brown');
		cambio = 2;
	}else if(color == 2){
		$(banda).css('background','#EAC102');
		$(banda+'up').css('color','#E3E4E5');
		$(banda+'down').css('color','red');
		cambio = 5;
	}else if(color == 5){
		$(banda).css('background','#E3E4E5');
		$(banda+'up').css('color','black');
		$(banda+'down').css('color','#EAC102');
		cambio = 10;
	}else if(color == 10){
		$(banda).css('background','transparent');
		$(banda+'up').css('color','brown');
		$(banda+'down').css('color','#E3E4E5');
		cambio = 'inicio';
	}
	return cambio;
}
function cambioColorToleranciaMenos(color,banda){
	var cambio;
	if(color == 'inicio'){
		$(banda).css('background','#E3E4E5');
		$(banda+'up').css('color','black');
		$(banda+'down').css('color','#EAC102');
		cambio = 10;
	}else if(color == 1){
		$(banda).css('background','transparent');
		$(banda+'up').css('color','brown');
		$(banda+'down').css('color','#E3E4E5');
		cambio = 'inicio';
	}else if(color == 2){
		$(banda).css('background','brown');
		$(banda+'up').css('color','red');
		$(banda+'down').css('color','black');
		cambio = 1;
	}else if(color == 5){
		$(banda).css('background','red');
		$(banda+'up').css('color','#E3E4E5');
		$(banda+'down').css('color','brown');
		cambio = 2;
	}else if(color == 10){
		$(banda).css('background','#EAC102');
		$(banda+'up').css('color','black');
		$(banda+'down').css('color','red');
		cambio = 5;
	}
	return cambio;
}
function btn1upPress(e){
	e.preventDefault();
	colorB1 = cambioColorMas(colorB1,'.banda1');
	calculoValor(colorB1);
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
function btn6upPress(e){
	e.preventDefault();
	colorB6 = cambioColorToleranciaMas(colorB6,'.banda6');
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
	colorB4 = cambioColorToleranciaMenos(colorB4,'.banda4');
}
function btn5downPress(e){
	e.preventDefault();
	colorB5 = cambioColorToleranciaMenos(colorB5,'.banda5');
}
function btn6downPress(e){
	e.preventDefault();
	colorB6 = cambioColorToleranciaMenos(colorB6,'.banda6');
}
function calculoValor(color1,color2,color3){
	if(color1 != 'inicio'){
		$('#numero').val(color1);
	}else{
		$('#numero').val('');
	}
}	

$('.banda1up').click( btn1upPress );
$('.banda2up').click( btn2upPress );
$('.banda3up').click( btn3upPress );
$('.banda4up').click( btn4upPress );
$('.banda5up').click( btn5upPress );
$('.banda6up').click( btn6upPress );
$('.banda1down').click( btn1downPress );
$('.banda2down').click( btn2downPress );
$('.banda3down').click( btn3downPress );
$('.banda4down').click( btn4downPress );
$('.banda5down').click( btn5downPress );
$('.banda6down').click( btn6downPress );