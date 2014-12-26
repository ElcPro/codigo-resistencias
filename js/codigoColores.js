var $cuatro   = ('.cuatroBandas'),
	$cinco    = ('.cincoBandas'),
	$seis     = ('.seisBandas'),
	$valor    = ('#numero')
	$banda1   = ('.banda1'),
	$banda2   = ('.banda2'),
	$banda3   = ('.banda3'),
	$banda4   = ('.banda4'),
	$banda5   = ('.banda5'),
	$banda6   = ('.banda6'),
	$btn1up   = ('.banda1up'),
	$btn2up   = ('.banda2up'),
	$btn3up   = ('.banda3up'),
	$btn4up   = ('.banda4up'),
	$btn5up   = ('.banda5up'),
	$btn6up   = ('.banda6up'),
	$btn1down = ('.banda1down'),
	$btn2down = ('.banda2down'),
	$btn3down = ('.banda3down'),
	$btn4down = ('.banda4down'),
	$btn5down = ('.banda5down'),
	$btn6down = ('.banda6down'),
	$ohmiage  = ('.ohmios'),
	$tol      = ('.tolerancia'),
	$coefTemp = ('.ppm'),
	colorB1   = colorB2 = 0,
	colorB3   = 1,
	colorB4   = 0.05,
	colorB5   = 0.05,
	colorB6   = 100,
	numBandas = 4,
	ohmios    = 0,
	tolerancia  = 0,
	porcentaje  = 0,
	ppm         = 0,
	magnitud    = '',
	magnitudTol = '',
	comerciales = ['1','1.2','1.5','1.8','2.2','2.7','3.3','3.9','4.7','5.1','5.6','6.8','8.2',
				   '10','12','15','18','22','27','33','39','47','51','56','68','82',
				   '100','120','150','180','220','270','330','390','470','510','560','680','820',
				   '1K','1.2K','1.5K','1.8K','2.2K','2.7K','3.3K','3.9K','4.7K','5.1K','5.6K','6.8K','8.2K',
				   '10K','12K','15K','18K','22K','27K','33K','39K','47K','51K','56K','68K','82K',
				   '100K','120K','150K','180K','220K','270K','330K','390K','470K','510K','560K','680K','820K',
				   '1M','1.2M','1.5M','1.8M','2.2M','2.7M','3.3M','3.9M','4.7M','5.1M','5.6M','6.8M','8.2M','10M'];

	calculoValor();

function elegirConversion(){
	if($('.valor').is(":hidden")){
		$('.conversion').html('&Omega; >> <strong> | </strong><strong> | </strong><strong> | </strong>');
		$('.selectorBandas').slideToggle();
		$('.valor').slideToggle();
		$('.flechas-arriba').toggle();
		$('.flechas-abajo').toggle();
	}else{
		$('.conversion').html('<strong> | </strong><strong> | </strong><strong> | </strong> >> &Omega;');
		$('.valor').slideToggle();
		$('.selectorBandas').slideToggle();
		$('.flechas-arriba').toggle();
		$('.flechas-abajo').toggle();
	}
	
}

