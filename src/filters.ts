import { BlueFilter } from "./core/filters/component-selection/BlueFilter";
import { GreenAndBlueFilter } from "./core/filters/component-selection/GreenAndBlueFilter";
import { GreenFilter } from "./core/filters/component-selection/GreenFilter";
import { RedAndBlueFilter } from "./core/filters/component-selection/RedAndBlueFilter";
import { RedAndGreenFilter } from "./core/filters/component-selection/RedAndGreenFilter";
import { RedFilter } from "./core/filters/component-selection/RedFilter";
import { DesaturateFilter } from "./core/filters/pixel-modification/DesaturateFilter";
import { GrayscaleFilter } from "./core/filters/pixel-modification/GrayscaleFilter";
import { NegativeFilter } from "./core/filters/pixel-modification/NegativeFilter";
import { SepiaFilter } from "./core/filters/pixel-modification/SepiaFilter";
import { ThresholdFilter } from "./core/filters/pixel-modification/ThresholdFilter";
import type { IFilter } from "./interfaces/filter/IFilter";
import type { FilterNames } from "./types";

export const filters = new Map<FilterNames, IFilter | null>();

filters.set("original", null);
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
