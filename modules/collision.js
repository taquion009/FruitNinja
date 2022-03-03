export default function Collision(a, b){
    var ab = a
    var bb = b
    // var graphics = new PIXI.Graphics();
  
    // graphics.beginFill(0xFFFF00);
    // graphics.lineStyle(5, 0xFF0000);
    // graphics.drawRect(bb.x - (bb.width/2), bb.y - (bb.height/2), bb.width, bb.height);
    // stage.addChild(graphics);
    return ab.x < bb.x + (bb.width/2) &&
    ab.x + ab.width > bb.x - (bb.width/2)&&
    ab.y < bb.y + (bb.height/2) &&
    ab.height + ab.y > bb.y - (bb.height/2)
}