tracks = [ //REMEMBER: none of the files have to be named a number, it was just a test. The IDs are entirely dependent on location in the array now too.
    { //MAKE SURE TO UPDATE search.js object too.
        "src": "01.mp3",
        "name": "Follow Through",
        "genres": [" Experimental"]
    },
    {
        "src": "02.mp3",
        "name": "Follow Through (slower)",
        "genres": [" Experimental"]
    },
    {
        "src": "03.mp3",
        "name": "Staggered Tripping",
        "genres": [" Experimental"]
    },
    {
        "src": "interloom1.mp3",
        "name": "interloom (faster)",
        "genres": [" Fusion", " Dance", " Experimental"]
    },
    {
        "src": "interloom2.mp3",
        "name": "interloom",
        "genres": [" Fusion", " Dance", " Experimental"]
    },
    {
        "src": "06.mp3",
        "name": "Holdover",
        "genres": [" Experimental"]
    }
]

var accessibleTracks = [];

function loadLinks() {
    document.getElementById("jsalert").style.display = "none";
    document.getElementById("content-wrapper").style.display = "block";

    var dest = document.getElementById("select");
    for (var i = 0; i < tracks.length; i++) {
        let track = tracks[i];
        var trackLink = document.createElement("a");
        trackLink.id = String(i + 1);
        accessibleTracks.push(track["name"]);
        trackLink.classList.add("trackLink");
        trackLink.classList.add("delay" + String(Math.floor((Math.random()*4)))); //creates random motion at 0,1,2,3 
        trackLink.setAttribute("onmousedown", "loadTrack(" + String(i + 1) + ")");
        trackLink.appendChild(document.createTextNode(track["name"]));
        dest.appendChild(trackLink);
    }

    /* OLD SYSTEM
    tracks.forEach(function(track) {
        var trackLink = document.createElement("a");
        trackLink.id = track["id"];
        accessibleTracks.push(track["id"]);
        trackLink.classList.add("trackLink");
        trackLink.classList.add("delay" + String(Math.floor((Math.random()*4)))); //creates random motion at 0,1,2,3 
        trackLink.setAttribute("onmousedown", "loadTrack(" + String(track["id"]) + ")");
        trackLink.appendChild(document.createTextNode(track["name"]));
        dest.appendChild(trackLink);
    });
    */

    let ur = document.URL;
    if (ur.indexOf("#") != -1) {
        loadTrack(parseInt(ur.slice(ur.indexOf("#") + 1)));
    }
}

function loadTrack(trackID) {
    var dest = document.getElementById("select");
    dest.style.display = "none";
    dest.classList.remove("selectHome");
    dest.classList.add("selectSub");
    document.getElementById("searcher").style.display = "none";
    var selectedTrack = tracks[trackID - 1]
    var brAudCast = document.createElement("audio");
    brAudCast.id = "brAudCast";
    brAudCast.setAttribute("controls", "");
    brAudCast.setAttribute("autoplay", "");
    var wrapper = document.getElementById("audioWrapper");
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }
    wrapper.appendChild(brAudCast);
    var brAudSrc = document.createElement("source");
    brAudSrc.setAttribute("src", "tracks/" + selectedTrack["src"]);
    brAudCast.appendChild(brAudSrc);
    wrapper.style.display = "flex";

    let genres = String(selectedTrack["genres"]).replace("[","").replace("]", "");
    document.getElementById("info").textContent = "playing: " + selectedTrack["name"] + ".   genre(s): " + genres + ".";

    history.replaceState({}, "", "#" + String(trackID));
    document.getElementById("more").style.display = "block";
    document.getElementById("audioSettings").style.display = "block";
    document.getElementById("close").style.display = "none";
}

function reLoad(stillOnTrack) {
    document.getElementById("select").style.display = "block";
    document.getElementById("searcher").style.display = "block";
    document.getElementById("close").style.display = "block";
    document.getElementById("more").style.display = "none";
    if (stillOnTrack) {
    } else {
        document.getElementById("select").classList.remove("selectSub");
        document.getElementById("select").classList.add("selectHome");
        document.getElementById("close").style.display = "none";
        document.getElementById("audioSettings").style.display = "none";
        history.replaceState({}, "", " ");
        var wrapper = document.getElementById("audioWrapper")
        wrapper.style.display = "none";
        while (wrapper.firstChild) {
            wrapper.removeChild(wrapper.firstChild);
        }
    }
}

function closeSelect() {
    document.getElementById("close").style.display = "none";
    document.getElementById("select").style.display = "none";
    document.getElementById("searcher").style.display = "none";
    document.getElementById("more").style.display = "block";
}

let clickableCopy = true;

function copyLink(linkerObj) {
    if (clickableCopy) {
        let copytxt = document.URL;
        try { //the main way of copying
            navigator.clipboard.writeText(copytxt);
        } catch (error) { //only for ie11, which doesn't support the above
            let tempTxt = document.createElement("input");
            tempTxt.value = copytxt;
            document.body.appendChild(tempTxt);
            tempTxt.select();
            document.execCommand("copy");
            document.body.removeChild(tempTxt);
        }
        callNotif("link copied.", linkerObj, "get link");
    }
}

let timeoutArr = [];

function callNotif(message, notifObj, defMessage) {
    timeoutArr.forEach(function(timeouter) {
        clearTimeout(timeouter);
    });

    notifObj.textContent = message;
    clickableCopy = false;
    let ntimer = setTimeout(function(){
        timeoutArr.push(ntimer);
        notifObj.textContent = defMessage;
        clickableCopy = true;
    }, 1.5*1000);
}