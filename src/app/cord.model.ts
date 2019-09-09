

export class Cord {
    public x;
    public y;
    public relative: boolean;

    constructor(x: number, y: number, relative: boolean) {
        this.x = x;
        this.y = y;
        this.relative = relative;
    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getRelative() {
        return this.relative;
    }
}
