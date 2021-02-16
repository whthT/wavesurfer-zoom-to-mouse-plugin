export default class ZoomToMousePlugin {
  static create(params) {
    return {
      name: "zoomToMousePlugin",
      deferInit: params && params.deferInit ? params.deferInit : false,
      params: params,
      staticProps: {},
      instance: ZoomToMousePlugin,
    };
  }

  constructor(params, ws) {
    this.params = params;
    this.wavesurfer = ws;
    this.mouseDuration = null;
  }

  zoomToMouse(pxPerSec) {
    if (!pxPerSec) {
      this.wavesurfer.params.minPxPerSec = this.wavesurfer.defaultParams.minPxPerSec;
      this.wavesurfer.params.scrollParent = false;
    } else {
      this.wavesurfer.params.minPxPerSec = pxPerSec;
      this.wavesurfer.params.scrollParent = true;
    }
    this.wavesurfer.drawBuffer();
    this.wavesurfer.drawer.progress(
      this.wavesurfer.backend.getPlayedPercents()
    );
    this.wavesurfer.drawer.recenter(this.mouseDuration);
    this.wavesurfer.fireEvent("zoom", pxPerSec);
  }

  _onWaveFormMouseWheelEvent(e) {
    e.preventDefault();
    const zoom = this.wavesurfer.params.minPxPerSec;
    var deltaY = 0;
    if (e.deltaY) {
      deltaY = e.deltaY;
    } else if (e.wheelDelta) {
      deltaY = -e.wheelDelta;
    }
    const zoomRatio = 20;
    let zoomValue = zoom;
    if (deltaY < 0) {
      // zoom in
      zoomValue = zoom + zoomRatio;
    } else {
      // zoom out
      zoomValue = zoom - zoomRatio > 0 ? zoom - zoomRatio : 0;
    }
    this.zoomToMouse(zoomValue);
  }

  _onWaveFormMouseMove(e) {
    const ev = this.wavesurfer.drawer.handleEvent(e);
    this.mouseDuration = ev;
  }

  init() {
    this.wavesurfer.container.addEventListener(
      "wheel",
      this._onWaveFormMouseWheelEvent.bind(this)
    );
    this.wavesurfer.container.addEventListener(
      "mousemove",
      this._onWaveFormMouseMove.bind(this)
    );
  }

  destroy() {
    this.wavesurfer.container.removeEventListener(
      "wheel",
      this._onWaveFormMouseWheelEvent.bind(this)
    );

    this.wavesurfer.container.addEventListener(
      "mousemove",
      this._onWaveFormMouseMove.bind(this)
    );
  }
}
