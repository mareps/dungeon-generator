
interface Position {
    x1: number, x2: number, y1: number, y2: number
}
interface RoomSize {
    width: number, height: number
}

class Room {
    private size: RoomSize;
    private position: Position;

    constructor() {
        this.init();
    }

    private init(): void {
        this.setSize();
        this.setPosition();
        
        console.log(this.getSize());
        console.log(this.getPosition());
    }

    private setSize(): void {
        // codigo para gerar tamanhos aleatorios dentro de uma base e range
        this.size = {
            width: 100,
            height: 100
        }
    }

    private setPosition(): void {
        // codigo para gerar posicao aleatoria dentro do grid
        this.position = {
            x1: 0,
            x2: 100,
            y1: 0,
            y2: 100
        }
    }

    private getSize(): RoomSize {
        return this.size;
    }

    private getPosition(): Position {
        return this.position;
    }
}

const firstRoom = new Room();