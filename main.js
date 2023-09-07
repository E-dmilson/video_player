
import videos from "./videoLibrary.js";


function loadVideos(){

    const playlistArea = document.querySelector('.playlist');
    videos.forEach((video, index) =>{
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="playlistVideo ${index + 1 == 1 && "active"}">
            <video src=${video.src} muted></video>
            <label class="playlist-video-info">${video.title}</label>
            </div>
        `;
        playlistArea.appendChild(div);
    });

    addOnClick();
}
function addOnClick(){
    const mainVideo = document.querySelector('.mainVideo');
    const playlistVideo = document.querySelectorAll('.playlistVideo');
    playlistVideo.forEach((item, i) =>{
        if(!i){
            setVideo(mainVideo, item);
        }
        item.onclick = () =>{
            playlistVideo.forEach((video) => video.classList.remove("active"));
            item.classList.add("active");
            setVideo(mainVideo, item);
        };
    });
}

function setVideo(mainVideo, item){
    mainVideo.children[0].src = item.children[0].getAttribute("src");
    mainVideo.children[1].innerHTML = item.children[1].innerHTML;
}

loadVideos()