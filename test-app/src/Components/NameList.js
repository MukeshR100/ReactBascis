import React from "react";

function NameList() {
//    const Persons = [
//     {id:20,
//      name:'Mukesh',
//      role:'dev'
//     },
//     {id:21,
//      name:'Akil',
//      role:'sup'
//     },
//     {id:20,
//      name:'Bala',
//      role:'Srdev'
//     }];
//     // const person= Persons.map(Persons => 
//     // <h2 key={Persons.id}>I am {Persons.name} and I am in {Persons.role}</h2>)
//     // return(
//     //     <div>{person}</div>
//     // )
//     const person = Persons.map(Perso => <h2 key ={Persons.id}>{Perso.role}</h2>)
//     return(
//         <div>{person}</div>
//     )
const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  const list = (
  <ul>
    {posts.map(posts => 
        <li key={posts.id}>
            {posts.title}
        </li>
    )}  
  </ul>
  ) 
  const val=posts.map(posts => 
    <div key={posts.id}>
        <h2>{posts.title}</h2>
        <p>{posts.content}</p>
    </div>
  )
  return(
    <div>
      {list}
      {val}
    </div>
  )
}

export default NameList