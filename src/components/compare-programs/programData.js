// "Legacy" program data was written in JSON, simpler to just parse the legacy JSON into JS objects

export const ChamplainLennoxville = JSON.parse(`{
  "CreativeArts": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Art and Media": "Journalism Today (585-131-LE), Visual Literacy (581-132-LE), Film Study (530-123-LE), The Language of Music (550-122-LE), International Cinema (530-323-LE), R/Evolution in Communication (585-231-LE), The Creative Process (589-221-LE), Photography (510-221-LE), National Art & Literature in Quebec and Canada (585-331-LE), The Art of Communication (589-301-LE), Art Criticism (520-321-LE), Film Production (530-321-LE0, Communication and Mass Media (585-431-LE), Music Expression (550-401-LE)"
    }
  },
  "LanguagesandCommunication": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Media and Communication": "Journalism Today (585-131-LE), Visual Literacy (581-132-LE), International Cinema (530-323-LE), R/Evolution in Communication (585-231-LE), National Art & Literature in Quebec and Canada (585-331-LE), Communication and Mass Media (585-431-LE)",
      "Languages": "Spanish I (607-102-LE), Spanish II (607-202-LE), Spanish III (607-303-LE), Spanish IV (607-403-LE), German I (609-102-LE), German II (609-203-LE), German III (609-303-LE), Ancient Roots of Modern Languages (615-402-LE)"
    }
  },
  "VisualArts": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Art": "Drawing 1 (510-110-LE), Drawing 2 (510-210-LE), Drawing 3 (510-310-LE), Painting 1 (510-112-LE), Painting 2 (510-212-LE), Painting 3 (510-312-LE), Sculpture 1 (510-170-LE), Sculpture 2 (510-270-LE), Sculpture 3 (510-370-LE), Photography 1 (510-113-LE), Photography 2 (510-213-LE), Printmaking 1 (510-122-LE), Printmaking 2 (510-222-LE), Design (510-220-LE), Portfolio (510-330-LE)",
      "Art history": "Art History Basics (520-110-LE), Art History Study (520-210-LE), Reading and Writing Art History (520-310-LE)"
    }
  },
  "LiberalArts": {
    "Choice of Liberal Arts — General profile (700.GE), Liberal Arts — Math profile (700.GM)": "",
    "General profile prerequisites": "Secondary IV Math CST (414)",
    "Math profile prerequisites": "Secondary V Math TS/SN (506)",
    "Program Grid": {
      "History, Classics, and Religion": "Greco-Roman Foundations (332-110-LE), Thinking About Religion (370-121-LE), Middle Ages in Europe (330-254-LE), Birth of the Modern World (330-113-LE), The World Today (330-984-LE)",
      "Philosophy and Methodology": "Ancient Philosophy (340-910-LE), Liberal Arts Methodology (360-141-LE), Principles of Logic (340-200-LE), Philosophy and History of Science (340-322-LE), Social and Political Philosophy (340-913-LE)",
      "Liberal Arts Seminar Course (360-341-LE)": "",
      "4 Optional courses": ""
    }
  },
  "HealthScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Program Grid": {
      "Math": "Calculus I (201-NYA-05), Calculus II (201-NYB-05), Linear Algebra (201-NYC-05)",
      "Physics": "Mechanics (203-NYA-05); Wave Motion and Modern Physics (203-NYC-05); Electricity and Magnetism (203-NYB-05)",
      "Chemistry": "General Chemistry (202-NYA-05), Chemistry of Solutions (202-NYB-05), Organic Chemistry I (202-BFA-05)",
      "Biology": "General Biology I (101-NYA-05), General Biology II (101-BFC-05)",
      "1 Science Option course": ""
    }
  },
  "PureandAppliedScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Program Grid": {
      "Math": "Calculus I (201-NYA-05), Calculus II (201-NYB-05), Linear Algebra (201-NYC-05)",
      "Physics": "Mechanics (203-NYA-05); Wave Motion and Modern Physics (203-NYC-05); Electricity and Magnetism (203-NYB-05)",
      "Chemistry": "General Chemistry (202-NYA-05), Chemistry of Solutions (202-NYB-05)",
      "Biology": "General Biology I (101-NYA-05)",
      "3 Science Option courses": ""
    }
  },
  "GeneralSocialScience": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Compulsory": "Introduction to Psychology (350-102-RE), Quantitative Methods (360-300-RE), Western Civilization (330-910-LE), Macroeconomics (383-920-LE), Social Science Methodology (300-300-RE)",
      "3 Introductory Level courses": "",
      "6 Advanced Level courses": ""
    }
  },
  "SocialScienceMathematics": {
    "Prerequisites": "Secondary V Math TS/SN (506)",
    "Program Grid": {
      "Math": "Differential Calculus (201-103-LE), Integral Calculus (201-203-LE), Linear Algebra (201-105-LE)",
      "Compulsory": "Quantitative Methods (360-300-RE), Macroeconomics (383-920-LE), Western Civilization (330-910-LE), Introduction to Psychology (350-102-RE), Social Science Methodology (300-300-RE)",
      "2 Introductory Level courses": "",
      "3 Advanced Level courses": ""
    }
  },
  "Commerce": {
    "Prerequisites": "Secondary V Math TS/SN (506)",
    "Program Grid": {
      "Math": "Differential Calculus (201-103-LE), Integral Calculus (201-203-LE), Linear Algebra (201-105-LE)",
      "Compulsory": "Quantitative Methods (360-300-RE), Macroeconomics (383-920-LE), Fundamentals of Business (401-101-LE), Western Civilization (330-910-LE), Introduction to Psychology (350-102-RE), Social Science Methodology (300-300-RE), Microeconomics (383-293-LE)",
      "1 Introductory Level course": "",
      "1 Advanced Level Business course": "",
      "1 Advanced Level course": ""
    }
  },
  "Psychology": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Psychology and Sociology": "Introduction to Psychology (350-102-RE), Introduction to Sociology (387-101-LE), Psychology of Development (350-276-LE) OR Institutions and Institutional Issues (387-283-LE), Social Psychology (350-271-LE) OR Social Issues and Social Problems (387-281-LE)",
      "Compulsory": "Quantitative Methods (360-300-RE), Macroeconomics (383-920-LE), Western Civilization (330-910-LE), Social Science Methodology (300-300-RE)",
      "2 Introductory Level courses": "",
      "2 Advanced Level courses": ""
    }
  },
  "Criminology": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Criminology": "History of Crime and Punishment (330-301-LE), Psychology of Criminal Behaviour (350-301-LE), Deviance and Delinquency (387-301-LE), Criminal Justice: Law & Order (385-401-LE)",
      "Compulsory": "Western Civilization (330-910-LE), Introduction to Political Science (385-101-LE), Macroeconomics (383-920-LE), Quantitative Methods (360-300-RE), Introduction to Psychology (350-102-RE), Social Science Methodology (300-300-RE)",
      "1 Introductory Level course": "",
      "2 Advanced Level courses": ""
    }
  }
}`)

export const ChamplainStLambert = JSON.parse(`{
  "DigitalArtsNewMedia": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Media Design and Creation": "Introduction to Visual Creation: Drawing and Observation, Introduction to Digital Creation: 2D Imaging, Web & FX: From Theory to Practice, 2D Design Studio, 3D Design Studio, Multi-Media Animation, 3D Digital Modelling & Animation",
      "Theory and History": "The Power of the Image; Sight, Sound, Motion; Expression in Visual Genres, Art History, Making Visual Narratives, Looking Critically and Creatively at Media",
      "Portfolio: Synthesis of Theory & Practice": ""
    }
  },
  "FilmNewMedia": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Media Design and Production": "Introduction to Media Production: TV Studio, Introduction to Digital Creation: 2D Imaging, Web & FX: From Theory to Practice, Mobile Journalism: Writing and Shooting, Digital Filmmaking: Montage, Multi-Media Animation, Digital Filmmaking: From the Word to the Screen",
      "Theory and History": "The Power of the Image; Sight, Sound, Motion; Expression in Visual Genres, Film History, Multi-Media Events & Documenting Reality, Looking Critically and Creatively at Media",
      "Portfolio: Synthesis of Theory & Practice": ""
    }
  },
  "LanguageCulture": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Culture and History": "Cultural Identity in the Visual Age I, Cultural Identity in the Visual Age II, Urban Spaces as Cultural Spheres, La francophonie à travers le monde, Montreal: A Cultural Mosaic, Spanish Civilization, Italian Civilization",
      "Language": "Spanish I, Spanish II, Spanish III, Italian I, Italian II, Italian III"
    }
  },
  "LawandCivilization": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Justice and Law": "Morality, Justice and the State; Philosophy of Law; Liberty, Rights and the Individual; Ethics, Law and Civilization",
      "Culture/History": "Kingdoms and Empires: A History of the Ancient and Medieval Worlds; World Religions; Rebirth and Revolution: The Making of an Early Modern World; Pictures & Recordings: Technologies of Art and Music; History of Law, Romanticism and Realism; Wars and Peace: The Origins of our Contemporary World",
      "Compulsory": "Thinking Outside the Box, Then & Now; Research Methods, The Rise of Humanism; Logic, Math & Society; Development of Modern Science",
      "2 Option courses": ""
    }
  },
  "LawCivilizationandMathematics": {
    "Prerequisites": "Secondary V Math TS/SN (506)",
    "Program Grid": {
      "Math": "Calculus I, Calculus II, Linear Algebra",
      "Justice and Law": "Morality, Justice and the State; Philosophy of Law; Liberty, Rights and the Individual; Ethics, Law and Civilization",
      "Literature": "Gods, Goddesses and Warriors: Creative Expression; Introduction to Literature, The Evolution of Literary Genres, Literature for Our Time",
      "Culture/History": "Kingdoms and Empires: A History of the Ancient and Medieval Worlds; World Religions; Rebirth and Revolution: The Making of an Early Modern World; Pictures & Recordings: Technologies of Art and Music; Romanticism and Realism; Wars and Peace: The Origins of our Contemporary World",
      "Compulsory": "Thinking Outside the Box, Then & Now; Research Methods, The Rise of Humanism; Logic, Math & Society; Development of Modern Science"
    }
  },
  "ComputerScienceMathematics": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Program Grid": {
      "Programming": "Introduction to Programming, Data Structures and Object-Oriented Programming, Program Development in a Graphical Environment",
      "Math": "Calculus I, Calculus II, Linear Algebra, Discrete Mathematics",
      "Physics": "Mechanics; Waves, Optics and Modern Physics; Electricity and Magnetism",
      "Chemistry": "General Chemistry"
    }
  },
  "HealthScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Program Grid": {
      "Math": "Calculus I, Calculus II, Linear Algebra I",
      "Physics": "Mechanics; Waves, Optics and Modern Physics; Electricity and Magnetism",
      "Chemistry": "General Chemistry, General Chemistry II, Organic Chemistry I",
      "Biology": "General Biology, General Biology II",
      "1 Option course": ""
    }
  },
  "PureandAppliedScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Program Grid": {
      "Math": "Calculus I, Calculus II, Linear Algebra I",
      "Physics": "Mechanics; Waves, Optics and Modern Physics; Electricity and Magnetism",
      "Chemistry": "General Chemistry, General Chemistry II",
      "Biology": "General Biology",
      "3 Option courses": ""
    }
  },
  "GeneralSocialScience": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Compulsory": "Western Civilization, Introduction to Psychology, Quantitative Methods, Macroeconomics, Introduction to Methodology",
      "3 Level I Concentration courses": "",
      "6 Level II Concentration courses": "",
      "Concentration course disciplines": "Anthropology, Biology, Business, Economics, Geography, History, Sociology, Political Science, Psychology"
    }
  },
  "Commerce": {
    "Prerequisites": "Secondary V Math TS/SN (506)",
    "Program Grid": {
      "Math": "Calculus I, Calculus II, Linear Algebra",
      "Compulsory": "Macroeconomics, Fundamentals of Business, Western Civilization, Introduction to Accounting, Quantitative Methods, Microeconomics, Introduction to Methodology, Introduction to Psychology",
      "Business": "Marketing for Commercial Law",
      "Complementary course": "Computer Applications for Commerce",
      "1 Level I Concentration course from the following disciplines": "Anthropology, Biology, Business, Economics, Geography, History, Sociology, Political Science, Psychology"
    }
  },
  "Criminology": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Psychology": "Introduction to Psychology, Psychological Development of Criminal Behaviour, Abnormal Psychology & Criminal Behaviour",
      "Sociology": "Introduction to Sociology; Sociology of Deviance, Law & Society; Sociology of Gender, Race & Justice",
      "Anthropology": "Introduction to Anthropology, Introduction to Forensic Anthropology: CSI",
      "Compulsory": "Western Civilization, Quantitative Methods, Introduction to Methodology, Macroeconomics, History of Crime & Punishment",
      "Complementary course": "Introduction to Forensic Science",
      "1 Level I Concentration course from the following disciplines": "Biology, Business, Calculus, Geography, Political Science"
    }
  },
  "Education": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Sociology": "Introduction to Sociology, Sociology of Education",
      "Psychology": "Introduction to Psychology, Child & Adolescent Psychology",
      "Compulsory": "Introduction to Anthropology, Western Civilization, Macroeconomics, Quantitative Methods, Introduction to Methodology, Myth of Race & Reality of Racism, World Geography",
      "3 Level II Concentration courses from the following disciplines": "Anthropology, Economics, Geography, History, Psychology, Sociology"
    }
  },
  "Psychology": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Compulsory": "Introduction to Psychology, Quantitative Methods, Western Civilization, Human Biology, Introduction to Methodology, Macroeconomics, Statistics",
      "2 Level I Concentration courses": "",
      "2 Level II Psychology courses": "",
      "3 Level II Concentration courses": "",
      "Concentration course disciplines": "Anthropology, Business, Calculus, Economics, Geography, History, Political Science, Sociology, Psychology"
    }
  },
  "WorldStudies": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Prerequisites for Math Option": "Secondary V Math TS/SN (506)",
    "Program Grid": {
      "This is the program grid for World Studies without math. To see the program grid for World Studies with math option, visit Champlain St-Lambert's website and/or see their viewbook.": "",
      "Compulsory": "Introduction to Political Science, World Geography, Western Civilization, Introduction to Psychology, Introduction to Anthropology, Macroeconomics, Quantitative Methods, Introduction to Methodology, Twentieth Century History, International Economics, International Politics",
      "3 Level II Concentration courses from the following disciplines": "Anthropology, Economics, Geography, History, Psychology"
    }
  }
}`)

