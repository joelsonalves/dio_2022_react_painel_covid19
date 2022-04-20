import React, { memo } from 'react';
import { Typography } from '../../../components';
import { FooterStyled } from './style';

function Footer() {
  
  return (
    <footer>
      <FooterStyled>
        <Typography variant="p" component="div" color="#1976d2" fontWeight="bold">Projeto DIO React JS. Desenvolvido por Joelson Alves.</Typography>
      </FooterStyled>
    </footer>
  );
}

export default memo(Footer);