const display = document.getElementById("display")

function appendToDisplay(keys){
    switch(keys){
        case '%':
            calculatePercentage()
            break
        default:
        display.value += keys
                        
    }
}

function emoji(emo){
    display.value += emo
}

function clearDisplay(){
    display.value = ""
}

function calculateValue(){


    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = "error🐛"
    }
}


function calculatePercentage(){
    if(display.value){
        display.value = String(parseFloat(display.value)/100)
    }
}



