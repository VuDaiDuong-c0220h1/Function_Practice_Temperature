function convert(temperature) {
    temperature = document.getElementById("input").value;
    document.getElementById("result").innerHTML = (temperature - 32)/1.8;
}