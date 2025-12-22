import type { IFilter } from "../../../interfaces/filter/IFilter";

type Sample = {
    forRed: number;
    forGreen: number;
    forBlue: number;
};

export class SepiaFilter implements IFilter {
    private red: Sample;
    private green: Sample;
    private blue: Sample;

    constructor(
        redModifier: Sample,
        greenModifier: Sample,
        blueModifier: Sample,
    ) {
        this.red = redModifier;
        this.green = greenModifier;
        this.blue = blueModifier;
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
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                data[4 * (i * width + j) + 0] =
                    this.red.forRed * matrix[i][j][0] +
                    this.red.forGreen * matrix[i][j][1] +
                    this.red.forBlue * matrix[i][j][2];
                data[4 * (i * width + j) + 1] =
                    this.green.forRed * matrix[i][j][0] +
                    this.green.forGreen * matrix[i][j][1] +
                    this.green.forBlue * matrix[i][j][2];
                data[4 * (i * width + j) + 2] =
                    this.blue.forRed * matrix[i][j][0] +
                    this.blue.forGreen * matrix[i][j][1] +
                    this.blue.forBlue * matrix[i][j][2];
                data[4 * (i * width + j) + 3] = matrix[i][j][3];
            }
        }
        return myImageData;
    }
}
