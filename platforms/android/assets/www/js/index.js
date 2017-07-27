document.addEventListener("deviceready", function() {
    // Camera
    var cameraLink = document.querySelector('#camera-link');
    cameraLink.addEventListener("click", function() {
        if (navigator.camera) {
            navigator.camera.getPicture(onCameraSuccess, onCameraFail, {
                quality: 50, // range 0-100 with 100 being best; 50 is defaulta
                sourceType: Camera.PictureSourceType.CAMERA,  // 0=Photo Library, 1=Camera, 2=Saved Album
                destinationType: Camera.DestinationType.FILE_URI,
                saveToPhotoAlbum: true, // On Android, this is saved to the Pictures directory.
                encodingType: 0  // 0=JPG, 1=PNG; 0 is default
            });
        } else {
            alert('Camera is not available.');
        }
    });

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
});
