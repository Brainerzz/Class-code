let list = document.getElementsByTagName("p");

for (let i = 0; i < list.length; i++) {
    if (i % 2 == 1) {
        list[i].style.color = "red";
        list[i].innerHTML = i + 1 + " para"
    }

}