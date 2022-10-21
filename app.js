// const menuItems = document.querySelectorAll('.navegacao a'); pega todos os links, inclusive links para locais externos;
const menuItems = document.querySelectorAll('.navegacao a[href^="#"]');/*pega somente os links, que possuem o atributo href;*/

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 70;
    scrollToPosition(to);
}

function scrollToPosition(to){
    window.scroll({
        top: to
    });
}