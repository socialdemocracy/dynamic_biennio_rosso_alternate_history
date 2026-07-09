const colourList = [{
        word: "PSRI",
        style: "color: #FFC0CB; font-weight: bold;"
   },
    {
        word: "Communist",
        style: "color: #8B0000; font-weight: bold;"
   },
    {
        word: "Maximalist",
        style: "color: #DC143C; font-weight: bold;"
   },
    {
        word: "Labour",
        style: "color: #B22222; font-weight: bold;"
   },
    {
        word: "Reformist",
        style: "color: #FF6961; font-weight: bold;"
   },
    {
        word: "Syndicalist",
        style: "color: #2F2F2F; font-weight: bold;"
   },
    {
        word: "PCd'I",
        style: "color: #C72F35; font-weight: bold;"
   },
    {
        word: "PSU",
        style: "color: #E35A5A; font-weight: bold;"
   },
    {
        word: "PLL",
        style: "color: #FFD1D9; font-weight: bold;"
   },
    {
        word: "PRI",
        style: "color: #3CB371; font-weight: bold;"
   },
    {
        word: "DS",
        style: "color: #1E99C5; font-weight: bold;"
   },
    {
        word: "PDSI",
        style: "color: #1E99C5; font-weight: bold;"
   },
    {
        word: "PPI",
        style: "color: #92dff3; font-weight: bold;"
   },
    {
        word: "LDR",
        style: "color: #FFD700; font-weight: bold;"
   },
    {
        word: "PLDI",
        style: "color: #FFD700; font-weight: bold;"
   },
    {
        word: "PLI",
        style: "color: #0047AB; font-weight: bold;"
   },
    {
        word: "UL",
        style: "color: #0047AB; font-weight: bold;"
   },
    {
        word: "PCS",
        style: "color: #656573; font-weight: bold;"
   },
    {
        word: "FdC",
        style: "color: #000000; font-weight: bold;"
   },
    {
        word: "PNF",
        style: "color: #000000; font-weight: bold;"
   },
    {
        word: "Vittorio Emanuele III",
        style: "color: #6e7f80; font-weight: bold;"
   },
    {
        word: "Umberto II",
        style: "color: #6e7f80; font-weight: bold;"
   },
    {
        word: "Red Guard",
        style: "color: #693232; font-weight: bold;"
   },
    {
        word: "Red Guards - PCd'I",
        style: "color: #8B0000; font-weight: bold;"
   },
    {
        word: "Red Guards - PSI",
        style: "color: #FF6961; font-weight: bold;"
   },
    {
        word: "Arditi del Popolo",
        style: "color: #dddddd; font-weight: bold;"
   },
    {
        word: "Fasci",
        style: "color: #000000; font-weight: bold;"
   },
    {
        word: "Arditismo",
        style: "color: #b5aeae; font-weight: bold;"
   },
    {
        word: "Anti-Bolshevik Leagues",
        style: "color: #240606; font-weight: bold;"
   },
    {
        word: "Regio Esercito",
        style: "color: #808080; font-weight: bold;"
   },
    {
        word: "Esercito Italiano",
        style: "color: #808080; font-weight: bold;"
   },
    {
        word: "Carabinieri",
        style: "color: #808080; font-weight: bold;"
   },
];