export const ChamplainStLawrence = JSON.parse(`{
  "ArtsLiteratureandCommunication": {
    "Prerequisites": "general CEGEP entrance requirements",
    "This is ALC without prior Spanish": "",
    "Program Grid": {
      "Literature, Culture and Classics": "Literary Movements, Canadian Arts and Literature, Qu'est-ce qu'un classique québécois?, Literary Genres, Perspectives in English Literature, Fondements de la langue française, Pop Fiction, Exploring Cultural Diversity",
      "Language": "Spanish I, Spanish II, Spanish III, German I, German II, German III"
    }
  },
  "ALCwithpriorSpanish": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Literature, Culture and Classics": "Literary Movements, Canadian Arts and Literature, Qu'est-ce qu'un classique québécois?, Literary Genres, Perspectives in English Literature, Fondements de la langue française, Pop Fiction, Exploring Cultural Diversity",
      "Language": "German I, German II, German III, Spanish II, Spanish III, Spanish IV"
    }
  },
  "ScienceandALC": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "3-year pre-university Double DEC": "",
    "Students may choose either ALC profile (with or without prior Spanish)": "",
    "Choice of Upper-level Science courses can be tailored to fit university plans": "",
    "Program Grid": {
      "See Champlain St-Lawrence's website for program grid and details": ""
    }
  },
  "HealthScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Program Grid": {
      "Math": "Differential Calculus (201-NYA-05), Integral Calculus (201-NYB-05), Linear Algebra and Vector Geometry (201-NYC-05)",
      "Physics": "Mechanics, Electricity and Magnetism; Waves, Optics and Modern Physics",
      "Chemistry": "General Chemistry, Chemistry of Solutions, Organic Chemistry I",
      "Biology": "General Biology I, General Biology II"
    }
  },
  "PureandAppliedScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Program Grid": {
      "Math": "Differential Calculus (201-NYA-05), Integral Calculus (201-NYB-05), Linear Algebra and Vector Geometry (201-NYC-05)",
      "Physics": "Mechanics, Electricity and Magnetism; Waves, Optics and Modern Physics",
      "Chemistry": "General Chemistry, Chemistry of Solutions",
      "Biology": "General Biology I (101-NYA-05)",
      "2 Science/Math Option courses": ""
    }
  },
  "ScienceandSocialScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "3-year pre-university Double DEC": "",
    "Program Grid": {
      "Math": "Differential Calculus (201-NYA-05), Integral Calculus (201-NYB-05), Linear Algebra and Vector Geometry (201-NYC-05)",
      "Physics": "Mechanics (203-NYA-05), Electricity and Magnetism (203-NYB-05); Waves, Optics and Modern Physics (203-NYC-05)",
      "Chemistry": "General Chemistry (202-NYA-05), Chemistry of Solutions (202-NYB-05)",
      "Biology": "General Biology I (101-NYA-05)",
      "Social Science": "Introduction to Psychology (350-102-RE), Practical Initiation to Methodology (300-300-RE), Introduction to Western History (330-910-RE), Introduction to Macroeconomics (383-920-RE), Quantitative Methods in the Social Sciences (360-300-RE)",
      "2 Science/Math Option courses from the following": "General Biology II, Topics in Mathematics, Advanced Calculus, Probability and Statistics, Organic Chemistry I, Astrophysics, Introduction to Thermodynamics, Contemporary Physics",
      "2 First-level Social Science Option courses": "",
      "2 Second-level Social Science Option courses": ""
    }
  },
  "SocialScienceDiscovery": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Compulsory": "Introduction to Western History, Practical Initiation to Methodology, Introduction to Psychology, Introduction to Macroeconomics, Quantitative Methods in the Social Sciences",
      "3 First-level Option courses from the following": "Differential Calculus, Intro to Geography, Intro to Sociology, Intro to Politics OR Canadian & Quebec Politics, Intro to Business",
      "6 Second-level Option courses": "Based on prerequisites acquired from first-level courses"
    }
  },
  "SocialSciencePsychologySocietyHealth": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Compulsory": "Practical Initiation to Methodology, Introduction to Psychology, Introduction to Macroeconomics, Quantitative Methods in the Social Sciences, Introduction to Western History; Introduction to Sociology: The Individual and Society",
      "Compulsory Second-level courses": "The Human Body, Quantitative Methods II, Social Science and Health",
      "2 First-level Option courses from the following": "Differential Calculus, Intro to Geography, Intro to Politics OR Canadian & Quebec Politics, Intro to Business",
      "1 Health-oriented Option course": "",
      "2 Second-level Option courses": ""
    }
  },
  "SocialScienceInternational": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Compulsory": "Introduction to Western History, Introduction to Geography of the World, Practical Initiation to Methodology, Introduction to Psychology, Introduction to Macroeconomics, Quantitative Methods in the Social Sciences",
      "2 First-level Option courses from the following": "Differential Calculus, Intro to Sociology, Intro to Politics OR Canadian & Quebec Politics, Intro to Business",
      "4 International Profile Option courses": "",
      "2 Second-level Option courses": ""
    }
  },
  "Commerce": {
    "Prerequisites": "Secondary V Math TS/SN (506)",
    "Program Grid": {
      "Math": "Differential Calculus, Integral Calculus, Linear Algebra and Vector Geometry",
      "Compulsory": "Practical Initiation to Methodology, Introduction to Business, Introduction to Macroeconomics, Introduction to Western History, Introduction to Psychology, Microeconomics",
      "1 First-level Option course from the following": "Intro to Geography, Intro to Sociology, Intro to Politics OR Canadian & Quebec Politics",
      "2 Second-level Option courses": ""
    }
  },
  "SocialScienceMathematics": {
    "Prerequisites": "Secondary V Math TS/SN (506)",
    "Program Grid": {
      "Math": "Differential Calculus, Integral Calculus, Linear Algebra and Vector Geometry",
      "Compulsory": "Practical Initiation to Methodology, Introduction to Western History, Introduction to Macroeconomics, Quantitative Methods in the Social Sciences, Introduction to Psychology",
      "2 First-level Option courses from the following": "Intro to Geography, Intro to Sociology, Intro to Politics OR Canadian & Quebec Politics, Intro to Business",
      "3 Second-level Option courses": ""
    }
  },
  "SocialScienceandALC": {
    "Prerequisites": "Secondary V Math TS/SN (506)",
    "3-year pre-university Double DEC": "",
    "Students may choose either ALC profile (with or without prior Spanish)": "",
    "Choice of Social Science courses can be tailored to fit university plans": "",
    "Program Grid": {
      "Students taking the Commerce or Mathematics profile from Social Science must take the following college math courses": "Differential Calculus (201-103-RE), Integral Calculus (201-203-RE), Linear Algebra and Vector Geometry (201-105-RE)",
      "See Champlain St-Lawrence's website for program grid and details": ""
    }
  }
}`)

