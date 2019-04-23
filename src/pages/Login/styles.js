import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: stretch;
  background-color: #7159c1;
  flex: 1;
  justify-content: center;
  padding: 30px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  border-radius: 4px;
  color: #333;
  font-size: 16px;
  height: 52px;
  padding: 0 20px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  background: #5dc4b3;
  border-radius: 4px;
  height: 52px;
  justify-content: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Error = styled.Text`
  color: #ff817e;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;
