// main functions

resultShown = false;

function show(text){
    if (resultShown){
        resultShown = false;
        delAll()
    }
    document.getElementById('result').innerHTML += text;
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
    input = input.replace("x", "*")
    input = input.replace("%", "/100")
    try {
        document.getElementById('result').innerHTML = eval(input);
    } 
    catch (SyntaxError) {
        document.getElementById('result').innerHTML = "Syntax Error";
    }
}