# Respec documentatie (under construction)

## Generatie m.b.v. Imvertor

Het is mogelijk om met Imvertor Respec documentatie te genereren van een model. Daarbij spelen de volgende configuratieproperties een rol:

| Configuratieproperty | Mogelijke waarden | Uitleg |
| --- | --- | -- |
| createoffice | html, doc, none | Hiermee geef je aan of je een documentatie bestand wil genereren en zo ja in welk formaat (html of MsWord). De defaultwaarde is 'none', behalve in het geval van een SIM, daar is de default 'html'. De 'doc' optie is nog niet geïmplementeerd. |
| createofficeanchor | name, id | Geeft aan op welke basis hyperlink anchors moeten worden gegenereerd (op basis van id's of op basis van namen). De default is 'name'. Tussen het genereren van respec als msword treden geen verschillen op. Vooralsnog maakt het dus niet uit welke variant je voor deze property kiest. |
| createofficemode | plain, click | Definieert of er in het te genereren bestand hyperlinks moeten worden gegenereert. Bij de waarde 'click' is dat het geval. De defaultwaarde is 'plain'. |
| createofficevariant | respec, msword | Definieert het type te genereren document. Een Respec html document of een MsWord html variant. |
| createimagemap | yes, no | Definieert of van de Diagrammen een imagemap moet worden gegenereerd. De default is 'yes'.|

Voor het genereren van Respec documentatie is het essentieel om in je lokale property bestand de property 'createofficevariant' de waarde 'respec' te geven. Normaliter zal je dan ook de property 'createofficemode' de waarde 'click' geven.
Dit resulteert er in dat in de folder 'app/cat' 2 Respec bestanden geplaatst, 1 in html en de ander in xhtml.

## Toepassing in GitHub

De acties die in de voorgaande paragraaf staan beschreven leveren alleen het html bestand voor de Respec documentatie op. Respec documentatie bestaat echter uit meer dan dat html bestand. Een deel van de content van de Respec documentatie wordt door het Respec framework in GitHub gegenereerd a.d.h.v. een aantal variabelen en toe te voegen html en/of md bestanden. Daarnaast verzorgt dat framework ook de vormgeving dat essentieel is voor Respec documentatie.

Binnen VNG-R maken we gebruik van een door Logius vervaardigde extensie op het W3C Respec framework. We volgen daarbij andere organisaties in Nederland die hetzelfde doen zoals Geonovum. Van het door Logius beschikbaar gestelde template is een VNG-R versie beschikbaar binnen de VNG-Realisatie GitHub organisatie. Dat geeft de mogelijkheid om te verwijzen naar een VNG-R Respec configuratie waardoor we specifiek voor VNG-Realisatie geldende configuraties, zoals bijv. het VNG-Realisatie logo, kunnen aanbrengen. Deze vind je in de repository 'Respec-Organization-configurations'.
Het template zelf kan echter door eenieder worden gebruikt om de eigen Respec documentatie te vervaardigen en daarbinnen bestaan nog mogelijkheden om jouw Respec documentatie een eigen tintje te geven.

Hieronder wordt de werkwijze beschreven waarbij de eerste 7 stappen moeten worden uitgevoerd door een GitHub organisatie administrator. Voorzie hem daarvoor van de gewenste respository naam.

### Door administrator uit te voeren acties
1. Open het [VNG-R Respec template](https://github.com/melsk-r/VNG-R-Respec-Template) en klik in de README op die pagina op de link 'Use this template';
2. Je komt nu in het menu om een nieuwe repository aan te maken waarbij al een aantal velden is ingevuld. De te maken repository mag niet private zijn want dat maakt het gebruik van GitHub Pages onmogelijk. Geef de van de aanvrager verkregen repository naam in en klik op 'Create repository';
3. Voer de acties, zoals beschreven in [de handleiding voor het initieel inrichten van GitHub repositories](https://github.com/VNG-Realisatie/api-beheer/blob/master/doc/Standaard-inrichting-GitHub-GitLab.md), uit;
4. Verwijder in de root van de repository het 'README.md' bestand en hernoem 'Alt-README.md' naar 'README.md'

> Dat bestand moet nog gecreëerd worden in het template;

6. Activeer GitHub Pages voor de nieuwe repository. Selecteer daarvoor het tabblad 'Settings' en kies daar 'Pages';
7. Kies daar waar bij Branch 'None' staat voor 'main' en klik op 'Save';
8. Nadat de build en deployment is uitgevoerd ga je naar het 'Code' tabblad, klikt daar op het tandwieltje bij 'About' en klikt op de checkbox naast 'Use your GitHub Pages website'. Klikken op de resulterende link onder 'About' brengt je naar de standaard gegenereerde Repsec documentatie die nu kan worden aangepast door de eigenaar van de repository;

### Door repository eigenaar uit te voeren acties

8. Je beschikt nu over een repository die je kunt gaan vullen en waarin je je persoonlijke configuratie properties van een waarde kunt voorzien. Plaats daartoe als eerste het in de voorgaande paragraaf gegenereerde html bestand in de root van de repository;
9. Van het bestand dat we zojuist geplaatst hebben gebruiken we alleen de 'section' met het id 'cat'. Verwijder alle andere content behalve de processing instruction 'DOCTYPE HTML' aan het begin van dit bestand en commit het bestand;
10. Open het bestand 'index.html' en plaatst daarin op de gewenste plaats het volgende html fragment:<br/><br/>
   `<section id="XXXX" data-include-format="html" data-include="XXXX.html"></section>`<br/><br/>
   Waarbij je 'XXXX.html' vervangt door de naam van het zojuist aangepaste bestand en 'XXXX' door een id dat de sectie duidelijk en uniek identificeert.
   Als je nu op de website link onder 'About' klikt dan vind je de eerste versie van je Respec document;

### De content van het Respec document aanpassen

Een Respec document kan op 2 verschillende manier van content worden voorzien:
* m.b.v. de 'content' configuratie property;
* door de 'sectie' elementen aan het 'index.html' bestand toe te voegen.

Beide methodes kunnen elkaar aanvullen en kennen eigen functionaliteiten.

Het Respec document zoals dat van het VNG-R Respec template is overgenomen moet nog aangepast worden. Deels kan dat door in de 'index.html' secties aan te passen danwel te vervangen en deels door de configuration property 'content' aan te passen.  

M.b.v. de 'content' configuratie property kunnen alleen secties waarvan de content in markdown bestanden staat worden toegevoegd. In deze property kan per bestand worden aangegeven of die sectie informatief is. Is dat het geval dan wordt automatisch de tekst `Dit onderdeel is niet normatief.` aan het hoofdstuk toegevoegd.
Het toevoegen van bestanden aan de 'content' configuratie property doe je door de naam van het bestand (zonder de extensie) en een eventueel relevante CSS class in de property te plaatsen.
De volgorde van bestanden binnen ```content``` bepaalt de volgorde in het resulterende document.

De code ```content: {"ch01": "informative", "mermaid": ""},``` voegt 2 markdown bestanden toe, te weten:
- `ch01.md` met de CSS class `informative`;
- `mermaid.md` zonder CSS class.

Voor een volledige lijst van CSS classes zie de [ReSpec Documentation](https://respec.org/docs/#css-classes). Deze classes zijn ook binnen de markdown files te gebruiken op de volgende manier: 

```<div class="example">voorbeeld</div>```

Het gebruik van de 'content' properties is niet verplicht, er mag voor worden gekozen nieuwe content alleen toe te voegen door het 'index.html' bestand aan te passen. De 'content' property moet dan wel uit het lokale 'js/config.js' bestand worden verwijderd of worden uitbecommentarieerd. Ook kan de plaats waar de in 'comtent' gedefinieerde hoofdstukken moeten worden toegevoegd worden aangepast. Zorg er dan voor dat het 'section' element waarna je die chapters wil toevoegen een 'id' attribuut met een waarde heeft en wijzig in het script in 'index.html' de regel

`document.getElementById("id-van-sectie").insertAdjacentHTML('afterend', content);`

zodanig dat de waarde 'id-van-sectie' de waarde van het id heeft.

In tegenstelling tot de methode met de 'content' configuratie property kunnen aan het 'index.html' bestand zowel 'sectie' elementen worden toegevoegd waarvan de content uit markdown bestaat als 'sectie' elementen waarvan de content uit html bestaat. Aangezien het gegenereerde Respec bestand een html bestand is kunnen we het alleen toevoegen aan het Respec document door een 'sectie' element toe te voegen aan het index.html bestand.

Bij de methode met de 'section' elementen maken we nog verschil tussen 'sectie' elementen met specifieke waarden voor het 'id' attribuut en 'sectie' elementen die andere waarden voor dat 'id' attribuut hebben of die zelfs helemaal geen 'id' attribuut hebben.

Hieronder volgt per sectie een toelichting.

#### Secties met 'id' attribuutwaarde 'abstract'

* Indien de sectie wordt toegevoegd met ``<sectie id="abstract" data-include-format="markdown" data-include="filenaam.md">`` dan krijgt het hoofdstuk de titel Samenvatting zonder hoofdstuknr. als inhoud wordt de inhoud van het bestand 'filenaam.md' toegevoegd.
* Indien de sectie wordt toegevoegd met ``<sectie id="nnnnnn" data-include-format="markdown" data-include="filenaam.md">`` dan wordt het hoofdstuk gevuld met de inhoud van 'filenaam.md'. Als 'filenaam.md' met een markdown titel start (ongeacht het level en het aantal blanco regels er voor) dan wordt een hoofdstuknummer voor die titel gegenereerd anders wordt de content zonder titel toegevoegd aan het document. Een evt. titel wordt ook opgenomen in de TOC.
* Indien de sectie wordt toegevoegd met ``<sectie data-include-format="markdown" data-include="filenaam.md">`` dan wijkt het resultaat niet af van die van hierboven. Alleen wordt bij deze variant het 'id' van de sectie en de gerelateerde 'href' in de TOC gegenereerd op basis van de titel van deze sectie.

In alle gevallen is ``data-include-format="markdown"`` verplicht.

#### Secties met 'id' attribuutwaarde 'sotd'

Toe te voegen m.b.v. ``<section id="sotd"></section>``. Leidt ertoe dat het hoofdstuk met de titel 'Status van het document' wordt toegevoegd met als inhoud de, van de waarde van de configuration property 'specStatus' afhankelijke, content van de configuration property 'sotdText'.

Tevens wordt een TOC gegenereerd waarin de titels (incl. evt. hoofdstuk en paragraafnummers) van alle, in het document opgenomen, hoofdstukken en paragrafen worden opgenomen afhankelijk van de configuratie property 'maxTocLevel'. Ook de titels van 'sectie' elementen zonder 'id' attribuut worden daar opgenomen.

Indien de configuration property 'content' bestaat dan worden de daarin gedefinieerde markdown bestanden na de 'sotd' sectie opgenomen.
Zo niet dan worden de in de 'content' configuratie property gedefinieerde secties ook niet toegevoegd en wordt er ook geen TOC gegenereerd.

#### Secties met ``data-include-format="html"``

Dit soort secties wordt direct opgenomen op de plaats waar ``<section id="nnnn" data-include-format="html" data-include="filenaam.html"></section>`` is geplaatst.

Het html fragment in het bestand hoeft niet te bestaan uit 1 root element. Sterker nog als dat wel het geval is en het fragment heeft de root 'div' of 'sectie' dan wordt het fragment niet vertaalt naar een separaat hoofdstuk.

Om een separaat hoofdstuk te kunnen starten dient het document wel met een 'hx' element te starten (h1, h2, h3, etc..).

De titel wordt dan ook opgenomen in de TOC.

Dit soort secties mag ook zonder 'id' attribuut worden opgenomen. Die variant geeft geen ander resultaat dan die hiervoorgeschetst. Alleen wordt bij deze variant het id van de sectie en de gerelateerde href in de TOC gegenereerd op basis van de titel van deze sectie.

``data-include-format="html"`` mag worden weggelaten.

#### Secties met 'id' attribuutwaarde 'conformance'

Door ``<section id='conformance'></section>`` wordt een hoofdstuk met als titel 'Conformiteit' toegevoegd. 

De inhoud komt waarschijnlijk uit https://github.com/Logius-standaarden/respec. Het is nog niet duidelijk hoe dit hoofdstuk zijn inhoud krijgt.

#### Secties met 'id' attribuutwaarde 'tof'

``<section id='tof'></section>`` genereert een hoofdstuk met als titel 'Lijst met Figuren' als er in minimaal een van de opgenomen bestanden minimaal een html 'figure' element met een 'figcaption' element is opgenomen of een markdown equivalent daarvan ( '![Tekstueel alternatief voor toegankelijkheid](pad naar iluustratie bestand "Onderschrift")' ). In de markdown variant mag het onderschrift ontbreken.

De titel komt waarschijnlijk uit https://github.com/Logius-standaarden/respec. Het is nog niet duidelijk hoe die titel wordt toegekend.

#### Secties met 'id' attribuutwaarde 'index'

``<section id="index"></section>`` genereert een hoofdstuk met als titel 'Bijlage N Index' als er in minimaal 1 van de in het document opgenomen bestanden (zowel markdown als html) minimaal 1 'dfn' element is opgenomen. Vanuit de tekst kan naar dat element verwezen worden door een 'a' element op te nemen zonder attributen maar met als inhoud de naam van een 'dfn' element.

#### Bijlage N Referenties

Wordt alleen opgenomen als er in een van de andere documenten (zowel markdown als html)een referentie is opgenomen in de vorm '&lbrack;&lbrack;Ref&rbrack;&rbrack;' en die referentie in config.js of organisation-config.js is gedefinieerd.

#### Secties met een 'id' attribuutwaarde die niet overeenkomt met de hierboven geschetste varianten

Indien het 'id' niet overeenkomt met een van de bekende id's dan wordt de sectie genegeerd.

### Lokale Respec configuratie properties

Zoals aangegeven maken we in het Respec framework gebruik van een aantal VNG-R properties. Properties die er voor zorgen dat alle Respec documentatie van VNG-R eenzelfde look en feel heeft. Er zijn echter ook een aantal lokale configuratie properties waarmee voor ieder Respec document eigen keuzes kunnen worden gemaakt. Denk daarbij aan de status die het document heeft, de publicatie datum, de editors, etc...

Alle lokale configuratie properties kun je vinden in 'js/config.js' en mag je naar eigen inzicht aanpassen. 

> Er moet nog bepaald worden welke properties lokaal moeten zijn en welke globaal (dus welke behoren te staan in de repository 'Respec-Organization-configurations').

### Functie Respec configuratie properties

Hieronder vind je de totale lijst van Configuratie properties. De vierde kolom geeft aan of het als een globale of lokale property wordt ingeschat, daar moet echter nog een discussie over gevoerd worden. Voor sommige properties is die inschattinh heel logisch, Zo zijn 'localizationStrings' en 'logos' logischerwijs globaal, 'github' en 'previousPublishVersion' zijn juist lokaal.
Een aantal properties worden globaal gedefinieerd maar kunnen lokaal overruled worden zoals 'useLogo'. In de op een na laatste kolom staan vragen of opmerkingen die we moeten bediscusieren en de laatste kolom geeft aan of de omschrijving van de property nog aandacht verdiend of van voldoende kwaliteit is.

De laatste 2 kolommen hebben de bedoeling het proces om het onderliggende document te vervolmaken te ondersteunen en kunnen, als alle properties bediscusieerd zijn, worden verwijderd. De kolom 'Documentatie status' geeft daarbij aan of betreffende property voldoende gedocumenteerd is om bediscusieerd te kunnen worden.

<table>
	<thead>
		<tr>
			<th>Property</th>
			<th><a href="https://github.com/Logius-standaarden/respec/wiki/addSectionLinks">Link</a></th>
			<th>Type</th>
			<th>Globaal/Lokaal</th>
			<th>Vaste globale waarde of default waarde</th>
			<th>Gerelateerd property</th>
			<th>Beschrijving</th>
			<th>Opmerking/Vraag/Actie</th>
			<th>Documentatie status</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>addSectionLinks</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/alternateFormats">link</a></td>
			<td>boolean</td>
			<td>Globaal</td>
			<td>false</td>
			<td/>
			<td>Bepaald of er een paragraafteken (§), met een link naar de paragraaf waar het teken vóór komt te staan, wordt gegenereerd of niet.<br/>Kan handig zijn om anderen de gelegenheid te bieden om links naar specifieke paragrafen in je specificaties te kopiëren en elders te gebruiken.<br/><br/>Kan lokaal overruled worden.</td>
			<td>Te bepalen of we standaard Respec documentatie met of zonder paragraafteken willen genereren en of we wel willen dat dat lokaal overruled kan worden.</td>
			<td>Gereed </td>
		</tr>
		<tr>
			<td>alternateFormats</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/authors">link</a></td>
			<td>Array met per formaat de properties 'label' en 'url'.</td>
			<td>?</td>
			<td/>
			<td/>
			<td>Hiermee kun je aangeven of je de Respec documentatie ook in een ander formaat dan html aanbiedt, op dit moment alleen pdf.<br/>Deze configuratie property zorgt er voor dat er een pdf bestand wordt gegenereerd en dat er in de Respec documentatie een zin gewijd wordt aan pdf formaat met daarin de link naar het pdf bestand.</td>
			<td>Het is de vraag of het aanbieden van een pdf formaat de verantwoordelijkheid behoort te zijn van de beheerder van een Respec repository. Moet deze property dus Globaal of Lokaal zijn en indien Globaal kan/mag deze dan Lokaal overruled worden?</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>authors</td>
			<td><a href="">link</a></td>
			<td>Array met per naam de properties 'name', 'company' en 'companyURL'.</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Bevat 1 of meerdere beschrijvingen van personen die hebben bijgedragen aan de tot stand koming van de specificatie.<br/><br/>Editors hebben de voorkeur boven authors.</td>
			<td>Het verschil tussen editors en authors lijkt duidelijk. Authors hebben bijgedragen aan de initiële content van de specificatie, editors hebben verbeteringen en wijzigingen aangebracht aan die initiële content. Dat wetende begrijp ik echter niet waarom Editors de voorkeur hebben. Wellicht wil men het onderscheid liever niet maken en wordt iedereen als een editor gezien.</td>
			<td>Gereed </td>
		</tr>
		<tr>
			<td>content</td>
			<td>n.t.b.</td>
			<td>Array (zie een beschrijving onder deze tabel).</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Te gebruiken voor het toevoegen van content aan het Respec document.</td>
			<td>Ik mis deze property in de side bar van https://github.com/Logius-standaarden/respec/wiki</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>editors</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/editors">link</a></td>
			<td>Array met per naam de properties 'name', 'company' en 'companyURL'.</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>1 of meerdere beschrijvingen van personen die hebben bijgedragen aan de tot stand koming van de specificatie.<br/><br/>Editors hebben de voorkeur boven authors.</td>
			<td>Het verschil tussen editors en authors lijkt duidelijk. Authors hebben bijgedragen aan de initiële content van de specificatie, editors hebben verbeteringen en wijzigingen aangebracht aan die initiële content. Dat wetende begrijp ik echter niet waarom Editors de voorkeur hebben. Wellicht wil men het onderscheid liever niet maken en wordt iedereen als een editor gezien.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>formerEditors</td>
			<td><a href="https://github.com/w3c/respec/wiki/formerEditors">link</a></td>
			<td>Array met per naam de properties 'name', 'company' en 'companyURL'.</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Bevat 1 of meerdere beschrijvingen van personen die in het verleden hebben bijgedragen aan de totstandkoming van de specificatie.</td>
			<td/>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>github</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/github">link</a></td>
			<td>URI of een array van de properties 'repoURL' en 'branch'.</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Gebruikt voor het genereren van de links in de 'Doe mee' tabel bovenin de Respec documentatie. Kan gevuld worden met
				<ul>
					<li>een url naar een GitHub repository</li>
					<li>het deel van de url van een GitHub repository dat komt na 'https://github.com/'</li>
					<li>en set van properties bestaande uit
					<ul>
						<li>repoURL: Een van bovenstaande opties</li>
						<li>branch: de branch waarin de specificaties maar ook issues staan opgeslagen.</li>
					</ul>
					</li>
				</ul>
				Wordt tevens gebruikt voor het genereren van een link naar de GitHub pages van de laatste werkversie. Op basis van de hier gedefinieerde link wordt de GitHib Pages link automatisch bepaald.</td>
			<td>Het is de vraag of de url moet verwijzen naar de GitHub repository waarin de Respec documentatie van een Informatiemodel staat of juist naar de GitHub repository waarmee het Informatiemodel wordt beheerd. Deze twee hoeven nl. niet per definitie gelijk te zijn.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>labelColor</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/labelColor">link</a></td>
			<td>Hexadecimale colorcode.</td>
			<td>Globaal</td>
			<td/>
			<td/>
			<td>Definieert de bij de in 'LocalizationStrings' gedefinieerde waardes horende kleuren.<br/><br/>Mag niet Lokaal overruled worden.</td>
			<td>Bij VNG-R zullen we nog de bij onze statussen gewenste kleuren moeten definiëren.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>latestVersion</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/latestVersion">link</a></td>
			<td>Combinatie van strings en configuration propertynamen.</td>
			<td>Globaal</td>
			<td/>
			<td/>
			<td>Url van de laatst gepubliceerde versie.<br/>Wordt opgebouwd m.b.v. andere gedefinieerde configuration properties en '/' tekens.<br/><br/>
			Mag niet lokaal overruled worden.</td>
			<td>Te bepalen hoe deze variabele bij VNG-R opgebouwd moet worden, in de README.md wordt daarvoor een voorstel gedaan.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>license</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/license">link</a></td>
			<td>enumeration</td>
			<td>Globaal</td>
			<td>eupl</td>
			<td/>
			<td>Definieert het licentietype dat van toepassing op de specificatie. VNG-R hanteert de 'EUPL' licentie maar zo gewenst kan ook gekozen worden voor 'CC0', 'CC-BY' of 'CC-BY-ND'. Toegestane waardes 'eupl', 'cc0', 'cc-by', 'cc-by-nd'. Wordt gebruikt om licentie-logo en bijbehorende link in het document te genereren.
				Nieuwe licentie types en het bijbehorende logo kunnen in de Globale property 'licenses' worden gedefinieerd.<br/><br/>Kan lokaal overruled worden.</td>
			<td>Willen we wel dat deze lokaal overruled kan worden?</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>licenses</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/licenses">link</a></td>
			<td>Array met per licentiecode de properties 'name', 'short', 'url' en 'image'.</td>
			<td>Globaal</td>
			<td/>
			<td/>
			<td>Definieert middels een array van configuratie opties de te gebruiken soorten licenties waarnaar middels de code kan worden verwezen in de configuratie-optie 'license'.<br/><br/>Mag waarschijnlijk lokaal overruled worden.</td>
			<td>Bij VNG-R zullen we moeten bepalen welke licenties bij ons van toepassing (zouden kunnen) zijn.<br/>Ik vermoed dat ook deze lokaal te overrulen is maar willen we dat wel.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>localBiblio</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/localBiblio">link</a></td>
			<td>1 of meerdere objecten met set van properties.</td>
			<td>?</td>
			<td>n.t.b.</td>
			<td/>
			<td>Hiermee kan een lijst met referenties in het hoofdstuk 'Referenties' worden gegenereerd. Die referenties bevatten metainformatie (bijv. auteur, publicatiedatum en status) en links naar de betreffende externe referenties. De referenties worden echter alleen opgenomen in dat hoofdstuk als er in het Respec document naar verwezen wordt middels een link in de volgende syntax `[[Referentienaam]]`. Deze syntax geldt voor zowel html als markdown documenten.<br/><br/>
				Indien een link wordt opgenomen in een normatief documentdeel zal de referentie terecht komen in de subparagraaf 'Normatieve referenties'. Is deze opgenomen in een informatief documentdeel dan komt deze in de subparagraaf 'Informatieve referenties' terecht.<br/><br/>
				Gerefereerd kan worden aan specrefs die beschikbaar zijn in de SpecRef database https://www.specref.org/ (zie ook https://github.com/tobie/specref) of aan zelf in deze propertty gedefinieerde referenties. De syntax voor de inhoud van de localBiblio property is beschreven in https://github.com/tobie/specref/blob/main/schemas/raw-reference.json.<br/><br/>
				Deze property kan zowel lokaal als globaal geconfigureerd worden maar het is niet mogelijk deze property zowel lokaal als globaal te definiëren ook al bevatten ze andere inhoud. Hier is wel een verzoek toe ingediend bij Logius (https://github.com/Logius-standaarden/respec/issues/52).</td>
			<td>Aangezien het nog niet mogelijk is deze property zowel lokaal als globaal te definiëren stel ik voor om dit vooralsnog globaal te doen. Als men naar een nieuwe referentie wil kunnen refereren dan moet daarvoor een verzoek worden gedaan deze toe te voegen aan de 'localBiblio' in de 'organisation-config.js'.<br/><br/>
				Zodra deze property tegelijkertijd zowel lokaal als globaal gedefinieerd kan worden. Hoeft alleen voor referenties waarvan we verwachten dat deze vaker gebruikt gaan worden of waarvan inmiddels duidelijk is dat deze vaker gebruikt worden een verzoek gedaan te worden deze op te nemen in de organisation-config.js. Beheerders van Respec repositories zijn er vanaf dat moment zelf verantwoordelijk voor dat deze referenties uit de config.js worden verwijderd.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>localizationStrings</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/localizationStrings">link</a></td>
			<td>Array van properties per taalcode</td>
			<td>Globaal</td>
			<td/>
			<td/>
			<td>Bevat voor een aantal doelen en talen voor de te gebruiken codes en de daarbij horende volledige tekst.</td>
			<td>Nog te bepalen voor welke doelen hier codes gedefinieerd kunnen worden.<br/><br/>
				Bij VNG-R zullen we moeten bepalen of alle bestaande codes gewenst zijn en of er nieuwe codes toegevoegd moeten worden.<br/><br/>Is Lokaal specificeren voor deze configuratie property wel aan de orde.</td>
			<td/>
		</tr>
		<tr>
			<td>logos</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/logos">link</a></td>
			<td>Array per logo van de properties 'src', 'alt', 'id', 'height' en 'url'.</td>
			<td>Globaal</td>
			<td>VNG Realisatie logo</td>
			<td/>
			<td>definieert de src, alternate tekst, url en grootte van het linksboven in de specificatie te plaatsen logo.<br/><br/>Mag niet Lokaal overruled worden.</td>
			<td>Zijn we het er over eens dat dit niet lokaal overruled mag worden?</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>maxTocLevel</td>
			<td><a href="https://github.com/w3c/respec/wiki/maxTocLevel">link</a></td>
			<td>Integer</td>
			<td>Lokaal</td>
			<td>0</td>
			<td/>
			<td>Bepaald het aantal niveau's dat maximaal wordt opgenomen in de inhoudsopgave van het Respec document.</td>
			<td>Default worden alle niveau's opgenomen. Maken we hier i.d.d. een lokale property van die alleen wordt opgenomen en aangepast als de inhoudsopgave dermate groot is dat het ondoenlijk wordt er doorheen te scrollen? Ik ben bang dat dit denk al redelijk snel het geval is. </td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>nl_organisationName</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/nl_organisationName">link</a></td>
			<td>String</td>
			<td>Globaal</td>
			<td>VNG Realisatie</td>
			<td/>
			<td>Wordt gebruikt om de subtitel en het vertikale label linksboven te genereren.<br/><br/>
				Kan lokaal overruled worden.</td>
			<td>Willen we wel dat deze lokaal overruled kan worden? Zo ja dan moet ook het logo misschien overruled kunnen worden.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>nl_organisationPublishURL</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/nl_organisationPublishURL">link</a></td>
			<td>URL</td>
			<td>Globaal</td>
			<td>?</td>
			<td/>
			<td>Wordt gebruikt voor het genereren van de link naar de GitHub pages van de huidige, de vorige en de laatst gepubliceerde versie. Een link die leidt naar een document in de GitHub Pages interface van de 'publicatie' GitHub repository. De laatste gepubliceerde versie is overigens wat anders dan de laatste werkversie.<br/><br/>Kan worden gebruikt in de properties 'lastVersion', 'thisVersion' en 'prevVersion'.<br/><br/>Mag niet lokaal overruled worden.</td>
			<td>Er moet bepaald worden welke waarde we hier als VNG-R hier willen hebben staan. Helemaal onderin de README.md doe ik een voorstel voor de publicatie GitHub repository wat daarmee verband houdt. N.m.m. moet dit een globale configuratie optie zijn en er moet dus ook beschreven worden hoe hier procesmatig mee omgegaan moet worden. Daarover moet nog wel een beslissing worden genomen en ook of een lokale variant toegestaan is.</td>
			<td/>
		</tr>
		<tr>
			<td>nl_organisationStylesURL</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/nl_organisationStylesURL">link</a></td>
			<td>URL</td>
			<td>Globaal</td>
			<td/>
			<td/>
			<td>Definieert de lokatie waar het te gebruiken css bestand staat excl. dat bestand zelf.<br/><br/>Mag niet Lokaal overruled worden.</td>
			<td>Moet onderzocht worden of we hiervoor een eigen variant kunnen creëren en zo ja of we dat ook willen.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>noTOC</td>
			<td><a href="https://github.com/w3c/respec/wiki/noTOC">link</a></td>
			<td>boolean</td>
			<td>Lokaal</td>
			<td>false</td>
			<td/>
			<td>Bepaald of er links van de inhoud een frame met de inhoudsopgave gegenereerd moet worden.</td>
			<td/>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>otherLinks</td>
			<td><a href="https://github.com/w3c/respec/wiki/otherLinks">link</a></td>
			<td>Array van properties</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Genereert een sectie in de header van het Respec document met als titel de key van deze property en als inhoud een of meerdere links.</td>
			<td/>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>postProcess</td>
			<td><a href="https://github.com/w3c/respec/wiki/postProcess">link</a></td>
			<td/>
			<td>?</td>
			<td>?</td>
			<td/>
			<td>Bevat een of meer JavaScript functies die achtereenvolgend opgestart worden nadat Respec klaar is met generatie van het Respec document.</td>
			<td>Bevat nu een functie die indien van toepassing mermaid notatie wijze omzet naar graphs.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>previousMaturity</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/previousMaturity">link</a></td>
			<td>enumeration</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Status van de voorgaande versie.<br/><br/>
				Kan evt. worden gebruikt in de properties 'prevVersion' maar wordt daar nu niet gebruikt.</td>
			<td>Er moet bepaald worden of we deze opnemen bij het opbouwen van 'prevVersion'.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>previousPublishDate</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/previousPublishDate">link</a></td>
			<td>Datum in het formaat YYYY-MM-DD</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Publicatiedatum van de voorgaande versie.<br/><br/>
				Kan evt. worden gebruikt in de properties 'prevVersion' maar wordt daar nu niet gebruikt.</td>
			<td>Er moet bepaald worden of we deze opnemen bij het opbouwen van 'prevVersion'.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>previousPublishVersion</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/previousPublishVersion">link</a></td>
			<td>SemVer notatie</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Versienummer van de voorgaande versie in SemVer notatie (https://semver.org/lang/nl/).<br/><br/>
				Wordt gebruikt in de property 'prevVersion'.</td>
			<td>Er moet bepaald worden of we deze inderdaad opgenomen willen hebben bij het opbouwen van 'prevVersion'.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>prevVersion</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/prevVersion">link</a></td>
			<td>Combinatie van strings en propertynamen</td>
			<td>?</td>
			<td/>
			<td/>
			<td>Url van de voorgaande versie.<br/>
				Wordt opgebouwd m.b.v. andere gedefinieerde configuration properties en '/' tekens.<br/><br/>
				Indien deze configuration property niet wordt verstrekt dan wordt de gerelateerde rubriek in de specificatie ook niet aangemaakt.</td>
			<td>Deze property wordt op dit moment Globaal gedefinieerd en dus altijd verstrekt. Niet verstrekken is dus niet mogelijk. Er moet onderzocht worden of deze lokaal met een lege waarde overruled kan worden.
				Als dat kan dan heeft het de voorkeur dat dit i.d.d. een globale property wordt.<br/><br/>
				Te bepalen hoe deze variabele bij VNG-R opgebouwd moet worden, in de README.md wordt daarvoor een voorstel gedaan.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>pubDomain</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/pubDomain">link</a></td>
			<td>enumeration</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Definieert het publicatie domein van de specificatie en heeft op dit moment de waarde 'cim'.<br/><br/>Wordt nu gebruikt in de properties 'lastVersion', 'thisVersion' en 'prevVersion'.</td>
			<td>Er moet bepaald worden of we deze opnemen bij het opbouwen van 'lastVersion', 'thisVersion' en 'prevVersion'.<br/><br/>
				Een andere mogelijkheid is de folder 'cim' vast op te nemen in de configuratie property 'nl_organisationPublishURL' en binnen VBG-R voor deze property de volgende waarden toe te staan en te definiëren:
				<ul>
					<li>zd (Zaken en Documenten)</li>
					<li>bk (Basis en Kerngegevens)</li>
					<li>dv (Dienstverlening)</li>
					<li>rd (Ruimtelijk domein)</li>
					<li>sd (Sociaal domein)</li>
					<li>bv (Bedrijfsvoering)</li>
				</ul>
				Dat betekent wel dat de folderstructuur van de 'publicatie' GitHub repository ook moet worden aangepast.
			</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>publishDate</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/publishDate">link</a></td>
			<td>Datum in het formaat YYYY-MM-DD</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Publicatiedatum van de huidige versie.<br/><br/>
				Kan evt. worden gebruikt in de properties 'latestVersion' en 'thisVersion'.</td>
			<td>Er moet bepaald worden of we deze opnemen bij het opbouwen van 'prevVersion'.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>publishVersion</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/publishVersion">link</a></td>
			<td>SemVer notatie</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Versienummer van de huidige versie in SemVer notatie (https://semver.org/lang/nl/).<br/><br/>
				Wordt gebruikt in de properties 'lastVersion' en 'thisVersion'.</td>
			<td>Er moet bepaald worden of we deze inderdaad opgenomen willen hebben bij het opbouwen van 'prevVersion'.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>shortName</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/shortName">link</a></td>
			<td>String</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Korte naam (mnemonic) van de specificatie.<br/><br/>
				Wordt gebruikt in de properties 'lastVersion', 'thisVersion' en 'prevVersion'.</td>
			<td>Er moet bepaald worden of we deze inderdaad opgenomen willen hebben bij het opbouwen van 'prevVersion'.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>sotdText</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/sotdText">link</a></td>
			<td>Array van properties per taalcode.</td>
			<td>Globaal</td>
			<td></td>
			<td/>
			<td>Bevat voor een aantal 'specStatus'sen en talen de te gebruiken codes en de daarbij horende volledige tekst.<br/><br/>Mag niet lokaal overruled worden.</td>
			<td>Bij VNG-R zullen we moeten bepalen welke teksten er bij welke status gegenereerd moeten worden.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>specStatus</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/specStatus">link</a></td>
			<td>enumeration</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Definieert de status van de specificatie. Wordt gebruikt om de subtitel en het vertikale label linksboven te genereren. Bepaald ook de kleur van dat label. Dit dient in de lokale configuratie gedefinieerd te worden.<br/><br/>
				De kleuren voor de VNG-R statussen kunnen worden gedefinieerd in de globale optie 'labelColor'.<br/><br/>
				Kan evt. ook worden gebruikt in de properties 'latestVersion', 'thisVersion' en 'prevVersion'.</td>
			<td>Er moet bepaald worden of we deze opnemen bij het opbouwen van 'latestVersion', 'thisVersion' en 'prevVersion'.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>spectype</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/specType">link</a></td>
			<td>enumeration</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Definieert het type van de specificatie. Wordt gebruikt om de subtitel en het vertikale label linksboven te genereren. In het template heeft dit de waarde 'IM' aangezien we bij VNG-R Respec veelal zullen gebruiken om Informatiemodellen mee te publiceren.<br/><br/>
				Kan evt. ook worden gebruikt in de properties 'latestVersion', 'thisVersion' en 'prevVersion'.</td>
			<td>Er moet bepaald worden of we deze opnemen bij het opbouwen van 'latestVersion', 'thisVersion' en 'prevVersion'.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>subtitle</td>
			<td><a href="https://github.com/w3c/respec/wiki/subtitle">link</a></td>
			<td>String</td>
			<td>Lokaal</td>
			<td>n.v.t.</td>
			<td/>
			<td>String die als subtitel van de titel van het document dient. Wordt geplaatst boven de gegenereerde subtitel waarin de organisatienaam, documenttype, specStatus en versiedatum worden gebruikt.</td>
			<td/>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>testSuiteURI</td>
			<td><a href="https://github.com/w3c/respec/wiki/testSuiteURI">link</a></td>
			<td>URL</td>
			<td>Lokaal</td>
			<td>n.v.t.</td>
			<td/>
			<td>Genereert een sectie in de header van het Respec document met als titel 'Test suite' en als inhoud een link naar een testsuite. Wellicht te gebruiken voor het API Testplatform maar alleen als we Respec ook gaan gebruiken voor de API's.</td>
			<td>Wordt de genoemde sectie niet gegenereerd als we deze property weglaten?</td>
			<td/>
		</tr>
		<tr>
			<td>thisVersion</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/thisVersion">link</a></td>
			<td>Combinatie van strings en propertynamen</td>
			<td>Globaal</td>
			<td/>
			<td/>
			<td>Url van de huidige versie.<br/>
				Wordt opgebouwd m.b.v. andere gedefinieerde configuration properties en '/' tekens.<br/><br/>
				Het is verplicht deze property van een waarde te voorzien en deze mag niet Lokaal overruled worden.</td>
			<td>Willen we dat dit een globale property is of juist een lokale? Indien het een globale wordt moet het dan lokaal overruled kunnen worden?<br/>
				Bijv. met een lege waarde waardoor de gerelateerde rubriek in de specificatie ook niet wordt aangemaakt. &lt;-- Is dat wel de manier om dit te doen?<br/><br/>
				Te bepalen hoe deze variabele bij VNG-R opgebouwd moet worden, in de README.md wordt daarvoor een voorstel gedaan.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>title</td>
			<td>-</td>
			<td/>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>De titel van de betreffende specificatie.</td>
			<td>Ik mis deze property in de side bar van https://github.com/Logius-standaarden/respec/wiki</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>useLabel</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/useLabel">link</a></td>
			<td>boolean</td>
			<td>Globaal</td>
			<td>true</td>
			<td/>
			<td>Bepaald of het verticale label aan de linker bovenzijde van de inhoudsopgave gegenereerd moet worden.<br/><br/>
				Kan lokaal overruled worden.</td>
			<td>Willen we wel dat deze lokaal overruled kan worden?<br/><br/>
				Ik mis deze property in de side bar van https://github.com/Logius-standaarden/respec/wiki</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>useLogo</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/useLogo">link</a></td>
			<td>boolean</td>
			<td>Globaal</td>
			<td>true</td>
			<td/>
			<td>Bepaald of het VNG-Realisatie logo in de rechter bovenzijde van het document geplaatst moet worden.<br/><br/>
				Kan lokaal overruled worden.</td>
			<td>Willen we wel dat deze lokaal overruled kan worden?</td>
			<td>Gereed</td>
		</tr>
		<!--tr>
			<td>useSideBar</td>
			<td>-</td>
			<td/>
			<td/>
			<td/>
			<td/>
			<td>Functie van deze property is onbekend.</td>
			<td>Property staat wel in de side bar van https://github.com/Logius-standaarden/respec/wiki maar link leidt niet naar een pagina met uitleg.</td>
			<td/>
	</tr-->
		<tr>
			<td>edDraftURI</td>
			<td><a href="https://github.com/w3c/respec/wiki/edDraftURI">link</a></td>
			<td>URL</td>
			<td/>
			<td/>
			<td/>
			<td>Beschrijft de url waar de draft van de specificatie kan worden bekeken. Er wordt geadviseerd de Editors Draft niet te publiceren.</td>
			<td>Het is de vraag of wij deze property wel zullen gebruiken. Het wordt ten eerste niet geadviseerd om Editors Draft te publiceren maar daarnaast is het de vraag of wij de specStatus 'ED' wel kennen bij VNG-R.</td>
			<td>Gereed</td>
		</tr>
	</tbody>
</table>
