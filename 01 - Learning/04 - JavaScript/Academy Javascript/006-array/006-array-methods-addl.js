// ANCHOR * thêm phần tử vào mảng
Array.prototype.push();
Array.prototype.unshift(); // → trả về mảng mới sau khi thêm phần từ đầu mảng

arr.push(); // → thêm phần tử vào Array

dogs.push('Chihuahua'); // add new element to the end
// thêm phần tử cuối mảng và trả lại mảng sau khi thêm (có thể thêm nhiều phần tử)
dogs[dogs.length] = 'Chihuahua'; // the same as push
// xóa phần tử đầu mảng và trả lại phần tử đã xóa, không có phần từ đầu mảng (mảng rỗng) thì trả về underfined
dogs.unshift('Chihuahua'); // add new element to the beginning
// thêm một hay nhiều phần tử vào đầu mảng và trả lại mảng sau khi thêm.