import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const navigate = useNavigate()
  return (
    <div>AddProduct
      <div>
        <Button onClick={() => navigate("/")}>Home</Button>
      </div>
    </div>
  )
}

export default AddProduct