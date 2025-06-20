let a=2.2;
console.log(Math.round(a));//2
console.log(Math.floor(a));//2
console.log(Math.round(6.2));//6
console.log(Math.floor(6.2));//6
console.log(Math.ceil(6.2));//7
console.log(Math.random(a));//0-1
console.log(Math.abs(-2.9));//2.9
console.log(Math.sign(45));//1
console.log(Math.sign(-45));//-1
console.log(Math.sign(0));//0
console.log(Math.trunc(4.5));//4
console.log(Math.sqrt(4));//2^2=2
console.log(Math.cbrt(125));//5
console.log(Math.min(1,2,-4,-5,78));//-5
console.log(Math.max(1,2,-4,-5,78));//78
console.log(Math.pow(6,2));//36
console.log(Math.log(1));//0
console.log(Math.log(2));
console.log(Math.log(10));
console.log(Math.exp(0));//1


console.log("string method");

let s="Mohana raji";
console.log(s.length);//10
console.log(s.charAt(0));//M
console.log(s.charCodeAt(0));//77
console.log(s.at(1));//o
console.log(s.slice(0,6));//mohana strat include end exclude
console.log(s.substr(0,6));//mohana strat include end exclude
console.log(s.slice(6));//raji
console.log(s.substring(0,6));
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.trim());
console.log(s.trimStart());
console.log(s.trimEnd());
console.log(s.padEnd(4 ,"X"));
console.log(s.padStart(4,"0"));
console.log(s.replace("raji","devi"));
console.log(s.repeat(2));
console.log(s.replaceAll("raji","devi"));
console.log(s.split(" "));
console.log(s.split(","));
console.log(s.split("|"));
console.log(String.fromCharCode(78));



console.log("Date Method");
console.log("Date GET Method");

let date = new Date("2025-6-20");  

console.log(date);
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toDateString());
console.log(date.getDay());

console.log("Date SET Method");


date.setFullYear(2023);
console.log(date.getFullYear());
console.log(date.getDay());









