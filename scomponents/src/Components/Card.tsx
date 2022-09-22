import { StyledCard } from './Styles/Card.styled';

interface IItems {
  id: number;
  title: string;
  body: string;
  image: string;
}

interface IProps {
  item: IItems;
}

export const Card = ({ item: { id, title, body, image } }: IProps) => {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt={title} />
      </div>
    </StyledCard>
  );
};
