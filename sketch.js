var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var road;
var car1img,car2img,car3img,car4img;
var powerimg , roadimg
var powerGroup;
var power;
function preload(){
  trackimg = loadImage("images/road.png")
  car1img = loadImage("images/black.png")
  car2img = loadImage("images/green.png")
  car3img = loadImage("images/hero.png")
  car4img =  loadImage("images/red.png")
  roadimg = loadImage("images/road.png")
  powerimg = loadImage("images/power.png")
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  powerGroup = new Group();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
