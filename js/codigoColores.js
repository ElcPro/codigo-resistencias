var $banda1 = ('.color'),
	$botonMenosB1 = ('.btn-b1menos');
	colorB1 = 'inicio';

function cambioColorMas(color){
	var cambio = 'inicio';
	if(color == 'inicio'){
		$('.color').css('background','black');
		cambio = 0;
	}else if(color == 0){
		$('.color').css('background','brown');
		cambio = 1;
	}else if(color == 1){
		$('.color').css('background','red');
		cambio = 2;
	}else if(color == 2){
		$('.color').css('background','orange');
		cambio = 3;
	}else if(color == 3){
		$('.color').css('background','yellow');
		cambio = 4;
	}else if(color == 4){
		$('.color').css('background','blue');
		cambio = 5;
	}else if(color == 5){
		$('.color').css('background','green');
		cambio = 6;
	}else if(color == 6){
		$('.color').css('background','purple');
		cambio = 7;
	}else if(color == 7){
		$('.color').css('background','gray');
		cambio = 8;
	}else if(color == 8){
		$('.color').css('background','white');
		cambio = 9;
	}else if(color == 9){
		$('.color').css('background','transparent');
		cambio == 'inicio';
	}
	return cambio
}

function btnPress(){
	colorB1 = cambioColorMas(colorB1);
}

$('.btn-b1menos').click( btnPress );