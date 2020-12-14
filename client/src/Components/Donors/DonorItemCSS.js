import styled from "styled-components";
export const Container=styled.div`
  user-select: none;
  margin: 20px auto;
  background: #231e39;
  color: #b3b8cd;
  border-radius: 5px;
  width: 350px;
  text-align: center;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, .75);

  .profile-name {
    font-size: 25px;
    font-weight: bold;
    margin: 27px 0 0 120px;
  }

  .about {
    margin-top: 35px;
    line-height: 21px;
  }

  button {
    margin: 10px 0 40px 10px;
  }


;
`
export const CoverPhoto=styled.div`
  background: url(https://images.unsplash.com/photo-1540228232483-1b64a7024923?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=50);
  height: 160px;
  width: 100%;
  border-radius: 5px 5px 0 0;
`
export const Profile=styled.img`
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin: 93px 0 0 -175px;
  border: 1px solid #1f1a32;
  padding: 7px;
  background: #292343;
`
export const Button=styled.button`
  background: #03bfbc;
  border: 1px solid #03bfbc;
  padding: 10px 25px;
  color: #231e39;
  border-radius: 3px;
  font-family: Montserrat, sans-serif;
  cursor: pointer;

  &:hover {
    color: #231e39;
    background: #0c40c4;
    transition: .5s;
    outline: none;
  }
`
export const BloodType=styled.div`
  font-size: 55px;
  font-family: "Helvetica Neue";
  width: 100px;
  height: 100px;
  background-color: rgba(255, 0, 0, 0.8);
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  line-height: 90px;
  position: absolute;
  left: ${props=>props.position?props.position:'60%'};
  color: #003e02;
`