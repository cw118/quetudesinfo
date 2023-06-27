<script>
  import SideNav from '../../../components/SideNav.svelte';
  import Pagination from '../../../components/Pagination.svelte';
  import Disclaimer from '../../../components/Disclaimer.svelte';
  import { WhatIsCegep } from '../../../sectionPages';

  const pages = WhatIsCegep, section = 'What is CEGEP', previous = WhatIsCegep[0].link, next = WhatIsCegep[2].link;

  const chapters = [
    {
      name: 'Programs',
      link: 'programs',
    },
    {
      name: 'Program Overview',
      link: 'program-overview',
    },
    {
      name: 'Pre-university Programs',
      link: 'pre-university-programs',
    },
    {
      name: 'Career and Technical Programs',
      link: 'career-and-technical-programs',
    },
    {
      name: 'Special Programs, Partnerships, and Opportunities',
      link: 'special-programs-partnerships-and-opportunities',
    }
  ]
</script>

<svelte:head>
  <meta name="description" content="Learn about CEGEP programs and special opportunities" />
  <title>Programs | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {previous} {next} />

  <div id={chapters[0].link}>
    <h2 class="lightblue-bg">{chapters[0].name}</h2>
    <p>In CEGEP, there are 90* English DCS/DEC programs available in total: 25 are pre-university programs and/or profiles
    (more on this later), and 65 are technical programs.</p>
    <ul class="ul-blue">
      <li>DEC = diplôme d'études collégiales, same as DCS (more often used)</li>
      <li>DCS = diploma of collegial studies, same as DEC</li>
    </ul>
    <p>All DEC programs share a General Education component, which includes English, French, Humanities, Physical Education, and complementary
    courses (more details at Diploma of Collegial Studies and Studying at CEGEP).</p>
    <p><em>*This does not include two preparatory session type courses, Springboard to a DCS and Springboard to a DCS —
    First Nations. These programs do not lead to a college diploma, hence their exclusion from program count here.</em></p>
    <p class="sources">Sources: <a href="http://www.education.gouv.qc.ca/en/contenus-communs/enseignement-superieur/college-education/">Quebec Ministry of Education</a>, <a href="https://pygma.ca/">Pygma</a></p>
  </div>

  <div id={chapters[1].link}>
    <h2 class="yellow-bg">{chapters[1].name}</h2>
    <Disclaimer>For full lists of a college's programs and other opportunities, please visit their official site and/or check their
    viewbook. For a directory of all CEGEP programs, try the site <a href="https://pygma.ca/" target="_blank">Pygma</a>. Links to college websites and documents can be found in <a href="/cegep-links">CEGEP Links</a>.</Disclaimer>
    <p><strong>Pre-university programs</strong> lead to a Diploma of College Studies (DCS) in the program that you study and prepare you for university undergraduate
    studies. Most of these are four semesters (two years) long. <em>Some pre-university programs are three years in duration because they combine two areas of study (more on this in
    Special programs).</em></p>
    <div class="image-label">
      <p class="label">Social Science at Heritage College</p>
      <img class="mw-100" src="/assets/whatiscegep/heritage-social-science.webp"
          alt="Students discussing at a table">
      <p class="caption">Photo by Heritage College, Copyright by Cégep Heritage College</p>
    </div>
    <p>For pre-university programs, there is a program-specific component (a college graduation requirement) consisting of a
    certain number of credits, which vary depending on what program you take:</p>
    <ul class="ul-blue">
      <li>32 credits in Science, Computer Science and Mathematics, Music, and Visual Arts</li>
      <li>30 to 31 1/3 credits in social sciences</li>
      <li>30 credits in Arts, Literature and Communication (ALC)</li>
      <li>28 credits in Dance</li>
      <li>36 2/3 or 38 credits in Arts and Sciences</li>
      <li>34 to 35 1/3 credits in Liberal Arts</li>
    </ul>
    <p>What does this mean? If you take the Science, Computer Science and Mathematics, Music, or Visual Arts program, you must
    obtain 32 credits specific to your program (<em>not sure what the program-specific component is? See <a href="/whatiscegep#diploma-of-collegial-studies">Diploma of Collegial Studies</a></em>). If you take a Social Science program/profile (see below), you must obtain 30 to 31 ⅓ program-specific credits; if you
    take the Arts, Literature and Communication program, it's 30 credits, and so on.</p>
    <br><p><strong>Career and technical programs</strong> are usually three years in duration and also lead to a DCS. They provide technical training and are designed to
    integrate students into the workforce. Sometimes these are simply referred to as career programs, technical programs, or
    three-year programs.</p>
    <p>In addition to the General Education component, technical programs require students to complete 15 to 31 courses in
    field-specific subjects of varying lengths depending on the program. Most of these programs also include co-op and/or
    internships.</p>
    <div class="image-label">
      <p class="label">Early Childhood Education program at TAV College</p>
      <img class="mw-100" src="/assets/whatiscegep/tav-ece.webp" alt="An adult reading a children's book to some young kids">
      <p class="caption">Photo by TAV College, Copyright by TAV College, 1989-2021.</p>
    </div>

    <br><p><strong>Profiles:</strong> A profile is quite similar in definition to a program, but taking any profile will still lead to a program diploma; it's
    like a subject or option within the program field of study. One way to identify the profiles of a program is by looking at the program code <em>(see below)</em>—typically, profiles of the same program <strong>share at least the first three digits</strong> of the program code. <em>Note that profiles are sometimes referred to as programs for simplicity, such as the Health Science profile/program.</em></p>
    <p>For example, the Commerce profile of the Social Science program is just a more specific branch of its parent program,
    and you will still receive a DCS (diploma) in Social Science (not Commerce). All Social Science profiles also share a code of 300.</p>
    <p>Another example would be taking Health Science—it's technically a profile of the Science program, so you will still get DCS in Science whether you take Health
    Science, Pure and Applied Science, etc. All Science profiles share a code of 200.</p>
    
    <br><p>A <strong>program code</strong> (also called <strong>profile code</strong>) is a unique identifier for a program and/or profile. Program codes are typically the same in all CEGEPs, and they are 5 characters long, formatted as such: XXX.xx</p>
    <p>The first 3 characters (XXX) are numbers, representing the program/diploma subject, followed by 2 characters (xx)
    representing the specific profile. For example, the code <strong>300.FA</strong> is for the General Social Science profile, <strong>300.FB</strong> is for the Commerce profile, and <strong>300.FP</strong> is for the Psychology profile. All three of these are considered to be <strong>profiles of the Social Science program</strong>—notice that they share a common three-digit code of <strong>300</strong>.</p>

    <br><p><strong>Program prerequisites (admission/entrance requirements)</strong> are the credits and/or courses that you must take in order to be admissible to a program/profile. Another possible
    prerequisite is a <em>letter of intent</em>—a brief, focused essay (around 1 page) covering various topics such as why you're
    interested in the program, why the college should consider you, your interests and passions, and your school and
    community involvement.</p>
    <p>The <a href="/whatiscegep#quebecs-education-system">general CEGEP entrance requirement</a> is a Quebec Secondary School Diploma (SSD), but most programs have additional prerequisites and <strong>cutoff grades</strong> listed as well.</p>
    <p>A cutoff grade is the lowest grade acceptable for applicants of a particular program. Cutoffs are often listed for math
    courses (secondary IV and V math TS or SN). Common cutoff averages are overall average (average of grades in all
    subjects), math average (average of all math grades), and science average (average of all math and science grades, also
    called science/math average).</p>
    <p>For example, the Science program at a CEGEP may set an overall average cutoff at 80%, meaning students who wish to apply to
    the Science program at that college must have a minimum overall average of 80%.</p>
    <p class="sources">Sources: <a href="http://www.education.gouv.qc.ca/en/contenus-communs/enseignement-superieur/college-education/">Quebec Ministry of Education</a>, <a href="https://www.cegepsquebec.ca/en/our-study-programs/study-program-types/technical-programs/">Cégeps du Québec</a>, <a href="/cegep-links">various CEGEP sites</a></p>
  </div>

  <div id={chapters[2].link}>
    <h2 class="lightblue-bg">{chapters[2].name}</h2>
    <Disclaimer>Program and/or profile names and prerequisites may vary with different colleges. For cutoff grades, which are not listed here, <a href="/cegep-links">see the college website and/or viewbook</a>. This is <strong>not</strong> a full list of programs.</Disclaimer>
    
    <h3 id="alc">Arts, Literature, and Communication (ALC) (300.M0)</h3>
    <p class="description-top">Creativity, self-expression, and passion for the arts is what this program's all about. ALC gives you the chance to
        explore a number of art forms and artistic fields such as fine arts, art history, cinema, literature, and many more!
    </p>
    <div class="about-grid">
      <div class="image-label">
        <p class="label">Arts, Literature, and Communication at Vanier College</p>
        <img loading="lazy" src="/assets/whatiscegep/vanier-art.webp" alt="Artist painting some animals">
        <p class="caption">Photo by Vanier College. Copyright by Vanier College, 2021.</p>
      </div>
      <ul class="ul-blue">
        <li>DCS in Arts, Literature, and Communication</li>
        <li>Prerequisites: general CEGEP entrance requirements
          <ul class="inner">
            <li>Some colleges also require a letter of intent</li>
          </ul>
        </li>
        <li>A few ALC profiles: Arts and Culture, Cinema, Languages/Languages and Culture, Studio Arts and more (<em>some colleges may offer the ALC program without specific profiles</em>)</li>
      </ul>
    </div>
    <ul>
      <li>Potential paths for the future: Anthropology, Art Administration, Art Education, Communications, Creative Writing,
          Graphics and Design, Journalism, Law, Linguistics, Media, Philosophy, Photography, Religious Studies, Sociology,
          Theatre...</li>
    </ul>

    <h3 id="lib-arts">Liberal Arts (700.B0)</h3>
    <p class="description-top">Investigate the connections between a variety of disciplines like history, philosophy, the arts, the sciences and more!
    Liberal Arts will provide classical training while offering a broad range of subjects for you to quench your intellectual curiosities.</p>
    <div class="about-grid">
      <div class="image-label">
        <p class="label">Liberal Arts at Heritage College</p>
        <img loading="lazy" src="/assets/whatiscegep/heritage-liberal-arts.webp" alt="A large book on a wooden stand">
        <p class="caption">Photo by Heritage College. Copyright by Cégep Heritage College.</p>
      </div>
      <ul class="ul-blue">
        <li>DCS in Liberal Arts</li>
        <li>Prerequisites: general CEGEP entrance requirements
          <ul class="inner">
              <li>A letter of intent is often required</li>
          </ul>
        </li>
      </ul>
    </div>
    <ul>
      <li>Potential paths for the future: Writing, Journalism, Communications, Teaching, Research. Government, Law, Museology,
          Theatre, Business...</li>
    </ul>

    <h3 id="music">Music (501.A0)</h3>
    <p class="description-top">Develop your performance skills and master your craft: the Music program will prepare you for further music studies in
    university and help you achieve the professional career of your dreams.</p>
    <div class="about-grid">
      <div class="image-label">
        <p class="label">Music at Marianopolis College</p>
        <img src="/assets/whatiscegep/marianopolis-music.webp" alt="A small group of music students playing various instruments">
        <p class="caption">Photo by bemarianopolis. Copyright by Marianopolis College, 2021.</p>
      </div>
      <ul class="ul-blue">
        <li>DCS in Music</li>
        <li>Prerequisites: general CEGEP entrance requirements, auditions, placement tests/entrance exams</li>
        <li>Often combined with another program for a Double DEC program, such as Music and ALC or Music and Science (<em>see <a href="#special-programs-partnerships-and-opportunities">Special Programs</a> for more on Double DECs</em>)</li>
      </ul>
    </div>

    <h3 id="social-science">Social Science (300.M0)</h3>
    <p class="description-top">Explore a wide variety of related subjects and study social sciences with a highly flexible approach. The Social Science
    program will equip you with knowledge on social science disciplines, research methods, and many more skills.</p>
    <div class="about-grid">
      <div class="image-label">
        <p class="label">Social Science at John Abbott College</p>
        <img loading="lazy" src="/assets/whatiscegep/john-abbott-social-science.webp" alt="A row of stone sculptures, full bookshelves, and a wooden ladder in a library">
        <p class="caption">Photo by John Abbott College. Copyright by John Abbott College, 2020.</p>
      </div>
      <ul class="ul-blue">
        <li>DCS in Social Science</li>
        <li>Prerequisites: general CEGEP entrance requirements, <u>additional requirements vary based on profile and CEGEP</u>
          <ul class="inner">
            <li>Additional prerequisites for social science profiles are often math courses/credits</li>
          </ul>
        </li>
        <li>Common profiles: General Social Science/General Studies, Commerce, Psychology, Social Science Two Math; Law, Society and
        Justice (<em>this is one profile, not three)</em></li>                        
      </ul>
    </div>
    <ul>
      <li>Potential paths for the future, <strong>social science</strong>: Anthropology, Civil Service, Criminology, Demography, Ecology, Education, Geography, History, Political Science,
          Psychology and Counselling, Public Policy, Sociology, Urban Planning...</li>
      <li>Potential paths for the future, <strong>commerce</strong>: Accounting, Actuarial Mathematics, Administration, Banking, Business, Corporate Law, Economics, Finance, Human
          Resources, Marketing...</li>
    </ul>

    <h3 id="science">Science (200.B0)</h3>
    <p class="description-top">Dive deep into the sciences with rigorous scientific learning, research, and hands-on experience in the lab. This
    program is perfect for science enthusiasts and provides students with a strong foundation in biology, chemistry,
    mathematics and physics, while electives offer even more opportunities to explore your interests.</p>
    <div class="about-grid">
      <div class="image-label">
        <p class="label">Science at Champlain College Lennoxville</p>
        <img loading="lazy" src="/assets/whatiscegep/champlain-lennoxville-science.webp" alt="Instructor and students in science lab">
        <p class="caption">Photo by Champlain College Lennoxville. Copyright by Champlain College, 2018.</p>
      </div>
      <ul class="ul-blue">
        <li>DCS in Science</li>
        <li>Prerequisites: general CEGEP entrance requirements, Secondary V Math TS/SN, Secondary V Physics, Secondary V Chemistry</li>
        <li>Common profiles: Health Science, Pure and Applied Science, Honours/Enriched profiles
          <ul class="inner">
            <li><em>Note that the new Computer Science and Mathematics program (200.C0) is <strong>not</strong> a Science profile (see <a href="#special-programs-partnerships-and-opportunities">Special Programs</a>).</em></li>
          </ul>
        </li>
      </ul>
    </div>
    <ul>
      <li>Potential paths for the future: Architecture, Astrophysics, Biochemistry, Biology, Biomedical Engineering,
          Chemistry, Computer Science, Dentistry, Engineering (aerospace, civil, electrical, mechanical, mining, software, and more), Environmental Science, Food Science,
          Geology, Mathematics, Medicine, Pharmacology, Physics, Physiology, Zoology...</li>
    </ul>
    <hr>

    <p><strong>Honours or Enriched programs:</strong> most CEGEPs offer an <u>honours or enriched option</u> for their programs. Ideal for strong and highly motivated students,
    honours/enriched programs offer enhanced learning opportunities and more advanced studies in a more stimulating
    environment. This kind of program also tends to be more competitive than its regular equivalent with more prerequisites and higher cutoffs.</p>
    <div class="image-label">
      <p class="label">Honours Science at John Abbott College</p>
      <img loading="lazy" class="mw-100" src="/assets/whatiscegep/john-abbott-honours-science.webp" alt="Students in lab coats and safety glasses in a science lab">
      <p class="caption">Photo by John Abbott College. Copyright by John Abbott College, 2020.</p>
    </div>
    <ul class="ul-blue">
      <li>Same diploma as its regular program (ie. Honours Commerce students will still receive a Diploma in Social Science)
        <ul class="inner">
          <li>Honours students write the same final exams as regular students*</li>
          <li>CEGEPs may provide an Honours attestation/certificate upon request</li>
        </ul>
      </li>
      <li>Common Honours programs/profiles: Honours Commerce, Honours Social Science, Honours Science</li>
      <li>Benefits: a more enriched curriculum, more learning opportunities outside the classroom (such as seminars and field trips)</li>
    </ul>
    <p><em>*Please see official websites and/or contact the colleges for specific details.</em></p>
    <p>This is a very general and incomplete list meant to give you an idea of what kinds of programs CEGEPs may offer. For a bit more information on this site, try <a href="/applyingtocegep/choosingacegepandprogram">Choosing a CEGEP and Program</a>. <strong>For full details on a CEGEP and their prorams, <a href="links.html">visit their official site and/or see their viewbook.</a></strong></p>
    <p class="sources">Sources: <a href="/cegep-links">official CEGEP sites and viewbooks</a></p>
  </div>

  <div id={chapters[3].link}>
    <h2 class="yellow-bg">{chapters[3].name}</h2>
    <Disclaimer>Program and/or profile names and prerequisites may vary with different colleges. This is <u>not</u> a full list of programs.</Disclaimer>
    <p>According to the Service régional d'admission du Montréal métropolitain (SRAM), technical programs are categorized into <strong>7 major fields</strong>:</p>
    <ul>
      <li><strong>Biological Technologies:</strong> health, biomedical, environmental management, forest technologies</li>
      <li><strong>Agricultural Technologies:</strong> agricultural management and production, food quality, horticulture, landscaping</li>
      <li><strong>Physical Technologies:</strong> engineering technologies (mechanical, electronic, civil, building, metallurgical), architecture, geomatics, aeronautics, urban planning, laboratory, etc.</li>
      <li><strong>Community Technologies:</strong> education, counseling, leisure, library</li>
      <li><strong>Business Administrative Technologies:</strong> business, records management, computer science, logistics, tourism, hotel and restaurant management</li>
      <li><strong>Applied Arts:</strong> theatre, dance, graphic design, design, fashion, arts and crafts</li>
      <li><strong>Graphic Communications:</strong> prepress computer graphics and printing</li>
    </ul>
    <Disclaimer>Technical programs tend to be slightly different at every college, especially if a profile/option of the program is
    specified in its name. Some are also only offered in either the Fall or Winter semester. <a href="/cegep-links">Viewbooks</a> are a great resource
    to see technical program specifications.</Disclaimer>
    <p>Since there are far too many technical programs for this page to include them all, <strong>here are some common career and technical programs:</strong></p>
    
    <h3 id="accounting-management-tech">Accounting and Management Technology (410.B0)</h3>
    <p class="description-top">Delve deep into the business world with courses in areas such as accounting, marketing, finance and management. This program will develop students' ability to make strategic business recommendations, manage projects, and to process and analyze financial information.</p>
    <div class="about-grid">
      <ul class="ul-blue">
        <li>DCS in Accounting and Management Technology</li>
        <li>Prerequisites: general CEGEP entrance requirements, Secondary IV Math TS/SN <u>or</u> Secondary V Math CST</li>
        <li>Skills: work with numbers, solve problems, provide support for business operations, project management, conduct
            financial analysis...</li>
      </ul>
      <div class="image-label">
        <p class="label">Accounting and Management Technology at Champlain College Lennoxville</p>
        <img loading="lazy" src="/assets/whatiscegep/champlain-lennoxville-accounting-technology.webp" alt="A laptop and calculator on a desk and a person writing a report">
        <p class="caption">Photo by Champlain College Lennoxville. Copyright by Champlain College, 2018.</p>
      </div>                    
    </div>

    <h3 id="business-management">Business Management (410.D0)</h3>
    <p class="description-top">Acquire competencies in the areas of marketing, finance, accounting, sales, e-Commerce and more! The Business Management
    program is designed to provide students with a foundation in multiple business areas and includes practical work
    involving market analysis, consumer behaviour, advertising and media communications.</p>
    <div class="about-grid">
      <ul class="ul-blue">
        <li>DCS in Business Management</li>
        <li>Prerequisites: general CEGEP entrance requirements
          <ul class="inner">
            <li>Some colleges require Secondary IV Math CST</li>
          </ul>
        </li>
        <li>Skills: sales techniques, retail management, event planning, manage a commercial project, internet marketing...
        </li>
      </ul>
      <div class="image-label">
        <p class="label">Business Management at John Abbott College</p>
        <img loading="lazy" src="/assets/whatiscegep/john-abbott-business-management.webp" alt="Two people having a discussion at a table with a laptop on it">
        <p class="caption">Photo by John Abbott College. Copyright by John Abbott College, 2020.</p>
      </div>                    
    </div>

    <h3 id="comp-sci-tech">Computer Science Technology (420.B0)</h3>
    <p class="description-top">Develop algorithmic and logical thinking as you learn multiple programming languages, analyze and solve problems in your
    code. Gain computing skills in areas ranging from computer programming, program design, object-oriented methodology to
    system analysis, database technology, security and networking.</p>
    <div class="about-grid">
      <ul class="ul-blue">
        <li>DCS in Computer Science Technology</li>
        <li>Prerequisites: general CEGEP entrance requirements, Secondary IV Math TS/SN <u>or</u> Secondary V Math CST</li>
        <li>Skills: computer programming, problem solving, software design and maintenance, Internet of Things, cloud development...</li>
      </ul>
      <div class="image-label">
        <p class="label">Computer Science Technology at Vanier College</p>
        <img loading="lazy" src="https://www.vaniercollege.qc.ca/computer-science-technology/files/2017/07/computer-networking-m-780x400.jpg"
            alt="Person drawing on a digital idea map on Internet and network">
        <p class="caption">Photo by Vanier College. Copyright by Vanier College, 2021.</p>
      </div>                    
    </div>

    <h3 id="nursing">Nursing (180.A0)</h3>
    <p class="description-top">Through a blend of classroom studies, nursing labs and clinical fieldwork, this program will prepare students to provide
    quality nursing care in an increasingly complex healthcare system. Graduates of the nursing program are also encouraged
    to take the opportunity to continue their studies at the university level.</p>
    <div class="about-grid">
      <ul class="ul-blue">
        <li>DCS in Nursing
          <ul class="inner">
            <li>For potential university paths, see the official college sites and/or viewbooks</li>
          </ul>
        </li>
        <li>Prerequisites: general CEGEP entrance requirements, Secondary IV Environmental Science & Technology (EST) <u>or</u> Sec IV Science and Environment (SE), Secondary V Chemistry,
        letter of intent
          <ul class="inner">
            <li>Additional criteria may be specified by each college</li>
          </ul>
        </li>
        <li>Skills: perform nursing tasks, intervene with patients, apply emergency measures, collect and analyze data, use assessment and
        nursing care procedures, promote health and well-being, deal with the social and cultural realities associated with healthcare</li>
      </ul>
      <div class="image-label">
        <p class="label">Nursing at Dawson College</p>
        <img loading="lazy" src="/assets/whatiscegep/dawson-nursing.webp"
            alt="A health instructor and nursing student by a patient's bedside">
        <p class="caption">Photo by Dawson College. Copyright by Dawson College, 2021.</p>
      </div>                    
    </div>

    <h3 id="office-systems">Office Systems Technology: Micropublishing and Hypermedia (412.AB)</h3>
    <p class="description-top">With a focus on communications, graphic design, and web development, students will work on effective oral and written
    communication, learn to apply design principles for varying media, and explore the front-end and back-end development of
    applications. This program is a specialization of Office Systems Technology.</p>
    <div class="about-grid">
      <ul class="ul-blue">
        <li>DCS in Office Systems Technology</li>
        <li>Prerequisites: general CEGEP entrance requirements</li>
        <li>Skills: create and design business documents, master industry-standard design tools (ie. Adobe Photoshop); develop dynamic,
        database-driven applications (back-end); create websites, mobile apps, online games and more...</li>
      </ul>
      <div class="image-label">
        <p class="label">OST: Micropublishing and Hypermedia at Vanier College</p>
        <img loading="lazy" src="/assets/whatiscegep/vanier-ost.webp"
            alt="An instructor with a camera talking to students">
        <p class="caption">Photo by Vanier College. Copyright by Vanier College, 2021.</p>
      </div>                    
    </div>

    <h3 id="special-care">Special Care Counselling (351.A0)</h3>
    <p class="description-top">Learn to work with individuals who struggle with adaptation and social integration and gain skills in these areas, as
    well as in prevention and rehabilitation. The Special Care Counselling program trains students to provide support and
    guidance to client groups of all ages and diverse needs.</p>
    <div class="about-grid">
      <ul class="ul-blue">
        <li>DCS in Special Care Counselling</li>
        <li>Prerequisites: general CEGEP entrance requirements
          <ul class="inner">
            <li>Some colleges require a letter of intent and possibly an interview</li>
            <li>Additional criteria may be specified</li>
          </ul>
        </li>
        <li>Skills: support those with special needs, apply observation and assessment tools; develop, implement and evaluate intervention plans...</li>
        <li>Client groups: individuals with physical, neurological or intellectual impairments; mental health issues, substance
        abuse problems, behaviour, language and/or learning difficulties, victims of violence...</li>
        <li>Work settings: rehabilitation centres, short and long-term care facilities, psychiatric hospitals, schools, CLSC's, group homes...</li>
      </ul>
      <div class="image-label">
        <p class="label">Special Care Counselling at LaSalle College</p>
        <img loading="lazy" src="/assets/whatiscegep/lasalle-special-care-counselling.webp"
            alt="A young boy smiling and playing with a toy with a special care counsellor by his side">
        <p class="caption">Photo by LaSalle College. Copyright by LCI Education, 2021.</p>
      </div>                    
    </div><hr>

    <p>This is a very general and incomplete list meant to give you an idea of what kinds of programs CEGEPs may offer. For a bit more information on this site, try <a href="/applyingtocegep/choosingacegepandprogram">Choosing a CEGEP and Program</a>. <strong>For full details on a CEGEP and their prorams, <a href="/usefullinks/cegeplinks">visit their official site and/or see their viewbook.</a></strong></p>
    <p class="sources">Sources: <a href="https://www.sram.qc.ca/international-student/curricula-and-levels">SRAM</a>, <a href="https://www.cegepsquebec.ca/">Cégeps du Québec</a>, <a href="/cegep-links">official CEGEP sites and viewbooks</a></p>
  </div>

  <div id={chapters[4].link}>
    <h2 class="lightblue-bg">{chapters[4].name}</h2>
    <Disclaimer>Not all possibilities are included, and not all CEGEPs offer what's mentioned here.</Disclaimer>

    <p><strong>Springboard to a DCS (081.06)</strong> — for a semester (time and duration may vary), students can take a course selection before switching into a regular DCS program. Depending on the
    college and pathway, Springboard may be an option for students missing prerequisites for admission to another program,
    who are unsure of what program to pursue, or who require more time and assistance before beginning a regular CEGEP
    program. A secondary school diploma is still required for this program, and Springboard itself does <strong>not</strong> lead to a DCS. <a href="https://pygma.ca/08106" target="_blank">Research this program as well as your programs and colleges of interest carefully if you think Springboard may be for
    you.</a></p>
    <p><strong>Computer Science and Mathematics (200.C0)</strong> — this is a two-year pre-university program that leads to a DCS (diploma) in Computer Science and Math. It's still a relatively
    new program and is currently only offered by 8 CEGEPs (French colleges included).</p>
    <p><strong>Double DEC programs (pre-university)</strong> — as the name suggests, double DEC programs combine two pre-university programs into one three-year program (still
    pre-university). Students thus receive one DEC each for both programs. If you're interested in two disciplines and want to explore them both, there may be a double DEC
    program that's right for you. <em>Some examples: Music and Science (a DEC in Music and a DEC in Science), Science and Social Science (a DEC in Science and a DEC in Social Science)...</em></p>
    <p><strong>Alliance Sport-Études</strong> — many colleges partner with Alliance Sport-Études to help elite student-athletes balance academics, athletic training and
    competition. This allows CEGEPs to offer adapted educational services to students; those in a high school Sport-Études
    program who wish to continue with their sport and studies may find this partnership beneficial.</p>
    <div class="image-label">
      <img loading="lazy" class="xsmall-img" src="/assets/whatiscegep/alliance-sport-etudes.webp"
          alt="Alliance Sport-Études brand and logo">
      <p class="caption">Brandmark and crest images &#169; Alliance Sport-Études</p>
    </div>
    <p><strong>Field Trips</strong> — many CEGEPs offer field trips to all students, or to students of a certain program. Research your colleges and programs of interest carefully for more information.</p>
    <p><strong>English and French programs/exchanges</strong> — some CEGEPs offer a certain program that you can take in a mix of English and French, which usually involves taking some
    courses at a French CEGEP. Similarly, certain colleges offer a bilingual exchange where students complete a semester at
    a French CEGEP. Research your colleges and programs of interest carefully for more information.</p>
    <p><strong>Exchange programs</strong> — some CEGEPs have international exchange programs that allow you to visit and study in another country. Research your
    colleges and programs of interest carefully for more information.</p>
    <p class="sources">Sources: <a href="https://alliancesportetudes.ca/en/alliance-sport-etudes/about/">Alliance Sport-Études</a>, <a href="/cegep-links">various CEGEP sites</a></p>
  </div>

  <Pagination {section} {previous} {next} />
</section>