let poz_box = document.getElementById('sach');
let poz_box_shit = document.getElementsByTagName('P')
let win_flex = document.getElementById('flex');
let win_left = document.getElementById('left');
let win_game = document.getElementById('game');
let win_rirht = document.getElementById('right');
let my_name = document.getElementById('my_name')
let r = (win_flex.clientWidth - win_left.clientWidth);
let with_wind = document.documentElement.scrollWidth
let btn_play = document.getElementById('play')
let btn_rools = document.getElementById('rools')
let btn_history = document.getElementById('history')

var danse = new Audio()
danse.src = "gta.mp3";
var danse_G = new Audio()
danse_G.src = "kl.mp3";
var svin = new Audio()
svin.src = "skysh.ogg";
var finvin = new Audio();
finvin.src = "fin.ogg"





function Counter() {
  let count = 0;
  let count_left = 0
  
  this.up = function() {
    count-=20
    //alert(count) 
    poz_box.style.cssText+="top:" +(count)+"px;"
    return count;
  };
  this.down = function() {
    count+=20
    //alert(count)
    poz_box.style.cssText+="top:"+(count)+"px;"
    return count;
    
  };

  this.left = function() {
  	count_left-=20
    //alert(count)
    poz_box.style.cssText+="left:"+(count_left)+"px;"
    return count_left;
  };
  this.right = function() {
  	count_left+=20
    //alert(count)
    poz_box.style.cssText+="left:"+(count_left)+"px;"
    return count_left;
  };
}
let value=60;

function chet(){
  let drop=10;
  value+=drop;
  return value
}
let value2 =8;
function chet2(){
  value2--;
  return value2
} ;

setInterval(fun_repet,4000)
function fun_repet(){
  if (document.documentElement.scrollWidth
<550) {
    alert("У тебя узкий экран: "+document.documentElement.scrollWidth+"pc, поверни телефон что бы было удобнее! (или я буду надоедать)")
  }
  else return
}

///////////////////////////////////// начало игры
//slideBar.className='mainOn';
(function start_game(){
  let aa = prompt('как тебя зовут?','Илья')
  alert ('привет '+aa+', а я голодный сыч, давай начнем игру ?')
  my_name.innerHTML=aa+", залипай";
  //win_flex.className='flex_container';
  
})()

function start_Btn_Game(){
  danse_G.play();
  danse.pause ();
  btn_play.className='main_game_of';
  win_flex.className='flex_container';
}

function rools_Game(){
  danse.play();
  btn_rools.className ='game_rools';
}
function history_Game(){
  danse.play();
  btn_history.className ='game_history';
}
function rools_Game_back(){
  btn_rools.className ='game_rools_back';
}function history_Game_back(){
  btn_history.className ='game_history_back';
}


/////////////////////////////////
function fun_stop(){
fun_Toclouse();
over()
for( let i=0; i<poz_box_shit.length; i++){
  let left_P = poz_box.offsetLeft;
  let top_P = poz_box.offsetTop;
  let css = poz_box.style.cssTex;
  let left_P_Shit = poz_box_shit[i].offsetLeft;
  let top_P_Shit = poz_box_shit[i].offsetTop;
  let sach_width = poz_box.clientWidth; 
    if( ((left_P > left_P_Shit && left_P < left_P_Shit+20) && (top_P>top_P_Shit && top_P<top_P_Shit+20))||
      ((left_P+sach_width > left_P_Shit && left_P+sach_width < left_P_Shit+20) && (top_P+sach_width>top_P_Shit && top_P+sach_width<top_P_Shit+20))||
      ((left_P+sach_width > left_P_Shit && left_P< left_P_Shit+20) && (top_P+sach_width>top_P_Shit && top_P<top_P_Shit+20))
      ){
      let x = chet();
      let y = chet2();
      poz_box.style.cssText+="width:"+x+"px; height:"+x+"px";
      poz_box_shit[i].style.cssText="display:none;"
      if (y==0) {
        danse_G.pause();
        finvin.play();
        alert("победа! больше не бегай по столу");
        location.reload();

      }else{

        danse_G.pause()
        svin.play()
        
        alert("Осталось скушать: "+y);
        danse_G.play()
       }
      }
  }
}

function over(){

  let left_P = poz_box.offsetLeft;
  let top_P = poz_box.offsetTop;  
    if (left_P<win_rirht.clientWidth){
     //alert("соберись!");
     counter.right();
        //location.reload();
    }else if(  left_P-win_rirht.clientWidth>win_game.clientWidth-poz_box.clientHeight ){
    //alert("соберись!!");
      counter.left();
    }else if (top_P>(win_game.clientHeight-poz_box.clientHeight)){
       counter.up()
        //location.reload();
    }else if(top_P<-1){
      //alert("соберись!");
      counter.down()
       // location.reload();    
    }
}




////////////////////убегает 

function fun_Toclouse(){

for( let i=0; i<poz_box_shit.length; i++){
  let left_P = poz_box.offsetLeft;
  let top_P = poz_box.offsetTop;
  let css = poz_box.style.cssTex;
  let left_P_Shit = poz_box_shit[i].offsetLeft;
  let top_P_Shit = poz_box_shit[i].offsetTop;
  let sach_width = poz_box.clientWidth+100; 
    if( ((left_P > left_P_Shit && left_P < left_P_Shit+150) && (top_P>top_P_Shit && top_P<top_P_Shit+150))||
      ((left_P+sach_width > left_P_Shit && left_P+sach_width < left_P_Shit+150) && (top_P+sach_width>top_P_Shit && top_P+sach_width<top_P_Shit+150))||
      ((left_P+sach_width > left_P_Shit && left_P< left_P_Shit+150) && (top_P+sach_width>top_P_Shit && top_P<top_P_Shit+150))
      ){
      setTimeout(function(){
      poz_box_shit[i].style.cssText+="left:"+getRandomInt(win_left.clientWidth,win_left.clientWidth*4.5)+"px;";
      poz_box_shit[i].style.cssText+="top:"+getRandomInt(5,100)+"%;";
          },300)
      }

  }
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
/////////////////






let counter = new Counter();

win_flex.addEventListener("click", fun_stop ) 

document.addEventListener("keydown", function(event) {

    if (event.keyCode==37||event.keyCode==87) {
          counter.up();
    }
    if (event.keyCode==40||event.keyCode==83) {
          counter.down();
    }
    if (event.keyCode==65||event.keyCode==37) {
          counter.left();
    }
    if (event.keyCode==39||event.keyCode==68) {
          counter.right();
    }

    fun_Toclouse();
    fun_stop();
    over()

})


