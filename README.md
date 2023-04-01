# Cypress Weekend Brno

Pripravili sme pre vás tento štartovací projekt, aby sme pre každý tím nastavili určitý štandard
pri odovzdaní svojho riešenia. V projekte sú nainštalované balíčky [Eslint](https://eslint.org/)
a [Prettier](https://prettier.io/) spolu s config súbormi.
Ak si myslíte, že potrebujete nejaké ďalšie pravidlá, pokojne ich pridajte.
Ďalej sme pridali [pre-commit hook](https://typicode.github.io/husky/#/),
ktorý pri commitovaní spustí skripty pre spomenutý Eslint a Prettier.

Pridali sme aj balíček [@testing-library/cypress](https://testing-library.com/docs/cypress-testing-library/intro/),
ktorý používame my osobne a môže sa vám pri práci hodiť.

## Vytvorenie repozitára

Vyberte si jedného člena tímu, ktorý si vytvorí pracovný repozitár pre celú skupinu
a zvyšok tímu s ním bude spolupracovať ako `Collaborators`:

1. Vytvor si nový súkromný repozitár na github.com (toto je `tvoj repozitár`):

   - Nazvi ho `cypress-weekend-04-2023-team-X`, kde X značí názov tvojho tímu – nájdeš ho na Slacku.
   - Neinicializuj ho s README, .gitignore, alebo licenciou.

2. Naklonuj si tento štartovací projekt na svoj počítač
   - `git clone https://github.com/CypressWeekend/cypress-weekend-04-2023.git`
3. Premenuj súčasný `origin` lokálneho repozitára na `upstream`:

   - `git remote rename origin upstream`

4. Nastav lokálnemu repozitáru `origin`, ktorý odkazuje na tvoj repozitár:

   - `git remote add origin https://github.com/tvoj-ucet/cypress-weekend-04-2023-team-X.git`

5. Pushni lokálny repozitár do tvojho repozitára na GitHube
   - `git push origin main`

Teraz `origin` ukazuje na tvoj repozitár a `upstream` ukazuje na náš repozitár.

## Prvé kroky s projektom

Počas práce na tasku nepushujte svoje zmeny priamo do master/main, ale vytvárajte Pull Requesty (PR).

V prvom Pull Requeste vytvorte základné Cypress súbory:

- Vytvor novú branch s `git checkout -b nazov-branche`.

Tento projekt sme inicializovali pomocou package managera `yarn`.
Ak chcete pracovať s týmto package managerom, pokračuj kapitolou [yarn](#yarn),
ak preferujete prácu s `npm`, riaď sa pokynmi v [npm](#npm).

### yarn

1. Nainštaluj dependencies pomocou `yarn install`.
2. Prvýkrát spusti Cypress pomocou `yarn cypress open`, čím sa vytvoria všetky úvodné Cypress súbory.
3. Pridaj do projektu aj balíček `cypress-plugin-xhr-toggle` od Filipa Hrica,
   ktorý vám (a následne aj nám pri robení CR) pomôže s prehľadnosťou pri spúšťaní testov.
4. Nastav všetko, čo na úvod považujete za potrebné a zmeny commitni.
5. Pushni svoje zmeny a vytvor prvý PR.

### npm

1. Nainštaluj dependencies pomocou `npm install`.
2. Zmeň príkazy `yarn lint` a `yarn prettier` v súbore `.husky/pre-commit` na `npm lint` a `npm prettier`.
3. Prvýkrát spusti Cypress pomocou `npm cypress open`, čím sa vytvoria všetky úvodné Cypress súbory.
4. Pridajte do projektu aj balíček `cypress-plugin-xhr-toggle` od Filipa Hrica,
   ktorý vám (a následne aj nám pri robení CR) pomôže s prehľadnosťou pri spúšťaní testov.
5. Nastav všetko, čo na úvod považujete za potrebné a zmeny commitni.
6. Pushni svoje zmeny a vytvor prvý PR.

## Práca počas eventu

Aby ste mohli na riešení pracovať spolu, pridaj zvyšok tímu do svojho nového súkromného
repozitára ako `Collaborators`. Zvyšok tímu si projekt naklonuje pomocou `git clone`.

## Odovzdanie riešenia

## Keď budete pripravení odovzdať svoje riešenie, pozvite `CypressWeekend` medzi `Collaborators`.
