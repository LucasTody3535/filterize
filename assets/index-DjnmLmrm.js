(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=l(r);fetch(r.href,s)}})();class H{static createNxNMatrix(a,l,i){const r=new Array,n=a.getImageData(0,0,l,i).data;for(let t=0;t<i;t++){r.push(new Array);for(let e=0;e<l;e++)r[t].push(new Array),r[t][e].push(n[4*(t*l+e)+0]),r[t][e].push(n[4*(t*l+e)+1]),r[t][e].push(n[4*(t*l+e)+2]),r[t][e].push(n[4*(t*l+e)+3])}return r}}class E{context;canvas;imageCopy;copy;constructor(a,l){this.context=a,this.canvas=l}fillCanvas(a){let l=this.context.createPattern(a,"no-repeat");this.canvas.width=a.width,this.canvas.height=a.height,this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=l,this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.imageCopy=a,this.copy=H.createNxNMatrix(this.context,a.width,a.height)}resetCanvasToOriginalImage(){let a=this.context.createPattern(this.imageCopy,"no-repeat");this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=a,this.context.fillRect(0,0,this.canvas.width,this.canvas.height)}applyFilter(a){let l=a.apply(this.copy,this.context);this.context.putImageData(l,0,0)}}class S{reader;image;constructor(){this.reader=new FileReader,this.image=new Image}createImageElementFromFile(a,l){this.reader.onload=i=>{this.image.src=i.target.result,this.image.onload=r=>l(this.image)},this.reader.readAsDataURL(a)}}class M{static catchIfThrowedErrorIn(a){try{a()}catch(l){return alert(l),!0}return!1}}const T=navigator.language,o=new Map,m=new Map;switch(T){case"pt-BR":o.set("original","Original"),o.set("grayscale","Cinza"),o.set("sepia","Sépia"),o.set("threshold","Limiar"),o.set("red","Vermelho"),o.set("green","Verde"),o.set("blue","Azul"),o.set("desaturate","Desaturado"),o.set("negative","Negativo"),o.set("red&green","Vermelho & Verde"),o.set("red&blue","Vermelho & Azul"),o.set("green&blue","Verde & Azul"),m.set("upload","Carregar Imagem"),m.set("filter","Original"),m.set("download","Salvar"),m.set("source","Código Fonte");break;default:o.set("original","Original"),o.set("grayscale","Grayscale"),o.set("sepia","Sepia"),o.set("threshold","Threshold"),o.set("red","Full Red"),o.set("green","Full Green"),o.set("blue","Full Blue"),o.set("desaturate","Desaturate"),o.set("negative","Negative"),o.set("red&green","Red & Green"),o.set("red&blue","Red & Blue"),o.set("green&blue","Green & Blue"),m.set("upload","Load Image"),m.set("filter","Original"),m.set("download","Download"),m.set("source","Source Code");break}class O{constructor(){}apply(a,l){let i=a[0].length,r=a.length;const s=l.createImageData(i,r),n=s.data;for(let t=0;t<r;t++)for(let e=0;e<i;e++)n[4*(t*i+e)+0]=0,n[4*(t*i+e)+1]=0,n[4*(t*i+e)+2]=a[t][e][2],n[4*(t*i+e)+3]=a[t][e][3];return s}}class k{constructor(){}apply(a,l){let i=a[0].length,r=a.length;const s=l.createImageData(i,r),n=s.data;for(let t=0;t<r;t++)for(let e=0;e<i;e++)n[4*(t*i+e)+0]=0,n[4*(t*i+e)+1]=a[t][e][1],n[4*(t*i+e)+2]=a[t][e][2],n[4*(t*i+e)+3]=a[t][e][3];return s}}class N{constructor(){}apply(a,l){let i=a[0].length,r=a.length;const s=l.createImageData(i,r),n=s.data;for(let t=0;t<r;t++)for(let e=0;e<i;e++)n[4*(t*i+e)+0]=0,n[4*(t*i+e)+1]=a[t][e][1],n[4*(t*i+e)+2]=0,n[4*(t*i+e)+3]=a[t][e][3];return s}}class z{constructor(){}apply(a,l){let i=a[0].length,r=a.length;const s=l.createImageData(i,r),n=s.data;for(let t=0;t<r;t++)for(let e=0;e<i;e++)n[4*(t*i+e)+0]=a[t][e][0],n[4*(t*i+e)+1]=0,n[4*(t*i+e)+2]=a[t][e][2],n[4*(t*i+e)+3]=a[t][e][3];return s}}class P{constructor(){}apply(a,l){let i=a[0].length,r=a.length;const s=l.createImageData(i,r),n=s.data;for(let t=0;t<r;t++)for(let e=0;e<i;e++)n[4*(t*i+e)+0]=a[t][e][0],n[4*(t*i+e)+1]=a[t][e][1],n[4*(t*i+e)+2]=0,n[4*(t*i+e)+3]=a[t][e][3];return s}}class A{constructor(){}apply(a,l){let i=a[0].length,r=a.length;const s=l.createImageData(i,r),n=s.data;for(let t=0;t<r;t++)for(let e=0;e<i;e++)n[4*(t*i+e)+0]=a[t][e][0],n[4*(t*i+e)+1]=0,n[4*(t*i+e)+2]=0,n[4*(t*i+e)+3]=a[t][e][3];return s}}class v{static fromRGBtoHSV(a){let[l,i,r]=a;l/=255,i/=255,r/=255;const s=Math.min(l,i,r),n=Math.max(l,i,r);let t=0;const e=n==0?0:1-s/n,d=n;return n==s?t=0:n==l?t=60*((i-r)/(n-s))+0:n==i?t=60*((r-l)/(n-s))+120:n==r&&(t=60*((l-i)/(n-s))+240),[t,e,d]}static desaturate(a){a[1]=a[1]*.5}static fromHSVtoRGB(a){let[l,i,r]=a;l=(l%360+360)%360;let s,n;const t=Math.floor(l/60)%6,e=l/60-t,d=r*(1-i),j=r*(1-e*i),x=r*(1-(1-e)*i);if(r==0)return[0,0,0];if(i==0){const y=Math.round(r*255);return[y,y,y]}switch(t){case 0:s=[r,x,d];break;case 1:s=[j,r,d];break;case 2:s=[d,r,x];break;case 3:s=[d,j,r];break;case 4:s=[x,d,r];break;case 5:s=[r,d,j];break}return n=[s[0]*255,s[1]*255,s[2]*255],n}}class U{constructor(){}apply(a,l){let i=a[0].length,r=a.length;const s=l.createImageData(i,r),n=s.data;for(let t=0;t<r;t++)for(let e=0;e<i;e++){const d=v.fromRGBtoHSV(a[t][e]);v.desaturate(d);const[j,x,y]=v.fromHSVtoRGB(d);n[4*(t*i+e)+0]=j,n[4*(t*i+e)+1]=x,n[4*(t*i+e)+2]=y,n[4*(t*i+e)+3]=a[t][e][3]}return s}}class _{red;green;blue;constructor(a,l,i){this.red=a,this.green=l,this.blue=i}apply(a,l){let i=a[0].length,r=a.length;const s=l.createImageData(i,r),n=s.data;let t;for(let e=0;e<r;e++)for(let d=0;d<i;d++)t=this.red*a[e][d][0]+this.green*a[e][d][1]+this.blue*a[e][d][2],n[4*(e*i+d)+0]=t,n[4*(e*i+d)+1]=t,n[4*(e*i+d)+2]=t,n[4*(e*i+d)+3]=a[e][d][3];return s}}class Q{constructor(){}apply(a,l){let i=a[0].length,r=a.length;const s=l.createImageData(i,r),n=s.data;for(let t=0;t<r;t++)for(let e=0;e<i;e++)n[4*(t*i+e)+0]=255-a[t][e][0],n[4*(t*i+e)+1]=255-a[t][e][1],n[4*(t*i+e)+2]=255-a[t][e][2],n[4*(t*i+e)+3]=a[t][e][3];return s}}class Y{red;green;blue;constructor(a,l,i){this.red=a,this.green=l,this.blue=i}apply(a,l){let i=a[0].length,r=a.length;const s=l.createImageData(i,r),n=s.data;for(let t=0;t<r;t++)for(let e=0;e<i;e++)n[4*(t*i+e)+0]=this.red.forRed*a[t][e][0]+this.red.forGreen*a[t][e][1]+this.red.forBlue*a[t][e][2],n[4*(t*i+e)+1]=this.green.forRed*a[t][e][0]+this.green.forGreen*a[t][e][1]+this.green.forBlue*a[t][e][2],n[4*(t*i+e)+2]=this.blue.forRed*a[t][e][0]+this.blue.forGreen*a[t][e][1]+this.blue.forBlue*a[t][e][2],n[4*(t*i+e)+3]=a[t][e][3];return s}}class ${thresholdValue;constructor(a){this.thresholdValue=a}eraseOrMaximize(a){return a>=this.thresholdValue?255:0}apply(a,l){let i=a[0].length,r=a.length;const s=l.createImageData(i,r),n=s.data;for(let t=0;t<r;t++)for(let e=0;e<i;e++)n[4*(t*i+e)+0]=this.eraseOrMaximize(a[t][e][0]),n[4*(t*i+e)+1]=this.eraseOrMaximize(a[t][e][1]),n[4*(t*i+e)+2]=this.eraseOrMaximize(a[t][e][2]),n[4*(t*i+e)+3]=a[t][e][3];return s}}const c=new Map;c.set("original",null);c.set("grayscale",new _(.299,.587,.114));c.set("sepia",new Y({forRed:.393,forGreen:.769,forBlue:.189},{forRed:.349,forGreen:.686,forBlue:.168},{forRed:.272,forGreen:.534,forBlue:.131}));c.set("threshold",new $(128));c.set("red",new A);c.set("green",new N);c.set("blue",new O);c.set("desaturate",new U);c.set("negative",new Q);c.set("red&green",new P);c.set("red&blue",new z);c.set("green&blue",new k);const u=new Map;u.set("grayscale",`
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

`);u.set("sepia",`
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

`);u.set("threshold",`
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

`);u.set("red",`
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

`);u.set("green",`
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

`);u.set("blue",`
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

`);u.set("desaturate",`
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

`);u.set("negative",`
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

`);u.set("red&green",`
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

`);u.set("red&blue",`
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

`);u.set("green&blue",`
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

`);const F=document.getElementById("img-loader-trigger"),B=document.getElementById("img-loader-container"),g=document.getElementById("img-container"),f=document.getElementById("filter-button"),b=document.getElementById("filter-options"),p=document.getElementById("src-code"),G=document.getElementById("code"),R=document.getElementById("img-downloader"),C=document.createElement("a");F.innerText=m.get("upload");f.innerText=m.get("filter");R.innerText=m.get("download");p.innerText=m.get("source");let V,I,L,D,w;window.addEventListener("DOMContentLoaded",h=>{V=g.getContext("2d"),D=new E(V,g),g.width=0,g.height=0,B.addEventListener("change",i=>{w=B.files?.item(0);const r=s=>D.fillCanvas(s);if(L=M.catchIfThrowedErrorIn(()=>{if(!w)throw new Error("Invalid file!");if(!w.type.match("image/"))throw new Error("Only image files allowed!")}),!L){if(I){I.createImageElementFromFile(w,r);return}I=new S,I.createImageElementFromFile(w,r),f.classList.remove("disabled-button"),R.classList.remove("disabled-button"),f.classList.add("clickable-button"),R.classList.add("clickable-button")}}),F.addEventListener("click",i=>{B.click()}),R.addEventListener("click",()=>{if(g.height==0||g.width==0)return;let i=prompt("Name of the file",`${w.name}`);i&&(C.download=`${i}`,C.href=g.toDataURL(w.type,1),C.click())});let a,l=new DocumentFragment;c.forEach((i,r)=>{a=document.createElement("button"),a.innerText=o.get(r),a.dataset.filterName=r,a.addEventListener("click",s=>{let n=s.currentTarget;if(g.width==0&&g.height==0)return;let t=n.dataset.filterName;switch(t){case"original":D.resetCanvasToOriginalImage(),p.classList.remove("clickable-button"),p.classList.add("disabled-button");break;default:D.applyFilter(c.get(t)),p.classList.remove("disabled-button"),p.classList.add("clickable-button")}f.innerText=o.get(t),f.dataset.filterName=t,b.classList.remove("visible")}),l.appendChild(a)}),b.appendChild(l),f.addEventListener("click",i=>{g.width==0&&g.height==0||(b.classList.add("visible"),G.classList.remove("visible"))}),p.addEventListener("click",i=>{if(g.width==0&&g.height==0||f.innerText==o.get("original"))return;let r=f.dataset.filterName;G.innerText=u.get(r)||"",G.classList.toggle("visible"),b.classList.remove("visible")})});
