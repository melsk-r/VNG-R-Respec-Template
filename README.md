## ReSpec template instructies

ReSpec is een tool om html en pdf documenten te genereren op basis van markdown content.

Gebruik de knop [_Use this template_](https://github.com/melsk-r/VNG-R-Respec-Template/generate) om aan de slag te gaan. Dit maakt een kopie van de template in uw eigen GitHub repository die dan aangepast en uitgebreid kan worden.

De dynamische pagina van het template document is [hier](https://melsk-r.github.io/VNG-R-Respec-Template/) te zien.

Deze repository bevat ook de GitHub Workflows om een statische HTML-pagina en PDF-document te genereren en enkele controles uit te voeren. Deze workflows worden 
automatisch gerund zodra er een aanpassing gedaan wordt aan de main branch. <-- Deze heb ik nog niet werkende.

### Vereiste voor gebruik
- Kennis van git/github
- Kennis van markdown en/of HTML
- Kennis van de vorm van een Javascript object
- Een webserver om de documentatie te hosten

### Gebruikersinstructie
Om het gebruik van dit template makkelijker te maken raden we het aan om een IDE te gebruiken. Die geeft een voorbeeld van hoe de markdown eruit zal zien, kan laten zien of de config files nog in de correcte vorm zijn en kan helpen in het gebruik van git.  
Een gratis voorbeeld van een IDE is: [Visual studio code](https://code.visualstudio.com/).

Aanpassingen maken aan het document gaat op 2 manieren:
- De configuratie van het document aanpassing in de config files
- Markdown of html files toevoegen/veranderen

De **configuratie files** bevatten informatie over de organisatie en over 
de status van het document. Bekijk de [Logius ReSpec wiki](https://github.com/Logius-standaarden/respec/wiki) 
voor meer informatie over de configuratie opties. De files zijn gesplitst in 2 files die weer in 2 verschillende repositories zijn ondergebracht:
[organisation-config.js](https://github.com/melsk-r/Respec-Organization-configurations/blob/main/js/organisation-config.js) en [config.js](js/config.js).

De organisation_config (organisation-config.js) bevat configuratie properties die betrekking hebben op alle VNG-R Respec documentatie, de properties in deze file 
zullen zelden veranderen zoals bijv. de naam van de organisatie. 

De document_config (config.js) bevat configuratie properties die alleen relevant is voor het betreffende Respec document en hoort dan ook in elke Respec renderende repository thuis.

Beide configuratie bestanden worden gelinkt in de `index.html` file waardoor ze beide bij het renderen van de Respec documentatie automatisch worden samengevoegd. Daardoor zijn de organisatie specifieke configuraties over alle Respec documentatie van VNG-R gelijk en
hoeft deze niet steeds gekopieerd te worden. Op deze wijze zorgen we er voor dat alle VNG-R Respec documenten zo eenduidig mogelijk zijn en blijven. 

In VNG-R-WOW.md staat beschreven hoe je de inhoud van het Respec document naar wens kunt aanpassen.

### Automatische controles  <-- Deze heb ik nog niet werkende.
Bij het uploaden van een nieuwe versie naar github worden er via github actions 2 controles 
uitgevoerd:  

Een WCAG-check (Web Content Accessibility Guidelines), deze guidelines gemaakt door W3C zorgen voor een verbetering van de toegankelijkheid van webapplicaties verbeterd voor zowel verschillende apparaten  als voor mensen met een beperking. Ook wordt de validiteit van het HTML bestand gecheckt, bijv.:
* of er geen `<section>` elementen met 'id' attributen voorkomen die al voorkomen in het bestand;
* of er geen `<a>` elementen voorkomen met 'href' attributen die verwijzen naar `<section>` elementen die helemaal niet bestaan.

Een link-check, deze check controleert of alle links die in het document staan ook naar iets wijzen.

outputs van deze tests zijn te vinden in het tabblad `Actions` in de GitHub repository.

### Publiceren van documenten
Na een update in de main branch wordt er een statische HTML en een PDF-versie gepubliceerd, indien de repo onder [Logius-standaarden](https://github.com/Logius-standaarden) op GitHub staat.
De PDF-versie wordt aangemaakt indien `alternateFormats` in `config.js` geconfigureerd staat:
```js
alternateFormats: [
  {
	  label: "pdf",
	  uri: "template.pdf",
  },
]
```
