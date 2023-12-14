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

### Rendering, automatische controles en publicatie
Het bestand '.github/workflows/build.yml' bevat een action script waarmee automatisch een drietal acties worden uitgevoerd nadat een bestand in de repository wordt gewijzigd, toegevoegd of verwijderd:
* het renderen van het Respec document;
* het checken of de gerenderde Respec html wel correct is en voldoet aan de toegankelijkheidseisen;
* het publiceren van de gegenereerde statische html en pdf naar een centrale Respec publicatie repository.

We beschrijven alle 3 de acties in het kort hieronder. Aangezien we de laatste actie nog niet werkende hebben wordt deze voorlopig nog handmatig uitgevoerd, ook dat beschrijven we. 
De resultaten van deze acties zijn te vinden in het tabblad `Actions` in de GitHub repository.

#### Rendering
Deze actie start het renderen van de Respec html. Vervolgens wordt er op basis daarvan een statische html en een pdf bestand gegenereerd. Die laatste 2 worden in de laatste actie gebruikt om te publiceren.

De PDF-versie wordt alleen aangemaakt indien `alternateFormats` in de document_config (config.js) als volgt geconfigureerd staat:
```js
alternateFormats: [
  {
	  label: "pdf",
	  uri: "template.pdf",
  },
]
```

#### Checken
Na het renderen van de Respec html en pdf worden er via github actions 2 controles uitgevoerd op de html:  

* een WCAG-check (Web Content Accessibility Guidelines), deze guidelines gemaakt door W3C zorgen voor een verbetering van de toegankelijkheid van webapplicaties verbeterd voor zowel verschillende apparaten  als voor mensen met een beperking. Ook wordt de validiteit van het HTML bestand gecheckt, bijv.:
  - of er geen `<section>` elementen met 'id' attributen voorkomen die al voorkomen in het bestand;
  - of er geen `<a>` elementen voorkomen met 'href' attributen die verwijzen naar `<section>` elementen die helemaal niet bestaan.

  Deze check moet eerst succesvol uitgevoerd zijn voordat wordt begonnen aan de volgende check. In de 'Action' die start met het woord 'Update' (zie het `Actions` tabblad) kun je in de actie 'Check/WCAG' de step 'Run pa11y snapshot.html' vinden. Daar kun je zien welke fouten geconstateerd zijn.
* een link-check, deze check controleert of alle links die in het document staan ook bestaan. Het gaat dan bijv. om de links die worden vermeldt in:
  - Deze versie'
  - 'Laatst gepubliceerde versie'
  - 'Laatste werkversie'
  - 'Vorige versie'
 
  Deze links verwijzen naar specifieke locaties in de GitHub Pages interface van de 'publicatie' GitHub repository (zie de volgende subparagraaf voor meer uitleg). Om deze check goed te kunnen doorstaan moeten deze locaties dus al bestaan in die interface. Indien dat nog niet gedaan is moet daar de folder voor het nieuwe versienummer van de Respec documentatie al worden aangemaakt. Plaats in die folder dan ook een tijdelijk 'index.html' bestand. De inhoud van dat bestand is (nog) niet van belang.

> **LET OP!**
> Onderstaand tekst is slechts een voorstel evenals de structuur van de publicatie GitHub repository.
> De definitieve url kan indien gewenst nog andere onderdelen bevatten zoals `publishDate`, `previousPublishDate`, `specStatus`, `previousMaturity` of andere onderdelen.

Bij het genereren van de links zijn op dit moment de volgende configuration properties van belang:
* nl_organisationPublishURL<br/>
  De basis url van de GitHub Pages interface van de 'publicatie' GitHub repository, op dit moment: `https://melsk-r.github.io/publicatie`. Deze is gedefinieerd in de organisation_config aangezien deze altijd gelijk blijft.
* pubDomain<br/>
  Het publicatie domein. Aangezien we vooralsnog slechts voor Conceptuele Modellen Respec documentatie genereren heeft deze de waarde `cim` en staat deze gedefinieerd in de organisation_config. Zo nodig kan deze overruled worden in de document_config. Vergeet in dat geval niet om ook de structuur in de 'publicatie' GitHub repository aan te passen.
* latestVersion<br/>
  Wordt opgebouwd a.d.h.v. een aantal andere configuratie properties uit zowel de organisation_config als de document_config en enkele statische waardes. Deze is gedefinieerd in de organisation_config aangezien deze altijd gelijk blijft.
* thisVersion<br/>
  Wordt opgebouwd a.d.h.v. een aantal andere configuratie properties uit zowel de organisation_config als de document_config en enkele statische waardes. Deze is gedefinieerd in de organisation_config aangezien deze altijd gelijk blijft.
* prevVersion<br/>
  Wordt opgebouwd a.d.h.v. een aantal andere configuratie properties uit zowel de organisation_config als de document_config en enkele statische waardes. Deze is gedefinieerd in de organisation_config aangezien deze altijd gelijk blijft.
* shortName<br/>
  De project mnemonic, een afkorting van het project. Zo wordt het project 'Open Raadsinformatie' wordt bijv. afgekort als 'ori'. Deze is gedefinieerd in de document_config aangezien deze natuurlijk afhankelijk is van het te genereren Respec document.
* publishVersion<br/>
  De versie van het te publiceren Respec document. Komt overeen met de Tagged Value 'Version' in het Enterprise Architect bestand van het model en heeft een waarde dat voldoet aan het formaat `x.x.x`, bijv. `2.0.0`. Deze is gedefinieerd in de document_config aangezien deze natuurlijk afhankelijk is van het te genereren Respec document.
* previousVersion<br/>
  De voorgaande versie van het te publiceren Respec document. Komt overeen met de Tagged Value 'Version' in het Enterprise Architect bestand van het voorgaande versie van het model en heeft een waarde dat voldoet aan het formaat `x.x.x`, bijv. `2.0.0`. Deze is gedefinieerd in de document_config aangezien deze natuurlijk afhankelijk is van het te genereren Respec document.

Het consistent en nauwgezet invullen van de configuratie properties in de document_config is essentieel voor een goede werking van de links.

### Publiceren van documenten
Het is de bedoeling dat het publiceren van de statische html en pdf geautomatiseerd gaat verlopen. Dat hebben we helaas nog niet op orde en om die reden doen we dit voorlopig handmatig.

Het publiceren van alle Respec documenten gebeurd via de GitHub repository 'publicatie' waarin de volgende consistente structuur vereist is:

cim<br/>
&nbsp;&nbsp;&nbsp;&nbsp;[project mnemonic]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[x.x.x]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;media<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.html<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cim-[project mnemonic]-[x.x.x].pdf<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;media<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.html<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cim-[project mnemonic]-[x.x.x].pdf

In dit overzicht vertegenwoordigd `x.x.x` het versienummer van het Respec document. De folder met die naam kan zich herhalen maar komt minimaal 1x voor, de huiidge versie. De inhoud van die folder wordt dan eveneens geplaatst in de folder [project mnemonic]. `project mnemonic` is de afkorting voor een project. 'Open Raadsinformatie' wordt bijv. afgekort als 'ori'. Hieronder zie je een voorbeeld van deze structuur:

![image](https://github.com/melsk-r/VNG-R-Respec-Template/assets/20185784/0ad7caf7-7c5b-4e72-9bee-09f7e9a93656)

De statische html en pdf worden vanuit de GitHub repository waarin ze gegenereerd zijn gekopieerd naar de gewenste folders in de 'publicatie' repository. Zo nodig dien je nieuwe folders aan te maken.
