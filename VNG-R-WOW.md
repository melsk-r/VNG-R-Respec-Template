## Respec documentatie

### Generatie m.b.v. Imvertor

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

### Toepassing in GitHub

De acties die in de voorgaande paragraaf staan beschreven leveren alleen het html bestand voor de Respec documentatie op. Respec documentatie bestaat echter uit meer dan dat html bestand. Een deel van de content van de Respec documentatie wordt door het Respec framework in GitHub gegenereerd a.d.h.v. een aantal variabelen en toe te voegen html en/of md bestanden. Daarnaast verzorgt dat framework ook de vormgeving dat essentieel is voor Respec documentatie.

Binnen VNG-R maken we gebruik van een door Logius vervaardigde extensie op het W3C Respec framework. We volgen daarbij andere organisaties in Nederland die hetzelfde doen zoals Geonovum. Van het door Logius beschikbaar gestelde template is een VNG-R versie beschikbaar binnen de VNG-Realisatie GitHub organisatie. Dat geeft de mogelijkheid om te verwijzen naar een VNG-R Respec configuratie waardoor we specifiek voor VNG-Realisatie geldende configuraties, zoals bijv. het VNG-Realisatie logo, kunnen aanbrengen. Deze vind je in de repository 'Respec-Organization-configurations'.
Het template zelf kan echter door eenieder worden gebruikt om de eigen Respec documentatie te vervaardigen en daarbinnen bestaan nog mogelijkheden om jouw Respec documentatie een eigen tintje te geven.

Hieronder wordt de werkwijze beschreven waarbij de eerste 7 stappen moeten worden uitgevoerd door een GitHub organisatie administrator. Voorzie hem daarvoor van de gewenste respository naam.

