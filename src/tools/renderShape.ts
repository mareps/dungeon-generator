
export function renderShape(config): void {
    const viewport = document.getElementById('viewport');

    const shape = document.createElement('div');
    shape.className = 'room'

    shape.style.width = `${config.width}px`;
    shape.style.height = `${config.height}px`;
    shape.style.position = 'absolute';
    shape.style.border = `1px solid ${config.color}`;

    shape.style.top = `${config.y}px`;
    shape.style.left = `${config.x}px`;

    viewport.appendChild(shape);
}
