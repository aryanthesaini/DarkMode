const moonPath = "M36.5 72.5C36.5 112.541 74 145 74 145C33.1309 145 0 112.541 0 72.5C0 32.4594 33.1309 0 74 0C74 0 36.5 32.4594 36.5 72.5Z";
const sunPath = "M148 72.5C148 112.541 114.869 145 74 145C33.1309 145 0 112.541 0 72.5C0 32.4594 33.1309 0 74 0C114.869 0 148 32.4594 148 72.5Z";


const darkMode = document.querySelector("#darkMode");
let toggle = false;

darkMode.addEventListener('click', () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });

    timeline.add({
        targets: ".sun",
        d: [
            { value: toggle ? sunPath : moonPath }
        ]
    })

        .add({
            targets: '#darkMode',
            rotate: 320
        }, "-=700")
        .add({
            targets: 'section',
            backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)',
            color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)'
        }, "-=700");

    if (!toggle) {
        toggle = true;
    }
    else {
        toggle = false;

    }


})