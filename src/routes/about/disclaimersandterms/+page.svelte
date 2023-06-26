<script>
  import SideNav from "../../../components/SideNav.svelte";
  import Pagination from "../../../components/Pagination.svelte";
  import Disclaimer from "../../../components/Disclaimer.svelte";
  import { AboutQuetudesInfo } from "../../../sectionPages";

  const pages = AboutQuetudesInfo, section = 'About QUÉtudes-info', prevSection = 'Useful Links', previous = '/usefullinks/resources', next = AboutQuetudesInfo[1].link;

  const chapters = [
    {
      name: 'Disclaimers and Terms of Use',
      link: 'disclaimers-and-terms-of-use',
    }
  ]
</script>

<svelte:head>
  <meta name="description" content="Important legal statements on QUÉtudes-info's copyright, liability, affiliations and more" />
  <title>Disclaimers and Terms | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {prevSection} {previous} {next} />

  <div id={chapters[0].link}>
    <h2 class="salmon-bg">{chapters[0].name}</h2>
    <Disclaimer>By using the QUÉtudes-info website, you agree that you have read, understood, and accepted the rules outlined below. Please note that the rules described here may change at any given time.</Disclaimer>

    <ol>
      <li>The QUÉtudes-info site's <strong>prose content</strong> (all texts and assets) is licensed under the <strong><a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-SA 4.0 license</a></strong>; the <strong>source
      code</strong> of the QUÉtudes-info website is licensed under the <strong><a href="https://www.mozilla.org/en-US/MPL/2.0/" target="_blank">MPL 2.0 license</a></strong>. <em><a href="https://github.com/cw118/quetudesinfo/blob/main/LICENSE.md" target="_blank">Read the full licenses here.</a></em></li>
      <li>QUÉtudes-info is <strong>not</strong> an official site, nor does it claim to be one.</li>
      <li>QUÉtudes-info is <strong>not</strong> affiliated with anyone, any school, any organization or any website that is mentioned.</li>
      <li>QUÉtudes-info's content does <strong>not</strong> come from a professional or a school official. Nothing on the QUÉtudes-info site is
      meant to be a substitute for the services of education and administrative professionals.</li>
      <li>QUÉtudes-info's goal is to inform students and parents through the presentation of objective information:
        <ol class="inner">
          <li>This website communicates mostly facts and statistics, provides the occasional commentary, but never conveys any
          information in a criticizing fashion;</li>
          <li>This website serves as a starting point for students and parents looking to learn about CEGEP, and makes a point to
          transform and cite reproduced content if possible, as well as direct its users to official sites.</li>
        </ol>
      </li>
      <li><strong>QUÉtudes-info trademarks are protected by copyright.</strong> Marks such as, but not limited to logos, icons, and banners are the
      <strong>property of and are reserved for exclusive use by QUÉtudes-info</strong>.</li>
      <li>QUÉtudes-info and its contributors are <strong>not responsible</strong> for any outcomes that may result from the use of the
      QUÉtudes-info site, such as rejection from a college.</li>
      <li>The QUÉtudes-info site includes links to external websites created by other organizations, and by clicking on these
      links, the user leaves QUÉtudes-info; QUÉtudes-info has <strong>no control</strong> over and bears <strong>no responsibility</strong> for the legality or
      content of the external site, or for that of subsequent links.</li>
      <li>Information such as, but not limited to deadlines, lists of programs, CEGEP and program descriptions on QUÉtudes-info <strong>cannot be fully guaranteed to be accurate and/or up-to-date</strong>.</li>
    </ol>
  </div>

  <Pagination {section} {prevSection} {previous} {next} />
</section>

<style>
  ol.inner {
    list-style-type: lower-alpha;
  }
</style>