import type { FilterNames } from "./types";

export const codesExplanation = new Map<FilterNames, string>();

codesExplanation.set(
    "grayscale",
    `
    /**
     * this.red   = 0.299
     * this.green = 0.587
     * this.blue  = 0.114
     * /
    public apply(matrix: number[][][], ctx: CanvasRenderingContext2D) {
        let width = matrix[0].length;
        let height = matrix.length;
        const myImageData = ctx.createImageData(width, height);
        const data = myImageData.data;
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

`,
);

codesExplanation.set(
    "sepia",
    `
    /**
     * this.red   = { forRed: 0.393, forGreen: 0.769, forBlue: 0.189 }
     * this.green = { forRed: 0.349, forGreen: 0.686, forBlue: 0.168 }
     * this.blue  = { forRed: 0.272, forGreen: 0.534, forBlue: 0.131 }
     * /
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

`,
);

codesExplanation.set(
    "threshold",
    `
    /**
     * this.thresholdValue = 128
     * /
    private eraseOrMaximize(componentValue: number) {
        if (componentValue >= this.thresholdValue) return 255;
        return 0;
    }

    public apply(matrix: number[][][], ctx: CanvasRenderingContext2D) {
        let width = matrix[0].length;
        let height = matrix.length;
        const myImageData = ctx.createImageData(width, height);
        const data = myImageData.data;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                data[4 * (i * width + j) + 0] = this.eraseOrMaximize(
                    matrix[i][j][0],
                );
                data[4 * (i * width + j) + 1] = this.eraseOrMaximize(
                    matrix[i][j][1],
                );
                data[4 * (i * width + j) + 2] = this.eraseOrMaximize(
                    matrix[i][j][2],
                );
                data[4 * (i * width + j) + 3] = matrix[i][j][3];
            }
        }
        return myImageData;
    }

`,
);

codesExplanation.set(
    "red",
    `
    public apply(matrix: number[][][], ctx: CanvasRenderingContext2D) {
        let width = matrix[0].length;
        let height = matrix.length;
        const myImageData = ctx.createImageData(width, height);
        const data = myImageData.data;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                data[4 * (i * width + j) + 0] = matrix[i][j][0];
                data[4 * (i * width + j) + 1] = 0;
                data[4 * (i * width + j) + 2] = 0;
                data[4 * (i * width + j) + 3] = matrix[i][j][3];
            }
        }
        return myImageData;
    }

`,
);

codesExplanation.set(
    "green",
    `
    public apply(matrix: number[][][], ctx: CanvasRenderingContext2D) {
        let width = matrix[0].length;
        let height = matrix.length;
        const myImageData = ctx.createImageData(width, height);
        const data = myImageData.data;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                data[4 * (i * width + j) + 0] = 0;
                data[4 * (i * width + j) + 1] = matrix[i][j][1];
                data[4 * (i * width + j) + 2] = 0;
                data[4 * (i * width + j) + 3] = matrix[i][j][3];
            }
        }
        return myImageData;
    }

`,
);

codesExplanation.set(
    "blue",
    `
    public apply(matrix: number[][][], ctx: CanvasRenderingContext2D) {
        let width = matrix[0].length;
        let height = matrix.length;
        const myImageData = ctx.createImageData(width, height);
        const data = myImageData.data;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                data[4 * (i * width + j) + 0] = 0;
                data[4 * (i * width + j) + 1] = 0;
                data[4 * (i * width + j) + 2] = matrix[i][j][2];
                data[4 * (i * width + j) + 3] = matrix[i][j][3];
            }
        }
        return myImageData;
    }

`,
);

