import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.login({ email, password }));
  };

  return (
    <Container as="main">
      <Row>
        <Col></Col>
        <Col lg={8} xl={5}>
          <Form
            onSubmit={handleSubmit}
            autoComplete="off"
            className="p-4 rounded shadow bg-light"
          >
            <Form.Group className="mb-3">
              <Form.Label className="w-100">
                Email
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="w-100">
                Password
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Enter your Password"
                />
              </Form.Label>
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign in
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default LoginView;
