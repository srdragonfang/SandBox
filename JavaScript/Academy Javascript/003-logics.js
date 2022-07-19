// ANCHOR If - Else⇵
if ((age >= 14) && (age < 19)) {        // logical condition
statusAge = "Eligible.";               // executed if condition is true
} else {                                // else block is optional
statusAge = "Not eligible.";           // executed if condition is false
}

// ANCHOR Switch Statement
switch (new Date().getDay()) {      // input is current day
case 6:                         // if (day == 6)
	text = "Saturday";          
	break;
case 0:                         // if (day == 0)
	text = "Sunday";
	break;
default:                        // else...
	text = "Whatever";
} 
// ! Trong switch việc sử dụng toán tử === phán đoán bình đẳng nội bộ
// NOTE *** Không sử dụng các điều kiện phủ định nó sẽ gây nhầm lẫn rất nhiều trong khi triển khai code. 
