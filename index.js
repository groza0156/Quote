var one = `<p>
        "Resentment is like drinking poison and waiting for your enemies to
        die."
        <br />
        <br />
        --Nelson Mandela
      </p>`;
var two = `<p>
        "So many books, so little time."
        <br />
        <br />
-- Frank Zappa
      </p>`;
var three = `<p>
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
        <br />
        <br />
-- Marilyn Monroe
      </p>`;
var four = `<p>
        "A room without books is like a body without a soul."

        <br />
        <br />
-- Marcus Tullius Cicero
      </p>`;
var five = `<p>
        "You only live once, but if you do it right, once is enough."

        <br />
        <br />
        -- Mae West

      </p>`;

var num;
var num2 = 12;
function qouteChange() {
  num = Math.floor(Math.random() * 5 + 1);

  console.log(num);
  console.log(num2);

  for (var i = 0; i < 100; i++) {
    if (num == num2) {
      var num = Math.floor(Math.random() * 2 + 1);
    } else {
      break;
    }
  }

  console.log(num);
  console.log(num2);

  switch (num) {
    case 1:
      num2 = num;
      document.getElementById("qt").innerHTML = one;
      break;
    case 2:
      num2 = num;
      document.getElementById("qt").innerHTML = two;
      break;
    case 3:
      num2 = num;
      document.getElementById("qt").innerHTML = three;
      break;
    case 4:
      num2 = num;
      document.getElementById("qt").innerHTML = four;
      break;
    case 5:
      num2 = num;
      document.getElementById("qt").innerHTML = five;
      break;

    default:
      break;
  }
}
