
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

    const works_title_name = works_title.getElementsByClassName('title_name')[0];
    works_title_name.classList.add('animation_start');
}


window.addEventListener('scroll', function() {
    const profile = document.getElementById('profile');
    const rect_p = profile.getBoundingClientRect();
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let top_p = rect_p.top + scrollTop;
    let position_p = top_p - window.innerHeight;
    if(document.scrollingElement.scrollTop > position_p){
        const profile_title = document.getElementById('profile_title');
        let profile_title_y = profile_title.getElementsByClassName('y')[0];
        profile_title_y.classList.add('animation_start');
        let profile_title_m = profile_title.getElementsByClassName('m')[0];
        profile_title_m.classList.add('animation_start');

        const profile_title_name = profile_title.getElementsByClassName('title_name')[0];
        profile_title_name.classList.add('animation_start');
    }

    const skills = document.getElementById('skills');
    const rect_s = skills.getBoundingClientRect();
    let top_s = rect_s.top + scrollTop;
    let position_s = top_s - window.innerHeight;
    if(document.scrollingElement.scrollTop > position_s){
        const skills_title = document.getElementById('skills_title');
        let skills_title_y = skills_title.getElementsByClassName('y')[0];
        skills_title_y.classList.add('animation_start');
        let skills_title_m = skills_title.getElementsByClassName('m')[0];
        skills_title_m.classList.add('animation_start');

        const skills_title_name = skills_title.getElementsByClassName('title_name')[0];
        skills_title_name.classList.add('animation_start');
    }
})