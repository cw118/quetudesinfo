<script>
  import SideNav from '../../components/SideNav.svelte';
  import Pagination from '../../components/Pagination.svelte';
  import { WhatIsCegep } from '../../sectionPages';

  const pages = WhatIsCegep, section = 'What is CEGEP', next = WhatIsCegep[1].link;

  const chapters = [
    {
      name: 'What is CEGEP?',
      link: 'what-is-cegep',
    },
    {
      name: 'Quebec\'s Education System',
      link: 'quebecs-education-system',
    },
    {
      name: 'Diploma of Collegial Studies',
      link: 'diploma-of-collegial-studies',
    },
    {
      name: 'Studying at CEGEP',
      link: 'studying-at-cegep',
    }
  ]
</script>

<svelte:head>
  <meta name="description" content="Learn about CEGEP and the Quebec education system" />
  <title>What is CEGEP? | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {next} />

  <div id={chapters[0].link}>
    <h2 class="lightblue-bg">{chapters[0].name}</h2>
    <p><strong>CEGEP</strong> <em>(also written as CÉGEP, cegep, cégep, etc.)</em>, short for <strong>"Collège d'enseignement général et professionnel"</strong>, is a
    type of post-secondary institution exclusive to Québec's education system. CEGEP is also often referred to
    as <strong>college</strong>. There are roughly 100 CEGEPs in the province, though only a select
    few offer English instruction.</p>
    <p>The first year of CEGEP is equivalent to Grade 12 in other Canadian provinces (also equivalent to <i lang="fr">terminale</i> in France). The second year of a <a href="/whatiscegep/programs#pre-university-programs">pre-university program in CEGEP</a> is often considered equivalent to year 1 of university, while the second and third year of a <a href="/whatiscegep/programs#career-and-technical-programs">career/technical program in CEGEP</a> is equivalent to a college program in other provinces like Ontario.</p>
    <p class="label">Cégep de Saint-Laurent</p>
    <img class="small-img" src="https://live.staticflickr.com/3304/3659476364_cbb1427731_b.jpg" alt="Cégep de Saint-Laurent, by Denis-Carl Robidoux">
    <p class="citation">Photo by Denis-Carl Robidoux, <a href="https://creativecommons.org/licenses/by-nc/2.0/?ref=ccsearch&atype=rich">CC BY-NC 2.0 licence</a>.</p>
    <p>Internationally recognized for their high-quality education, CEGEPs provide a tight-knit and stimulating learning
    environment for students. Studying in a CEGEP is not only a chance for you to study what truly interests you, but also
    to participate in student life, meet new people, and experience more freedom. CEGEP will open many doors for you: it'll
    prepare you for higher education and for entering the workforce.</p>
    <p class="sources">Sources: <a href="https://www.sram.qc.ca/international-student/why-come-to-quebec-to-study-in-a-cegep">SRAM</a>, <a href="https://fedecegeps.ca/en/what-is-a-cegep/">Fédération des cégeps</a>, <a href="https://www.mtlblog.com/5-reasons-why-cegep-is-the-most-important-time-of-your-life/1-it-allows-you-to-choose-what-you-want-to-do">MTL Blog</a></p>
  </div>

  <div id={chapters[1].link}>
    <h2 class="yellow-bg">{chapters[1].name}</h2>
    <p>The minimum* requirement for CEGEP is a Quebec SSD (secondary school diploma). An SSD requires at least 54 credits in Secondary IV and V, where at least 20 credits must be from Secondary V <em>(or vocational training)</em>. Students must also pass all of the following:</p>
    <ul class="ul-blue">
        <li>Secondary V language of instruction (English or French), 6 credits</li>
        <li>Secondary V second language (French or English), 4 credits (at least)</li>
        <li>Secondary IV Mathematics, 4 credits (at least)</li>
        <li>Secondary IV Science and Technology (ST) <strong>or</strong> Applied Science and Technology (AST), 4 credits</li>
        <li>Secondary IV History and Citizenship Education, 4 credits</li>
        <li>Secondary IV Arts Education, 2 credits</li>
        <li>Secondary V Ethics and Religious Culture or Physical Education and Health, 2 credits</li>
    </ul>
    <p>Notice that only credits and grades from Secondary IV and Secondary V are considered for your diploma, as is the case
    with CEGEP applications. <em>*Please note that many CEGEP programs have prerequisites beyond a secondary school diploma. For more details, see <a href="/whatiscegep/programs">Programs</a>.</em></p>
    
    <p class="label">Quebec youth sector Achievement Record</p>
    <img class="xsmall-img" src="/assets/achievement-record.png" alt="Quebec achievement record sample">
    <p class="citation">From "Achievement Record" by Ministère de l'Éducation et Ministère de l'Enseignement supérieur. Copyright by Gouvernement du Québec, 2021.</p>
    
    <p>Read the UN column on your Achievement Record, or the Credits row on your high school report card (final term), to check the number of credits you obtain from a particular course. You can also look at the course code's last digit. This works for
    both three-digit (typically used) and six-digit (often seen on student schedules and report cards) codes. Here are some
    common examples:</p>
    <ul class="ul-blue">
        <li>Math 42<strong>6</strong> = secondary 4 scientific math, 6 credits
            <ul class="inner">
                <li>This course code may also be seen as 565<strong>4</strong>2<strong>6</strong> (the six-digit code), in which case the fourth digit represents the grade level and the last digit still indicates the number of credits</li>
            </ul>
        </li>
        <li>Français 40<strong>6</strong> = secondary 4 enriched FSL (French as a second language), 6 credits</li>
        <li>History 40<strong>4</strong> = secondary 4 history, 4 credits</li>
        <li>Science and Technology 44<strong>4</strong> = secondary 5 science, 4 credits
            <ul class="inner">
                <li>May be seen as 555<strong>4</strong>4<strong>4</strong></li>
            </ul>
        </li>
        <li>Environmental Science and Technology 40<strong>4</strong> = secondary 4 environmental science (EST), 4 credits
            <ul class="inner">
                <li>May be seen as 558<strong>4</strong>0<strong>4</strong></li>
                <li>Sometimes written as Environnemental Science and Technology</li>
                <li>EST is the prerequisite science course for Physics and Chemistry</li>
            </ul>
        </li>
        <li>English 40<strong>6</strong> = secondary 4 English Language Arts (ELA), 6 credits</li>
        <li>Ethics 50<strong>2</strong> = secondary 5 Ethics and Religious Culture (ERC), 2 credits</li>
    </ul>
    <p>Students have the choice of applying to pre-university programs (usually two years) or career programs (usually three
    years) for CEGEP. Here's a diagram overview of the Quebec school system from <a href="https://www.cegepsquebec.ca/en/" target="_blank">Cégeps du Québec</a>:</p>
    <img loading="lazy" class="small-img" src="https://www.cegepsquebec.ca/wp-content/uploads/2019/03/SCHEMA_EN.svg" alt="Diagram of Quebec School System">
    <p class="citation">From "Quebec School System" by Cégeps du Québec. Copyright by Cégeps du Québec, 2019.</p>
    <p>The type of college program you apply to will depend on several factors. CEGEP programs are explained in more depth later in <a href="/whatiscegep/programs">Programs</a>.</p>

    <p class="sources">Sources: <a href="http://www.education.gouv.qc.ca/en/students/report-cards-transcripts-diplomas/achievement-record/">Quebec Ministry of Education</a>, various course outlines and student schedules</p>
  </div>

  <div id={chapters[2].link}>
    <h2 class="lightblue-bg">{chapters[2].name}</h2>
    <p>In order to graduate and receive a diploma of Collegial Studies (DCS) from an English CEGEP, students must
    minimally meet the following General Education and complementary course requirements:</p>
    <ul class="ul-blue">
        <li>Four English courses</li>
        <li>Two French courses</li>
        <li>Three Humanities courses</li>
        <li>Three Physical Education courses</li>
        <li>Two complementary courses
            <ul class="inner">
                <li>A complementary (course), unlike electives, are courses that students must take and select from disciplines outside those
                used in their program areas of study.</li>
            </ul>
        </li>
    </ul>
    <p>In addition, CEGEP students must pass the English Exit Exam* (Épreuve uniforme de langue), and complete a Comprehensive
    Assessment/Exam (Épreuve synthèse) which evaluates their mastery of program objectives. The format of the latter
    evaluation is specified by the individual programs; depending on the college and program, the Comprehensive Assessment could be a project or portfolio of some sort. College students should receive specifications for this assessment when it is time for them to begin and complete it.</p>
    <p>Students will also follow a specific education pattern, completing various concentration courses as per their program
    requirements. For example, Science students must take certain Physics, Chemistry and Biology courses that may not be
    required of Arts students—more on this in the <a href="/whatiscegep/programs">Programs section of the site</a>.</p>
    <p>Furthermore, meeting these DCS requirements does not necessarily mean that a student will have satisfied conditions for
    university admission. Students should verify university admission criteria with an academic advisor and/or online to
    ensure they obtain all university prerequisites.</p><br>
    <p><em>*As of May 13, 2021, Bill 96 requires students of anglophone colleges to pass a French Exit Exam as well, but the
    application of such an evaluation has not yet been determined or announced.</em></p>

    <p class="sources">Sources: <a href="https://www.dawsoncollege.qc.ca/registrar/academic-standing/graduation-requirement/">Dawson College Registrar</a>, <a href="http://www.education.gouv.qc.ca/en/contenus-communs/enseignement-superieur/college-education/">Quebec Ministry of Higher Education</a>, <a href="https://www.vaniercollege.qc.ca/social-science/program-comprehensive-assessment/">Vanier College Social Science</a>, <a href="https://www.vaniercollege.qc.ca/liberal-arts/after-i-graduate/graduation-requirements/comprehensive-assessment/">Vanier College Liberal Arts</a></p>
  </div>

  <div id={chapters[3].link}>
    <h2 class="yellow-bg">{chapters[3].name}</h2>
    <p class="label">Industrial Electronics at Vanier College</p>
    <img loading="lazy" class="small-img" src="https://live.staticflickr.com/8338/8247775358_967c54b62c.jpg"
            alt="Vanier College Industrial Electronics">
    <p class="citation">Photo by Vanier College, <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/?ref=ccsearch&atype=rich">CC BY-NC-ND 2.0 licence</a>.</p>
    <p>Each year at CEGEP is split into two 16-week semesters, Fall and Winter. The fall semester begins in late August and
    ends in December (including final exam period), while the winter semester starts around mid-January and ends in May. Each college's academic calendar is slightly different and specifies the various blocks of the school year.</p>
    <p>Each semester, students will follow a weekly class schedule resembling university schedules, for which they can select
    courses and/or class times. A schedule might look something like this:</p>
    <img class="figure" src="/assets/sample-commerce-schedule.png" alt="Sample college schedule of a Commerce student">
    <p>For each term, there are midterm exams (October, March) and final exams (December, May). There may also be a shorter
    summer term available (around June to August) for students wishing to retake a failed course, complete DCS (college
    diploma) requirements, or to meet university prerequisites. The passing grade remains 60% for college courses.</p>
    <p>CEGEP has a much faster pace compared to high school, so while college does offer more freedom and choices, it also
    comes with more responsibility and independence.</p>
    <p class="sources">Sources: <a href="https://www.quebec.ca/en/education/cegep/studying/overview">Quebec Ministry of Education</a>, <a href="https://www.sram.qc.ca/diploma-of-college-studies/summer-courses">SRAM</a></p>
  </div>
  
  <Pagination {section} {next} />

</section>