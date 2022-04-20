let transition = 0;

function slide(event, path) {
    const parent = event.currentTarget.closest(".slider");
    const slider = parent.querySelector(".slider__items");

    transition += path;

    slider.style.transform = `translateX(${transition}%)`;
}

let transition1 = 0;