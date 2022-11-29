
function validate(callback){
    const user = document.getElementById("input").value;
    const pass = document.getElementById("input2").value; 
    if((user == "admin") && (pass == "12345"))
        {callback();
    }
    else{
        alert("Wrong Details")
        return false;
    }
}
function redirect(){
    return true
}