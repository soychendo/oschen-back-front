/*-----------------------------------------------------------------------------------

    Name: Windows 10 | chendo version
    Theme URI: @chendito
    Description: Windows 10 - Clone 70% | - Portfolio - Chendo
    Author: @chendito - chendo : developer and web designer
    Author URI: http://chendo.io
    Github: https://github.com/chendito
    Youtube: https://youtube.com/chendito

-----------------------------------------------------------------------------------*/
import { resultsCalc, showResult, showOp } from '@scripts/selectors.js';
import { checkNum, showCalc, delBack, addDisplay } from '@scripts/functions.js';

// calculator function -> show -> custom
class Calculator {
    constructor() {
        this.calculator();
    }
    
    calculator() {
        document.addEventListener('click', e => {
            let target = e.target;
            if (target.tagName === "BUTTON") {
                let cutedValue = target.value.trim();
                switch (true){
                    case cutedValue == "equal":
                        checkNum(resultsCalc) ? showCalc(resultsCalc) : 'ERROR SINTAXIS'; // verifying and displaying results
                    break;
                    case cutedValue == "clear": // if clear
                        // clean everything
                        resultsCalc.value = ''; 
                        showResult.textContent = '';
                        showOp.textContent = '';
                    break;
                    case cutedValue == "del":
                        delBack(resultsCalc); // function -> delete back --> input hidden
                        showOp.textContent = showOp.textContent.slice(0,-1); // delete char --> showOp
                    break;
                    case (cutedValue === "pow" || cutedValue === "sq" || cutedValue === "sqrt"):
                    if (checkNum(resultsCalc)) { 
                        if (cutedValue === "pow") {
                            resultsCalc.value = eval(resultsCalc.value) * eval(resultsCalc.value) * eval(resultsCalc.value);
                            showOp.textContent = resultsCalc.value;
                        break;
                        } 
                        // <----------------> //
                        else if (cutedValue === "sq") {
                            resultsCalc.value = eval(resultsCalc.value) * eval(resultsCalc.value);
                            showOp.textContent = resultsCalc.value;
                        break;
                        } // default operation -->
                        resultsCalc.value = eval(Math[cutedValue](resultsCalc.value));
                        showOp.textContent = resultsCalc.value;
                    }	
                    break;
                    default: // show function
                        addDisplay(resultsCalc, target.value);	
                        break;
                }
            }
        });
    }
}

export default Calculator;