import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import google from "../../images/google.png";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Login = () => {
  const auth = getAuth();
  const [useName, setUserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [islogin, setlogin] = useState(false);
  const [error, seterror] = useState("");
  const { googleSignIn, setuser } = useAuth();
  const handlerName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setemail(e.target.value);
  };
  const handlePassword = (e) => {
    setpassword(e.target.value);
  };

  const handlechange = (e) => {
    setlogin(e.target.checked);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      seterror("password must be 6 charackters");
      return;
    }

    const createUser = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          seterror("");
          updateUserName();
        })
        .catch((err) => {
          seterror(err.message);
        });
    };

    const updateUserName = () => {
      updateProfile(auth.currentUser, { displayName: useName })
        .then(() => {
          // Profile updated!
          // ...
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
    };

    const processLogin = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          setuser(user);
          console.log(user);
          seterror("");
        })
        .catch((error) => {
          const errorMessage = error.message;
          seterror(errorMessage);
        });
    };

    islogin ? processLogin(email, password) : createUser(email, password);
  };
  return (
    <div className="my-4">
      <h3 className="fw-bold text-center">Sign in or create an account</h3>
      <Container className="w-50 border border-4 p-3 my-4">
        {islogin ? (
          <h2 className="text-center my-2 text-uppercase fw-light">
            Please Login
          </h2>
        ) : (
          <h2 className="text-center my-2 text-uppercase fw-light">
            Please Register
          </h2>
        )}
        <Form onSubmit={handleRegistration}>
          {!islogin && (
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                onBlur={handlerName}
                type="Name"
                placeholder="Enter Name"
                required
              />
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmail}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePassword}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={handlechange}
              type="checkbox"
              label="Already User?"
            />
          </Form.Group>
          <div className="row mb-2 text-danger">{error}</div>
          {islogin ? (
            <Button variant="danger" type="submit">
              Login
            </Button>
          ) : (
            <Button variant="danger" type="submit">
              Register
            </Button>
          )}

          <p className="text-center text-secondary mt-5">
            -------or use one of these options----------
          </p>
          <div
            onClick={googleSignIn}
            className="border border-2 p-2 text-center"
          >
            <img className="img-fluid width" src={google} alt="" />
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
