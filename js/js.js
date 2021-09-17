
//            all buttons

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

let calculationValue = "";

buttons.map( button => {
    button.addEventListener('click', (e) => {
        
        if (display.innerText == calculationValue) {
            display.innerText = "";
        }

        switch(e.target.innerText){
           case 'C':
                display.innerText = '';
            break;

            case '←':
                if(display.innerText){
                display.innerText = display.innerText.slice(0, -1);
                }
            break;
            
            case '×':
                 display.innerText += '*'
            break;

            case '÷':
                 display.innerText += '/'
            break;
                 
            case '=':
                
             try{
                calculationValue = eval(display.innerText);
                display.innerText = calculationValue;

                if (eval(display.innerText) == undefined) {
                    display.innerText = 'ايرور بطعم الليمون'
                    }
                
             }

             catch {
                display.innerText = 'ايرور سادة';
                
            }
            break;
            default:
                 display.innerText += e.target.innerText
            }
             
});
    
});

 
//            for dark mode
var icon = document.getElementById("icon");
        icon.onclick = function() {
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")) {
            icon.src = "imgs/223-2232869_png-file-svg-moon-icon-circle-png-transparent-removebg-preview.png";
        }
        else {
            icon.src = "imgs/sunny.png";
        }
};
