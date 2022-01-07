import styled from 'styled-components'
export const AuthGlobal=styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  input {
    font-family: "Poppins", sans-serif;
  }

  .signup-agreement {
    max-width: 500px;
  }

  .container {
    position: relative;
    width: 100%;
    background-color: #e8c800;
    min-height: 100vh;
    height: 100vh;
    overflow: hidden;
  }

  .forms-container {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }

  .signin-signup {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 75%;
    width: 50%;
    transition: 1s 0.7s ease-in-out;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0rem 5rem;
    transition: all 0.2s 0.7s;
    overflow: hidden;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  form.sign-up-form {
    opacity: 0;
    z-index: 1;
  }

  form.sign-in-form {
    z-index: 2;
  }

  .title {
    font-size: 2.2rem;
    color: #444;
    margin-bottom: 10px;
  }

  .input-field {
    max-width: 380px;
    width: 100%;
    background-color: #f0f0f0;
    margin: 5px 0;
    height: 55px;
    border-radius: 55px;
    display: grid;
    grid-template-columns: 15% 85%;
    padding: 0 0.4rem;
    position: relative;
  }

  .queryBox {
    max-width: 380px;
    width: 100%;
    margin: 5px 0;
    grid-template-columns: 15% 85%;
    padding: 0 0.4rem;
    position: relative;
  }

  .input-field i {
    text-align: center;
    line-height: 55px;
    color: #acacac;
    transition: 0.5s;
    font-size: 1.1rem;
  }

  .input-field input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
  }

  .input-field input::placeholder {
    color: #aaa;
    font-weight: 500;
  }

  .social-text {
    padding: 0.7rem 0;
    font-size: 1rem;
  }

  .social-media {
    display: flex;
    justify-content: center;
  }

  .social-icon {
    height: 46px;
    width: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.45rem;
    color: #333;
    border-radius: 50%;
    border: 1px solid #333;
    text-decoration: none;
    font-size: 1.1rem;
    transition: 0.3s;
  }

  .social-icon:hover {
    color: #4481eb;
    border-color: #4481eb;
  }

  .btn {
    width: 150px;
    background-color: #2765d2;
    border: none;
    outline: none;
    height: 49px;
    border-radius: 49px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    cursor: pointer;
    transition: 0.5s;
  }

  .btn:hover {
    background-color: #4d84e2;
  }

  .panels-container {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .container:before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    background: #FA867B; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FA867B, #FA867B); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FA867B, #FA867B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    border-radius: 50%;
    z-index: 6;
  }

  .image {
    width: 70%;
    transition: transform 1.1s ease-in-out;
    transition-delay: 0.4s;
  }

  .panel {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: center;
    z-index: 6;
  }

  .left-panel {
    pointer-events: all;
    padding: 3rem 17% 2rem 12%;
  }

  .right-panel {
    pointer-events: none;
    padding: 3rem 12% 2rem 17%;
  }

  .panel .content {
    color: #fff;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }

  .panel h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
  }

  .quote-text {
    font-size: 2rem;
    padding: 0.7rem 0;
  }

  .btn.transparent {
    margin: 0;
    background: red;
    border: 2px solid yellow;
    width: 150px;
    height: 55px;
    font-weight: 600;
    font-size: 0.8rem;
  }


  .right-panel .image,
  .right-panel .content {
    transform: translateX(800px);
  }

  /* ANIMATION */

  .container.sign-up-mode:before {
    transform: translate(100%, -50%);
    right: 52%;
  }

  .container.sign-up-mode .left-panel .image,
  .container.sign-up-mode .left-panel .content {
    transform: translateX(-800px);
  }

  .container.sign-up-mode .signin-signup {
    left: 25%;
  }

  .container.sign-up-mode form.sign-up-form {
    opacity: 1;
    z-index: 2;
  }

  .container.sign-up-mode form.sign-in-form {
    opacity: 0;
    z-index: 1;
  }

  .container.sign-up-mode .right-panel .image,
  .container.sign-up-mode .right-panel .content {
    transform: translateX(0%);
  }

  .container.sign-up-mode .left-panel {
    pointer-events: none;
  }

  .container.sign-up-mode .right-panel {
    pointer-events: all;
  }

  @media (max-width: 870px) {
    .container {
      min-height: 800px;
      height: 80vh;
    }

    .quote-text {
      font-size: 1rem !important;
    }

    .signin-signup {
      width: 100%;
      top: 95%;
      transform: translate(-50%, -100%);
      transition: 1s 0.8s ease-in-out;
    }

    .signin-signup,
    .container.sign-up-mode .signin-signup {
      left: 50%;
    }

    .panels-container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr 1fr;
    }

    .panel {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 2.5rem 8%;
      grid-column: 1 / 2;
    }

    .right-panel {
      grid-row: 3 / 4;
    }

    .left-panel {
      grid-row: 1 / 2;
    }

    .image {
      width: 200px;
      transition: transform 0.9s ease-in-out;
      transition-delay: 0.6s;
    }

    .panel .content {
      padding-right: 15%;
      transition: transform 0.9s ease-in-out;
      transition-delay: 0.8s;
    }

    .panel h3 {
      font-size: 1.2rem;
    }

    .quote-text {
      font-size: 2rem;
      padding: 0.5rem 0;
    }

    .btn.transparent {
      width: 110px;
      height: 35px;
      font-size: 0.7rem;
    }

    .container:before {
      width: 1500px;
      height: 1500px;
      transform: translateX(-50%);
      left: 30%;
      bottom: 68%;
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
    }

    .container.sign-up-mode:before {
      transform: translate(-50%, 100%);
      bottom: 32%;
      right: initial;
    }

    .container.sign-up-mode .left-panel .image,
    .container.sign-up-mode .left-panel .content {
      transform: translateY(-300px);
    }

    .container.sign-up-mode .right-panel .image,
    .container.sign-up-mode .right-panel .content {
      transform: translateY(0px);
    }

    .right-panel .image,
    .right-panel .content {
      transform: translateY(300px);
    }

    .container.sign-up-mode .signin-signup {
      top: 5%;
      transform: translate(-50%, 0);
    }
  }

  @media (max-width: 570px) {
    form {
      padding: 0 1.5rem;
    }

    .image {
      display: none;
    }

    .panel .content {
      padding: 0.5rem 1rem;
    }

    .container {
      padding: 1.5rem;
    }

    .container:before {
      bottom: 72%;
      left: 50%;
    }

    .container.sign-up-mode:before {
      bottom: 28%;
      left: 50%;
    }
  }

  .signup-input {
    margin: 5px 0px;
  }

  //for file uplaod react
  .fileContainer {
    font-family: 'Poppins', serif;
    background: rgba(255, 176, 0, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 3px solid rgba(255, 255, 255, 0.18);
    position: relative;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px auto;
    transition: all 0.3s ease-in;
  }

  .fileContainer input {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }

  .fileContainer p {
    font-size: 18px;
    margin: 8px 0 4px;
  }

  .fileContainer .errorsContainer {
    max-width: 300px;
    font-size: 12px;
    color: red;
    text-align: left;
  }

  .fileContainer .chooseFileButton {
    padding: 6px 23px;
    background: #036fec;

    border-radius: 30px;
    color: white;
    font-weight: 300;
    font-size: 18px;
    margin: 10px 0;
    transition: all 0.2s ease-in;
    cursor: pointer;
    outline: none;
    border: none;
  }

  .fileContainer .chooseFileButton:hover {
    background: #bd2626;
  }

  .fileContainer .uploadFilesButton {
    padding: 5px 43px;
    background: transparent;
    border-radius: 30px;
    color: #3f4257;
    font-weight: 300;
    font-size: 14px;
    margin: 10px 0;
    transition: all 0.2s ease-in;
    cursor: pointer;
    outline: none;
    border: 1px solid #3f4257;
  }

  .fileContainer .uploadFilesButton:hover {
    background: #bd2626;
    color: #fff;
  }

  .fileContainer .uploadIcon {
    width: 50px;
    height: 50px;
  }

  .fileContainer .uploadPicturesWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .fileContainer .uploadPictureContainer {
    width: 25%;
    margin: 5%;
    padding: 10px;
    background: #edf2f6;
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
    border: 1px solid #d0dbe4;
    position: relative;
  }

  .fileContainer .uploadPictureContainer img.uploadPicture {
    width: 100%;
  }

  .fileContainer .deleteImage {
    position: absolute;
    top: -9px;
    right: -9px;
    color: #fff;
    background: #ff4081;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    font-size: 26px;
    font-weight: bold;
    line-height: 30px;
    width: 30px;
    height: 30px;
  }

  .flipMove {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
`

