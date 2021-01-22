const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render =  Matter.Render;
var score = 0

var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango0;
var stoneObj,connect,boy1,ground,tree1,engine,world,sc;
var backgroundImg,bg = "0.png"

function preload(){
  getBackgroundImg()
}

function setup() {
	createCanvas(3423,1000);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 3423,
		  height: 1000,
		  wireframes: false
        }
      });
      
      ground1 = new Ground(1600,970,3456,30)
      ground2 = new Ground(1120,450,690,30)
      ground3 = new Ground(2300,705,600,30)
      


      ball = new hexagon(250,200,50)

      launch1 = new Launcher(ball.body,{x:300,y:170})

      block1 = new block(860,445,120,50)
      block2 = new block(990,445,120,50)
      block3 = new block(1120,445,120,50)
      block4 = new block(1250,445,120,50)
      block5 = new block(1380,445,120,50)

     block6 = new block(860+65,445-55,120,50)
      block7 = new block(860+195,445-55,120,50)
     block8 = new block(860+325,445-55,120,50)
     block9 = new block(860+455,445-55,120,50)

     block10 = new block(925+65,445-110,120,50)
     block11= new block(1055+65,445-110,120,50)
     block12= new block(1055+260-65,445-110,120,50)

     block13= new block(1055,445-165,120,50)
     block14= new block(1185,445-165,120,50)

     block15= new block(1055+65,445-220,120,50)




     block16= new block(2100,700,90,50)
     block17= new block(2200,700,90,50)
     block18= new block(2300,700,90,50)
     block19= new block(2400,700,90,50)
     block20= new block(2500,700,90,50)

     block21= new block(2200,645,90,50)
     block22= new block(2300,645,90,50)
     block23= new block(2400,645,90,50)

     block24= new block(2300,590,90,50)

    




      

  
}


function draw() {
  if(backgroundImg)
        background(backgroundImg);
	background("grey")
	
  rectMode(CENTER);
  noStroke();
  textSize(35);
  fill("white")
  text("score  "+score,width-300,50)

  
  Engine.update(engine)

  textSize(50);
  stroke("black")
  text("Drag your mouse to aim at the blocks and release it to SHOOT",150,50);
  text("you can also use UP ARROW key to give yourself a second chance",350,100)


  
 ground1.display()
 ground2.display()
 ground3.display()

 ball.display()

 launch1.display()

 stroke("blue")
 fill("blue")
 block1.display()
 block2.display()
 block3.display()
 block4.display()
 block5.display()

 fill("green")
 block6.display()
 block7.display()
 block8.display()
 block9.display()

 fill("red")
 block10.display()
 block11.display()
 block12.display()

fill("yellow")
 block13.display()
 block14.display()
 
 fill("purple")
 block15.display()

 block16.display()
 block17.display()
 block18.display()
 block19.display()
 block20.display()

 fill("yellow")
 block21.display()
 block22.display()
 block23.display()
 
fill("red")
 block24.display()


 block1.score()
 block2.score()
  block3.score()
  block4.score()
  block5.score()
  block6.score()
  block7.score()
  block8.score()
  block9.score()
  block10.score()
  block11.score()
  block12.score()
  block13.score()
  block14.score()
  block15.score()
  block16.score()
  block17.score()
  block18.score()
  block19.score()
  block20.score()
  block21.score()
  block22.score()
  block23.score()
  block24.score()
 
  
 
 

 



  
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
	}
	
	
	function mouseReleased(){
		launch1.fly()
    }

    function keyPressed(){
		if(keyCode === UP_ARROW){
			Matter.Body.setPosition(ball.body,{x:300,y:200})
			launch1.attach(ball.body)
		}
  }
  async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "0.jpg";
    }
    else{
        bg = "1.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);

   
    
}

