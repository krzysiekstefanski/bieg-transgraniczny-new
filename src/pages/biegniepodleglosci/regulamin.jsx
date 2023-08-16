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

import Rules from "../../assets/regulamin-niepodległosci-2023.pdf"
import Heading from "../../atomic/atoms/Heading/Heading"

const Component = styled(Box)`
  h2,
  h3,
  p {
    color: ${checkColor("black")};
    font-weight: 400;
  }

  h2 {
    margin-bottom: 24px;
  }

  h3 {
    margin: 48px auto 0;
  }

  h2,
  h3,
  p span {
    font-weight: 600;
  }

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

const NiepodleglosciRegulaminPage = () => {
  const theme = "niepodleglosci"

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
              direction="column"
              margin="0 0 16px"
              marginSM="24px"
              marginMD="32px"
              marginLG="0 0 48px"
            >
              {/* <StaticImage
                src="../../images/bieg-transgraniczny-regulamin-naglowek.png"
                width={800}
                quality={85}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                style={{ margin: "0 auto" }}
              /> */}
              <Heading size="h700" sizeLG="h800" sizeXL="h900">
                Bieg Niepodległości
              </Heading>
              <Heading
                as="span"
                size="h700"
                sizeLG="h800"
                sizeXL="h900"
                color={theme + "20"}
              >
                11.11.2023
              </Heading>
              <Heading
                size="h600"
                sizeXL="h700"
                margin="0 0 24px"
                marginMD="0 0 32px"
              >
                Regulamin biegu
              </Heading>
            </Box>
            {/* <h2>ORGANIZATOR:</h2>
            <p>
              Urząd Miasta i Gminy Gryfino - Ośrodek Sportu i Rekreacji w
              Gryfinie
            </p>
            <br />
            <p>
              <span>PATRONAT HONOROWY:</span>
            </p>
            <br />
            <p>Burmistrz Miasta i Gminy Gryfino – Mieczysław Sawaryn</p>
            <br />
            <p>
              <span>PARTNERZY:</span>
            </p>
            <br />
            <p>Urząd Rejonowy Gartz,</p>
            <p>Starostwo Powiatowe w Gryfinie,</p>
            <p>Gardenia – studio architektury krajobrazu.</p>
            <br />
            <p>
              <span>CEL:</span>
            </p>
            <br />
            <p>upamiętnienie Święta Konstytucji 3 Maja,</p>
            <p>
              promocja biegania jako najprostszej formy aktywności sportowej,
            </p>
            <p>
              promocja gminy Gryfino, powiatu gryfińskiego oraz województwa
              zachodniopomorskiego,
            </p>
            <p>integracja społeczeństw gmin przygranicznych.</p>
            <br />
            <p>
              <span>KONTAKT Z ORGANIZATOREM:</span>
            </p>
            <br />
            <p>
              Ośrodek Sportu i Rekreacji w Gryfinie, ul. Sportowa 3, 74-100
              Gryfino,
            </p>
            <p>tel/fax 91 416 30 11 e-mail: sport@csir.gryfino.pl,</p>
            <p>
              strona internetowa: www.csir.gryfino.pl Oficjalna strona
              internetowa biegu: www.gryfinobiega.pl/biegtransgraniczny
            </p>
            <p>Dyrektor biegu – Jan Podleśny, tel 601 205 951</p>
            <br />
            <p>
              <span>TRASA BIEGU:</span>
            </p>
            <br />
            <p>Dystanse:</p>
            <p>- 21,097 km z atestem</p>
            <p>- 10 km z atestem</p>
            <p>- 10 km z atestem Nordic Walking</p>
            <p>Trasy po ścieżkach rowerowych w Polsce i w Niemczech.</p>
            <h3>BIEG 10 KM ORAZ NORDIC WALKING 10 KM</h3>
            <StaticImage
              src="../../images/trasa1a.png"
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
            <h3>PÓŁMARATON:</h3>
            <StaticImage
              src="../../images/trasa2a.png"
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
              <span>WARUNKI UCZESTNICTWA:</span>
            </p>
            <br />
            <p>
              Do startu w zawodach zostaną dopuszczeni zawodniczki i zawodnicy,
              którzy:
            </p>
            <p>- półmaraton - do dnia 3.05.2022 r. ukończą 18 rok życia,</p>
            <p>
              - bieg na 10 km i nordic walking 10 km - rocznik 2006 i starsi,
            </p>
            <p>
              - dokonają zgłoszenia za pośrednictwem elektronicznego formularza
              dostępnego na stronie internetowej w terminie zgodnym z
              regulaminem,
            </p>
            <p>
              - uiszczą opłatę startową w wysokości i w terminie zgodnym z
              regulaminem,
            </p>
            <p>- dokonają weryfikacji w biurze zawodów.</p>
            <br />
            <p>
              <span>POMIAR CZASU:</span>
            </p>
            <br />
            <p>
              Pomiaru czasu i ustalenia kolejności na mecie będzie dokonywać
              firma DomTel-Sport Polska (www.domtel-sport.pl) za pomocą
              elektronicznych chipów umieszczonych w numerze startowym.
            </p>
            <p>
              Brak chipa podczas biegu skutkować będzie dyskwalifikacją. Limity
              czasu na pokonanie trasy:
            </p>
            <p>- półmaraton – 3 godz.</p>
            <p>- bieg na 10 km – 1 godz. 25 minut</p>
            <p>- nordic walking 10 km – 3 godz.</p>
            <br />
            <p>
              <span>PROGRAM ZAWODÓW:</span>
            </p>
            <br />
            <p>
              <span>2.05.2022 r. (poniedziałek)</span>
            </p>
            <p>godz. 16:30 – 19:00 biuro zawodów</p>
            <p>- weryfikacja</p>
            <p>
              <span>3.05.2022 r. (wtorek)</span>
            </p>
            <p>godz. 8:30 – 11:00 biuro zawodów</p>
            <p>- weryfikacja</p>
            <p>godz. 12:00 start do półmaratonu, nordic walking 10 km</p>
            <p>godz. 12:20 start do biegu na 10 km</p>
            <p>ok. godz. 15:00 dekoracja zawodników</p>
            <br />
            <p>
              <span>ZGŁOSZENIA:</span>
            </p>
            <br />
            <p>
              poprzez wypełnienie i wysłanie elektronicznego formularza poprzez
              stronę internetową www.gryfinobiega.pl/biegtransgraniczny/zapisy/
              i w Biurze Zawodów w dniach 2.05.2022 oraz 3.05.2022 r. (pod
              warunkiem niewyczerpania limitu zawodników).
            </p>
            <p>Formularz zgłoszeniowy będzie dostępny od 14.02.2022 r.</p>
            <p>
              Limit przyjęć do biegu wynosi: - półmaraton, nordic walking 10 km
              – łącznie 500 zawodników dla obu kategorii - bieg na 10 km – 500
              zawodników.
            </p>
            <p>
              Organizator zastrzega możliwość zmiany limitów przyjęć do biegów.
            </p>
            <br />
            <p>
              <span>OPŁATY:</span>
            </p>
            <br />
            <p>
              - startowa – płatna przelewem na konto Centrum Sportu i Rekreacji
              Gryfino nr konta: PL 32124038551111001023555728 SWIFT PKOPPLPW
              Bank PEKAO S.A. I O/Gryfino. Opłata powinna być wpłacona w
              terminie 7 dni od daty zgłoszenia, nie później jednak jak do
              27.04.2022r. (dla osób, które zgłosiły się po 20.04.2022 r.). W
              tytule przelewu proszę wpisać imię i nazwisko uczestnika, którego
              opłata startowa dotyczy i może być wnoszona także zbiorowo.
            </p>
            <p>
              Wysokość opłaty zależna jest od terminu jej dokonania (liczy się
              data zaksięgowania opłaty na koncie organizatora):
            </p>
            <StaticImage
              src="../../images/wplatybieg.jpg"
              width={800}
              quality={85}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ margin: "24px auto 32px" }}
            />
            <p>
              - Z opłaty startowej są zwolnieni zawodnicy z kategorii K60, M70
              (rocznik K-1962 i starsze oraz M-1952 i starsi).
            </p>
            <p>
              - Za osobę zgłoszoną uważa się osobę, która wypełniła i przesłała
              formularz zgłoszeniowy oraz dokonała opłaty startowej. Osoby
              zgłoszone, które nie dokonają opłaty startowej w terminie 7 dni od
              daty zgłoszenia, zostaną usunięci z listy startowej Biegu
              Transgranicznego.
            </p>
            <p>
              - Dokonanie opłaty startowej będzie widoczne, w ciągu 24 godz.
              (dni robocze), na liście zgłoszeniowej
              www.gryfinobiega.pl/biegtransgraniczny/lista-startowa/.
            </p>
            <p>
              - W przypadku rezygnacji z uczestnictwa w biegu opłata startowa
              nie podlega zwrotowi a pakiet startowy nie przysługuje. Istnieje
              możliwość scedowania dokonanej opłaty startowej na inną osobę.
            </p>
            <p>
              - Zgłoszony zawodnik, który chce otrzymać fakturę za opłatę
              startową powinien o tym poinformawać organizatora najpóźniej w
              dniu dokonania płatności. Należy przesłać e-maila na adres
              sport@csir.gryfino.pl z danymi potrzebnymi do wystawienia faktury.
            </p>
            <br />
            <p>
              <span>KLASYFIKACJE:</span>
            </p>
            <br />
            <p>* klasyfikacja generalna kobiet i mężczyzn</p>
            <p>
              * klasyfikacja w kategoriach wiekowych (osobno kobiet i osobno
              mężczyzn) - nie dotyczy Nordic Walking
            </p>
            <p>
              {" "}
              K16, M16 16 - 19 lat (2006 - 03) dotyczy tylko biegu na 10 km
            </p>
            <p> K18, M18 18 – 19 lat (2004 - 03) dotyczy tylko półmaratonu</p>
            <p> K20, M20 20 - 29 lat (2002 - 93)</p>
            <p> K30, M30 30 - 39 lat (1992 - 83)</p>
            <p> K40, M40 40 - 49 lat (1982 - 73)</p>
            <p> K50, M50 50 - 59 lat (1972 - 63)</p>
            <p> M60 60 - 69 lat (1962 - 53)</p>
            <p> K60 60 lat i więcej (1962 i starsze)</p>
            <p> M70 70 lat i więcej (1952 i starsi)</p>
            <br />
            <p>
              <span>NAGRODY:</span>
            </p>
            <br />
            <p>
              *wszyscy, zweryfikowani zawodnicy otrzymają pakiet startowy
              (numer, chip, pamiątkowa koszulka),
            </p>
            <p>
              *w klasyfikacji generalnej kobiet i mężczyzn w poszczególnych
              biegach i w Nordic Walking – po 3 puchary,
            </p>
            <p>
              *w klasyfikacji generalnej kobiet i mężczyzn w poszczególnych
              biegach – po 3 puchary (nie ma osobnej klasyfikacji dla nordic
              walking),
            </p>
            <p>*zwycięzcy w poszczególnych kategoriach otrzymają statuetki,</p>
            <p>
              *zawodnicy nagrodzeni w klasyfikacji generalnej kobiet i mężczyzn
              nie będą nagradzani w kategoriach wiekowych,
            </p>
            <p>
              *wszyscy, którzy ukończą bieg w limicie czasu otrzymają pamiątkowe
              medale,
            </p>
            <p>
              *bony na zakup sprzętu w Decathlon otrzymają zawodnicy, którzy w
              swoim biegu zajmą następujące miejsce na mecie:
            </p>
            <br />
            <p>
              <b>
                13, 22, 36, 45, 53, 65, 83, 100, 109, 122, 145, 165, 182, 199,
                212, 238.
              </b>
            </p>
            <br />
            <br />
            <p>
              <span>WERYFIKACJA:</span>
            </p>
            <br />
            <p>
              W celu weryfikacji każdy zawodnik musi zgłosić się osobiście w
              biurze zawodów (
              <b>
                nie ma możliwości odebrania pakietu startowego w imieniu innej
                osoby
              </b>
              ), w budynku I Liceum Ogólnokształcącego w Gryfinie, ul.
              Niepodległości 16 (400 m od miejsca startu):
            </p>
            <p>- W przeddzień zawodów - 2.05.2022 r. w godz. 16:30 – 19:00</p>
            <p>- W dniu zawodów - 3.05.2022 r. od godz. 8:30 – 11:00</p>
            <p>
              - Zawodnicy powyżej 18 roku życia podpisują oświadczenie o biegu
              na własną odpowiedzialność.
            </p>
            <p>
              - Osoby w wieku 16-18 lat (które w dniu biegu tj. 3 maja 2022 nie
              osiągnęły jeszcze pełnoletności) zobowiązane są do posiadania
              pozwolenia na udział od rodziców lub prawnych opiekunów, z ich
              podpisem i nr PESEL.
            </p>
            <br />
            <p>
              <b>
                Warunkiem dopuszczenia ich do startu jest obecność rodzica lub
                opiekuna prawnego wraz z dowodem osobistym w momencie
                weryfikacji zawodnika w biurze zawodów. Powyższe nie dotyczy
                zawodników zrzeszonych w klubach sportowych, posiadających
                aktualne badania lekarskie wystawione przez lekarza sportowego,
                które należy okazać przy weryfikacji. Osoby poniżej 16 roku
                życia (liczy się rok urodzenia) nie będą do biegu przyjęte.
                <br />
              </b>
            </p>
            <StaticImage
              src="../../images/weryfikacja.png"
              width={800}
              quality={85}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ margin: "24px auto 32px" }}
            />
            <p>
              <span>WZÓR OŚWIADCZENIA (osoby niepełnoletnie)</span>
            </p>
            <br />
            <p>
              Oświadczam, że znany jest mi stan zdrowia syna/córki JANA
              KOWALSKIEGO
            </p>
            <p>
              i może wziąć udział w 6 edycji Gryfińskiego Transgranicznego
              Festiwalu Biegowego (bieg na 10 000 m).
            </p>
            <p>
              Wyrażam zgodę na przetwarzanie danych osobowych syna/córki dla
              celów weryfikacji i umieszczenia w komunikacie końcowym, a także
              dla celów marketingowych biegu.
            </p>
            <br />
            <br />
            <p>
              ..................................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;......................................
            </p>
            <p>
              czytelny podpis
              rodzica&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PESEL
              rodzica
            </p>
            <br />
            <br />
            <br />
            <p>
              <span>SPRAWY RÓŻNE:</span>
            </p>
            <br />
            <p>
              - Pakiet startowy przysługuje zawodnikowi, który zamierza w biegu
              wystartować.
            </p>
            <p>
              - Przydzielone numery startowe powinny się znajdować na klatce
              piersiowej zawodnika,
            </p>
            <p>
              - Komunikat końcowy będzie dostępny na stronach csir.gryfino.pl,
              maratonypolskie.pl, domtel.pl, biegtransgraniczny.pl,
            </p>
            <p>
              - Galeria zdjęć będzie dostępna na stronach csir.gryfino.pl,
              maratonypolskie.pl, biegtransgraniczny.pl,
            </p>
            <p>
              - Przebieralnia oraz toaleta znajdować się będzie w miejscu
              weryfikacji,
            </p>
            <p>- Oznakowanie trasy co każdy kilometr,</p>
            <p>
              - Wszyscy zawodnicy startują w biegu na własną odpowiedzialność.
              Organizator zaleca, aby ubezpieczyli się na własny koszt od
              następstw nieszczęśliwych wypadków, - Organizator zapewnia wodę
              niegazowaną na trasie biegu,
            </p>
            <p>
              - Organizator nie odpowiada za zaginione rzeczy osobiste
              zawodników w czasie trwania zawodów.
            </p>
            <p>- W pobliżu startu znajdować się będzie DEPOZYT,</p>
            <p>
              - Parking dla samochodów znajduje się w miejscu weryfikacji (wjazd
              od ul. Niepodległości, od strony południowej miasta),
            </p>
            <p>- Bieg odbędzie się bez względu na pogodę,</p>
            <p>
              - Uczestnicy mają obowiązek zachowania zasad fair-play podczas
              trwania zawodów,
            </p>
            <p>
              - Po zakończeniu biegu zawodnicy na podstawie talonu
              konsumpcyjnego otrzymają posiłek regeneracyjny, napój izotoniczny,
            </p>
            <p>
              - Organizatorzy zastrzegają sobie prawo interpretacji niniejszego
              regulaminu.
            </p>
            <br />
            <p>
              <b>
                UWAGA!!! Organizator nie przewiduje możliwości umieszczania na
                punktach z wodą odżywek zawodników.
              </b>
            </p>
            <br />
            <br />
            <br />
            <p>
              W związku z zapisami art. 13 ROZPORZĄDZENIA PARLAMENTU
              EUROPEJSKIEGO I RADY (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
              sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
              osobowych i w sprawie swobodnego przepływu takich danych oraz
              uchylenia dyrektywy 95/46/WE (RODO) (Dz.U.UE. z 2016 r., L 119,
              poz. 1) informujemy, że: csir Gryfino, jest administratorami
              danych osobowych zbieranych w celu organizacji i przeprowadzenia
              6. Gryfińskiego Transgranicznego Festiwalu Biegowego. Państwa dane
              osobowe przetwarzane będą zgodnie z obowiązującymi przepisami
              prawa a rodzaj pobieranych danych i sposób ich przetwarzania jest
              niezbędny do prawidłowej organizacji biegu. W celu wykonania umowy
              przekazujemy Państwa dane firmie DOMTEL-SPORT ul.
              Aluchny-Emelianow 23, 76-200 Słupsk, NIP: 839-002-80-09 zajmującej
              się prowadzeniem zapisów na biegi oraz pomiarem czasu na zawodach.
              Mają Państwo prawo do bezpłatnej informacji dotyczącej Państwa
              danych osobowych, które są u nas przechowywane, a także prawo do
              ich sprostowania, ograniczenia przetwarzania, usunięcia tych
              danych lub ich przeniesienia. W przypadku pytań dotyczących
              gromadzenia, przetwarzania i wykorzystania Państwa danych
              osobowych, sprostowania, blokowania czy kasowania danych oraz w
              celu odwołania udzielonych zgód lub wyrażenia sprzeciwu wobec
              wykorzystywania określonych danych, prosimy o kontakt z
              administratorem danych: csir w Gryfinie, ul. Sportowa 3, 74-100,
              Gryfino, sport@csir.gryfino.pl Ponadto przysługuje Państwu prawo
              do złożenia skargi do właściwego organu nadzorczego.
            </p>
            <br />
            <p>
              <p>
                <span>Oświadczenie zawodników:</span>
              </p>
              <br />
              <p>
                <p>
                  Oświadczam, że zostałem(łam) poinformowany(na) o prawie wglądu
                  do moich danych oraz do złożenia wniosków o ich poprawienie.
                  Przekazanie danych osobowych Uczestnika jest dobrowolne,
                  jednakże stanowi warunek uczestnictwa w 6. Gryfińskim
                  Transgranicznym Festiwalu Biegowym. Wyrażam zgodę na
                  przetwarzanie moich danych osobowych, w tym do ich
                  udostępnienia przez csir Gryfino, w celu zamieszczania wyników
                  z biegu oraz na nieodpłatną publikację wizerunku utrwalonego w
                  przekazach telewizyjnych, internetowych, radiu, gazetach,
                  magazynach i umieszczania wizerunku w materiałach promocyjno-
                  reklamowych wydawanych przez organizatora. Ponadto, wyrażam
                  zgodę na przekazywanie mi za pomocą poczty elektronicznej
                  informacji o przyszłych imprezach Organizatora, a także do
                  gromadzenia moich danych do potrzeb administracyjnych i
                  analitycznych. Wyrażam także zgodę na nieodpłatne
                  wykorzystanie mojego wizerunku utrwalonego w formie fotografii
                  lub zapisu video. Na podstawie par.2 ust.1 pkt 6
                  Rozporządzenia Ministra Edukacji Narodowej z dnia 12 września
                  2001r. w sprawie szczególnych zasad i warunków prowadzenia
                  działalności w dziedzinie rekreacji ruchowej oświadczam, że
                  jestem zdolny(a) i nie występują w przypadku mojej osoby
                  przeciwwskazania zdrowotne do udziału w 5. Gryfińskim
                  Transgranicznym Festiwalu Biegowym. Zgłoszenie się do zawodów
                  jest równoznaczne z akceptacją powyższego oświadczenia.
                </p>
                <br />
                <br />
                <p>Dyrektor Biegu - Jan Podleśny</p>
              </p>
            </p> */}
            <a href={Rules}>Pobierz Regulamin w formie pliku PDF</a>
          </Box>
        </Container>
      </Component>
    </Layout>
  )
}

export default NiepodleglosciRegulaminPage
