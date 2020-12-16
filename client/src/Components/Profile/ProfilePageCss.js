import styled from "styled-components";
export const ProfilePageCSS=styled.div`
  margin: 1em auto;
  width: 44.23em;

  .card {
    background: #fff;
    border-radius: 0.3rem;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    border: .1em solid rgba(0, 0, 0, 0.2);
    margin-bottom: 1em;
  }

  .profile-user-page .img-user-profile {
    margin: 0 auto;
    text-align: center;
  }

  .profile-user-page .img-user-profile .profile-bgHome {
    border-bottom: .2em solid #f5f5f5;
    width: 44.23em;
    height: 16em;
    background: #1f4037;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #99f2c8, #1f4037);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #99f2c8, #1f4037); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }

  .profile-user-page .img-user-profile .avatar {
    margin: 0 auto;
    background: #fff;
    width: 7em;
    height: 7em;
    padding: 0.25em;
    border-radius: .4em;
    margin-top: -10em;
    box-shadow: 0 0 .1em rgba(0, 0, 0, 0.35);
  }

  .profile-user-page button {
    position: absolute;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    width: 7em;
    background: #3498db;
    border: 1px solid #2487c9;
    color: #fff;
    outline: none;
    border-radius: 0 .6em .6em 0;
    padding: .80em;
  }

  .profile-user-page button:hover {
    background: #51a7e0;
    transition: background .2s ease-in-out;
    border: 1px solid #2487c9;
  }

  .profile-user-page .user-profile-data, .profile-user-page .description-profile {
    text-align: center;
    padding: 0 1.5em;
  }

  .profile-user-page .user-profile-data h1 {
    font-family: "Lato", sans-serif;
    margin-top: 0.35em;
    color: #292f33;
    margin-bottom: 0;
  }

  .profile-user-page .user-profile-data p {
    font-family: "Lato", sans-serif;
    color: #8899a6;
    font-size: 1.1em;
    margin-top: 0;
    margin-bottom: 0.5em;
  }

  .profile-user-page .description-profile {
    color: #75787b;
    font-size: 0.98em;
  }

  .profile-user-page .data-user {
    font-family: "Quicksand", sans-serif;
    margin-bottom: 0;
    cursor: pointer;
    padding: 0;
    list-style: none;
    display: table;
    width: 100.15%;
  }

  .profile-user-page .data-user li {
    margin: 0;
    padding: 0;
    width: 33.33334%;
    display: table-cell;
    text-align: center;
    border-left: 0.1em solid transparent;
  }

  .profile-user-page .data-user li:first-child {
    border-left: 0;
  }

  .profile-user-page .data-user li:first-child a {
    border-bottom-left-radius: 0.3rem;
  }

  .profile-user-page .data-user li:last-child a {
    border-bottom-right-radius: 0.3rem;
  }

  .profile-user-page .data-user li a, .profile-user-page .data-user li strong {
    display: block;
  }

  .profile-user-page .data-user li a {
    background-color: #f7f7f7;
    border-top: 1px solid rgba(242, 242, 242, 0.5);
    border-bottom: .2em solid #f7f7f7;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(255, 255, 255, 0.4);
    padding: .93em 0;
    color: #46494c;
  }

  .profile-user-page .data-user li a strong, .profile-user-page .data-user li a span {
    font-weight: 600;
    line-height: 1;
  }

  .profile-user-page .data-user li a strong {
    font-size: 2em;
  }

  .profile-user-page .data-user li a span {
    color: #717a7e;
  }

  .profile-user-page .data-user li a:hover {
    background: rgba(0, 0, 0, 0.05);
    border-bottom: .2em solid #3498db;
    color: #3498db;
  }

  .profile-user-page .data-user li a:hover span {
    color: #3498db;
  }

  footer h4 {
    display: block;
    text-align: center;
    clear: both;
    font-family: "Coda", sans-serif;
    color: #566965;
    line-height: 6;
    font-size: 1em;
  }

  footer h4 a {
    text-decoration: none;
    color: #3498db;
  }

`