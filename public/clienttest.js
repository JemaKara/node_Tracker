document.addEventListener('DOMContentLoaded', function () {
    function findeAuslöser(event) {
        var elem = event.target,
            name = elem.nodeName;
        document.getElementById('ereignis')
            .textContent = name;
    }
    var seite = document.documentElement;
    seite.addEventListener('mouseover', findeAuslöser);
    seite.addEventListener('click', findeAuslöser);
});



var videoElem = document.querySelector("video");

var videoTracks = mediaElement.videoTracks;

videoElem.videoTracks.addEventListener("addtrack", handleTrackEvent, false);
videoElem.videoTracks.addEventListener("removetrack", handleTrackEvent, false);
videoElem.audioTracks.addEventListener("addtrack", handleTrackEvent, false);
videoElem.audioTracks.addEventListener("removetrack", handleTrackEvent, false);
videoElem.textTracks.addEventListener("addtrack", handleTrackEvent, false);
videoElem.textTracks.addEventListener("removetrack", handleTrackEvent, false);

function handleTrackEvent(event) {
    var trackKind;

    if (event.target instanceof(VideoTrackList)) {
        trackKind = "video";
    } else if (event.target instanceof(AudioTrackList)) {
        trackKind = "audio";
    } else if (event.target instanceof(TextTrackList)) {
        trackKind = "text";
    } else {
        trackKind = "unknown";
    }

    switch(event.type) {
        case "addtrack":
            console.log("Added a " + trackKind + " track");
            break;
        case "removetrack":
            console.log("Removed a " + trackKind + " track");
            break;
    }
}