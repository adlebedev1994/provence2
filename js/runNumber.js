const time = 10000;
const step = 100;

function outNum(num, elem) {
  let e = document.querySelector("#out");
  n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    e.innerHTML = n;
  }, t);
}

outNum(10000, "#out");