export const DawsonCollege = JSON.parse(`{
  "ArtsandCulture": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Art": "Introduction to Arts and Culture",
      "Philosophy, choice of": "Thinking for Ourselves OR Music History",
      "Choice 1, one of": "The Novel OR Interactive Media Workshop OR Film Theory OR Communication Theory OR Introduction to Printmaking OR Introduction to Internet Art and Culture",
      "Choice 2, one of": "Renaissance to Modern Art OR Religion and Popular Culture OR A Way with Words",
      "Choice 3, one of": "Creative Writing Workshop OR The Art of Physical Computing OR Media Lab OR Drawing/Painting Studio Projects OR Sculpture Studio Projects",
      "6 ALC electives": "",
      "2 option courses": ""
    }
  },
  "CinemaCommunications": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Cinema and Communications": "Explorations in Cinema and Communications, Film Theory OR Communication Theory, Cinema and Media History",
      "Media Lab": "",
      "6 ALC electives": "",
      "2 option courses": ""
    }
  },
  "InteractiveMediaArts": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Media": "Introduction to Interactive Media; Systems, Modelling and Creative Computation; The Interactive Experience, Interactive Media Workshop, The Art of Physical Computing",
      "6 ALC electives": "",
      "2 option courses": ""
    }
  },
  "Languages": {
    "Prerequisites": "general CEGEP entrance requirements",
    "French placement": "101 level or higher is required (there may be testing)",
    "Program Grid": {
      "Languages and Culture": "Culture through the Ages, A Way with Words, Lost in Translation, Introduction to Linguistics, Questions d'identité (course in French)",
      "Language (placement tests may be required)": "Language 1A, Language 2A, Language 1B, Language 2B, Language 1C, Language 1D",
      "6 ALC electives": ""
    }
  },
  "Literature": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Literature and Writing": "Literary Movements, Literary Theory and Criticism, The Novel, Poetry and Prosody",
      "Creative Writing Workshop": "",
      "6 ALC electives": "",
      "2 option courses": ""
    }
  },
  "StudioArts": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Art": "Introduction to Studio Art, Sculpture and Ideas, Renaissance to Modern Art, Introduction to Printmaking OR Introduction to Internet Art and Culture",
      "Choice of": "Drawing/Painting Studio Projects OR Sculpture Studio Projects",
      "6 ALC electives": "",
      "2 option courses": ""
    }
  },
  "VisualArts": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Portfolio": "",
    "Program Grid": {
      "Art": "Drawing I, Drawing II, Drawing III, Drawing IV, Colour and Painting I, Painting II, Painting III, Painting IV, Sculpture I, Sculpture II, Sculpture III, Sculpture IV, Printmaking I, Printmaking II",
      "Media and Art History": "New Media, New Media and Video, Art History I, Photography, Art Now"
    }
  },
  "LiberalArts": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Cutoffs": "78% overall average",
    "Letter of intent": "",
    "Assets: strong grades in English, History, and Social Science courses": "",
    "Program Grid": {
      "Philosophy": "Ancient Philosophy, Modern Philosophy",
      "Classics/History": "Greco-Roman Tradition, Sacred Writings, Post Classical History, Modern History: 19th and 20th Centuries, Renaissance to Baroque Art",
      "Methodology": "Research Methods: Research in Liberal Arts Disciplines, Principles of Mathematics and Logic, Science: History and Methodology",
      "6 option courses from the following disciplines": "Anthropology, Art History, Biology, Business Administration, Chemistry, Cinema, Classics, Computer Science, Economics, English, French, Geography, History, Interactive Media Arts, Journalism, Mathematics, Modern Languages (Chinese, German, Greek, Hebrew, Italian, Spanish), Music, Philosophy, Physics, Political Science, Psychology, Quantitative Methods, Religion, Sociology, Visual Arts (ALC), Theatre (ALC)"
    }
  },
  "GeneralStudiesSocialScience": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Compulsory": "General Psychology, Western Civilization, Introduction to Economics, Research Methods, Quantitative Methods",
      "Three 100-Level Option courses from the following disciplines": "Anthropology, Biology, Business Administration, Classics, Geography, Mathematics (Calculus I), Philosophy, Political Science, Religion, Sociology",
      "Three 200-Level Option courses from the above disciplines": "",
      "Two 300-Level Option courses from the above disciplines": "",
      "One 400-Level Option course": "From a discipline in which a 200-Level or a 300-Level course was passed"
    }
  },
  "Commerce": {
    "Prerequisites": "Secondary V Math TS/SN (506)",
    "Program Grid": {
      "Math": "Calculus I OR Calculus I Enriched, Calculus II OR Calculus II Enriched, Linear Algebra OR Linear Algebra Enriched",
      "Compulsory": "General Psychology, Introduction to Economics, Introduction to Business, Western Civilization, Basic of Marketing, Research Methods, Quantitative Methods",
      "One 100-Level Option course from the following disciplines": "Anthropology, Biology, Classics, Geography, Philosophy, Political Science, Religion, Sociology",
      "A 200-Level and a 300-Level course": "From a discipline in which a 100-Level course was passed"
    }
  },
  "ChildStudies": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Compulsory": "Western Civilization, General Psychology, Individual & Society, Introduction to Anthropology, Introduction to Economics, Cognitive Development, Research Methods, Developmental Psychology, Education, Quantitative Methods, Anthropology of Parenthood, Applied Social & Economic History",
      "One 100-Level Option course from the following disciplines": "Biology, Business Administration, Classics, Geography, Mathematics (Calculus I), Philosophy, Political Science, Religion",
      "One 400-Level Option course, choice of": "Advanced Studies in Psychology OR Advanced Studies in Sociology"
    }
  },
  "EnvironmentalStudies": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Compulsory (social science)": "Western Civilization, Introduction to Economics, General Psychology, Research Methods, Quantitative Methods",
      "Environment": "Introduction to Geography & the Environment, Natural Environment, Economics & the Environment, Environmental Issues, Advanced Environmental Studies",
      "Two 100-Level Option courses from the following disciplines": "Administration, Anthropology, Biology, Classics, Mathematics, Philosophy, Political Science, Religion, Sociology",
      "One 200-Level Option course from": "Social Problems, Sustainability & Business, Business Law, Mathematics: Linear Algebra OR a discipline in which a 100-Level course was already passed",
      "One 300-Level Option course from": "Topics in Religion, Contemporary Anthropology, Applied Social & Economic History, Mathematics: Calculus II OR a discipline in which a 100-Level course was already passed"
    }
  },
  "InternationalBusinessStudies": {
    "Prerequisites": "Secondary V Math TS/SN (506)",
    "Program Grid": {
      "Math": "Calculus I OR Calculus I Enriched, Linear Algebra OR Linear Algebra Enriched",
      "Compulsory": "Western Civilization, Introduction to Economics, Introduction to Business, General Psychology, International Business, Research Methods, Quantitative Methods",
      "One 100-Level Option course, choice of": "Introduction to Geography and the Environment OR Introduction to Politics",
      "One 200-Level Option course, choice of": "Microeconomics OR Economic Geography",
      "One 300-Level Option course": "From a discipline in which a 100-Level course was passed"
    }
  },
  "LawSocietyandJustice": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Compulsory": "Western Civilization, General Psychology, Individual & Society, Introduction to Economics, Introduction to Politics, Research Methods, Canadian History, Quantitative Methods, Canadian Democracy",
      "Law": "Sociology of Law, Psychology and the Law",
      "One 100-Level Option course from the following disciplines": "Anthropology, Biology, Business Administration, Classics, Geography, Mathematics (Calculus I), Philosophy, Religion",
      "One 300-Level Option course": "From a discipline in which a 100-Level course was passed",
      "One 400-Level Option course": "From a discipline in which a 300-Level course was passed"
    }
  },
  "NorthSouthStudies": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Compulsory": "Western Civilization, Introduction to Economics, Introduction to Politics, Third World History, Research Methods, General Psychology, Quantitative Methods",
      "Two 100-Level Option courses": "",
      "Two 200-Level Option courses": "In the same disciplines as the 100-Level Option courses chosen and passed",
      "Choice 1, one of": "Preparing for Field Trip OR 300-Level Option Course",
      "Choice 2, one of": "300-Level Option Course (choose a discipline in which a 100-Level course was already passed) OR Field Trip Experience in a Developing Country",
      "Choice 3, one of": "400-Level Option Course from a discipline in which a 200-Level or 300-Level course was passed OR Statistics for Social Science"
    }
  },
  "Psychology": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Compulsory": "General Psychology, Introduction to Economics, Western Civilization, Individual & Society, Research Methods, Quantitative Methods",
      "Biology": "Human Biology",
      "One 100-Level Option course from the following disciplines": "Anthropology, Business Administration, Classics, Geography, Mathematics (Calculus I), Philosophy, Political Science, Religion",
      "One 200-Level Option course, choice of": "Developmental Psychology OR Abnormal Psychology",
      "Two 200-Level Option courses": "From a discipline in which a 100-Level course was passed",
      "One 300-Level Option course, choice of": "Human Sexual Behaviour OR Applications of Psychology",
      "One 300-Level Option course": "From a discipline in which a 100-Level course was passed",
      "One 400-Level Option course, choice of": "Statistics for Social Science OR Advanced Studies in Psychology"
    }
  },
  "TravelTourism": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Compulsory": "General Psychology, Introduction to Economics, Western Civilization, Tourism, Research Methods, Introduction to Business, Quantitative Methods, Global Marketing",
      "Geography": "Introduction to Geography & the Environment, Applied Geography, Advanced Studies in Geography",
      "One 100-Level Option course from the following disciplines": "Anthropology, Biology, Classics, Mathematics (Calculus I), Philosophy, Political Science, Religion, Sociology",
      "Two 200-Level Option courses": "From a discipline in which a 100-Level course was passed"
    }
  },
  "HealthScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Program Grid": {
      "Math": "Calculus I, Calculus II, Linear Algebra",
      "Physics": "Mechanics; Waves, Optics & Modern Physics; Electricity & Magnetism",
      "Chemistry": "General Chemistry, Chemistry of Solutions, Organic Chemistry I",
      "Biology": "General Biology I, General Biology II",
      "One Science Option out of the following": "Probability and Statistics, Human Anatomy and Physiology, Calculus III, Environmental Biology, Astrophysics, Engineering Physics, Organic Chemistry II, Physical Geology, Introduction to Computer Programming in Engineering and Science, Special Topics in Science, Special Topics in Computer Science, Special Topics in Biology, Special Topics in Mathematics, Special Topics in Chemistry, Special Topics in Physics"
    }
  },
  "PureandAppliedScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Program Grid": {
      "Math": "Calculus I, Calculus II, Linear Algebra",
      "Physics": "Mechanics; Waves, Optics & Modern Physics; Electricity & Magnetism",
      "Chemistry": "General Chemistry, Chemistry of Solutions",
      "Biology": "General Biology I",
      "Three Science Option courses out of the following": "Probability and Statistics, Human Anatomy and Physiology, Calculus III, General Biology II, Environmental Biology, Astrophysics, Engineering Physics, Organic Chemistry I, Organic Chemistry II, Physical Geology, Introduction to Computer Programming in Engineering and Science, Special Topics in Science, Special Topics in Computer Science, Special Topics in Biology, Special Topics in Mathematics, Special Topics in Chemistry, Special Topics in Physics"
    }
  },
  "EnvironmentalScience": {
    "Prerequisities": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Program Grid": {
      "Math": "Calculus I, Calculus II, Linear Algebra",
      "Physics": "Mechanics; Waves, Optics & Modern Physics; Electricity & Magnetism",
      "Chemistry": "General Chemistry, Chemistry of Solutions, Organic Chemistry I",
      "Biology": "General Biology I, General Biology II, Environmental Biology"
    }
  },
  "EnrichedScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Cutoffs": "80% overall average, 85% minimum in at least two of the Secondary V science prerequisites and 80% minimum in the third",
    "Enriched Health Science: 200.H1": "",
    "Enriched Pure and Applied Science: 200.P1": "",
    "Students who are not accepted into the Enriched program will be automatically considered for the regular program": "",
    "Program Grid": {
      "See regular Health Science or regular Pure and Applied Science for program grid (depending on whether you're interested in Honours Health or Honours Pure and Applied)": "",
      "Offers enriched classes/options and enriching activities": "enhanced learning opportunities and a stimulating environment"
    }
  }
}`)

