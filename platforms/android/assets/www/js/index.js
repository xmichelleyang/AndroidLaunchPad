document.addEventListener("deviceready", function() {
    
    console.log("hello");
    
    var camera = document.querySelector('#camera-link');
    
    camera.addEventListener("click", function(){
        alert("Helloo");
        console.log("clicked");
        
        
    });
    
    
    
});