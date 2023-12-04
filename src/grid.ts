import { Room } from "./room";
import { renderShape } from "./tools/renderShape";

export class Grid {
    public base = 32;

    public width = this.base * 20;
    public height = this.base * 20;
    public rooms: Room[] = [];

    constructor() {



        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom(); this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();

        this.addRoom();
        this.addRoom();
        this.addRoom();
        this.addRoom();

    }

    public addRoom(): void {
        const newRoom = new Room();
        if (this.checkRoomsIntersection(newRoom)) {
            newRoom.drawRoom('transparent')
        } else {
            this.rooms.push(newRoom);
            newRoom.drawRoom('#ccc')
        }
    }

    public checkRoomsIntersection(newRoom: Room): boolean {
        const any = this.rooms.find(room => {
            const x1 = room.position.x;
            const x2 = room.position.x + room.size.width;

            const y1 = room.position.y;
            const y2 = room.position.y + room.size.height;

            const xIntersection = newRoom.position.x >= x1 && newRoom.position.x <= x2;
            const xOutBounderies = newRoom.position.x < x1 && newRoom.position.x + newRoom.size.width > x2;
            const x2Intersection = newRoom.position.x + newRoom.size.width >= x1
                && newRoom.position.x + newRoom.size.width <= x2;

            const yIntersection = newRoom.position.y >= y1 && newRoom.position.y <= y2;
            const y2Intersection = newRoom.position.y + newRoom.size.height >= y1
                && newRoom.position.y + newRoom.size.height <= y2;
            const yOutBounderies = newRoom.position.y < y1 && newRoom.position.y + newRoom.size.height > y2;

            return (xIntersection || x2Intersection || xOutBounderies) && (yIntersection || y2Intersection || yOutBounderies);
        });

        return !!any;
    }

    public checkCollision(): boolean {


        return false;
    }

}