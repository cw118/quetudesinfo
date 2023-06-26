<script>
  import SideNav from "../../../components/SideNav.svelte";
  import Pagination from "../../../components/Pagination.svelte";
  import { AboutQuetudesInfo } from "../../../sectionPages";

  const pages = AboutQuetudesInfo, section = 'About QUÉtudes-info', previous = AboutQuetudesInfo[0].link, next = AboutQuetudesInfo[2].link;

  const chapters = [
    {
      name: 'The QUÉtudes-info Project',
      link: 'the-quetudes-info-project',
    },
    {
      name: 'Development and Migration',
      link: 'development-and-migration',
    },
    {
      name: 'Project Links',
      link: 'project-links',
    }
  ]
</script>

<svelte:head>
  <meta name="description" content="Learn more about the QUÉtudes-info project" />
  <title>The QUÉtudes-info Project | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {previous} {next} />

  <div id={chapters[0].link}>
    <h2 class="skyblue-bg">{chapters[0].name}</h2>
    <p class="yellow-bg py-1"><i class="fas fa-bullhorn"></i> <strong>Fun fact:</strong> the site name "QUÉtudes-info" is meant to be <strong>Qu</strong>ébec + <strong>études</strong> + <strong>info</strong>rmation.</p>
    <p>Information and resources on CEGEP are scattered across websites, pamphlets, information sessions and open houses. This
    can make it difficult for students and parents to fully understand the CEGEP system. One of my goals with QUÉtudes-info is to reduce confusion by gathering fundamental information in one place, thereby providing,
    at the very least, a starting point to others' exploration of CEGEP.</p>
    <p>A little more background as to how the idea for QUÉtudes-info came to be: as I myself neared the time for CEGEP
    applications, this became an increasingly common subject in conversations with my friends and classmates. What I quickly
    noticed when discussing CEGEP with others was that there's a lack of clarity and understanding when it comes to
    admissions, applications, program options, and really just anything to do with CEGEP. I did what I could to help by
    sending useful links and documents, but it would quickly become tedious to keep track of all these resources if I sent
    <em>everything</em> I considered important. Then, I took a computer science course and decided to use my newly-earned
    skills to build a website to inform everyone about CEGEP... and here we are!</p>
    <p>In short, QUÉtudes-info's mission is to render information about CEGEP accessible and easy to understand, to help its
    users make informed choices concerning post-secondary education, and to guide students and parents through the process
    of applying to CEGEPs.</p>
  </div>

  <div id={chapters[1].link}>
    <h2 class="salmon-bg">{chapters[1].name}</h2>
    <h4 class="mb-0">Legacy Code: HTML, CSS, and JavaScript</h4>
    <p>The QUÉtudes-info site was my very first project in programming and in web development. I coded this from scratch but I
    started this project knowing just the very basics of HTML, CSS and JavaScript, so I was learning about new and more
    effective features (like CSS Grid) along the way. I apologize if the site is a bit buggy or not-so-nice-looking—I am
    looking to improve the implementation of this webpage as I learn more and gain more experience coding websites. But for
    now, this should do!</p>
    <p>QUÉtudes-info was created as my final project for Harvard University's CS50's Introduction to Computer Science course,
    which I talk about more in <a href="/about/me">About Me</a>. I completed QUÉtudes-info on my own—the research, design, and code
    <em>(which I admit was messy)</em> was all done by me. It was fun, rewarding, and admittedly tiring, but overall a
    wonderful learning and coding experience. Now I hope QUÉtudes-info will help others, and that maybe I'll get the time
    and chance to organize and improve my code for this site.</p>
    <p>The languages used were plain HTML, CSS and JavaScript; the website was hosted by GitHub Pages as a project site in
    <a href="https://github.com/cw118/quetudesinfo/" target="_blank">my <code>quetudesinfo</code> repository</a> (<a href="#project-links">links can be found below</a>). I also used some Bootstrap 4 since I'd learned a bit from CS50, as well as
    Google Fonts and Font Awesome icons. The languages used were evidently HTML, CSS and JavaScript; the website was hosted by GitHub Pages as a project site in
    my <code>quetudesinfo</code> repository (links can be found below). I also used some Bootstrap 4 since I'd learned a bit from CS50,
    as well as Google Fonts and Font Awesome icons. Responsive design was somewhat tricky, but thanks to Chrome DevTools,
    Flexbox and Grid, I think I managed okay. My media queries are a bit all over the place, but again, I would like to try
    cleaning up my code sometime in the future.</p>
  
    <h4 class="mb-0">Migration: Svelte(Kit), Bootstrap 5, and Restyling</h4>
    <p>On June 23, 2023, I began to migrate the entire QUÉtudes-info website to use the Svelte framework (more precisely, SvelteKit). I chose Svelte because it is, in a way,
      a superset of HTML, CSS, and JavaScript, so its syntax is extremely similar to my legacy code. This made it less complex to migrate than it probably would have been to migrate to
      another front-end framework or library like React, but the process was still somewhat long. Along the way, I decided to restyle/redesign the site a little, and upgrade to the most recent
      version of Bootstrap (Bootstrap 5.3). New Bootstrap versions will of course be released, but this was the current version at the time.
    </p>
    <p>I took the opportunity to clean up quite a bit of my CSS, to create reusable components, to refactor a lot of JavaScript, and to update some content. I also recreated the 
      logo/icon to make it look "neater", though the design is mostly the same with a few modified colours and details. After switching to Svelte, I decided to deploy QUÉtudes-info
      on Vercel rather than GitHub Pages—as a result, and also because I renamed nearly every page, I had to restart Google search indexing and eventually change the GitHub Pages version to a one page site with a link to the Vercel
      version. Nonetheless, all the work was definitely worth it.
    </p>
  </div>

  <div id={chapters[2].link}>
    <h2 class="skyblue-bg">{chapters[2].name}</h2>
    <ul>
      <li>My <code>quetudesinfo</code> GitHub repository for this site: <a href="https://github.com/cw118/quetudesinfo/" target="_blank">https://github.com/cw118/quetudesinfo/</a></li>
      <li>Vercel: <a href="https://vercel.com/">https://vercel.com/</a></li>
      <li>Google Fonts: <a href="https://fonts.google.com/" target="_blank">https://fonts.google.com/</a></li>
      <li>Font Awesome: <a href="https://fontawesome.com/" target="_blank">https://fontawesome.com/</a></li>
      <li>Bootstrap: <a href="https://getbootstrap.com/" target="_blank">https://getbootstrap.com/</a></li>
      <li>GitHub Pages: <a href="https://pages.github.com/" target="_blank">https://pages.github.com/</a></li>
    </ul>

  </div>

  <Pagination {section} {previous} {next} />
</section>