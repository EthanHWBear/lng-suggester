$(document).ready(function() {
  $("#submitForm").click(function(event) {
    const bees = parseInt($("input:radio[name=bees]:checked").val());
    const orange = parseInt($("input:radio[name=orange]:checked").val());
    const foil = parseInt($("input:radio[name=foil]:checked").val());
    const pillow = parseInt($("input:radio[name=pillow]:checked").val());
    const season = parseInt($("input:radio[name=season]:checked").val());
    const result = (bees+orange+foil+pillow+season);

    if (result <=3) {
      $("#yes").fadeToggle();
    } else if (result ===5) {
      $("#no").fadeToggle();
    } else {
      $("#perhaps").fadeToggle();
    }
    event.preventDefault();
  });
});