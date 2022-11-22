import React from 'react';
// import './Loginpage.style.css';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';


export const Forgotpassword = ({ handleOnchange, email, handleOnResetsubmit,formSwitcher }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center'>Reset Password</h1>
          <hr />
          <Form autoComplete='off' onSubmit={handleOnResetsubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={email}
                placeholder='Enter Email'
                onChange={handleOnchange}
                required
              />
            </Form.Group>
            <hr />

            <Button type='submit' className='text-info text-center'>Reset Password</Button>
            <hr />
          </Form>
        </Col>
      </Row>

      <Row>

        <Col>
          <a href='#!' onClick={ () => formSwitcher('Login')}>Login page</a>
        </Col>
      </Row>
    </Container>
  )
}
// Loginpage.propTypes = {
//   handleOnchange: PropTypes.func.isRequired,
//   email: PropTypes.string.isRequired,
//   // password1: PropTypes.string.isRequired


// }

export default Forgotpassword

