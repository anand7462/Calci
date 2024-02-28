let input = document.getElementById("input");
let button = document.querySelectorAll("button");

button.forEach( element => {
    element.addEventListener("click" , (e) => {
        let text = e.target.textContent;
        console.log(text);

        if(text === 'C'){
            input.innerText = " ";
        }
        else if( text === "<"){
            input.innerText = input.innerText.slice(0,-1);
        }
        else if( text === '='){
            input.innerText = eval(input.innerText);
        }
        else {
            input.innerText += text;
        }
        input.scrollLeft = input.scrollWidth;
    })
})