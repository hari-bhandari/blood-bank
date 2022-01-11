import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get';
import {Row as Rows} from 'react-styled-flexboxgrid';

const SettingsForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

const HeadingSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Title = styled.h3`
  font-family: ${themeGet('fonts.heading', 'sans-serif')};
  font-size: ${themeGet('fontSizes.lg', '21')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.text.bold', '#0D1136')};
`;

const SettingsFormContent = styled.div`
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`;

// const Input = styled(Inputs)`
//   @media only screen and (min-width: 0em) and (max-width: 47.99em) {
//     margin-bottom: 30px;
//   }
// `;
export const FormContainer=styled.form`
    display: flex;
    flex-direction: column;
`
export const InputContainer=styled.div`
  margin-top: 10px;
`
const Row = styled(Rows)`
  margin-bottom: 40px;

  @media only screen and (min-width: 0em) and (max-width: 47.99em) {
    margin-bottom: 30px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;

  .radioGroup {
    flex-grow: 1;
    justify-content: space-between;

    label {
      margin-top: 0;
      flex: calc(33.333333333% - 10px);
      max-width: calc(33.333333333% - 10px);
      margin-bottom: 15px;

      &:nth-child(3n) {
        margin-right: 0;
      }

      @media (max-width: 700px) {
        flex: calc(50% - 10px);
        max-width: calc(50% - 10px);

        &:nth-child(3n) {
          margin-right: 15px;
        }

        &:nth-child(2n) {
          margin-right: 0;
        }
      }

      @media (max-width: 480px) {
        flex: 100%;
        max-width: 100%;
        margin-right: 0;

        &:nth-child(3n) {
          margin-right: 0;
        }

        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }
  }

  .add-button {
    flex: calc(33.3333333333% - 10px);
    max-width: calc(33.3333333333% - 10px);
    flex-shrink: 0;
    height: auto;
    min-height: 77px;
    border: 1px dashed ${themeGet('colors.gray.500', '#f1f1f1')};
    margin-bottom: 15px;
    margin-left: 0;
    margin-right: auto;
    &:hover {
      border-color: ${themeGet('colors.primary.regular', '#009e7f')};
    }

    @media (max-width: 700px) {
      flex: calc(50% - 10px);
      max-width: calc(50% - 10px);
    }

    @media (max-width: 480px) {
      flex: 100%;
      max-width: 100%;
    }
  }
`;
const PhotoUploadContainer=styled.div`
  .fileContainer {
    font-family: 'Poppins', serif;
    background: ${props => props.background};
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

export {
    SettingsForm,
    HeadingSection,
    Title,
    SettingsFormContent,
    PhotoUploadContainer,
    // Input,
    Row,
    ButtonGroup,
};
