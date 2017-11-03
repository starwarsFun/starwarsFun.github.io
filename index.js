var preloader = document.querySelector(".preloader");
var audio = document.createElement("audio");
setTimeout(function () {
    audio.src = "music/StarWarsTheme.mp3";
    audio.autoplay = true;
}, 7000);

// setTimeout(function () {
//     audio.pause();
// },  10000);

setTimeout(function () {
    preloader.style.transform = "translateX(-100%)";
}, 21000);

let name = document.querySelectorAll("#named");

    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "https://swapi.co/api/people/?page=1",
            crossDomain: true,
            success: function(data) {
                for(var i = 0; i < data.results.length; i++){
                    // console.log(data);
                    // console.log(birthYear[i]);
                    name[i].innerHTML = data.results[i].name;
                    birthYear[i].innerHTML = data.results[i].birth_year;
                    gender[i].innerHTML = data.results[i].gender;
                    height[i].innerHTML = data.results[i].height;

                }
            },
            error: function() {
                console.log("Error")
            }
        });

    });


    var input = document.getElementsByTagName("input");
    for(var i = 0; i < input.length; i++){
        input[i].onchange = function () {
            localStorage.setItem(this.id, this.checked);
        }
    }

for(var i = 0; i < input.length; i++) {
    if(localStorage.getItem(input[i].id)){
        input[i].checked = true;
    }
}

