import React from 'react'

function Another() {

  const names = ['harry potter', 'blade runner', 'dunkirk']

  return (
    <div>
      {
        names.map(name => <h2>{name}</h2>)
      }
    </div>
  )
}

export default Another
