let square = {
    form: "square",
    color: "yellow",
    angles: 90,
    size: "big"
}
let littleSquare = {
    ...square,
    size: "tiny"
}
let circle = {
    ...square,
    form: "circle",
    color: "none",
    angles: 360,
    size: "big"
}
let anotherCircle = {
    ...circle,
    color: "green"
}
let triangle = {
    ...square,
    color: "none",
    countLines: 1,
    
}