const tooltipList = [{
    searchString: "PSRI",
    explanationText: "<img src=img/PLDI.png> Italian Reformist Socialist Party"
    },
    {
    searchString: "Communist",
    explanationText: "<img src=img/PreparingRevolution.jpg> The Communists are interested in radical, transformative policies and revolutionary action."
    },
    {
    searchString: "Maximalist",
    explanationText: "<img src=img/ShuffleLeadership.jpg> The Maximalists are a faction mostly comprised of Center-Marxists, between reform and revolution."
    },
    {
    searchString: "Labour",
    explanationText: "<img src=img/TurinFactories.jpg> Labour's goal is economic reform and benefits for organized workers."
    },
    {
    searchString: "Reformist",
    explanationText: "<img src=img/DemBg.jpg> Reformists are pragmatic participants in government, and seek to expand the welfare state and defend democracy."
    },
    {
    searchString: "Syndicalist",
    explanationText: "<img src=img/ItalianSyndicalistUnion.jpg> Syndicalist's are a splinter faction of Labour, advocating for radical strikes and workers' councils."
    },
    {
    searchString: "PCd'I",
    explanationText: "<img src=img/redguarddeck.jpg> Italian Communist Party"
    },
    {
    searchString: "PSU",
    explanationText: "<img src=img/UnemploymentGov.jpg> Unitary Socialist Party"
    },
    {
    searchString: "PLL",
    explanationText: "<img src=img/Rally.jpg> Liberal Worker's Party"
    },
    {
    searchString: "PRI",
    explanationText: "<img src=img/pri.webp> Republican Party Of Italy"
    },
    {
    searchString: "DS",
    explanationText: "<img src=img/DS.png> Social Democracy"
    },
    {
    searchString: "PDSI",
    explanationText: "<img src=img/DS.png> Italian Social Democratic Party"
    },
    {
    searchString: "PPI",
    explanationText: "<img src=img/libertas.jpg> Italian People's Party"
    },
    {
    searchString: "LDR",
    explanationText: "<img src=img/wow2.jpg> Liberals, Democrats and Radicals"
    },
    {
    searchString: "PLDI",
    explanationText: "<img src=img/PLDI.png> Italian Democratic Liberal Party"
    },
    {
    searchString: "PLI",
    explanationText: "<img src=img/PLI.png> Italian Liberal Party"
    },
    {
    searchString: "UL",
    explanationText: "<img src=img/ShuffleCabinet.jpg> Liberal Union"
    },
    {
    searchString: "PCS",
    explanationText: "<img src=img/uh oh.jpg> Christian Social Party"
    },
    {
    searchString: "FdC",
    explanationText: "<img src=img/benito.jpg> Italian Fasces of Combat"
    },
    {
    searchString: "PNF",
    explanationText: "<img src=img/benito.jpg> National Fascist Party"
    },
    {
    searchString: "Vittorio Emanuele III",
    explanationText: "<img src=img/portraits/VitorioEmanuel.jpg>"
    },
    {
    searchString: "Umberto II",
    explanationText: "<img src=img/portraits/UmbertoII.jpg>"
    },
    {
    searchString: "Red Guard",
    explanationText: "<img src=img/RedGuards.jpg> The Red Guards are a paramilitary socialist group asscoiated with the PSI."
    },
    {
    searchString: "Red Guards - PCd'I",
    explanationText: "<img src=img/redguarddeck.jpg> The Red Guards are a paramilitary socialist group, its radical wing associated with the PCd'I."
    },
    {
    searchString: "Red Guards - PSI",
    explanationText: "<img src=img/redguarddeck.jpg> The Red Guards are a paramilitary socialist group, its moderate wing associated with the PSI."
    },
    {
    searchString: "Arditi del Popolo",
    explanationText: "<img src=img/Arditi.png> The Arditi del Popolo is a anti-fascist group composed of anarchists to communists to republicans."
    },
    {
    searchString: "Fasci",
    explanationText: "<img src=img/fascirally2.jpg> The Fasci is a right-wing organisation of war veterans associated with the PNF."
    },
    {
    searchString: "Arditismo",
    explanationText: "<img src=img/fascirally.webp> The Arditismo are an organisation associated with the Fasci, comprised of former members of the 'Arditi' in the Italian Army."
    },
    {
    searchString: "Anti-Bolshevik Leagues",
    explanationText: "<img src=img/InterPartyRelationships.jpg> The Anti-Bolshevik Leagues are local organisations across Italy formed to combat socialist ideologies, funded by landowners and industrialists."
    },
    {
    searchString: "Regio Esercito",
    explanationText: "<img src=img/Targeting.jpg> Royal Army"
    },
    {
    searchString: "Esercito Italiano",
    explanationText: "<img src=img/MilitaryInfluence.jpg> Italian Army"
    },
    {
    searchString: "Carabinieri",
    explanationText: "<img src=img/Carabinieri.jpg> Interior Police"
    },
];
