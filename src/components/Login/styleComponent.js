import styled from 'styled-components';

export const ResponsiveContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => (props.$darkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginCardContainer = styled.div`
  width: 80%;
  max-width: 400px;
  background-color: ${(props) => (props.$darkTheme ? '#000000' : '#ffffff')};
  box-shadow: ${(props) =>
    props.$darkTheme ? 'none' : '0px 4px 16px 0px #f1f5f9'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 40px 50px 40px;
  border-radius: 10px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  margin-bottom: ${(props) => (props.$normalContainer ? '20px' : '6px')};
  width: 100%;
  padding-left: 0px;
`;

export const Label = styled.label`
  color: ${(props) => (props.$darkTheme ? '#64748b' : '#64748b')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
`;

export const ShwPswLabel = styled.label`
  color: ${(props) => (props.$darkTheme ? '#64748b' : '#0f0f0f')};
  font-size: 14px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0px 10px 15px;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  outline: none;
  background-color: transparent;
  color: ${(props) => (props.$darkTheme ? '#ffffff' : '#000000')};
`;

export const NxtWatchLogo = styled.img`
  margin-bottom: 20px;
  width: 130px;
`;

export const ShowPswInput = styled(Input)`
  width: 20px;
  align-self: start;
`;

export const LoginBtn = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 14px;
  padding: 10px;
  width: 100%;
`;

export const Error = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 12px;
  align-self: flex-start;
`;
