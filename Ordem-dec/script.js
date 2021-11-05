function calcular(){
    let num = Number(document.getElementById("num").value)
    let res = document.getElementById("res")
    let res2 = ""

    for(cont=num;cont>0;cont--){
        res2 += cont + ", "
        res.innerHTML = res2
    }
}
document.getElementById("calcular").addEventListener("click", calcular)