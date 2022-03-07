function initHpKwConverter() {
  var hpInputField = getHpInputField();
  hpInputField.addEventListener("keyup", updatePower);
}

function updatePower() {
    var hp = getHpInputField().value;

    fetchKw(hp).then(data => {
      var kw = data.kw;
      console.log("kw: " + kw);
      updateHTML(kw);
    });
}

function updateHTML(kw) {
    document.getElementById("kw_result_value").innerHTML = kw;
}

function getHpInputField() {
    return document.getElementById("input_field_hp")
}
