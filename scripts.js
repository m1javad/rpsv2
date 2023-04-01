function showElement(n) {
    var elements = document.getElementsByClassName("start page");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove("active");
    }
    elements[n-1].classList.add("active");
}