const user =[
    {names: 'Amit', age:20},
    {names: 'Riddhi', age:21},
    {names: 'Hetvi', age:22}
];

const[names,age] =[
    user.map(({ names }) =>names),
    user.map(({ age }) =>age),
]

console.log(names);
console.log(age);