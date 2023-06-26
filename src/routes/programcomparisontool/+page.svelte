<script>
  import Disclaimer from "../../components/Disclaimer.svelte";
  import Collapse from "../../components/compare-programs/Collapse.svelte";
  import CompareTool from "../../components/compare-programs/CompareTool.svelte";
  import SideNav from "../../components/SideNav.svelte";
  import Pagination from "../../components/Pagination.svelte";
  import { ProgramComparisonTool } from "../../sectionPages";

  const pages = ProgramComparisonTool, section = 'Program Comparison Tool', prevSection = 'Applying to CEGEP', previous = '/applyingtocegep/afterapplying', nextSection = 'Useful Links', next = '/usefullinks/cegeplinks';

  const chapters = [
    {
      name: 'Program Comparison Tool',
      link: 'program-comparison-tool',
    },
    {
      name: 'Compare CEGEP Programs',
      link: 'compare-cegep-programs',
    }
  ]
</script>

<svelte:head>
  <meta name="description" content="Compare pre-university programs offered at 8 English CEGEPs side-by-side in detail" />
  <title>Program Comparison Tool | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {prevSection} {previous} {nextSection} {next} />

  <div id={chapters[0].link}>
    <h2 class="goldenrod-bg"><i class="fas fa-balance-scale-left"></i> Program Comparison Tool</h2>
    <Disclaimer>This tool may not work in certain browsers
      (Internet Explorer version 9 and earlier, Safari version 12 and earlier...) or on certain mobile devices
      (laptops/desktops are recommended) due to some unsupported functionality. The alternative would be to visit
      the official CEGEP sites and to read their viewbooks, the links to which are listed on the <a href="/usefullinks/cegeplinks">CEGEP Links</a>
      page. QUÉtudes-info apologizes for any inconvenience this may cause.
    </Disclaimer>
    <p>The <strong><a class="link-darkblue" href="#tool">Program Comparison Tool</a></strong> allows you to
      select two CEGEP programs and compare their <strong>prerequisites, cutoffs and
        other admission requirements</strong> side-by-side, as well as their <strong>program grids</strong>: all of the
      program-specific credits students must
      obtain over the course of the program. <em>At the moment, the tool only has data for pre-university
        programs at 8 colleges, but you can find the CEGEP viewbooks at <a href="/usefullinks/cegeplinks">CEGEP Links</a>, where
        all of a CEGEP's programs are presented in detail.</em></p>
  </div>

  <div class="accordion" id="progtool-accordion">
    <Collapse title='CEGEP graduation requirements' collapseId="one">
      <p><strong>All CEGEP programs require completion of the General
          Education Component and of ministerial requirements, which includes the
          following credits</strong> (credit <u>categories</u>) <strong>and evaluations:</strong></p>
      <ul>
        <li><strong>English:</strong> Introductory course (603-101-MQ), Literary genres (603-102-MQ), Literary
          themes (603-103-MQ), Communication (program-adapted course)
          <ul class="inner ul-blue">
            <li>Students may be required to take a preparatory course (603-001) first</li>
            <li>Students tend to begin with English 101 <em>(depending on the college, the remaining three
                English courses may not have to be taken in any specific order)</em></li>
            <li>Once English 101 and 102 are completed, and English 103 has been completed or is in-progress,
              the student is eligible for the <u>English Exit Exam</u></li>
            <li>The program-adapted course is taken last</li>
          </ul>
        </li>
        <li><strong>French:</strong> general course, program-adapted course
          <ul class="inner ul-blue">
            <li>The general course is taken first</li>
          </ul>
        </li>
        <li><strong>Humanities:</strong> Knowledge (345-101-MQ), World Views (345-102-MQ), Ethics
          (program-adapted course)
          <ul class="inner ul-blue">
            <li>The three Humanities courses should be taken in this order</li>
          </ul>
        </li>
        <li><strong>Physical Education:</strong> 109-101-MQ, 109-102-MQ, 109-103-MQ
          <ul class="inner ul-blue">
            <li>The three PE courses should be taken in this order</li>
          </ul>
        </li>
        <li><strong>Two complementary courses</strong></li>
        <li><strong>English Exit Exam</strong></li>
        <li><strong>Comprehensive Assessment (Épreuve Synthèse)</strong>
          <ul class="inner ul-blue">
            <li>Often completed as part of an Integrative Project</li>
          </ul>
        </li>
        <li>(**French Exit Exam as of May 2021, more information to come)</li>
      </ul>
    </Collapse>
    <Collapse title="How the tool works" collapseId="two">
      <p id="tool-instructions"><strong>How the tool works:</strong> Select a CEGEP from the first dropdown
        menu, then type or
        select a program from the menu below that <em>(the type/select menu won't activate until you choose a
          CEGEP)</em>.
        The program information, including admissions requirements and the program grid, will be generated then displayed beneath
        the dark blue line under both menus. Clear the textbox to select another program (you may also select another college).
        Repeat the process for the second CEGEP program using the second set of menus.</p>
      <p><strong>Note that general CEGEP entrance requirements</strong> (basic prerequisites for all CEGEP
        programs)
        <strong>are the Quebec Secondary School diploma requirements. See <a
            href="/whatiscegep#quebecs-education-system" target="_blank">What is CEGEP — Quebec's Education
            System</a> for more information.</strong>
      </p>
      <p class="tool-disclaimer"><i class="fas fa-info-circle"></i> The Program Comparison Tool was first
        created in August
        2021 and only has data for pre-university programs at 8
        colleges, but you can find the CEGEP viewbooks, where technical programs are presented in detail, at <a
          href="/usefullinks/cegeplinks" target="_blank">CEGEP Links</a>.
        <strong><u>The official sites and documents should always be consulted for the most accurate and
            up-to-date information.</u></strong>
      </p>
    </Collapse>

    <CompareTool title={chapters[1].name} anchor={chapters[1].link} />

    <div class="footnotes">
      <p class="note"><i class="fas fa-info-circle"></i> Most double DEC programs require the completion of two
        comprehensive assessments, one for each
        program/discipline of the
        double DEC. Consult official websites, viewbooks, and/or brochures for details.</p>
      <p class="sources">Sources: <a href="/usefullinks/cegeplinks">official CEGEP websites, viewbooks, program brochures
          and more</a>
      </p>
    </div>
  </div>

  <Pagination {section} {prevSection} {previous} {nextSection} {next} />
</section>

<style>
#program-comparison-tool {
  padding: 15px;
  font-size: 20px;
}

#program-comparison-tool p {
  padding: 0px 10px;
}

@media screen and (max-width: 767px) {
  #program-comparison-tool p {
    font-size: 18px;
  }
}

#program-comparison-tool ul li {
  line-height: 1.6;
}

.footnotes {
  padding: 15px 0px 10px;
}

.footnotes p {
  margin-bottom: 5px;
}
</style>