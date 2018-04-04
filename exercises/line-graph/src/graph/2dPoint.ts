export interface TwoDimensionalPoint {
    x: number;
    y: number;
}

//Ideally I should separate these into 2 separate files
export class TwoDimensionalPoint implements TwoDimensionalPoint{
    constructor(x: number, y: number) {
        this.x = x; //X coordinate
        this.y = y; //Y coordinate
    }
}