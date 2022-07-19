// NOTE URL: https://anonystick.com/blog-developer/10-thu-thuat-xu-ly-chuoi-tuyet-voi-trong-javascript-2021010593482303

// ANCHOR 1. How to Copy a String Multiple Times - Cách sao chép một chuỗi nhiều lần

    strgs.repeat(numberRepeat)
    // Concatenate "ha" 3 times.
    const laughing = "ha".repeat(3);
    console.log(laughing); // "hahaha"

    // Concatenate "1" 8 times.
    const eightBits = "1".repeat(8);
    console.log(eightBits ); // "11111111"


// ANCHOR 2 - convert string to 000001 or 1******

    // Làm thế nào để chèn một chuỗi thành một độ dài cụ thể cho trước
    // Add "0" to the beginning until the string has a length of 8.
    const eightBits2 = "001".padStart(8, "0");
    console.log(eightBits2); // "00000001"
    
    // Add "*" to the end until the string has a *length* of 5.
    //  const anonymizedCode = "34".padEnd(lenthStrg, "*");
    const anonymizedCode = "34".padEnd(5, "*");
    console.log(anonymizedCode); // "34***"

// ANCHOR 3. Cách tách một chuỗi thành một mảng ký tự

const word = 'apple'
const characters = [...word]
console.log(characters) // ["a", "p", "p", "l", "e"]

// ANCHOR 4. Cách đếm các ký tự trong một chuỗi

const word1 = "𩸽"
const characters1 = [...word1]
console.log(characters1.length) // 1

// ANCHOR 5. Cách đảo ngược các ký tự trong một chuỗi

// Có thể dễ dàng đảo ngược các ký tự trong một chuỗi. Chỉ cần kết hợp toán tử spread ( ...), Array.reverse() và Array.join()

const word3 = "apple"
const reversedWord = [...word3].reverse().join("")
console.log(reversedWord) // "elppa"

// ANCHOR 6. Cách viết hoa chữ cái đầu tiên trong chuỗi


// ANCHOR 7. Cách tách một chuỗi trên nhiều dấu phân cách


// ANCHOR 8. Cách kiểm tra xem một chuỗi có chứa một chuỗi cụ thể hay không


// ANCHOR 9. Cách kiểm tra xem một chuỗi bắt đầu hay kết thúc bằng một chuỗi cụ thể


// ANCHOR 10. Cách thay thế tất cả các lần xuất hiện của chuỗi

