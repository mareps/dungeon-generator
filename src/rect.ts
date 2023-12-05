export class Rect {

    public x: number;
    public y: number;
    public w: number;
    public h: number;
    public color: string;

    constructor(x: number, y: number, w: number, h: number, color?: string) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color || '#F1F1F1';
    }

    public drawRect(): void {
        const scene = document.getElementById('scene') as HTMLCanvasElement;
        const ctx = scene.getContext('2d');

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}