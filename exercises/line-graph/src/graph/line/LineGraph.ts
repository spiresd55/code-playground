import {TwoDimensionalPoint} from "../2dPoint";
import {AbstractTwoDimensionalGraph} from "../AbstractTwoDimensionalGraph";

export class LineGraph extends AbstractTwoDimensionalGraph {
    canvas: HTMLCanvasElement = null; //The html canvas element to draw on
    context: CanvasRenderingContext2D; //The html context
    xDistance: number; //The distance between X points
    yDistance: number; //The distance between y points

    //Default points if user does not provide any
    defaultPoints: TwoDimensionalPoint[] = [
        new TwoDimensionalPoint(1, 2),
        new TwoDimensionalPoint(2, 0),
        new TwoDimensionalPoint(3, 9),
        new TwoDimensionalPoint(5, 0),
        new TwoDimensionalPoint(10, 3),
    ];

    constructor() {
        super(); //Initialize Super constructor
    }

    //Implement Abstract Method from Abstract Class
    draw(points: TwoDimensionalPoint[]) {
        //These 2 methods will add a grid with numbering to the graph
        this.drawGraphGrids();
        this.drawGraphTicks();

        if(!points.length) {
            points = this.defaultPoints;
        }

        console.log(points);

        this.context.beginPath();
        this.context.lineWidth =2;
        this.context.strokeStyle = "#000000"; //Fill Stroke could be property from interface

        //Default Starting Point
        this.context.moveTo( 0, +this.canvasHeight - 0);

        //Draw each provided coordinate
        points.forEach((point) => {
            this.context.lineTo((point.x * +this.xDistance), (+this.canvasHeight - (point.y
                * +this.yDistance)));
            this.context.stroke();
        });
    }

    //Act as init method, once element is connected run the following code
    connectedCallback() {
        //Render the canvas in the custom component
        this.render();

        //-20 to add padding to the graph
        this.canvasHeight = (+this.canvasHeight - 20).toString();
        this.canvasWidth = (+this.canvasWidth - 20).toString();

        //Distance between points
        this.xDistance = (+this.canvasWidth / +this.maxX);
        this.yDistance = (+this.canvasHeight / +this.maxY);
        this.draw(
            this.convertTupleToPointArray(JSON.parse(this.userPoints)));
    }

    render() {
        //Renders html using shadow dom
        //Read more here: https://developers.google.com/web/fundamentals/web-components/shadowdom
        //#graph will never collide with another ID because shadow dom is being used
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
                    <canvas id="graph"
                            width="${this.canvasWidth}" 
                            height="${this.canvasHeight}">
                    </canvas>`;

        //Get canvas and context
        this.canvas = <HTMLCanvasElement>shadowRoot.getElementById('graph');
        this.context = this.canvas.getContext('2d');
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

        //Draw X Axis Ticks with axis number
        for(let i = 1; i < +this.maxX; i++) {
            this.context.moveTo(+this.xDistance*i, +this.canvasHeight + 4);
            this.context.lineTo(+this.xDistance*i, +this.canvasHeight - 4);
            this.context.font = "9px Arial";
            this.context.textAlign = "start";
            this.context.fillText(i.toString(), +this.xDistance*i-2, +this.canvasHeight + 15);
        }

        //Draw Y Axis Ticks with axis number
        for(let i = 1; i < +this.maxY; i++) {
            this.context.moveTo( 0, (+this.canvasHeight - +this.yDistance*i));
            this.context.lineTo( 4, (+this.canvasHeight - +this.yDistance*i));
            this.context.font = "9px Arial";
            this.context.textAlign = "start";
            this.context.fillText(i.toString(), 6,
                (+this.canvasHeight - +this.yDistance*i + 2));
        }
        this.context.stroke();
    }

}