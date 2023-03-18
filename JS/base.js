const videosource = "../video/FlashBang.mp4"

function Deslumbrame(){
    if(videosource.paused){
        videosource.show();
        print("Reproduciendo video")
        videosource.requestFullscreen();
        videosource.play();
        document.videosource.addEventListener('ended',myHandler,false);
        function myHandler(e) {
            e.target.pause();
            videosource.exitFullscreen();
            videosource.hide();
        }
    }
    else{
        print("No se puede reproducir el video");
    }

    return false;
}