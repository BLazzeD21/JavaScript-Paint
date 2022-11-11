const canvas = document.getElementById("paint");
const ctx = canvas.getContext("2d");
let myColor = "";

document.getElementById("color").oninput = function(){myColor = this.value; ctx.beginPath();}
let widthline = document.getElementById('lineWidth').value;

document.addEventListener('width', function () {
    let x = event.offsetX;
    let y = event.offsetY;
    ctx.strokeStyle = myColor;
    ctx.lineCap = "round";
    ctx.lineWidth = widthline;
    ctx.moveTo (x,y);
    canvas.onmousemove = function (event){
        let x = event.offsetX;
        let y = event.offsetY;
        ctx.lineTo (x,y);
        ctx.stroke();
    }
  })

canvas.onmousedown = function(event){
    let x = event.offsetX;
    let y = event.offsetY;
    ctx.strokeStyle = myColor;
    ctx.lineCap = "round";
    ctx.lineWidth = widthline;
    ctx.moveTo (x,y);
    canvas.onmousemove = function (event){
        let x = event.offsetX;
        let y = event.offsetY;
        ctx.lineTo (x,y);
        ctx.stroke();
};
canvas.onmouseup = function(){
    canvas.onmousemove = null;
};
}

