import styled from '@emotion/styled';

export const Form = styled.form`
  margin: 0 auto;
  max-width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  input {
    height: 40px;
    padding-left: 10px;
    margin-bottom: 15px;
    font-size: 20px;
  }
`;
export const Button = styled.button`
margin-left: auto;
margin-right: auto;

background-color: #fff;
border: 1px solid #d5d9d9;
border-radius: 8px;
box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;

font-weight: 500;
box-sizing: border-box;
color: #0f1111;
cursor: pointer;
display: block;
font-size: 13px;
line-height: 29px;
width: 100px;
padding: 0 10px 0 11px;
  &:hover {
    background-color: orangered;
    color: white;
  }
  &:focus {
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
    
  }
`;

/* .button {
    padding: 8px 16px;
    border-radius: 2px;
    background-color: #3f51b5;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    color: #fff;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    min-width: 180px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  
  .button:hover,
  .button:focus {
    background-color: #303f9f;
  } */

/* export const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 0 auto;
    border: 1px solid rgb(30, 1, 252);
    border-radius: 5px;
    font-size: 20px;
    box-shadow: 0px 0px 5px 0px rgb(30, 1, 252);
    transition: color 500ms cubic-bezier(0.165, 0.84, 0.44, 1), transform 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
    p {
        margin-left: 5px;
    }
    &:hover,
    &:focus {
        color: rgb(30, 1, 252);
        transform: scale(1.02);
    }
` */
