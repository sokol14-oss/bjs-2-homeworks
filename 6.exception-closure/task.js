function parseCount(value) {
    Number.parseInt(value);
    if (isNaN(value)) {
        const error = new Error("Невалидное значение");
        throw error;
    }
    return value;
}
function validateCount(value) {
    let result = parseCount(value);
    try {
        parseCount(value);
    } catch (error) {
        error;
        return error
    }
    return result

}

class Tirangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    if((a + b) < c || (b + c) < a || (c + a) < b) {
    const error = new Error("Треугольник с такими сторонами не существует");
    throw error;
}
getPerimeter: function() {
    return a + b + c;
}
getArea: function() {
    const p = 1 / 2(a + b + c);
    const s = Math.sqrt(p(p−a)(p−b)(p−c));
    s = s.toFixed(3);
    s = Number(s);
    return s;
}
}
function getTriangle(a, b, c) {
    try {
        const obj = new Tirangle(a, b, c);
    } catch (error) {
        error;
        return {
            Tirangle.getPerimeter: error,
            Tirangle.getArea: error
        };
    }
}