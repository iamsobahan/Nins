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
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const auth = getAuth();
  // useName for updating user name
  const [useName, setUserName] = useState("");
  
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // islogin state for toggle register to log in
  const [islogin, setlogin] = useState(false);
  //  error state for display error
  const [error, seterror] = useState("");

  const { googleSignIn, setuser } = useAuth();


  // redirect handler for fixing redirect issue like when after we login ,we can redirect ourdisirable section
  const history = useHistory();
  const location = useLocation();
  const redirect = location.state?.from || "/home";
  const redirectHandler = () => {
    googleSignIn().then((result) => {
      history.push(redirect);
    });
  };

  // handlerName for collecting user name
  const handlerName = (e) => {
    setUserName(e.target.value);
  };
 

   // handleremail for collecting user email
  const handleEmail = (e) => {
    setemail(e.target.value);
  };

    // handlerpassword for collecting user password
  const handlePassword = (e) => {
    setpassword(e.target.value);
  };


  // handlechange for checking register or login toggle
  const handlechange = (e) => {
    setlogin(e.target.checked);
  };

// handle register for final registration or login

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
          history.push(redirect);
          setuser(user);
          console.log(user);
          seterror("");
        })
        .catch((error) => {
          const errorMessage = error.message;
          seterror(errorMessage);
        });
    };
// conditional toogle , is user already user or not

    islogin ? processLogin(email, password) : createUser(email, password);
  };
  return (
    <div className="my-4">
      <h3 className="text-center fw-bold">Check out Nins — it’s free!</h3>
      <Container className="w-50 responsive border border-4 p-3 my-4">
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
            <Button on variant="danger" type="submit">
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
            style={{ cursor: "pointer" }}
            onClick={redirectHandler}
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
