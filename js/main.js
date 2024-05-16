/*
document.addEventListener("DOMContentLoaded",function(){

document.querySelector("#red").onclick = function () {
document.querySelector("#example").style.color = "red";
    
}

document.querySelector("#blue").onclick = function () {
    document.querySelector("#example").style.color = "blue";
        
    }

    document.querySelector("#green").onclick = function () {
        document.querySelector("#example").style.color = "green";
            
        }

});*/

// start head section

document.addEventListener("DOMContentLoaded", function(){

    document.querySelectorAll("button").forEach(function(button){
        button.onclick = function(){
            document.querySelector("#example").style.color = button.dataset.color;
        }
    })
});
// End head section




// Start main section

document.addEventListener("DOMContentLoaded",function(){
    
    document.querySelector("form").onsubmit = function(){

    var value = document.querySelector("#creative").value;

    var result = document.querySelector("#output");

    if(value == ""){
        return false;
    }else{

    var MyLi = document.createElement("li");

    MyLi.innerHTML = value;

    result.appendChild(MyLi);
    document.querySelector("#creative").value = "";
    return false;

    }
}
});

// End main section