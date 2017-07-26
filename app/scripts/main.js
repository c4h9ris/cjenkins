//jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

function getModalContent(contentKey) {
  var content = {}
  switch(contentKey) {
    case 'mf_v2':
        content.src = "images/mf-old-full.png"
        content.caption = "A full re-design of Moonfruit's homepage to create a more modern feel with animations to show how the Moonfruit app works. Moonfruit's first responsive website."
        break;
    case 'mf_v3':
        content.src = "images/mf-new-large.jpg"
        content.caption = "Having redesigned the website we took a more simplistic approach to the design which would prove easier to A/B test. Load speeds were increased dramatically without heavy animations. Information was clearer and acquisition rates were improved."
        break;
    case 'mf_app':
        content.src = "images/cubic-large.jpg"
        content.caption = ""
        break;
    case 'mbot_ca':
        content.src = "images/mbot-large.jpg"
        content.caption = ""
        break;
    case 'mbot_us':
        content.src = "images/mbn-large.jpg"
        content.caption = ""
        break;
    case 'dbank':
        content.src = "images/deutsche-bank-large.jpg"
        content.caption = ""
        break;
    case 'darwin':
        content.src = "images/darwin.png"
        content.caption = ""
        break;
    case 'mso_actual':
        content.src = "images/mso-net-large.jpg"
        content.caption = ""
        break;
    case 'brdc':
        content.src = "images/brdc.jpg"
        content.caption = ""
        break;
    case 'elaine':
        content.src = "images/elaine-academy.jpg"
        content.caption = ""
        break;
    case 'chapman':
        content.src = "images/chapman-creative.jpg"
        content.caption = ""
        break;
  }
  return content;
}

$('#portfolioModal').on('show.bs.modal', function (event) {
  var image = $(event.relatedTarget) // Button that triggered the modal
  var portfolioItem = image.data('portfolio')
  var modal = $(this)

  var portfolioContent = getModalContent(portfolioItem);

  modal.find('.modal-body img').attr('src', portfolioContent.src);
  modal.find('.modal-footer .caption').text(portfolioContent.caption);
})
