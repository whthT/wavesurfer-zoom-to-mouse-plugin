# WaveSurfer Zoom To Mouse Plugin

[WaveSurfer.js](https://wavesurfer-js.org/) Zoom To Mouse Plugin

### Usage

```js
import ZoomToMousePlugin from "wavesurfer-zoom-to-mouse-plugin";
const wavesurfer = WaveSurfer.create({
  container: document.getElementById("wavesurfer"),
  backend: "WebAudio", // All backends supported
  ...
  plugins: [
      ...
      ZoomToMousePlugin.create(),
      ...
  ],
});

### Installation

```sh
$ npm i wavesurfer-zoom-to-mouse-plugin
```

### Methods

- `zoomToMouse` - `pxPerSec` 

### Todos

- Tests

## License

MIT

**Free Software, Hell Yeah!**

[git-repo-url]: https://github.com/whthT/wavesurfer-zoom-to-mouse-plugin
[wavesurfer.js]: https://wavesurfer-js.org
[whtht]: https://github.com/whthT
[node.js]: http://nodejs.org
