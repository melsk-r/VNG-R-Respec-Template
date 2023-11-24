## Respec documentatie

### Generatie m.b.v. Imvertor

Het is mogelijk om met Imvertor Respec documentatie te genereren van een model. Daarbij spelen de volgende configuratieproperties een rol:

| Configuratieproperty | Mogelijke waarden | Uitleg |
| --- | --- | -- |
| createoffice | html, doc, none | Hiermee geef je aan of je een documentatie bestand wil genereren en zo ja in welk formaat (html of MsWord). De defaultwaarde is 'none', behalve in het geval van een SIM, daar is de default 'html'. De 'doc' optie is nog niet geïmplementeerd. |
| createofficeanchor | name, id | Geeft aan op welke basis hyperlink anchors moeten worden gegenereerd (op basis van id's of op basis van namen). De default is 'name'. Bij het genereren van zowel respec als msword zie ik geen verschillen. Vooralsnog maakt het dus niet uit welke variant je kiest. |
| createofficemode | plain, click | Definieert of er in het te genereren bestand hyperlinks moeten worden gegenereert. Bij de waarde 'click' is dat het geval. De defaultwaarde is 'plain'. |
| createofficevariant | respec, msword | Definieert het type te genereren document. Een Respec html document of een MsWord html variant. Meerdere formaten zijn toegestaan mits gescheiden door een spatie. |
| createimagemap | yes, no | Definieert of van de Diagrammen een imagemap moet worden gegenereerd. De default is 'yes'.|

Voor het genereren van Respec documentatie is het essentieel om in je lokale property bestand de property 'createofficevariant' de waarde 'respec' te geven. Normaliter zal je dan ook de property 'createofficemode' de waarde 'click' geven.
Dit resulteert er in dat in de folder 'app/cat' 2 Respec bestanden geplaatst, 1 in html en de ander in xhtml.

### Toepassing in GitHub

De acties die in de voorgaande paragraaf staan beschreven leveren alleen het html bestand voor de Respec documentatie op. Respec documentatie bestaat echter uit meer dan dat html bestand. Een deel van de content van de Respec documentatie wordt door het Respec framework in GitHub gegenereerd a.d.h.v. een aantal variabelen en toe te voegen html en/of md bestanden. Daarnaast verzorgt dat framework ook de vormgeving dat essentieel is voor Respec documentatie.

Binnen VNG-R maken we gebruik van een door Logius vervaardigde extensie op het W3C Respec framework. We volgen daarbij andere organisaties in Nederland die hetzelfde doen zoals Geonovum. Van het door Logius beschikbaar gestelde template is een VNG-R versie beschikbaar binnen de VNG-Realisatie GitHub organisatie. Dat geeft de mogelijkheid om te verwijzen naar een VNG-R Respec configuratie waardoor we specifiek voor VNG-Realisatie geldende configuraties, zoals bijv. het VNG-Realisatie logo, kunnen aanbrengen. Deze vind je in de repository 'Respec-Organization-configurations'.
Het template zelf kan echter door eenieder worden gebruikt om de eigen Respec documentatie te vervaardigen en daarbinnen bestaan nog mogelijkheden om jouw Respec documentatie een eigen tintje te geven.

Hieronder wordt de werkwijze beschreven waarbij de eerste 7 stappen moeten worden uitgevoerd door een GitHub organisatie administrator. Voorzie hem daarvoor van de gewenste respository naam.

#### Door administrator uit te voeren acties
1. Open het [VNG-R Respec template](https://github.com/melsk-r/VNG-R-Respec-Template) en klik in de README op die pagina op de link 'Use this template';
2. Je komt nu in het menu om een nieuwe repository aan te maken waarbij al een aantal velden is ingevuld. De te maken repository mag niet private zijn want dat maakt het gebruik van GitHub Pages onmogelijk. Geef de van de aanvrager verkregen repository naam in en klik op 'Create repository';
3. Voer de acties, zoals beschreven in [de handleiding voor het initieel inrichten van GitHub repositories](https://github.com/VNG-Realisatie/api-beheer/blob/master/doc/Standaard-inrichting-GitHub-GitLab.md), uit;
4. Verwijder in de root van de repository het 'README.md' bestand en hernoem 'Alt-README.md' naar 'README.md';
5. Activeer GitHub Pages voor de nieuwe repository. Selecteer daarvoor het tabblad 'Settings' en kies daar 'Pages';
6. Kies daar waar bij Branch 'None' staat voor 'main' en klik op 'Save';
7. Nadat de build en deployment is uitgevoerd ga je naar het 'Code' tabblad, klikt daar op het tandwieltje bij 'About' en klikt op de checkbox naast 'Use your GitHub Pages website'. Klikken op de resulterende link onder 'About' brengt je naar de standaard gegenereerde Repsec documentatie die nu kan worden aangepast door de eigenaar van de repository;

#### Door repository eigenaar uit te voeren acties

8. Je beschikt nu over een repository die je kunt gaan vullen en waarin je je persoonlijke configuratie properties van een waarde kunt voorzien. Plaats daartoe als eerste het in de voorgaande paragraaf gegenereerde html bestand in de root van de repository;
9. Van het bestand dat we zojuist geplaatst hebben gebruiken we alleen de 'section' met het id 'cat'. Verwijder alle andere content behalve de processing instruction 'DOCTYPE HTML' aan het begin van dit bestand en commit het bestand;
10. Open het bestand 'index.html' en plaatst daarin op de gewenste plaats het volgende html fragment:<br/><br/>
   `<section id="XXXX" data-include-format="html" data-include="XXXX.html"></section>`<br/><br/>
   Waarbij je 'XXXX.html' vervangt door de naam van het zojuist aangepaste bestand en 'XXXX' door een id dat de sectie duidelijk en uniek identificeert.
   Als je nu op de website link onder 'About' klikt dan vind je de eerste versie van je Respec document;

<!-- Over welke content een Respec bestand moet hebben zullen we nog moeten discussiëren. Hieronder ga ik er even vanuit dat alle nu aanwezige secties ook  aanwezig moeten zijn. -->
#### Het Respec document uitbreiden met andersoortige content

Een Respec document kan op 2 verschillende manier van content worden voorzien:
* m.b.v. de 'content' configuratie property;
* door de 'sectie' elementen aan het 'index.html' bestand toe te voegen.

Beide methodes kunnen elkaar aanvullen en kennen eigen functionaliteiten.

Het Respec document zoals dat van het VNG-R Respec template is overgenomen kent nog een aantal secties die aangepast danwel vervangen moeten worden. Deels gebeurd dat door 'index.html' en deels door de configuration property 'content' aan te passen.  

M.b.v. de 'content' property kunnen alleen secties waarvan de content in markdown bestanden staat worden toegevoegd. In deze property kan per bestand worden aangegeven of die sectie informatief is. Is dat het geval dan wordt automatisch de tekst `Dit onderdeel is niet normatief.` aan het hoofdstuk toegevoegd.
Secties die op deze wijze zijn toegevoegd worden automatisch op de plaats toegevoegd waar in het 'index.html' bestand het script in de body staat. Het gebruik van de 'content' properties is niet verplicht, er mag voor worden gekozen nieuwe content alleen toe te voegen door het 'index.html' bestand aan te passen. De 'content' property moet dan wel uit het lokale 'js/config.js' bestand worden verwijderd.

In tegenstelling tot de methode met de 'content' configuratie property kunnen aan het 'index.html' bestand zowel secties worden toegevoegd waarvan de content uit markdown bestaat als secties waarvan de content uit html bestaat. Aangezien het gegenereerde Respec bestand een html bestand is konden we het alleen toevoegen aan het Respec document door een sectie toe te voegen aan het index.html bestand. Het 'index.html' bestand zoals van het VNG-R Respec template is overgenomen kent nog een aantal andere secties, te weten:
* De 'abstract' sectie.  
* De 'sotd' (Status Of The Document) sectie.
* De 'conformance' sectie.
* De 'tof' (Table Of Figures) sectie.
* De 'index' sectie.

De 'abstract' sectie moet gevuld worden met een door jezelf te maken samenvatting. Vervang daarvoor de inhoud van het bestand 'abstract.md'. Afhankelijk van de waarde van de configuration property 'specStatus' wordt de 'sotd' sectie automatisch gevuld. Ook de andere 3 secties worden automatisch gevuld, het algoritme dat daar achter zit moet nog onderzocht worden. Als je een van de bovenstaande secties niet opgenomen wil hebben dan moet je deze verwijderen uit het 'index.html' bestand.

### Lokale Respec configuratie properties

Zoals aangegeven maken we in het Respec framework gebruik van een aantal VNG-R properties. Properties die er voor zorgen dat alle Respec documentatie van VNG-R eenzelfde look en feel heeft. Er zijn echter ook een aantal lokale configuratie properties waarmee voor iedere Respec document eigen keuzes kunnen worden gemaakt. Denk daarbij aan de status die het document heeft, de publicatie datum, de editors, etc...

Alle lokale configuratie properties kun je vinden in 'js/config.js' en mag je naar eigen inzicht aanpassen. <-- er moet nog bepaald worden welke properties lokaal moeten zijn en welke globaal (dus welke behoren te staan in de repository 'Respec-Organization-configurations').
