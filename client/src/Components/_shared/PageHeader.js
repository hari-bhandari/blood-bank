import styled from 'styled-components';

const PageHeader = styled.h2`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0 0px;
  width: 100%;
  font-size: clamp(26px, 5vw, 40px);
  white-space: nowrap;
  color: #0087ff;

  &:before {
    content: '';
    display: block;
    position: relative;
    top: -5px;
    width: 100%;
    height: 7px;
    margin-left: 0px;
    background-color: #ff0000;
    @media (max-width: 1080px) {
      width: 100%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
    @media (max-width: 600px) {
      margin-left: 10px;
    }
  }

  &:after {
    content: '';
    display: block;
    position: relative;
    top: -5px;
    width: 100%;
    height: 7px;
    margin-left: 0px;
    background-color: #ff0000;
    @media (max-width: 1080px) {
      width: 100%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
    @media (max-width: 600px) {
    }
  }`


export default PageHeader;