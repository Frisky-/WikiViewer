var wikiViewer = (function functionName() {

  function getWikiEntries(title) {
    var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + title;
    $.ajax({
      url: url,
      dataType: "jsonp",
      success: function(data) {
        $(".resultList").empty();
        $.each(data.query.pages, function(key, value) {
          $(".resultList").append("<a href=https://en.wikipedia.org/?curid=" + value.pageid + " target=_blank><li><h1>" + value.title + "</h1><p>" + value.extract + "</p></li>");
        });
      }
    });
  }
  return {
    getWikiEntries: getWikiEntries
  };
}());

$(document).ready(function() {
  $(".searchBtn").on("click", function() {
    wikiViewer.getWikiEntries($(".search-query").val());
  });
});
