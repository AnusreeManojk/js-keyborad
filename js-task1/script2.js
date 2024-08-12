// function generateStarPascalTriangle() {
//     const input = document.getElementById('rowsInput');
//     const rows = parseInt(input.value, 10);

//     if (isNaN(rows) || rows <= 0) {
//         alert("Please enter a valid number of rows.");
//         return;
//     }

//     const triangle = [];

//     for (let i = 0; i < rows; i++) {
//         triangle[i] = [];
//         triangle[i][0] = 1;

//         for (let j = 1; j < i; j++) {
//             triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
//         }

//         triangle[i][i] = 1;
//     }

//     displayStarPascalTriangle(triangle);
// }

// function displayStarPascalTriangle(triangle) {
//     const output = document.getElementById('output');
//     output.textContent = ''; // Clear previous output

//     triangle.forEach((row, rowIndex) => {
//         let line = '';

//         // Add leading spaces for alignment
//         for (let s = 0; s < triangle.length - rowIndex - 1; s++) {
//             line += ' ';
//         }

//         row.forEach(value => {
//             line += '* '.repeat(value);
//         });

//         output.textContent += line.trim() + '\n'; // Trim and add new line
//     });
// }


// function generateStarPascalTriangle() {
//     const rows = parseInt(document.getElementById('rowsInput').value);

//     if (isNaN(rows) || rows <= 0) {
//         alert("Please enter a valid number of rows.");
//         return;
//     }

// //     let output = '';

// //     for (let i = 0; i < rows; i++) {
// //         // Add leading spaces for alignment
// //         output += ' '.repeat(rows - i - 1);

// //         // Add stars for the current row
// //         output += '* '.repeat(i + 1).trim() + '\n';
// //     }

// //     document.getElementById('output').textContent = output;
// // }




//           *
//         * * *
//       * * * * *
//     * * * * * * *
//   * * * * * * * * *


const Obj = {
    row: "Enter the rows:",
    buttons: [
        {
            btnCont: "Start",
            id: "start"
        },
        {
            btnCont: "Stop",
            id: "stop"
        },
        {
            btnCont: "Delay",
            id: "delay"
        }
    ]
};

const container = document.querySelector(".container");
const rowInput = document.querySelector(".row-input");
const rowSpan = document.createElement("span");
rowInput.appendChild(rowSpan);
rowSpan.innerHTML = Obj.row;

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Number of rows";
rowInput.appendChild(input);

const buttons = document.querySelector(".buttons");
Obj.buttons.forEach(item => {
    const button = document.createElement("button");
    button.className = item.id;
    button.innerHTML = item.btnCont;
    buttons.appendChild(button);
});

const startClick = document.querySelector(".start");
startClick.addEventListener("click", generateStarPascalTriangle);


function generateStarPascalTriangle() {
    const rows = input.value;


    let output = '';

    for (let i = 0; i < rows; i++) {

        let circles = '<span class="circle-item"></span>'.repeat(i * 2 + 1);
        for(let j=0; j<i, j++;){

        circles +='<span class="circle-item"></span>'
        
        }
    }

    document.querySelector('.output').innerHTML = output.replace(/\n/g, '<br>'); 
}



const Obj = {
    row: "Enter the rows:",
    buttons: [
        {
            btnCont: "Start",
            id: "start"
        },
        {
            btnCont: "Stop",
            id: "stop"
        }
    ],
    delay: "Delay:"
};

const container = document.querySelector(".container");
const rowInput = document.querySelector(".row-input");
const rowSpan = document.createElement("span");
rowInput.appendChild(rowSpan);
rowSpan.innerHTML = Obj.row;

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Number of rows";
rowInput.appendChild(input);

const buttons = document.querySelector(".buttons");
Obj.buttons.forEach(item => {
    const button = document.createElement("button");
    button.className = item.id;
    button.innerHTML = item.btnCont;
    buttons.appendChild(button);
});

const delay = document.querySelector(".delay-input");
const delaySpan = document.createElement("span");
delaySpan.innerText = Obj.delay;
delay.appendChild(delaySpan);
const delayInput = document.createElement("input");
delayInput.type = "text";
delayInput.placeholder = "Enter the time in seconds";
delay.appendChild(delayInput);

const circle = document.createElement("div");
circle.className = "circle";
container.appendChild(circle);

const startClick = document.querySelector(".start");
startClick.addEventListener("click", generateCirclePyramid);


const stopClick=document.querySelector(".stop")
stopClick.addEventListener("click",()=>{

})


function generateCirclePyramid() {
    const rows = input.value;
    const delayTime = delayInput.value * 100; 
   
    let output = '';

    for (let i = 0; i < rows; i++) {
        // let spaces = ' '.repeat(rows - i - 1);

        let circles = '';
        for (let j = 0; j < (i * 2 + 1); j++) {
            circles += '<span class="circle-item"></span>';
        }

        output += `<div class="row">${circles}</div><br>`;
    }

    document.querySelector('.circle').innerHTML = output;

    const rowsEl = document.querySelectorAll('.row');
    rowsEl.forEach((rowElement, Index) => {
        setTimeout(() => {
            rowsEl.forEach((el, rowIndex) => {
                el.querySelectorAll('.circle-item').forEach(circle => {
                    circle.style.backgroundColor = Index === rowIndex ? 'blue' : 'transparent';
                });
            });
        }, delayTime * Index);
    });
}










