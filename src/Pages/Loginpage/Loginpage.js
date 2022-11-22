import React from 'react';
import './Loginpage.style.css';
import PropTypes from 'prop-types';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';


export const Loginpage = ({ handleOnchange, email, password1, handleOnsubmit,formSwitcher }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center'>Client Login</h1>
          <hr />
          <Form autoComplete='off' onSubmit={handleOnsubmit}>
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
            <Form.Group>

              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                value={password1}
                placeholder='Enter Password'
                onChange={handleOnchange}
                required
              />
            </Form.Group>

            <hr />

            <Button type='submit' className='text-info text-center'>Login</Button>
            <hr />
          </Form>
        </Col>
      </Row>

      <Row>

        <Col>
          <a href='#!' onClick={() => formSwitcher('Reset')}>Forget Password</a>
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

export default Loginpage

