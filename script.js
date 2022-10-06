const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculatorBody')
const display = calculator.querySelector('.calculator__display')
keys.addEventListener('click', event =>{
    if(!event.target.closest('button')) return
    
    const key = event.target
    // console.log(key)
    const keyValue = key.textContent
    // console.log(keyValue)
    const displayValue = display.textContent
    // console.log(displayValue)
    const type = key.dataset.type
    const previousKeyType = calculator.dataset.previousKeyType

    if (type === 'number'){
        if(displayValue === '0'){
            display.textContent = keyValue
        }
        else if(previousKeyType==="operator"){
            display.textContent = keyValue

        }
        else{
            display.textContent = displayValue + keyValue
        }


    }
    if(type === 'operator'){
        // console.log(key)
        calculator.dataset.firstNumber = displayValue
        // calculator.dataset.operator = type
        calculator.dataset.operator = key.dataset.key
    }
    
    if(type === 'equal'){
        const firstNumber = parseInt( calculator.dataset.firstNumber)
        const operator = calculator.dataset.operator
        const secondNumber = parseInt( displayValue)
        
        // console.log(firstNumber,operator,secondNumber)
        let result = ''
        if(operator==='plus') result = firstNumber + secondNumber
        if(operator==='minus') result = firstNumber - secondNumber
        if(operator==='multiply') result = firstNumber * secondNumber
        if(operator==='divide') result = firstNumber / secondNumber
        display.textContent = result
        
    }
    
    calculator.dataset.previousKeyType= type
})