export const HeritageCollege = JSON.parse(`{
  "VisualArts": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Art and Theory": "Colour Theory (510-C10-HR), Drawing I (510-D10-HR), Drawing II (510-D20-HR), Drawing III (510-D30-HR), Sculpture I (510-B10-HR), Sculpture II (510-B20-HR), Sculpture III (510-B30-HR), Painting I (510-G10-HR), Painting II (510-G20-HR), Painting III (510-G30-HR), Photography I (510-F10-HR), Photography II (510-F20-HR), Studio I (510-H10-HR), Studio II (510-H20-HR), Printmaking (510-E10-HR)",
      "Art history": "History of Art I (520-A10-HR), History of Art II (520-A20-HR), Quebec Art (520-A30-HR)"
    }
  },
  "LiberalArts": {
    "Prerequisites": "Secondary V math TS/SN (506)",
    "See Heritage College's website for the program grid of Liberal Arts with math": "",
    "Program Grid": {
      "History, Religion and Classics": "Ancient World (332-115-RE), Religion: Judaism, Christianity and Islam (370-333-RE), Post-Classical History (330-101-RE), Thematic Studies in the History of Art (520-903-RE)",
      "Philosophy and Literature": "Ancient Philosophy (340-910-RE), Epic Poetry (603-H06-HR), Modern Philosophy (340-912-RE)",
      "Science and Methodology": "Science: History and Methodology (360-125-RE), Principles of Math and Logic (360-124-RE)",
      "Choice 1, one of": "History of Art I (520-A10-HR), College Spanish I (607-A01-HR), Language and Analysis of Film (530-A01-HR)",
      "Choice 2, choose two of the following": "History of Art II (520-A20-HR), College Spanish II (607-A02-HR), Cinema Option course, English Option course",
      "Choice 3, choose two of the following": "Drawing (510-H01-HR), Language and Analysis of Film (530-A01-HR), Theatre Workshop (603-H04-HR), Introduction to Psychology (350-102-RE)",
      "Choice 4, one of": "Sculpture (510-H02-HR), Cinema Option course, English Option course"
    }
  },
  "Science": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "See Heritage College's website for the program grid of Science with Pre-Calculus": "",
    "Program Grid": {
      "Math": "Calculus I (201-NYA-05), Calculus II (201-NYB-05), Linear Algebra (201-NYC-05)",
      "Physics": "Mechanics (203-NYA-05); Waves, Optics and Modern Physics (203-NYC-05); Electricity and Magnetism (203-NYB-05)",
      "Chemistry": "General Chemistry (202-NYA-05), Chemistry of Solutions (202-NYB-05), Organic Chemistry I (202-CWC-05)",
      "Biology": "General Biology (101-NYA-05)",
      "Choose two of the following": "General Biology II (101-CWB-05), Calculus III (201-CWE-05), Organic Chemistry II (202-CWD-05)"
    }
  },
  "GeneralSocialScience": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Compulsory": "Introduction to Psychology (350-102-RE), Methods I (360-300-RE), Methods II (300-A01-HR), Western Civilization (330-910-RE), Introduction to Sociology (387-101-HR), Abnormal Psychology (350-203-HR), Macroeconomics (383-920-RE), Developmental Psychology (350-402-HR), Integration of Knowledge in the Social Sciences (300-A02-HR)",
      "Choice 1, choose two of the following": "Cultural Anthropology (381-101-HR), Introduction to Political Science (385-102-HR), Environmental Geography (320-120-HR)",
      "Choice 2, one of": "Social Psychology (350-302-HR), Selected Topics in Psychology (350-304-HR), Deviance and Social Control (387-301-HR)",
      "Choice 3, choose two of the following": "Selected Topics in Anthropology (381-201-HR); Sex, Race, Class — Diversity and Inequality (387-203-HR); Modern Political Ideologies (385-203-HR), Twentieth Century History (330-201-HR)",
      "Choice 4, one of": "International Politics (385-301-HR), The Human Body (101-901-RE), Media and Popular Culture (387-302-HR), Complementary course"
    }
  },
  "SocialSciencewithMath": {
    "Prerequisites": "Secondary V math TS/SN (506)",
    "Program Grid": {
      "Math": "Differential and Integral Calculus I (201-103-RE), Differential and Integral Calculus II (201-203-RE), Linear Algebra (201-105-RE)",
      "Compulsory": "Western Civilization (330-910-RE), Introduction to Sociology (387-101-HR), Introduction to Psychology (350-102-RE), Methods I (360-300-RE), Methods II (300-A01-HR), Abnormal Psychology (350-230-HR), Macroeconomics (383-920-RE)",
      "Choice 1, one of": "Cultural Anthropology (381-101-HR), Introduction to Political Science (385-102-HR), Environmental Geography (320-102-HR)",
      "Choice 2, one of": "Social Psychology (350-302-HR), Selected Topics in Psychology (350-304-HR), Deviance and Social Control (387-301-HR)",
      "Choice 3, one of": "Selected Topics in Anthropology (381-201-HR); Sex, Race, Class — Diversity and Inequality (387-203-HR); Modern Political Ideologies (385-203-HR), Twentieth Century History (330-201-HR)",
      "Choice 4, one of": "Developmental Psychology (350-402-HR), International Politics (385-301-HR), The Human Body (101-901-RE), Media and Popular Culture (387-302-HR), Complementary course"
    }
  },
  "Commerce": {
    "Prerequisites": "Secondary V math TS/SN (506)",
    "Program Grid": {
      "Math": "Differential and Integral Calculus I (201-103-RE), Differential and Integral Calculus II (201-203-RE), Linear Algebra (201-105-RE)",
      "Compulsory": "Introduction to Psychology (350-102-RE), Methods I (360-300-RE), Methods II (300-A01-HR), Macroeconomics (383-920-RE), Financial Accounting (401-A02-HR), Western Civilization (330-910-RE), Marketing (401-A03-HR), Microeconomics (383-301-HR), Human Resource Management (401-A01-HR)"
    }
  }
}`)

