<script>
  import SideNav from '../../../components/SideNav.svelte';
  import Pagination from '../../../components/Pagination.svelte';
  import { WhatIsCegep } from '../../../sectionPages';

  const pages = WhatIsCegep, section = 'What is CEGEP', previous = WhatIsCegep[3].link, nextSection = 'Applying to CEGEP', next = '/applyingtocegep';

  const chapters = [
    {
      name: 'Alternatives to CEGEP',
      link: 'alternatives-to-cegep',
    },
    {
      name: 'CEGEP First Year to University',
      link: 'cegep-first-year-to-university',
    },
    {
      name: 'DEP/DVS Programs',
      link: 'dep-dvs-programs',
    },
    {
      name: 'Grade 12 Program',
      link: 'grade-12-program',
    }
  ]
</script>

<svelte:head>
  <meta name="description" content="Learn about alternatives to CEGEP education" />
  <title>Alternatives to CEGEP | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {previous} {nextSection} {next} />

  <div id={chapters[0].link}>
    <h2 class="lightblue-bg">{chapters[0].name}</h2>
    <p>Quebec's education system offers many options when it comes to study programs. There isn't, unfortunately, a single list
    that contains all programs and educational institutions, but the link below provides some helpful sites you'll want to
    visit to explore your options:</p>
    <p><a href="http://www.education.gouv.qc.ca/en/references/studying-in-quebec/steps-to-take-to-study-in-quebec/" target="_blank">Ministère de l'Éducation — Studying in Quebec</a></p>
    <p>This page will only give a brief overview of the following three options, but we encourage you to research in more depth
    if you think CEGEP may not be for you:</p>
    <ul class="ul-blue">
      <li>CEGEP first year to university</li>
      <li>DEP/DVS programs</li>
      <li>Grade 12 Program</li>
    </ul>
  </div>
  
  <div id={chapters[1].link}>
    <h2 class="yellow-bg">{chapters[1].name}</h2>
    <p>This isn't necessarily an alternative to CEGEP itself, but rather another pathway. Some out-of-province universities
    accept Quebec students who've completed their first year of CEGEP, though <strong>most universities in Quebec do not have this option</strong>.</p>
    <p>Normally, Quebec students who complete a pre-university program in CEGEP, a university bachelor's degree takes 3 years
    to complete instead of the traditional 4 years for other provinces and/or countries (<em>this duration may vary for
    different university majors</em>). If you choose to apply to university after completing only one year of CEGEP, the duration
    of a bachelor's degree becomes 4 years (<em>may vary based on major</em>), provided those universities accept first-year CEGEP
    students.</p>
    <p><em>To learn more about this path, research your universities and majors (university programs) of interest.</em></p>
    <p class="sources">Sources: various university websites</p>
  </div>

  <div id={chapters[2].link}>
    <h2 class="lightblue-bg">{chapters[2].name}</h2>
    <p>A DEP program leads to a <em>diplôme d'études professionnelles</em> (DEP), or a diploma of vocational studies (DVS) in English.
    They're training programs that lead directly to the job market and are offered by vocational/trade schools (as well as
    some private colleges) in Quebec.</p>
    <p><strong>DEP programs are between 600 and 1800 hours in duration.</strong></p>
    <p>There are actually three official diplomas that can be awarded for vocational training:</p>
    <ul class="u-blue">
      <li>DVS, Diploma of Vocational Studies</li>
      <li>AVS, Attestation of Vocational Specialization</li>
      <li>STC, Skills Training Certificate</li>
    </ul>
    <p><strong>A few links to help you with your research:</strong></p>
    <p>LaSalle College, <a href="https://www.lasallecollege.com/futur-students/faq/diploma" target="_blank">Diploma FAQ</a></p>
    <p>LaSalle College, <a href="https://www.lasallecollege.com/futur-students/faq/admission" target="_blank">Admission FAQ</a></p>
    <p>The following link has some helpful sites and lists that you can use to research different types of post-secondary
    education and educational institutions in Quebec: <a href="http://www.education.gouv.qc.ca/en/references/studying-in-quebec/steps-to-take-to-study-in-quebec/" target="_blank">Ministère de l'Éducation, Studying in Quebec</a></p>
    <p class="sources">Sources: <a href="http://www.education.gouv.qc.ca/en/references/studying-in-quebec/steps-to-take-to-study-in-quebec/">Quebec Ministry of Education</a>, links provided above</p>
  </div>

  <div id={chapters[3].link}>
    <h2 class="yellow-bg">{chapters[3].name}</h2>
    <p>A select few private schools in Quebec offer a pre-university grade 12 program. Names of such a program vary with
    different schools, but a grade 12 program allows Quebec students to obtain an Ontario high school diploma (OSSD, Ontario
    Secondary School Diploma), often through <a href="https://www.virtualhighschool.com/" target="_blank">Virtual High School</a>, to then apply directly to university following graduation.
    Here's a list of schools that currently offer a grade 12 program (<em>there may be more</em>):</p><br>
    <p><strong>Lower Canada College (LCC)</strong></p>
    <div class="image-label">
      <img class="logo-img" src="/assets/whatiscegep/lcc-logo.webp"
          alt="Lower Canada College logo">
      <p class="caption">Brandmark and crest &#169; Lower Canada College</p>
    </div>
    <ul class="ul-blue">
      <li>Private high school in Montreal</li>
      <li>Website: <a href="https://www.lcc.ca/" target="_blank">https://www.lcc.ca/</a></li>
      <li><a href="https://www.lcc.ca/academics/pre-university-12" target="_blank">Pre-University (12)</a></li>
    </ul><br>
    <p><strong>The Sacred Heart School of Montreal</strong></p>
    <div class="image-label">
      <img class="xsmall-img" src="/assets/whatiscegep/sacred-heart-logo.svg"
          alt="Sacred Heart School of Montreal logo">
      <p class="caption">Brandmark and crest &#169; Sacred Heart School</p>
    </div>
    <ul class="ul-blue">
      <li>Private girls' high school in Montreal</li>
      <li>Website: <a href="https://www.sacredheart.qc.ca/" target="_blank">https://www.sacredheart.qc.ca/</a></li>
      <li><a href="https://www.sacredheart.qc.ca/grade-12/" target="_blank">Sacred Heart Grade 12 (OSSD) program</a></li>
    </ul><br>
    <p><strong>Kells Academy</strong></p>
    <div class="image-label">
      <img class="logo-img" src="/assets/whatiscegep/kells-logo.webp"
          alt="Kells Academy logo">
      <p class="caption">Brandmark and crest &#169; Kells Academy</p>
    </div>
    <ul class="ul-blue">
      <li>Private high school in Montreal</li>
      <li>Website: <a href="https://kells.ca/index.php" target="_blank">https://kells.ca/index.php</a></li>
      <li><a href="https://kells.ca/index.php?Itemid=302" target="_blank">Grade 12 Program</a></li>
    </ul><br>
    <p><strong>TAV College</strong></p>
    <div class="image-label">
      <img class="logo-img" src="/assets/whatiscegep/tav-logo.webp" alt="TAV College logo">
      <p class="caption">Brandmark &#169; TAV College</p>
    </div>
    <ul class="ul-blue">
      <li>Private college in Montreal</li>
      <li>Website: <a href="https://www.tav.ca/" target="_blank">https://www.tav.ca/</a></li>
      <li><a href="https://www.tav.ca/grade-12/" target="_blank">Grade 12 Study Option</a></li>
    </ul>
  </div>

  <Pagination {section} {previous} {nextSection} {next} />
</section>