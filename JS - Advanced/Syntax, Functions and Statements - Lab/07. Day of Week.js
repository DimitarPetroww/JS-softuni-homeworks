function solve(n) {
    const daysOfWeek ={
        Monday : 1,
        Tuesday: 2,
        Wednesday : 3,
        Thursday : 4,
        Friday : 5,
        Saturday : 6,
        Sunday : 7
    }
    return daysOfWeek[n] ? daysOfWeek[n] : "error"
}