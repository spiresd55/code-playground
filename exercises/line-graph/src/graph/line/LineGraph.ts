import {TwoDimensionalPoint} from "../2dPoint";
import {AbstractTwoDimensionalGraph} from "../AbstractTwoDimensionalGraph";

export class LineGraph extends AbstractTwoDimensionalGraph {
    //points: [TwoDimensionalPoint]; //User Inputted Points
    canvas: HTMLCanvasElement = null; //The html canvas element to draw on
    context: CanvasRenderingContext2D; //The html context
    xDistance: Number; //The distance between X points
    yDistance: number; //The distance between y points

    defaultPoints: TwoDimensionalPoint[] = [
        new TwoDimensionalPoint(1, 2),
     //   new TwoDimensionalPoint(2, 5),
        //new TwoDimensionalPoint(3, 7),
        new TwoDimensionalPoint(5, 0),
        new TwoDimensionalPoint(9, 3),
    ];

    constructor() {
        super();

        console.log('LINE GRAPH IMPLEMENTED');
    }

    //Implement Abstract Method from Abstract Class
    draw(points: TwoDimensionalPoint[]) {
        this.drawGraphGrids();
        this.drawGraphTicks();

        if(!points.length) {
            points = this.defaultPoints;
        }

        console.log(points);

        this.context.beginPath();
        this.context.lineWidth =2;
        this.context.strokeStyle = "#000000";

        //Default Starting Point
        this.context.moveTo( 0, +this.canvasHeight - 0);

        points.forEach((point) => {
            console.log(point);
            this.context.lineTo((point.x * +this.xDistance), (+this.canvasHeight - (point.y
                * +this.yDistance)));
            this.context.stroke();
        });
    }

    //Act as init method, once element is connected run the following code
    connectedCallback() {
        console.log('Connected');
        console.log(this.canvasHeight);
        console.log(this.canvasWidth);
        console.log(this.maxX);
        console.log(this.maxY);
        this.render();
        this.canvasHeight = (+this.canvasHeight - 20).toString();
        this.canvasWidth = (+this.canvasWidth - 20).toString();
        this.xDistance = (+this.canvasWidth / +this.maxX);
        this.yDistance = (+this.canvasHeight / +this.maxY);
        console.log(this.xDistance);
        console.log(this.yDistance);
        this.draw([]);
    }

    render() {
        //this.draw(this.points);

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
                    <canvas id="graph"
                            width="${this.canvasWidth}" 
                            height="${this.canvasHeight}">
                    </canvas>`;

        this.canvas = <HTMLCanvasElement>shadowRoot.getElementById('graph');
        this.context = this.canvas.getContext('2d');

        //Try Drawing
        //this.context.moveTo(0, 0);
        //this.context.lineTo(123, 375);
        //this.context.stroke();



        console.log('Canvas Height');
        console.log(this.canvasHeight);
    }

    drawGraphGrids() {
        //Begin Drawing
        this.context.beginPath();
        this.context.lineWidth = 1;
        this.context.strokeStyle = "#e9e9e9";

        //Draw X Grids
        for(let i = 1; i <= +this.maxX; i++) {
            this.context.moveTo(0, i * +this.yDistance);
            this.context.lineTo(+this.xDistance * +this.maxX, i * +this.yDistance);
        }

        //Draw Y Grids
        for(let i = 0; i < +this.maxY; i++) {
            this.context.moveTo( i * +this.xDistance, 0);
            this.context.lineTo(i * +this.xDistance,+this.yDistance * +this.maxY);
        }

        //Finish Drawing
        this.context.stroke();
    }

    drawGraphTicks() {
        //Begin Drawing
        this.context.beginPath();
        this.context.lineWidth = 1;
        this.context.strokeStyle = "#000000";

        //Draw X Axis Ticks
        for(let i = 1; i < +this.maxX; i++) {
            this.context.moveTo(+this.xDistance*i, +this.canvasHeight + 4);
            this.context.lineTo(+this.xDistance*i, +this.canvasHeight - 4);
            this.context.font = "9px Arial";
            this.context.textAlign = "start";
            this.context.fillText(i.toString(), +this.xDistance*i-2, +this.canvasHeight + 15);
        }

        //Draw Y Axis Ticks
        for(let i = 1; i < +this.maxY; i++) {
            this.context.moveTo( 0, (+this.canvasHeight - +this.yDistance*i));
            this.context.lineTo( 4, (+this.canvasHeight - +this.yDistance*i));
            this.context.font = "9px Arial";
            this.context.textAlign = "start";
            this.context.fillText(i.toString(), 6, (+this.canvasHeight - +this.yDistance*i + 2));
        }
        this.context.stroke();
    }

}