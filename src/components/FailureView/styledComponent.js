import styled from 'styled-components';

export const FailedViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 90vh;
`;

export const FailedViewImage = styled.img`
  width: 220px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const FailedViewHeading = styled.h1`
  color: ${(props) => (props.$darkTheme ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const FailedViewDesc = styled.p`
  color: ${(props) => (props.$darkTheme ? '#64748b' : '#475569')};
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const RetryBtn = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  outline: none;
  hover: cursor;
  font-family: 'Roboto';
  font-size: 16px;
  padding: 10px 20px 10px 20px;
`;
