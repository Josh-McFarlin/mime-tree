# mime-tree

![](https://badgen.net/npm/v/mime-tree)
![](https://badgen.net/npm/license/mime-tree)
![](https://badgen.net/npm/types/mime-tree)
![](https://badgen.net/bundlephobia/min/mime-tree)
![](https://badgen.net/npm/dt/mime-tree)

## 👋 Intro

A helper for quickly determining the file type of a buffer.

This library is pure JavaScript, any can run in Node, the browser, or anywhere else JavaScript runs.
This library is exported in CommonJS and ES Modules.

Compared to other libraries that iterate through multiple arrays to find the mime type,
this helper detects mime type by looping through a single object.

### Supported File Types

* JPEG
* PNG
* GIF
* WEBP
* BMP
* TIFF
* AVIF

## 🚀 How to use

### Install

To install this library, use on of the following commands:
```bash
npm install -S mime-tree
yarn add mime-tree
```

### Use

```typescript
import mimeFromBuffer from "mime-tree";

const image: Uint8Array = ...;

const mimeType = mimeFromBuffer(image);
```
