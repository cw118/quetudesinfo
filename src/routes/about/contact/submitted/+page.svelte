<script>
  import SideNav from "../../../../components/SideNav.svelte";
  import Pagination from "../../../../components/Pagination.svelte";

  const pages = [
    {
      name: "Contact Me",
      link: "/about/contact"
    }
  ]
  const section = 'Contact Me';

  const chapters = [
    {
      name: 'Contact Me: Message Submitted',
      link: 'contact-me-message-submitted',
    },
    {
      name: 'Sitemap',
      link: 'sitemap',
    }
  ]
</script>

<svelte:head>
  <title>Message Submitted | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} />

  <div id={chapters[0].link}>
    <h2 class="cadetblue-bg">{chapters[0].name}</h2>
    
    <div class="alert alert-success">
      <i class="fa-solid fa-circle-check"></i>&nbsp;&nbsp;Your message was successfully submitted and we'll get back to you as soon as possible.
      Thanks for visiting QUÉtudes-info!
    </div>
  </div>

  <div id={chapters[1].link}>
    <h2 class="salmon-bg">{chapters[1].name}</h2>
    <table class="table table-striped table-hover table-bordered text-center">
      <tbody>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/">Home</a></th>
          <td>Welcome! If you're not sure where to begin, the homepage suggests some starting points.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/faq">FAQ</a></th>
          <td>Find answers to commonly-asked questions concerning CEGEP (FAQ) and a simple sitemap.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/whatiscegep">What is CEGEP</a></th>
          <td>Overview of Quebec's education system and what CEGEP is.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/whatiscegep/programs">Programs</a></th>
          <td>In-depth explanations of important vocabulary and introduction to the basics of CEGEP programs.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/whatiscegep/englishcegeps">English CEGEPs</a></th>
          <td>Concise list and descriptions of CEGEPs offering English instruction.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/whatiscegep/therscore">The R-Score</a></th>
          <td>Detailed dissection of CEGEP R-Scores, their purpose, and what we know about R-Score calculations.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/whatiscegep/alternativestocegep">Alternatives to CEGEP</a></th>
          <td>Brief rundown of post-secondary alternatives (options other than CEGEP).</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/applyingtocegep">Applying to CEGEP</a></th>
          <td>Explanation of CEGEP admissions and introduction to CEGEP applications.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/applyingtocegep/choosingacegepandprogram">Choosing a CEGEP and Program</a></th>
          <td>Tips on choosing a CEGEP and program.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/applyingtocegep/makingsmartchoices">Making Smart Choices</a></th>
          <td>Strategies and things to keep in mind for CEGEP applications.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/applyingtocegep/importantdates">Important Dates</a></th>
          <td>Event calendar with dates to remember for CEGEP applicants.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/applyingtocegep/applicationmodules">Application Modules</a></th>
          <td>Comprehensive guide to applying to CEGEP, with instructions specific to each application module.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/applyingtocegep/afterapplying">After Applying</a></th>
          <td>What comes after submitting applications and clarification of CEGEP General Education requirements.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/programcomparisontool">Program Comparison Tool</a></th>
          <td>Compare pre-university programs (prerequisites and course material) side-by-side with ease.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/usefullinks/cegeplinks">CEGEP Links</a></th>
          <td>Links to official websites and helpful resources on CEGEP, from viewbooks to application modules.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/usefullinks/resources">Resources</a></th>
          <td>Free web resources for a variety of subjects.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/about/disclaimersandterms">About: Disclaimers and Terms</a></th>
          <td>Important information including disclaimers, licenses and terms of use.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/about/project">The QUÉtudes-info Project</a></th>
          <td>About the project: find out more about what inspired QUÉtudes-info, as well as why and how this site was created.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/about/me">About Me</a></th>
          <td>About me, the student behind QUÉtudes-info.</td>
        </tr>
        <tr>
          <th scope="row"><a class="link-primary link-underline-opacity-25 link-underline-opacity-75-hover" href="/about/contact">Contact</a></th>
          <td>Get in touch with us through our contact form.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <Pagination {section} />
</section>

<style>
  table a {
    font-weight: 600;
  }
</style>