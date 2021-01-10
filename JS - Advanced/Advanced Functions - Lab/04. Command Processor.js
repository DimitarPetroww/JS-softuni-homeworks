function solution() {
    let text=""

    return {
        append: x => text+=x,
        removeStart: x => text=text.substr(x),
        removeEnd: x=> text=text.substr(0 , text.length-x),
        print:() => console.log(text)
    }
}