function cuatroBandasSelect(){
	$('.banda4').css('margin-left','13.3em');
	$('.banda4').css('background','#EAC102');
	$('.banda4up').css('margin-left','13.3em');
	$('.banda4down').css('margin-left','13.3em');
	$('.banda5').css('display','none');
	$('.banda5up').css('display','none');
	$('.banda5down').css('display','none');
	$('.banda6').css('display','none');
	$('.banda6up').css('display','none');
	$('.banda6down').css('display','none');
	numBandas = 4;
	colorB3 = 1;
	colorB4 = 0.05;
	calculoValor();
}
function cincoBandasSelect(){
	$('.banda3').css('background','black');
	$('.banda3up').css('color','black');
	$('.banda3down').css('color','black');
	$('.banda4').css('margin-left','8.8em');
	$('.banda4').css('background','black');
	$('.banda4up').css('margin-left','8.8em');
	$('.banda4down').css('margin-left','8.8em');
	$('.banda5').css('margin-left','13.3em');
	$('.banda5').css('display','block');
	$('.banda5').css('position','absolute');
	$('.banda5up').css('margin-left','13.3em');
	$('.banda5up').css('display','block');
	$('.banda5down').css('margin-left','13.3em');
	$('.banda5down').css('display','block');
	$('.banda6').css('display','none');
	$('.banda6up').css('display','none');
	$('.banda6down').css('display','none');
	numBandas = 5;
	colorB3 = 0;
	colorB4 = 1;
	calculoValor();
}
function seisBandasSelect(){
	$('.banda3').css('background','black');
	$('.banda3up').css('color','black');
	$('.banda3down').css('color','black');
	$('.banda4').css('margin-left','8.8em');
	$('.banda4up').css('margin-left','8.8em');
	$('.banda4down').css('margin-left','8.8em');
	$('.banda5').css('margin-left','11.7em');
	$('.banda5').css('display','block');
	$('.banda5').css('position','absolute');
	$('.banda5up').css('margin-left','11.7em');
	$('.banda5up').css('display','block');
	$('.banda5down').css('margin-left','11.7em');
	$('.banda5down').css('display','block');
	$('.banda6').css('margin-left','13.3em');
	$('.banda6').css('display','block');
	$('.banda6').css('position','absolute');
	$('.banda6up').css('margin-left','13.3em');
	$('.banda6up').css('display','block');
	$('.banda6down').css('margin-left','13.3em');
	$('.banda6down').css('display','block');
	numBandas = 6;
	colorB3 = 0;
	colorB4 = 0.01;
	calculoValor();
}
function cambioColorMas(color,banda){
	var cambio;
	if(color == 9){
		$(banda).css('background','black');
		$(banda+'up').css('color','brown');
		$(banda+'down').css('color','white');
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
	}
	return cambio;
}
function cambioColorMenos(color,banda){
	var cambio;
	if(color == 0){
		$(banda).css('background','white');
		$(banda+'up').css('color','black');
		$(banda+'down').css('color','gray');
		cambio = 9;
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
function cambioColorMultiplicadorMas(color,banda){
	var cambio;
	if(color == 0.01){
		$(banda).css('background','black');
		$(banda+'up').css('color','brown');
		$(banda+'down').css('color','#E3E4E5');
		cambio = 1;
	}else if(color == 1){
		$(banda).css('background','brown');
		$(banda+'up').css('color','red');
		$(banda+'down').css('color','black');
		cambio = 10;
	}else if(color == 10){
		$(banda).css('background','red');
		$(banda+'up').css('color','orange');
		$(banda+'down').css('color','brown');
		cambio = 100;
	}else if(color == 100){
		$(banda).css('background','orange');
		$(banda+'up').css('color','yellow');
		$(banda+'down').css('color','red');
		cambio = 1000;
	}else if(color == 1000){
		$(banda).css('background','yellow');
		$(banda+'up').css('color','green');
		$(banda+'down').css('color','orange');
		cambio = 10000;
	}else if(color == 10000){
		$(banda).css('background','green');
		$(banda+'up').css('color','blue');
		$(banda+'down').css('color','yellow');
		cambio = 100000;
	}else if(color == 100000){
		$(banda).css('background','blue');
		$(banda+'up').css('color','purple');
		$(banda+'down').css('color','green');
		cambio = 1000000;
	}else if(color == 1000000){
		$(banda).css('background','purple');
		$(banda+'up').css('color','#EAC102');
		$(banda+'down').css('color','blue');
		cambio = 10000000;
	}else if(color == 10000000){
		$(banda).css('background','#EAC102');
		$(banda+'up').css('color','#E3E4E5');
		$(banda+'down').css('color','purple');
		cambio = 0.1;
	}else if(color == 0.1){
		$(banda).css('background','#E3E4E5');
		$(banda+'up').css('color','black');
		$(banda+'down').css('color','#EAC102');
		cambio = 0.01;
	}
	return cambio;
}
function cambioColorMultiplicadorMenos(color,banda){
	var cambio;
	if(color == 0.01){
		$(banda).css('background','#EAC102');
		$(banda+'up').css('color','#E3E4E5');
		$(banda+'down').css('color','purple');
		cambio = 0.1;
	}else if(color == 1){
		$(banda).css('background','#E3E4E5');
		$(banda+'up').css('color','black');
		$(banda+'down').css('color','#EAC102');
		cambio = 0.01;
	}else if(color == 10){
		$(banda).css('background','black');
		$(banda+'up').css('color','brown');
		$(banda+'down').css('color','#E3E4E5');
		cambio = 1;
	}else if(color == 100){
		$(banda).css('background','brown');
		$(banda+'up').css('color','red');
		$(banda+'down').css('color','black');
		cambio = 10;
	}else if(color == 1000){
		$(banda).css('background','red');
		$(banda+'up').css('color','orange');
		$(banda+'down').css('color','brown');
		cambio = 100;
	}else if(color == 10000){
		$(banda).css('background','orange');
		$(banda+'up').css('color','yellow');
		$(banda+'down').css('color','red');
		cambio = 1000;
	}else if(color == 100000){
		$(banda).css('background','yellow');
		$(banda+'up').css('color','green');
		$(banda+'down').css('color','orange');
		cambio = 10000;
	}else if(color == 1000000){
		$(banda).css('background','green');
		$(banda+'up').css('color','blue');
		$(banda+'down').css('color','yellow');
		cambio = 100000;
	}else if(color == 10000000){
		$(banda).css('background','blue');
		$(banda+'up').css('color','purple');
		$(banda+'down').css('color','green');
		cambio = 1000000;
	}else if(color == 0.1){
		$(banda).css('background','purple');
		$(banda+'up').css('color','gray');
		$(banda+'down').css('color','blue');
		cambio = 10000000;
	}
	return cambio;
}
function cambioColorToleranciaMas(color,banda){
	var cambio;
	if(color == 0.001){
		$(banda).css('background','#EAC102'); //Dorado
		$(banda+'up').css('color','#E3E4E5'); //Plata
		$(banda+'down').css('color','purple');
		cambio = 0.05;
	}else if(color == 0.05){
		$(banda).css('background','#E3E4E5'); //Plata
		$(banda+'up').css('color','brown');
		$(banda+'down').css('color','#EAC102'); //Dorado
		cambio = 0.1;
	}else if(color == 0.1){
		$(banda).css('background','brown');
		$(banda+'up').css('color','red');
		$(banda+'down').css('color','#E3E4E5'); //Plata
		cambio = 0.01;
	}else if(color == 0.01){
		$(banda).css('background','red');
		$(banda+'up').css('color','green');
		$(banda+'down').css('color','brown');
		cambio = 0.02;
	}else if(color == 0.02){
		$(banda).css('background','green');
		$(banda+'up').css('color','blue');
		$(banda+'down').css('color','red');
		cambio = 0.005;
	}else if(color == 0.005){
		$(banda).css('background','blue');
		$(banda+'up').css('color','purple');
		$(banda+'down').css('color','green');
		cambio = 0.0025;
	}else if(color == 0.0025){
		$(banda).css('background','purple');
		$(banda+'up').css('color','#EAC102'); //Dorado
		$(banda+'down').css('color','blue');
		cambio = 0.001;
	}
	return cambio;
}
function cambioColorToleranciaMenos(color,banda){
	var cambio;
	if(color == 0.001){
		$(banda).css('background','blue');
		$(banda+'up').css('color','purple');
		$(banda+'down').css('color','green');
		cambio = 0.0025;
	}else if(color == 0.05){
		$(banda).css('background','purple');
		$(banda+'up').css('color','#EAC102');
		$(banda+'down').css('color','blue');
		cambio = 0.001;
	}else if(color == 0.1){
		$(banda).css('background','#EAC102');
		$(banda+'up').css('color','#E3E4E5');
		$(banda+'down').css('color','purple');
		cambio = 0.05;
	}else if(color == 0.01){
		$(banda).css('background','#E3E4E5'); //Plata
		$(banda+'up').css('color','brown');
		$(banda+'down').css('color','#EAC102'); //Dorado
		cambio = 0.1;
	}else if(color == 0.02){
		$(banda).css('background','brown');
		$(banda+'up').css('color','red');
		$(banda+'down').css('color','#E3E4E5'); //Plata
		cambio = 0.01;
	}else if(color == 0.005){
		$(banda).css('background','red');
		$(banda+'up').css('color','green');
		$(banda+'down').css('color','brown');
		cambio = 0.02;
	}else if(color == 0.0025){
		$(banda).css('background','green');
		$(banda+'up').css('color','blue');
		$(banda+'down').css('color','red');
		cambio = 0.005;
	}
	return cambio;
}
function cambioColorCoefTempMas(color,banda){
	var cambio;
	if(color == 100){
		$(banda).css('background','red');
		$(banda+'up').css('color','orange');
		$(banda+'down').css('color','brown');
		cambio = 50;
	}else if(color == 50){
		$(banda).css('background','orange');
		$(banda+'up').css('color','yellow');
		$(banda+'down').css('color','red');
		cambio = 15;
	}else if(color == 15){
		$(banda).css('background','yellow');
		$(banda+'up').css('color','brown');
		$(banda+'down').css('color','orange');
		cambio = 25;
	}else if(color == 25){
		$(banda).css('background','brown');
		$(banda+'up').css('color','red');
		$(banda+'down').css('color','yellow');
		cambio = 100;
	}
	return cambio;
}
function cambioColorCoefTempMenos(color,banda){
	var cambio;
	if(color == 100){
		$(banda).css('background','yellow');
		$(banda+'up').css('color','brown');
		$(banda+'down').css('color','orange');
		cambio = 25;
	}else if(color == 50){
		$(banda).css('background','brown');
		$(banda+'up').css('color','red');
		$(banda+'down').css('color','yellow');
		cambio = 100;
	}else if(color == 15){
		$(banda).css('background','red');
		$(banda+'up').css('color','orange');
		$(banda+'down').css('color','brown');
		cambio = 50;
	}else if(color == 25){
		$(banda).css('background','orange');
		$(banda+'up').css('color','yellow');
		$(banda+'down').css('color','red');
		cambio = 15;
	}
	return cambio;
}
function btn1upPress(e){
	e.preventDefault();
	colorB1 = cambioColorMas(colorB1,'.banda1');
	calculoValor();
}
function btn2upPress(e){
	e.preventDefault();
	colorB2 = cambioColorMas(colorB2,'.banda2');
	calculoValor();
}
function btn3upPress(e){
	e.preventDefault();
	if(numBandas == 4){
		colorB3 = cambioColorMultiplicadorMas(colorB3,'.banda3');
	}else if(numBandas == 5 || numBandas == 6){
		colorB3 = cambioColorMas(colorB3,'.banda3');
	}
	calculoValor();
}
function btn4upPress(e){
	e.preventDefault();
	if(numBandas == 4){
		colorB4 = cambioColorToleranciaMas(colorB4,'.banda4');
	}else if(numBandas == 5 || numBandas == 6){
		colorB4 = cambioColorMultiplicadorMas(colorB4,'.banda4');
	}
	calculoValor();
}
function btn5upPress(e){
	e.preventDefault();
	colorB5 = cambioColorToleranciaMas(colorB5,'.banda5');
	calculoValor();
}
function btn6upPress(e){
	e.preventDefault();
	colorB6 = cambioColorCoefTempMas(colorB6,'.banda6');
	calculoValor();
}
function btn1downPress(e){
	e.preventDefault();
	colorB1 = cambioColorMenos(colorB1,'.banda1');
	calculoValor();
}
function btn2downPress(e){
	e.preventDefault();
	colorB2 = cambioColorMenos(colorB2,'.banda2');
	calculoValor();
}
function btn3downPress(e){
	e.preventDefault();
	if(numBandas == 4){
		colorB3 = cambioColorMultiplicadorMenos(colorB3,'.banda3');
	}else if(numBandas == 5 || numBandas == 6){
		colorB3 = cambioColorMenos(colorB3,'.banda3');
	}
	calculoValor();
}
function btn4downPress(e){
	e.preventDefault();
	if(numBandas == 4){
		colorB4 = cambioColorToleranciaMenos(colorB4,'.banda4');
	}else if(numBandas == 5 || numBandas == 6){
		colorB4 = cambioColorMultiplicadorMenos(colorB4,'.banda4');
	}
	calculoValor();
}
function btn5downPress(e){
	e.preventDefault();
	colorB5 = cambioColorToleranciaMenos(colorB5,'.banda5');
	calculoValor();
}
function btn6downPress(e){
	e.preventDefault();
	colorB6 = cambioColorCoefTempMenos(colorB6,'.banda6');
	calculoValor();
}
function obtenerMagnitudOhmios(multiplicador){
	if(ohmios >= 1000000){
		ohmios /= 1000000;
		magnitud = 'M';
	}else if(ohmios >= 1000){
		ohmios /= 1000;
		magnitud = 'K';
	}else{
		magnitud = '';
	}
	if(multiplicador == 0.01){
		ohmios = ohmios.toFixed(2);
	}else if(multiplicador == 0.1){
		ohmios = ohmios.toFixed(1);
	}
}

function obtenerMagnitudTolerancia(){
	if(tolerancia >= 1000000){
		tolerancia /= 1000000;
		magnitudTol = 'M';
	}else if(tolerancia >= 1000){
		tolerancia /= 1000;
		magnitudTol = 'K';
	}else{
		magnitudTol = '';
	}
}

function calculoValor(){
	if(numBandas == 4){
		ohmios = (((colorB1 * 10) + colorB2) * colorB3);
		tolerancia = ohmios * colorB4;
		ppm = 'N/A';
		porcentaje = colorB4 * 100;

		obtenerMagnitudOhmios(colorB3);
		obtenerMagnitudTolerancia();
		
		$('.ohmios').html('<span>'+ohmios+magnitud+'&Omega;</span>');
		$('.tolerancia').html('<span>'+porcentaje+'</span>');
		$('.superiorInferior').html('<span>'+tolerancia.toFixed(2)+magnitudTol+'&Omega;</span>');
		$('.ppm').html('<span>'+ppm+'</span>');
	}else if(numBandas == 5 || numBandas == 6){
		ohmios = (((colorB1 * 100) + (colorB2 * 10) + colorB3) * colorB4);
		tolerancia = ohmios * colorB5;
		porcentaje = colorB5 * 100;
		ppm = 'N/A';

		obtenerMagnitudOhmios(colorB4);
		obtenerMagnitudTolerancia();

		$('.ohmios').html('<span>'+ohmios+magnitud+'&Omega;</span>');
		$('.tolerancia').html('<span>'+porcentaje+'</span>');
		$('.superiorInferior').html('<span>'+tolerancia.toFixed(3)+magnitudTol+'&Omega;</span>');
		$('.ppm').html('<span>'+ppm+'</span>');
		if(numBandas == 6){
			ppm = colorB6;
			$('.ppm').html('<span>'+ppm+'</span>');
		}
	}
}	

$('.conversion').click( elegirConversion );
$('.cuatroBandas').click( cuatroBandasSelect );
$('.cincoBandas').click( cincoBandasSelect );
$('.seisBandas').click( seisBandasSelect );
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