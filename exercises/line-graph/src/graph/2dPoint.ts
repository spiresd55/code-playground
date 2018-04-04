export interface TwoDimensionalPoint {
    x: number;
    y: number;
}

export class TwoDimensionalPoint implements TwoDimensionalPoint{
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}