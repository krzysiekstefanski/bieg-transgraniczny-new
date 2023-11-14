import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import Box from "../../atoms/Box/Box"
import Container from "../../molecules/Container/Container"
import Text from "../../atoms/Text/Text"
import LinkInternal from "../../atoms/Link/Link"
import Button from "../../atoms/Button/Button"
import BgSVG from "../../../images/background-stripes-2.inline.svg"
import BgGreenSVG from "../../../images/teal-bg-1.inline.svg"
import BgRedSVG from "../../../images/red-bg-1.inline.svg"
import { colors } from "../../colors"
import CustomLink from "../../atoms/Link/Link"

const Component = styled(Box)`
  .gatsby-image-wrapper {
    max-width: 756px;
    margin: 0 auto;

    img {
      object-fit: contain !important;
    }
  }
`

const BoxSVG = styled(Box)`
  svg {
    path {
      &:nth-child(1) {
        fill: ${props => props.theme === 'transgraniczny' ? colors.transgraniczny40 : colors.niepodleglosci80};
      }
      &:nth-child(2) {
        fill: ${props => props.theme === 'transgraniczny' ? colors.transgraniczny60 : colors.niepodleglosci60};
      }
      &:nth-child(3) {
        fill: ${props => props.theme === 'transgraniczny' ? colors.transgraniczny20 : colors.niepodleglosci60};
      }
      &:nth-child(4) {
        fill: ${props => props.theme === 'transgraniczny' ? colors.transgraniczny00 : colors.niepodleglosci60};
      }
      &:nth-child(5) {
        fill: ${props => props.theme === 'transgraniczny' ? colors.transgraniczny20 : colors.niepodleglosci20};
      }
      &:nth-child(6) {
        fill: ${props => props.theme === 'transgraniczny' ? colors.transgraniczny60 : colors.niepodleglosci00};
      }
    }
  }
`;

