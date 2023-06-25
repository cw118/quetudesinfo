<script>
  import SideNav from "../../../components/SideNav.svelte";
  import Pagination from "../../../components/Pagination.svelte";
  import { UsefulLinks } from "../../../sectionPages";

  const pages = UsefulLinks, section = 'Useful Links', prevSection = 'Program Comparison Tool', previous = '/programcomparisontool', next = UsefulLinks[1].link;

  const chapters = [
    {
      name: 'Official CEGEP Websites',
      link: 'official-cegep-websites',
    },
    {
      name: 'Academic Calendars',
      link: 'academic-calendars',
    },
    {
      name: 'Viewbooks, Course Calendars, and Handbooks',
      link: 'viewbooks-course-calendars-and-handbooks',
    },
    {
      name: 'Application Modules and Guides',
      link: 'application-modules-and-guides',
    },
    {
      name: 'Virtual Open House Websites',
      link: 'virtual-open-house-websites',
    },
    {
      name: 'Helpful CEGEP Links',
      link: 'helpful-cegep-links',
    },
    {
      name: 'Forms and Other Documents',
      link: 'forms-and-other-documents',
    },
    {
      name: 'Official Organization Websites',
      link: 'official-organization-websites',
    }
  ]
</script>

<svelte:head>
  <meta name="description" content="A catalog of important CEGEP links, including websites and documents" />
  <title>CEGEP Links | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {prevSection} {previous} {next} />

  <h2 class="skyblue-bg">CEGEP Links</h2>
  <p>A catalog of important links, documents and forms for CEGEP, including official school and organization websites.</p>

  <div class="mt-4 mb-3" id={chapters[0].link}>
    <h2 class="goldenrod-bg">{chapters[0].name}</h2>
    <ul>
      <li><a href="https://www.bemarianopolis.ca/" target="_blank">Marianopolis College, for prospective students (bemarianopolis)</a></li>
      <li><a href="https://www.marianopolis.edu/" target="_blank">Marianopolis College</a></li>
      <li><a href="https://www.dawsoncollege.qc.ca/" target="_blank">Dawson College</a></li>
      <li><a href="https://www.vaniercollege.qc.ca/" target="_blank">Vanier College</a></li>
      <li><a href="https://www.johnabbott.qc.ca/" target="_blank">John Abbott College</a></li>
      <li><a href="https://www.champlainonline.com/champlainweb/" target="_blank">Champlain College St-Lambert</a></li>
      <li><a href="https://slc.qc.ca/" target="_blank">Champlain College St-Lawrence</a></li>
      <li><a href="https://www.crc-lennox.qc.ca/" target="_blank">Champlain College Lennoxville</a></li>
      <li><a href="https://www.cegep-heritage.qc.ca/" target="_blank">Heritage College</a></li>
      <li><a href="https://college.centennial.qc.ca/" target="_blank">Centennial College</a></li>
    </ul>
    <h4 class="mb-0">Bilingual Colleges</h4>
    <ul>
      <li><a href="https://cegepsi.ca/" target="_blank">Cégep de Sept-Îles</a></li>
      <li><a href="https://www.tav.ca/" target="_blank">TAV College</a></li>
      <li><a href="https://www.lasallecollege.com/" target="_blank">LaSalle College</a></li>
    </ul>
    <hr class="border border-black">
  </div>

  <div id={chapters[1].link}>
    <h2 class="skyblue-bg">{chapters[1].name}</h2>
    <p>Calendars outlining each college's school year.</p>
    <ul>
      <li><a href="https://www.marianopolis.edu/wp-content/uploads/2023/02/2023-2024-Academic-Calendar.pdf" target="_blank">Marianopolis College Academic Calendar 2023-24</a></li>
      <li><a href="https://www.dawsoncollege.qc.ca/registrar/academic-calendar/" target="_blank">Dawson College Academic Calendars</a></li>
      <li><a href="https://www.vaniercollege.qc.ca/calendars-dates/academic-calendar/" target="_blank">Vanier College Academic Calendars</a></li>
      <li><a href="https://www.johnabbott.qc.ca/registrars-office/academic-calendar/" target="_blank">John Abbott College Academic Calendars</a></li>
      <li><a href="https://www.champlainonline.com/champlainweb/students/academic-calendar/" target="_blank">Champlain St-Lambert Academic Calendars and Important Dates</a></li>
      <li><a href="https://slc.qc.ca/students/academic-information-and-calendar/academic-calendar" target="_blank">Champlain St-Lawrence Academic Calendars</a></li>
      <li><a href="https://www.crc-lennox.qc.ca/sessional-calendars/" target="_blank">Champlain Lennoxville Sessional Calendars</a></li>
      <li><a href="https://www.cegep-heritage.qc.ca/current-students/academics/academic-calendar" target="_blank">Heritage College Academic Calendars</a></li>
    </ul>
    <hr class="border border-black">
  </div>

  <div class="mb-3" id={chapters[2].link}>
    <h2 class="goldenrod-bg">{chapters[2].name}</h2>
    <p>Find the various application modules used by English CEGEPs and their application guides. <em>If an application module isn't found here, visit the college's official website (information on applying is often part
    of the admissions section or in its own section).</em></p>
    <ul>
      <li><a href="https://marianopolis-estd.omnivox.ca/estd/adms2/Admission.ovx?Ref=030230339276&C=MPO&L=ANG&Client=&isModeiFrame=" target="_blank">Apply to Marianopolis College</a></li>
      <li><a href="https://www.bemarianopolis.ca/admissions/updates/" target="_blank">Marianopolis College, Applications and Admissions Updates</a></li>
      <li><a href="https://www.bemarianopolis.ca/admissions/updates/application-documents-to-upload/" target="_blank">Marianopolis College, Documents to upload after applying</a></li>
      <li><a href="https://apply.dawsoncollege.qc.ca/" target="_blank">Dawson College Application Centre</a></li>
      <li><a href="https://www.dawsoncollege.qc.ca/admissions/how-to-apply/fall/" target="_blank">Dawson College, How to Apply (Fall semester)</a></li>
      <li><a href="https://admission.sram.qc.ca/">SRAM Admission (apply to Vanier, John Abbott, Champlain Lennoxville, Heritage)</a></li>
      <li><a href="https://admission-demo.sram.qc.ca/" target="_blank">SRAM application <strong>demo/simulation</strong></a></li>
      <li><a href="https://www.sram.qc.ca/diploma-of-college-studies/admission-procedures" target="_blank">SRAM Admission Procedures (information)</a></li>
      <li><a href="https://admission.sram.qc.ca/regulier/places-disponibles/par-programme" target="_blank">SRAM Table of Available Places/Programs</a></li>
      <li><a href="https://www.vaniercollege.qc.ca/admissions/" target="_blank">Vanier College Admissions (information and guides)</a></li>
      <li><a href="https://www.johnabbott.qc.ca/registrars-office/how-to-apply/" target="_blank">John Abbott College, How to Apply</a></li>
      <li><a href="https://www.crc-lennox.qc.ca/future-students/admissions-loans-and-bursaries/" target="_blank">Champlain Lennoxville Admissions (information)</a></li>
      <li><a href="https://www.cegep-heritage.qc.ca/future-students/admissions/how-to-apply" target="_blank">Heritage College, How to Apply</a></li>
      <li><a href="https://champlaincollege-st-lambert-admission-en.omnivox.ca/" target="_blank">Champlain St-Lambert Application System (Omnivox)</a></li>
      <li><a href="https://www.champlainonline.com/champlainweb/future-students/apply-to-champlain/" target="_blank">Apply to Champlain St-Lambert (information and guides)</a></li>
      <li><a href="https://slc-admission-en.omnivox.ca/" target="_blank">Champlain St-Lawrence Application System</a></li>
      <li><a href="https://slc.qc.ca/future-students/admissions-for-regular-day-programs" target="_blank">Champlain St-Lawrence Day Division Admissions (information)</a></li>
      <li><a href="https://college.centennial.qc.ca/howtoapply/" target="_blank">Apply to Centennial College</a></li>
    </ul>
    <hr class="border border-black">
  </div>

  <div class="mb-3" id={chapters[3].link}>
    <div>
      <h2 class="skyblue-bg">{chapters[3].name}</h2>
      <ul>
        <li><a href="https://www.dawsoncollege.qc.ca/open-house/" target="_blank">Dawson College Virtual Open House</a></li>
        <li><a href="https://www.dawsoncollege.qc.ca/about-dawson/virtual-tour/" target="_blank">Dawson College Virtual Tour (floor plans)</a></li>
        <li><a href="https://www.vaniercollege.qc.ca/open-house/" target="_blank">Vanier College Open House site</a></li>
        <li><a href="https://www.johnabbott.qc.ca/the-college/virtual-college-tour/" target="_blank">John Abbott College Virtual College Tour</a></li>
        <li><a href="https://champlainvideos.com/" target="_blank">Champlain St-Lambert Virtual Tour</a></li>
        <li><a href="https://slc.qc.ca/future-students/open-house-journee-portes-ouvertes/" target="_blank">Champlain St-Lawrence open house information page</a></li>
        <li><a href="https://www.crc-lennox.qc.ca/future-students/open-house/" target="_blank">Champlain Lennoxville Virtual Tour</a></li>
        <li><a href="https://www.cegep-heritage.qc.ca/future-students/visit/virtual-tour/" target="_blank">Heritage College 360 Virtual Tour</a></li>
        <li><a href="https://www.lasallecollege.com/information/welcome-virtual-open-house/" target="_blank">LaSalle College Virtual Open House</a></li>
      </ul>
    </div>
    <hr class="border border-black">
  </div>

  <div class="mb-3" id={chapters[4].link}>
    <div>
      <h2 class="goldenrod-bg">{chapters[4].name}</h2>
      <p>Information on programs, program profiles, applications, finances, and more. When looking at viewbooks, you should look
      at the viewbooks for your first CEGEP school year (not your current high school year). <em>For example, if you're in secondary 5 during the 2021-22 school year, you should look at the 2022-2023 viewbooks for the
      most up-to-date information.</em></p>
      <ul>
        <li><a href="https://marianopolis-college.dcatalog.com/r/2022-2023-Marianopolis-Viewbook/" target="_blank">Marianopolis College viewbook 2022-23</a></li>
        <li><a href="https://marianopolis-college.dcatalog.com/v/2022-2023-Marianopolis-Calendar/" target="_blank">Marianopolis College course calendar 2022-23</a></li>
        <li><a href="https://www.dawsoncollege.qc.ca/about-dawson/viewbook/" target="_blank">Dawson College viewbook (updates with newest available version)</a></li>
        <li><a href="https://www.vaniercollege.qc.ca/prospectus/files/current.pdf" target="_blank">Vanier College full prospectus (viewbook) 2022-23</a></li>
        <li><a href="https://www.vaniercollege.qc.ca/prospectus/" target="_blank">Vanier College webpage with all prospectus documents (viewbooks)</a></li>
        <li><a href="https://www.johnabbott.qc.ca/viewbook/" target="_blank">John Abbott College viewbooks (EN or FR)</a></li>
        <li><a href="https://www.champlainonline.com/champlainweb/wp-content/uploads/2021/10/Admissions-Handbook-2022-2023_Web.pdf" target="_blank">Champlain St-Lambert admissions handbook (viewbook) 2022-23</a></li>
        <li><a href="https://stlawrencewebsite.blob.core.windows.net/media/4631/st-lawrence_viewbook2021-final.pdf" target="_blank">Champlain St-Lawrence viewbook 2022-23</a></li>
        <li><a href="https://www.crc-lennox.qc.ca/wp-content/uploads/2022/05/Champlain-College-Lennoxville-Academic-Calendar-2022-2023.pdf" target="_blank">Champlain Lennoxville course calendar 2022-23</a></li>
        <li><a href="https://cdn.cegep-heritage.qc.ca/documents/PDF/viewbook/ViewBook2022-2023web.pdf?1634215978" target="_blank">Heritage College viewbook</a></li>
        <li><a href="https://college.centennial.qc.ca/wp-content/uploads/2021/12/CA_College_Viewbook_Web_August2019.pdf" target="_blank">Centennial College viewbook</a></li>
        <li><a href="https://www.tav.ca/viewbook/" target="_blank">TAV College viewbook</a></li>
      </ul>
    </div>
    <hr class="border border-black">
  </div>

  <div class="mb-3" id={chapters[5].link}>
    <h2 class="skyblue-bg">{chapters[5].name}</h2>
    <ul>
      <li><a href="https://pygma.ca/" target="_blank">Pygma</a></li>
      <li><a href="https://www.cegepsquebec.ca/en/" target="_blank">Cégeps du Québec</a></li>
      <li><a href="https://www.quebec.ca/en/education/cegep/studying/list-colleges/" target="_blank">Quebec Ministry of Education's list of CEGEPs and Private Colleges</a></li>
      <li><a href="https://sram.qc.ca/wp-content/uploads/dlm_uploads/2020/10/JumpstartToCollege_2020_web.pdf" target="_blank">SRAM and SRASL Jumpstart to College guide</a></li>
    </ul>
    <hr class="border border-black">
  </div>

  <div class="mb-3" id={chapters[6].link}>
    <h2 class="goldenrod-bg">{chapters[6].name}</h2>
    <ul>
      <li><a href="https://www.marianopolis.edu/wp-content/uploads/2019/09/R-Score-Winter-2018-new-formula.pdf" target="_blank">Marianopolis College, New R-Score Formula March 2018</a></li>
      <li><a href="https://www.dawsoncollege.qc.ca/public/services/finance_department/quebecresidenceformenglish.pdf" target="_blank">Attestation of Québec Resident Status form <em>(for foreign students/immigrants: check if you qualify as a Québec resident when attending CEGEP, can affect tuition fees)</em></a></li>
    </ul>
    <hr class="border border-black">
  </div>

  <div class="mb-3" id={chapters[7].link}>
    <h2 class="skyblue-bg">{chapters[7].name}</h2>
    <ul>
      <li><a href="https://www.sram.qc.ca/home/" target="_blank">Service régional d'admission du Montréal métropolitain (SRAM)</a></li>
      <li><a href="https://fedecegeps.ca/en/" target="_blank">Fédération des cégeps</a></li>
    </ul>
  </div>

  <Pagination {section} {prevSection} {previous} {next} />
</section>