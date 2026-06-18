function appendDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay()
{
    let display = document.getElementById("display");
    display.value = "";
}

function Delete()
{
    let display = document.getElementById("display");
    display.value = display.value.slice(0,-1);
}

function handlePercent()
{
    let display = document.getElementById("display");
    let value = display.value;
    
    // Find the last operator (+, -, *, /)
    let operators = ['+', '-', '*', '/'];
    let lastOperatorIndex = -1;
    let lastOperator = '';
    
    for (let i = value.length - 1; i >= 0; i--) {
        if (operators.includes(value[i])) {
            lastOperatorIndex = i;
            lastOperator = value[i];
            break;
        }
    }
    
    if (lastOperatorIndex === -1) {
        // No operator found, just convert to percentage
        try {
            display.value = eval(value) / 100;
        } catch (error) {
            alert("Invalid Expression");
            console.log(error);
        }
        return;
    }
    
    let leftPart = value.substring(0, lastOperatorIndex);
    let rightPart = value.substring(lastOperatorIndex + 1);
    
    try {
        let baseValue = eval(leftPart);
        let percentageValue = eval(rightPart);
        let result = baseValue * percentageValue / 100;
        
        display.value = leftPart + lastOperator + result;
    } catch (error) {
        alert("Invalid Expression");
        console.log(error);
    }
}

function result()
{
    try {
    let value = document.getElementById("display").value;
    let result = eval(value);

    document.getElementById("display").value = result;
  } catch (error) {
    alert("Invalid Expression");
    console.log(error);
  }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter")     result();
    if (e.key === "Backspace") Delete();
    if (e.key === "Escape")    clearDisplay();
    if (e.key === "%")         handlePercent();

    if (e.key === "1") appendDisplay("1");
    if (e.key === "2") appendDisplay("2");
    if (e.key === "3") appendDisplay("3");
    if (e.key === "4") appendDisplay("4");
    if (e.key === "5") appendDisplay("5");
    if (e.key === "6") appendDisplay("6");
    if (e.key === "7") appendDisplay("7");
    if (e.key === "8") appendDisplay("8");
    if (e.key === "9") appendDisplay("9");
    if (e.key === "0") appendDisplay("0");

    if (e.key === "+") appendDisplay("+");
    if (e.key === "-") appendDisplay("-");
    if (e.key === "*") appendDisplay("*");
    if (e.key === "/") appendDisplay("/");
    if (e.key === ".") appendDisplay(".");
});

document.addEventListener("keydown", function(e) {
    let map = {
        "Enter"    : `button[onclick="result()"]`,
        "Backspace": `button[onclick="Delete()"]`,
        "Escape"   : `button[onclick="clearDisplay()"]`,
        "1"        : `button[onclick="appendDisplay('1')"]`,
        "2"        : `button[onclick="appendDisplay('2')"]`,
        "3"        : `button[onclick="appendDisplay('3')"]`,
        "4"        : `button[onclick="appendDisplay('4')"]`,
        "5"        : `button[onclick="appendDisplay('5')"]`,
        "6"        : `button[onclick="appendDisplay('6')"]`,
        "7"        : `button[onclick="appendDisplay('7')"]`,
        "8"        : `button[onclick="appendDisplay('8')"]`,
        "9"        : `button[onclick="appendDisplay('9')"]`,
        "0"        : `button[onclick="appendDisplay('0')"]`,
        "+"        : `button[onclick="appendDisplay('+')"]`,
        "-"        : `button[onclick="appendDisplay('-')"]`,
        "*"        : `button[onclick="appendDisplay('*')"]`,
        "/"        : `button[onclick="appendDisplay('/')"]`,
        "."        : `button[onclick="appendDisplay('.')"]`,
    };

    let btn = document.querySelector(map[e.key]);
    if (btn) btn.classList.add("bg-[rgb(121,121,165)]");
});

document.addEventListener("keyup", function(e) {
    let map = {
        "Enter"    : `button[onclick="result()"]`,
        "Backspace": `button[onclick="Delete()"]`,
        "Escape"   : `button[onclick="clearDisplay()"]`,
        "1"        : `button[onclick="appendDisplay('1')"]`,
        "2"        : `button[onclick="appendDisplay('2')"]`,
        "3"        : `button[onclick="appendDisplay('3')"]`,
        "4"        : `button[onclick="appendDisplay('4')"]`,
        "5"        : `button[onclick="appendDisplay('5')"]`,
        "6"        : `button[onclick="appendDisplay('6')"]`,
        "7"        : `button[onclick="appendDisplay('7')"]`,
        "8"        : `button[onclick="appendDisplay('8')"]`,
        "9"        : `button[onclick="appendDisplay('9')"]`,
        "0"        : `button[onclick="appendDisplay('0')"]`,
        "+"        : `button[onclick="appendDisplay('+')"]`,
        "-"        : `button[onclick="appendDisplay('-')"]`,
        "*"        : `button[onclick="appendDisplay('*')"]`,
        "/"        : `button[onclick="appendDisplay('/')"]`,
        "."        : `button[onclick="appendDisplay('.')"]`,
    };

    let btn = document.querySelector(map[e.key]);
    if (btn) btn.classList.remove("bg-[rgb(121,121,165)]");
});