export const JohnAbbottCollege = JSON.parse(`{
  "ArtsandSciences": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Program Grid": {
      "Math": "Differential Calculus (201-AS1-AB), Integral Calculus (201-AS2-AB), Statistics (201-AS3-AB), Linear Algebra (201-AS4-AB)",
      "Physics": "Mechanics (203-NYA-05), Electricity and Magnetism (203-NYB-05); Waves, Optics, and Modern Physics (203-NYC-05)",
      "Chemistry": "Chemistry I (202-AS1-AB)",
      "Biology": "General Biology I (101-NYA-05)",
      "Art and Art history": "Art History I (520-ASA-AB), Art I (510-ASA-AB)",
      "Social Science": "History of Western Civilization (330-910-AB), Psychology I (350-ASA-AB), Introduction to Sociology (387-100-AB), Political Economy (385-AS1-AB)",
      "For students in 5-Science, two of the following science courses": "General Biology II (101-DCN-05), Organic Chemistry I (202-DCP-05), Electricity and Magnetism (203-NYB-05); Waves, Optics, and Modern Physics (203-NYC-05), and choice of: Optional Social Science, Visual Arts or Creative Arts course",
      "For students in 6-Science, three of the following science courses": "General Biology II (101-DCN-05), Organic Chemistry I (202-DCP-05), Electricity and Magnetism (203-NYB-05); Waves, Optics, and Modern Physics (203-NYC-05)"
    }
  },
  "Media": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Compulsory": "Universe of the Arts 1 (502-UNA-AB), Universe of the Arts 2 (502-UNB-AB), Universe of the Arts 3 (502-UNC-AB)",
      "8 Media Option elective courses from the following": "Film Studies: Film as Art; Film Studies: Genres, Directors, National Cinema; Film Studies: Canadian Cinema; Film Studies: World Cinema; Film Studies: Science Fiction; Film Studies: World Animation; Media Studies: Visual Culture and Communications; Special Topics in Media, Animation 1, Animation 2, Digital Animation 1, Digital Animation 2, Darkroom Photography 1, Darkroom Photography 2, Digital Photography 1, Digital Photography 2, Filmmaking 1, Filmmaking 2, Digital Media 1, Digital Media 2",
      "4 ALC electives": ""
    }
  },
  "Literature": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Compulsory": "Universe of the Arts 1 (502-UNA-AB), Universe of the Arts 2 (502-UNB-AB), Universe of the Arts 3 (502-UNC-AB)",
      "8 Literature Option elective courses from the following": "The Poem, the Novel, The Play, Special Topics in English Literature, Creative Writing 1, Creative Writing 2, Creative Writing C, Journalism 1, Introduction to French Literature I, Special Topics in French Literature, Culture & Construction of Reality, Philosophy of Art and Aesthetics, Philosophy of Communication, World Religions; Writing for News, Features and Broadcast Media; Screenwriting, Special Topics in Hispanic Literature, Special Topics in Italian Literature, Special Topics in German Literature",
      "4 ALC electives": ""
    }
  },
  "Languages": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Compulsory": "Universe of the Arts 1 (502-UNA-AB), Universe of the Arts 2 (502-UNB-AB), Universe of the Arts 3 (502-UNC-AB)",
      "8 Languages Option elective courses from the following": "Spanish 1, Spanish 2, Spanish 3, Spanish 4, Italian 1, Italian 2, Italian 3, Italian 4, German 1, German 2, German 3, German 4, Mandarin 1, Mandarin 2, Special Topics in Hispanic Culture, Special Topics in Italian Culture, Special Topics in German Culture, Special Topics in Chinese Culture, Special Topics in Foreign Languages, Comparative Linguistics, L’Art à travers les époques, Langues du monde, Special Topics in Hispanic Literature, Special Topics in Italian Literature, Special Topics in German Literature",
      "4 ALC electives": ""
    }
  },
  "Theatre": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Compulsory": "Universe of the Arts 1 (502-UNA-AB), Universe of the Arts 2 (502-UNB-AB), Universe of the Arts 3 (502-UNC-AB)",
      "8 Theatre Option elective courses (Theatre Workshop courses) from the following": "Introduction to Theatre 1, Introduction to Theatre 2, Theatre Workshop 1, Theatre Workshop 2, Theatre Workshop 3, Theatre Production 1, Theatre Production 2, Theatre Production 3",
      "4 ALC electives": ""
    }
  },
  "MultidisciplinaryALC": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Compulsory": "Universe of the Arts 1 (502-UNA-AB), Universe of the Arts 2 (502-UNB-AB), Universe of the Arts 3 (502-UNC-AB)",
      "8 Multidisciplinary Option elective courses from the following": "Painting and Drawing I; Art History: Modern to Contemporary; Radio Production 1, Radio Production 2, Video Production 1, Video Production 2; Writing for News, Features and Broadcast Media; Screenwriting",
      "4 ALC electives": ""
    }
  },
  "VisualArts": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Portfolio: sample artwork and descriptive letter": "",
    "Program Grid": {
      "Art": "Drawing I (510-DR1-AB), Drawing II (510-DR2-AB), Drawing III (510-DR3-AB), Drawing IV (510-DR4-AB), Painting I (510-PT1-AB), Painting II (510-PT2-AB), Painting III (510-PT3-AB), Painting IV (510-PT4-AB), Sculpture I (510-SC1-AB), Sculpture II (510-SC2-AB), Sculpture III (510-SC3-AB), Sculpture IV (510-SC4-AB), Print Media I (510-PM1-AB), Print Media II (510-PM2-AB), Print Media III (510-PM3-AB), Fundamentals of Design (510-DS1-AB), Introduction to Photography (510/585-PH-AB)",
      "Art history": "Art History I — Ancient to Medieval (520-AH1-AB), Art History II — Renaissance and Beyond (520-AH2-AB), Art History III — Understanding Contemporary Art (520-AH3-AB)"
    }
  },
  "LiberalArts": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Secondary V Math TS/SN (506) is recommended": "",
    "Program Grid": {
      "History and Culture": "Introduction to the Ancient World (332-100-AB), Peoples and Their Myths (370-121-AB), Post-Classical History (330-104-AB), History of Art: Thematic Studies & Styles (520-903-AB), Modern History: 20th Century (330-252-AB)",
      "Philosophy": "Ancient Philosophy (340-910-AB), Modern Philosophy (340-912-AB)",
      "Methodology and Science": "Principles of Mathematics & Logic (360-124-AB), Science: History & Methodology (360-128-AB)",
      "2 Concentration courses": "",
      "4 courses of choice": "",
      "1 additional course": ""
    }
  },
  "Science": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Program Grid": {
      "Math": "Calculus I (201-NYA-05), Calculus II (201-NYB-05), Linear Algebra I (201-NYC-05)",
      "Physics": "Mechanics (203-NYA-05); Waves, Optics and Modern Physics (203-NYC-05); Electricity and Magnetism (203-NYB-05)",
      "Chemistry": "General Chemistry (202-NYA-05), Chemistry of Solutions (202-NYB-05)",
      "Biology": "General Biology I (101-NYA-05)",
      "3 Science Option courses out of the following": "General Biology II, Human Anatomy & Physiology, Biological Marine Science, Human Genetics, Calculus III, Linear Algebra II, Statistical Methods, Organic Chemistry I, Organic Chemistry II, Chemistry of the Environment, Forensic Chemistry, Environmental Sciences, Physics for Engineers, Astrophysics, Astronomy, Environmental Sciences; Earth, Moon and Planets — Planetary Geology; Understanding Planet Earth, Introduction to Oceanography, Earth System Science, Independent Research Project, Field Research in Environmental Science"
    }
  },
  "HonoursScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Cutoffs": "85% overall average, 80% minimum in each science and math prerequisite",
    "Letter of intent": "",
    "Letter of recommendation from a math or science teacher": "",
    "Must apply to both SRAM and to the Honours Science coordinator (the latter involves a brief online application form on the Honours Science webpage)": "",
    "Program Grid": {
      "See regular Science for the program grid": ""
    }
  },
  "ScienceandSocialScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "3-year pre-university Double DEC": "",
    "Program Grid": {
      "Math": "Calculus I (201-NYA-05), Calculus II (201-NYB-05), Linear Algebra I (201-NYC-05)",
      "Physics": "Mechanics (203-NYA-05); Waves, Optics and Modern Physics (203-NYC-05); Electricity and Magnetism (203-NYB-05)",
      "Chemistry": "General Chemistry (202-NYA-05), Chemistry of Solutions (202-NYB-05)",
      "Biology": "General Biology I (101-NYA-05)",
      "Social Science": "History of Western Civilization (330-910-AB), Introduction to Psychology (350-102-AB), Macroeconomics (383-920-AB), Quantitative Methods in Social Science (360-300-RE), Social Science Research Methods (300-300-AB)",
      "3 Science Option courses from the following disciplines": "Biology, Chemistry, Earth/Ocean Science, Mathematics, Physics",
      "2 Level 1 and 3 Level 2 Social Science Option courses from the following disciplines": "Anthropology, Business, Classics, Economics, Geography, History, Philosophy, Political Science, Psychology, Religion, Sociology"
    }
  },
  "GeneralSocialScience": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Compulsory": "Western Civilization (330-910-AB), Introduction to Psychology (350-102-AB), Macroeconomics (383-920-AB), Quantitative Methods in Social Sciences (360-300-RE), Social Science Research Methods (300-300-AB)",
      "3 Level 1 Social Science courses from the following": "Introduction to Geography, Introduction to Classics, Philosophical Questions, Religions of the World, Introduction to Anthropology, Introduction to Political Science, Introduction to Sociology, Introduction to Business, Calculus I",
      "6 Level 2 Social Science courses from the following disciplines": "Anthropology, Business Administration, Geography, Economics, History, Mathematics, Philosophy, Political Science, Psychology, Religion, Sociology",
      "Maximum of 4 courses in any one discipline": ""
    }
  },
  "SocialSciencewithMathematics": {
    "Prerequisites": "Secondary V Math TS/SN (506)",
    "Math": "Calculus I (201-103-RE), Calculus II (201-203-RE), Linear Algebra (201-105-RE)",
    "Compulsory": "Western Civilization (330-910-AB), Introduction to Psychology (350-102-AB), Macroeconomics (383-920-AB), Quantitative Methods in Social Sciences (360-300-RE), Social Science Research Methods (300-300-AB)",
    "2 Level 1 Social Science courses from the following": "Introduction to Geography, Introduction to Classics, Philosophical Questions, Religions of the World, Introduction to Anthropology, Introduction to Political Science, Introduction to Sociology, Introduction to Business, Calculus I",
    "3 Level 2 Social Science courses from the following disciplines": "Anthropology, Business Administration, Geography, Economics, History, Mathematics, Philosophy, Political Science, Psychology, Religion, Sociology",
    "Maximum of 4 courses in any one discipline": ""
  },
  "Commerce": {
    "Prerequisites": "Secondary V Math TS/SN (506)",
    "Program Grid": {
      "Math": "Calculus I (201-103-RE), Calculus II (201-203-RE), Linear Algebra (201-105-RE)",
      "Business and Economics": "Introduction to Business (401-100-AB), Macroeconomics (383-920-AB), Microeconomics (383-250-AB)",
      "Compulsory": "Western Civilization (330-910-AB), Introduction to Psychology (350-102-AB), Quantitative Methods in Social Sciences (360-300-RE), Social Science Research Methods (300-300-AB)",
      "One Level 1 Social Science course": "",
      "One Level 2 Business course": "",
      "One Level 2 Social Science course": "",
      "Maximum of 4 courses in any one discipline": ""
    }
  },
  "Psychology": {
    "Students must complete two semesters (one year) of Social Science before requesting a change of program to this Psychology profile": "",
    "Prerequisites": "Quantitative Methods in Social Sciences (360-300-RE)",
    "Program Grid": {
      "Compulsory": "Western Civilization (330-910-AB), Introduction to Psychology (350-102-AB), Macroeconomics (383-920-AB), Quantitative Methods in Social Sciences (360-300-RE), Social Science Research Methods (300-300-AB), Advanced Quantitative Methods (201-301-RE), Human Biology (101-901-RE)",
      "3 Level 1 Social Science courses": "",
      "Two Psychology Level 2 courses": "",
      "Two Level 2 Social Science courses": ""
    }
  },
  "HonoursSocialScience": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Cutoffs": "80% overall average",
    "Letter of intent": "",
    "Letter of recommendation from a teacher": "",
    "Must apply to both SRAM and the Honours Social Science coordinator (the latter involves a brief online application on the Honours Social Science webpage)": "",
    "Program Grid": {
      "See regular Social Science profiles (General Social Science, Social Science with Mathematics, Commerce, Psychology) for program grids": ""
    }
  }
}`)

