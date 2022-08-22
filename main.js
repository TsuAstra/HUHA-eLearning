
var navStatus = true;
var btn = document.getElementById("bar-btn");
btn.onclick = () => {
  if (navStatus) {
    document.getElementById("main__sidebar").style.width = "5%";
    document.getElementById("main__container").style.width = "95%";
    for (let i = 0; i < 3; i++) {
      document.getElementsByClassName("sidebar")[i].style.display = "none";
    }
    document.getElementsByClassName("sidebar-user--img")[0].style.width = "100%";
    navStatus = false;
  } else {
    document.getElementById("main__sidebar").style.width = "16.6667%";
    document.getElementById("main__container").style.width = "83.3333%";
    for (let i = 0; i < 3; i++) {
      document.getElementsByClassName("sidebar")[i].style.display = "block";
    }
    document.getElementsByClassName("sidebar-user--img")[0].style.width = "20%";
    navStatus = true;
  }
}
var listStatus = false;
var listBtn = document.getElementById("kien-thuc-chung");
var spin1 = document.getElementById("spin");
listBtn.onclick = () => {
  if (listStatus) {
    document.getElementsByClassName("sidebar-sublist")[0].style.display = "none";
    spin1.style.transform = "rotate(0deg)";
    listStatus = false;
  } else {
    document.getElementsByClassName("sidebar-sublist")[0].style.display = "block";
    spin1.style.transform = "rotate(-90deg)";
    listStatus = true;
  }
}
notiStatus = false;
var noti = document.getElementById("noti-btn");
noti.onclick = () => {
    if (notiStatus) {
        document.getElementsByClassName("noti")[0].style.display = "none";
        notiStatus = false;
    } else {
        document.getElementsByClassName("noti")[0].style.display = "block";
        notiStatus = true;
    }
}
noti.onfocusout = () => {
    document.getElementsByClassName("noti")[0].style.display = "none";
    notiStatus = false;
}