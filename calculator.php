<!------------------------------------------------------------------------------------

    Name: Windows 10 | chendo version
    Theme URI: @chendito
    Description: Windows 10 - Clone 70% | - Portfolio - Chendo
    Author: @chendito - chendo : developer and web designer
    Author URI: http://chendo.io
    Github: https://github.com/chendito
    Youtube: https://youtube.com/chendito

------------------------------------------------------------------------------------->
<div id="chendo_calc" data-id="2" class="chendo_calc"> <!-- https://github.com/chendito/chendoCalc -->
    <div class="calculators">
        <div class="head"></div>
        <h1>Calculator</h1>
        <div class="mmc">
            <img class="minimize" src="src/img/pro/minimize.svg" alt="minimize">
            <img class="maximize" src="src/img/pro/maximize.svg" alt="maximize">
            <img class="close" src="src/img/pro/close.svg" alt="close">
        </div>
        <div class="menu_calc">
            <img src="src/img/ism/start.svg" alt="Menu items">
            <span>Standard</span>
        </div>
        <div class="showDisplay">
            <div id="texto"></div>
            <input readonly autocomplete="off" id="results_calc" type="hidden" value="" size="28" maxlength="25">
            <span class="show-result">0</span> 
        </div>
        <div class="maths">
            <div class="m">
                <button class="btn-math disable">Mc</button>
                <button class="btn-math disable">Mr</button>
                <button class="btn-math disable">M+</button>
                <button class="btn-math disable btn-action">M-</button>
                <button class="btn-math disable btn-action">Ms</button>
                <button class="btn-math disable">M</button>
            </div>
            <div class="operators">
                <button class="btn-math" value="%">%</button>
                <button class="btn-math" value="clear">Ce</button>
                <button class="btn-math" value="clear">C</button>
                <button class="btn-math btn-action del" value="del">←</button>
                <button class="btn-math btn-action" value="clear">&frac12;</button>
                <button class="btn-math" value="sq">x²</button>
                <button class="btn-math" value="sqrt">√</button>
                <button class="btn-math" value="/">/</button>
                <button class="btn-math oscure" value="7">7</button>
                <button class="btn-math oscure" value="8">8</button>
                <button class="btn-math oscure" value="9">9</button>
                <button class="btn-math" value="*">X</button>
                <button class="btn-math oscure" value="4">4</button>
                <button class="btn-math oscure" value="5">5</button>
                <button class="btn-math oscure" value="6">6</button>
                <button class="btn-math" value="-">-</button>
                <button class="btn-math oscure" value="1">1</button>
                <button class="btn-math oscure" value="2">2</button>
                <button class="btn-math oscure" value="3">3</button>
                <button class="btn-math" value="+">+</button>
                <button class="btn-math oscure">±</button>
                <button class="btn-math oscure" value="0">0</button>
                <button class="btn-math oscure">.</button>
                <button class="btn-math equal" value="equal">=</button>
            </div>
        </div>
        
    </div>
</div>