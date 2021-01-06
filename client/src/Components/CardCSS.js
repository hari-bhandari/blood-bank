import styled from "styled-components";

export const CardContainer = styled.div`
  width: 80%;
  display: flex;
  background: #041732;
  border-radius: 5px;
  box-shadow: 4px 4px 8px -3px rgb(0, 124, 255);
  margin: 0 auto 3px;
  justify-content: space-between;
  color: white;
  font-size: x-large;
  @media (max-width: 1000px) {
    width: 95%;
    flex-direction: column;
  }

  .X {
    position: absolute;
    font-weight: bold;
    border-radius: 33%;

    margin-left: 5px;
  }

  .X:hover {
    cursor: pointer;
  }

  .card-c {
    display: flex;
    background: #0087ff;
    border-radius: 5px;
    box-shadow: 4px 4px 8px -3px rgba(255, 0, 0, 0.15);
    margin-bottom: 3px;
    justify-content: space-between;
  }

  .avatar {
    align-items: flex-start;
    justify-content: flex-start;
    display: flex;
    padding: 15px 0 15px 15px;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: center;
  }

  .card__title {
    margin: 0 0 2px 0;
    font-weight: bolder;
    font-size: 16px;
  }

  .content {
    font-size: 0.8em;
    margin: 0;
  }

  .donor__title {
    font-size: larger;
  }

  #cancel, #accept, #changePhoto {
    margin: 5px;
    width: 5em;
    height: 3em;
    border-radius: 10px;
    font-size: large;
    box-shadow: 0.1em 0.1em 0.1em rgba(51, 51, 51, 0.6);
    cursor: pointer;
    outline: none;
    border: none;
  }

  #cancel {
    background-color: rgba(200, 0, 0, 1);
    color: white;
  }

  #accept {
    background-color: rgb(0, 0, 200);
    color: white;
  }

  #changePhoto {
    background-color: rgb(20, 200, 0);
    color: white;
  }

  #cancel:hover {
    background-color: rgba(225, 0, 0, 1);
    transition: all 0.2s ease-in;
    box-shadow: 0.2em 0.2em 0.3em rgba(51, 51, 51, 0.6);
  }

  #accept:hover {
    background-color: rgba(0, 0, 255, 1);
    transition: all 0.2s ease-in;
    box-shadow: 0.2em 0.2em 0.3em rgba(51, 51, 51, 0.6);
  }
`