
import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './index.css'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { loginReqest } from '../../helpers/apiHelper';
import Toast from '../../components/toast';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";



function Login() {


  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToggle, setShowToggle] = useState(false)


  const toggleshow = () => setShowToggle(!showToggle);




  //validation related 

  const initialValues = {
    email: "",
    password: ""
  };


  const signInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(4, "Password is too short - should be 4 chars minimum"),
  });

  const submitForm = (values) => {
    console.log(values);
  };









  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password)
    loginReqest(email, password).then(res => {
      console.log(res)
      localStorage.setItem('xyz-todos', res.token)
    }).then(() => {
      history.push('/')
    }).catch(e => {
      setShowToggle({ ...showToggle, show: true });
    })
  }

  return (
    <>
      <div className="login">
        <Container>
          <div className="loginHeader">Login </div>



          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email" className="formGroup">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
 
            <Form.Group size="lg" controlId="password" className="formGroup">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
 
            <Button block size="lg" type="submit" className="loginButton" disabled={!validateForm()}>
              Login
            </Button>
          </Form>
 
          <div className="bottomText">Don't you have an account ? </div>  <Link className="loginLink" to="/signup"> sign up </Link>

        </Container>
      </div>

      <Toast show={showToggle} description={'Error occured while login'} toggleshow={toggleshow} />
    </>
  )
}

export default Login







/**
 * import React from 'react'
import './index.scss'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Forms() {

    const initialValues = {
        email: "",
        password: ""
    };


    const signInSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),

        password: Yup.string()
          .required("Password is required")
          .min(4, "Password is too short - should be 4 chars minimum"),
      });

    const submitForm = (values) => {
        console.log(values);
    };

    const SignInForm = () => {
        return (
          <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={(values) =>  submitForm(values)}
          >
            {(formik) => {
              const { errors, touched, isValid, dirty } = formik;
              return (
                <div className="container">
                  <h1>Sign in to continue</h1>
                  <Form>
                    <div className="form-row">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className={errors.email && touched.email ?
                        "input-error" : null}
                      />
                      <ErrorMessage name="email" component="span" className="error" />
                    </div>

                    <div className="form-row">
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        className={errors.password && touched.password ?
                        "input-error" : null}
                      />
                      <ErrorMessage
                        name="password"
                        component="span"
                        className="error"
                      />
                    </div>

                    <button
                      type="submit"
                      className={!(dirty && isValid) ? "disabled-btn" : ""}
                      disabled={!(dirty && isValid)}
                    >
                      Sign In
                    </button>
                  </Form>
                </div>
              );
            }}
          </Formik>
        );
      };
    return (
        <div>
            <SignInForm/>
        </div>
    )
}

export default Forms;

 *
 */