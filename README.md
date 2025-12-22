# Filterize

The objetive of this project is to let users apply a varied range
of filters over their digital images. The user can then download
the image with the corresponding effect and with the same image
encoding.

You can execute this project by running `npm run dev` inside of the project's folder after the download. You can then open it in a browser.

The browser UI offers three options:

#### Original
You can click this button and change the effect applied to the image, once selected, the button will have the name of the filter applied.

#### Download
This button you can use to download your image. It will be downloaded in the same encoding as when it was submitted, for example, if you load a png image, it stays a png when you download it.

#### Load Image
Where you select any supported image format to load.

> Note that must be an image supported in browsers.

## Sources

### Conversion between HSV and RGB

The color space conversion used are an implementation of the algorithms
found in Research Gate, from a guy called Ahmed Saadi Abdullah Albasha.

- [RGB to HSV Conversion](https://www.researchgate.net/figure/relation-between-RGB-and-HSV-And-the-reveres-wise-conversion-HSV-color-space-to-RGB_fig5_315744580)
- [HSV to RGB Conversion](https://www.researchgate.net/figure/conversion-from-HSV-to-RGB_fig1_315744577)

### Sepia Algorithm Values

The Sepia filter uses values used in a Microsoft Article.

- [Sepia Tone, StringLogicalComparer, and More](https://learn.microsoft.com/en-us/archive/msdn-magazine/2005/january/net-matters-sepia-tone-stringlogicalcomparer-and-more)

### Grayscale Algorithm

The Grayscale of an image is calculed following the specification rec601,
used in video systems. It is calculated a component named "Y" using the values: 0.299, 0.587, 0.114 for RGB specifically.

### Other Sources

- [Sepia algorithm](https://leware.net/photo/blogSepia.html)
- [Grayscale](https://en.wikipedia.org/wiki/Grayscale)

### Images, Icons etc

- Favicon is property of [Delapouite](https://delapouite.com/), licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/). You can find the icon [here](https://game-icons.net/1x1/delapouite/funnel.html)
