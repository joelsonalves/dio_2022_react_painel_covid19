import styled from 'styled-components';
import { CardContent, Typography } from '../../../components';

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1rem;
`;

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 2rem;
  color: #1976d2;
`;

export const CardContentStyled = styled(CardContent)`
  border-left: 8px solid ${({ color }) => color || '#5d78ff'};
`;

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
`;

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`;

export const FooterStyled = styled(CardContent)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: white;
  margin-top: 2rem;
  border-radius: 5px 5px;
`;