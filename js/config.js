let respecConfig = {
//  useLogo: true,
//  useLabel: true,
//  license: "eupl",
  shortName: "Respec-template",

  // Zie 'localizationStrings/nl' voor de lijst met toegestane specificatie-types
  specType: "HR",
 
  // Zie 'localizationStrings/nl' voor de lijst met toegestane specificatie-statussen
  specStatus: "DEF",
  publishDate: "2023-12-14",
  publishVersion: "1.0.0",
  
  // Zie 'localizationStrings/nl' voor de lijst met toegestane maturities
  previousMaturity: "WV",
  previousPublishDate: "2022-06-24",
  previousPublishVersion: "0.0.1",

  title: "Generating Respec documentation",
  content: {"README": "informative", "ch01": "informative", "ch02": "informative", "mermaid": "informative"},
//  editors:
//    [
//      {
//        name: "Robert Melskens",
//        company: "VNG Realisatie",
//        companyURL: "https://vng.nl/artikelen/vng-realisatie",
//      }
//    ],
  authors:
    [
      {
        name: "Robert Melskens",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      }
    ],
  github: "https://github.com/melsk-r/VNG-R-Respec-Template",

  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "VNG-R-WOW.pdf",
      },
  ],
};
