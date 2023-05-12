var persons = [
    {name: "givi", age: 25},
    {name: "nugo", age: 21},
    {name: "jora", age: 28},
  ];
  persons = persons.sort(function(a, b) {
    return a.age - b.age;
})
let youngest  = persons.filter(function(item){ 
  return item.age == persons[0].age ;
})  


console.log(persons[0].name)





function alex(user1= {FirstName:'gio', LastName: 'pirveli'}){
  const user2 = user1;
  return user2
}
console.log(alex())






function random(){
    return parseInt(Math.random() * 3) +1
}

let result = random()



while(result !== 3){
    result = random()
    console.log(result)
}