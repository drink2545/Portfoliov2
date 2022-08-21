function navbar() {
    var x = document.getElementById("navbarcontent");
    if (x.className === "flex_container navbarcontent") {
        x.classList.add("responsive")
    } else {
        x.classList.remove("responsive")
    }
}