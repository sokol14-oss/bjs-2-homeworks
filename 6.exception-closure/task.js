function parseCount(value) {
    const number = Number.parseInt(value);
    if (isNaN(number)) {
        throw new Error("Невалидное значение");;
    }
    return number
}
function validateCount(value) {
    try {
        let result = parseCount(value);
        return result;
    } catch (error) {
        error;
        return error
    }

}

class Tirangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (b + c) < a || (c + a) < b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter() {
        const perimeter = this.a + this.b + this.c;
        return perimeter;
    }
    getArea() {
        const p = perimeter / 2;
        const s = Math.sqrt(p(p - this.a)(p - this.b)(p - this.c));
        return Number(s.toFixed(2));
    }
}
function getTriangle(a, b, c) {
    try {
        return new Tirangle(a, b, c);
    } catch (error) {
        error
        return {
            Tirangle.getPerimeter: "Ошибка! Треугольник не существует",
            Tirangle.getArea: "Ошибка! Треугольник не существует"
    };
    }
}