/*Code adapted from the example at https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php*/
// import $ from 'jquery'
import im from "../node_modules/include-media-export/include-media.js"

function resizeAll() {
  let allVideos = document.querySelectorAll("iframe[src^='https://player.vimeo.com'], iframe[src^='//www.youtube.com'], object, video, embed");

  allVideos.forEach(function(el) {
    resize(el);
  });
};

function resize(el) {
  if (!el) {
    // console.warn("tried to resize an invalid element");
    return;
  }
  let fluidEl = el.parentNode;
  // debugger;
  let parentWidth = fluidEl.clientWidth;
  let parentHeight = fluidEl.clientHeight;
  let aspectRatio = el.dataset['aspectratio'];

  let preferredHeight = el.dataset['preferredheight'] || Infinity;
  let preferredWidth = el.dataset['preferredwidth'] || Infinity;
  let width = Math.min(preferredWidth, parentWidth);
  let height = Math.min(width * aspectRatio, preferredHeight);
  const constrainHeight = !im.lessThan('desktop');
  el.dataset['constrainheight'] = constrainHeight;
  if (constrainHeight) { //el.dataset['constrainheight']) {
    height = Math.min(height, parentHeight);
  } else {
    height = Math.min(height, window.innerHeight);
  }
  width = height / aspectRatio;
  if (width > parentWidth) {
    debugger;
  }
  el.style.width = width + "px";
  el.style.height = height + "px";
};
export {
  resize,
  resizeAll
};