codesExplanation.set(
    "desaturate",
    `
    // // ------------------------------ ColorUtils.ts ----------------------

    static fromRGBtoHSV(rgb: number[]): number[] {
        // Normalize RGB first
        let [R, G, B] = rgb;
        R /= 255;
        G /= 255;
        B /= 255;

        // Compute min/max later
        const min = Math.min(R, G, B);
        const max = Math.max(R, G, B);

        let H = 0;
        const S = max == 0 ? 0 : 1 - min / max;
        const V = max;

        if (max == min) H = 0;
        else if (max == R) H = 60 * ((G - B) / (max - min)) + 0;
        else if (max == G) H = 60 * ((B - R) / (max - min)) + 120;
        else if (max == B) H = 60 * ((R - G) / (max - min)) + 240;

        return [H, S, V];
    }

    static desaturate(hsv: number[]) {
        hsv[1] = hsv[1] * 0.5;
    }

    static fromHSVtoRGB(hsv: number[]) {
        let [H, S, V] = hsv;

        // Handle H with values out of range
        H = ((H % 360) + 360) % 360;

        let tempRGB!: number[];
        let actualRGB: number[];

        const Hi = Math.floor(H / 60) % 6;
        const F = H / 60 - Hi;
        const P = V * (1 - S);
        const Q = V * (1 - F * S);
        const T = V * (1 - (1 - F) * S);

        // Handle components with 0 values
        if (V == 0) return [0, 0, 0];
        if (S == 0) {
            const g = Math.round(V * 255);
            return [g, g, g];
        }

        switch (Hi) {
            case 0:
                tempRGB = [V, T, P];
                break;
            case 1:
                tempRGB = [Q, V, P];
                break;
            case 2:
                tempRGB = [P, V, T];
                break;
            case 3:
                tempRGB = [P, Q, V];
                break;
            case 4:
                tempRGB = [T, P, V];
                break;
            case 5:
                tempRGB = [V, P, Q];
                break;
        }

        // Apply desnormalization
        actualRGB = [tempRGB[0] * 255, tempRGB[1] * 255, tempRGB[2] * 255];
        return actualRGB;
    }

    // ------------------------------ DesaturateFilter.ts ----------------------

    public apply(matrix: number[][][], ctx: CanvasRenderingContext2D) {
        let width = matrix[0].length;
        let height = matrix.length;
        const myImageData = ctx.createImageData(width, height);
        const data = myImageData.data;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                const HSV = ColorUtils.fromRGBtoHSV(matrix[i][j]);
                ColorUtils.desaturate(HSV);
                const [R, G, B] = ColorUtils.fromHSVtoRGB(HSV);
                data[4 * (i * width + j) + 0] = R;
                data[4 * (i * width + j) + 1] = G;
                data[4 * (i * width + j) + 2] = B;
                data[4 * (i * width + j) + 3] = matrix[i][j][3];
            }
        }
        return myImageData;
    }

`,
);

codesExplanation.set(
    "negative",
    `
    public apply(matrix: number[][][], ctx: CanvasRenderingContext2D) {
        let width = matrix[0].length;
        let height = matrix.length;
        const myImageData = ctx.createImageData(width, height);
        const data = myImageData.data;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                data[4 * (i * width + j) + 0] = 255 - matrix[i][j][0];
                data[4 * (i * width + j) + 1] = 255 - matrix[i][j][1];
                data[4 * (i * width + j) + 2] = 255 - matrix[i][j][2];
                data[4 * (i * width + j) + 3] = matrix[i][j][3];
            }
        }
        return myImageData;
    }

`,
);

codesExplanation.set(
    "red&green",
    `
    public apply(matrix: number[][][], ctx: CanvasRenderingContext2D) {
        let width = matrix[0].length;
        let height = matrix.length;
        const myImageData = ctx.createImageData(width, height);
        const data = myImageData.data;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                data[4 * (i * width + j) + 0] = matrix[i][j][0];
                data[4 * (i * width + j) + 1] = matrix[i][j][1];
                data[4 * (i * width + j) + 2] = 0;
                data[4 * (i * width + j) + 3] = matrix[i][j][3];
            }
        }
        return myImageData;
    }

`,
);

codesExplanation.set(
    "red&blue",
    `
    public apply(matrix: number[][][], ctx: CanvasRenderingContext2D) {
        let width = matrix[0].length;
        let height = matrix.length;
        const myImageData = ctx.createImageData(width, height);
        const data = myImageData.data;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                data[4 * (i * width + j) + 0] = matrix[i][j][0];
                data[4 * (i * width + j) + 1] = 0;
                data[4 * (i * width + j) + 2] = matrix[i][j][2];
                data[4 * (i * width + j) + 3] = matrix[i][j][3];
            }
        }
        return myImageData;
    }

`,
);

codesExplanation.set(
    "green&blue",
    `
    public apply(matrix: number[][][], ctx: CanvasRenderingContext2D) {
        let width = matrix[0].length;
        let height = matrix.length;
        const myImageData = ctx.createImageData(width, height);
        const data = myImageData.data;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                data[4 * (i * width + j) + 0] = 0;
                data[4 * (i * width + j) + 1] = matrix[i][j][1];
                data[4 * (i * width + j) + 2] = matrix[i][j][2];
                data[4 * (i * width + j) + 3] = matrix[i][j][3];
            }
        }
        return myImageData;
    }

`,
);
