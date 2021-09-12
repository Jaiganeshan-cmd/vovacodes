import styled from 'styled-components';

interface Props {
  bgImg: string;
  cardGradientColor: string;
}

export const Container = styled.article<Props>`
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({
    bgImg,
    cardGradientColor,
  }) => `linear-gradient(to top, ${cardGradientColor}, transparent 100%),
    url(${bgImg}) center/cover`};

  min-height: 200px;
  aspect-ratio: 1/1;
`;
export const TextWrapper = styled.div`
  p {
    color: rgba(255, 255, 255, 1);
    text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
      0px -4px 10px rgba(255, 255, 255, 0.3);
  }
`;

export const NewsHeader = styled.a`
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;

  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const ActionPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  div {
    padding: 0.5rem;
  }
`;
