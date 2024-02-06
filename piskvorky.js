const td = document.getElementsByTagName("td");
let player1 = true;
// Iterate through each <td> element
for (let i = 0; i < td.length; i++) {
  // Add event listener to each <td> element
  td[i].addEventListener("click", function (e) {
    const img = document.createElement("img");
    const xo = document.querySelector(".xo");
    // Set the src attribute of the image
    if (player1) {
      xo.src = "o.png";
      img.src = "x.png";
      player1 = false;
      // Append the image to the clicked <td> element
      this.appendChild(img);
      // Remove the click event listener to prevent further clicks
      this.removeEventListener("click", arguments.callee);
    } else {
      xo.src = "x.png";
      img.src = "o.png";
      player1 = true;
      // Append the image to the clicked <td> element
      this.appendChild(img);
      // Remove the click event listener to prevent further clicks
      this.removeEventListener("click", arguments.callee);
    }

    checkWinner();
  });
}

function checkLine(a, b, c) {
  if (
    a === null ||
    b === null ||
    c === null ||
    a === undefined ||
    b === undefined ||
    c === undefined ||
    a === "" ||
    b === "" ||
    c === ""
  ) {
    return;
  }
  return a !== "" && a === b && b === c;
}

function checkWinner() {
  let win = false;
  const result = document.querySelector(".result");
  const restart = document.querySelector(".restart");
  const table = document.querySelector('.table1');

  // Check vertically
  for (let col = 0; col < 50; col++) {
    for (let row = 0; row < 16; row++) {
      const img1 = td[row * 50 + col].querySelector("img");
      const img2 = td[(row + 1) * 50 + col].querySelector("img");
      const img3 = td[(row + 2) * 50 + col].querySelector("img");
      const img4 = td[(row + 3) * 50 + col].querySelector("img");

      if (
        img1 &&
        img2 &&
        img3 &&
        img4 &&
        img1.src === img2.src &&
        img2.src === img3.src &&
        img3.src === img4.src
      ) {
        win = true;
      }
    }
  }

  // Check horizontally
  for (let row = 0; row < 19; row++) {
    for (let col = 0; col < 47; col++) {
      const img1 = td[row * 50 + col].querySelector("img");
      const img2 = td[row * 50 + col + 1].querySelector("img");
      const img3 = td[row * 50 + col + 2].querySelector("img");
      const img4 = td[row * 50 + col + 3].querySelector("img");

      if (
        img1 &&
        img2 &&
        img3 &&
        img4 &&
        img1.src === img2.src &&
        img2.src === img3.src &&
        img3.src === img4.src
      ) {
        win = true;
      }
    }
  }

  // Check diagonally (left to right)
  for (let row = 0; row < 16; row++) {
    for (let col = 0; col < 47; col++) {
      const img1 = td[row * 50 + col].querySelector("img");
      const img2 = td[(row + 1) * 50 + col + 1].querySelector("img");
      const img3 = td[(row + 2) * 50 + col + 2].querySelector("img");
      const img4 = td[(row + 3) * 50 + col + 3].querySelector("img");

      if (
        img1 &&
        img2 &&
        img3 &&
        img4 &&
        img1.src === img2.src &&
        img2.src === img3.src &&
        img3.src === img4.src
      ) {
        win = true;
      }
    }
  }

  // Check diagonally (right to left)
  for (let row = 0; row < 16; row++) {
    for (let col = 3; col < 50; col++) {
      const img1 = td[row * 50 + col].querySelector("img");
      const img2 = td[(row + 1) * 50 + col - 1].querySelector("img");
      const img3 = td[(row + 2) * 50 + col - 2].querySelector("img");
      const img4 = td[(row + 3) * 50 + col - 3].querySelector("img");

      if (
        img1 &&
        img2 &&
        img3 &&
        img4 &&
        img1.src === img2.src &&
        img2.src === img3.src &&
        img3.src === img4.src
      ) {
        win = true;
      }
    }
  }

  if (win === true && player1) {
    result.textContent = `O is the winner! `;
    html = `<button onclick="window.location.reload()">Restart Game</button>`;
    restart.insertAdjacentHTML("afterend", html);
    table.style.pointerEvents = "none";
  } else if (win === true && !player1) {
    result.textContent = `X is the winner! `;
    html = `<button onclick="window.location.reload()">Restart Game</button>`;
    restart.insertAdjacentHTML("afterend", html);
    table.style.pointerEvents = "none";
  } else {
    win = false;
    return win;
  }
}
