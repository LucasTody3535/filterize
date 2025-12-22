export class ImageLoader {
    private readonly reader: FileReader;
    private readonly image: HTMLImageElement;

    constructor() {
        this.reader = new FileReader();
        this.image = new Image();
    }

    public createImageElementFromFile(
        file: File,
        onLoad: (image: HTMLImageElement) => void,
    ) {
        this.reader.onload = (ev: ProgressEvent<FileReader>) => {
            this.image.src = ev.target!.result as string;
            this.image.onload = (_) => onLoad(this.image);
        };
        this.reader.readAsDataURL(file);
    }
}
