
export function renderShape(config): void {
    const scene = document.getElementById('scene') as HTMLCanvasElement;
    const ctx = scene.getContext('2d');

    ctx.fillStyle = config.color;
    ctx.fillRect(config.x, config.y, config.width, config.height);
}
