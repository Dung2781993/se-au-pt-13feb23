function showDropDownValue() {
  //Dropdown value and text
  let dropdown = document.getElementById("cars");
  let selectedDropDownValue = dropdown.value;
  let selectedDropDownText = dropdown.options[dropdown.selectedIndex].text;

  //Checkbox value
  let checkbox = document.getElementById("vehicle");
  let checkBoxValue = checkbox.value;
  let isCheck = checkbox.checked;
  console.log(checkBoxValue);
  console.log(isCheck);
}
