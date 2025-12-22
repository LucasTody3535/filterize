/**
 * @author Lucas Eduardo
 * @description
 * This class provides utilities to convert between
 * color spaces or to modify a color.
 *
 */
export class ColorUtils {
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
}
