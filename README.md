# it2810-webutvikling-h18-prosjekt-3-40

####This project uses the native-base module:
If you run into trouble, cd to strong-as-bull and type npm install

I tillegg til appens forside har den tre andre tabs med henholdsvis notater, kontakter og mål. Mål-seksjonen har en skrittellerfunksjon samt en oversikt over hvor langt på vei brukeren er mot sitt mål. Kontakter-seksjonen har en liste med brukerens kontakter, samt vindu for å legge til nye kontaker eller endre eksisterende kontakter. Det er mulig å navigere seg inn på en side som dedikeres til en bruker, som viser et større profilbilde samt info om brukeren. Det er også mulig å slette brukere, og da blir asyncStorage også oppdatert. Notater er en generisk notat-funksjonalitet som kan brukes til det brukeren ønsker, for eksempel oppgaver, todos, eller avtaler. Både kontakter og notater kan endres eller fjernes av brukeren. Notatsiden ble redesignet flere ganger for å passe med layouten på resten av appen.

Bruk av AsyncStorage:
Asyncstorage brukes kontakt- og notat-seksjonene for å lagre data på selve enheten. Når siden åpnes hentes ut allerede eksisterende data, dersom den eksistere, og når punkter oppdateres eller slettes lagres dette også på enheten. Dette gjør at brukeren slipper å unødig laste ned potensielt store mengder data til enheten, hver gang appen brukes.


Tredjepartskomponenter:
Vi har brukt flere tredjepartskomponenter som vi synes har fungert godt. I vår goals-tab har vi brukt pedometer, slik at vi kan bruke telefonen til registrere brukerens skritt. Når vi hadde fått inn skritt fra brukeren ville vi også ha en måte å vise brukeren hvor mye han/hun/den har gått, og hvor nære brukeren er å nå skrittmålet sitt. For å få til dette brukte en en progressbar-komponent som var lett å bruke. 

I contacts- og notes-tabene våre har vi benyttet oss av en swipe-komponent som er ganske elegant. Hvis man sveiper til venstre på et notat eller en kontakt, får man opp en sidemeny der man kan endre eller slette notatet eller kontakten.

For pedometeret tok vi utganspunkt i eksempelkoden til komponenten (lenken til komponentene finnes under) og jobbet ut fra den. Dokumentasjonen var dessverre ikke så  utfyllende, noe som gjorde det litt vanskelig å implementere. For eksempel er vi nødt til å restarte applikasjonen hver gang vi skal reloade skrittelleren i expo, noe som ikke er optimalt, men vi fant ingen måte å løse det på.

Progressbar-komponenten var mye enklere å implementere…

Swipe-komponenten…

For å bruker pedometeret gjør man slik…
For å bruker progressbar gjør man slik…
For å bruker swipe gjør man slik…


https://docs.expo.io/versions/latest/sdk/pedometer

Plattformuavhengighet

På gruppen vår har vi både android og iphone, noe som har gitt oss god kontroll over hvordan applikasjonen vår har fungert på begge operativsystem. Vi har passet spesielt godt på at knapper og ikoner ser bra ut på alle enheter vi har hatt tilgang til. Vi synes applikasjonen fungerer godt og har ikke hatt noen operativsystemrelaterte problemer.


