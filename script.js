const elements = document.querySelectorAll("[farrel-comment]");  
const farrel = document.querySelector("#farrel-comment")
const default_comment = "Hello :)"
for (const elm of elements) {
    elm.onmouseenter = function() {
        farrel.innerHTML = elm.getAttribute("farrel-comment")
    }
    elm.onmouseleave = function() {
        parent = elm.parentElement.closest(["[farrel-comment]"])
        if (parent != null) {
            farrel.innerHTML = parent.getAttribute("farrel-comment")
        } else {
            farrel.innerHTML = default_comment
        }
    }
}