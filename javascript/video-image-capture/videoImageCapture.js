(function () {
    navigator.getUserMedia_ = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    var isSupported = !!navigator.getUserMedia_;
    var canvas;
    var video;

    videoImageCapture = function (elem, options) {
        canvas = elem[0]; //element is the element with class

        if (options === 'isSupported') {
            return isSupported;
        } else if (options === 'capture') {
            return canvas.toDataURL();
        } else if (options === 'stop') {
            video.pause();
            video.srcObject.getTracks().forEach(track => track.stop())
            return false;
        } else if (options === 'start') {
            return video.play();
        } else {
            // These are the defaults.
            var settings = $.extend({
                width: canvas.clientWidth,
                height: canvas.clientHeight,
                autoplay: true,
                onerror: function () {},
                onsuccess: function () {}
            }, options);

            // canvas context
            var canvasContext = canvas.getContext('2d');

            // video element
            video = document.createElement('video');

            // Update our canvas dimensions
            $(canvas).prop("width", settings.width).prop("height", settings.height);

            // requestAnimationFrame
            window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

            // Write video to our canvas
            function tocanvas() {
                canvasContext.drawImage(video, 0, 0, settings.width, settings.height);
                window.requestAnimationFrame(tocanvas);
            }

            // Set up video
            if (isSupported) {
                //navigator.webkitGetUserMedia({
                navigator.getUserMedia_({
                    video: true
                }, function (stream) {
                    video.srcObject = stream;
                    if (settings.autoplay)
                        video.play();
                    window.requestAnimationFrame(tocanvas);
                    settings.onsuccess();
                }, settings.onerror);
            }
            elem.css({
                width: settings.width,
                height: settings.height
            });
        }
    }

}());
