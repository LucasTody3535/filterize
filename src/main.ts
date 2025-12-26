import { CanvasController } from "./core/canvas-controller/CanvasController";
import { ImageLoader } from "./core/img-loader/ImageLoader";
import "./style.css";
import { ErrorUtils } from "./utils/ErrorUtils";
import type { FilterNames } from "./types";
import { filtersNamesTranslations, uiButtonsTranslation } from "./translations";
import { filters } from "./filters";
import { codesExplanation } from "./code-samples";

const imgLoaderTrigger = document.getElementById("img-loader-trigger");
const imgLoaderContainer = document.getElementById(
    "img-loader-container",
) as HTMLInputElement;
const canvas = document.getElementById("img-container") as HTMLCanvasElement;
const filterButton = document.getElementById("filter-button");
const filterOptions = document.getElementById("filter-options");
const sourceCodeButton = document.getElementById("src-code");
const code = document.getElementById("code");

const downloadBtn = document.getElementById("img-downloader");
const link = document.createElement("a");

imgLoaderTrigger!.innerText = uiButtonsTranslation.get("upload") as string;
filterButton!.innerText = uiButtonsTranslation.get("filter") as string;
downloadBtn!.innerText = uiButtonsTranslation.get("download") as string;
sourceCodeButton!.innerText = uiButtonsTranslation.get("source") as string;

let context: CanvasRenderingContext2D | undefined;
let imgLoader: ImageLoader | undefined;
let didThrowError: boolean;
let canvasController: CanvasController;
let imgFile: File;

window.addEventListener("DOMContentLoaded", (_) => {
    context = canvas.getContext("2d")!;
    canvasController = new CanvasController(context, canvas);

    canvas.width = 0;
    canvas.height = 0;

    // Configure image loader
    imgLoaderContainer!.addEventListener("change", (_) => {
        imgFile = imgLoaderContainer.files?.item(0) as File;
        const onImageLoad = (image: HTMLImageElement) =>
            canvasController.fillCanvas(image);
        // Check if file is valid
        didThrowError = ErrorUtils.catchIfThrowedErrorIn(() => {
            if (!imgFile) throw new Error("Invalid file!");
            if (!imgFile.type.match("image/"))
                throw new Error("Only image files allowed!");
        });

        // Stop execution
        if (didThrowError) return;

        // Load Image and fill canvas
        if (imgLoader) {
            imgLoader.createImageElementFromFile(imgFile!, onImageLoad);
            return;
        }
        imgLoader = new ImageLoader();
        imgLoader.createImageElementFromFile(imgFile!, onImageLoad);
        filterButton!.classList.remove("disabled-button");
        downloadBtn!.classList.remove("disabled-button");
        filterButton!.classList.add("clickable-button");
        downloadBtn!.classList.add("clickable-button");
    });

    imgLoaderTrigger!.addEventListener("click", (_) => {
        imgLoaderContainer!.click();
    });

    downloadBtn!.addEventListener("click", () => {
        if (canvas.height == 0 || canvas.width == 0) return;
        let filename = prompt("Name of the file", `${imgFile.name}`);
        if (!filename) return;
        link.download = `${filename}`;
        link.href = canvas.toDataURL(imgFile.type, 1);
        link.click();
    });

    // Setting the interface used to select which filter to apply
    let btn: HTMLElement;
    let docFragment = new DocumentFragment();
    filters.forEach((_, key) => {
        btn = document.createElement("button");
        btn.innerText = filtersNamesTranslations.get(key)!;
        btn.dataset.filterName = key;
        btn.addEventListener("click", (ev: Event) => {
            let trigger = ev.currentTarget as HTMLElement;
            // If the canvas has a 0 size, it means no image
            // has been loaded, so, it should not try to apply
            // the filter
            if (canvas.width == 0 && canvas.height == 0) return;

            let filterName = trigger.dataset.filterName as FilterNames;
            switch (filterName) {
                case "original":
                    canvasController.resetCanvasToOriginalImage();
                    sourceCodeButton!.classList.remove("clickable-button");
                    sourceCodeButton!.classList.add("disabled-button");
                    break;
                default:
                    canvasController.applyFilter(filters.get(filterName)!);
                    sourceCodeButton!.classList.remove("disabled-button");
                    sourceCodeButton!.classList.add("clickable-button");
            }
            filterButton!.innerText = filtersNamesTranslations.get(filterName)!;
            filterButton!.dataset.filterName = filterName;
            filterOptions!.classList.remove("visible");
        });
        docFragment.appendChild(btn);
    });

    filterOptions!.appendChild(docFragment);

    filterButton!.addEventListener("click", (_) => {
        if (canvas.width == 0 && canvas.height == 0) return;
        filterOptions!.classList.add("visible");
        code!.classList.remove("visible");
    });

    sourceCodeButton!.addEventListener("click", (_) => {
        if (
            (canvas.width == 0 && canvas.height == 0) ||
            filterButton!.innerText == filtersNamesTranslations.get("original")
        )
            return;
        let filterName = filterButton!.dataset.filterName as FilterNames;
        code!.innerText = codesExplanation.get(filterName) || "";
        code!.classList.toggle("visible");
        filterOptions!.classList.remove("visible");
    });
});
