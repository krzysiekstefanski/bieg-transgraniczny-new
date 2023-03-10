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

import Rules from "../../assets/regulamin-maj-2022.pdf"
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
              margin="0 0 16px"
              marginSM="24px"
              marginMD="32px"
              marginLG="0 0 48px"
            >
              <StaticImage
                src="../../images/bieg-transgraniczny-regulamin-naglowek.png"
                width={800}
                quality={85}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                style={{ margin: "0 auto" }}
              />
            </Box>
            <h2>ORGANIZATOR:</h2>
            <p>
              Urz??d Miasta i Gminy Gryfino - O??rodek Sportu i Rekreacji w
              Gryfinie
            </p>
            <br />
            <p>
              <span>PATRONAT HONOROWY:</span>
            </p>
            <br />
            <p>Burmistrz Miasta i Gminy Gryfino ??? Mieczys??aw Sawaryn</p>
            <br />
            <p>
              <span>PARTNERZY:</span>
            </p>
            <br />
            <p>Urz??d Rejonowy Gartz,</p>
            <p>Starostwo Powiatowe w Gryfinie,</p>
            <p>Gardenia ??? studio architektury krajobrazu.</p>
            <br />
            <p>
              <span>CEL:</span>
            </p>
            <br />
            <p>upami??tnienie ??wi??ta Konstytucji 3 Maja,</p>
            <p>
              promocja biegania jako najprostszej formy aktywno??ci sportowej,
            </p>
            <p>
              promocja gminy Gryfino, powiatu gryfi??skiego oraz wojew??dztwa
              zachodniopomorskiego,
            </p>
            <p>integracja spo??ecze??stw gmin przygranicznych.</p>
            <br />
            <p>
              <span>KONTAKT Z ORGANIZATOREM:</span>
            </p>
            <br />
            <p>
              O??rodek Sportu i Rekreacji w Gryfinie, ul. Sportowa 3, 74-100
              Gryfino,
            </p>
            <p>tel/fax 91 416 30 11 e-mail: sport@csir.gryfino.pl,</p>
            <p>
              strona internetowa: www.csir.gryfino.pl Oficjalna strona
              internetowa biegu: www.gryfinobiega.pl/biegtransgraniczny
            </p>
            <p>Dyrektor biegu ??? Jan Podle??ny, tel 601 205 951</p>
            <br />
            <p>
              <span>TRASA BIEGU:</span>
            </p>
            <br />
            <p>Dystanse:</p>
            <p>- 21,097 km z atestem</p>
            <p>- 10 km z atestem</p>
            <p>- 10 km z atestem Nordic Walking</p>
            <p>Trasy po ??cie??kach rowerowych w Polsce i w Niemczech.</p>
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
            <h3>P????MARATON:</h3>
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
              Do startu w zawodach zostan?? dopuszczeni zawodniczki i zawodnicy,
              kt??rzy:
            </p>
            <p>- p????maraton - do dnia 3.05.2022 r. uko??cz?? 18 rok ??ycia,</p>
            <p>
              - bieg na 10 km i nordic walking 10 km - rocznik 2006 i starsi,
            </p>
            <p>
              - dokonaj?? zg??oszenia za po??rednictwem elektronicznego formularza
              dost??pnego na stronie internetowej w terminie zgodnym z
              regulaminem,
            </p>
            <p>
              - uiszcz?? op??at?? startow?? w wysoko??ci i w terminie zgodnym z
              regulaminem,
            </p>
            <p>- dokonaj?? weryfikacji w biurze zawod??w.</p>
            <br />
            <p>
              <span>POMIAR CZASU:</span>
            </p>
            <br />
            <p>
              Pomiaru czasu i ustalenia kolejno??ci na mecie b??dzie dokonywa??
              firma DomTel-Sport Polska (www.domtel-sport.pl) za pomoc??
              elektronicznych chip??w umieszczonych w numerze startowym.
            </p>
            <p>
              Brak chipa podczas biegu skutkowa?? b??dzie dyskwalifikacj??. Limity
              czasu na pokonanie trasy:
            </p>
            <p>- p????maraton ??? 3 godz.</p>
            <p>- bieg na 10 km ??? 1 godz. 25 minut</p>
            <p>- nordic walking 10 km ??? 3 godz.</p>
            <br />
            <p>
              <span>PROGRAM ZAWOD??W:</span>
            </p>
            <br />
            <p>
              <span>2.05.2022 r. (poniedzia??ek)</span>
            </p>
            <p>godz. 16:30 ??? 19:00 biuro zawod??w</p>
            <p>- weryfikacja</p>
            <p>
              <span>3.05.2022 r. (wtorek)</span>
            </p>
            <p>godz. 8:30 ??? 11:00 biuro zawod??w</p>
            <p>- weryfikacja</p>
            <p>godz. 12:00 start do p????maratonu, nordic walking 10 km</p>
            <p>godz. 12:20 start do biegu na 10 km</p>
            <p>ok. godz. 15:00 dekoracja zawodnik??w</p>
            <br />
            <p>
              <span>ZG??OSZENIA:</span>
            </p>
            <br />
            <p>
              poprzez wype??nienie i wys??anie elektronicznego formularza poprzez
              stron?? internetow?? www.gryfinobiega.pl/biegtransgraniczny/zapisy/
              i w Biurze Zawod??w w dniach 2.05.2022 oraz 3.05.2022 r. (pod
              warunkiem niewyczerpania limitu zawodnik??w).
            </p>
            <p>Formularz zg??oszeniowy b??dzie dost??pny od 14.02.2022 r.</p>
            <p>
              Limit przyj???? do biegu wynosi: - p????maraton, nordic walking 10 km
              ??? ????cznie 500 zawodnik??w dla obu kategorii - bieg na 10 km ??? 500
              zawodnik??w.
            </p>
            <p>
              Organizator zastrzega mo??liwo???? zmiany limit??w przyj???? do bieg??w.
            </p>
            <br />
            <p>
              <span>OP??ATY:</span>
            </p>
            <br />
            <p>
              - startowa ??? p??atna przelewem na konto Centrum Sportu i Rekreacji
              Gryfino nr konta: PL 32124038551111001023555728 SWIFT PKOPPLPW
              Bank PEKAO S.A. I O/Gryfino. Op??ata powinna by?? wp??acona w
              terminie 7 dni od daty zg??oszenia, nie p????niej jednak jak do
              27.04.2022r. (dla os??b, kt??re zg??osi??y si?? po 20.04.2022 r.). W
              tytule przelewu prosz?? wpisa?? imi?? i nazwisko uczestnika, kt??rego
              op??ata startowa dotyczy i mo??e by?? wnoszona tak??e zbiorowo.
            </p>
            <p>
              Wysoko???? op??aty zale??na jest od terminu jej dokonania (liczy si??
              data zaksi??gowania op??aty na koncie organizatora):
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
              - Z op??aty startowej s?? zwolnieni zawodnicy z kategorii K60, M70
              (rocznik K-1962 i starsze oraz M-1952 i starsi).
            </p>
            <p>
              - Za osob?? zg??oszon?? uwa??a si?? osob??, kt??ra wype??ni??a i przes??a??a
              formularz zg??oszeniowy oraz dokona??a op??aty startowej. Osoby
              zg??oszone, kt??re nie dokonaj?? op??aty startowej w terminie 7 dni od
              daty zg??oszenia, zostan?? usuni??ci z listy startowej Biegu
              Transgranicznego.
            </p>
            <p>
              - Dokonanie op??aty startowej b??dzie widoczne, w ci??gu 24 godz.
              (dni robocze), na li??cie zg??oszeniowej
              www.gryfinobiega.pl/biegtransgraniczny/lista-startowa/.
            </p>
            <p>
              - W przypadku rezygnacji z uczestnictwa w biegu op??ata startowa
              nie podlega zwrotowi a pakiet startowy nie przys??uguje. Istnieje
              mo??liwo???? scedowania dokonanej op??aty startowej na inn?? osob??.
            </p>
            <p>
              - Zg??oszony zawodnik, kt??ry chce otrzyma?? faktur?? za op??at??
              startow?? powinien o tym poinformawa?? organizatora najp????niej w
              dniu dokonania p??atno??ci. Nale??y przes??a?? e-maila na adres
              sport@csir.gryfino.pl z danymi potrzebnymi do wystawienia faktury.
            </p>
            <br />
            <p>
              <span>KLASYFIKACJE:</span>
            </p>
            <br />
            <p>* klasyfikacja generalna kobiet i m????czyzn</p>
            <p>
              * klasyfikacja w kategoriach wiekowych (osobno kobiet i osobno
              m????czyzn) - nie dotyczy Nordic Walking
            </p>
            <p>
              {" "}
              K16, M16 16 - 19 lat (2006 - 03) dotyczy tylko biegu na 10 km
            </p>
            <p> K18, M18 18 ??? 19 lat (2004 - 03) dotyczy tylko p????maratonu</p>
            <p> K20, M20 20 - 29 lat (2002 - 93)</p>
            <p> K30, M30 30 - 39 lat (1992 - 83)</p>
            <p> K40, M40 40 - 49 lat (1982 - 73)</p>
            <p> K50, M50 50 - 59 lat (1972 - 63)</p>
            <p> M60 60 - 69 lat (1962 - 53)</p>
            <p> K60 60 lat i wi??cej (1962 i starsze)</p>
            <p> M70 70 lat i wi??cej (1952 i starsi)</p>
            <br />
            <p>
              <span>NAGRODY:</span>
            </p>
            <br />
            <p>
              *wszyscy, zweryfikowani zawodnicy otrzymaj?? pakiet startowy
              (numer, chip, pami??tkowa koszulka),
            </p>
            <p>
              *w klasyfikacji generalnej kobiet i m????czyzn w poszczeg??lnych
              biegach i w Nordic Walking ??? po 3 puchary,
            </p>
            <p>
              *w klasyfikacji generalnej kobiet i m????czyzn w poszczeg??lnych
              biegach ??? po 3 puchary (nie ma osobnej klasyfikacji dla nordic
              walking),
            </p>
            <p>*zwyci??zcy w poszczeg??lnych kategoriach otrzymaj?? statuetki,</p>
            <p>
              *zawodnicy nagrodzeni w klasyfikacji generalnej kobiet i m????czyzn
              nie b??d?? nagradzani w kategoriach wiekowych,
            </p>
            <p>
              *wszyscy, kt??rzy uko??cz?? bieg w limicie czasu otrzymaj?? pami??tkowe
              medale,
            </p>
            <p>
              *bony na zakup sprz??tu w Decathlon otrzymaj?? zawodnicy, kt??rzy w
              swoim biegu zajm?? nast??puj??ce miejsce na mecie:
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
              W celu weryfikacji ka??dy zawodnik musi zg??osi?? si?? osobi??cie w
              biurze zawod??w (
              <b>
                nie ma mo??liwo??ci odebrania pakietu startowego w imieniu innej
                osoby
              </b>
              ), w budynku I Liceum Og??lnokszta??c??cego w Gryfinie, ul.
              Niepodleg??o??ci 16 (400 m od miejsca startu):
            </p>
            <p>- W przeddzie?? zawod??w - 2.05.2022 r. w godz. 16:30 ??? 19:00</p>
            <p>- W dniu zawod??w - 3.05.2022 r. od godz. 8:30 ??? 11:00</p>
            <p>
              - Zawodnicy powy??ej 18 roku ??ycia podpisuj?? o??wiadczenie o biegu
              na w??asn?? odpowiedzialno????.
            </p>
            <p>
              - Osoby w wieku 16-18 lat (kt??re w dniu biegu tj. 3 maja 2022 nie
              osi??gn????y jeszcze pe??noletno??ci) zobowi??zane s?? do posiadania
              pozwolenia na udzia?? od rodzic??w lub prawnych opiekun??w, z ich
              podpisem i nr PESEL.
            </p>
            <br />
            <p>
              <b>
                Warunkiem dopuszczenia ich do startu jest obecno???? rodzica lub
                opiekuna prawnego wraz z dowodem osobistym w momencie
                weryfikacji zawodnika w biurze zawod??w. Powy??sze nie dotyczy
                zawodnik??w zrzeszonych w klubach sportowych, posiadaj??cych
                aktualne badania lekarskie wystawione przez lekarza sportowego,
                kt??re nale??y okaza?? przy weryfikacji. Osoby poni??ej 16 roku
                ??ycia (liczy si?? rok urodzenia) nie b??d?? do biegu przyj??te.
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
              <span>WZ??R O??WIADCZENIA (osoby niepe??noletnie)</span>
            </p>
            <br />
            <p>
              O??wiadczam, ??e znany jest mi stan zdrowia syna/c??rki JANA
              KOWALSKIEGO
            </p>
            <p>
              i mo??e wzi???? udzia?? w 6 edycji Gryfi??skiego Transgranicznego
              Festiwalu Biegowego (bieg na 10 000 m).
            </p>
            <p>
              Wyra??am zgod?? na przetwarzanie danych osobowych syna/c??rki dla
              cel??w weryfikacji i umieszczenia w komunikacie ko??cowym, a tak??e
              dla cel??w marketingowych biegu.
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
              <span>SPRAWY R????NE:</span>
            </p>
            <br />
            <p>
              - Pakiet startowy przys??uguje zawodnikowi, kt??ry zamierza w biegu
              wystartowa??.
            </p>
            <p>
              - Przydzielone numery startowe powinny si?? znajdowa?? na klatce
              piersiowej zawodnika,
            </p>
            <p>
              - Komunikat ko??cowy b??dzie dost??pny na stronach csir.gryfino.pl,
              maratonypolskie.pl, domtel.pl, biegtransgraniczny.pl,
            </p>
            <p>
              - Galeria zdj???? b??dzie dost??pna na stronach csir.gryfino.pl,
              maratonypolskie.pl, biegtransgraniczny.pl,
            </p>
            <p>
              - Przebieralnia oraz toaleta znajdowa?? si?? b??dzie w miejscu
              weryfikacji,
            </p>
            <p>- Oznakowanie trasy co ka??dy kilometr,</p>
            <p>
              - Wszyscy zawodnicy startuj?? w biegu na w??asn?? odpowiedzialno????.
              Organizator zaleca, aby ubezpieczyli si?? na w??asny koszt od
              nast??pstw nieszcz????liwych wypadk??w, - Organizator zapewnia wod??
              niegazowan?? na trasie biegu,
            </p>
            <p>
              - Organizator nie odpowiada za zaginione rzeczy osobiste
              zawodnik??w w czasie trwania zawod??w.
            </p>
            <p>- W pobli??u startu znajdowa?? si?? b??dzie DEPOZYT,</p>
            <p>
              - Parking dla samochod??w znajduje si?? w miejscu weryfikacji (wjazd
              od ul. Niepodleg??o??ci, od strony po??udniowej miasta),
            </p>
            <p>- Bieg odb??dzie si?? bez wzgl??du na pogod??,</p>
            <p>
              - Uczestnicy maj?? obowi??zek zachowania zasad fair-play podczas
              trwania zawod??w,
            </p>
            <p>
              - Po zako??czeniu biegu zawodnicy na podstawie talonu
              konsumpcyjnego otrzymaj?? posi??ek regeneracyjny, nap??j izotoniczny,
            </p>
            <p>
              - Organizatorzy zastrzegaj?? sobie prawo interpretacji niniejszego
              regulaminu.
            </p>
            <br />
            <p>
              <b>
                UWAGA!!! Organizator nie przewiduje mo??liwo??ci umieszczania na
                punktach z wod?? od??ywek zawodnik??w.
              </b>
            </p>
            <br />
            <br />
            <br />
            <p>
              W zwi??zku z zapisami art. 13 ROZPORZ??DZENIA PARLAMENTU
              EUROPEJSKIEGO I RADY (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
              sprawie ochrony os??b fizycznych w zwi??zku z przetwarzaniem danych
              osobowych i w sprawie swobodnego przep??ywu takich danych oraz
              uchylenia dyrektywy 95/46/WE (RODO) (Dz.U.UE. z 2016 r., L 119,
              poz. 1) informujemy, ??e: csir Gryfino, jest administratorami
              danych osobowych zbieranych w celu organizacji i przeprowadzenia
              6. Gryfi??skiego Transgranicznego Festiwalu Biegowego. Pa??stwa dane
              osobowe przetwarzane b??d?? zgodnie z obowi??zuj??cymi przepisami
              prawa a rodzaj pobieranych danych i spos??b ich przetwarzania jest
              niezb??dny do prawid??owej organizacji biegu. W celu wykonania umowy
              przekazujemy Pa??stwa dane firmie DOMTEL-SPORT ul.
              Aluchny-Emelianow 23, 76-200 S??upsk, NIP: 839-002-80-09 zajmuj??cej
              si?? prowadzeniem zapis??w na biegi oraz pomiarem czasu na zawodach.
              Maj?? Pa??stwo prawo do bezp??atnej informacji dotycz??cej Pa??stwa
              danych osobowych, kt??re s?? u nas przechowywane, a tak??e prawo do
              ich sprostowania, ograniczenia przetwarzania, usuni??cia tych
              danych lub ich przeniesienia. W przypadku pyta?? dotycz??cych
              gromadzenia, przetwarzania i wykorzystania Pa??stwa danych
              osobowych, sprostowania, blokowania czy kasowania danych oraz w
              celu odwo??ania udzielonych zg??d lub wyra??enia sprzeciwu wobec
              wykorzystywania okre??lonych danych, prosimy o kontakt z
              administratorem danych: csir w Gryfinie, ul. Sportowa 3, 74-100,
              Gryfino, sport@csir.gryfino.pl Ponadto przys??uguje Pa??stwu prawo
              do z??o??enia skargi do w??a??ciwego organu nadzorczego.
            </p>
            <br />
            <p>
              <p>
                <span>O??wiadczenie zawodnik??w:</span>
              </p>
              <br />
              <p>
                <p>
                  O??wiadczam, ??e zosta??em(??am) poinformowany(na) o prawie wgl??du
                  do moich danych oraz do z??o??enia wniosk??w o ich poprawienie.
                  Przekazanie danych osobowych Uczestnika jest dobrowolne,
                  jednak??e stanowi warunek uczestnictwa w 6. Gryfi??skim
                  Transgranicznym Festiwalu Biegowym. Wyra??am zgod?? na
                  przetwarzanie moich danych osobowych, w tym do ich
                  udost??pnienia przez csir Gryfino, w celu zamieszczania wynik??w
                  z biegu oraz na nieodp??atn?? publikacj?? wizerunku utrwalonego w
                  przekazach telewizyjnych, internetowych, radiu, gazetach,
                  magazynach i umieszczania wizerunku w materia??ach promocyjno-
                  reklamowych wydawanych przez organizatora. Ponadto, wyra??am
                  zgod?? na przekazywanie mi za pomoc?? poczty elektronicznej
                  informacji o przysz??ych imprezach Organizatora, a tak??e do
                  gromadzenia moich danych do potrzeb administracyjnych i
                  analitycznych. Wyra??am tak??e zgod?? na nieodp??atne
                  wykorzystanie mojego wizerunku utrwalonego w formie fotografii
                  lub zapisu video. Na podstawie par.2 ust.1 pkt 6
                  Rozporz??dzenia Ministra Edukacji Narodowej z dnia 12 wrze??nia
                  2001r. w sprawie szczeg??lnych zasad i warunk??w prowadzenia
                  dzia??alno??ci w dziedzinie rekreacji ruchowej o??wiadczam, ??e
                  jestem zdolny(a) i nie wyst??puj?? w przypadku mojej osoby
                  przeciwwskazania zdrowotne do udzia??u w 5. Gryfi??skim
                  Transgranicznym Festiwalu Biegowym. Zg??oszenie si?? do zawod??w
                  jest r??wnoznaczne z akceptacj?? powy??szego o??wiadczenia.
                </p>
                <br />
                <br />
                <p>Dyrektor Biegu - Jan Podle??ny</p>
              </p>
            </p>
            <a href={Rules}>Pobierz Regulamin w formie pliku PDF</a>
          </Box>
        </Container>
      </Component>
    </Layout>
  )
}

export default NiepodleglosciRegulaminPage
