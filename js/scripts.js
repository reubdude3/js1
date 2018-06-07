let toDos =[];

let toDo1 =[prompt("what do you want to do first"),
"eat"];
let toDo2 =[prompt("what do you want to do second"),
"drink"];
let toDo3 =[prompt("what do you want to do third"),
"sleep"]


toDos.push(toDo1,toDo2,toDo3);


for(let i = 0; i<toDos.length; i++){
  let timeline = prompt(`how many days will it take to get ${toDos[i][0]}to get done?`,"2");


timeline = !isNaN(parseInt(timeline)) ?
parseInt(timeline) : 2;

toDos[i].unshift(timeline)
}

toDos.sort();

let longest = toDos[0];

let j = 0;
 while (j < toDos.length) {
   if(toDos[j][0] > longest[0]) longest =toDos[j];

   longest =toDos[j][0] > longest[0] ? longest = toDos[j]:
j++;
 }

console.log(longest);
