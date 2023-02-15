document.addEventListener('DOMContentLoaded', async function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = await M.Sidenav.init(elems);
  });
  
  document.addEventListener('DOMContentLoaded', async function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = await M.FloatingActionButton.init(elems);
  });
  
  document.addEventListener('DOMContentLoaded', async function() {
    var dropdowns = document.querySelectorAll('.dropdown-trigger')
    for (var i = 0; i < dropdowns.length; i++){
        await M.Dropdown.init(dropdowns[i]);
    }
  });
  
  document.addEventListener('DOMContentLoaded', async function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = await M.Carousel.init(elems,{
      fullWidth: true,
      duration: 500,
      indicators: true,
      onCycleTo: null
    });
  });
  