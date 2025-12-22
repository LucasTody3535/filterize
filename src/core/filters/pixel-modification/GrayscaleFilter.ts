import type { IFilter } from "../../../interfaces/filter/IFilter";

export class GrayscaleFilter implements IFilter {
    private red: number;
    private green: number;
    private blue: number;

    constructor(redAmmount: number, greenAmmount: number, blueAmmount: number) {
        this.red = redAmmount;
        this.green = greenAmmount;
        this.blue = blueAmmount;
    }

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
        let Y: number;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                Y =
                    this.red * matrix[i][j][0] +
                    this.green * matrix[i][j][1] +
                    this.blue * matrix[i][j][2];
                data[4 * (i * width + j) + 0] = Y;
                data[4 * (i * width + j) + 1] = Y;
                data[4 * (i * width + j) + 2] = Y;
                data[4 * (i * width + j) + 3] = matrix[i][j][3];
            }
        }
        return myImageData;
    }
}
