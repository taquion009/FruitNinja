export default function MoveFruit(width,canvas,stage,mover){ 
    let cord = []
    let x = 0
    
    for(let i = -400;i <= 400;i += 5){
        let cuenta = ((i*i)-(2*i)+2)/canvas.width*7
        cord.push({x:x+mover,y:cuenta})
        // var graphics = new PIXI.Graphics();
        // graphics.beginFill(0xFFFF00);
        // graphics.lineStyle(5, 0xFF0000);
        // graphics.drawRect(x+mover, cuenta+canvas.height/2, 10, 10);
        // stage.addChild(graphics);
        x+=10
    }
    if(mover < 0){
        return cord
    }else{
        return cord.reverse()
    }
    
}