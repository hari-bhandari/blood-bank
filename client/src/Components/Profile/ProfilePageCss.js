import styled from "styled-components";
export const ProfilePageCSS=styled.div`
  font-size:1.6rem;
  margin: 0;
  color: #001;
  background-image: linear-gradient( 135deg, #FEB692 10%, #EA5455 100%);
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .profile {
    width: fit-content;
    background: white;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),
    0 1px 1px 0 rgba(0,0,0,.14),
    0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 1rem;
  }

  .profile-background {
    width: 100%;
    height:16rem;
    background: #EA5455;
    border-radius: 1rem 1rem 0 0;
  }

  .profile-contents {
    padding: 2.4rem 3.6rem 4.8rem;
  }

  .profile-header {
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .profile-header__icon {
    position: relative;
    top: -7.2rem;
  }

  .profile-header__text {
    margin-top: -5rem;
    font-size: 2.4rem;
    line-height: 4.8rem;
  }

  .profile-info {
    display: flex;
    flex-direction: row;
    margin: 2.4rem 2.4rem 0;
  }

  .profile-info-data {
    padding: 0 2.4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile-info-data__number {
    font-weight: 700;

  }

  .profile-info-data__name {
    color: #667;
    font-size: 1.4rem;
    margin-top: .4rem;
  }
    `