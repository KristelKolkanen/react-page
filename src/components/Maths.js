import React, { useState } from 'react'
// Lisada Maths komponenti state-i muutmiseks +1 +10 +100 ja -1 -10 -100 
// nupud ning kontrollida, kas töötab
const Maths = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)

  return (
    <> 
        <div>{count}</div>
        <button onClick={() => setCount(count +1)}>+1</button> 
        <div>{count2}</div>
        <button onClick={() => setCount2(count2 +10)}>+10</button> 
        <div>{count3}</div>
        <button onClick={() => setCount3(count3 -100)}>-100</button> 
    </>
  )
}

export default Maths
