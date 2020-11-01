import $ from "jquery";

const getPageList = () => {
  $('h1').remove();
  $.get(
    "./api",
    (response) => {
      response.forEach((file) => {
        $("body").append(`<h1>${file}</h1>`);
      });
    },
    "JSON"
  );
};

getPageList()

$("button").on("click", () => {
  $.post(
    "./api/createNewPage.php",
    {
      name: $("input").val(),
    },
    () => {
      getPageList()
    }
  ).fail(() => {
    alert("Страница уже существует");
  });
});
