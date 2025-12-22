export class MatrixUtils {
    /**
     * @author Everton
     *
     * @param context 2D context of a canvas element
     * @param width Width of the image
     * @param height Height of the image
     *
     * @returns A newly N x N matrix
     */
    static createNxNMatrix(
        context: CanvasRenderingContext2D,
        width: number,
        height: number,
    ): number[][][] {
        const matrix = new Array();
        const image = context.getImageData(0, 0, width, height);
        const data = image.data;
        for (let i = 0; i < height; i++) {
            matrix.push(new Array());
            for (let j = 0; j < width; j++) {
                matrix[i].push(new Array());
                // Selects each corresponding pixel and puts it
                // accordingly in the newly create N x N matrix
                matrix[i][j].push(data[4 * (i * width + j) + 0]); // red
                matrix[i][j].push(data[4 * (i * width + j) + 1]); // green
                matrix[i][j].push(data[4 * (i * width + j) + 2]); // blue
                matrix[i][j].push(data[4 * (i * width + j) + 3]); // alpha
            }
        }
        return matrix;
    }
}
