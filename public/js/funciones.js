document.addEventListener('DOMContentLoaded', function() {
    //var elems = document.querySelectorAll('.sidenav');
    //var instances = M.Sidenav.init(elems);
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);
    M.AutoInit();
    $(".dropdown-trigger").dropdown();
  });