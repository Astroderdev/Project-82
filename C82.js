var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_x, last_position_y;

    color="black";
    width_of_line=1;
    canvas.addEventListener("mousedown", mymouse_down);
    function mymouse_down(e){
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width").value;
        radius = document.getElementById("Radius").value;
       mouseEvent = "mousedown";
    }
    canvas.addEventListener("mousemove", mymouse_move);
    function mymouse_move(e){
        current_mouse_x = e.clientX - canvas.offsetLeft;
        current_mouse_y = e.clientY - canvas.offsetTop;

        if(mouseEvent == "mousedown"){
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;
            ctx.arc(current_mouse_x, current_mouse_y, radius, 0, 2*Math.PI);
            ctx.stroke();        
        }

        last_position_x = current_mouse_x;
        last_position_y = current_mouse_y;
    }
    canvas.addEventListener("mouseup", mymouse_up);
    function mymouse_up(e){
       mouseEvent = "mouseup";
    }
    canvas.addEventListener("mouseleave", mymouse_leave);
    function mymouse_leave(e){
       mouseEvent = "mouseleave";
    }
    function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
