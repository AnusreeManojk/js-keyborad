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
    delay:"Delay:"

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

const  delay =document.querySelector(".delay-input")
const delaySpan=document.createElement("span")
delaySpan.innerText=Obj.delay
delay.appendChild(delaySpan)
const delayInput=document.createElement("input")
delayInput.type="text"
delayInput.placeholder="Enter the time in seconds"
delay.appendChild(delayInput)
 

const circle = document.createElement("div");
circle.className = "circle";
container.appendChild(circle);

const startClick = document.querySelector(".start");
startClick.addEventListener("click", generateCirclePyramid);

function generateCirclePyramid() {
    const rows = parseInt(input.value);

    let output = '';

    for (let i = 0; i < rows; i++) {
        let spaces = '&nbsp;'.repeat(rows - i - 1);

        let circles = '<span class="circle-item"></span>'.repeat(i * 2 + 1);

        // Combine spaces and circles
        output += spaces + circles + '<br>';
    }

    document.querySelector('.circle').innerHTML = output;
}
