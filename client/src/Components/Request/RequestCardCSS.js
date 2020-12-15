import styled from "styled-components";
export const CardContainer=styled.div`
  background-color: #222831;
  height: 37rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0 20px;
  .card__name {
    margin-top: 15px;
    font-size: 1.5em;
  }
  margin-top: 50px;

  .card__image {
    height: 160px;
    width: 160px;
    border-radius: 50%;
    border: 5px solid #272133;
    margin-top: 20px;
    box-shadow: 0 10px 50px rgba(235, 25, 110, 1);
  }


  .draw-border {
    box-shadow: inset 0 0 0 4px #58cdd1;
    color: #58afd1;
    -webkit-transition: color 0.25s 0.0833333333s;
    transition: color 0.25s 0.0833333333s;
    position: relative;
  }

  .draw-border::before,
  .draw-border::after {
    border: 0 solid transparent;
    box-sizing: border-box;
    content: '';
    pointer-events: none;
    position: absolute;
    width: 0rem;
    height: 0;
    bottom: 0;
    right: 0;
  }

  .draw-border::before {
    border-bottom-width: 4px;
    border-left-width: 4px;
  }

  .draw-border::after {
    border-top-width: 4px;
    border-right-width: 4px;
  }

  .draw-border:hover {
    color: #ffe593;
  }

  .draw-border:hover::before,
  .draw-border:hover::after {
    border-color: #eb196e;
    -webkit-transition: border-color 0s, width 0.25s, height 0.25s;
    transition: border-color 0s, width 0.25s, height 0.25s;
    width: 100%;
    height: 100%;
  }
  .card__description{
    margin-left: 10%;
    width: 100%;
  }
  .draw-border:hover::before {
    -webkit-transition-delay: 0s, 0s, 0.25s;
    transition-delay: 0s, 0s, 0.25s;
  }

  .draw-border:hover::after {
    -webkit-transition-delay: 0s, 0.25s, 0s;
    transition-delay: 0s, 0.25s, 0s;
  }

  .btn-request {
    background: none;
    border: none;
    cursor: pointer;
    line-height: 1.5;
    font: 700 1.2rem 'Roboto Slab', sans-serif;
    padding: 0.75em 2em;
    letter-spacing: 0.05rem;
    margin: 1em;
    width: 13rem;
  }

  .btn-request:focus {
    outline: 2px dotted #55d7dc;
  }



  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    font-size: 1.2em;
  }

`
