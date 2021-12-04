tracks = [
    {
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

let currentQuery = "";

function filterResults() {
    for (var i = 0; i < tracks.length; i++) {
        let track = tracks[i];
        if (track["name"].slice(0,currentQuery.length).toLowerCase() != currentQuery.toLowerCase()) {
            document.getElementById(String(i+1)).style.display = "none";
        } else {
            document.getElementById(String(i+1)).style.display = "block";
        }
    }
}

function checkQueriesPress(e) {
    let thekey = e.key;
    if (document.activeElement == document.getElementById("searcher")) {
        if (thekey == "Backspace" || thekey == "Delete") {
        } else {
            if (thekey == "Spacebar") {
                thekey = " ";
            }
            currentQuery += thekey; //REMEMBER! Spacebar is the value for space
            filterResults();
        }
    }
}

function checkQueriesBack(e) {
    let thekey = e.key;
    if (document.activeElement == document.getElementById("searcher")) {
        if (thekey == "Backspace" || thekey == "Delete") {
            currentQuery = currentQuery.slice(0,currentQuery.length - 1);
            filterResults();
        }
    }
}

document.addEventListener("keydown", checkQueriesBack);
document.addEventListener("keypress", checkQueriesPress);
