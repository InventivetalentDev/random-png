import { PNG } from 'pngjs';

export function randomPNG(width: number, height: number) {
    const png = new PNG({width, height});

    // Fill the image with random data (RGBA format)
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (width * y + x) << 2;

            // Random color values (R, G, B)
            png.data[idx] = Math.floor(Math.random() * 256); // Red
            png.data[idx + 1] = Math.floor(Math.random() * 256); // Green
            png.data[idx + 2] = Math.floor(Math.random() * 256); // Blue
            png.data[idx + 3] = 255; // Alpha (fully opaque)
        }
    }

    // Return the PNG buffer
    return PNG.sync.write(png);
}