const Banner = ({ theme }) => (
  <Component
    id="bieg"
    width="100%"
    backgroundColor="grey95"
    padding="0"
    position="relative"
  >
    <Box width="100%" widthXL="80%" position="absolute" top="0" left="-50px">
      <BgSVG />
    </Box>
    <BoxSVG
      theme={theme}
      width="201px"
      position="absolute"
      bottom="-20px"
      left="0"
      zIndex="1"
      opacity="0.2"
      opacityMD="1"
    >
      {theme === "niepodleglosci" ? <BgRedSVG /> : <BgGreenSVG />}
    </BoxSVG>
    <Container position="relative" zIndex="1">
      <Box
        column
        align="center"
        width="100%"
        max="1030px"
        backgroundColor="white"
        radius="8px"
        shadowMD="md"
        paddingMD="40px"
        margin="0 auto"
        position="relative"
        zIndex="1"
      >
        {theme === "niepodleglosci" ? (
          <StaticImage src="../../../images/bieg-niepodleglosci.jpg" />
        ) : (
          // <StaticImage src="../../../images/logobaner_transgr.2023.jpg" />
          <StaticImage src="../../../images/7.gtfb._00020.jpg" />
        )}
        {/* <Box column width="100%" max="664px" margin="32px 0 24px"> */}
        <Box column width="100%" max="756px" margin="32px 0 24px">
          {/* <Text
            size="contentM"
            align="center"
            margin="0 0 16px"
            marginMD="0 0 32px"
          >
            Na chętnych czekać będą dwie trasy biegowe - 10 km i 21,097 km, obie
            z atestem. Razem z biegaczami na 10 kilometrową trasę wyruszą
            zawodnicy Nordic Walking.
          </Text>
          <Text
            size="contentM"
            align="center"
            margin="0 0 16px"
            marginMD="0 0 32px"
          >
            Zapisy rozpoczynamy w środę 1 marca i do końca marca startowe 90 zł
            a potem opłata rośnie.
          </Text>
          <Text size="contentM" align="center">
            Zanim się zapiszecie koniecznie przeczytajcie{" "}
            <LinkInternal variant={theme} to={`/bieg${theme}/regulamin`}>
              regulamin
            </LinkInternal>
            .
          </Text> */}
          {theme === "niepodleglosci" ? (
            <Box column gap="16px">
              <Button as={Link} to={`/bieg${theme}/lista-startowa`} variant={theme}>Lista Startowa</Button>
              <Button as={Link} to={`/bieg${theme}/wyniki`} variant={theme}>Wyniki</Button>
              <Button as={Link} to={`https://photos.google.com/share/AF1QipPQQJTcSPJ4vxZxL3ILmgmSPSSFC0JKNcVVoc-byitoS_pDI8SYEJiRqBBzq7l8ig?key=U2V1anhDTGNpV280NHEwU2otNnh3Ym9EdldHNU1n`} variant={theme}>Zdjęcia</Button>
              <Button as={Link} to={`/bieg${theme}/regulamin`} variant={theme}>Regulamin</Button>
            </Box>
          ) : (
            <>
              <Text
                size="contentM"
                margin="0 0 8px"
                marginMD="0 0 16px"
              >
                W 7 edycji Gryfińskiego Transgranicznego Festiwalu Biegowego wzięło udział łacznie 237 zawodników.
              </Text>
              <Text
                size="contentM"
                margin="0 0 8px"
                marginMD="0 0 16px"
              >
                Pogoda dopisała i nic nie stało na przeszkodzie aby uzyskiwać dobre rezultaty i bylo to widoczne jak zawodnicy walczyli o lepszy czas do samej mety.
              </Text>
              <Text
                size="contentM"
                margin="0 0 8px"
                marginMD="0 0 16px"
              >
                W biegu na 10 km zwyciężył Paweł Turbak z Sulęcina pokonując trasę w 34:58 s. Jako drugi na mecie zameldował się Andrzej Partika ze Szczecina (36:24 s), który wyprzedził trzeciego na mecie Jarosława Żabickiego o  blisko 30 s. Wśród kobiet triumfowała gryfinianka Julia Sanecka, która na pokonanie trasy potrzebowała 39 min. i 46 sekund. Jako druga mineła mętę Justyna Hałka z Łobza (43:24 s) a jako trzecia Klaudia Kobydecka (Kostrzyń nad Odrą) w czasie 44:42 s.
              </Text>
              <Text
                size="contentM"
                margin="0 0 8px"
                marginMD="0 0 16px"
              >
                W biegu na 21,097 km (półmaraton) na pierwszym miejscu wbiegł Andrzej Pańko z Żarczyna z bardzo dobrym rezultatem - 1:14:52 s. Kolejni zawodnicy wbiegali już ze sporą stratą bo Bartosz Przekopowicz uzyskał wynik 1:19:06 s i kolejnego na mecie Jacka Rudzińskiego z Gryfina wyprzedził o 7 s. Najlepszą wśród kobiet okazała się Beata Białek (także z Żarczyna!) pokonując półmaraton w czasie 1:26:59 s. wyprzedzając drugą zawodniczkę Iwonę Drozdek z Kobylanki o ponad 5 minut (1:32:14). Jako trzecia na metę melduje się Klaudia Czajczyńska ze Szczecina przegrywając drugie miejsce o równą minutę.
              </Text>
              <Text
                size="contentM"
                margin="0 0 8px"
                marginMD="0 0 16px"
              >
                W rywalizacji w Nordic Walking na 10 km zwyciężył Marcin Wesołowski ze Szczecina przed Pawłem Chojnackim z Mierzyna i Tomaszem Strzelcem z Gryfina. W klasyfikacji kobiet zwyciężyła Marzena Olejnik ze Szczecina przed Anną Stasiowską z Gryfina i Agnieszką Górską ze Szczecina.
              </Text>
              <CustomLink href="https://domtel-sport.pl/uploads/wyniki/14947.pdf" target="_blank"
                rel="noopener noreferrer" margin="0 0 4px">Komunikat z biegu na 10 km.</CustomLink>
              <CustomLink href="https://domtel-sport.pl/uploads/wyniki/14949.pdf" target="_blank"
                rel="noopener noreferrer" margin="0 0 4px">Komunikat z półmaratonu.</CustomLink>
              <CustomLink href="https://domtel-sport.pl/uploads/wyniki/14948.pdf" target="_blank"
                rel="noopener noreferrer" margin="0 0 8px">Komunikat z Nordic Walking na 10 km.</CustomLink>
            </>
          )}
        </Box>
        {/* <Button as={Link} to={`/bieg${theme}/zapisy`} variant={theme}> */}
        {theme === "transgraniczny" && (
          <Button as={Link} to={`#galeria`} variant={theme}>
            Zobacz zdjęcia
          </Button>
        )}
      </Box>
    </Container>
  </Component>
)

export default Banner
