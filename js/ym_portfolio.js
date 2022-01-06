//filterring
function filterring(list) {
    //let lclass = list.class;
    console.log(list);
}

function noScroll(event) {
    event.preventDefault();
}

window.onload = function() {
    document.addEventListener('mousewheel', noScroll, {passive: false});
    window.setTimeout(addLoaded, 4*1000);
    window.setTimeout(enableScroll, 5*1000);
}
function addLoaded() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

function enableScroll() {
    document.removeEventListener('mousewheel', noScroll, {passive: false});

    const works_title = document.getElementById('works_title');
    let works_title_y = works_title.getElementsByClassName('y')[0];
    works_title_y.classList.add('animation_start');
    const works_title_m = works_title.getElementsByClassName('m')[0];
    works_title_m.classList.add('animation_start');

    const works_title_name = document.getElementById('works_title').getElementsByClassName('title_name')[0];
    works_title_name.classList.add('animation_start');
}