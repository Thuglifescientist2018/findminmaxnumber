const primaryBtn = document.querySelector('.btn-success');
const switchBtn = document.getElementById("switchBtn");


function initSetting() {
    let minOrMax = "max";
    let minorMaxDisplay = document.querySelector("#minormaxDisplay");
    let switchButton = switchBtn.addEventListener("click", uIControlFlow);
    function uIControlFlow(e) {
        if(minOrMax === "max") {    
            minOrMax = "min";
            minorMaxDisplay.innerHTML = minOrMax.toUpperCase();
            uIControl(minOrMax);
        }
        else if(minOrMax === "min") {
            minOrMax = "max";
            minorMaxDisplay.innerHTML = minOrMax.toUpperCase();
            uIControl(minOrMax);
        }
        e.preventDefault();
    }
    return minOrMax;

}
initSetting();



primaryBtn.addEventListener("click", function(e) {
    let minOrMax = initSetting();
    uIControl(minOrMax);
    e.preventDefault();
});



function uIControl(minOrMax) {
    console.log(minOrMax);
    const numbers = document.querySelector("#numbers").value;
    const numbersArray = numbers.split(',');
    if(minOrMax === "max") {
        
        const max_num = findMaxNum(numbersArray);
        const result = document.querySelector("#result");
        result.innerHTML = `The max number is:  <span class="bg-white p-2 border border-warning">${max_num}</span>`;
       
    }
    else if(minOrMax === "min") {
        
        const min_num = findMinNum(numbersArray);
        const result = document.querySelector("#result");
        result.innerHTML = `The min number is:  <span class="bg-white p-2 border border-warning">${min_num}</span>`;
        
    }
    
    
}


function findMaxNum(numbers) { 
    let maxNumber = numbers[0];
    for(let i=0;  i<numbers.length; i++) { 
        if(numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}
function findMinNum(numbers) { 
    let minNumber = numbers[0];
    for(let i=0;  i< numbers.length; i++) { 
        if(numbers[i] < minNumber) {
            minNumber = numbers[i];
        }
    }
    return minNumber;
}