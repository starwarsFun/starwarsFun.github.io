export function fWithLet(start, end, delay) {
    let amount = 0;
    for(let i = start; end > start ? i < end : i > end; end > start ? i++ : i--){
        setTimeout( () => {
            console.log(i);
        }, delay * ++amount)
    }
}