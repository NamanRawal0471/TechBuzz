document.getElementById("name123").onclick = function () {
    fun()
};
function fun() {
    document.getElementById("name123").innerHTML = "";
}
function myFunc() { alert("You need to subscribe to the blog to comment here."); }
function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}