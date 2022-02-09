// html links
const display = document.querySelector('.inputBar');
const buttons = document.querySelectorAll('#btnPanel button');
const dot = document.getElementById('dot');

// float numbers, and current operator to hold 
// the current input values and selected operator..
let displayNum = [];
let displayNumTest = 0;
let floatNum1;
let floatNum2;
let currentOp = null;
let stepComplete = false;
let dotIsThere = false;

//listens for all the buttons on the calculator.
buttons.forEach(button =>{
    button.addEventListener('keydown', (e) =>{
             //if button press = a number and the current display
       // length is less then 14, the max number of digits
       // that will fit in the dispay, add new numbers.
        
       if (e.key === '.' && dotIsThere === false){
            
        dotNum = Number(displayNum.join('')).toFixed(1);
        
        display.textContent = dotNum;
        dotIsThere = true;
        dot.value = '00';

        

    }else if(dotIsThere === true && stepComplete === false){
        
        dotNum = Number(dotNum) + Number(e.key) / 10;
        displayNum = [];
        displayNum.push(dotNum);
        display.textContent = displayNum.join('');
        stepComplete = true;
        //console.log(dotNum);
        //console.log(displayNum);

    }
   
    else if(displayNum.length < 14 && e.key == '1' ||
    displayNum.length < 14 && e.key == '2' ||
    displayNum.length < 14 && e.key == '3' ||
    displayNum.length < 14 && e.key == '4' ||
    displayNum.length < 14 && e.key == '5' ||
    displayNum.length < 14 && e.key == '6' ||
    displayNum.length < 14 && e.key == '7' ||
    displayNum.length < 14 && e.key == '8' ||
    displayNum.length < 14 && e.key == '9' ||
    displayNum.length < 14 && e.key == '0'){
    
    displayNum.push(e.key);
    display.textContent = displayNum.join('');
    

    //console.log(displayNum);
    
    }
    // clears the display and resets the float array
    // to zero.
    else if (e.key === 'Backspace'){
        while(displayNum.length > 0){
            displayNum.pop();
        }
        display.textContent = 0;
        floatNum1 = null;
        floatNum2 = null;
        currentOp = null;
        dotIsThere = false;
        stepComplete = false;
        dot.value = '.';
      //  console.log(floatNum1, floatNum2, displayNum);
        
    }
    //call the operate function and returns the 
    // value of float nums after operation.

    else if(e.key === '+' ||
            e.key === '-' ||
            e.key === '/' ||
            e.key === '*'){
        
        floatNum2 = Number(displayNum.join(''));       
        opertate(floatNum1, floatNum2, currentOp)
        currentOp = e.key;
        console.log(currentOp);
       

    }else if (e.key === '='){
        // if operation is equal return the value
        // of the float number after operation
        // resets the operator to null.
        
        floatNum2 = Number(displayNum.join(''));       
        opertate(floatNum1, floatNum2, currentOp)
        currentOp = null;

    }     
    })
})


buttons.forEach(button => {
    button.addEventListener('click', () => {
       
       //if button press = a number and the current display
       // length is less then 14, the max number of digits
       // that will fit in the dispay, add new numbers.
        
       if (button.value === '.' && dotIsThere === false){
            
            dotNum = parseInt(displayNum.join('')).toFixed(1);
           // console.log(dotNum);
            display.textContent = dotNum;
            dotIsThere = true;
            dot.value = '00';

            

        }else if(dotIsThere === true && stepComplete === false){
            
            dotNum = Number(dotNum) + Number(button.value) / 10;
            displayNum = [];
            displayNum.push(dotNum);
            display.textContent = displayNum.join('');
            stepComplete = true;
            //console.log(dotNum);
            //console.log(displayNum);

        }
       
        else if(displayNum.length < 14 && button.value != '00'){
        
        displayNum.push(button.value);
        display.textContent = displayNum.join('');
        

        //console.log(displayNum);
        
        }
        // clears the display and resets the float array
        // to zero.
        else if (button.id === 'clear'){
            while(displayNum.length > 0){
                displayNum.pop();
            }
            display.textContent = 0;
            floatNum1 = null;
            floatNum2 = null;
            currentOp = null;
            dotIsThere = false;
            stepComplete = false;
            dot.value = '.';
          //  console.log(floatNum1, floatNum2, displayNum);
            
        }
        //call the operate function and returns the 
        // value of float nums after operation.

        else if(button.id === 'add' ||
                button.id === 'sub' ||
                button.id === 'div' ||
                button.id === 'mul'){
            
            floatNum2 = Number(displayNum.join(''));       
            opertate(floatNum1, floatNum2, currentOp)
            currentOp = button.id;
           

        }else{
            // if operation is equal return the value
            // of the float number after operation
            // resets the operator to null.
            
            floatNum2 = Number(displayNum.join(''));       
            opertate(floatNum1, floatNum2, currentOp)
            currentOp = null;

        }     
    
    })

})

// operator function takes in two input values and 
// return the value after operating on with the 
// selcted operator.

function opertate(n1, n2, op){
    
if(op == '+'){op = 'add';}
else if(op == '-'){op = 'sub';}
else if(op == '/'){op = 'div';}
else if(op == '*'){op = 'mul'};

let num


if(op === null && floatNum1 == null){num = n2;}
else if(op === null){ num = n1;}
else if(op === 'add'){add(n1, n2);}
else if(op === 'sub'){sub(n1, n2);}
else if(op === 'div'){div(n1, n2);}

else if(op === 'mul'){mul(n1, n2);}



let numArray = String(num).split('').map((num)=>{
    return num;
})
Number(numArray);
console.log(numArray);

while(numArray.length > 14){
    numArray.pop();
}

num = Number(numArray.join(''));
if(num.toFixed(1) != num){
    floatNum1 = num.toFixed(1); 
}else{ 
    floatNum1 = num;
}
 
display.textContent = floatNum1;
floatNum2;
while(displayNum.length > 0){
    displayNum.pop();
}

dotIsThere = false;
stepComplete = false;
dot.value = '.';

if(num === 0){

    display.textContent = 0;
    floatNum1 = null;
    floatNum2 = null;
    currentOp = null;

}


    function add(n1, n2) {
        num = n1 + n2;
        return num;
    }
    function sub(n1, n2) {
        num = n1 - n2;
        return num;
    }
    function div(n1, n2) {
        num = n1 / n2;
        return num;
    }
    function mul(n1, n2) {
        num = n1 * n2;
        return num;
    }

};


