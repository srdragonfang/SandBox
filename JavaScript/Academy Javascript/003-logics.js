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