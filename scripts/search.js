let tracks = [ //REMEMBER: none of the files have to be named a number, it was just a test. The IDs are entirely dependent on location in the array now too.
    { //MAKE SURE TO UPDATE search.js object too.
        "src": "01.mp3",
        "name": "Follow Through",
        "code": "follow-through",
        "genres": [" Experimental"]
    },
    {
        "src": "02.mp3",
        "name": "Follow Through (slower)",
        "code": "follow-throughII",
        "genres": [" Experimental"]
    },
    {
        "src": "03.mp3",
        "name": "Staggered Tripping",
        "code": "staggered-trip",
        "genres": [" Experimental"]
    },
    {
        "src": "interloom1.mp3",
        "name": "interloom (faster)",
        "code": "interloom",
        "genres": [" Fusion", " Dance", " Experimental"]
    },
    {
        "src": "interloom2.mp3",
        "name": "interloom",
        "code": "interloomII",
        "genres": [" Fusion", " Dance", " Experimental"]
    },
    {
        "src": "LockedApartmentv1.mp3",
        "name": "Locked Apartment",
        "code": "locked-apt",
        "genres": [" Trance", " Dance", " Experimental"]
    },
    {
        "src": "06.mp3",
        "name": "Holdover",
        "code": "holdover",
        "genres": [" Experimental"]
    }
]

let currentQuery = "";

function filterResults() {
    for (var i = 0; i < tracks.length; i++) {
        if (currentQuery.length == 0) {  //show all when empty
            document.getElementById(String(i+1)).style.display = "block";
            continue;
        }
        let track = tracks[i];
        if (track["name"].slice(0,currentQuery.length).toLowerCase() != currentQuery.toLowerCase()) {
            document.getElementById(String(i+1)).style.display = "none";
        } else {
            document.getElementById(String(i+1)).style.display = "block";
        }
    }
}

function checkQueriesPress(e) {
    let searcher = document.getElementById("searcher");
    console.log(searcher.value)
    if (document.activeElement == searcher) {
        currentQuery = searcher.value;
        filterResults();
    }
}

document.addEventListener("keyup", checkQueriesPress);
