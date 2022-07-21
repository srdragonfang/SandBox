// ### **Operators**
a = b + c - d;      // addition, substraction
a = b * (c / d);    // multiplication, division
x =100 %48;       // modulo. 100 / 48 remainder = 4
a++; b--;           // postfix increment and decrement

// NOTE *** number
// NOTE *** number *** Math
Math.PI
var pi =Math.PI;       // 3.141592653589793
// Math.abs() = absolute - giá trị tuyệt đối - biến số âm thành số dương.
// // ### **Constants like Math.PI:**
// E, PI, SQRT2, SQRT1_2, LN2, LN10, LOG2E, Log10E
// ----------------------------------------------------------------
Math.abs()
// Math.abs(-3.14);        // = 3.14 - absolute, positive value
// Math.ceil() - làm tròn trên > 4.1 → 5
// ----------------------------------------------------------------
Math.ceil()
// Math.floor() → làm tròn dưới > 4.9999 → 4
// Math.ceil(3.14);        // = 4 - rounded up
// ----------------------------------------------------------------
Math.floor()
// Math.floor(3.99);       // = 3 - rounded down
// Math.floor(Math.random() *5) +1;  // random integer, from 1 to 5
// ----------------------------------------------------------------
Math.random();          // random number between 0 and 1
// Math.random() - dãy số thập phân nhỏ hơn 1
// ----------------------------------------------------------------
Math.round()
// Math.round(4.4);        // = 4 - rounded
// Math.round(4.5);        // = 5
// ----------------------------------------------------------------
Math.sqrt()
// Math.sqrt(49);          // = 7 - square root
// ----------------------------------------------------------------
// Math.min() - trả về số nhỏ nhất
Math.min()
// Math.min(0,3, -2,2);  // = -2 - the lowest value
// ----------------------------------------------------------------
Math.max()
// Math.max() - trả về số lớn nhất
// Math.max(0,3, -2,2);  // = 3 - the highest value
// ----------------------------------------------------------------
Math.pow(2,8);          // = 256 - 2 to the power of 8
// ----------------------------------------------------------------
Math.sin(0);            // = 0 - sine
// ----------------------------------------------------------------
Math.cos(Math.PI);      // OTHERS: tan,atan,asin,acos,
// ----------------------------------------------------------------
Math.log(1);            // = 0 natural logarithm
// ----------------------------------------------------------------
Math.exp(1);            // = 2.7182pow(E,x)


// NOTE *** Arithmetic - Môn số học

// a * (b + c)         // grouping
// person.age          // member
// person[age]         // member
// !(a == b)           // logical not
// a != b              // not equal
// typeof a            // type (number, object, function...)
// x <<2  x >>3      // minary shifting
// a = b               // assignment
// a == b              // equals
// a != b              // unequal
// a === b             // strict equal
// a !== b             // strict unequal
// a < b   a > b       // less and greater than
// a <= b  a >= b      // less or equal, greater or eq
// a += b              // a = a + b (works with - * %...)
// a && b              // logical and
// a || b              // logical or