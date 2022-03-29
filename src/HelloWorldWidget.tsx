import styled from 'styled-components';

interface Props {
  name: string | null;
}

const Wrapper = styled.div`
  padding: 1em;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  font-size: 2.5em;
  font-weight: bold;
  text-align: center;
`;

const HelloWorldWidget = ({ name }: Props) => {
  return (
    <Wrapper>
      <Text>Hello {name || 'world'}</Text>
    </Wrapper>
  );
};

export default HelloWorldWidget;
