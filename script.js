// const words = "Ubaid is super cool"; //add more words
const words = "ubaid is super cool"
const ANIMATION_DURATION = 4000;

//seprate each charater into it's own div
const charater = words.split("").forEach((char, i) => {
    function createElement(offset) {
        const div = document.body.createElement("div")
        div.innerText = char
        div.classList.add("charater")

        // negative animation delay prevents waiting to start the animation
        div.style.animationdelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`
        return div
    }

    document.getElementById("spiral").append(createElement(0))
    document.getElementById("spiral2").append(createElement(-1 * (ANIMATION_DURATION / 2)))
});

