

document.addEventListener('DOMContentLoaded', () => {

    const emailField=document.querySelector('.textarea')
    const keys = document.querySelectoAll('.key'); // Select all elements with the class 'key'

    const mouseClickBtn = document.querySelector('.click'); // Select the button

    function iterateKeys() {
        let delay = 0;

        keys.forEach((key, index) => {
            setTimeout(() => {
                key.style.backgroundColor = 'lightblue'; 
                // console.log(key.textContent)
            }, delay);
            delay += 500; 
        });
    }

    mouseClickBtn.addEventListener('dblclick', iterateKeys);
    
    keys.forEach((key)=>{
        key.addEventListener("click",()=>{
            emailField.value=key.textcontent
        })
    })
});
