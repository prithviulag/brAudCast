tracks = [
    {
        "id": 1,
        "src": "01.mp3",
        "name": "Follow Through",
        "genres": [" Experimental"]
    },
    {
        "id": 2,
        "src": "02.mp3",
        "name": "Follow Through (slower)",
        "genres": [" Experimental"]
    },
    {
        "id": 3,
        "src": "03.mp3",
        "name": "Staggered Tripping",
        "genres": [" Experimental"]
    },
    {
        "id": 4,
        "src": "04.mp3",
        "name": "Sarasongi",
        "genres": [" Fusion", " Classical"]
    },
    {
        "id": 5,
        "src": "05.mp3",
        "name": "Sarasongi Pt. II",
        "genres": [" Fusion", " Classical", " Experimental"]
    },
    {
        "id": 6,
        "src": "06.mp3",
        "name": "Holdover",
        "genres": [" Experimental"]
    }
]

let currentQuery = "";

function filterResults() {
    tracks.forEach(function(track) {
        if (track["name"].slice(0,currentQuery.length).toLowerCase() != currentQuery.toLowerCase()) {
            document.getElementById(track["id"]).style.display = "none";
        } else {
            document.getElementById(track["id"]).style.display = "block";
        }
    });
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
