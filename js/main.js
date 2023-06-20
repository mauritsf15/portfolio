const navTitle = document.querySelector('.title');

function toggleNavTitleHref() {
    if (navTitle.attributes.href.value == '#') {
        navTitle.attributes.href.value = '#header';
    } else {
        navTitle.attributes.href.value = '#';
    }
}

navTitle.addEventListener('click', function() {setTimeout(toggleNavTitleHref, 500)});