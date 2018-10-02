export function fWithVar(start, end, delay) {
    var timer = delay;
    for(var i = start; end > start ? i < end : i > end; end > start ? i++ : i--){
        (function (i) {
            setTimeout(function () {
                console.log(i);
            }, timer)
        })(i);
        timer += delay;
    }
}