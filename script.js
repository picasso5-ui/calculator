function add(val) {
   document.getElementById("output").value += val

}


function solve() {
    let x = document.getElementById("output").value;

  if (output.value.length==0) {
            return false
  }
        
    
    let y = eval(x)

    document.getElementById("output").value = y;
}

    function Clear() {
        document.getElementById("output").value = ""

}