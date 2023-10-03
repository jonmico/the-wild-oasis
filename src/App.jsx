import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading $as={'h1'}>The Wild Oasis</Heading>
        <Heading $as={'h2'}>Check in and out</Heading>
        <Button onClick={() => alert('Hi, Mom.')}>Check In</Button>
        <Button onClick={() => alert('Bye, Mom.')}>Check Out</Button>
        <Heading $as={'h3'}>Form</Heading>
        <Input type={'number'} placeholder={'Number of guests'} />
      </StyledApp>
    </>
  );
}
