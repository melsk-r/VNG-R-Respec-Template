// Plaats dit bestand op een centrale locatie voor hergebruik in meerdere documenten.
var organisationConfig = {
    nl_organisationName: "VNG Realisatie",
    nl_organisationStylesURL: "https://gitdocumentatie.logius.nl/publicatie/respec/style/",
    nl_organisationPublishURL: "https://gitdocumentatie.logius.nl/publicatie/",
    // Het hier gedefinieerde logo wordt helemaal bovenaan het Respec document aan de rechterzijde geplaatst.
    // Hier is er voor gekozen de 'width' property niet te gebruiken waardoor het logo automatisch in de juiste verhoudingen wordt geplaatst.
    logos: [{
        src: "https://melsk-r.github.io/VNG-R-Respec-Template/logo-VNG-Realisatie.jpg",
        alt: "VNG-Realisatie",
        id: "VNG-Realisatie",
        height: 77,
        url: "https://www.vng.nl",
    }],

   // Mermaid is een eenvoudige notatie-wijze voor het definieren van stroomdiagrammen. Onderstaande 'postProcess' maakt van die eenvoudige notatie een grafiek.
    postProcess: [window.respecMermaid.createFigures],

   // De hier gedefinieerde variabelen kunnen door ze nogmaals in de config.js te plaatsen overruled worden.  
   // Bijv. om de url van de vorige versie niet te tonen, aan begin van de life cycle van een document is deze er nl. nog helemaal niet.
	
   //this: "this", <-- Zo kun je dus eigen variabelen introduceren die je ergens anders kunt gebruiken.
   // Zoals bijv. hier --> 'thisVersion: ["nl_organisationPublishURL", "this", "/", "shortName"],'
   
   // Onderzoeken hoe je een oude versie kunt publiceren.
   // ---------------------------------------------------
   // latestVersion: ["nl_organisationPublishURL", "pubDomain", "/", "shortName"],
    latestVersion: ["nl_organisationPublishURL", "latest", "/", "shortName"],
   // thisVersion: ["nl_organisationPublishURL", "pubDomain", "/", "specStatus", "-", "specType", "-", "shortName", "-", "publishDate"],
    thisVersion: ["nl_organisationPublishURL", "shortName"],
   // prevVersion: ["nl_organisationPublishURL", "pubDomain", "/", "previousMaturity", "-", "specType", "-", "shortName", "-", "previousPublishDate"],
    prevVersion: ["nl_organisationPublishURL", "shortName"],

   // Nog onderzoeken waarom, als de repository naam hoofdletters bevat' de url van de 'vorige versie' na renderen alleen lowercase is terijl die 
   // van de huidige en laatste versie voldoet aan de naam zoals deze is. Dat zorgt er nl. voor dat die url niet werkt.

    useLogo: true,
    useLabel: true,

    license: "eupl",
    addSectionLinks: true,

    localizationStrings: {
        en: {
            // Documentstatussen	
            wv: "Draft",
            cv: "Recommendation",
            vv: "Proposed recommendation",
            def: "Definitive version",
            eo: "Outdated version",
            tg: "Rescinded version",
	    // Document types
            basis: "Document",
            no: "Norm",
            st: "Standard",
            im: "Information model",
            pr: "Guideline",
            hr: "Guide",
            wa: "Proposed recommendation",
            al: "General",
            bd: "Governance documentation",
            bp: "Best practice",
        },
        nl: {
            // Documentstatussen	
            wv: "Werkversie",
            cv: "Consultatieversie",
            vv: "Versie ter vaststelling",
            def: "Vastgestelde versie",
            eo: "Verouderde versie",
            tg: "Teruggetrokken versie",
            tst: "Test versie",
	    ig: "In Gebruik",
	    io: "In Ontwikkeling",
	    // Document types
            basis: "Document",
            no: "Norm",
            st: "Standaard",
            im: "Informatiemodel",
            pr: "Praktijkrichtlijn",
            hr: "Handreiking",
            wa: "Werkafspraak",
            al: "Algemeen",
            bd: "Beheerdocumentatie",
            bp: "Best practice",
        },
    },

    sotdText: {
        nl: {
            sotd: "Status van dit document",
            def: `Dit is de definitieve versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
            wv: `Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen door andere documenten. Het is geen door het TO goedgekeurde consultatieversie.`,
            cv: `Dit is een door het TO goedgekeurde consultatieversie. Commentaar over dit document kan gestuurd worden naar `,
            vv: `Dit is een definitief concept van de nieuwe versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
            basis: "Dit is een document zonder officiële status.",
        },
        en: {
            sotd: "Status of This Document",
            def: `This is the definitive version of this document. Edits resulting from consultations have been applied.`,
            wv: `This is a draft that could be altered, removed or replaced by other documents. It is not a recommendation approved by TO.`,
            cv: `This is a proposed recommendation approved by TO. Comments regarding this document may be sent to `,
            vv: `This is the definitive concept of this document. Edits resulting from consultations have been applied.`,
            basis: "This document has no official standing.",
        },
    },

    labelColor: {
        def: "#154273",
        wv: "#39870c",
    },
	
    licenses: {
        cc0: {
            name: "Creative Commons 0 Public Domain Dedication",
            short: "CC0",
            url: "https://creativecommons.org/publicdomain/zero/1.0/",
            image: "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-zero.svg",
        },
        "cc-by": {
            name: "Creative Commons Attribution 4.0 International Public License",
            short: "CC-BY",
            url: "https://creativecommons.org/licenses/by/4.0/legalcode",
            image: "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-by.svg",
        },
        "cc-by-nd": {
            name: "Creative Commons Naamsvermelding-GeenAfgeleideWerken 4.0 Internationaal",
            short: "CC-BY-ND",
            url: "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl",
            image: "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-by-nd.svg",
        },
        "eupl": {
            name: "EUROPEAN UNION PUBLIC LICENCE v. 1.2",
            short: "EUPL",
            url: "https://eupl.eu/",
            image: "https://eupl.eu/eu.png",
        },
    },

    localBiblio: {
        "SemVer": {
            href: "https://semver.org",
            title: "Semantic Versioning 2.0.0",
            authors: ["T. Preston-Werner"],
            date: "June 2013"
        },
    },
}
