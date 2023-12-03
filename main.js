var math = document.getElementById("math");

function display(num) {
  math.value += num;
}

function calculate() {
  try {
    math.value = eval(math.value);
  }
  catch (err) {
    alert("!!!")
  }
}

function clean() {
  math.value = '';
}

function zero() {
   math.value = 0;
}

function roots() {
   math.value = math.value ** 0.5
}

function sqr() {
   math.value *= math.value;
}

function mod() {
   math.value /= 100
}

function del() {
  math.value = math.value.slice(0, -1);

}