export const MarianopolisCollege = JSON.parse(`{
  "ArtsandSciences": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Cutoffs": "85% overall average, 83% minimum in Secondary IV and V Math TS/SN, 85% science/math average",
    "Letter of intent": "",
    "Choice of Main Grid or Arts Grid (semester 4)": "",
    "Program Grid": {
      "Art": "Introduction to Studio Art (510-100-MS), CHOICE OF Thematic Studies in History of Art (520-903-MS) OR 16th to 19th-Century Art (520-120-MS)",
      "Math": "Differential Calculus (201-701-MS), Integral Calculus (201-702-MS), Linear Algebra I (201-703-MS), Probability and Statistics (201-704-MS)",
      "Science": "General Biology I (101-701-MS), Chemistry I (202-701-MS), Mechanics (201-701-MS)",
      "Social Science": "International Politics and Economics (383-701-MS), Western Civilization (330-701-MS), Psychology of Human Behaviour (350-701-MS), Dynamics of Social Change (387-701-MS)",
      "3 electives": ""
    }
  },
  "ArtsLiteratureandCommunication": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Cutoffs": "75% overall average",
    "Letter of intent": "",
    "Program Grid": {
      "Arts and Literature": "Perspectives in Arts and Literature I (502-APA-MS), Perspectives in Arts and Literature II (502-APB-MS), Perspectives in Contemporary Arts and Literature (502-APC-MS)",
      "22 credits from elective courses": "3 Explorations courses, 2 Techniques courses, 3 Critique courses, 3 Creation courses OR 2 Creation and 1 Language",
      "Elective disciplines include": "Art History, Cinema, Communications, Computer Science, English Literature, Fine Arts, French, German, Italian, Mathematics, Music (general), Philosophy, Religious Studies, Spanish, Theatre"
    }
  },
  "LiberalArts": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Cutoffs": "80% overall average",
    "Letter of intent": "",
    "Choice of Main Grid or Mathematics Grid": "",
    "Program Grid": {
      "Classics/History": "Ancient World (332-115-MS), Post-Classical History I (330-101-MS), Post-Classical History II: The 19th and 20th Centuries (330-102-MS)",
      "Philosophy": "Ancient Philosophy (340-910-MS), Modern Philosophy (340-912-MS)",
      "Art history/Religious studies": "Thematic Studies in History of Art (520-903-MS); Judaism, Christianity and Islam (370-121-MS)",
      "Methodology": "Methodology: Liberal Arts (300-302-MS); Math, Logic and Critical Thinking (360-124-MS), Science: History and Method (360-125-MS)",
      "12 2/3 to 14 credits from elective courses": "2 Explorations courses OR Calculus I, 2 Application courses, 3 Issue courses",
      "Elective disciplines": "Administration (Business), Anthropology, Art History, Biology, Cinema, Communications (filmmaking), Creative Writing, Economics, English Literature, Fine Arts, French Literature, Geography, German, History, Italian, Mathematics, Music (general), Philosophy, Political Science, Psychology, Religious Studies, Sociology, Spanish, Theatre"
    }
  },
  "Music": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Cutoffs": "70% overall average",
    "Pre-auditions, auditions, entrance tests": "",
    "Program Grid": {
      "Music (instruments)": "Principal Instrument I (551-121-MS), Principal Instrument II (551-221-MS), Principal Instrument III (551-321-MS), Principal Instrument IV (551-421-MS), Large Ensemble and Complementary Instrument I (551-144-MS), Large Ensemble and Complementary Instrument II (551-244-MS), Small Ensemble and Complementary Instrument III (551-443-MS)",
      "Music (theory)": "Music Literature I (551-131-MS), Music Literature II (551-231-MS), Music Literature III (551-331-MS), Music Literature IV (551-431-MS), Ear Training and Theory I (551-156-MS), Ear Training and Theory II (551-256-MS), Ear Training and Theory III (551-356-MS), Ear Training and Theory IV (551-456-MS), Music Technology (551-300-MS)"
    }
  },
  "MusicandALC": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Cutoffs": "75% overall average",
    "Pre-auditions, auditions, entrance tests": "",
    "3-year pre-university Double DEC": "",
    "Program Grid": {
      "Arts and Literature": "Perspectives in Arts and Literature I (502-APA-MS), Perspectives in Arts and Literature II (502-APB-MS), Perspectives in Contemporary Arts and Literature (502-APC-MS)",
      "ALC electives": "2 Explorations courses, 2 Techniques courses, 2 Critique courses, 2 Creation courses, 1 Creative Thinking course",
      "Music (instruments)": "Principal Instrument I (551-121-MS), Principal Instrument II (551-221-MS), Principal Instrument III (551-321-MS), Principal Instrument IV (551-421-MS), Large Ensemble and Complementary Instrument I (551-144-MS), Large Ensemble and Complementary Instrument II (551-244-MS), Small Ensemble and Complementary Instrument III (551-443-MS)",
      "Music (theory)": "Music Literature I (551-131-MS), Music Literature II (551-231-MS), Music Literature III (551-331-MS), Music Literature IV (551-431-MS), Ear Training and Theory I (551-156-MS), Ear Training and Theory II (551-256-MS), Ear Training and Theory III (551-356-MS), Ear Training and Theory IV (551-456-MS), Music Technology (551-300-MS)",
      "Two comprehensive assessments": ""
    }
  },
  "MusicandScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Cutoffs": "83% overall average, 75% minimum in Secondary IV and V Math TS/SN, 84% science/math average",
    "Pre-auditions, auditions, entrance tests": "",
    "3-year pre-university Double DEC": "",
    "Program Grid": {
      "Math": "Calculus I (201-NYA-05), Calculus II (201-NYB-05), Linear Algebra (201-NYC-05)",
      "Physics": "Mechanics (203-NYA-05); Waves, Optics and Modern Physics (203-NYC-05); Electricity and Magnetism (203-NYB-05)",
      "Chemistry": "General Chemistry (202-NYA-05), General Chemistry II (202-NYB-05)",
      "Biology": "General Biology (101-NYA-05)",
      "Health Science/Music": "Organic Chemistry I (202-LCU-05), General Biology II (101-LCU-05)",
      "Music (instruments)": "Principal Instrument I (551-121-MS), Principal Instrument II (551-221-MS), Principal Instrument III (551-321-MS), Principal Instrument IV (551-421-MS), Large Ensemble and Complementary Instrument I (551-144-MS), Large Ensemble and Complementary Instrument II (551-244-MS), Small Ensemble and Complementary Instrument III (551-443-MS)",
      "Music (theory)": "Music Literature I (551-131-MS), Music Literature II (551-231-MS), Music Literature III (551-331-MS), Music Literature IV (551-431-MS), Ear Training and Theory I (551-156-MS), Ear Training and Theory II (551-256-MS), Ear Training and Theory III (551-356-MS), Ear Training and Theory IV (551-456-MS), Music Technology (551-300-MS)",
      "Two comprehensive assessments": ""
    }
  },
  "MusicandSocialScience": {
    "Prerequisites": "general CEGEP entrance requirements (Music/General Social Science), Music/Social Science Two-Math: Secondary V Math TS/SN (506)",
    "Cutoffs": "75% overall average (Music/General Social Science); Music/Social Science Two-Math: 75% minimum in Secondary IV and V Math TS/SN, 75% overall average",
    "Pre-auditions, auditions, entrance tests": "",
    "3-year pre-university Double DEC": "",
    "Program Grid": {
      "Social Science": "Western Civilization (330-901-MS), Introduction to Psychology (350-102-MS), Macroeconomics (383-920-MS), Quantitative Methods(360-300-MS) , Research Methods (300-300-MS)",
      "Music/General Social Science": "3 introductory level courses, 6 upper level courses",
      "Music/Social Science Two-Math": "Calculus I, Linear Algebra, 2 introductory level courses, 4 upper level courses",
      "Music (instruments)": "Principal Instrument I (551-121-MS), Principal Instrument II (551-221-MS), Principal Instrument III (551-321-MS), Principal Instrument IV (551-421-MS), Large Ensemble and Complementary Instrument I (551-144-MS), Large Ensemble and Complementary Instrument II (551-244-MS), Small Ensemble and Complementary Instrument III (551-443-MS)",
      "Music (theory)": "Music Literature I (551-131-MS), Music Literature II (551-231-MS), Music Literature III (551-331-MS), Music Literature IV (551-431-MS), Ear Training and Theory I (551-156-MS), Ear Training and Theory II (551-256-MS), Ear Training and Theory III (551-356-MS), Ear Training and Theory IV (551-456-MS), Music Technology (551-300-MS)",
      "Two comprehensive assessments": ""
    }
  },
  "HealthScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Cutoffs": "83% overall average, 75% minimum in Secondary IV and V Math TS/SN, 85% science/math average",
    "Program Grid": {
      "Math": "Differential Calculus (201-NYA-05), Integral Calculus (201-NYB-05), Linear Algebra (201-NYC-05), Programming in Science (new in Fall 2024)",
      "Physics": "Mechanics (203-NYA-05); Waves, Optics and Modern Physics (203-NYC-05); Electricity and Magnetism (203-NYB-05)",
      "Chemistry": "General Chemistry (202-NYA-05), Chemistry of Solutions (202-NYB-05), Organic Chemistry (202-LCU-05)",
      "Biology": "Cellular Biology (101-NYA-05), Ecology & Evolution, Human Anatomy & Physiology"
    }
  },
  "PureandAppliedScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Cutoffs": "83% overall average, 75% minimum in Secondary IV and V Math TS/SN, 85% science/math average",
    "Program Grid": {
      "Math": "Differential Calculus (201-NYA-05), Integral Calculus (201-NYB-05), Linear Algebra (201-NYC-05), Programming in Science (new in Fall 2024)",
      "Physics": "Mechanics (203-NYA-05); Waves, Optics and Modern Physics (203-NYC-05); Electricity and Magnetism (203-NYB-05)",
      "Chemistry": "General Chemistry (202-NYA-05), Chemistry of Solutions (202-NYB-05)",
      "Biology": "Cellular Biology (101-NYA-05)",
      "2 elective courses": "",
      "Elective disciplines: Biology, Chemistry, Computer Science, Mathematics, Physics": ""
    }
  },
  "HonoursScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Cutoffs": "75% minimum in Secondary IV and V Math TS/SN, 83% overall average, 90% science/math average",
    "Letter of intent": "",
    "Choice of Honours Health Science or Honours Pure and Applied Science": "",
    "Program Grid": {
      "Math": "Differential Calculus (201-NYA-05), Integral Calculus (201-NYB-05), Linear Algebra (201-NYC-05), Programming in Science (new in Fall 2024)",
      "Physics": "Mechanics (203-NYA-05); Waves, Optics and Modern Physics (203-NYC-05); Electricity and Magnetism (203-NYB-05)",
      "Chemistry": "General Chemistry (202-NYA-05), Chemistry of Solutions (202-NYB-05)",
      "Biology": "Cellular Biology (101-NYA-05)",
      "Honours Health Science": "Organic Chemistry (202-LCU-05), Ecology & Evolution, Human Anatomy & Physiology",
      "No electives (Health) OR 2 electives (Pure and Applied)": "",
      "3 of 12 required science courses must be Enriched courses": ""
    }
  },
  "CoreSocialScience": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Cutoffs": "75% overall average",
    "Program Grid": {
      "Compulsory": "Intellectual Methods in Social Science, History of the Modern World, Introduction to Psychology, Human Culture and Diversity, Qualitative Research in Social Science, Macroeconomics; People, Places and Environments; Individual and Society, Quantitative Analysis in Social Science, Introduction to Political Science, Multidisciplinary Thematic Course in Social Science, Integrative Project in Social Science",
      "4 Upper-Level courses, choice of the following disciplines": "Administration, Anthropology, Applied Statistics (semester 4, pending result in Quantitative Analysis), Economics, Geography, History, Mathematics, Philosophy, Political Science, Psychology, Religious Studies, Sociology"
    }
  },
  "CoreSocialSciencewithmath": {
    "Prerequisites": "Secondary V Math TS/SN (506)",
    "Cutoffs": "75% minimum in Secondary IV and V Math TS/SN, 75% overall average",
    "Program Grid": {
      "Compulsory": "Intellectual Methods in Social Science, History of the Modern World, Differential Calculus in Social Science, Human Culture and Diversity, Qualitative Research in Social Science, Macroeconomics; People, Places and Environments; Quantitative Analysis in Social Science, Introduction to Political Science, Multidisciplinary Thematic Course in Social Science, Linear Algebra in Social Science, Integrative Project in Social Science",
      "2 Upper-Level courses, choice of the following disciplines": "Administration, Anthropology, Economics, Geography, History, Mathematics, Philosophy, Political Science, Psychology, Religious Studies, Sociology"
    }
  },
  "Commerce": {
    "Prerequisites": "Secondary V Math TS/SN (506)",
    "Cutoffs": "75% minimum in Secondary IV and V Math TS/SN, 75% overall average",
    "Program Grid": {
      "Compulsory": "Intellectual Methods in Social Science, Macroeconomics, Fundamentals of Business, Differential Calculus in Social Science (Calculus 1), Quantitative Analysis in Social Science, History of the Modern World, Introduction to Psychology, Integral Calculus in Social Science (Calculus 2), Quantitative Research in Social Science, Multidisciplinary Thematic Course in Social Science, Linear Algebra in Social Science, Integrative Project in Social Science",
      "1 Intro-Level course, choice from": "Human Culture and Diversity (Anthropology); People, Places and Environment (Geography); Introduction to Political Science, Individual and Society (Sociology)",
      "2 Upper-Level courses, choice of discipline, for example": "Accounting, Administration, Anthropology, Business, Economics, Finance, Geography, History, Law, Marketing, Philosophy, Political Science, Psychology, Religious Studies, Sociology"
    }
  },
  "LawSocietyandJustice": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Cutoffs": "75% overall average",
    "Program Grid": {
      "Compulsory": "Intellectual Methods in Social Science, History of the Modern World, Introduction to Political Science, Qualitative Research in Social Science, Macroeconomics, Quantitative Analysis in Social Science, Introduction to Psychology, Multidisciplinary Thematic Course in Social Science, Integrative Project in Social Science",
      "2 Intro-Level courses, choices from": "Fundamentals of Business, Human Culture and Diversity (Anthropology); People, Places and Environment (Geography); Individual and Society (Sociology), Introduction to Religious Studies, The Just Society (Philosophy)",
      "5 Upper-Level courses, choice of discipline, for example": "Administration, Anthropology, Applied Statistics (semester 4, pending result in Quantitative Analysis), Business, Economics, Geography, History, Philosophy, Political Science, Psychology, Religious Studies, Sociology"
    }
  },
  "LawSocietyandJusticewithmath": {
    "Prerequisites": "Secondary V Math TS/SN (506)",
    "Cutoffs": "75% minimum in Secondary IV and V Math TS/SN, 75% overall average",
    "Program Grid": {
      "Compulsory": "Intellectual Methods in Social Science, History of the Modern World, Introduction to Political Science, Differential Calculus in Social Science, Qualitative Research in Social Science, Macroeconomics, Introduction to Psychology, Quantitative Analysis in Social Science, Multidisciplinary Thematic Course in Social Science, Linear Algebra in Social Science, Integrative Project in Social Science",
      "1 Intro-Level course, choice from": "Fundamentals of Business, Human Culture and Diversity (Anthropology); People, Places and Environment (Geography); Individual and Society (Sociology), Introduction to Religious Studies, The Just Society (Philosophy)",
      "4 Upper-Level courses, choice of discipline, for example": "Administration, Anthropology, Business, Economics, Geography, History, Philosophy, Political Science, Psychology, Religious Studies, Sociology"
    }
  },
  "HumanBehaviour": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Cutoffs": "75% overall average",
    "Program Grid": {
      "Compulsory": "Intellectual Methods in Social Science, Introduction to Psychology, Individual and Society, Quantitative Research in Social Science, Macroeconomics, Quantitative Analysis in Social Science, History of the Modern World, Multidisciplinary Thematic Course in Social Science, Human Biology (recommended) OR Upper-Level course, Integrative Project in Social Science, Applied Statistics (recommended) OR Upper-Level course",
      "2 Intro-Level courses, choices from": "Human Culture and Diversity (Anthropology); People, Places and Environments (Geography); Introduction to Political Science, Individual and Society (Sociology), Introduction to Religious Studies, The Just Society (Philosophy)",
      "1 Upper-Level course in Psychology, choice of the following": "Psychological Disorders; Developmental Psychology; Social Psychology; Business Psychology; Forensic Psychology; Psychology of Sexuality",
      "2 Upper-Level courses in Psychology and Social Science, choice of disciplines, for example": "Anthropology, Economics, Geography, History, Law, Political Science, Psychology, Sociology"
    }
  }
}`)

