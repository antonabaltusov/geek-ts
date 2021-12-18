interface ICoordinates {
  x:number
  y:number
} 

interface IRectangleArea {
  rightHigh:ICoordinates
  leftBottom:ICoordinates
}

abstract class MyGraphicsPrimitive2D{
  private _rectangleArea: IRectangleArea
  constructor(_rectangleArea: IRectangleArea){
    this._rectangleArea = _rectangleArea
  }
  get rectangleArea():Readonly<IRectangleArea> {
    return this._rectangleArea
  }

  move(x:number, y:number):void{
    this._rectangleArea.leftBottom.x+=x;
    this._rectangleArea.leftBottom.y+=y;
    this._rectangleArea.rightHigh.x+=x;
    this._rectangleArea.rightHigh.y+=y;
  }
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D{
  private _square: number
  constructor(rectangleArea: IRectangleArea){
    super(rectangleArea);
    this._square = this.getSquare();
  }
  getSquare():number{
    return (this.rectangleArea.rightHigh.x - this.rectangleArea.leftBottom.x)*(this.rectangleArea.rightHigh.y - this.rectangleArea.leftBottom.y);
  }

  move(x:number, y:number):void{
    super.move(x,y);
    this._square = this.getSquare()
  }

  get square(): Readonly<number> {
    return this._square
  }
}
class MyRectangle extends MyAreaPrimitive2D{
  private _rightBottom:ICoordinates
  private _leftHigh:ICoordinates
  private _width:number
  private _high:number
  constructor(_rectangleArea: IRectangleArea){
    super(_rectangleArea)
    this._high = this.rectangleArea.rightHigh.y - this.rectangleArea.leftBottom.y;
    this._width = this.rectangleArea.rightHigh.x - this.rectangleArea.leftBottom.x;
    this._rightBottom  = {
      x:this.rectangleArea.rightHigh.x,
      y:this.rectangleArea.leftBottom.y
    };
    this._leftHigh  = {
      x:this.rectangleArea.leftBottom.x,
      y:this.rectangleArea.rightHigh.y
    }
  }
  get rightBottom(): Readonly<ICoordinates> {
    return this._rightBottom
  }
  get leftHigh(): Readonly<ICoordinates> {
    return this._leftHigh
  }
  get width(): Readonly<number> {
    return this._width
  }
  get high(): Readonly<number> {
    return this._high
  }
}

const rectangleArea1:IRectangleArea = {
  rightHigh: {x:2,y:3},
  leftBottom: {x:0, y:0}
}
const rectangle  = new MyRectangle(rectangleArea1);

rectangle.move(2,5);
console.log(rectangle.square);
console.log(rectangle.rectangleArea);

