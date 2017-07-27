document.addEventListener("deviceready", function() {
    // Camera
    var cameraLink = document.querySelector('#camera-link');
    cameraLink.addEventListener("click", function() {
        if (navigator.camera) {
            navigator.camera.getPicture(onCameraSuccess, onCameraFail, {
                quality: 50, // Quality from 1 - 100. 50 is default
                sourceType: Camera.PictureSourceType.CAMERA,  // 0 = Photo Library, 1 = Camera, 2 = Saved Album
                destinationType: Camera.DestinationType.FILE_URI,
                saveToPhotoAlbum: true,
                encodingType: 0  // 0 = JPG, 1 = PNG
            });
        } else {
            alert('Camera is not available.');
        }
    });


    // TODO: THE STUDENTS HAVENT WRITTEN THIS YET
    function onCameraSuccess(uri) {
        // Args: message, callback when dialog is dismissed, title, button name
        navigator.notification.alert('Picture saved.', null, 'Camera', 'OK');
    }

    function onCameraFail(msg) {
        // Ignore only if message is "Camera cancelled." which occurs if you
        // cancel this operation.
        if (msg.indexOf('cancel') == -1) {
            alert(msg);
        }
    }

    // Map
    var mapLink = document.querySelector("#map-link");
    mapLink.addEventListener("click", function(){
      alert("WTF");
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeolocationFail, {timeout: 3000});
      } else {
        alert("Unable to get current location");
      }
    });

    function onGeolocationSuccess(position){
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      window.location = "geo: " + latitude + "," + longitude;
    }

    function onGeolocationFail(msg) {
      alert(msg);
    }

});
