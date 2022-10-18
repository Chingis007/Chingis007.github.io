function permission(){
    var value = document.getElementById("paswordInput").value;
    if (value == "1910"){
    document.getElementById("disBut").removeAttribute("disabled")
    }else{
        window.alert("Wrong!")
    }

}