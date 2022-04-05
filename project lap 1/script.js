const searchSelector = document.querySelector('.search') 
// changing colour of input top right
function changeSearchBackgroundColour() {
    searchSelector.style.background = "white";
}
// changing colour of input top right
function changeSearchBackgroundColourNormal() {
    searchSelector.style.background = "rgb(118, 118, 118)";
}
// changing colour of input top right
searchSelector.addEventListener("mouseover", changeSearchBackgroundColour)
searchSelector.addEventListener("mouseout", changeSearchBackgroundColourNormal)

// opening gif container
document.getElementById('gif-icon').addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'flex';
})

// closing gif button
document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.bg-modal').style.display = 'none';
})

// pressing comments svg - opens an option to comment and an option to see replies - and also shows close svg
document.querySelector('.view-comments').addEventListener('click', () => {
    document.querySelector('.replies').style.display = 'flex';
    document.querySelector('.post-reply').style.display = 'flex';
    document.querySelector('.details').style.display = 'flex';
})

// close replies button
document.querySelector('.details').addEventListener('click', () => {
    document.querySelector('.replies').style.display = 'none';
    document.querySelector('.post-reply').style.display = 'none';
    document.querySelector('.details').style.display = 'none';
})

// giphy api
(function () {
    return fetch()
})
const GIPHY_API = `https://api.giphy.com/v1/gifs/search?q=${keyword}api_key=F5lIfSy0whiLXlpUdCs3OMVFe8Saf1sC&limit=20`;
