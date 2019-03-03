/*Code adapted from the example at https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php*/
import $ from 'jquery'
let resizeVideos = ()=>{
$(function() {
  $(window).resize(function() {
    console.log("resizing");
    let $allVideos = $("iframe[src^='https://player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed");

    $allVideos.each(function() {

      let $el = $(this);
      let $fluidEl = $el.parent();

      let parentWidth = $fluidEl.width();
      let parentHeight = $fluidEl.height();
      let aspectRatio = $el.attr('data-aspectratio');

      let preferredHeight = $el.attr('data-preferredheight');
      let preferredWidth = $el.attr('data-preferredwidth');
      let width = Math.min(preferredWidth, parentWidth);
      let height = Math.min(width * aspectRatio, preferredHeight);
      height = Math.min(height, parentHeight);
      width = height / aspectRatio;

      $el
        .width(width)
        .height(height);

    });

  }).resize();

});
}
export default resizeVideos;
