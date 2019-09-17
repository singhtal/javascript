# VideoImageCapture

VideoImageCapture is a Jquery library for dealing with video to image capture feature using webcam.

## Installation

Simple include the library in your project

## Usage

```python
Initializing the plugin -

   videoImageCapture($('#idOfCanvasElement'), 'option');
   // canvas element is the element where live video and captured image will be displayed

Plugin supports multiple options -

1) start

   Starts the camera and live preview


2) capture

   Converts current video view into static base64 format which we can utilize for our operations.


3) stop 

  stops the camera and the video.


4) paramerters inside the object

{
    width: widthinPX,
    height: heightinPX,
    autoplay: true,
    onsuccess: function () {},
    onerror: function () {}
}

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)