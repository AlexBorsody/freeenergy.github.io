function touchHandler(event)
{
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
    
    switch(event.type)
    {
        case "touchstart": type = "mousedown"; break;
        case "touchmove":  type="mousemove"; break;        
        case "touchend":   type="mouseup"; break;
        default: return;
    }
    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1,
                              first.screenX, first.screenY,
                              first.clientX, first.clientY, false,
                              false, false, false, 0/*left*/, null);
    
    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function initTouch()
{
   document.getElementById("drag_drop_div").addEventListener("touchstart", touchHandler, true);
   document.getElementById("drag_drop_div").addEventListener("touchmove", touchHandler, true);
   document.getElementById("drag_drop_div").addEventListener("touchend", touchHandler, true);
   document.getElementById("drag_drop_div").addEventListener("touchcancel", touchHandler, true);   
}
$(document).ready(function (){initTouch();});
