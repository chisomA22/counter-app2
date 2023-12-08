import React from 'react'

const Calc=() => {

    // const base = 66;
    // const height = 9;
    

    // const area = height * base / 2

    // const value = 10
    // const a = Math.PI * value**2

    // const b1 = 5;
    // const b = 2;
    // const h = 8;
    // const ar = b1 + b / 2 * h

    // const handleClick =()=>{
    //     console.log('btn working')

      const handleClick=()=>{
        alert('weldone')
      }
  return (
    <div>
      {/* <h2>The area of a triangle of 66 and 9 is :{area} </h2>
      <h2>The area of a circle of 10 : {a}</h2>
    //   <h2>The area of a trapezium is : {ar}</h2> */}
    <button onClick={handleClick}> click me</button> 

    </div>
    // build a simple counter app with three buttons increament,decreament and reset
  )
}

export default Calc