export const VanierCollege = JSON.parse(`{
  "CommunicationsMediaandStudioArts": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Program Grid": {
      "Art and Culture": "Visual Literacy and Culture (502-120-VA), Cultural Currents I (502-131-VA), Cultural Currents II (502-132-VA), Portfolio Essentials (502-211-VA)",
      "4 Techniques concentration courses": "",
      "2 Creation concentration courses": "",
      "2 Art/Media Studies: Modes of Analysis concentration courses": "",
      "1 Art/Media Studies: National Cultural Issues concentration course": ""
    }
  },
  "LanguagesandCultures": {
    "Prerequisites": "general CEGEP entrance requirements",
    "When applying through SRAM, see Arts, Literature and Communication: Option: Multidisciplinary Particularity: Languages and Cultures": "",
    "Program Grid": {
      "Culture and Literature": "Cultural Currents I (502-131-VA), Cultural Currents II (502-132-VA), Myths, Legends and Fairy Tales (502-113-VA), Foreign Cultures in Cinema (502-114-VA)",
      "Languages/Linguistics": "Theory of Translation (502-303-VA), Story of Language (502-115-VA)",
      "Language": "Language A Level I, Language A Level II, Language A Level III, Language A Level IV, Language A English Translation, Language B Level I, Language B Level II"
    }
  },
  "LiberalArts": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Letter of intent": "",
    "Program Grid": {
      "This is the Liberal Arts Basic Profile program grid. To see program grids for the Mathematics and/or Psychology profile, visit Vanier College's website.": "",
      "History": "The Ancient World (332-101-VA), Medieval and Early Modern History (332-201-VA), Modern History (332-301-VA)",
      "Art history": "Prehistory to Realism (520-913-VA)",
      "Philosophy": "Ancient Philosophy (340-911-VA), Modern Philosophy (340-914-VA), Issues in Philosophy (340-301-VA)",
      "Methodology and Science": "Methodology in the Liberal Arts (300-312-VA), Principles of Math and Logic (360-134-VA), History and Methodology (360-135-VA)",
      "Religion": "People and Their Myths (370-121-VA)",
      "5 Concentration courses": "In categories A, B, C, D"
    }
  },
  "Music": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Auditions and entrance exams": "",
    "Secondary V Music (502) is recommended": "",
    "Program Grid": {
      "Music (instruments)": "Principal Instrument and Lab I (551-PR1-VA), Principal Instrument and Lab II (551-PR2-VA), Principal Instrument and Lab III (551-PR3-VA), Principal Instrument and Lab IV (551-PR4-VA), Large Ensemble I (551-LE1-VA), Large Ensemble II (551-LE2-VA), Complementary Piano Technique I (551-PT1-VA), Complementary Piano Technique II (551-PT2-VA)",
      "Music (theory)": "Ear Training I (551-105-VA), Ear Training II (551-205-VA), Ear Training III (551-305-VA), Ear Training IV (551-405-VA), History I (551-111-VA), History II (551-211-VA), History III (551-311-VA), History IV (551-411-VA), Theory I (551-TH1-VA), Theory II (551-TH2-VA), Theory III (551-TH3-VA), Theory IV (551-TH4-VA)",
      "Choice 1": "Small Ensemble I (551-SE1-VA) + Small Ensemble II (551-SE2-VA) + Complementary Elective I (551-CE1-VA) or Second Instrument (551-SC3-VA); OR Large Ensemble III (551-LE3-VA)",
      "Choice 2": "Complementary Elective II (551-CE2-VA) + Small Ensemble III (551-SE3-VA); OR Large Ensemble IV (551-LE4-VA)"
    }
  },
  "LanguagesandCulturesandMusic": {
    "Prerequisites": "general CEGEP entrance requirements",
    "Auditions and entrance exams": "",
    "Secondary V Music (502) is recommended": "",
    "3-year pre-university Double DEC": "",
    "When applying through SRAM, see Arts, Literature and Communication & Music": "",
    "Program Grid": {
      "Culture and Literature": "Cultural Currents I (502-131-VA), Cultural Currents II (502-132-VA), Myths, Legends and Fairy Tales (502-113-VA), Foreign Cultures in Cinema (502-114-VA)",
      "Languages/Linguistics":"Theory of Translation (502-303-VA), Story of Language (502-115-VA)",
      "Language": "Language A Level I, Language A Level II, Language A Level III, Language A Level IV, Language A English Translation, Language B Level I, Language B Level II",
      "Music (instruments)": "Principal Instrument and Lab I (551-PR1-VA), Principal Instrument and Lab II (551-PR2-VA), Principal Instrument and Lab III (551-PR3-VA), Principal Instrument and Lab IV (551-PR4-VA), Large Ensemble I (551-LE1-VA), Large Ensemble II (551-LE2-VA), Complementary Piano Technique I (551-PT1-VA), Complementary Piano Technique II (551-PT2-VA)",
      "Music (theory)": "Ear Training I (551-105-VA), Ear Training II (551-205-VA), Ear Training III (551-305-VA), Ear Training IV (551-405-VA), History I (551-111-VA), History II (551-211-VA), History III (551-311-VA), History IV (551-411-VA), Theory I (551-TH1-VA), Theory II (551-TH2-VA), Theory III (551-TH3-VA), Theory IV (551-TH4-VA)",
      "Choice 1": "Small Ensemble I (551-SE1-VA) + Small Ensemble II (551-SE2-VA) + Complementary Elective I (551-CE1-VA) or Second Instrument (551-SC3-VA); OR Large Ensemble III (551-LE3-VA)",
      "Choice 2": "Complementary Elective II (551-CE2-VA) + Small Ensemble III (551-SE3-VA); OR Large Ensemble IV (551-LE4-VA)"
    }
  },
  "ScienceandMusic": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Auditions and entrance exams": "",
    "Secondary V Music (502) is recommended": "",
    "3-year pre-university Double DEC": "",
    "Program Grid": {
      "Math": "Calculus I (201-NYA-VA), Calculus II (201-NYB-VA), Linear Algebra (201-NYC-VA)",
      "Physics": "Mechanics (203-NYA-VA); Waves, Optics and Modern Physics (203-NYC-VA); Electricity and Magnetism (203-NYB-VA)",
      "Chemistry": "General Chemistry I (202-NYA-VA), Chemistry of Solutions (202-NYB-VA)",
      "Biology": "General Biology I (101-NYA-VA)",
      "3 Science Option courses": "",
      "Music (instruments)": "Principal Instrument and Lab I (551-PR1-VA), Principal Instrument and Lab II (551-PR2-VA), Principal Instrument and Lab III (551-PR3-VA), Principal Instrument and Lab IV (551-PR4-VA), Large Ensemble I (551-LE1-VA), Large Ensemble II (551-LE2-VA), Complementary Piano Technique I (551-PT1-VA), Complementary Piano Technique II (551-PT2-VA)",
      "Music (theory)": "Ear Training I (551-105-VA), Ear Training II (551-205-VA), Ear Training III (551-305-VA), Ear Training IV (551-405-VA), History I (551-111-VA), History II (551-211-VA), History III (551-311-VA), History IV (551-411-VA), Theory I (551-TH1-VA), Theory II (551-TH2-VA), Theory III (551-TH3-VA), Theory IV (551-TH4-VA)",
      "Choice 1": "Small Ensemble I (551-SE1-VA) + Small Ensemble II (551-SE2-VA) + Complementary Elective I (551-CE1-VA) or Second Instrument (551-SC3-VA); OR Large Ensemble III (551-LE3-VA)",
      "Choice 2": "Complementary Elective II (551-CE2-VA) + Small Ensemble III (551-SE3-VA); OR Large Ensemble IV (551-LE4-VA)"
    }
  },
  "SocialScienceandMusic": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Auditions and entrance exams": "",
    "Secondary V Music (502) is recommended": "",
    "3-year pre-university Double DEC": "",
    "Program Grid": {
      "Social Science": "Western Civilization (330-910-VA), Introduction to Psychology (350-102-VA), Macroeconomics (383-920-VA), Quantitative Methods (360-300-VA), Research Methods (300-300-VA)",
      "Social Science Option courses": "3 Introduction courses, 3 Analysis courses, 2 Application courses, 1 Enrichment course",
      "Music (instruments)": "Principal Instrument and Lab I (551-PR1-VA), Principal Instrument and Lab II (551-PR2-VA), Principal Instrument and Lab III (551-PR3-VA), Principal Instrument and Lab IV (551-PR4-VA), Large Ensemble I (551-LE1-VA), Large Ensemble II (551-LE2-VA), Complementary Piano Technique I (551-PT1-VA), Complementary Piano Technique II (551-PT2-VA)",
      "Music (theory)": "Ear Training I (551-105-VA), Ear Training II (551-205-VA), Ear Training III (551-305-VA), Ear Training IV (551-405-VA), History I (551-111-VA), History II (551-211-VA), History III (551-311-VA), History IV (551-411-VA), Theory I (551-TH1-VA), Theory II (551-TH2-VA), Theory III (551-TH3-VA), Theory IV (551-TH4-VA)",
      "Choice 1": "Small Ensemble I (551-SE1-VA) + Small Ensemble II (551-SE2-VA) + Complementary Elective I (551-CE1-VA) or Second Instrument (551-SC3-VA); OR Large Ensemble III (551-LE3-VA)",
      "Choice 2": "Complementary Elective II (551-CE2-VA) + Small Ensemble III (551-SE3-VA); OR Large Ensemble IV (551-LE4-VA)"
    }
  },
  "HealthScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Program Grid": {
      "Math": "Calculus I (201-NYA-VA), Calculus II (201-NYB-VA), Linear Algebra (201-NYC-VA)",
      "Physics": "Mechanics (203-NYA-VA); Waves, Optics and Modern Physics (203-NYC-VA); Electricity and Magnetism (203-NYB-VA)",
      "Chemistry": "General Chemistry I (202-NYA-VA), Chemistry of Solutions (202-NYB-VA), Organic Chemistry I (202-HTJ-VA)",
      "Biology": "General Biology I (101-NYA-VA), General Biology II (101-HTK-VA)",
      "1 Science Option course out of the following": "Biophysics, Research Methods, Human Physiology, Probability and Statistics, Calculus III, Linear Algebra II, Differential Equations, Chemistry of Wine, Food and Drugs, Health and Beauty, Organic Chemistry II, Physical Chemistry, Astrophysics, Statics and Engineering Physics, C++ Programming"
    }
  },
  "PureandAppliedScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Program Grid": {
      "Math": "Calculus I (201-NYA-VA), Calculus II (201-NYB-VA), Linear Algebra (201-NYC-VA)",
      "Physics": "Mechanics (203-NYA-VA); Waves, Optics and Modern Physics (203-NYC-VA); Electricity and Magnetism (203-NYB-VA)",
      "Chemistry": "General Chemistry I (202-NYA-VA), Chemistry of Solutions (202-NYB-VA)",
      "Biology": "General Biology I (101-NYA-VA)",
      "3 Science Option courses out of the following": "Biophysics, Research Methods, General Biology II, Human Physiology, Probability and Statistics, Calculus III, Linear Algebra II, Differential Equations, Chemistry of Wine, Food and Drugs, Health and Beauty, Organic Chemistry I, Organic Chemistry II, Physical Chemistry, Astrophysics, Statics and Engineering Physics, C++ Programming"
    }
  },
  "HonoursScience": {
    "Must first be accepted at Vanier's Health Science 200.B1 OR Pure and Applied Science 200.B2, then meet the prerequisites and cutoffs to apply for Honours Science": "",
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Cutoffs": "85% overall average, 80% minimum in each math and science prerequisite course",
    "If your Honours application is declined, you remain a confirmed Vanier student in the program to which you've been conditionally admitted": "",
    "Program Grid": {
      "See regular Health Science or regular Pure and Applied Science for program grid": ""
    }
  },
  "ComputerScienceandMath": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Program Grid": {
      "Programming": "Introduction to Programming (420-201-VA), Data Structures and Object-Oriented Programming (420-202-VA), Program Development for a Graphical Environment (420-203-VA)",
      "Math": "Calculus I (201-NYA-VA), Calculus II (201-NYB-VA), Linear Algebra (201-NYC-VA), Discrete Mathematics (201-201-VA)",
      "Physics": "Mechanics (203-NYA-VA); Waves, Optics and Modern Physics (203-NYC-VA); Electricity and Magnetism (203-NYB-VA)",
      "Chemistry": "General Chemistry I (202-NYA-VA)"
    }
  },
  "ScienceinEnglishFrench": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Cutoffs": "80% English and French average",
    "Take four French, one biology and two math courses and spend a full semester at the Cégep de Saint-Laurent, next door to Vanier College": "",
    "Program Grid": {
      "Math": "Calculus I (201-NYA-VA), Calculus II (201-NYB-VA), Algèbre linéaire et géométrie vectorielle (201-NYC-VA)",
      "Physics": "Mechanics (203-NYA-VA); Waves, Optics and Modern Physics (203-NYC-VA); Électricité et magnétisme (203-NYB-VA)",
      "Chemistry": "General Chemistry I (202-NYA-VA), Chemistry of Solutions (202-NYB-VA)",
      "Biology": "Évolution et diversité du vivant (101-NYA-VA)",
      "3 Science Option courses out of the following": "Biophysics, Research Methods, General Biology II, Human Physiology, Probability and Statistics, Calculus III, Linear Algebra II, Differential Equations, Chemistry of Wine, Food and Drugs, Health and Beauty, Organic Chemistry I, Organic Chemistry II, Physical Chemistry, Astrophysics, Statics and Engineering Physics, C++ Programming"
    }
  },
  "ScienceandSocialScience": {
    "Prerequisites": "Secondary V Math TS/SN (506), Secondary V Physics (504), Secondary V Chemistry (504)",
    "Pure and Applied Science + Social Science: Commerce option": "",
    "3-year pre-university Double DEC": "",
    "Program Grid": {
      "Math": "Calculus I (201-NYA-VA), Calculus II (201-NYB-VA), Linear Algebra (201-NYC-VA)",
      "Physics": "Mechanics (203-NYA-VA); Waves, Optics and Modern Physics (203-NYC-VA); Electricity and Magnetism (203-NYB-VA)",
      "Chemistry": "General Chemistry I (202-NYA-VA), Chemistry of Solutions (202-NYB-VA)",
      "Biology": "General Biology I (101-NYA-VA)",
      "3 Science Option courses": "",
      "Social Science": "History of Western Civilization (330-910-VA), Fundamentals of Business (401-100-VA), Introduction to Psychology (350-102-VA), Quantitative Methods (360-300-VA), Research Methods (300-300-VA), Accounting for Commerce (401-302-VA), Macroeconomics (383-920), Marketing (401-200-VA), Entrepreneurship (401-404-VA)",
      "Social Science Option": "1 Introduction course"
    }
  },
  "GeneralSocialScience": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Compulsory": "History of Western Civilization (330-910-VA), Introduction to Psychology (350-102-VA), Macroeconomics (383-920-VA), Quantitative Methods (360-300-VA), Research Methods (300-300-VA)",
      "Social Science Option courses": "3 Introduction courses, 3 Analysis courses, 2 Application courses, 1 Enrichment course"
    }
  },
  "ChildStudies": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Psychology": "Introduction to Psychology (350-102-VA), Developmental Psychology (350-200-VA); Learning, Memory and Intelligence (350-303-VA)",
      "Sociology": "Individual and Society (387-100-VA), Sociology of the Family (387-200-VA)",
      "Anthropology": "The Human Experience (381-100-VA)",
      "Compulsory": "History of Western Civilization (330-910-VA), Macroeconomics (383-920-VA), Quantitative Methods (360-300-VA), Research Methods (300-300-VA)",
      "Social Science Option courses": "1 Introduction course, 1 Analysis course and 1 Application course (both in same discipline as an Introduction course), 1 Enrichment course (in same discipline as an Analysis or an Application course)"
    }
  },
  "InternationalStudies": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Geography": "World: Land and People (320-100-VA), Global Challenge (320-201-VA)",
      "Economics": "Macroeconomics (383-920-VA), International Economic Relations (383-201-VA)",
      "Anthropology": "The Human Experience (381-100-VA), Race and Racism (381-202-VA)",
      "Compulsory": "History of Western Civilization (330-910-VA), Introduction to Psychology (350-102-VA), Quantitative Methods (360-300-VA), Research Methods (300-300-VA)",
      "Social Science Option courses": "2 Application courses (in same discipline as an Introduction course), 1 Enrichment course (in same discipline as an Analysis or an Application course)"
    }
  },
  "LawSociety": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Political Science": "Introduction to Politics (385-100-VA), Politics of Quebec & Canada (385-201-VA)",
      "Economics": "Macroeconomics (383-920-VA), The Underground Economy (383-300-VA)",
      "Compulsory": "History of Western Civilization (330-910-VA), Introduction to Psychology (350-102-VA), Individual and Society (387-100-VA), Research Methods (300-300-VA), Quantitative Methods (360-300-VA)",
      "Social Science Option course": "1 Introduction course, 1 Application course (in same discipline as an Introduction course), 1 Enrichment course (in same discipline as an Analysis or an Application course)"
    }
  },
  "Psychology": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Psychology": "Introduction to Psychology (350-102-VA), Psychological Disorders (350-204-VA)",
      "Compulsory": "Macroeconomics (383-920-VA), History of Western Civilization (330-910-VA), Research Methods (300-300-VA), Quantitative Methods (360-300-VA)",
      "Social Science Option courses": "3 Introduction courses, 2 Analysis courses and 2 Application courses (each in same discipline as an Introduction course), 1 Enrichment course (in same discipline as an Analysis or an Application course)"
    }
  },
  "SportLeisureStudies": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Program Grid": {
      "Geography": "World: Land and People (320-100-VA), Geography of Recreation (320-204-VA)",
      "Psychology": "Introduction to Psychology (350-102-VA), Sports Psychology (350-301-VA)",
      "Anthropology": "The Human Experience (381-100-VA); Sports, Games and Leisure (381-206-VA)",
      "Sociology": "Individual and Society (387-100-VA), Sociology of Sports (387-303-VA)",
      "Compulsory": "History of Western Civilization (330-910-VA), Macroeconomics (383-920-VA), Quantitative Methods (360-300-VA), Research Methods (300-300-VA)",
      "Social Science Option courses": "1 Analysis course (in same discipline as an Introduction course), 1 Enrichment course (in same discipline as an Analysis or an Application course)"
    }
  },
  "SocialScienceinEnglishFrench": {
    "Prerequisites": "Secondary IV Math CST (414)",
    "Cutoffs": "80% English and French average",
    "Take some courses, including four French courses, and spend a full semester at the Cégep de Saint-Laurent, next door to Vanier College": "",
    "Program Grid": {
      "History": "History of Western Civilization (330-910-VA), Histoire du 20e siècle (330-213-VA)",
      "Psychology": "Introduction to Psychology (350-102-VA), Psychologie du développement (350-203-VA)",
      "Compulsory": "Macroeconomics (383-920-VA), 1 cours d'initiation, Méthodes quantitatives en sciences humaines (360-300-VA), Research Methods (300-300-VA)",
      "Social Science Option courses": "1 Analysis courses, 2 Application courses, 1 Enrichment course"
    }
  },
  "Commerce": {
    "Prerequisites": "Secondary V Math TS/SN (506)",
    "Choice of the following majors (see Vanier's site for the specific program grids of these majors)": "Entrepreneurship (300.AD) OR International Business (300.AC)",
    "When applying through SRAM, see Social Science with Mathematics": "",
    "Program Grid": {
      "This is the program grid of the Commerce Option (300AB).": "",
      "Math": "Calculus I (201-103-VA), Calculus II (201-203-VA), Linear Algebra (201-105-VA)",
      "Business and Commerce": "Fundamentals of Business (401-100-VA), Accounting for Commerce (401-302-VA)",
      "Compulsory": "History of Western Civilization (330-910-VA), Introduction to Psychology (350-102-VA), Macroeconomics (383-920-VA), Quantitative Methods (360-300-VA), Research Methods (300-300-VA)",
      "Social Science Option courses": "1 Analysis course (in same discipline as an Introduction course), 1 Enrichment course (in same discipline as an Analysis or an Application course)"
    }
  },
  "HonoursSocialScienceCommerce": {
    "Students must have completed one semester in Social Science to apply to this program": "",
    "Prerequisites": "6 or 7 college courses, including four concentration courses",
    "Cutoffs": "80% overall average in four concentration courses",
    "Cannot have taken QM, RM, IP, or B block humanities in the first semester": ""
  }
}`)