# it2810-webutvikling-h18-prosjekt-3-40

Vi startet med å bruke expo-cli og expo init for å opprette prosjektet. Da valgte vi å bruke Tabsene som fulgte med og endret de til å være Home, Notes, Contacts og Goals. Home er en veldig enkel statisk velkomstside. Vi valgte at hver person skulle ha ansvar for hver sin tab. 

#### Notes:

Notater er en generisk notat-funksjonalitet som kan brukes til det brukeren ønsker, for eksempel oppgaver, todos, eller avtaler. Både kontakter og notater kan endres eller fjernes av brukeren. Notatsiden ble redesignet flere ganger for å passe med layouten på resten av appen.

#### Contacts:

Kontakter-seksjonen har en liste med brukerens kontakter, samt vindu for å legge til nye kontakter eller endre eksisterende kontakter. Det er mulig å navigere seg inn på en side som dedikeres til en bruker, som viser et større profilbilde samt info om brukeren. Det er også mulig å slette brukere, og da blir asyncStorage også oppdatert.

#### Goals:

Mål-seksjonen har en skrittellerfunksjon samt en oversikt over hvor langt på vei brukeren er mot sitt mål. Vi hadde egentlig tenkt at brukeren kunne opprette mange forskjellige mål, men det skapte problemer med skrittelleren. Problemene var nok ikke uoverkommelige, men vi følte ikke at det var viktig å bruke masse tid på ettersom at vi kunne vise bruk av skritteller på en annen måte. Derfor valgte vi heller at siden skulle vise hvor mange skritt du har gått i dag. Man kan også se om man har møtt sitt daglige mål, som enkelt kan endres. Man kan se hvor nærme man er til å nå målet ved å se på diagrammet midt på skjermen.

#### Bruk av AsyncStorage:

Asyncstorage brukes kontakt- og notat-seksjonene for å lagre data på selve enheten. Når siden åpnes hentes ut allerede eksisterende data dersom den eksisterer, og når punkter oppdateres eller slettes lagres dette også på enheten. Dette gjør at brukeren slipper å unødig laste ned potensielt store mengder data til enheten, hver gang appen brukes.
NB: dersom det ikke finnes noen ‘contacts’ i AsyncStorage, lastet automatisk ca 30 dummy-kontakter inn fra en mock-data json fil, slik at en lett kan se hvordan lista oppfører seg med mange elementer uten å måtte legge inn en haug med data manuelt. Disse lagres selvfølgelig i AsyncStorage ved endring/sletting, og hentes senere kun derfra.

#### Tredjepartskomponenter:

Vi har brukt flere tredjepartskomponenter som vi synes har fungert godt. I vår goals-tab har vi brukt pedometer (skritteller), slik at vi kan bruke telefonen til registrere brukerens skritt. Når vi hadde fått inn skritt fra brukeren ville vi også ha en måte å vise brukeren hvor mye han/hun/den har gått, og hvor nære brukeren er å nå skrittmålet sitt. For å få til dette brukte en en progressbar-komponent som var lett å bruke.

I contacts- og notes-tabene våre har vi benyttet oss av en swipe-komponent som er ganske elegant. Hvis man sveiper til venstre på et notat eller en kontakt, får man opp en sidemeny der man kan endre eller slette notatet eller kontakten.

For pedometeret tok vi utganspunkt i eksempelkoden til komponenten (lenken til komponentene finnes under) og jobbet ut fra den. Dokumentasjonen var dessverre ikke så  utfyllende, noe som gjorde det litt vanskelig å implementere. For eksempel er vi nødt til å restarte applikasjonen hver gang vi skal reloade skrittelleren i expo, noe som ikke er optimalt, men vi fant ingen måte å løse det på. På grunn av manglende dokumentasjon så måtte vi endre helt på mål siden. Vi hadde tenkt at brukeren kunne lage mange forskjellige mål, der man kunne velge tidsperiode og antall skritt. Når vi prøvde å bruke skrittelleren i forskjellige komponenter så kræsjet expo appen.

Progressbar-komponenten var mye enklere å implementere. Vi prøvde noen av de ulike typene, og endte opp å velge den som ser ut som et kakediagram. Vi synes den så bra ut i appen vår og det var enkelt å style den.
Swipe-komponenten…

##### For å bruke pedometeret:

- Gå til dokumentasjonssiden til pedometeret.
- Kopiere eksempel koden i en ny javascript fil.
- Teste at den fungerer i appen.
- Jobbe ut ifra eksempel koden for å få ønsket funksjonalitet

##### For å bruke progressbar:

- Her gjorde vi akkurat det som sto i dokumentasjonen, men mer spesifikt for vårt prosjekt.
- Installere komponenten med: npm install react-native-progress --save
- Importere med: import * as Progress from ‘react-native-progress’;
- Så brukte vi la vi inn <Progress.Pie> komponenten i render funksjonen til pedometeret
- Vi satt progress propertyen til progress staten til pedometeret.

##### For å bruke swipe:

- Installere komponenten med: npm install react-native-swipeout --save
- Importere med: import Swipeout from 'react-native-swipeout';
- Bruk som vanlig element, men definere settings som knapper og onPress-funksjoner


#### Plattformuavhengighet

På gruppen vår har vi både android og iphone, noe som har gitt oss god kontroll over hvordan applikasjonen vår har fungert på begge operativsystem. Vi har passet spesielt godt på at knapper og ikoner ser bra ut på alle enheter vi har hatt tilgang til. Vi synes applikasjonen fungerer godt og har ikke hatt noen operativsystemrelaterte problemer.

Vi har dekomponert utviklingen i issues på GitHub som vi har koblet opp mot Pull Requests slik at vi kunne ha en god oversikt over hva som ble gjort, og av hvem.

#### Testing

Da vi søkte rundt på hvordan man instansierer, mocker og tester forskjellige aspekter som state og props, dukket enzyme opp som løsning i de aller fleste tilfeller. Vi utførte derfor snapshot-tester med jest slik det blant annet står forklart i forelesningsnotatene, testet litt constructor-metoder og sa oss fornøyde med det. (Vi skulle selvfølgelig optimalt sett ha testet alle metoder, resultatet av metodene og spesielle tilfeller, men vi fant altså ikke ut noen god måte å gjennomføre disse uten implementering av enzyme. Slik utdypende testing sparer vi derfor til siste prosjekt).

Vi har imidlertid enhetstestet prosjektet vårt grundig. Appen er testet både på iOS og android. På iOS har vi sørget for å bruke forskjellige simulatorer med ulik skjermstørrelse, for at minst mulig uforutsette formateringsproblemer skal oppstå. Det er testet på henholdsvis iPhone 7, X og X Max. Vi har også testet på våre egne, fysiske enheter, som er android telefoner, så vel som android studio og simulatorer, med ulike skjermformat for igjen å slippe nevnte problemer. Vi har systematisk testet prosjektet på samtlige skjermer gjennom prosjektets prosess, og har derfor endt opp med en app som vi mener fungerer som den skal på tvers av ulike plattformer, enheter og størrelser.

NB: ViewContact og ViewNote har ikke rendertester da constructoren henter ut data fra ‘this.props.navigation.state.params’, som vi ikke fikk mocket i jest.

#### Lenker

Progress bar dokumentasjon

https://github.com/oblador/react-native-progress

Pedometer dokumentasjon

https://docs.expo.io/versions/latest/sdk/pedometer

Swipeout dokumentasjon

https://github.com/dancormier/react-native-swipeout

