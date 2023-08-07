// import React from 'react'
// import styled from "styled-components";
// import BackgroungImage from '../components/BackgroungImage';
// import Header from '../components/Header';

// const Nsignup = () => {
//   return (
//     <Container>
//       <BackgroungImage />
//       <div className="content">
//       <Header login />
//       <div className="body flex column a-center j-center">
//         <div className="text flex column">
//           <h1>Unlimited Movies, TV Shows and more</h1>
//           <h4>Watch Anywhere.Cancel Anytime</h4>
//           <h6>Ready to Watch? Enter your Email to create or restart membership</h6>
//         </div>

//       <div className="form">
//         <input type="email" placeholder='Email Address' name="email" />
//         <input type="password" placeholder="Password" name="password" />
//         <button>Get Started</button>
//       </div>
//       <button>Log In</button>
//       </div>
//       </div>
//     </Container>
//   )
// }

// export default Nsignup

// const Container=styled.div`
// position:relative;

// .content{
// position:absolute;
// top:0;
// left:0;
// background-color:rgba(0,0,0,0.5);
// height:100vh;
// width:100vw;
// display:grid;
// grid-template-columns:15vh 85vh;

// .body{
//   gap:1rem;
//   .text{
//     gap:1rem;
//     text-align:center;
//     font-size:2rem;
//     h1{
//       padding:0 25rem;
//     }
//   }
//   .form{
//     display:grid;
//     grid-template-columns:;
//     width:60%;
//     input{
//       color:black;
//       border:none;
//       padding:1.5rem;
//       font-size:1.2rem;
//       border:1px solid black;
//       &:focus{
//         outline:none;
//       }
//     }
//     button{
//       padding:0.5rem 1rem;
//       background-color:#e50914;
//       border:none;
//       cursor:pointer;
//       color:white;
//       font-weight:bold;
//       font-size:1.05rem;
    
//   }
//   }
//   button{
//     padding:0.5rem 1rem;
//     background-color:#e50914;
//     border:none;
//     cursor:pointer;
//     color:white;
//     border-radius:0.2rem;
//     font-weight:bold;
//     font-size:1.05rem;
  
// }
// }
// }


// `;

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroungImage"
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
function Nsignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="email"
              value={formValues.email}
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                name="password"
                value={formValues.password}
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          {showPassword && <button onClick={handleSignIn}>Sign In</button>}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`

  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};
        width: 60%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
      button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;

export default Nsignup;
