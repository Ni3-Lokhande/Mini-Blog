
import React from 'react';
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import './SignUp.css'; 

const SignUp = () => {
  return (
    <Container className="signup-container">
      <Card className="signup-card">
        <CardHeader>
          <h3>Fill Information to Register !!</h3>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="name">Enter Name</Label>
              <Input type='text' placeholder='Enter here' id='name'/>
            </FormGroup>

            <FormGroup>
              <Label for="email">Enter Email</Label>
              <Input type='email' placeholder='Enter here' id='email' />
            </FormGroup>

            <FormGroup>
              <Label for="number">Enter Mobile Number</Label>
              <Input type='number' placeholder='Enter here' id='number'/>
            </FormGroup>

            <FormGroup>
              <Label for="password">Enter Password</Label>
              <Input type='password' placeholder='Enter here' id='password'/>
            </FormGroup>

            <Container className='text-center'>
              <Button color='dark'>Register</Button>
              <Button color='secondary' className='ms-2' type='reset'>Reset</Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default SignUp;
