let users = {
	"zhen":2000,
	"pavel":4000,
	"max":1000
};
let users2 = {
	zhen:0,
	pavel:10,
	max:0
};


//let to_Mass = Object.entries(users).map(([ key, value ]) => [ key, funSum(value)]);
//var sumSal;


//max_Salary(users);
//alert(topSalary(users));


//	for(let [name, salary] of Object.entries(users)) {
//		alert(name);    
//		}

let poz_box = document.getElementById('game');
let poz_box_shit = document.getElementsByTagName('P')
//alert(poz_box_shit[0].offsetTop);

function Counter() {
  let count = 0;
  let count_left = 0
  
  this.up = function() {
    count-=10
    //alert(count) 
    poz_box.style.cssText+="top:" +(count)+"px;"
  	return count;
  };
  this.down = function() {
  	count+=10
    //alert(count)
    poz_box.style.cssText+="top:"+(count)+"px;"
    return count;
  };
  this.left = function() {
  	count_left-=10
    //alert(count)
    poz_box.style.cssText+="left:"+(count_left)+"px;"
    return count_left;
  };
  this.right = function() {
  	count_left+=10
    //alert(count)
    poz_box.style.cssText+="left:"+(count_left)+"px;"
    return count_left;
  };
}

let counter = new Counter();



function over(){

	let left_P = poz_box.offsetLeft;
	let top_P = poz_box.offsetTop;	
		if (left_P<3 ){
			alert("проиграл");
		} else if(left_P>1200){
				alert("победа")
		    }

		if (top_P<3 || top_P>204){
			danse.pause();	
			alert("проиграл");
			location.reload();
		}
	fun_grov();
	fun_stop();
	danse.play();	

}

function fun_stop(){
for(let i=0; i<poz_box_shit.length; i++){
	let left_P = poz_box.offsetLeft;
	let top_P = poz_box.offsetTop;
	let left_P_Shit = poz_box_shit[i].offsetLeft;
	let top_P_Shit = poz_box_shit[i].offsetTop;
		if( ((left_P > left_P_Shit && left_P < left_P_Shit+20) && (top_P>top_P_Shit && top_P<top_P_Shit+20))||
			((left_P+50 > left_P_Shit && left_P+50 < left_P_Shit+20) && (top_P+50>top_P_Shit && top_P+50<top_P_Shit+20))||
			((left_P+50 > left_P_Shit && left_P< left_P_Shit+20) && (top_P+50>top_P_Shit && top_P<top_P_Shit+20))
			){
			danse.pause();
			alert('проиграл!');
			location.reload();
			}
	}
}

function fun_grov(){
for (let i=0; i<poz_box_shit.length; i++){
	let left_P_Shit = poz_box_shit[i].offsetLeft;
	poz_box_shit[i].style.cssText+="left:"+(left_P_Shit-5)+"px;"
	if (left_P_Shit<=50){
		fun_again_start()
			}
 }
}

function fun_again_start(){
	for (let i=0; i<poz_box_shit.length; i++){
			poz_box_shit[i].style.cssText+="left:"+getRandomInt(50, 1500)+"px;"
			poz_box_shit[i].style.cssText+="top:"+getRandomInt(-20, 200)+"px;"
	}
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


var danse = new Audio()
danse.src = "zeml.mp3";
