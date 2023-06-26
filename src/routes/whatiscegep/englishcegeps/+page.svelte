<script>
  import SideNav from '../../../components/SideNav.svelte';
  import Pagination from '../../../components/Pagination.svelte';
  import Disclaimer from '../../../components/Disclaimer.svelte';
  import { WhatIsCegep } from '../../../sectionPages';

  const pages = WhatIsCegep, section = 'What is CEGEP', previous = WhatIsCegep[1].link, next = WhatIsCegep[3].link;

  const chapters = [
    {
      name: 'English CEGEPs',
      link: 'english-cegeps',
    },
    {
      name: 'The "Big Five"',
      link: 'the-big-five',
    },
    {
      name: 'Other English CEGEPs',
      link: 'other-english-cegeps',
    },
    {
      name: 'Bilingual CEGEPs',
      link: 'bilingual-cegeps',
    }
  ]
</script>

<svelte:head>
  <meta name="description" content="Learn about English and bilingual CEGEPs in Quebec" />
  <title>English CEGEPs | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {previous} {next} />

  <div id={chapters[0].link}>
    <h2 class="lightblue-bg">{chapters[0].name}</h2>
      <p>In Quebec, there are a total of 9 colleges that offer English instruction and specialize in DEC programs. A DEC program
      is simply a program that leads to a DEC/DCS (see below).</p>
      <p>Here's some terminology that you'll later see on this page:</p>
      <ul>
        <li><strong>Day Division</strong> = regular daytime students in the youth sector, and not in continuing education <em>(see below)</em></li>
        <li><strong>DEC</strong> = diplôme d'études collégiales, same as DCS</li>
        <li><strong>DCS</strong> = diploma of collegial studies, same as DEC</li>
        <li><strong>DEP</strong> = diplôme d'études professionnelles, same as DVS</li>
        <li><strong>DVS</strong> = diploma of vocational studies, same as DEP</li>
        <li><strong>Continuing Education</strong> = education provided for adults who've left the formal education system, consists of short or
        part-time programs and/or courses</li>
        <li><strong>AEC</strong> = attestation d'études collégiales, typically reserved for Continuing Education, same as ACS</li>
        <li><strong>ACS</strong> = attestation of college studies, typically reserved for Continuing Education, same as AEC</li>
      </ul>
      <p>CEGEP/college diplomas refer to DCS/DEC; vocational/trade school diplomas tend to refer to DEP/DVS. When researching and applying to CEGEPs, make sure you choose programs that lead to a DCS/DEC!</p>
      <p><em>When referring to a program by its diploma type, the French acronyms are typically used.</em></p>
      <Disclaimer>To learn more about special programs and opportunities like Springboard to a DCS, field trips and exchanges, see <a href="/whatiscegep/programs#special-programs-partnerships-and-opportunities">Special Programs</a>, and <strong>visit <a href="/cegep-links">official college sites</a> for details</strong>.</Disclaimer>
  </div>

  <div id={chapters[1].link}>
    <h2 class="yellow-bg">{chapters[1].name}</h2>
    <p>Listed here are the five most <strong>well-known</strong> English CEGEPs, especially to students in Montreal.</p>
    <Disclaimer><strong>Program counts</strong> consider all profiles/options of a program to be <strong>one</strong> program (even Double DEC programs), and only include programs that lead
    to a DCS. (<em>For example, the Commerce, Two Math and Psychology profiles would all be counted <strong>once</strong> as the Social Science
    program, and not as three programs. Similarly, the Music program and the Music and ALC double DEC would both be counted once as the Music program and not as
    two separate ones.</em>)</Disclaimer>
    <h3 id="mari-about">Marianopolis College</h3>
    <div class="about-grid">
      <div class="image-label">
        <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Coll%C3%A8ge_Marianopolis.JPG/1280px-Coll%C3%A8ge_Marianopolis.JPG"
            alt="Marianopolis College front entrance">
        <p class="caption">Photo by Colocho, CC BY-SA 3.0 licence.</p>
      </div>
      <ul>
        <li>Private English college: only offers <a href="/whatiscegep/programs">pre-university programs</a></li>
        <li>Location: Westmount, Quebec</li>
        <li>Founded in 1908 <em>(as a bilingual institution)</em></li>
        <li>Director General: Christian Corno</li>
        <li>Website for prospective students: <a href="https://www.bemarianopolis.ca/" target="_blank">https://www.bemarianopolis.ca/</a></li>
        <li>Website: <a href="https://www.marianopolis.edu/" target="_blank">https://www.marianopolis.edu/</a></li>
        <li>Offers a <a href="https://www.bemarianopolis.ca/openhouse2020/our-student-life/" target="_blank">bilingual exchange and field trips</a></li>
      </ul>
    </div>
    <p class="description-bottom">Marianopolis College, often affectionately referred to as "Mari", is located between the Vendôme and Villa-Maria (STM
    orange line) metro stations. It has a close-knit student body of roughly 2000 students, over 100 student clubs, and
    classes are 25% smaller than public colleges on average. Marianopolis offers 6 academic programs in Science, Social
    Science, Arts and Sciences, ALC (Arts, Literature and Communication), Liberal Arts, and Music; the college is also a partner of <a href="/whatiscegep/programs#special-programs-partnerships-and-opportunities">Alliance Sport-Études</a>.</p>                        
    
    <h3 id="dawson-about">Dawson College</h3>
    <div class="about-grid">
      <div class="image-label">
        <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Dawson_College_01.jpg/2560px-Dawson_College_01.jpg"
            alt="Dawson College entrance">
        <p class="caption">Photo by Jean Gagnon, CC BY-SA 3.0 licence.</p>
      </div>
      <ul>
        <li>Public English college, part of the Fédération des cégeps</li>
        <li>Location: Montreal, Quebec</li>
        <li>Founded in 1968</li>
        <li>Director General: Diane Gauvin</li>
        <li>Website: <a href="https://www.dawsoncollege.qc.ca/" target="_blank">https://www.dawsoncollege.qc.ca/</a></li>
        <li>Offers <a href="https://www.dawsoncollege.qc.ca/international-development/international-partnerships/" target="_blank">international exchanges for certain programs</a></li>
      </ul>
    </div>
    <p class="description-bottom">Boasting one of the largest college campuses today with over 8000 daytime students, Dawson College was the first
    anglophone school in the CEGEP network. Dawson offers 5 pre-university programs* in Science, Social Science, Liberal
    Arts, ALC, and Visual Arts, as well as 21 technical programs in the areas of Medical and Engineering Studies, Business
    and Social Technologies, and Applied Arts.</p>
    <p class="p-space-bottom"><em>*The count excludes Journeys, a one-year transition program designed for First Nations, Inuit and Métis students as it
    does not lead to a DCS.</em></p>

    <h3 id="vanier-about">Vanier College</h3>
    <div class="about-grid">
      <div class="image-label">
        <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/C%C3%A9gep_Vanier_College.jpg/640px-C%C3%A9gep_Vanier_College.jpg"
            alt="Vanier College front entrance in the evening">
        <p class="caption">Photo by Pierre5018, CC BY-SA 4.0 licence.</p>
      </div>
      <ul>
        <li>Public English college, part of the Fédération des cégeps</li>
        <li>Location: Saint-Laurent, Quebec</li>
        <li>Founded in 1970</li>
        <li>Director General: John McMahon</li>
        <li>Website: <a href="https://www.vaniercollege.qc.ca/" target="_blank">https://www.vaniercollege.qc.ca/</a></li>
        <li>Offers <a href="https://www.vaniercollege.qc.ca/academic-programs/" target="_blank">English and French programs</a></li>
      </ul>
    </div>
    <p class="description-bottom">Vanier College is named in honour of Canadian soldier, diplomat and former Governor General, Georges P. Vanier. The
    college has a student body of over 6700 students and offers 6 pre-university programs in ALC, Liberal Arts, Music,
    Science, Social Science, and Computer Science and Mathematics; here are 14 technical programs available as well. Vanier is also a partner of <a href="/whatiscegep/programs#special-programs-partnerships-and-opportunities">Alliance Sport-Études</a>.</p>

    <h3 id="champlain-about">Champlain Regional College</h3>
    <div class="about-grid">
      <div class="image-label">
        <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Champlain_%28CRC%29_logo_cmyk1.jpg/1920px-Champlain_%28CRC%29_logo_cmyk1.jpg"
            alt="Champlain Regional College emblem">
        <p class="caption">Brandmark and crest images &#169; Champlain Regional College</p>
      </div>
      <ul>
        <li>Public English college, part of the Fédération des cégeps</li>
        <li>Three campuses:
          <ul class="inner">
            <li>St-Lambert campus: St-Lambert (Longueuil)</li>
            <li>St-Lawrence campus: Quebec City</li>
            <li>Lennoxville campus: Sherbrooke (Eastern Townships)</li>
          </ul>
        </li>
        <li>Websites:
          <ul class="inner">
            <li>St-Lambert campus: <a href="https://www.champlainonline.com/champlainweb/" target="_blank">https://www.champlainonline.com/champlainweb/</a></li>
            <li>St-Lawrence campus: <a href="https://slc.qc.ca/" target="_blank">https://slc.qc.ca/</a></li>
            <li>Lennoxville campus: <a href="https://www.crc-lennox.qc.ca/" target="_blank">https://www.crc-lennox.qc.ca/</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <p class="description-top">Champlain College St-Lambert offers 5 pre-university programs in ALC, Liberal Arts <em>(under the program name "Law and
    Civilization")</em>, Science, Social Science, and Computer Science and Mathematics; 4 technical programs are also available.</p>
    <p>The St-Lawrence Campus offers 3 pre-university programs in ALC, Science, and Social Science, as well as 2 technical
    programs in Accounting and Management Technology <em>(named the "P.W. Sims Business Program")</em> and Tourism. This campus also offers <a href="https://www.crc-lennox.qc.ca/student-life/international-experiences/" target="_blank">Education Abroad opportunities</a>.</p>
    <p class="p-space-bottom">At Champlain College Lennoxville, there are 5 pre-university programs available in ALC, Liberal Arts, Science, Social
    Science, and Visual Arts (510.A0), in addition to 4 technical programs.</p>

    <h3 id="jabbott-about">John Abbott College</h3>
    <div class="about-grid">
      <div class="image-label">
        <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/John_Abbott_College_001.jpg/2560px-John_Abbott_College_001.jpg"
            alt="John Abbott College">
        <p class="caption">Photo by Jean Gagnon, CC BY-SA 3.0 licence</p>
      </div>
      <ul>
        <li>Public English college, part of the Fédération des cégeps</li>
        <li>Location: Sainte-Anne-de-Bellevue, Quebec (West Island)</li>
        <li>Founded in 1971</li>
        <li>Director General: John Halpin</li>
        <li>Website: <a href="https://www.johnabbott.qc.ca/" target="_blank">https://www.johnabbott.qc.ca/</a></li>
        <li>Offers <a href="https://www.johnabbott.qc.ca/international-programs-office/" target="_blank">international learning opportunities</a></li>
      </ul>
    </div>
    <p class="description-bottom">This college was named after Sir John Abbott, Canada's third Prime Minister. Over 6500 students are enrolled in John
    Abbott College's day division, which offers 6 pre-university programs in Arts and Sciences, ALC, Liberal Arts, Science,
    Social Science, and Visual Arts (510.A0), as well as 12 technical programs.</p>

    <p class="sources">Sources: <a href="https://fedecegeps.ca/federation/a-propos/membres/">Fédération des cégeps</a>, <a href="/cegep-links">official CEGEP sites, viewbooks and more</a></p>
  </div>

  <div id={chapters[2].link}>
    <h2 class="lightblue-bg">{chapters[2].name}</h2>
    <h3>Heritage College, Gatineau</h3>
    <div class="image-label">
      <img class="small-img" src="https://cdn.cegep-heritage.qc.ca/user_upload/aboutus-mobile.jpg?1591134160" alt="Heritage College, Gatineau campus">
      <p class="caption">Photo by Heritage College. Copyright by Cégep Heritage College.</p>
    </div>
    <p><strong>Website:</strong> <a href="https://www.cegep-heritage.qc.ca/" target="_blank">https://www.cegep-heritage.qc.ca/</a></p>
    <p class="description-bottom">Part of the Fédération des cégeps and a partner of Alliance Sport-Études, Heritage College is the only public Anglophone
    CEGEP in Western Quebec. Heritage offers 4 pre-university programs in Liberal Arts, Visual Arts, Science, and Social
    Science, as well as 8 technical programs.</p><hr>

    <h3>Centennial College, Montreal</h3>
    <div class="image-label">
      <img class="logo-img" src="http://college.centennial.qc.ca/wp-content/uploads/2015/08/logoBig.png"
          alt="Centennial College logo">
      <p class="caption">Brandmark &#169; Centennial College</p>
    </div>
    <p><strong>Website:</strong> <a href="https://college.centennial.qc.ca/" target="_blank">https://college.centennial.qc.ca/</a></p>
    <p class="description-bottom">Centennial College is an independent private English CEGEP that offers a pre-university Social Science program with the
    option of two profiles, General Social Science and Commerce.</p>
    <p class="sources">Sources: <a href="/cegep-links">official CEGEP sites</a></p>
  </div>

  <div id={chapters[3].link}>
    <h2 class="yellow-bg">{chapters[3].name}</h2>
    <p>Instead of a focus on DEC programs, some of the colleges below offer more DEP and/or AEC programs. (Not sure what DEC,
    DEP, and AEC mean? See <a href="#english-cegeps">English CEGEPs</a> at the top of this page.)</p>
    <Disclaimer>A reminder: if you're looking at CEGEP/college programs, look at the <strong>DEC programs</strong> (the ones that lead to a <strong>DCS/DEC</strong>)!</Disclaimer><hr>

    <h3>Cégep de Sept-Îles</h3>
    <div class="image-label">
      <img class="xsmall-img" src="https://cegepsi.ca/wp-content/uploads/2019/10/logo_CEGEP_PROMO_2018-1.png" alt="Cégep de Sept-Îles logo">
      <p class="caption">Brandmark &#169; Cégep de Sept-Îles</p>
    </div>
    <ul class="ul-indented ul-blue">
      <li>Public French CEGEP with an English sector, part of the Fédération des cégeps</li>
      <li>Website: <a href="https://cegepsi.ca/" target="_blank">https://cegepsi.ca/</a>
        <ul class="inner">
            <li>See the "English Section" part of the website menu</li>
        </ul>
      </li>
      <li>Location: Sept-Îles, Quebec</li>
      <li>2 pre-university programs in English: Social Science (English) 300.A3, Science (200.B1)</li>
    </ul>

    <h3>TAV College</h3>
    <div class="image-label">
      <img class="logo-img" src="/assets/tav-logo.png"
          alt="TAV College logo">
      <p class="caption">Brandmark &#169; TAV College</p>
    </div>
    <ul class="ul-indented ul-blue">
      <li>Private bilingual college</li>
      <li>Website: <a href="https://www.tav.ca/" target="_blank">https://www.tav.ca/</a></li>
      <li>Location: Montreal, Quebec</li>
      <li>4 pre-university programs in ALC, Science, Social Science, Computer Science and Mathematics</li>
      <li>2 technical programs: Early Childhood Education, Special Care Counselling</li>
      <li>Offers a Grade 12 Study Option program (see <a href="/whatiscegep/alternativestocegep">Alternatives to CEGEP</a>)</li>
    </ul>

    <h3>LaSalle College</h3>
    <div class="image-label">
      <img class="xsmall-img" src="https://www.lasallecollege.com/-/media/images/new-montreal/new_lasalle_college-ang_h.ashx" alt="LaSalle College logo">
      <p class="caption">Brandmark &#169; LCI Education</p>
    </div>
    <ul class="ul-indented ul-blue">
      <li>Private bilingual college</li>
      <li>Website: <a href="https://www.lasallecollege.com/" target="_blank">https://www.lasallecollege.com/</a></li>
      <li>Location: Montreal, Quebec</li>
      <li>2 pre-university programs in ALC, Social Science</li>
      <li>10 technical programs:
        <ul class="inner">
          <li>Computer Science Technology</li>
          <li>Early Childhood Education</li>
          <li>Special Care Counselling</li>
          <li>Accounting and Management Technology</li>
          <li>Business Management</li>
          <li>Food Service Management/Restaurant Management (430.B0)</li>
          <li>Travel Tourism/Tourism Techniques (414.AC)</li>
          <li>Hotel Management Technique/Hotel Management (430.A0)</li>
          <li>Interior Design (570.E0)</li>
          <li>Fashion Design (<a href="/whatiscegep/programs#program-overview">common code of 571</a>)</li>
        </ul>
      </li>
    </ul>

    <p>There are still some colleges out there that offer a few DCS programs, but it's hard to give a full list. You can find a
    list of all Quebec colleges (includes English, French, public and private) on the Quebec government website here: <a href="https://www.quebec.ca/en/education/cegep/studying/list-colleges" target="_blank">List of CEGEPs and Private Colleges in Quebec</a></p>

    <p class="sources">Sources: <a href="https://fedecegeps.ca/federation/a-propos/membres/">Fédération des cégeps</a>, <a href="/cegep-links">official college sites</a></p>
    <hr>
    <p><strong>Want to learn more about applying to CEGEP?</strong> Take a look at the next section, <strong><a href="/applyingtocegep">Applying to CEGEP</a></strong>.</p>
    <p><strong>Curious about the R-Score, what it is and how it works?</strong> Continue to <strong><a href="/whatiscegep/therscore">The R-Score</a></strong>.</p>
    <p><strong>Think CEGEP might not be for you?</strong> Try <strong><a href="/whatiscegep/alternativestocegep">Alternatives to CEGEP</a></strong>.</p>
  </div>

  <Pagination {section} {previous} {next} />
</section>