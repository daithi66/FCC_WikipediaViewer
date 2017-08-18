$("#searchBtn").click(search);

function search() {
  var searchText = $("#searchBox").val();
  if (searchText == "") {
    return;
  }
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
  url += searchText+"&format=json&callback=?";
  $.getJSON(url, function(data) {
    $("#wikiEntries").html("");
    for (var i = 0; i < data[1].length; i++) {
      var heading = data[1][i];
      var description = data[2][i];
      var link = data[3][i];
      var htmlLine = $("#wikiEntries").html();
      $("#wikiEntries").html(htmlLine+"<a href='"+link+"'><li>"+heading+"<p>"+description+"</p></li></a>");
    }
  });
}
