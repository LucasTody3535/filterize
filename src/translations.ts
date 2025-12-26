import type { FilterNames, SupportedLanguages, UIButtons } from "./types";

const language = navigator.language as SupportedLanguages;
export const filtersNamesTranslations = new Map<FilterNames, string>();
export const uiButtonsTranslation = new Map<UIButtons, string>();

switch (language) {
    case "pt-BR":
        filtersNamesTranslations.set("original", "Original");
        filtersNamesTranslations.set("grayscale", "Cinza");
        filtersNamesTranslations.set("sepia", "Sépia");
        filtersNamesTranslations.set("threshold", "Limiar");
        filtersNamesTranslations.set("red", "Vermelho");
        filtersNamesTranslations.set("green", "Verde");
        filtersNamesTranslations.set("blue", "Azul");
        filtersNamesTranslations.set("desaturate", "Desaturado");
        filtersNamesTranslations.set("negative", "Negativo");
        filtersNamesTranslations.set("red&green", "Vermelho & Verde");
        filtersNamesTranslations.set("red&blue", "Vermelho & Azul");
        filtersNamesTranslations.set("green&blue", "Verde & Azul");

        uiButtonsTranslation.set("upload", "Carregar Imagem");
        uiButtonsTranslation.set("filter", "Original");
        uiButtonsTranslation.set("download", "Salvar");
        uiButtonsTranslation.set("source", "Código Fonte");
        break;
    default:
        filtersNamesTranslations.set("original", "Original");
        filtersNamesTranslations.set("grayscale", "Grayscale");
        filtersNamesTranslations.set("sepia", "Sepia");
        filtersNamesTranslations.set("threshold", "Threshold");
        filtersNamesTranslations.set("red", "Full Red");
        filtersNamesTranslations.set("green", "Full Green");
        filtersNamesTranslations.set("blue", "Full Blue");
        filtersNamesTranslations.set("desaturate", "Desaturate");
        filtersNamesTranslations.set("negative", "Negative");
        filtersNamesTranslations.set("red&green", "Red & Green");
        filtersNamesTranslations.set("red&blue", "Red & Blue");
        filtersNamesTranslations.set("green&blue", "Green & Blue");

        uiButtonsTranslation.set("upload", "Load Image");
        uiButtonsTranslation.set("filter", "Original");
        uiButtonsTranslation.set("download", "Download");
        uiButtonsTranslation.set("source", "Source Code");
        break;
}
