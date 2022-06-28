// main functions

resultShown = false;

function show(element){
    if (resultShown){
        resultShown = false;
        delAll()
    }
    document.getElementById('result').innerHTML += element.textContent;
}

function delAll(){
    document.getElementById('result').innerHTML = '';
}

function del(){
    if (!resultShown){
        document.getElementById('result').innerHTML = document.getElementById('result').innerHTML.slice(0, -1);
    }
    else{
        document.getElementById('result').innerHTML = '';
    }
}

function result(){
    var input = document.getElementById('result').innerHTML;

    while (input.indexOf("x") != -1 || input.indexOf("%") != -1){
        input = input.replace("x", "*")
        input = input.replace("%", "/100")
    }    

    // console.log("#Debug: "+input)

    try {
        document.getElementById('result').innerHTML = eval(input);
    } 
    catch (SyntaxError) {
        document.getElementById('result').innerHTML = "Syntax Error";
    }
}