#### Door administrator uit te voeren acties
1. Open het [VNG-R Respec template](https://github.com/melsk-r/VNG-R-Respec-Template) en klik in de README op die pagina op de link 'Use this template';
2. Je komt nu in het menu om een nieuwe repository aan te maken waarbij al een aantal velden is ingevuld. De te maken repository mag niet private zijn want dat maakt het gebruik van GitHub Pages onmogelijk. Geef de van de aanvrager verkregen repository naam in en klik op 'Create repository';
3. Voer de acties, zoals beschreven in [de handleiding voor het initieel inrichten van GitHub repositories](https://github.com/VNG-Realisatie/api-beheer/blob/master/doc/Standaard-inrichting-GitHub-GitLab.md), uit;
4. Verwijder in de root van de repository het 'README.md' bestand en hernoem 'Alt-README.md' naar 'README.md'

> Dat bestand moet nog gecreëerd worden in het template;

6. Activeer GitHub Pages voor de nieuwe repository. Selecteer daarvoor het tabblad 'Settings' en kies daar 'Pages';
7. Kies daar waar bij Branch 'None' staat voor 'main' en klik op 'Save';
8. Nadat de build en deployment is uitgevoerd ga je naar het 'Code' tabblad, klikt daar op het tandwieltje bij 'About' en klikt op de checkbox naast 'Use your GitHub Pages website'. Klikken op de resulterende link onder 'About' brengt je naar de standaard gegenereerde Repsec documentatie die nu kan worden aangepast door de eigenaar van de repository;

#### Door repository eigenaar uit te voeren acties

8. Je beschikt nu over een repository die je kunt gaan vullen en waarin je je persoonlijke configuratie properties van een waarde kunt voorzien. Plaats daartoe als eerste het in de voorgaande paragraaf gegenereerde html bestand in de root van de repository;
9. Van het bestand dat we zojuist geplaatst hebben gebruiken we alleen de 'section' met het id 'cat'. Verwijder alle andere content behalve de processing instruction 'DOCTYPE HTML' aan het begin van dit bestand en commit het bestand;
10. Open het bestand 'index.html' en plaatst daarin op de gewenste plaats het volgende html fragment:<br/><br/>
   `<section id="XXXX" data-include-format="html" data-include="XXXX.html"></section>`<br/><br/>
   Waarbij je 'XXXX.html' vervangt door de naam van het zojuist aangepaste bestand en 'XXXX' door een id dat de sectie duidelijk en uniek identificeert.
   Als je nu op de website link onder 'About' klikt dan vind je de eerste versie van je Respec document;

#### Het Respec document uitbreiden met andersoortige content

> Over welke content een Respec bestand (minimaal) moet hebben zullen we nog moeten discussiëren. Hieronder ga ik er evenwel vanuit dat alle nu aanwezige secties ook aanwezig moeten zijn.

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

Zoals aangegeven maken we in het Respec framework gebruik van een aantal VNG-R properties. Properties die er voor zorgen dat alle Respec documentatie van VNG-R eenzelfde look en feel heeft. Er zijn echter ook een aantal lokale configuratie properties waarmee voor ieder Respec document eigen keuzes kunnen worden gemaakt. Denk daarbij aan de status die het document heeft, de publicatie datum, de editors, etc...

Alle lokale configuratie properties kun je vinden in 'js/config.js' en mag je naar eigen inzicht aanpassen. 

> Er moet nog bepaald worden welke properties lokaal moeten zijn en welke globaal (dus welke behoren te staan in de repository 'Respec-Organization-configurations').

### Functie Respec configuratie properties

Hieronder vind je de totale lijst van Configuratie properties. De vierde kolom geeft aan of het als een globale of lokale property wordt ingeschat, daar moet echter nog een discussie over gevoerd worden. Voor sommige properties is die inschattinh heel logisch, Zo zijn 'localizationStrings' en 'logos' logischerwijs globaal, 'github' en 'previousPublishVersion' zijn juist lokaal.
Een aantal properties worden globaal gedefinieerd maar kunnen lokaal overruled worden zoals 'useLogo'. In de op een na laatste kolom staan vragen of opmerkingen die we moeten bediscusieren en de laatste kolom geeft aan of de omschrijving van de property nog aandacht verdiend of van voldoende kwaliteit is. De laatste 2 kolommen kunnen, als alle properties bediscusieerd zijn, worden verwijderd.

<table border="1">
	<thead valign="top" align="left">
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
	<tbody valign="top" align="left">
		<tr>
			<td>addSectionLinks</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/alternateFormats">link</a></td>
			<td>boolean</td>
			<td>Globaal</td>
			<td>false</td>
			<td/>
			<td>Bepaald of er een paragraafteken (§), met een link naar de paragraaf waar het teken voor staat, wordt gegenereerd of niet.<br/>Kan handig zijn om anderen de gelegenheid te bieden om links naar specifieke paragrafen in je specificaties te kopiëren en elders te gebruiken.<br/><br/>Kan lokaal overruled worden.</td>
			<td>Te bepalen of we Respec documentatie met of zonder paragraafteken willen genereren.</td>
			<td>Gereed </td>
		</tr>
		<tr>
			<td>alternateFormats</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/authors">link</a></td>
			<td>Array van properties per formaat.</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Hiermee kun je aangeven of je de Respec documentatie ook in een ander formaat dan html aanbiedt. De verantwoordleijkheid voor de creatie van die alternatieve formaten is aan de beheerder van de betreffende Respec repository.<br/>Deze configuratie property zorgt er alleen voor dat een zin gewijd wordt aan het/de betreffende alternatieve formaat/formaten en dat de link er naartoe wordt geplaatst in de Respec documentatie.</td>
			<td>Of zo'n formaat aangeboden wordt lijkt me een lokale configuratie. Niet in de laatste plaats omdat het afhankelijk is van handmatige acties van de beheerder van de betreffende Respec repository.<br/><br/>Blijkbaar is het mogelijk met GitHub Actions PDF documenten te genereren. In dat geval is dit niet meer afhankelijk van handmatige acties en zou het opgenomen kunnen worden in de globale configuratie.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>authors</td>
			<td><a href="">link</a></td>
			<td>Array van properties per naam.</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Bevat 1 of meerdere beschrijvingen van personen die hebben bijgedragen aan de totstandkoming van de specificatie.<br/><br/>Editors hebben de voorkeur boven authors.</td>
			<td>Het verschil tussen editors en authors lijkt duidelijk. Authors hebben bijgedragen aan de initiële content van de specificatie, editors hebben verbeteringen en wijzigingen aangebracht aan die initiële content. Dat wetende begrijp ik echter niet waarom Editors de voorkeur hebben. Wellicht wil men het onderscheid liever niet maken en wordt iedereen als een editor gezien.</td>
			<td>Gereed </td>
		</tr>
		<tr>
			<td>content</td>
			<td>n.t.b.</td>
			<td>Array</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Er zijn drie manieren om de daadwerkelijke content aan de specificatie toe te voegen:
				<ul>
					<li>m.b.v. de 'content' configuratie property en een javascriptje.</li>
					<li>m.b.v. '&lt;section>' elementen.</li>
					<li>m.b.v. '&lt;div>' elementen.</li>
				</ul>
				De eerste methode kan alleen gebruikt worden voor het toevoegen van zelf vervaardigde markdown bestanden. Voor html bestanden moet de tweede of derde methode gebruikt worden.<br/><br/>Alle in deze property gedefinieerde arrays bestaan uit 2 waarden. Een waarde definieert het te plaatsen Markdown bestand maar wel zonder diens extensie en de tweede waarde bepaald of het om een normatieve of informatieve sectie gaat. 		
				Normatief is de default wat betekent dat de waarde leeg kan blijven. Is de sectie informatief dan bevat het de waarde 'informative'. Hieronder een voorbeeld:<br/><br/>
				<code>content: {""Inleiding"": ""informative"", ""Scope"": """", ""SIM-ORI"": """"}</code><br/><br/>
				Deze property wordt vervolgens gebruikt door een script in 'index.html'.<br/>M.b.v. de code 'document.getElementById(""[id]"")' in het script wordt bepaald waar de reeks van markdown documenten wordt tussengevoegd. Waarbij '[id]' in dit voorbeeld verwijst naar het 'id' van de sectie waarna de in 'content' genoemde reeks van markdown bestanden moet worden opgenomen. Belangrijk daarbij is dat het script wordt geplaatst
				na het '&lt;section>' element met het 'id' dat gebruikt wordt.<br/><br/>Het script kan evt. gedupliceerd worden om ergens anders een andere reeks van markdown bestanden in te kunnen voegen. Er dient dan wel een extra content configuratie property in de 'js/config.js' te worden geplaatst met een afwijkende naam (bijv. 'content2') en ook de variabelen in het script moeten worden hernoemd.<br/><br/>De tweede methode
				wordt veelal gebruikt voor:
				<ul>
					<li>het toevoegen van hoofdstukken waarvan de inhoud van extern wordt betrokken zoals 'Status van dit document', 'Conformiteit', 'Lijst met Figuren' en 'Index' (resp met het id 'sotd', 'conformance', 'tof' en 'index'). Indien configuratie optie 'specStatus' een waarde waarde heeft waarvoor in de organisation-config.js geen bijbehorende tekst is gedefinieerd in de configuratie optie 'sotdText' dan wordt deze sectie niet gegenereerd.</li>
					<li>maar kan ook gebruikt worden voor het toevoegen van zelf vervaardigde markdown of html bestanden.<br/><br/>In het eerste geval volstaat de volgende syntax (nr. 1):<br/><br/>
						<code>&lt;section id=""[id]"">&lt;/section></code><br/><br/>
						In het tweede geval geldt deze syntax (nr. 2):<br/><br/>
						<code>&lt;section id=""[uniek-id]"" data-include-format=""markdown"" data-include=""[markdown bestandsnaam]"">&lt;/section></code><br/><br/>
						of (nr. 3)<br/><br/>
						<code>&lt;section id=""[uniek-id]"" data-include=""[html bestandsnaam]"">&lt;/section></code>
					</li>
				</ul>
				<br/>De derde methode kan alleen gebruikt worden voor zelfvervaardigde markdown of html bestanden maar werkt verder hetzelfde zoals in de voorgaande methode beschreven bij syntax 2 en 3. Het 'id' attribute mag echter weggelaten worden. Dus:<br/><br/>
				<code>&lt;section data-include-format=""markdown"" data-include=""[markdown bestandsnaam]"">&lt;/section></code><br/><br/>
				of<br/><br/>
				<code>&lt;section data-include=""[html bestandsnaam]"">&lt;/section></code>
			</td>
			<td>Ik mis deze property in de side bar van https://github.com/Logius-standaarden/respec/wiki<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			Er moet nog onderzocht worden hoe de eerste syntax van de tweede methode aan haar content komt.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>editors</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/editors">link</a></td>
			<td>Array van properties per naam.</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>1 of meerdere beschrijvingen van personen die hebben bijgedragen aan de totstandkoming van de specificatie.<br/><br/>Editors hebben de voorkeur boven authors.</td>
			<td>Het verschil tussen editors en authors lijkt duidelijk. Authors hebben bijgedragen aan de initiële content van de specificatie, editors hebben verbeteringen en wijzigingen aangebracht aan die initiële content. Dat wetende begrijp ik echter niet waarom Editors de voorkeur hebben. Wellicht wil men het onderscheid liever niet maken en wordt iedereen als een editor gezien.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>formerEditors</td>
			<td><a href="https://github.com/w3c/respec/wiki/formerEditors">link</a></td>
			<td>Array van properties per naam.</td>
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
			<td>URI of set van 2 properties</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>gebruikt voor het genereren van de links in de 'Doe mee' tabel bovenin de Respec documentatie. Kan gevuld worden met
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
			<td/>
		</tr>
		<tr>
			<td>labelColor</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/labelColor">link</a></td>
			<td>Hexadecimale colorcode</td>
			<td>Globaal</td>
			<td>n.v.t.</td>
			<td/>
			<td>Definieert de bij de in 'LocalizationStrings' gedefinieerde waardes horende kleuren.</td>
			<td>Bij VNG-R zullen we nog de bij onze statussen gewenste kleuren moeten definiëren.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>latestVersion</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/latestVersion">link</a></td>
			<td>Combinatie van strings en propertynamen</td>
			<td>?</td>
			<td/>
			<td/>
			<td>Url van de laatst gepubliceerde versie.<br/>Wordt opgebouwd m.b.v. andere gedefinieerde variabelen en '/' tekens.<br/><br/>
				Indien deze variabele niet wordt verstrekt dan wordt de gerelateerde rubriek in de specificatie ook niet aangemaakt. Volgens mij wordt er dan wel een waarschuwing of foutmelding op de Respec pagina gegenereerd wat natuurlijk ook niet de bedoeling is.</td>
			<td>Willen we dat dit een globale property is of juist een lokale? Indien het een globale wordt moet het dan lokaal overruled kunnen worden?<br/>
				Bijv. met een lege waarde waardoor de gerelateerde rubriek in de specificatie ook niet wordt aangemaakt. &lt;-- Is dat wel de manier om dit te doen?<br/><br/>
				Te bepalen hoe deze variabele bij VNG-R opgebouwd moet worden.</td>
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
			<td>Array van properties per licentiecode.</td>
			<td>Globaal</td>
			<td>n.v.t.</td>
			<td/>
			<td>Definieert middels een array van configuratie opties de te gebruiken soorten licenties waarnaar middels de code kan worden verwezen in de configuratie-optie 'license'.</td>
			<td>Bij VNG-R zullen we moeten bepalen welke licenties bij ons van toepassing (zouden kunnen) zijn.<br/>Ik vermoed dat ook deze lokaal te overrulen is maar ik denk dat we dat niet moeten willen.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>localBiblio</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/localBiblio">link</a></td>
			<td>1 of meerdere objecten met set van properties.</td>
			<td>?</td>
			<td>n.t.b.</td>
			<td/>
			<td>Hiermee kan een lijst met referenties in het hoofdstuk 'Referenties' worden gegenereerd. Die referenties bevatten metainformatie (bijv. auteur, publicatiedatum en status) en links naar de betreffende externe referenties. De referenties worden echter alleen opgenomen in dat hoofdstuk als er in het Respec document naar verwezen wordt middels een link in de volgende syntax '[[Referentienaam]]'. Deze syntax geldt voor zowel html als markdown documenten.<br/><br/>
				Indien een link wordt opgenomen in een normatief documentdeel zal de referentie terecht komen in de subparagraaf 'Normatieve referenties'. Is deze opgenomen in een informatief documentdeel dan komt deze in de subparagraaf 'Informatieve referenties' terecht.<br/><br/>
				Gerefereerd kan worden aan specrefs die beschikbaar zijn in de SpecRef database https://www.specref.org/ (zie ook https://github.com/tobie/specref) of aan zelf in deze propertty gedefinieerde referenties. De syntax voor de inhoud van de localBiblio property is beschreven in https://github.com/tobie/specref/blob/main/schemas/raw-reference.json.<br/><br/>
				Deze property kan zowel lokaal als globaal geconfigureerd worden maar het is niet mogelijk deze property zowel lokaal als globaal te definiëren ook al bevatten ze andere inhoud. Hier is wel een verzoek toe ingediend bij Logius (https://github.com/Logius-standaarden/respec/issues/52).</td>
			<td>Aangezien het nog niet mogelijk is deze property zowel lokaal als globaal te definiëren stel ik voor om dit vooralsnog globaal te doen. Als men naar een nieuwe referentie wil kunnen refereren dan moet daarvoor een verzoek worden gedaan deze toe te voegen aan de 'localBiblio' in de 'organisation-config.js'.<br/><br/>
				Zodra deze property tegelijkertijd zowel lokaal als globaal gedefinieerd kan worden. Hoeft alleen voor referenties waarvan we verwachten dat deze vaker gebruikt gaan worden of waarvan inmiddels duidelijk is dat deze vaker gebruikt worden een verzoek gedaan te worden deze op te nemen in de organisation-config.js. Beheerders van Respec repositories zijn er zelf verantwoordelijk voor dat deze referenties uit de config.js worden verwijderd.</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>localizationStrings</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/localizationStrings">link</a></td>
			<td>Array van properties per taalcode</td>
			<td>Globaal</td>
			<td>n.v.t.</td>
			<td/>
			<td>Bevat voor een aantal doelen en talen de te gebruiken codes en de daarbij horende volledige tekst.</td>
			<td>Nog te bepalen voor welke doelen hier codes gedefinieerd kunnen worden.<br/><br/>
				Bij VNG-R zullen we moeten bepalen of alle bestaande codes gewenst zijn en of er nieuwe codes toegevoegd moeten worden.</td>
			<td/>
		</tr>
		<tr>
			<td>logos</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/logos">link</a></td>
			<td>Array van properties per logo</td>
			<td>Globaal</td>
			<td>VNG Realisatie logo</td>
			<td/>
			<td>definieert de src, alternate tekst, url en grootte van het linksboven in de specificatie te plaatsen logo.</td>
			<td>Lijkt me dat we niet willen dat dit lokaal overruled kan worden.</td>
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
			<td>Default worden alle niveau's opgenomen. Ik stel voor hier een lokale property van te maken die alleen wordt opgenomen en aangepast als de inhoudsopgave dermate groot is dat het ondoenlijk wordt er doorheen te scrollen.</td>
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
			<td>Willen we wel dat deze lokaal overruled kan worden?</td>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>nl_organisationPublishURL</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/nl_organisationPublishURL">link</a></td>
			<td>URL</td>
			<td>Globaal</td>
			<td>?</td>
			<td/>
			<td>Wordt gebruikt voor het genereren van de link naar de GitHub pages van de huidige, de vorige en de laatst gepubliceerde versie. De laatste gepubliceerde versie is overigens wat anders dan de laatste werkversie.<br/><br/>Kan worden gebruikt in de properties 'lastVersion', 'thisVersion' en 'prevVersion'.</td>
			<td>Er moet bepaald worden welke waarde we als VNG-R hier willen hebben staan. N.m.m. moet dit een globale configuratie optie zijn en er moet dus ook beschreven worden hoe hier procesmatig mee omgegaan moet worden. Daarover moet nog wel een beslissing worden genomen en ook of een lokale variant toegestaan is.<br/><br/>
				Er moet onderzocht wat precies het verschil is tussen de laatst gepubliceerde versie en de laatste werkversie.</td>
			<td/>
		</tr>
		<tr>
			<td>nl_organisationStylesURL</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/nl_organisationStylesURL">link</a></td>
			<td>URL</td>
			<td>Globaal</td>
			<td>?</td>
			<td/>
			<td>?</td>
			<td>Moet onderzocht worden of we hiervoor een eigen variant kunnen creëren en zo ja of we dat ook willen.<br/><br/>
				Vooralsnog ga ik er vanuit dat hiervoor geen lokale variant gebruikt mag worden.</td>
			<td/>
		</tr>
		<tr>
			<td>noTOC</td>
			<td><a href="https://github.com/w3c/respec/wiki/noTOC">link</a></td>
			<td>boolean</td>
			<td>Lokaal</td>
			<td>false</td>
			<td/>
			<td>Bepaald of er links van de inhoud een frame met de inhoudsopgave gegenereerd wordt.</td>
			<td/>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>otherLinks</td>
			<td><a href="https://github.com/w3c/respec/wiki/otherLinks">link</a></td>
			<td>Array van properties</td>
			<td>Lokaal</td>
			<td>n.v.t.</td>
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
			<td>Bevat nu een functie die mermaid notatie wijze omzet naar graphs.</td>
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
				Kan worden gebruikt in de properties 'lastVersion', 'thisVersion' en 'prevVersion'.</td>
			<td/>
			<td/>
		</tr>
		<tr>
			<td>previousPublishDate</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/previousPublishDate">link</a></td>
			<td>Datum in het formaat YYYY-MM-DD</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Publicatiedatum van de voorgaande versie.<br/><br/>
				Kan worden gebruikt in de properties 'lastVersion', 'thisVersion' en 'prevVersion'.</td>
			<td/>
			<td/>
		</tr>
		<tr>
			<td>previousPublishVersion</td>
			<td>n.t.b.</td>
			<td>SemVer notatie</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Versienummer van de voorgaande versie in SemVer notatie (https://semver.org/lang/nl/).<br/><br/>
				Kan worden gebruikt in de properties 'lastVersion', 'thisVersion' en 'prevVersion'.</td>
			<td/>
			<td/>
		</tr>
		<tr>
			<td>prevVersion</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/prevVersion">link</a></td>
			<td>Combinatie van strings en propertynamen</td>
			<td>?</td>
			<td/>
			<td/>
			<td>Url van de voorgaande versie.<br/>
				Wordt opgebouwd m.b.v. andere gedefinieerde variabelen en '/' tekens.<br/><br/>
				Indien deze variabele niet wordt verstrekt dan wordt de gerelateerde rubriek in de specificatie ook niet aangemaakt.</td>
			<td>Willen we dat dit een globale property is of juist een lokale? Indien het een globale wordt moet het dan lokaal overruled kunnen worden?<br/>
				Bijv. met een lege waarde waardoor de gerelateerde rubriek in de specificatie ook niet wordt aangemaakt. &lt;-- Is dat wel de manier om dit te doen?<br/><br/>
				Te bepalen hoe deze variabele bij VNG-R opgebouwd moet worden.</td>
			<td/>
		</tr>
		<tr>
			<td>pubDomain</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/pubDomain">link</a></td>
			<td>enumeration</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Definieert het domein waarop de specificatie betrekking heeft.<br/><br/>Kan worden gebruikt in de properties 'lastVersion', 'thisVersion' en 'prevVersion'.</td>
			<td>Uitgezocht moet worden hoe we deze bij VNG-R kunnen gebruiken. Er is nog geen lijst met public domains voor VNG-R geconfigureerd. De vraag is of je deze wel kunt  definiëren, wellicht is het gewoon een ergens te publiceren lijst met waarden. Overigens niet helemaal duidelijk wat de functie is enhoe je het gebruikt. Wellicht kunnen de te definiëren waarden gebruikt worden als naam van een branch in GitHub.<br/><br/>
				Mogelijk te definiëren waarden binnen VNG-R:
				<ul>
					<li>zd (Zaken en Documenten)</li>
					<li>bk (Basis en Kerngegevens)</li>
					<li>dv (Dienstverlening)</li>
					<li>rd (Ruimtelijk domein)</li>
					<li>sd (Sociaal domein)</li>
					<li>bv (Bedrijfsvoering)</li>
				</ul>
			</td>
			<td/>
		</tr>
		<tr>
			<td>publishDate</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/publishDate">link</a></td>
			<td>Datum in het formaat YYYY-MM-DD</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Publicatiedatum van de huidige versie.<br/><br/>
				Kan worden gebruikt in de properties 'lastVersion', 'thisVersion' en 'prevVersion'.</td>
			<td/>
			<td/>
		</tr>
		<tr>
			<td>publishVersion</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/publishVersion">link</a></td>
			<td>SemVer notatie</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Versienummer van de huidige versie in SemVer notatie (https://semver.org/lang/nl/).<br/><br/>
				Kan worden gebruikt in de properties 'lastVersion', 'thisVersion' en 'prevVersion'.</td>
			<td/>
			<td/>
		</tr>
		<tr>
			<td>shortName</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/shortName">link</a></td>
			<td>String</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Korte naam van de specificatie.<br/><br/>
				Kan worden gebruikt in de properties 'lastVersion', 'thisVersion' en 'prevVersion'.</td>
			<td/>
			<td/>
		</tr>
		<tr>
			<td>sotdText</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/sotdText">link</a></td>
			<td>Array van properties per taalcode.</td>
			<td>Globaal</td>
			<td>n.v.t.</td>
			<td/>
			<td>Bevat voor een aantal 'specStatus'sen en talen de te gebruiken codes en de daarbij horende volledige tekst.</td>
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
				Kan vermoedelijk ook worden gebruikt in de properties 'lastVersion', 'thisVersion' en 'prevVersion'.</td>
			<td/>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>spectype</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/specType">link</a></td>
			<td>enumeration</td>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>Definieert het type van de specificatie. Wordt gebruikt om de subtitel en het vertikale label linksboven te genereren. In het template heeft dit de waarde 'IM' aangezien we bij VNG-R Respec veelal zullen gebruiken om Informatiemodellen mee te publiceren.</td>
			<td/>
			<td>Gereed</td>
		</tr>
		<tr>
			<td>subtitle</td>
			<td><a href="https://github.com/w3c/respec/wiki/subtitle">link</a></td>
			<td>String</td>
			<td>Lokaal</td>
			<td>n.v.t.</td>
			<td/>
			<td>String die als subtitel van de titel van het document dient. Wordt geplaatst boven de gegenereerde subtitel waarin de organisatienaam, documenttype, specStatus, versiedatum en een evt. modifiedDatum worden gebruikt.</td>
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
			<td>Genereert een sectie in de header van het Respec document met als titel 'Test suite' en als inhoud een link naar een testsuite. Wellicht te gebruiken voor het API Testplatform maar alleen als we Respec ook gaan gebruiken voor de API's.	</td>
			<td/>
			<td/>
		</tr>
		<tr>
			<td>thisVersion</td>
			<td><a href="https://github.com/Logius-standaarden/respec/wiki/thisVersion">link</a></td>
			<td>Combinatie van strings en propertynamen</td>
			<td>?</td>
			<td/>
			<td/>
			<td>Url van de huidige versie.<br/>
				Wordt opgebouwd m.b.v. andere gedefinieerde variabelen en '/' tekens.<br/><br/>
				Indien deze variabele niet wordt verstrekt dan wordt de gerelateerde rubriek in de specificatie ook niet aangemaakt.</td>
			<td>Willen we dat dit een globale property is of juist een lokale? Indien het een globale wordt moet het dan lokaal overruled kunnen worden?<br/>
				Bijv. met een lege waarde waardoor de gerelateerde rubriek in de specificatie ook niet wordt aangemaakt. &lt;-- Is dat wel de manier om dit te doen?<br/><br/>
				Te bepalen hoe deze variabele bij VNG-R opgebouwd moet worden.</td>
			<td/>
		</tr>
		<tr>
			<td>title</td>
			<td>n.t.b.</td>
			<td/>
			<td>Lokaal</td>
			<td/>
			<td/>
			<td>De titel van de betreffende specificatie.</td>
			<td>Ik mis deze property in de side bar van https://github.com/Logius-standaarden/respec/wiki</td>
			<td/>
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
		<tr>
			<td>useSideBar</td>
			<td><a href="https://github.com/w3c/respec/wiki/edDraftURI">link</a></td>
			<td>URL</td>
			<td/>
			<td/>
			<td/>
			<td/>
			<td>Property staat wel in de side bar van https://github.com/Logius-standaarden/respec/wiki maar link leidt niet naar een pagina met uitleg.<br/><br/>
				In dit record voorlopig de link naar de w3c uitleg opgenomen.<br/><br/>
				Het is de vraag of wij deze property wel zullen gebruiken. Het wordt ten eerste nie geadviseerd om Editors Draft niet te publiceren maar daarnaast is het de vraag of wij de specStatus 'ED' wel kennen bij VNG-R.</td>
			<td/>
		</tr>
	</tbody>
</table>
