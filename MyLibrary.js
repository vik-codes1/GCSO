function crashCheck(){
    

    if(wall.x - car.x < car.width/2 + wall.width/2) {
        car.velocityX=0;
        
        force = 0.5*weight*speed/2250;

        if(force < 100){
            car.shapeColor=color(0,255,0);
        }
        else if(force < 180 && force > 100){
            car.shapeColor=color(230,230,0);
        } 
        else if(force > 180) {
        car.shapeColor=color(255,0,0);
        }
    }
}