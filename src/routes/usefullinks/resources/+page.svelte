<script>
  import SideNav from "../../../components/SideNav.svelte";
  import Pagination from "../../../components/Pagination.svelte";
  import { UsefulLinks } from "../../../sectionPages";

  const pages = UsefulLinks, section = 'Useful Links', previous = UsefulLinks[0].link, nextSection = 'About QUÉtudes-info', next = '/about/disclaimersandterms';

  const chapters = [
    {
      name: 'Mental Health',
      link: 'mental-health',
    },
    {
      name: 'Human Rights, Equity, and Inclusion',
      link: 'human-rights-equity-and-inclusion',
    },
    {
      name: 'Math and Science',
      link: 'math-and-science',
    },
    {
      name: 'Computer Science and Programming',
      link: 'computer-science-and-programming',
    },
    {
      name: 'English and Social Sciences',
      link: 'english-and-social-sciences',
    },
    {
      name: 'French/Français',
      link: 'french-francais',
    },
    {
      name: 'General/All Subjects',
      link: 'general-all-subjects',
    },
    {
      name: 'Miscellaneous',
      link: 'miscellaneous',
    }
  ]
</script>

<svelte:head>
  <meta name="description" content="Free online resources for all subjects" />
  <title>Resources | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {previous} {nextSection} {next} />

  <h2 class="lightpurple-bg">Resources</h2>
  <p>A collection of free online resources for a variety of disciplines primarily intended for high school students. If you're having trouble with homework, unsure about post-secondary and career prospects, or just feeling curious, these websites and YouTube channels can help you out!</p>

  <div id={chapters[0].link}>
    <h2 class="skyblue-bg">{chapters[0].name}</h2>
    <ul>
      <li><a href="https://kidshelpphone.ca/" target="_blank">Kids Help Phone Canada</a></li>
      <li><a href="https://jack.org/Home" target="_blank">Jack.org</a></li>
      <li><a href="https://www.youtube.com/c/Psych2go" target="_blank">Psych2Go on YouTube</a></li>
      <li><a href="https://amiquebec.org/" target="_blank">AMI-Québec</a>: 514-486-1448</li>
      <li><a href="https://cmha.ca/" target="_blank">Canadian Mental Health Association (CMHA)</a>: 514-521-4993</li>
      <li><a href="https://www.deprimesanonymes.org/" target="_blank">DEPrimes Anonymes</a></li>
      <li><a href="https://interligne.co/en/" target="_blank">Centre Interligne (for concerns related to sexual orientation)</a>: 514-866-0103</li>
      <li><a href="https://suicideactionmontreal.org/en/" target="_blank">Suicide Action Montréal</a>: 1 866 277 3553</li>
      <li>Suicide Prevention Service: 1 866 APPELLE</li>
    </ul>
  </div>

  <div id={chapters[1].link}>
    <h2 class="lightpurple-bg">{chapters[1].name}</h2>
    <ul>
      <li><a href="https://www.crisisservicescanada.ca/en/looking-for-local-resources-support/" target="_blank">Crisis Services Canada</a></li>
      <li><a href="https://blackhealthalliance.ca/" target="_blank">Black Health Alliance</a></li>
      <li><a href="https://www.beam.community/tool-kits-education" target="_blank">Black Emotional Mental Health Toolkits</a></li>
      <li><a href="https://guidetoallyship.com/" target="_blank">The Guide to Allyship</a></li>
      <li><a href="https://www.youtube.com/watch?v=TnybJZRWipg" target="_blank">So You Want to Talk About Race — Talks at Google</a></li>
      <li><a href="https://jack.org/antiracismresources" target="_blank">Jack.org: Anti-Racism Resources</a></li>
      <li><a href="http://psacunion.ca/anti-racism-resources" target="_blank">Public Service Alliance of Canada: Anti-Racism Resources</a></li>
      <li><a href="https://uwaterloo.ca/human-rights-equity-inclusion/anti-racism" target="_blank">University of Waterloo: Anti-Racism resources</a></li>
      <li><a href="https://www.inclusivetherapists.com/resources" target="_blank">Inclusive Therapists Resources</a></li>
    </ul>
  </div>

  <div id={chapters[2].link}>
    <h2 class="skyblue-bg">{chapters[2].name}</h2>
    <ul>
      <li><a href="https://www.cemc.uwaterloo.ca/" target="_blank">UWaterloo Centre for Education in Mathematics and Computing (CEMC)</a></li>
      <li><a href="https://courseware.cemc.uwaterloo.ca/" target="_blank">UWaterloo CEMC Courseware</a></li>
      <li><a href="https://www.geogebra.org/?lang=en" target="_blank">GeoGebra</a></li>
      <li><a href="https://www.desmos.com/" target="_blank">Desmos</a></li>
      <li><a href="https://www.grade10math.com/" target="_blank">grade10math (for <strong>Quebec Secondary 4 CST Math</strong>)</a></li>
      <li><a href="https://ptable.com/" target="_blank">Online Periodic Table</a></li>
      <li><a href="https://www.youtube.com/c/misterwootube" target="_blank">Eddie Woo on YouTube</a></li>
      <li><a href="https://www.youtube.com/c/Freemathvideos" target="_blank">Brian McLogan on YouTube</a></li>
      <li><a href="http://www.ilectureonline.com/" target="_blank">ilectureonline</a></li>
      <li><a href="https://www.youtube.com/c/MichelvanBiezen" target="_blank">Michel van Biezen on YouTube (ilectureonline)</a></li>
      <li><a href="https://www.youtube.com/user/tibees" target="_blank">Tibees on YouTube</a></li>
      <li><a href="https://www.youtube.com/c/blackpenredpen" target="_blank">blackpenredpen on YouTube</a></li>
      <li><a href="https://artofproblemsolving.com/alcumus" target="_blank">Art of Problem Solving (AoPS) Alcumus: adaptive online learning system</a></li>
      <li><a href="https://www.youtube.com/c/tecmath" target="_blank">tecmath on YouTube (neat math tricks and more)</a></li>
      <li><a href="https://www.youtube.com/user/numberphile" target="_blank">Numberphile on YouTube (focuses on pure math)</a></li>
    </ul>
  </div>

  <div id={chapters[3].link}>
    <h2 class="lightpurple-bg">{chapters[3].name}</h2>
    <ul>
      <li><a href="https://scratch.mit.edu/" target="_blank">Scratch (MIT)</a></li>
      <li><a href="https://cs50.harvard.edu/x/" target="_blank">Harvard University: CS50's Introduction to Computer Science courseware</a></li>
      <li><a href="https://www.youtube.com/c/cs50" target="_blank">Harvard CS50 on YouTube</a></li>
      <li><a href="https://www.w3schools.com/" target="_blank">W3Schools</a></li>
      <li><a href="https://www.freecodecamp.org/learn/" target="_blank">freeCodeCamp</a></li>
      <li><a href="https://www.youtube.com/c/Freecodecamp" target="_blank">freeCodeCamp on YouTube</a></li>
      <li><a href="https://www.codecademy.com/" target="_blank">Codecademy</a></li>
      <li><a href="https://coder-coder.com/" target="_blank">Coder Coder's Website and Blog</a></li>
      <li><a href="https://www.youtube.com/c/TheCoderCoder" target="_blank">Coder Coder on YouTube</a></li>
      <li><a href="https://www.youtube.com/channel/UC2UXDak6o7rBm23k3Vv5dww" target="_blank">Tina Huang on YouTube (data science, study tips and more)</a></li>
      <li><a href="https://lab.github.com/" target="_blank">GitHub Learning Lab</a></li>
      <li><a href="https://www.theodinproject.com/" target="_blank">The Odin Project (web development)</a></li>
      <li><a href="https://developers.google.com/web/fundamentals" target="_blank">Google Developers Web (web development)</a></li>
      <li><a href="https://www.tutorialspoint.com/" target="_blank">TutorialsPoint</a></li>
      <li><a href="https://www.programiz.com/" target="_blank">Programiz</a></li>
      <li><a href="https://stackoverflow.com/" target="_blank">Stack Overflow</a></li>
    </ul>
  </div>

  <div id={chapters[4].link}>
    <h2 class="skyblue-bg">{chapters[4].name}</h2>
    <ul>
      <li><a href="https://www.sparknotes.com/" target="_blank">SparkNotes (everyone's best friend in English class)</a></li>
      <li><a href="https://www.litcharts.com/" target="_blank">LitCharts (from the creators of SparkNotes)</a></li>
      <li><a href="https://www.merriam-webster.com/" target="_blank">Merriam-Webster Dictionary and Thesaurus (**American dictionary, so watch out for spelling)</a></li>
      <li><a href="https://www.dictionary.com/" target="_blank">Dictionary.com</a></li>
      <li><a href="https://www.thesaurus.com/" target="_blank">Thesaurus.com</a></li>
      <li><a href="https://www.easybib.com/" target="_blank">EasyBib (bibliography/citations)</a></li>
      <li><a href="https://www.citationmachine.net/" target="_blank">Citation Machine (bibliography/citations)</a></li>
      <li><a href="https://owl.purdue.edu/owl/purdue_owl.html" target="_blank">Purdue University Online Writing Lab (OWL: extensive guide to writing and various citation styles)</a></li>
      <li><a href="https://www.emsb.qc.ca/emsb/community/education/secondary/sosc/" target="_blank">EMSB Social Science resources (secondary)</a></li>
      <li><a href="https://www.thecanadianencyclopedia.ca/en" target="_blank">Canadian Encyclopedia</a></li>
      <li><a href="https://www.britannica.com/" target="_blank">Encyclopedia Britannica</a></li>
      <li><a href="https://history.com/topics" target="_blank">History.com</a></li>
    </ul>
  </div>

  <div id={chapters[5].link}>
    <h2 class="lightpurple-bg">{chapters[5].name}</h2>
    <ul>
      <li><a href="https://www.wordreference.com/" target="_blank">wordreference (online dictionary)</a></li>
      <li><a href="https://www.linguee.com/" target="_blank">Linguee (online dictionary with context searches)</a></li>
      <li><a href="https://leconjugueur.lefigaro.fr/" target="_blank">Leconjugueur (conjugaison et exercices)</a></li>
      <li><a href="https://www.larousse.fr/dictionnaires/francais-monolingue" target="_blank">Dictionnaire Larousse (monolingue/unilingue)</a></li>
      <li><a href="https://bonpatron.com/" target="_blank">BonPatron (correcteur d'orthographe et de grammaire)</a></li>
      <li><a href="https://www.languageguide.org/french/vocabulary/" target="_blank">LanguageGuide French (vocabulaire de base)</a></li>
      <li><a href="https://ici.radio-canada.ca/" target="_blank">Radio-Canada</a></li>
    </ul>

    <h4 class="mb-0">Débutant/intermédiaire&nbsp;:</h4>
    <ul>
      <li><a href="https://www.youtube.com/c/FrancaisavecPierre" target="_blank">Français avec Pierre sur YouTube</a></li>
      <li><a href="https://innerfrench.com/" target="_blank">innerFrench</a></li>
      <li><a href="https://www.youtube.com/c/innerFrench" target="_blank">innerFrench sur YouTube</a></li>
    </ul>
    
    <h4 class="mb-0">Avancé&nbsp;:</h4>
    <ul>
      <li><a href="https://www.youtube.com/c/franceinfo" target="_blank">franceinfo (regardez la vidéo DIRECT TV pour l'actualité en direct)</a></li>
      <li><a href="https://www.youtube.com/user/france24" target="_blank">France 24 (regardez la vidéo EN DIRECT pour les infos en continu)</a></li>
      <li><a href="https://www.youtube.com/c/TV5MONDEInfo" target="_blank">TV5MONDE Info</a></li>
    </ul>
  </div>

  <div id={chapters[6].link}>
    <h2 class="skyblue-bg">{chapters[6].name}</h2>
    <ul>
      <li><a href="https://www.alloprof.qc.ca/" target="_blank">Alloprof (Québec-specific, in French)</a></li>
      <li><a href="https://www.youtube.com/c/alloprof" target="_blank">Alloprof sur YouTube</a></li>
      <li><a href="https://www.khanacademy.org/" target="_blank">Khan Academy</a></li>
      <li><a href="https://www.youtube.com/c/khanacademy" target="_blank">Khan Academy on YouTube</a></li>
      <li><a href="https://www.youtube.com/c/TheOrganicChemistryTutor/" target="_blank">The Organic Chemistry Tutor on YouTube</a></li>
      <li><a href="https://quizlet.com/" target="_blank">Quizlet</a></li>
      <li><a href="https://ecoleouverte.ca/accueil" target="_blank">MEES École ouverte</a></li>
      <li><a href="https://www.learnquebec.ca/how-to-new/" target="_blank">LEARN How-tos for Students</a></li>
      <li><a href="https://ocw.mit.edu/" target="_blank">MIT OpenCourseWare (mostly university level content)</a></li>
      <li><a href="https://www.edx.org/" target="_blank">edX: Free Online Courses by Harvard, MIT, & more</a></li>
      <li><a href="https://www.coursera.org/" target="_blank">Coursera (online courses)</a></li>
      <li><a href="https://libretexts.org/" target="_blank">LibreTexts — Free The Textbook</a></li>
      <li><a href="https://www.ted.com/" target="_blank">TED: Ideas Worth Spreading</a></li>
      <li><a href="https://www.youtube.com/c/TED" target="_blank">TED on YouTube</a></li>
    </ul>
  </div>

  <div id={chapters[7].link}>
    <h2 class="lightpurple-bg">{chapters[7].name}</h2>
    <ul>
      <li><a href="https://www.keybr.com/" target="_blank">keybr (typing practice)</a></li>
      <li><a href="https://educaloi.qc.ca/en/" target="_blank">Éducaloi (law, legal info)</a></li>
      <li><a href="https://www.musictheory.net/" target="_blank">musictheory.net</a></li>
      <li><a href="https://saaq.gouv.qc.ca/en/driving-course/" target="_blank">SAAQ Quebec Driving Course: Presentation and Modules</a></li>
      <li><a href="https://testdeconnaissances.saaq.gouv.qc.ca/en/" target="_blank">SAAQ Knowledge Practice Tests (driving)</a></li>
      <li><a href="https://tests.ca/quebec/driving-test/" target="_blank">Quebec Driving Knowledge Test practice</a></li>
    </ul>
  </div>

  <Pagination {section} {previous} {nextSection} {next} />
</section>