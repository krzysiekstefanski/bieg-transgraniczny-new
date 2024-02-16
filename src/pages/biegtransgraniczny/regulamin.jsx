import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../../components/layout"
import Box from "../../atomic/atoms/Box/Box"
import Container from "../../atomic/molecules/Container/Container"
import { checkColor } from "../../atomic/utils"
import BgGreenSVG from "../../images/teal-bg-2.inline.svg"
import BgGreenSVG2 from "../../images/teal-bg-1.inline.svg"
import BgGreenSVG3 from "../../images/teal-bg-4.inline.svg"
import BgGreenSVG4 from "../../images/teal-bg-3.inline.svg"
import BgGreenSVG5 from "../../images/teal-bg-5.inline.svg"
import BgRedSVG from "../../images/red-bg-2.inline.svg"
import BgRedSVG2 from "../../images/red-bg-1.inline.svg"
import BgRedSVG3 from "../../images/red-bg-4.inline.svg"
import BgRedSVG4 from "../../images/red-bg-3.inline.svg"
import BgRedSVG5 from "../../images/red-bg-5.inline.svg"

import Rules from "../../assets/8.gtfb-regulamin-maj-2024.pdf"
import Heading from "../../atomic/atoms/Heading/Heading"

const Component = styled(Box)`
  h2,
  h3,
  p {
    color: ${checkColor("black")};
    font-weight: 400;

    strong {
      font-weight: 600;
    }
  }

  h2 {
    margin-bottom: 24px;
  }

  h3 {
    margin: 48px auto 0;
  }

  // h2,
  // h3,
  // p span {
  //   font-weight: 600;
  // }

  a {
    text-decoration: none;
    color: ${props => checkColor(props.theme + "00")};
  }

  .gatsby-image-wrapper {
    margin: 0 auto;

    img {
      object-fit: contain !important;
    }
  }
`

