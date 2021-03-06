solution = {
    add: ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2],
    multiply: ((vec, scalar) => vec.map(x => x * scalar)),
    length: (([x, y]) => Math.sqrt((x ** 2) + (y ** 2))),
    dot: (([x1, y1], [x2, y2]) => x1 * x2 + y1 * y2),
    cross: (([x1, y1], [x2, y2]) => x1 * y2 - y1 * x2)
}
