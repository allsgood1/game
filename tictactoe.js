let btn = document.querySelector('button');


let turns = 0
let cells = document.querySelectorAll(".row")

cells.forEach(function (cell) {
    cell.addEventListener("click", cellClicked)
}
)

function cellClicked(e) {
    if (turns % 2 == 0) {

        e.target.textContent = 'X'
        turns++
    }
    else {
        e.target.textContent = 'O'
        turns++
    }

    // find a check-when function
    //function that stops game after 9 turns
    //outside of everything else, write another function that uses the assigned values to each square and can tell if someone wins if the write combination of values is taken by X or O
}

btn.addEventListener("click", function () {
    alert("u suck");
});