const TransgranicznyRegulaminPage = () => {
  const theme = "transgraniczny"

  return (
    <Layout theme={theme}>
      <Component theme={theme} padding="32px 0 48px" position="relative">
        <Box
          width="266px"
          position="absolute"
          top="0"
          right="calc((66vw - 1272px) * 0.25)"
          rightHD="0"
          zIndex="-1"
        >
          {theme === "niepodleglosci" ? <BgRedSVG /> : <BgGreenSVG />}
        </Box>
        <Box
          width="201px"
          position="absolute"
          top="30%"
          left="calc((65vw - 1272px) * 0.45)"
          leftHD="0"
          zIndex="-1"
        >
          {theme === "niepodleglosci" ? <BgRedSVG2 /> : <BgGreenSVG2 />}
        </Box>
        <Box
          width="166px"
          position="absolute"
          top="50%"
          right="calc((65vw - 1272px) * 0.35)"
          rightHD="0"
          zIndex="1"
        >
          {theme === "niepodleglosci" ? <BgRedSVG3 /> : <BgGreenSVG3 />}
        </Box>
        <Box
          width="202px"
          position="absolute"
          bottom="30%"
          left="calc((65vw - 1272px) * 0.45)"
          leftHD="0"
          zIndex="1"
        >
          {theme === "niepodleglosci" ? <BgRedSVG4 /> : <BgGreenSVG4 />}
        </Box>
        <Box
          width="280px"
          widthSM="304px"
          position="absolute"
          bottom="0"
          left="calc((65vw - 1272px) * 0.65)"
          leftHD="0"
          zIndex="-1"
        >
          {theme === "niepodleglosci" ? <BgRedSVG5 /> : <BgGreenSVG5 />}
        </Box>
        <Container>
          <Box column width="100%" max="800px" margin="0 auto">
            <Box
              margin="0 0 16px"
              marginSM="24px"
              marginMD="32px"
              marginLG="0 0 48px"
            >
              <StaticImage
                src="../../images/bieg-transgraniczny-regulamin-naglowek-p.png"
                width={789}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                style={{ margin: "0 auto" }}
              />
            </Box>
            <h1 style={{ margin: "0 auto 32px" }}>REGULAMIN</h1>
            <h2>
              <span>ORGANIZATOR:</span>
            </h2>
            <p>
              <span>
                Urząd Miasta i Gminy Gryfino - Centrum Sportu i Rekreacji w Gryfinie
              </span>
            </p>
            <br />
            <p>
              <strong>
                <span>PATRONAT HONOROWY:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>Burmistrz Miasta i Gminy Gryfino</span>
            </p>
            <br />
            <p>
              <strong>
                <span>PARTNERZY:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>Urząd Rejonowy Gartz,</span>
            </p>
            <p>
              <span>Starostwo Powiatowe w Gryfinie</span>
            </p>
            <br />
            <p>
              <strong>
                <span>CEL:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>upamiętnienie Święta Konstytucji 3 Maja,</span>
            </p>
            <p>
              <span>
                promocja biegania jako najprostszej formy aktywności sportowej,
              </span>
            </p>
            <p>
              <span>
                promocja gminy Gryfino, powiatu gryfińskiego oraz województwa zachodniopomorskiego,
              </span>
            </p>
            <p>
              <span>integracja społeczeństw gmin przygranicznych.</span>
            </p>
            <br />
            <p>
              <strong>
                <span>KONTAKT Z ORGANIZATOREM:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>
                Centrum Sportu i Rekreacji w Gryfinie, ul. Wodnika 1, 74-100 Gryfino,
              </span>
            </p>
            <p>
              <span>
                e-mail: <a mailto="sport@csir.gryfino.pl">sport@csir.gryfino.pl</a>, strona internetowa: <a href="www.csir.gryfino.pl" target="_blank" >www.csir.gryfino.pl</a>{" "}
              </span>
            </p>
            <p>
              <span>
                Oficjalna strona internetowa biegu: <a href="www.gryfinobiega.pl">www.gryfinobiega.pl</a>
              </span>
            </p>
            <p>
              <span>Dyrektor biegu – Jan Podleśny, tel 601 205 951</span>
            </p>
            <br />
            <p>
              <strong>
                <span>TERMIN I MIEJSCE:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>3.05.2024 r. (piątek) - Nabrzeże Miejskie w Gryfinie, ul. Energetyków 5</span>
            </p>
            <br />
            <p>
              <strong>
                <span>TRASA BIEGU:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>Dystanse:</span>
            </p>
            <p>
              <span>- 21,097 km z atestem</span>
            </p>
            <p>
              <span>- 10 km z atestem</span>
            </p>
            <p>
              <span>- nordic walking 10 km </span>
            </p>
            <p>
              <span>Trasy po drogach twardych – ulica i ścieżka rowerowa w Polsce i w Niemczech.</span>
            </p>
            <h3>
              <span>10 KM:</span>
            </h3>
            <StaticImage
              src="../../images/trasa1a.jpg"
              width={800}
              quality={85}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ margin: "24px auto 32px" }}
            />
            <StaticImage
              src="../../images/trasa1c.png"
              width={800}
              quality={85}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ margin: "24px auto 0" }}
            />
            <h3>Półmaraton:</h3>
            <StaticImage
              src="../../images/trasa2a.jpg"
              width={800}
              quality={85}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ margin: "24px auto 32px" }}
            />
            <StaticImage
              src="../../images/trasa2b.png"
              width={800}
              quality={85}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ margin: "24px auto 48px" }}
            />
            <p>
              <strong>
                <span>WARUNKI UCZESTNICTWA:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>
                Do startu w zawodach zostaną dopuszczeni zawodniczki i
                zawodnicy, którzy:
              </span>
            </p>
            <p>
              <span>
                - półmaraton - do dnia 3.05.2024 r. ukończą 18 rok życia,
              </span>
            </p>
            <p>
              <span>
                - bieg na 10 km , nordic walking 10 km - rocznik 2008 i starsi,
              </span>
            </p>
            <p>
              <span>
                - dokonają zgłoszenia za pośrednictwem elektronicznego formularza dostępnego na stronie internetowej w terminie zgodnym z regulaminem,
              </span>
            </p>
            <p>
              <span>
                - uiszczą opłatę startową w wysokości i w terminie zgodnym z regulaminem,
              </span>
            </p>
            <p>
              <span>- dokonają weryfikacji w biurze zawodów.</span>
            </p>
            <br />
            <p>
              <strong>
                <span>POMIAR CZASU:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>
                Pomiaru czasu i ustalenia kolejności na mecie będzie dokonywać
                firma DomTel-Sport Polska (<a herf="www.domtel-sport.pl" target="_blank">www.domtel-sport.pl</a>) za pomocą
                elektronicznych chipów umieszczonych w numerze startowym.
              </span>
            </p>
            <p>
              <span>
                Brak chipa podczas biegu skutkować będzie dyskwalifikacją.
                Limity czasu na pokonanie trasy:
              </span>
            </p>
            <p>
              <span>- półmaraton – 3 godz.</span>
            </p>
            <p>
              <span>- bieg na 10 km – 1 godz. 25 minut</span>
            </p>
            <p>
              <span>- nordic walking 10 km – 3 godz.</span>
            </p>
            <br />
            <p>
              <strong>
                <span>PROGRAM ZAWODÓW:</span>
              </strong>
            </p>
            <br />
            <p>
              <span style={{ textDecoration: "underline" }}>
                <span>2.05.2024 r. (czwartek)</span>
              </span>
            </p>
            <p>
              <span>godz. 16:30 – 19:00 biuro zawodów - weryfikacja</span>
            </p>
            <p>
              <span style={{ textDecoration: "underline" }}>
                <span>3.05.2024 r. (piątek)</span>
              </span>
            </p>
            <p>
              <span>godz. 8:30 – 11:00 biuro zawodów - weryfikacja</span>
            </p>
            <p>
              <span>
                godz. 12:00 start do półmaratonu, nordic walking 10 km
              </span>
            </p>
            <p>
              <span>godz. 12:20 start do biegu na 10 km</span>
            </p>
            <p>
              <span>ok. godz. 15:00 dekoracja zawodników</span>
            </p>
            <br />
            <p>
              <strong>
                <span>ZGŁOSZENIA:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>
              poprzez wypełnienie i wysłanie elektronicznego formularza poprzez stronę internetową
              <a herf="www.gryfinobiega.pl/biegtransgraniczny/zapisy/">www.gryfinobiega.pl/biegtransgraniczny/zapisy/</a> i w Biurze Zawodów w dniach 2.05.2024 oraz 3.05.2024 r.
              (pod warunkiem niewyczerpania limitu zawodników).
              </span>
            </p>
            <p>
              <span>
                Formularz zgłoszeniowy będzie dostępny od 20.02.2024 r.
              </span>
            </p>
            <p>
              <span>
                Limit przyjęć do Festiwalu wynosi 300 zawodników
              </span>
            </p>
            <p>
              <span>
                Organizator zastrzega możliwość zmiany limitu zawodników w zależności od zainteresowania naszymi zawodami.
              </span>
            </p>
            <br />
            <p>
              <strong>
                <span>OPŁATY:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>
                - startowa – płatna przelewem na konto Centrum Sportu i
                Rekreacji Gryfino nr konta: <br />
                PL 63124062921111001128488541 SWIFT PKOPPLPW Bank PEKAO S.A. I
                O/Gryfino. Opłata powinna być wpłacona <span style={{ textDecoration: "underline" }}>w terminie 7 dni od daty
                zgłoszenia</span>, nie później jednak jak do
                29.04.2024 r. (dla osób, które zgłosiły się po 22.04.2024 r.). W tytule przelewu proszę wpisać imię
                i nazwisko uczestnika oraz dopisek „Bieg Transgraniczny”. Opłata może być wnoszona także zbiorowo.
                Wysokość opłaty zależna jest od terminu jej dokonania (<strong>liczy się data zaksięgowania opłaty na
                koncie</strong>)
              </span>
            </p>
            <StaticImage
              src="../../images/wplatybieg-p1.png"
              width={800}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ margin: "24px auto 32px" }}
            />
            <StaticImage
              src="../../images/wplatybieg-p2.png"
              width={800}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ margin: "24px auto 32px" }}
            />
            <p>
              <span>
                - Za osobę zgłoszoną uważa się osobę, która wypełniła i przesłała formularz zgłoszeniowy oraz
                  dokonała opłaty startowej. Osoby zgłoszone, które nie dokonają opłaty startowej w terminie 7 dni od
                  daty zgłoszenia, mogą zostać usunięci z listy startowej Biegu Transgranicznego.
              </span>
            </p>
            <p>
              <span>
                - Dokonanie opłaty startowej będzie widoczne w ciągu 3 dni roboczych na liście zgłoszeniowej 
                <a herf="www.gryfinobiega.pl/biegtransgraniczny/lista-startowa/">www.gryfinobiega.pl/biegtransgraniczny/lista-startowa/</a>.
              </span>
            </p>
            <p>
              <span>
                - W przypadku rezygnacji z uczestnictwa w biegu opłata startowa nie podlega zwrotowi a pakiet startowy nie przysługuje. Istnieje możliwość scedowania dokonanej opłaty startowej na inną osobę.
              </span>
            </p>
            <p>
              <span>
                - Zgłoszony zawodnik, który chce otrzymać fakturę za opłatę startową powinien o tym poinformować
                  organizatora nie później, jak na 2 tygodnie po dokonaniu płatności. Należy przesłać e-maila na adres
                  <a mailto="sport@csir.gryfino.pl">sport@csir.gryfino.pl</a> z danymi potrzebnymi do wystawienia faktury.
              </span>
            </p>
            <br />
            <p>
              <strong>
                <span>KLASYFIKACJE:</span>
              </strong>
            </p>
            <br />
            <p>
              <strong>
                <span>Bieg na 10 km i półmaraton</span>
              </strong>
            </p>
            <br />
            <p>
              <span>* klasyfikacja generalna kobiet i mężczyzn – po 3 puchary</span>
            </p>
            <p>
              <span>* puchar dla najlepszych (kobieta i mężczyzna), mieszkańców Gminy Gryfino</span>
            </p>
            <p>
              <span>* klasyfikacja w kategoriach wiekowych - statuetka dla zwycięzcy (z pominięciem zawodników nagradzanych w klasyfikacji generalnej)</span>
            </p>
            <br />
            <p>
              <span>K16, M16, 16 - 29 lat (2008 - 1993)</span>
            </p>
            <p>
              <span>K30, M30, 30 - 39 lat (1994- 1983)</span>
            </p>
            <p>
              <span>K40, M40, 40 - 49 lat (1984 - 1973)</span>
            </p>
            <p>
              <span>K50, M50, 50 - 59 lat (1974 - 1963)</span>
            </p>
            <p>
              <span>K60, 60 lat i więcej (1964 i starsze)</span>
            </p>
            <p>
              <span>M60, 60 - 69 lat (1964 - 1953)</span>
            </p>
            <p>
              <span>M70, 70 lat i więcej (1954 i starsi)</span>
            </p>
            <br />
            <p>
              <strong>
                <span>Nordic Walking</span>
              </strong>
            </p>
            <br />
            <p>
              <span>* klasyfikacja generalna kobiet i mężczyzn – po 3 puchary</span>
            </p>
            <p>
              <span>* puchar dla najlepszych (kobieta i mężczyzna), mieszkańców Gminy Gryfino</span>
            </p>
            <p>
              <span>* klasyfikacja w kategoriach wiekowych - statuetka dla zwycięzcy (z pominięciem zawodników nagradzanych w klasyfikacji generalnej)</span>
            </p>
            <br />
            <p>
              <span>K16, M16, 16 - 39 lat (2008 - 1983)</span>
            </p>
            <p>
              <span>K40, M40, 40 - 49 lat (1984 - 1973)</span>
            </p>
            <p>
              <span>K50, M50, 50 - 59 lat (1974 - 1963)</span>
            </p>
            <p>
              <span>K60, 60 lat i więcej (1964 i starsze)</span>
            </p>
            <p>
              <span>M60, 60 lat i więcej (1964 i starsi)</span>
            </p>
            <br />
            <p>
              <strong>
                <span>NAGRODY:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>
                * zwycięzcy poszczególnych biegów, kobiety i mężczyźni, otrzymają nagrodę finansową w wysokości:
              </span>
            </p>
            <p>
              <span>
                - półmaraton – 700 zł
              </span>
            </p>
            <p>
              <span>
                - bieg na 10 km – 500 zł
              </span>
            </p>
            <p>
              <span>
                - nordic walking – 300 zł
              </span>
            </p>
            <p>
              <span>
                * wszyscy, <span style={{ textDecoration: "underline" }}>zweryfikowani</span> zawodnicy otrzymają pakiet startowy (numer, chip)
              </span>
            </p>
            <p>
              <span>
                * koszulka okolicznościowa w II wariancie opłaty startowej,
              </span>
            </p>
            <p>
              <span>
                * w klasyfikacji generalnej kobiet i mężczyzn w poszczególnych
                biegach i w Nordic Walking – po 3 puchary,
              </span>
            </p>
            <p>
              <span>
                * zwycięzcy w poszczególnych kategoriach otrzymają statuetki,
              </span>
            </p>
            <p>
              <span>
                * puchar dla najlepszej zawodniczki i zawodnika Gminy Gryfino,
              </span>
            </p>
            <p>
              <span>
                -
                <strong>
                  {" "}
                  zawodnicy nagrodzeni w klasyfikacji generalnej kobiet i mężczyzn nie będą nagradzani w kategoriach wiekowych,
                </strong>
              </span>
            </p>
            <p>
              <span>
                - wszyscy, którzy ukończą bieg w limicie czasu otrzymają
                pamiątkowe medale,
              </span>
            </p>
            <p>
              <span>
                -bony podarunkowe otrzymają zawodnicy, którzy w swoim biegu
                zajmą następujące miejsce na mecie:
                <strong>
                  <br />{" "}
                </strong>
                <br />{" "}
                <strong>
                  Bieg 10 km i półmaraton: 7, 13, 18, 22, 25, 31, 36, 39, 45, 51, 58, 65, 76, 83, 100
                </strong>
                <br />{" "}
                <strong>
                  Nordic Walking: 6, 8, 15, 18, 20, 24, 26, 30, 33, 36.
                </strong>
              </span>
            </p>
            <br />
            <p>
              <strong>
                <span>WERYFIKACJA:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>
                W celu weryfikacji każdy zawodnik musi zgłosić się osobiście w
                biurze zawodów (
                <strong>
                  nie ma możliwości odebrania pakietu startowego w imieniu innej
                  osoby
                </strong>
                ), w budynku I Liceum Ogólnokształcącego w Gryfinie, ul.
                Niepodległości 16 (400 m od miejsca startu):
              </span>
            </p>
            <p>
              <span>
                - W przeddzień zawodów - - 2.05.2024 r. w godz. 16:30 – 19:00
              </span>
            </p>
            <p>
              <span>- W dniu zawodów - 3.05.2024 r. od godz. 8:30 – 11:00</span>
            </p>
            <p>
              <span>
                - Zawodnicy powyżej 18 roku życia podpisują oświadczenie o biegu
                na własną odpowiedzialność.
              </span>
            </p>
            <p>
              <span>
                - Osoby w wieku 16-18 lat (które w dniu biegu tj. 3 maja 2024
                nie osiągnęły jeszcze pełnoletności) zobowiązane są do
                posiadania pozwolenia na udział od rodziców lub prawnych
                opiekunów, z ich podpisem i nr PESEL.
              </span>
            </p>
            <br />
            <p>
              <span>
                <strong>
                  Warunkiem dopuszczenia ich do startu jest obecność rodzica lub
                  opiekuna prawnego wraz z dowodem osobistym w momencie
                  weryfikacji zawodnika w biurze zawodów.
                </strong>
                Powyższe nie dotyczy
                zawodników zrzeszonych w klubach sportowych, posiadających
                aktualne badania lekarskie wystawione przez lekarza
                sportowego, które należy okazać przy weryfikacji.
                <strong>
                  Osobyponiżej 16 roku życia (liczy się rok urodzenia) nie będą do biegu przyjęte.
                </strong>
                <br />
              </span>
            </p>
            <StaticImage
              src="../../images/weryfikacja.jpg"
              width={800}
              quality={85}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ margin: "24px auto 32px" }}
            />
            <br />
            <p>
              <strong>
                <span>WZÓR OŚWIADCZENIA (osoby niepełnoletnie)</span>
              </strong>
            </p>
            <br />
            <p>
              <span>
                Oświadczam, że znany jest mi stan zdrowia syna/córki JANA
                KOWALSKIEGO
              </span>
            </p>
            <p>
              <span>
                i może wziąć udział w 8. edycji Gryfińskiego Transgranicznego
                Festiwalu Biegowego (bieg na 10 000 m).
              </span>
            </p>
            <p>
              <span>
                Wyrażam zgodę na przetwarzanie danych osobowych syna/córki dla
                celów weryfikacji i umieszczenia w komunikacie końcowym, a także
                dla celów marketingowych biegu.
              </span>
            </p>
            <br />
            <br />
            <Box display="grid" columns="190px 100px" gap="30px">
              <Box column>
                <p>
                  <span>..................................</span>
                </p>
                <p>
                  <span>czytelny podpis rodzica</span>
                </p>
              </Box>
              <Box column>
                <p>
                  <span>..................................</span>
                </p>
                <p>
                  <span>PESEL rodzica</span>
                </p>
              </Box>
            </Box>

            <br />
            <br />
            <br />
            <p>
              <strong>
                <span>SPRAWY RÓŻNE:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>
                - Pakiet startowy przysługuje zawodnikowi, który zamierza w
                biegu wystartować.
              </span>
            </p>
            <p>
              <span>
                - Przydzielone numery startowe powinny się znajdować na klatce
                piersiowej zawodnika,
              </span>
            </p>
            <p>
              <span>
                - Komunikat końcowy będzie dostępny na stronach <a href="csir.gryfino.pl" target="_blank">csir.gryfino.pl</a>,
                <a href="maratonypolskie.pl" target="_blank">maratonypolskie.pl</a>, <a href="domtel.pl" target="_blank">domtel.pl</a>, <a href="gryfinobiega.pl">gryfinobiega.pl</a>,
              </span>
            </p>
            <p>
              <span>
                - Galeria zdjęć będzie dostępna na stronach <a href="csir.gryfino.pl" target="_blank">csir.gryfino.pl</a>,
                <a href="maratonypolskie.pl" target="_blank">maratonypolskie.pl</a>, <a href="gryfinobiega.pl">gryfinobiega.pl</a>,
              </span>
            </p>
            <p>
              <span>
                - Przebieralnia oraz toaleta znajdować się będzie w miejscu
                weryfikacji,
              </span>
            </p>
            <p>
              <span>- Oznakowanie trasy co każdy kilometr,</span>
            </p>
            <p>
              <span>
                - Wszyscy zawodnicy startują w biegu na własną odpowiedzialność. Organizator zaleca, aby ubezpieczyli się na własny koszt od następstw nieszczęśliwych wypadków,
              </span>
            </p>
            <p>
              <span>
                - Organizator zapewnia wodę niegazowaną na trasie biegu,
              </span>
            </p>
            <p>
              <span>
                - Organizator nie odpowiada za zaginione rzeczy osobiste
                zawodników w czasie trwania zawodów.
              </span>
            </p>
            <p>
              <span>- W pobliżu startu znajdować się będzie DEPOZYT,</span>
            </p>
            <p>
              <span>
                - Parking dla samochodów znajduje się w miejscu weryfikacji (wjazd od ul. Niepodległości, od strony południowej miasta),
              </span>
            </p>
            <p>
              <span>- Bieg odbędzie się bez względu na pogodę,</span>
            </p>
            <p>
              <span>
                - Uczestnicy mają obowiązek zachowania zasad fair-play podczas
                trwania zawodów,
              </span>
            </p>
            <p>
              <span>
                - Po zakończeniu biegu zawodnicy otrzymają posiłek regeneracyjny wraz z napojem izotonicznym,
              </span>
            </p>
            <p>
              <span>
                - Po zakończeniu biegu każdy zawodnik będzie mógł skorzystać z darmowego, 1-godzinnego pobytu
                  w Centrum Wodnym „Laguna” (ok. 800 m od mety), po okazaniu numeru startowego w kasie CW.
                  Zaproszenie jakie otrzyma zawodnik będzie można zrealizować wyłącznie w dniu biegu - 3 maja 2024r.
              </span>
            </p>
            <p>
              <span>
                - Organizatorzy zastrzegają sobie prawo interpretacji
                niniejszego regulaminu.
              </span>
            </p>
            <br />
            <p>
              <span>
                <strong>
                  UWAGA!!! Organizator nie przewiduje możliwości umieszczania na
                  punktach z wodą odżywek zawodników.
                </strong>
              </span>
            </p>
            <br />
            <br />
            <p>
              <span>
              W związku z zapisami art. 13 ROZPORZĄDZENIA PARLAMENTU EUROPEJSKIEGO I RADY (UE)
              2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem
              danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
              95/46/WE (RODO) (Dz.U.UE. z 2016 r., L 119, poz. 1) informujemy, że: CSiR Gryfino, są
              administratorami danych osobowych zbieranych w celu organizacji i przeprowadzenia
              8. Gryfińskiego Transgranicznego Festiwalu Biegowego. Państwa dane osobowe przetwarzane będą
              zgodnie z obowiązującymi przepisami prawa a rodzaj pobieranych danych i sposób ich przetwarzania
              jest niezbędny do prawidłowej organizacji biegu. W celu wykonania umowy przekazujemy Państwa dane
              firmie DOMTEL-SPORT ul. Aluchny-Emelianow 23, 76-200 Słupsk, NIP: 839-002-80-09 zajmującej się
              prowadzeniem zapisów na biegi oraz pomiarem czasu na zawodach. Mają Państwo prawo do bezpłatnej
              informacji dotyczącej Państwa danych osobowych, które są u nas przechowywane, a także prawo do ich
              sprostowania, ograniczenia przetwarzania, usunięcia tych danych lub ich przeniesienia. W przypadku
              pytań dotyczących gromadzenia, przetwarzania i wykorzystania Państwa danych osobowych,
              sprostowania, blokowania czy kasowania danych oraz w celu odwołania udzielonych zgód lub wyrażenia
              sprzeciwu wobec wykorzystywania określonych danych, prosimy o kontakt z administratorem danych:
              CSiR w Gryfinie, ul. Sportowa 3, 74-100, Gryfino, sport@osir.gryfino.pl Ponadto przysługuje Państwu
              prawo do złożenia skargi do właściwego organu nadzorczego.
              </span>
            </p>
            <br />
            <br />
            <p>
              <span>Oświadczenie zawodników:</span>
            </p>
            <br />
            <p>
              <span>
              Oświadczam, że zostałem(łam) poinformowany(na) o prawie wglądu do moich danych oraz do złożenia
              wniosków o ich poprawienie. Przekazanie danych osobowych Uczestnika jest dobrowolne, jednakże
              stanowi warunek uczestnictwa w 8 Gryfińskim Transgranicznym Festiwalu Biegowym. Wyrażam zgodę
              na przetwarzanie moich danych osobowych, w tym do ich udostępnienia przez CSiR Gryfino, w celu
              zamieszczania wyników z biegu oraz na nieodpłatną publikację wizerunku utrwalonego w przekazach
              telewizyjnych, internetowych, radiu, gazetach, magazynach i umieszczania wizerunku w materiałach
              promocyjno- reklamowych wydawanych przez organizatora. Ponadto, wyrażam zgodę na przekazywanie
              mi za pomocą poczty elektronicznej informacji o przyszłych imprezach Organizatora, a także do
              gromadzenia moich danych do potrzeb administracyjnych i analitycznych.
              Wyrażam także zgodę na nieodpłatne wykorzystanie mojego wizerunku utrwalonego w formie fotografii
              lub zapisu video. Na podstawie par.2 ust.1 pkt 6 Rozporządzenia Ministra Edukacji Narodowej z dnia 12
              września 2001r. w sprawie szczególnych zasad i warunków prowadzenia działalności w dziedzinie
              rekreacji ruchowej oświadczam, że jestem zdolny(a) i nie występują w przypadku mojej osoby
              przeciwwskazania zdrowotne do udziału w 8 Gryfińskim Transgranicznym Festiwalu Biegowym.
              </span>
            </p>
            <br />
            <p>
              <strong>
                <span>Zgłoszenie się do zawodów jest równoznaczne z akceptacją powyższego oświadczenia.</span>
              </strong>
            </p>
            <br />
            <p style={{ marginBottom: "48px" }}>
              <span>Dyrektor Biegu - Jan Podleśny</span>
            </p>
            <a href={Rules}>Pobierz Regulamin w formie pliku PDF</a>
          </Box>
        </Container>
      </Component>
    </Layout>
  )
}

export default TransgranicznyRegulaminPage
