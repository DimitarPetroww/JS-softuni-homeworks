function foo(x) {
    let type = typeof(x)
    if(type === 'number'){
        console.log((Math.pow(x, 2) * Math.PI).toFixed(2));
    }else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(x)}.`);
    }
}

foo('asd5')