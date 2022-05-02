function getHtml(name) {
  $.ajax({
    url: name + ".html",
    context: $('#content'),
    success: function(response) {
      if (name == 'index') {
        $(this).html($($.parseHTML(response)).filter("#content"));
      } 
      else {
        $(this).html(response);
        if (name == 'about') {
          $('.container').css("margin-top", "230px");
        }
        if (name == 'projects') {
          $('.container').css("margin-top", "230px");
        }
      } 
    }
  })
}