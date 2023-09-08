import React from 'react'
import { Container , Row , Col  } from  'react-bootstrap'

const FormContainer = ({children}) => {
  return (
    <Container>
      <Row className='justify-contect-md-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer;