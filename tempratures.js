/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const n = parseInt(readline()); // the number of temperatures to analyse
 var inputs = readline().split(' ');
 temp2 = []
 for (let i = 0; i < n; i++) {
     const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
     temp2.push(t);
 }
 if (temp2.length == 0) {
     console.log(0);
 } else {
     list = temp2;
     res = 10000;
     temp = 0;
     for (let i = 0; i < list.length; i++ ) {
         temp = parseInt(list[i]);
 
         if (Math.abs(temp) < Math.abs(res)) {
             res = temp;
         } else if (Math.abs(temp) == Math.abs(res) && temp != res) {
             res = Math.abs(temp);
         }
     }
     console.log(res);
 }
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 