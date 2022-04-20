import React, { memo } from 'react';
import { Card, Typography, Button, Select, MenuItem, ContentCopyIcon, ShareIcon } from '../../../components';
import COUNTRIES from '../../../commons/constants/countries';
import { CardPanelContentStyled, ItemStyled } from './style';

const navigatorHasShare = navigator.share;

function Panel({ updateAt, onChange, data, country, getCoviddata }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data;
 
  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  );

  const getValue = (value) => value >= 0 ? (value).toLocaleString('pt-BR') : 'sem retorno';

  const textCovid19 = `PAINEL COVID-19\n
País: ${country}\n
Total de casos: ${getValue(cases)}\n
Óbitos hoje: ${getValue(todayDeaths)}\n
Casos hoje: ${getValue(todayCases)}\n
Total de Mortos: ${getValue(deaths)}\n
Recuperados: ${getValue(recovered)}\n
Atualizado em: ${updateAt}\n\n`;

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://painel-covid19.netlify.app'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" title="Compartilhar" onClick={shareInfo}>
        <ShareIcon />
      </Button>
    </div>
  );

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" title="Copiar" onClick={copyInfo}>
        <ContentCopyIcon />
      </Button>
    </div>
  );

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h4" component="div" color="#1976d2" fontWeight="bold">PAINEL COVID-19</Typography>
          <Typography variant="body" component="div">Atualizado em: {updateAt}</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        <div>
          {navigatorHasShare ? renderShareButton : renderCopyButton}
        </div>
      </CardPanelContentStyled>
    </Card>
  );
}

export default memo(Panel);