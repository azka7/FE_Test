// show semester
function showSemester() {
  var checkBox = document.getElementById("checking");
  var checkSmt = document.getElementById("check-semester");

  if (checkBox.checked == true) {
    checkSmt.style.visibility = "visible";
  } else {
    checkSmt.style.visibility = "hidden";
  }
}
