
function dis(val){
document.getElementById("demo").value+=val;
}
function fnadd()
{
   let x = document.getElementById('demo').value;
let y = eval(x);
document.getElementById("demo").value =y;

}

function fnClr()
{
    document.getElementById('demo').value='';
}
