export interface IFilter {
    apply(matrix: number[][][], ctx: CanvasRenderingContext2D): ImageData;
}
