interface Props {
  name: string | null;
}

const HelloWorldWidget = ({ name }: Props) => (
  <div>Hello {name || 'world'}</div>
);

export default HelloWorldWidget;
