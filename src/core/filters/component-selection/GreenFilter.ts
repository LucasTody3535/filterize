import type { IFilter } from "../../../interfaces/filter/IFilter";

export class GreenFilter implements IFilter {
    constructor() {}

    /**
     * @author Everton
     *
     * Slightly modified version of the author's original code
     *
     * @param matrix A N x N x N matrix
     * @param ctx Canvas 2D rendering context
     *
     * @returns A modified image data
     */
    public apply(matrix: number[][][], ctx: CanvasRenderingContext2D) {
        let width = matrix[0].length;
        let height = matrix.length;
        const myImageData = ctx.createImageData(width, height);
        const data = myImageData.data;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                data[4 * (i * width + j) + 0] = 0;
                data[4 * (i * width + j) + 1] = matrix[i][j][1];
                data[4 * (i * width + j) + 2] = 0;
                data[4 * (i * width + j) + 3] = matrix[i][j][3];
            }
        }
        return myImageData;
    }
}
