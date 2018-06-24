# Match your Voice - Backend
### Patrick van der Veldt - 500763654

### Installatie:
```
git clone https://github.com/patrickvdveldt/be-assessment-2.git
```
```
- npm install
- npm run build
- npm start
- localhost:3000
```

Installeer de onderstaande pakketten:
- [Express](https://github.com/expressjs/express)
- [Multer](https://github.com/expressjs/multer)
- [MySQL](https://github.com/mysqljs/mysql)
- [Express-Session](https://github.com/expressjs/session)
- [Body Parser](https://github.com/expressjs/body-parser)

### Match Your Voice onderbouwing:
Match Your Voice is al het ware een mengelmoes van Tinder en The Voice of Holland.
Als het ware een datingsapp op basis van spraakmemo’s.
Gebruikers zullen met mijn app door middel van spraakmemo’s die zij zelf mogen inspreken (op basis van een aantal voorwaarden) op zoek moeten gaan naar de perfecte match.
Met deze spraakmemo’s is het voor de gebruikers van belang, dat zij in 20/30 seconden zich op een leuke en interessante wijze zich voor kunnen stellen aan hun wellicht toekomstige date. Deze spraakmemo wordt dan gekoppeld met zijn/haar account plus een aantal overige andere belangrijke vragen, zoals het opgeven van een leeftijd, naam, etc.
Om ervoor te zorgen dat er geen grove spraakmemo’s ontstaan, ben ik van plan om Match Your Voice te koppelen met een Google spraakherkenning.
Wanneer er wederzijds een like is uitgedeeld, ontstaat er een zo genoemde “match”, dat ervoor zorgt dat gebruiker contact met elkaar kunnen opnemen door middel van een berichtje. Dit is alleen mogelijk bij het hebben van een match.
Na het behalen van een match, worden beide profielen wederzijds geheel zichtbaar en is het nu dus ook mogelijk om elkaar profielfoto’s te kunnen bekijken. Dit is alleen mogelijk bij het hebben van een match (Stoel draait om; ‘Voice of Holland’)…

![Image of Yaktocat](https://github.com/patrickvdveldt/matchyourvoice/blob/master/db/image/login.png)
![Image of Yaktocat](https://github.com/patrickvdveldt/matchyourvoice/blob/master/db/image/home.png)
![Image of Yaktocat](https://github.com/patrickvdveldt/matchyourvoice/blob/master/db/image/berichten.png)
![Image of Yaktocat](https://github.com/patrickvdveldt/matchyourvoice/blob/master/db/image/chat.png)
![Image of Yaktocat](https://github.com/patrickvdveldt/matchyourvoice/blob/master/db/image/berichten.png)
![Image of Yaktocat](https://github.com/patrickvdveldt/matchyourvoice/blob/master/db/image/profiel.png)

### Overzicht van de belangrijkste code bestanden/mappen:
```
- view/index.ejs
- view/berichten.ejs
- view/chat.ejs
- view/error.ejs
- view/loggedprofile.ejs
- view/matchprofile.ejs
- db/image
- website/Login_v2/login.html
- website/css
- server.js
- package.json
```

### Voortgang:
- [x] HTML/CSS
- [x] FORMS
- [x] EXPRESS SERVER
- [x] MYSQL DATABASE
- [x] INLOGGEN
- [x] REGISTREREN
- [x] PROFIEL AANPASSEN
- [x] FILE UPLOAD
- [x] MATCHEN
- [x] README



### Credits:
Ik heb gedurende dit backend project veel om hulp moeten vragen omdat ik er vaak zelf (na het doen van onderzoek op internet) niet uit kwam.
Credits to: *Wouter Lem, Mats de Feber & Folkert-jan van der Pol*
