let amountCats = 50;
let amountRandom = 50;

window.addEventListener('load', () => {
    let imagewrapper = document.getElementById('imagewrapper');
    let imagesIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let pressedCats = [];

    document.getElementById("headphones").addEventListener("click", ()=>sayOoh());
    document.getElementById("question").addEventListener("click", ()=>sayOoh());
    document.getElementById("verify").addEventListener("click", ()=>sayOoh());
    document.getElementById("refresh").addEventListener("click", ()=>refreshImg());

    let ooh = document.getElementById("audio");

    loadImages();

    function loadImages() {

        let array = shuffle(imagesIndex);

        for (let i = 0; i < 9; i++) {
            let img = document.createElement("img");
            if (array[i] <= 4) {

                let index = Math.floor(Math.random() * (amountCats)+1);

                img.src = "./img/cats/cat (" + index + ").png";

                img.addEventListener("click", ()=>pressCat(img));

            } else {

                let index = Math.floor(Math.random() * (amountRandom)+1);

                img.src = "./img/random/random (" + index + ").png";

                img.addEventListener("click", ()=> sayOoh());
            }

            imagewrapper.appendChild(img);
        }
    }

    function shuffle(a) {

        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    function pressCat(img) {

        if(pressedCats.length  === 3) {

            let index = Math.floor(Math.random() * (2 + 1) );

            pressedCats[index].style.filter = "opacity(100%)";
            pressedCats[index].style.border = "0";

            for (let i = index; i < 2; i++) {
                pressedCats[i] = pressedCats[i+1]
            }

            pressedCats[2] = img;

            img.style.filter = "opacity(30%)";
            img.style.border = "100px";
        } else {
            pressedCats[pressedCats.length] = img;

            img.style.filter = "opacity(30%)";
            img.style.border = "100px";
        }

    }
    function sayOoh() {
        let audio = document.createElement("AUDIO");
        audio.setAttribute("src","./audio/ooh.mp3");

        document.body.appendChild(audio);

        audio.play();
    }
    function refreshImg() {
        for (let i = 0; i < pressedCats.length; i++) {
            pressedCats[i].style.filter = "opacity(100%)";
            pressedCats[i].style.border = "0";
        }

        pressedCats = [];

        document.getElementById("imagewrapper").innerHTML = "";

        loadImages();
    }
});
