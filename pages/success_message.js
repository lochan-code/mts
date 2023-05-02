import React from 'react'

const success_message = () => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className="card text-center shadow-lg">
  <div
    style={{
      borderRadius: 200,
      height: 200,
      width: 200,
      background: "#F8FAF5",
      margin: "0 auto"
    }}
  >
    <i className="checkmark">✓</i>
  </div>
  <h1>Success</h1>
  <p>
    We received your message;
  </p>
</div>

    </div>
  )
}

export default success_message
