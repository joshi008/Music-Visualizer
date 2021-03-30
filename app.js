const inputElement = document.getElementById("songs");
inputElement.addEventListener("change", handleFiles);

// window.AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioContext = new AudioContext();
// let currentBuffer = null;


var $audio = $('#songs');
$('input').on('change', function (e) {
    var target = e.currentTarget;
    var file = target.files[0];
    var reader = new FileReader();

    console.log($audio[0]);
    if (target.files && file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $audio.attr('src', e.target.result);
            $audio.play();
        }
        reader.readAsDataURL(file);
    }
});



let wave = new Wave();
options = { type: "fireworks" };

console.log(document.getElementById("songs"))
console.log(document.getElementById("output"))
wave.fromElement("songs", "output", options);

function handleFiles(e) {
    // const file = this.files; /* now you can work with the file list */
    // console.log(file);
    var target = e.currentTarget;
    var file = target.files[0];
    console.log(file);
    var reader = new FileReader();

    console.log($audio[0]);
    if (target.files && file) {
        var reader = new FileReader();
        var audio = document.getElementById("output");
        reader.onload = function (e) {
            audio.attr('src', e.target.result);
            audio.play();
        }
        reader.readAsDataURL(file);
    }
}
