import type { IFilter } from "../../interfaces/filter/IFilter";
import { MatrixUtils } from "../../utils/MatrixUtils";

export class CanvasController {
    private readonly context: CanvasRenderingContext2D;
    private readonly canvas: HTMLCanvasElement;
    private imageCopy!: HTMLImageElement;
    private copy!: number[][][];

    constructor(context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.context = context;
        this.canvas = canvas;
    }

    public fillCanvas(image: HTMLImageElement) {
        let pattern = this.context!.createPattern(image, "no-repeat")!;

        this.canvas.width = image.width;
        this.canvas.height = image.height;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context!.fillStyle = pattern;
        this.context!.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.imageCopy = image;
        this.copy = MatrixUtils.createNxNMatrix(
            this.context!,
            image.width,
            image.height,
        );
    }

    public resetCanvasToOriginalImage() {
        let pattern = this.context!.createPattern(this.imageCopy, "no-repeat")!;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context!.fillStyle = pattern;
        this.context!.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public applyFilter(filter: IFilter) {
        let imageWithFilterApplied = filter.apply(this.copy, this.context);
        this.context.putImageData(imageWithFilterApplied, 0, 0);
    }
}
