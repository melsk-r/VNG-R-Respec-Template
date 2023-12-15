# Het VNG-R Respec proces

Zie de '[Flowchart syntax](https://mermaid.js.org/syntax/flowchart.html)' voor een uitleg van de syntax.

<figure>
    
```mermaid
%%{init: {"flowchart": {"defaultRenderer": "elk"}} }%%
graph TD;
    A("Genereer<br/>Respec html<br/>in Imvertor")-->B{"Repo<br/>voor project<br/>aanwezig?"};
    B{"Repo<br/>voor project<br/>aanwezig?"}--Nee-->C("Creëer en<br/>configureer repo<br/>voor project");
    B{"Repo<br/>voor project<br/>aanwezig?"}--Ja-->D("Plaats<br/>Respec html in<br/>project");
    C("Creëer en<br/>configureer repo<br/>voor project")-->D("Plaats<br/>Respec html in<br/>project");
    D("Plaats<br/>Respec html in<br/>project")-->E{"Overige content<br/>voor Respec<br/>document<br/>aanwezig en<br/>up to date?"};
    E{"Overige content<br/>voor Respec<br/>document<br/>aanwezig en<br/>up to date?"}--Nee-->F("Creëer overige<br/>content en/of pas<br/>deze aan");
    E{"Overige content<br/>voor Respec<br/>document<br/>aanwezig en<br/>up to date?"}--Ja-->G("Pas document<br/>configuratie<br/>properties aan");
    F("Creëer overige<br/>content en/of pas<br/>deze aan")-->G("Pas document<br/>configuratie<br/>properties aan");
    A("Genereer<br/>Respec html<br/>in Imvertor")-->H{"Basisstructuur voor<br/>project aanwezig in<br/>publicatie repo?"};
    H{"Basisstructuur voor<br/>project aanwezig in<br/>publicatie repo?"}--Nee-->I("Creëer<br/>basisstructuur in<br/>publicatie repo");
    H{"Basisstructuur voor<br/>project aanwezig in<br/>publicatie repo?"}--Ja-->J("Creëer in<br/>basisstructuur voor<br/>project in publicatie<br/>repo folder voor<br/>versienr");
    I("Creëer<br/>basisstructuur in<br/>publicatie repo")-->J("Creëer in<br/>basisstructuur voor<br/>project in publicatie<br/>repo folder voor<br/>versienr");
    G("Pas document<br/>configuratie<br/>properties aan")-->K("Plaats<br/>gegenereerde<br/>snapshot.html (als<br/>index.html) en pdf<br/>in versienr. folder<br/>en in de project<br/>folder van<br/>publicatie repo");
    J("Creëer in<br/>basisstructuur voor<br/>project in publicatie<br/>repo folder voor<br/>versienr")-->K("Plaats<br/>gegenereerde<br/>snapshot.html (als<br/>index.html) en pdf<br/>in versienr. folder<br/>en in de project<br/>folder van<br/>publicatie repo");
    K("Plaats<br/>gegenereerde<br/>snapshot.html (als<br/>index.html) en pdf<br/>in versienr. folder<br/>en in de project<br/>folder van<br/>publicatie repo")-->L("Gebruik link van<br/>gegenereerd Respec<br/>document in GitHub<br/>Pages");
```

<figcaption>Het VNG-R Respec proces (Mermaid voorbeeld)</figcaption>
</figure>
