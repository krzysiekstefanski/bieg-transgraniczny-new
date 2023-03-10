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

import Rules from "../../assets/regulamin_7gtfb_maj.2023r_a.pdf"
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
                Urz??d Miasta i Gminy Gryfino - Centrum Sportu i Rekreacji w
                Gryfinie
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
              <span>Burmistrz Miasta i Gminy Gryfino ??? Mieczys??aw Sawaryn</span>
            </p>
            <br />
            <p>
              <strong>
                <span>PARTNERZY:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>Urz??d Rejonowy Gartz,</span>
            </p>
            <p>
              <span>Starostwo Powiatowe w Gryfinie,</span>
            </p>
            <p>
              <span>Gardenia ??? studio architektury krajobrazu.</span>
            </p>
            <br />
            <p>
              <strong>
                <span>CEL:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>upami??tnienie ??wi??ta Konstytucji 3 Maja,</span>
            </p>
            <p>
              <span>
                promocja biegania jako najprostszej formy aktywno??ci sportowej,
              </span>
            </p>
            <p>
              <span>
                promocja gminy Gryfino, powiatu gryfi??skiego oraz wojew??dztwa
                zachodniopomorskiego,
              </span>
            </p>
            <p>
              <span>integracja spo??ecze??stw gmin przygranicznych.</span>
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
                Centrum Sportu i Rekreacji w Gryfinie, ul. Wodnika 1, 74-100
                Gryfino,
              </span>
            </p>
            <p>
              <span>
                tel/fax 91 416 30 11 e-mail: sport@csir.gryfino.pl, strona
                internetowa: www.csir.gryfino.pl{" "}
              </span>
            </p>
            <p>
              <span>
                Oficjalna strona internetowa biegu: www.gryfinobiega.pl
              </span>
            </p>
            <p>
              <span>Dyrektor biegu ??? Jan Podle??ny, tel 601 205 951</span>
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
              <span>- 10 km z atestem - Nordic Walking</span>
            </p>
            <p>
              <span>Trasy po ??cie??kach rowerowych w Polsce i w Niemczech.</span>
            </p>
            <h3>
              <span>BIEG 10 KM ORAZ NORDIC WALKING 10 KM</span>
            </h3>
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
              <strong>
                <span>WARUNKI UCZESTNICTWA:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>
                Do startu w zawodach zostan?? dopuszczeni zawodniczki i
                zawodnicy, kt??rzy:
              </span>
            </p>
            <p>
              <span>
                - p????maraton - do dnia 3.05.2023 r. uko??cz?? 18 rok ??ycia,
              </span>
            </p>
            <p>
              <span>
                - bieg na 10 km i nordic walking 10 km - rocznik 2007 i starsi,
              </span>
            </p>
            <p>
              <span>
                - dokonaj?? zg??oszenia za po??rednictwem elektronicznego
                formularza dost??pnego na stronie internetowej w terminie zgodnym
                z regulaminem,
              </span>
            </p>
            <p>
              <span>
                - uiszcz?? op??at?? startow?? w wysoko??ci i w terminie zgodnym z
                regulaminem,
              </span>
            </p>
            <p>
              <span>- dokonaj?? weryfikacji w biurze zawod??w.</span>
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
                Pomiaru czasu i ustalenia kolejno??ci na mecie b??dzie dokonywa??
                firma DomTel-Sport Polska (www.domtel-sport.pl) za pomoc??
                elektronicznych chip??w umieszczonych w numerze startowym.
              </span>
            </p>
            <p>
              <span>
                Brak chipa podczas biegu skutkowa?? b??dzie dyskwalifikacj??.
                Limity czasu na pokonanie trasy:
              </span>
            </p>
            <p>
              <span>- p????maraton ??? 3 godz.</span>
            </p>
            <p>
              <span>- bieg na 10 km ??? 1 godz. 25 minut</span>
            </p>
            <p>
              <span>- nordic walking 10 km ??? 3 godz.</span>
            </p>
            <br />
            <p>
              <strong>
                <span>PROGRAM ZAWOD??W:</span>
              </strong>
            </p>
            <br />
            <p>
              <span style={{ textDecoration: "underline" }}>
                <span>2.05.2023 r. (wtorek)</span>
              </span>
            </p>
            <p>
              <span>godz. 16:30 ??? 19:00 biuro zawod??w - weryfikacja</span>
            </p>
            <p>
              <span style={{ textDecoration: "underline" }}>
                <span>3.05.2023 r. (??roda)</span>
              </span>
            </p>
            <p>
              <span>godz. 8:30 ??? 11:00 biuro zawod??w - weryfikacja</span>
            </p>
            <p>
              <span>
                godz. 12:00 start do p????maratonu, nordic walking 10 km
              </span>
            </p>
            <p>
              <span>godz. 12:20 start do biegu na 10 km</span>
            </p>
            <p>
              <span>ok. godz. 15:00 dekoracja zawodnik??w</span>
            </p>
            <br />
            <p>
              <strong>
                <span>ZG??OSZENIA:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>
                poprzez wype??nienie i wys??anie elektronicznego formularza
                poprzez stron?? internetow?? www.gryfinobiega.pl
                <span style={{ textDecoration: "underline" }}>/zapisy/</span> i
                w Biurze Zawod??w w dniach 2.05.2023 oraz 3.05.2023 r. (pod
                warunkiem niewyczerpania limitu zawodnik??w).
              </span>
            </p>
            <p>
              <span>
                Formularz zg??oszeniowy b??dzie dost??pny od 01.03.2023 r.
              </span>
            </p>
            <p>
              <span>
                Limit przyj???? do biegu wynosi: - p????maraton, nordic walking 10
                km ??? ????cznie 500 zawodnik??w dla obu kategorii - bieg na 10 km ???
                500 zawodnik??w.
              </span>
            </p>
            <p>
              <span>
                Organizator zastrzega mo??liwo???? zmiany limit??w przyj???? do
                bieg??w.
              </span>
            </p>
            <br />
            <p>
              <strong>
                <span>OP??ATY:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>
                - startowa ??? p??atna przelewem na konto Centrum Sportu i
                Rekreacji Gryfino nr konta: <br />
                PL 32124038551111001023555728 SWIFT PKOPPLPW Bank PEKAO S.A. I
                O/Gryfino. Op??ata powinna by?? wp??acona w terminie 7 dni od daty
                zg??oszenia, nie p????niej jednak jak do 27.04.2023r. (dla os??b,
                kt??re zg??osi??y si?? po 20.04.2023 r.). W tytule przelewu prosz??
                wpisa?? imi?? i nazwisko uczestnika, kt??rego op??ata startowa
                dotyczy i mo??e by?? wnoszona tak??e zbiorowo.
              </span>
            </p>
            <p>
              <span>
                Wysoko???? op??aty zale??na jest od terminu jej dokonania (liczy si??
                data zaksi??gowania op??aty na koncie organizatora):
              </span>
            </p>
            <StaticImage
              src="../../images/wplatybieg-p.jpg"
              width={800}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ margin: "24px auto 32px" }}
            />
            <p>
              <span>
                - Za osob?? zg??oszon?? uwa??a si?? osob??, kt??ra wype??ni??a i
                przes??a??a formularz zg??oszeniowy oraz dokona??a op??aty startowej.
                Osoby zg??oszone, kt??re nie dokonaj?? op??aty startowej w terminie
                7 dni od daty zg??oszenia, zostan?? usuni??ci z listy startowej
                Biegu Transgranicznego.
              </span>
            </p>
            <p>
              <span>
                - Dokonanie op??aty startowej b??dzie widoczne, w ci??gu 24 godz.
                (dni robocze), na li??cie zg??oszeniowej
                www.gryfinobiega.pl/lista-startowa/.
              </span>
            </p>
            <p>
              <span>
                - W przypadku rezygnacji z uczestnictwa w biegu op??ata startowa
                nie podlega zwrotowi a pakiet startowy nie przys??uguje. Istnieje
                mo??liwo???? scedowania dokonanej op??aty startowej na inn?? osob??.
              </span>
            </p>
            <p>
              <span>
                - Zg??oszony zawodnik, kt??ry chce otrzyma?? faktur?? za op??at??
                startow?? powinien o tym poinformowa?? organizatora nie p????niej,
                jak na 2 tygodnie po dokonaniu p??atno??ci. Nale??y przes??a??
                e-maila na adres sport@csir.gryfino.pl z danymi potrzebnymi do
                wystawienia faktury.
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
              <span>* klasyfikacja generalna kobiet i m????czyzn</span>
            </p>
            <p>
              <span>
                * klasyfikacja w kategoriach wiekowych (osobno kobiet i osobno
                m????czyzn)
              </span>
            </p>
            <br />
            <p>
              <span>K20, M20, 20 - 29 lat (2003 - 94)</span>
            </p>
            <p>
              <span>K30, M30, 30 - 39 lat (1993 - 84)</span>
            </p>
            <p>
              <span>K40, M40, 40 - 49 lat (1983 - 74)</span>
            </p>
            <p>
              <span>K50, M50, 50 - 59 lat (1973 - 64)</span>
            </p>
            <p>
              <span>M60, 60 - 69 lat (1963 - 54)</span>
            </p>
            <p>
              <span>K60, 60 lat i wi??cej (1963 i starsze)</span>
            </p>
            <p>
              <span>M70, 70 lat i wi??cej (1953 i starsi)</span>
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
                - wszyscy, zweryfikowani zawodnicy otrzymaj?? pakiet startowy
                (numer, chip, plecak biegowy),
              </span>
            </p>
            <p>
              <span>
                - w klasyfikacji generalnej kobiet i m????czyzn w poszczeg??lnych
                biegach i w Nordic Walking ??? po 3 puchary,
              </span>
            </p>
            <p>
              <span>
                - zwyci??zcy w poszczeg??lnych kategoriach otrzymaj?? statuetki,
              </span>
            </p>
            <p>
              <span>
                - puchar dla najlepszej zawodniczki i zawodnika Gminy Gryfino,
              </span>
            </p>
            <p>
              <span>
                -
                <strong>
                  {" "}
                  zawodnicy nagrodzeni w klasyfikacji generalnej kobiet i
                  m????czyzn nie b??d?? nagradzani w kategoriach wiekowych,
                </strong>
              </span>
            </p>
            <p>
              <span>
                - wszyscy, kt??rzy uko??cz?? bieg w limicie czasu otrzymaj??
                pami??tkowe medale,
              </span>
            </p>
            <p>
              <span>
                -bony podarunkowe otrzymaj?? zawodnicy, kt??rzy w swoim biegu
                zajm?? nast??puj??ce miejsce na mecie:
                <strong>
                  <br />{" "}
                </strong>
                <br />{" "}
                <strong>
                  13, 18, 22, 25, 31, 36, 39, 45, 57, 65, 76, 83, 89, 100, 101,
                  109, 116, 122, 136, 145, 157, 165, 176, 182, 199, 204, 210,
                  218, 221, 228.
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
                W celu weryfikacji ka??dy zawodnik musi zg??osi?? si?? osobi??cie w
                biurze zawod??w (
                <strong>
                  nie ma mo??liwo??ci odebrania pakietu startowego w imieniu innej
                  osoby
                </strong>
                ), w budynku I Liceum Og??lnokszta??c??cego w Gryfinie, ul.
                Niepodleg??o??ci 16 (400 m od miejsca startu):
              </span>
            </p>
            <p>
              <span>
                - W przeddzie?? zawod??w - 2.05.2023 r. w godz. 16:30 ??? 19:00
              </span>
            </p>
            <p>
              <span>- W dniu zawod??w - 3.05.2023 r. od godz. 8:30 ??? 11:00</span>
            </p>
            <p>
              <span>
                - Zawodnicy powy??ej 18 roku ??ycia podpisuj?? o??wiadczenie o biegu
                na w??asn?? odpowiedzialno????.
              </span>
            </p>
            <p>
              <span>
                - Osoby w wieku 16-18 lat (kt??re w dniu biegu tj. 3 maja 2023
                nie osi??gn????y jeszcze pe??noletno??ci) zobowi??zane s?? do
                posiadania pozwolenia na udzia?? od rodzic??w lub prawnych
                opiekun??w, z ich podpisem i nr PESEL.
              </span>
            </p>
            <br />
            <p>
              <span>
                <strong>
                  Warunkiem dopuszczenia ich do startu jest obecno???? rodzica lub
                  opiekuna prawnego wraz z dowodem osobistym w momencie
                  weryfikacji zawodnika w biurze zawod??w. Powy??sze nie dotyczy
                  zawodnik??w zrzeszonych w klubach sportowych, posiadaj??cych
                  aktualne badania lekarskie wystawione przez lekarza
                  sportowego, kt??re nale??y okaza?? przy weryfikacji. Osoby
                  poni??ej 16 roku ??ycia (liczy si?? rok urodzenia) nie b??d?? do
                  biegu przyj??te.
                  <br />
                </strong>
              </span>
            </p>
            <StaticImage
              src="../../images/weryfikacja.png"
              width={800}
              quality={85}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              style={{ margin: "24px auto 32px" }}
            />
            <br />
            <p>
              <strong>
                <span>WZ??R O??WIADCZENIA (osoby niepe??noletnie)</span>
              </strong>
            </p>
            <br />
            <p>
              <span>
                O??wiadczam, ??e znany jest mi stan zdrowia syna/c??rki JANA
                KOWALSKIEGO
              </span>
            </p>
            <p>
              <span>
                i mo??e wzi???? udzia?? w 7. edycji Gryfi??skiego Transgranicznego
                Festiwalu Biegowego (bieg na 10 000 m).
              </span>
            </p>
            <p>
              <span>
                Wyra??am zgod?? na przetwarzanie danych osobowych syna/c??rki dla
                cel??w weryfikacji i umieszczenia w komunikacie ko??cowym, a tak??e
                dla cel??w marketingowych biegu.
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
                <span>SPRAWY R????NE:</span>
              </strong>
            </p>
            <br />
            <p>
              <span>
                - Pakiet startowy przys??uguje zawodnikowi, kt??ry zamierza w
                biegu wystartowa??.
              </span>
            </p>
            <p>
              <span>
                - Przydzielone numery startowe powinny si?? znajdowa?? na klatce
                piersiowej zawodnika,
              </span>
            </p>
            <p>
              <span>
                - Komunikat ko??cowy b??dzie dost??pny na stronach csir.gryfino.pl,
                maratonypolskie.pl, domtel.pl, gryfinobiega.pl,
              </span>
            </p>
            <p>
              <span>
                - Galeria zdj???? b??dzie dost??pna na stronach csir.gryfino.pl,
                maratonypolskie.pl, gryfinobiega.pl,
              </span>
            </p>
            <p>
              <span>
                - Przebieralnia oraz toaleta znajdowa?? si?? b??dzie w miejscu
                weryfikacji,
              </span>
            </p>
            <p>
              <span>- Oznakowanie trasy co ka??dy kilometr,</span>
            </p>
            <p>
              <span>
                - Wszyscy zawodnicy startuj?? w biegu na w??asn?? odpowiedzialno????.
                Organizator zaleca, aby ubezpieczyli si?? na w??asny koszt od
                nast??pstw nieszcz????liwych wypadk??w, - Organizator zapewnia wod??
                niegazowan?? na trasie biegu,
              </span>
            </p>
            <p>
              <span>
                - Organizator nie odpowiada za zaginione rzeczy osobiste
                zawodnik??w w czasie trwania zawod??w.
              </span>
            </p>
            <p>
              <span>- W pobli??u startu znajdowa?? si?? b??dzie DEPOZYT,</span>
            </p>
            <p>
              <span>
                - Parking dla samochod??w znajduje si?? w miejscu weryfikacji
                (wjazd od ul. Niepodleg??o??ci, od strony po??udniowej miasta),
              </span>
            </p>
            <p>
              <span>- Bieg odb??dzie si?? bez wzgl??du na pogod??,</span>
            </p>
            <p>
              <span>
                - Uczestnicy maj?? obowi??zek zachowania zasad fair-play podczas
                trwania zawod??w,
              </span>
            </p>
            <p>
              <span>
                - Po zako??czeniu biegu zawodnicy na podstawie talonu
                konsumpcyjnego otrzymaj?? posi??ek regeneracyjny, nap??j
                izotoniczny,
              </span>
            </p>
            <p>
              <span>
                - Po zako??czeniu biegu ka??dy zawodnik, na podstawie otrzymanego
                karnetu, b??dzie m??g?? skorzysta??
                <br /> z Centrum Wodnego ???Laguna??? (ok. 800 m od mety),
              </span>
            </p>
            <p>
              <span>
                - Organizatorzy zastrzegaj?? sobie prawo interpretacji
                niniejszego regulaminu.
              </span>
            </p>
            <br />
            <p>
              <span>
                <strong>
                  UWAGA!!! Organizator nie przewiduje mo??liwo??ci umieszczania na
                  punktach z wod?? od??ywek zawodnik??w.
                </strong>
              </span>
            </p>
            <br />
            <br />
            <p>
              <span>
                W zwi??zku z zapisami art. 13 ROZPORZ??DZENIA PARLAMENTU
                EUROPEJSKIEGO I RADY (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
                sprawie ochrony os??b fizycznych w zwi??zku z przetwarzaniem
                danych osobowych i w sprawie swobodnego przep??ywu takich danych
                oraz uchylenia dyrektywy 95/46/WE (RODO) (Dz.U.UE. z 2016 r., L
                119, poz. 1) informujemy, ??e: CSiR Gryfino, jest
                administratorami danych osobowych zbieranych w celu organizacji
                i przeprowadzenia 7. Gryfi??skiego Transgranicznego Festiwalu
                Biegowego. Pa??stwa dane osobowe przetwarzane b??d?? zgodnie z
                obowi??zuj??cymi przepisami prawa a rodzaj pobieranych danych i
                spos??b ich przetwarzania jest niezb??dny do prawid??owej
                organizacji biegu. W celu wykonania umowy przekazujemy Pa??stwa
                dane firmie DOMTEL-SPORT ul. Aluchny-Emelianow 23, 76-200
                S??upsk, NIP: 839-002-80-09 zajmuj??cej si?? prowadzeniem zapis??w
                na biegi oraz pomiarem czasu na zawodach. Maj?? Pa??stwo prawo do
                bezp??atnej informacji dotycz??cej Pa??stwa danych osobowych, kt??re
                s?? u nas przechowywane, a tak??e prawo do ich sprostowania,
                ograniczenia przetwarzania, usuni??cia tych danych lub ich
                przeniesienia. W przypadku pyta?? dotycz??cych gromadzenia,
                przetwarzania i wykorzystania Pa??stwa danych osobowych,
                sprostowania, blokowania czy kasowania danych oraz w celu
                odwo??ania udzielonych zg??d lub wyra??enia sprzeciwu wobec
                wykorzystywania okre??lonych danych, prosimy o kontakt z
                administratorem danych: CSiR w Gryfinie, ul. Wodnika 1, 74-100,
                Gryfino, sport@csir.gryfino.pl Ponadto przys??uguje Pa??stwu prawo
                do z??o??enia skargi do w??a??ciwego organu nadzorczego.
              </span>
            </p>
            <br />
            <br />
            <p>
              <span>O??wiadczenie zawodnik??w:</span>
            </p>
            <br />
            <p>
              <span>
                O??wiadczam, ??e zosta??em(??am) poinformowany(na) o prawie wgl??du
                do moich danych oraz do z??o??enia wniosk??w o ich poprawienie.
                Przekazanie danych osobowych Uczestnika jest dobrowolne,
                jednak??e stanowi warunek uczestnictwa w 7. Gryfi??skim
                Transgranicznym Festiwalu Biegowym. Wyra??am zgod?? na
                przetwarzanie moich danych osobowych, w tym do ich udost??pnienia
                przez CSiR Gryfino, w celu zamieszczania wynik??w z biegu oraz na
                nieodp??atn?? publikacj?? wizerunku utrwalonego w przekazach
                telewizyjnych, internetowych, radiu, gazetach, magazynach i
                umieszczania wizerunku w materia??ach promocyjno- reklamowych
                wydawanych przez organizatora. Ponadto, wyra??am zgod?? na
                przekazywanie mi za pomoc?? poczty elektronicznej informacji o
                przysz??ych imprezach Organizatora, a tak??e do gromadzenia moich
                danych do potrzeb administracyjnych i analitycznych. Wyra??am
                tak??e zgod?? na nieodp??atne wykorzystanie mojego wizerunku
                utrwalonego w formie fotografii lub zapisu video. Na podstawie
                par.2 ust.1 pkt 6 Rozporz??dzenia Ministra Edukacji Narodowej z
                dnia 12 wrze??nia 2001r. w sprawie szczeg??lnych zasad i warunk??w
                prowadzenia dzia??alno??ci w dziedzinie rekreacji ruchowej
                o??wiadczam, ??e jestem zdolny(a) i nie wyst??puj?? w przypadku
                mojej osoby przeciwwskazania zdrowotne do udzia??u w 7.
                Gryfi??skim Transgranicznym Festiwalu Biegowym. Zg??oszenie si?? do
                zawod??w jest r??wnoznaczne z akceptacj?? powy??szego o??wiadczenia.
              </span>
            </p>
            <br />
            <br />
            <p style={{ marginBottom: "48px" }}>
              <span>Dyrektor Biegu - Jan Podle??ny</span>
            </p>
            <a href={Rules}>Pobierz Regulamin w formie pliku PDF</a>
          </Box>
        </Container>
      </Component>
    </Layout>
  )
}

export default TransgranicznyRegulaminPage
