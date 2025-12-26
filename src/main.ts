import { CanvasController } from "./core/canvas-controller/CanvasController";
import { BlueFilter } from "./core/filters/component-selection/BlueFilter";
import { DesaturateFilter } from "./core/filters/pixel-modification/DesaturateFilter";
import { GrayscaleFilter } from "./core/filters/pixel-modification/GrayscaleFilter";
import { GreenFilter } from "./core/filters/component-selection/GreenFilter";
import { NegativeFilter } from "./core/filters/pixel-modification/NegativeFilter";
import { RedFilter } from "./core/filters/component-selection/RedFilter";
import { SepiaFilter } from "./core/filters/pixel-modification/SepiaFilter";
import { ThresholdFilter } from "./core/filters/pixel-modification/ThresholdFilter";
import { ImageLoader } from "./core/img-loader/ImageLoader";
import type { IFilter } from "./interfaces/filter/IFilter";
import "./style.css";
import { ErrorUtils } from "./utils/ErrorUtils";
import { RedAndGreenFilter } from "./core/filters/component-selection/RedAndGreenFilter";
import { RedAndBlueFilter } from "./core/filters/component-selection/RedAndBlueFilter";
import { GreenAndBlueFilter } from "./core/filters/component-selection/GreenAndBlueFilter";
import type { FilterNames } from "./types";
import { filtersNamesTranslations, uiButtonsTranslation } from "./translations";

const imgLoaderTrigger = document.getElementById("img-loader-trigger");
const imgLoaderContainer = document.getElementById(
    "img-loader-container",
) as HTMLInputElement;
const canvas = document.getElementById("img-container") as HTMLCanvasElement;
const filterButton = document.getElementById("filter-button");
const filterOptions = document.getElementById("filter-options");

const downloadBtn = document.getElementById("img-downloader");
const link = document.createElement("a");

imgLoaderTrigger!.innerText = uiButtonsTranslation.get("upload") as string;
filterButton!.innerText = uiButtonsTranslation.get("filter") as string;
downloadBtn!.innerText = uiButtonsTranslation.get("download") as string;

const filters = new Map<FilterNames, IFilter>();

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

    filters.set("grayscale", new GrayscaleFilter(0.299, 0.587, 0.114));
    filters.set(
        "sepia",
        new SepiaFilter(
            { forRed: 0.393, forGreen: 0.769, forBlue: 0.189 },
            { forRed: 0.349, forGreen: 0.686, forBlue: 0.168 },
            { forRed: 0.272, forGreen: 0.534, forBlue: 0.131 },
        ),
    );
    filters.set("threshold", new ThresholdFilter(128));
    filters.set("red", new RedFilter());
    filters.set("green", new GreenFilter());
    filters.set("blue", new BlueFilter());
    filters.set("desaturate", new DesaturateFilter());
    filters.set("negative", new NegativeFilter());
    filters.set("red&green", new RedAndGreenFilter());
    filters.set("red&blue", new RedAndBlueFilter());
    filters.set("green&blue", new GreenAndBlueFilter());

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
    btn = btn = document.createElement("button");
    btn.innerText = filtersNamesTranslations.get("original") as string;
    btn.dataset.filterName = "original";
    btn.addEventListener("click", (_) => {
        canvasController.resetCanvasToOriginalImage();
        filterButton!.innerText = uiButtonsTranslation.get("filter") as string;
        filterOptions!.classList.remove("visible");
    });
    docFragment.appendChild(btn);
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
            console.log(trigger.dataset.filterName);

            switch (trigger.dataset.filterName as FilterNames) {
                case "grayscale":
                    canvasController.applyFilter(filters.get("grayscale")!);
                    filterButton!.innerText =
                        filtersNamesTranslations.get("grayscale")!;
                    break;
                case "sepia":
                    canvasController.applyFilter(filters.get("sepia")!);
                    filterButton!.innerText =
                        filtersNamesTranslations.get("sepia")!;
                    break;
                case "threshold":
                    canvasController.applyFilter(filters.get("threshold")!);
                    filterButton!.innerText =
                        filtersNamesTranslations.get("threshold")!;
                    break;
                case "red":
                    canvasController.applyFilter(filters.get("red")!);
                    filterButton!.innerText =
                        filtersNamesTranslations.get("red")!;
                    break;
                case "green":
                    canvasController.applyFilter(filters.get("green")!);
                    filterButton!.innerText =
                        filtersNamesTranslations.get("green")!;
                    break;
                case "blue":
                    canvasController.applyFilter(filters.get("blue")!);
                    filterButton!.innerText =
                        filtersNamesTranslations.get("blue")!;
                    break;
                case "desaturate":
                    canvasController.applyFilter(filters.get("desaturate")!);
                    filterButton!.innerText =
                        filtersNamesTranslations.get("desaturate")!;
                    break;
                case "negative":
                    canvasController.applyFilter(filters.get("negative")!);
                    filterButton!.innerText =
                        filtersNamesTranslations.get("negative")!;
                    break;
                case "red&green":
                    canvasController.applyFilter(filters.get("red&green")!);
                    filterButton!.innerText =
                        filtersNamesTranslations.get("red&green")!;
                    break;
                case "red&blue":
                    canvasController.applyFilter(filters.get("red&blue")!);
                    filterButton!.innerText =
                        filtersNamesTranslations.get("red&blue")!;
                    break;
                case "green&blue":
                    canvasController.applyFilter(filters.get("green&blue")!);
                    filterButton!.innerText =
                        filtersNamesTranslations.get("green&blue")!;
                    break;
            }

            filterOptions!.classList.remove("visible");
        });
        docFragment.appendChild(btn);
    });

    filterOptions!.appendChild(docFragment);

    filterButton!.addEventListener("click", (_) => {
        if (canvas.width == 0 && canvas.height == 0) return;
        filterOptions!.classList.add("visible");
    });
});
