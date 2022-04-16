import styled from "styled-components";

export const Container=styled.div`
  font-family: 'Poppins', sans-serif;
  user-select: none;
  margin: 20px auto;
  background: #231e39;
  color: #b3b8cd;
  border-radius: 20px;
  width: 350px;
  text-align: center;
  box-shadow: 0 10px 20px -10px rgba(0, 0, 0, .75);
  .profile-name {
    font-size: 25px;
    font-weight: bold;
    margin: 27px 0 0 120px;
    white-space: nowrap;
    overflow: clip;
    text-overflow:ellipsis;
    
  }
  .about {
    margin-left: 40px;
    text-align: start;
    line-height: 21px;
  }
  b{
    color: white;
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
  padding: 10px 0;
  color: #231e39;
  border-radius: 10px;
  width: 90%;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  margin: 10px auto 5px auto;
  outline: none;

  &:hover {
    background: #be09f1;
    transition: .5s;
    border: none;
  }
`
export const BloodType=styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 55px;
  width: 100px;
  margin-top: 20px;
  height: 100px;
  text-align: center;
  vertical-align: middle;
  line-height: 90px;
  position: absolute;
  left: ${props => props.position ? props.position : '60%'};
  border-radius: 50%;
  background: linear-gradient(to bottom,
  rgb(255, 0, 7),
  rgb(184, 47, 150));
  color: white;
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  -webkit-backdrop-filter: blur( 3px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`
export const ButtonContainer=styled.div`
  display: flex;
  flex-direction: column;
`