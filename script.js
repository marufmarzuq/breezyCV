let toggle = document.getElementById('toggle');
let sidebar = document.getElementById('sidebar');


document.onclick = function (h) {
     if (h.target !== toggle && h.target !== sidebar) {
          toggle.classList.remove('active');
          sidebar.classList.remove('active');
     }
}


toggle.onclick = function () {
     toggle.classList.toggle('active');
     sidebar.classList.toggle('active');
}