var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');

var c_1 = document.getElementById('c_1');
var c_2 = document.getElementById('c_2');

/**/
var opacity = document.querySelector('.opacity');
var background = document.querySelector('.tv');
var tv = document.querySelector('.tv p');
var interruptor = document.getElementById('toggle');


btn2.onclick = function(){
	btn2.style.background="#e1287e";
	btn1.style.background="rgba(71, 71, 71, 0.5)";
	c_1.style.position="fixed";
	c_2.style.marginTop="0";
	c_2.style.opacity="1";
}

btn1.onclick = function(){
	btn1.style.background="#e1287e";
	btn2.style.background="rgba(71, 71, 71, 0.5)";
    c_2.style.marginTop="-36%";
	c_2.style.opacity="0";
	c_1.style.position="sticky";
}

/**/

function encender(){
if (interruptor.checked == true){
	tv.style.opacity="1";
	opacity.style.background="rgba(0, 0, 0, 0.7)";
	background.style.background="url('img/flyingcars.gif')";
	background.style.backgroundSize=" cover";
    background.style.backgroundPosition=" center";
    background.style.backgroundRepeat= "no-repeat";
    background.style.boxShadow="0 0 0.5em 0.2em #02fff8";
}

else{
	tv.style.opacity="0";
	opacity.style.background="none";
	background.style.background="none";
	background.style.boxShadow="none";
}
}
