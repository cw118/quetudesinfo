<script>
  import SideNav from "../../components/SideNav.svelte";
  import Pagination from "../../components/Pagination.svelte";
  import Disclaimer from "../../components/Disclaimer.svelte";
  import { ApplyingToCegep } from "../../sectionPages";

  const pages = ApplyingToCegep, section = 'Applying to CEGEP', prevSection = 'What is CEGEP', previous = '/whatiscegep/alternativestocegep', next = ApplyingToCegep[1].link;

  const chapters = [
    {
      name: 'Applying to CEGEP',
      link: 'applying-to-cegep',
    },
    {
      name: 'Admissions: Evaluating Applicants',
      link: 'admissions-evaluating-applicants',
    },
    {
      name: 'Conditional Acceptance',
      link: 'conditional-acceptance',
    }
  ]
</script>

<svelte:head>
  <meta name="description" content="A brief overview of CEGEP applications and admissions" />
  <title>Applying to CEGEP | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {prevSection} {previous} {next} />

  <div id={chapters[0].link}>
    <h2 class="skyblue-bg">{chapters[0].name}</h2>
    <Disclaimer>Please note that the pages in this section contain general guidelines, and that following them does <strong>not</strong> guarantee any outcomes, including but not
        limited to successful completion of an application, successful submission of an application, admission to a college,
        etc.</Disclaimer>
    <p>Applying to CEGEP is an exciting but perhaps stressful occasion for all students. It can be tricky to decide what
    programs to apply to at various colleges, figuring out what documents you need and what fees to pay. Then on top of all that,
    most CEGEPs use different application modules, which means a different application process for nearly every CEGEP!</p>
    <p>In the <strong>Applying to CEGEP</strong> section, we'll cover everything you need to know: we'll look at the steps of numerous application processes using
    different modules, provide some tips and resources, remind you of important dates and deadlines, and more. This specific page will focus on CEGEP admissions and how applications are evaluated.</p>
    <p>If you're a high school student, you'll want to apply for the Fall semester in the Day Division (regular day programs),
    which is exactly what this section will go over. Here's a rough outline of what an application process typically
    involves:</p>
    <ul class="ul-blue">
      <li>Choose some programs of interest</li>
      <li>Find which CEGEPs offer your programs of interest, learn about their school community, resources, finances, etc.</li>
      <li>Fall and/or Winter: Visit CEGEPs for open houses and/or information sessions (virtual or in-person) and get to know the
      colleges more
        <ul class="inner">
          <li>You can also sign up for Student-for-a-Day, which allows you to visit several college classes, meet some faculty, and
          get a feel of what it's like to be a student at a CEGEP.</li>
        </ul>
      </li>
      <li>When application modules open (January for the Fall semester): begin college applications</li>
      <li>Keep track of deadlines (March 1 application deadline for Fall semester)</li>
      <li>Complete and submit applications: ensure all necessary documents were sent in, then wait for results</li>
    </ul>
    <hr>
    <p><strong>Want to learn more about CEGEP and CEGEP programs before learning how to apply?</strong> See the <strong><a href="/whatiscegep">What is CEGEP</a></strong> section.</p>
    <p><strong>Want to find out how to apply to various CEGEPs straight away?</strong> Skip to <strong><a href="/applyingtocegep/applicationmodules">Application Modules</a>.</strong></p>
  </div>

  <div id={chapters[1].link}>
    <h2 class="yellow-bg">{chapters[1].name}</h2>
    <Disclaimer> Disclaimer: This section does not describe the exact process taken by any CEGEP admissions team and is meant to give a
    general idea of how you may be evaluated in comparison to other applicants.</Disclaimer>
    <p>When CEGEPs evaluate applicants, they generally only look at secondary 4 and 5 marks. Since secondary 5 students apply to CEGEP before they've completed the school year, CEGEPs will first consider term 1 grades upon receiving applications; term 2 grades will then be verified after the end of the school year (more on this in <a href="#conditional-acceptance">Conditional Acceptance</a>).</p>

    <p>It's important to note that <strong>admissions criteria and calculations tend to change from year to year</strong>. To learn more about the criteria that will apply to your cohort, consult official CEGEP sites, contact admissions teams, and/or discuss with your school's guidance counsellor.</p>
    <h3 class="lightyellow-bg mb-1">What CEGEPs see</h3>
    <p>CEGEPs consider students' grades and compare them to the class/group average. For most programs, your grades will also
    be compared to cutoffs (minimum required averages and grades, vary based on program). Below is an image depicting what
    admissions teams see:</p>
    <img src="/assets/cegep-hsgrades.png" class="xsmall-img" alt="Table with school code, student permanent code, course code, grade earned, and class or group average">
    <p>The permanent code is a unique identifier assigned to each Quebec student, consisting of a 12 character code that is
    found on report cards and achievement records. The course code is a 6 character code representing a course, such as
    132506 for <em>Français langue seconde, enrichi</em>.</p>

    <h3 class="mb-2" id="sram-admissions">SRAM: Vanier, John Abbott, Champlain Lennoxville, Heritage</h3>
    <p><em>SRAM stands for Service régional d'admission du Montréal métropolitain, and students can apply to several CEGEPs through
    SRAM. See <a href="/applyingtocegep/applicationmodules">Application Modules</a> for more details.</em></p>
    <div class="image-label">
      <img src="https://admission.sram.qc.ca/static/sram/hibou_transp.png" class="logo-img" alt="SRAM logo">
      <p class="caption">Brandmark &#169; SRAM</p>
    </div>
    
    <p>SRAM-affiliated CEGEPs use <strong>ranking lists</strong> when evaluating applications to determine the eligibility of applicants, to
    compare them to one another, and to select the best-suited candidates for limited enrolment programs. <em>To see how SRAM determines these rankings, <a href="https://sram.qc.ca/frequently-asked-questions" target="_blank">visit their FAQ</a>.</em></p>
    <h3 class="mb-1 lightyellow-bg">Other CEGEPs</h3>
    <p>Other CEGEPs calculate varying averages, such as an overall average, when evaluating applicants. For more details on this, try contacting the admissions teams, asking during information sessions, and/or talking to your guidance counsellor. <em>You can also try consulting the CEGEP websites, which can be found at <a href="/cegep-links" target="_blank">CEGEP Links</a>.</em></p>
  </div>

  <div id={chapters[2].link}>
    <h2 class="yellow-bg">{chapters[2].name}</h2>
    <p>CEGEPs look at <strong>all of your secondary 4 and 5 grades, including the final term of secondary 5</strong> <em>(typically the third term
    in normal circumstances, but in recent years it has been the second term)</em>. But how exactly does this work if you don't
    even have those marks when you submit your applications?</p>
    <p>Once you get accepted at a CEGEP, you're offered a spot under something called <strong>conditional acceptance</strong>. Conditional
    acceptance means that <u>there are still requirements, or conditions, that you must fulfill by the end of the school year
    for your acceptance to be finalized</u>. In other words, your final high school grades must also meet the requirements and
    you must complete all of your college program prerequisites in order to keep your spot at a CEGEP.</p>
    <p><em>(You can learn more about this in <a href="/applyingtocegep/afterapplying">After Applying</a>.)</em></p>
    <p class="sources">Sources: <a href="https://sram.qc.ca/frequently-asked-questions">SRAM FAQ</a>, documents from various high schools, notes from previous CEGEP information sessions</p>
  </div>

  <Pagination {section} {prevSection} {previous} {next} />
</section>