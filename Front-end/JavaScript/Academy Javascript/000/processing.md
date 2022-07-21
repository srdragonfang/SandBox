# Get index element in object by spread operator
```js
  const seatsIndex = [...selectedSeats].map((seat) => {
    [...seats].indexOf(seat);
    console.log([...seats].indexOf(seat));
    // đếm số seat được chọn - bắt đầu dếm từ 0
  });
 ```
 1. [...selectedSeats] = object
 2. typeof seats = object // Nodelist 
 2. [...seats] = object
 3. [...seats].indexOf(seat) = get index of seat selected in object [...seats]
 
 
hjkl = left down up right
i - edit
ctrl + c || ctrl + [ || esc = normal mode
w = move word by word
b = backward word by word

- `W` to move word by WORD
- `B` to move backwards WORD by WORD

- `e` to jump to the end of a word
- `ge` to jup to the end of the previous word

## Moving Horizontally Extremely

- `0`: Moves to the first character of a line
- `^`: Moves to the first non-blank character of a line
- `$`: Moves to the end of a line
- `g_`: Moves to the non-blank character at the end of a line
