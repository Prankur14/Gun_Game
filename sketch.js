var lobby;
var lobbyState = "begin";
var gameState = "mainLobby";
var soundTimer_start = 1;
var soundTimer_htp = 1;
var mouse_over_sound;
var before_theme_timer = 1;
var lobby_song;
var lobby_song_timer = 1;
var click_timer = 1;
var soundTimer_back = 1;



function preload(){

lobby_normal = loadAnimation('lobby/normal_lobby/normal.png');
lobby_normal_start = loadAnimation('lobby/normal_lobby/start.png');
lobby_normal_htp = loadAnimation('lobby/normal_lobby/htp.png');

lobby_gun_selector = loadAnimation('lobby/gun_selector/normal.png');
lobby_gun_m16 = loadAnimation('lobby/gun_selector/m16.png');
lobby_gun_deagle = loadAnimation('lobby/gun_selector/deagle.png');
lobby_gun_sniper = loadAnimation('lobby/gun_selector/sniper.png');
lobby_gun_back = loadAnimation('lobby/gun_selector/back.png');

lobby_click_to_start = loadAnimation("press_to_start.png");


mouse_over_sound = loadSound('sounds/menu.mp3');
beforeTheme = loadSound('sounds/before_theme.mp3');
lobby_song = loadSound('sounds/main_lobby_song.mp3');
click_sound = loadSound('sounds/click.mp3');
mouse_over_back = loadSound('sounds/menu.mp3');


}

function setup() {
createCanvas(2250, 1150);
lobby = createSprite(2250/2, 1150/2);
lobby.addAnimation("main_normal",lobby_normal);
lobby.addAnimation("clickToStart", lobby_click_to_start);
lobby.addAnimation("main_htp", lobby_normal_htp);
lobby.addAnimation("main_start",lobby_normal_start);
lobby.addAnimation("normalGunSelector", lobby_gun_selector);
lobby.addAnimation("m16", lobby_gun_m16);
lobby.addAnimation("deagle", lobby_gun_deagle);
lobby.addAnimation("sniper", lobby_gun_sniper);
lobby.addAnimation("lobby_gun_back", lobby_gun_back);

startButton = createSprite(((2215-1820)/2)+1820, ((750-540)/2) + 540,  2214-1825, 760-550  );
startButton.visible = false;

htp = createSprite(((2211-1632)/2)+1632, ((1061-823)/2) +823, 2211-1632, 1061-823);
htp.visible = false;

backButton = createSprite(((2070-1620)/2)+1620, ((1000-765)/2)+765,2070-1620, 1000-765 );
backButton.visible = false;

m16Button = createSprite(((825-170)/2)+170, ((335-167)/2)+167, 825-170,335-167); 
m16Button.visible = false;

pistolBtton = createSprite(((558-228)/2)+220, ((656-490)/2)+490, 565-228, 656-490);
pistolBtton.visible = false;

sniperButton = createSprite(((852-153)/2)+153, ((992-815)/2)+815, 852-153, 992-815);
sniperButton.visible =  false;

  

  

}

function draw() {
  background(220);



if(lobbyState === "begin"){
  

if(before_theme_timer === 1){
  beforeTheme.play();
  beforeTheme.setVolume(0.2)
  before_theme_timer = 0;
}
lobby.changeAnimation("clickToStart", lobby_click_to_start);
  if(mousePressedOver(lobby)){
    beforeTheme.pause();
    lobbyState = "normal";
  }
}

if( lobby_song_timer === 1){
  if(lobbyState === "normal" || lobbyState === "gun_selector"){
    lobby_song.play();
  lobby_song.setVolume(0.1);
  lobby_song_timer = 0;
}
}
 
  if(lobbyState === "normal"){

    startButton.x = ((2215-1820)/2)+1820;
  lobby.changeAnimation("main_normal", lobby_normal);
  
if(gameState === "mainLobby"){
if(mouseIsOver(startButton)){

lobby.changeAnimation("main_start", lobby_normal_start);

if(soundTimer_start === 1){
  mouse_over_sound.play();
  soundTimer_start = 0;
}


}


if(mouseIsOver(htp)){
  lobby.changeAnimation("main_htp", lobby_normal_htp);
if(soundTimer_htp === 1){
  mouse_over_sound.play();
  soundTimer_htp = 0;

}


  }

  









  
}

}if(mousePressedOver(startButton)){
    if(click_timer === 1){
      click_sound.play();
      click_timer = 0;
      lobbyState = "gun_selector"
    }
  }

  if(mousePressedOver(htp)){
    if(click_timer === 1){
      click_sound.play();
      click_timer = 0;
      //lobbyState = "gun_selector"
    }
  }

  

  if(mouseIsOver(startButton) === false){
    soundTimer_start = 1;
    click_timer = 1;
  }

  if(mouseIsOver(htp) === false){
    soundTimer_htp = 1;
    click_timer = 1;
  }

  
if(lobbyState === "gun_selector"){

  soundTimer_start = 1;

startButton.x = 10000;
  lobby.changeAnimation("normalGunSelector" ,lobby_gun_selector);

if(mouseIsOver(m16Button)){
  lobby.changeAnimation("m16", lobby_gun_m16);

}
if(mouseIsOver(pistolBtton)){
  lobby.changeAnimation("deagle", lobby_gun_deagle);
}
if(mouseIsOver(sniperButton)){
  lobby.changeAnimation("sniper", lobby_gun_sniper);
}



if(mouseIsOver(backButton)){
  lobby.changeAnimation("lobby_gun_back", lobby_gun_back);
  if(soundTimer_back === 1){
    mouse_over_sound.play();
    soundTimer_back = 0;
  }

if(mousePressedOver(backButton)){
  lobby.changeAnimation("main_lobby", lobby_normal);
  if(click_timer === 1){
    click_sound.play();
    click_timer = 0;
  }

  mouseX = 200;
  
  lobbyState = "normal";
}

  
}

if(mouseIsOver(backButton) === false){
   soundTimer_back =1;
 click_timer = 1;
}
} 




  
console.log(mouseX, mouseY);
drawSprites();
}


