import React from 'react';

const Burger = props => {
  return props.devoured ? <Devoured {...props}/> : 
  <NotDevoured {...props}/>
} 

const Devoured = props =>
<div className={"bg-1 ba bw1 pa1 o-50"}>
  <div>{props.burger_name}</div>
</div>

const NotDevoured = props =>
<div className={"bg-3 ba bw1 pa1"}
  onClick={() => props.onClick(props.key)}
>
  <div>{props.burger_name}</div>
</div>
  

export default Burger;