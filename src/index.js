import WaveSurfer from "wavesurfer.js";
import ZoomToMousePlugin from "./lib/WaveSurferZoomToMouse";
window.addEventListener("DOMContentLoaded", () => {
  const wavesurfer = WaveSurfer.create({
    container: document.getElementById("wavesurfer"),
    backend: "WebAudio",
    splitChannels: true,
    height: 60,
    plugins: [ZoomToMousePlugin.create()],
    normalize: true
  });

  wavesurfer.load("/amb_traffic_vehicles_pass_02.wav");


  document.getElementById("play").onclick = () => {
    wavesurfer.playPause()
  }

  window.wavesurfer = wavesurfer
});
