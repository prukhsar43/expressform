import React from 'react'

const Show = ({ele,i}) => {
  return (
    <div key={i}>
      <div className="card text-center mt-4" >
  <div className="card-header">
  NAME:-  {ele.fname} {ele.lname}
  </div>
  <div className="card-body">
    <h5 className="card-title">Age:-{ele.age}</h5>
    <h5 className="card-title">Contact No.:-{ele.mobile}</h5>
    <p className="card-text">Description:-{ele.desc}.</p>
  </div>
</div>
    </div>
  )
}

export default Show
