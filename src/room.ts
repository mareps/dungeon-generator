import { renderShape } from './tools/renderShape';


export interface Position {
    x: number, y: number
}
export interface Size {
    width: number, height: number
}
export class Room {
    public size: Size;
    public position: Position;

    constructor() {
        this.init();
    }

    public init(): void {
        this.setSize();
        this.setPosition();
    }

    public setSize(): void {
        // codigo para gerar tamanhos aleatorios dentro de uma base e range
        const min = 64;
        const max = 128;

        //todo: a base referente ao grid
        this.size = {
            width: Math.floor(Math.random() * (max - min) + min),
            height: Math.floor(Math.random() * (max - min) + min),
        }
        console.log(this.size)
    }

    public setPosition(): void {
        // codigo para gerar posicao aleatoria dentro do grid

        const min = 0;
        const max = 640;

        this.position = {
            x: Math.floor(Math.random() * (max - min) + min),
            y: Math.floor(Math.random() * (max - min) + min),
        }
        console.log(this.position);
    }

    public getSize(): Size {
        return this.size;
    }

    public getPosition(): Position {
        return this.position;
    }

    public drawRoom(color?: string): void {
        renderShape({
            width: this.size.width,
            height: this.size.height,
            x: this.position.x,
            y: this.position.y,
            color: color || 'purple'
        });
    }
}
