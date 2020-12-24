import styled from 'styled-components';

export const ContactWrapper = styled.section`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1000px) {
    margin-left: 20px;
    width: 100%;
    
    
  }
  .css-1uccc91-singleValue{
    color: white !important;
  }
  
  
`;

export const ContactBox = styled.div`
  width: calc(100% - 30px);
  position: relative;
  height: 600px;
  margin-bottom: 50px;
  margin-top: 150px;
  background: #8579F9;
  padding: 20px;
  border-radius: 10px;
  @media (max-width: 1000px) {
    width: 80%;
    padding: 10px;
    margin-top: 50px;
  }
`;
export const LeftContent = styled.div`
  position: absolute;
  top: 100px;
  transform: translateY(-50%);
  margin-left: 6%;
  width: fit-content;
  text-align: center;

  &,
  p,
  h3 {
    color: #f8f8f8;
  }
  p{
    font-size: 16px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ContactForm = styled.form`
  position: absolute;
  width: 70%;
  top: -50px;
  right: -40px;
  padding: 50px 30px;
  background: #000b1d;
  border-radius: 10px;
  min-height: 400px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'email name'
    'district phone'
    'hospital bloodType'
    'textarea textarea'
    '. button';

  label span {
    font-size: 0.85em;
    color: white;
  }

  input {
    color: white;
  }
  p{color: #CFDEF3}

  .label__email {
    grid-area: email;
  }

  .label__name {
    grid-area: name;
  }

  .label__district {
    grid-area: district;
  }

  .label__phone {
    grid-area: phone;
  }

  .label__hospital {
    grid-area: hospital;
  }

  .label__bloodType {
    grid-area: bloodType;
  }

  .label__message {
    grid-area: textarea;
  }

  .submit__btn {
    justify-self: end;
    width: fit-content;
    grid-area: button;
  }

  @media (max-width: 768px) {
    grid-template-areas:
      'email name'
      'district district'
      'phone phone'
      'hospital bloodType'
      'textarea textarea'
      '. button';
  }

  input,
  textarea {
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #0c1a34;
    border: none;
    margin: 10px 0;
    width: 100%;
  }

  textarea {
    margin: 10px 0;
    width: 100%;
    height: 200px;
    resize: none;
  }

  @media (max-width: 1000px) {
    input,
    textarea {
      padding: 20px 15px;
    }

    padding: 30px 25px 20px;
    position: unset;
    width: 100%;
    top: 0px;
    right: 0px;
  }
`;
export const Recieved = styled.div`
  width: calc(100% - 30px);
  position: relative;
  height: 800px;
  margin-bottom: 50px;
  margin-top: 400px;
  transform: translateY(-50%);
  text-align: center;

  &,
  p,
  h3 {
    color: #f8f8f8;
  }
`
export const Button = styled.button`
  background: linear-gradient(134deg, #6A98F0 0%, #4961DC 99%);
  color: #f8f8f8;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover {
    color: #f8f8f8;
    background: linear-gradient(99deg, #6A98F0 0%, #4961DC 130%);
    transform: scale(1.05);
    transition: 0.2s;
  }

  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.width : 'auto')};
  font-size: 12px;
  margin: 0px 0;
  padding: 12px 12px;
  border-radius: ${props => (props.round ? '50%' : '5px')};
`
export const ExpenseContainer=styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  grid-gap: 0px;
  input{
    margin: auto 0;
  }
`