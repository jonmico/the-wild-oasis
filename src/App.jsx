import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';
import Row from './ui/Row';

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row $type={'horizontal'}>
            <Heading $as={'h1'}>The Wild Oasis</Heading>
            <div>
              <Heading $as={'h2'}>Check in and out</Heading>
              <Button onClick={() => alert('Hi, Mom.')}>Check In</Button>
              <Button
                $variation={'secondary'}
                $size={'small'}
                onClick={() => alert('Bye, Mom.')}
              >
                Check Out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading $as={'h3'}>Form</Heading>
            <form>
              <Input type={'number'} placeholder={'Number of guests'} />
              <Input type={'number'} placeholder={'Number of guests'} />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}
