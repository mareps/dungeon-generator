
interface Position {
    x: number, y: number
}
interface Size {
    width: number, height: number
}

class Room {
    private size: Size;
    private position: Position;

    constructor() {
        this.init();
    }

    private init(): void {
        this.setSize();
        this.setPosition();
        this.drawRoom();
    }

    private setSize(): void {
        // codigo para gerar tamanhos aleatorios dentro de uma base e range
        const min = 50;
        const max = 100;

        //todo: a base referente ao grid
        this.size = {
            width: Math.floor(Math.random() * (max - min) + min),
            height: Math.floor(Math.random() * (max - min) + min),
        }
        console.log(this.size);
    }

    private setPosition(): void {
        // codigo para gerar posicao aleatoria dentro do grid

        const min = 0;
        const max = 360;

        this.position = {
            x: Math.floor(Math.random() * (max - min) + min),
            y: Math.floor(Math.random() * (max - min) + min),
        }
    }

    private getSize(): Size {
        return this.size;
    }

    private getPosition(): Position {
        return this.position;
    }

    private drawRoom(): void {
        const viewport = document.getElementById('viewport');

        const room = document.createElement('div');
        room.className = 'room'

        room.style.width = `${this.getSize().width}px`;
        room.style.height = `${this.getSize().height}px`;
        room.style.position = 'absolute';
        room.style.backgroundColor = `purple`;

        room.style.top = `${this.getPosition().y}px`;
        room.style.right = `${this.getPosition().x}px`;

        viewport.appendChild(room);

    }
}

const firstRoom = new Room();
const secondRoom = new Room();

console.log(firstRoom);
console.log(secondRoom);