let a = 0;
alert( Boolean(a) );
let b = "0";
alert( Boolean(b) );

alert(a == b);
//5 > 4 → true
//"apple" > "pineapple" → false
//"2" > "12" → true
//undefined == null → true
//undefined === null → false
//null == "\n0\n" → false
//null === +"\n0\n" → false