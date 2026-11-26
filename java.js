console.log("hello world");
let name ="doom";
console.log(name);
x=null;
y=undefined;
name ="iron man"
//if we want to use let variable again then we have to create another block "by{}"
//'===' is used to compare type. similarly '!==' means not equal to type
// '&&' is logical_and '||' is logical_OR, '!' is logical_NOT
/* ternary operator:
a?b:c;
means a is condition and if true then will execute b and if false c will execute */
/*let num=prompt("enter a number");
if (num===5){
    if (num%5==0){
        console.log("multiple of 5");
    }
    else{
        console.log("not a multiple of 5");
    }
}
else{
    console.log("not a number");
}*/
// the above won't work bcs 14th line always returns a string. imstead write

// for(let i=0;i<5;i++){
//         let num=prompt("enter a number");
// if (num%5===0){
//     console.log(num, "is not multiple of 5");
//     }else{
//         console.log(num,"is not a multiple of 5");
//     }}
//in for loop if we use let then the value of i only survives till the for loop. but if we want to use the value of i outside then we have to use var instead of let
//for-of-loop
let str="apple";
for (let i of str){
    console.log("i=",i);
}//this prints each letter of the string. in for of loop i gets assigned to each ele of the arr
//for-in-loop(returns key of object)
let student={
    name:"dhanvi",
    age:19,
    sgpa:9,
    ispass:true,
};
for (let i in student){
    console.log("key=",i,"value=", student[i], student["age"]);//"age return only value for age" can also write student.age
}
// var gnum;
// while (gnum!=25){
//      gnum=prompt("enter the 25 number");
// }
// if (gnum==25){
//     console.log("the number guessed is correct");
// }
//another way
let gnum=25;
let usernum=prompt("guess the number:");
while (usernum!=gnum){
usernum=prompt("you entered wrong number. pls enter right number")
} console.log("congrats! you entered the right number")
//template literals for example:
let specialstring=`this is a template string`
let obj={
    item:"pen",
    price:"10",
};
console.log("the cost of", obj.item, "is", obj.price, "repees" );
//or can be written as:-
let output=`the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
//template literals
console.log("Apna \nCollege")
//\n:- next line. \t:- tab
// these escape characters conusume 1 length
// str.toUppercase()
// str.toLowerCase()
let str1="hi Bro"
str.toUpperCase();//HI BRO
console.log(str);//hi Bro
str.trim();// removes whitespace of beginning and end and returns the string
//rest all funcn like slicing, concatinating etc... dont memorize just google when needed
let str2="0123456";
console.log(str.slice(1,3));//123
console.log(str.slice(3));//3456
let res=str1.concat(str2);//we can also use addition
console.log(res);
//str.replace("searchvalue","newvalue");
// if we replace "lo" in "hellololo" to p then it would be "helplolo"
// if we use str.replaceAll then all "lo" would be replaced
str.charAt(1); //returns character at that index
let uname="dhanvi";
let llength= uname.length;
// let username= "@"+uname + uname.length;
// console.log(username);
console.log("@"+uname.concat(llength));//either way!
let marks=[34,56,75,86,47];
console.log(marks);
marks[0]=66;//[66,56,75,86,47]
//objects are mutable but strings are not mutable
for ( let i in marks){
    console.log(marks[i]);
}
let sum=0;
for (let i of marks){
  sum=sum+i;
}
let avgg=sum/marks.length;
console.log(avgg);
let store=[250, 645, 300, 900, 50];
let dstore=[];
console.log(store);
for (let i in store){
    dstore[i]=store[i]-store[i]/10;
}
console.log(`after applying offer the prices are respectively ${dstore}`);