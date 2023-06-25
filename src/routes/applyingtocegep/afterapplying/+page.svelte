<script>
  import SideNav from "../../../components/SideNav.svelte";
  import Pagination from "../../../components/Pagination.svelte";
  import Disclaimer from "../../../components/Disclaimer.svelte";
  import { ApplyingToCegep } from "../../../sectionPages";

  const pages = ApplyingToCegep, section = 'Applying to CEGEP', previous = ApplyingToCegep[4].link, nextSection = 'Program Comparison Tool', next = '/programcomparisontool';

  const chapters = [
    {
      name: 'After Applying',
      link: 'after-applying',
    },
    {
      name: 'Application Status and Confirming Acceptance',
      link: 'application-status-and-confirming-acceptance',
    },
    {
      name: 'Accepted at CEGEP: Placement Tests',
      link: 'accepted-at-cegep-placement-tests',
    },
    {
      name: 'Overview of CEGEP Courses',
      link: 'overview-of-cegep-courses',
    }
  ]
</script>

<svelte:head>
  <meta name="description" content="Learn about what comes after applying to CEGEP" />
  <title>After Applying | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {previous} {nextSection} {next} />

  <div id={chapters[0].link}>
    <h2 class="skyblue-bg">{chapters[0].name}</h2>
    <p>Now that you've submitted your applications, paid your application fees, and sent and/or uploaded all required
    documents, there's not much left to do besides waiting for results. And then once <i>that's</i> over, what comes next?</p>
    <p>As you've likely noticed while completing your CEGEP applications, application systems give you the option of viewing
    your application or file status. This is what allows you to verify that you completed all components of your application
    (<u>before</u> the deadline), access the notice of decision and more!</p>
    <p>In addition, once you accept an offer of admission from a college, you may be asked to take placement tests/exams. You
    will also, at some point, be choosing your first semester courses—as you may already know, all CEGEP students (enrolled
    in English-language CEGEPs) are required to pass 4 English, 2 French, 3 Humanities and 3 Physical Education courses.</p>
    <p>The <strong>After applying</strong> page covers all of these topics thoroughly, and aims to help you feel prepared even after completing your CEGEP
    applications. Now, let's get started with how to check application status!</p>
  </div>

  <div id={chapters[1].link}>
    <h2 class="yellow-bg">{chapters[1].name}</h2>
    <p>Around <strong>mid-March and the beginning of April, CEGEPs will start sending out admissions decisions</strong>; final decisions are usually made by May.
    Applicants will thus need to <strong>check their application status</strong> for the CEGEPs they applied to, and if accepted, <strong>reply to
    the colleges in order to confirm or cancel their admission</strong> (acceptance): depending on the CEGEP, you'll need to <strong>send an
    email OR use the application module to confirm/cancel</strong>. When you've reached the stage of acceptance confirmation and/or
    cancellation, <strong>keep an eye out for the deadlines</strong>—be sure to reply before the prescribed date and time!</p>
    <p>Remember to <strong>check your email frequently</strong>, so as to not miss important updates and notifications. In addition, <strong>when
    confirming admission to CEGEP, do NOT hoard spots!</strong> If you have confirmed your admission at a CEGEP, you should reject other admissions offers (from other CEGEPs you applied to).
    This allows CEGEPs to offer admission to waitlisted students (sooner).</p>
    <p class="py-1 lightorange-bg"><i class="fas fa-circle-exclamation"></i> <strong>Acceptance is always <u>conditional</u>, meaning that keeping your spot at a CEGEP is contingent on your final grades and
    whether or not you still meet the requirements at the end of the year.</strong> This is often called <strong>conditional admission</strong>.</p>
    <p>In other words, final admission into any CEGEP program requires that you obtain a DES (secondary diploma), including all
    prerequisite courses with appropriate grades. If you do not meet the requirements at the end of the year (CEGEPs usually
    verify this in July), your offer of admission may be withdrawn.</p>
    <hr>
    <h4><i class="fas fa-caret-right"></i> <strong>To check your application status in SRAM's module:</strong></h4>
    <img src="/assets/applications/sram-apply.png" class="small-img" alt="SRAM admission main menu">
    <ul class="ul-blue ms-3">
      <li><strong>Log in</strong> by clicking "Log me in" in the top right corner of SRAM Admission's Home page
        <ul class="inner">
          <li>OR click the "Check the status of my application" box, then log in (the login form should
            be displayed to you)</li>
        </ul>
      </li>
      <li>Once you're logged in, go to <strong>the "Status of my application" tab</strong> (the top tab—you should be taken straight there after login)</li>
      <li>Admission answers are posted on online files according to a set timetable found here: <a href="https://www.sram.qc.ca/diploma-of-college-studies/deadlines-and-important-dates/" target="_blank">https://www.sram.qc.ca/diploma-of-college-studies/deadlines-and-important-dates/</a>
        <ul class="inner">
          <li>Answers usually become available a little over two weeks after the round deadline</li>
        </ul>
      </li>
    </ul>
    <br><h4><i class="fas fa-caret-right"></i> <strong>To check your application status in the Dawson Application Centre:</strong></h4>
    <ul class="ul-blue ms-3">
      <li>Firstly, <strong>log in to the Application Centres</strong></li>
      <li><strong>Go to the "Application Summary" page: in the "Status" column, click "View" to see your application status.</strong> By viewing your application status, you can:
        <ul class="inner">
          <li>View the admissions decision for your program choice(s)</li>
          <li>View and download decision letters</li>
          <li>If offered admission, confirm your acceptance <em>(or cancel your admission if you accept an offer from another CEGEP)</em></li>
          <li>View your confirmation status</li>
        </ul>
      </li>
      <li>You should receive an email in the first week of March, informing you that you can begin to view application status
      information on the Application Status Portal <em>(this doesn't necessarily mean that an admissions decision was already made)</em></li>
      <li><strong>Decisions on first-choice programs</strong> are posted around <strong>mid-March to mid-April</strong></li>
      <li><strong>Decisions on second-choice programs</strong> (if refused for first choice) are posted starting the <strong>third week of April to the end of May</strong></li>
      <li><strong>Confirmation deadline: 12 days after admission offer</strong>
        <ul class="inner">
          <li>Below "Decision", you'll see a button that says "Review Decision Letter" that allows you to view your decision letter</li>
          <li><strong>Under "Confirmation"</strong>, where you can see whether Dawson received your confirmation of acceptance as well as the deadline for said
          confirmation, there is the <strong>"Respond Now" button</strong> (confirm OR cancel your admission to Dawson)</li>
        </ul>
      </li>
      <li>If you have questions or concerns regarding your application or admission status, use the Message Center to send a message</li>
    </ul>
    <br><h4><i class="fas fa-caret-right"></i> <strong>To check your application status for Marianopolis College:</strong></h4>
    <img src="/assets/applications/mari-new-application-info.png" class="small-img" alt="Email from Marianopolis College that says 'There is new information related to your application for admission'">
    <ul class="ul-blue ms-3">
      <li>Most offers of admission are posted online in March, often starting as early as 10 days after the deadline (March 1)</li>
      <li>When your admission status has been updated, Omnivox (Marianopolis) sends an email saying there is new information related to your application</li>
      <li>You can check your application status by clicking <strong>"Consult my File"</strong> just below "Apply for admission" in their Omnivox application module. You'll be taken to their
      <strong>"Application for Admission - Follow Up"</strong> page</li>
    </ul>
    <br><h4><i class="fas fa-caret-right"></i> <strong>To check your application status for Champlain College, St-Lambert and/or St-Lawrence:</strong></h4>
    <img class="xsmall-img" src="/assets/applications/cas-mari-start.png" alt="Champlain St-Lambert submit an application or consult file">
    <ul class="ul-blue ms-3">
      <li>Under "Submit an Application for Admission", click <strong>"Consult my File or Upload Documents"</strong>. You'll be taken to their
      <strong>"Application for Admission - Follow Up"</strong> page</li>
    </ul>
    <br><p><strong>Many CEGEPs have students switch to another platform once they're admitted.</strong> The most common platform is called <em>Omnivox</em>, which a few colleges also use for applications, but admitted students
    typically access it through a different portal.</p>
    <p><strong>Follow the instructions provided by your CEGEP to access their platform for admitted students</strong>—this is crucial, as it's usually where you choose your courses, find important dates (such as student orientation),
    view and download your college schedules, access your course grades and more. <strong>Make sure to check the platform (log in to your student portal) periodically</strong>, and to fulfill any requirements (submit
    documents, etc.) listed there.</p>
    <hr>
    <p>And that's all you really need to know about CEGEP applications and follow-ups! We hope you found this section and <a href="/applyingtocegep/applicationmodules">our
    Application Modules page</a> helpful.</p>
    <p>Next up are some details about what comes after getting admitted to a college, including placement tests and a basic
    guide to the CEGEP courses required for graduation.</p>
  </div>

  <div id={chapters[2].link}>
    <h2 class="skyblue-bg">{chapters[2].name}</h2>
    <p>Placement tests are essentially diagnostic tests used to <strong>place students at the correct level for certain courses</strong>. And
    don't worry, these tests aren't used to withdraw offers of admission—placement test results won't affect your admission
    to CEGEP. The college simply needs to identify the best course stream for you so that you can succeed when you begin
    your studies at CEGEP.</p>
    <p>Most colleges require that new students take an <strong>English placement test</strong>. Those who may need more support in English are
    placed in a preparatory course; otherwise, students will take Introduction to College English <em>(types and level of
    English courses are explained in depth in <a href="#overview-of-cegep-courses">Overview of College Courses</a>)</em>.</p>
    <p>Some CEGEPs also require a <strong>French placement test</strong>, though most use high school French grades to measure aptitudes. There
    are four levels of French in English-language colleges, as well as preparatory courses for those who may need more
    support in French. <em>(Types and levels of French courses are explained in depth in <a href="#overview-of-cegep-courses">Overview of College Courses</a>.)</em></p>
    <p><strong>Check your student portal and official CEGEP sites to see which placement tests you'll need to write</strong>, as they vary with CEGEP and the student's situation. It's important that you write the tests required of you in order
    to register for courses.</p>
  </div>

  <div id={chapters[3].link}>
    <h2 class="yellow-bg" id="college-course-overview">Overview of College Courses</h2>
    <Disclaimer>Note: Course names vary by college. Examples were taken from several colleges and are not offered at every CEGEP.</Disclaimer>
    <p><strong>CEGEP course codes</strong> are 8 characters long, formatted as such: XXX-YYY-ZZ. The first three characters, XXX, are always numbers and indicate
    the discipline or subject that the course belongs to (603 = English, 201 = Math, 203 = Physics, 350 = Psychology, 607 =
    Spanish, etc.).</p>
    <div class="image-label">
      <p class="label">Liberal Arts courses at Vanier College</p>
      <img src="/assets/vanier-courseexample.png" class="xsmall-img" alt="List of Liberal Arts courses at Vanier College">
      <p class="caption">Photo of Vanier College's Liberal Arts website. Copyright by Vanier College, 2021.</p>
    </div>
    <p>The next three, YYY, usually specify the level or specialization of the course within its category, depending on the
    discipline. They tend to be all numbers or all letters (for example, NYA or 101).</p>
    <p>You don't really need to worry about the last two characters, ZZ, since they're rarely the same for each CEGEP. Some
    Ministry-required courses like English and French will end with MQ, while some CEGEPs end many course codes with their
    own extension (for example, Vanier College uses VA as the last two characters for all course codes).</p>
    <p>Here are a few example course codes <em>(these vary by CEGEP)</em>:</p>
    <ul class="ul-blue">
      <li>201-NYA-05 = Calculus I</li>
      <li>420-201-VA = Introduction to Programming, at Vanier College (notice the -VA at the end of the code)</li>
      <li>202-NYB-05 = General Chemistry II (also called Chemistry of Solutions)</li>
      <li>551-156-MS = Ear Training and Theory I, Marianopolis College (ends with -MS)</li>
      <li>510-ASA-AB = Art I, John Abbott College (ends with -AB)</li>
    </ul>
    <p><strong>To indicate the number of hours to be spent on each course, CEGEPs use a weighting system (pondération) of three digits
    in the form of X-Y-Z.</strong> This is being explained here in case you're wondering what something like a 2-2-4 in a program description means, but
    don't worry too much about this number/value when choosing your courses.</p>
    <ul class="ul-blue">
      <li>The first digit (X) = number of classroom instruction hours per week</li>
      <li>The second digit (Y) = number of lab hours (spent in a specialized/multipurpose room) or internship hours per week</li>
      <li>The third digit (Z) = number of personal work hours the student should put in per week (outside of class and lab time). <em>Note that this is more of an estimate than an absolute number of hours.</em></li>
    </ul>
    <p>For example, if a CEGEP course has 2-1-3 as its weighting, then:</p>
    <ul class="ul-blue">
      <li>First digit is 2 = two hours of formal classroom instruction per week</li>
      <li>Second digit is 1 = one lab hour per week</li>
      <li>Third digit is 3 = three hours of personal work for this course per week</li>
    </ul>
    <p><strong>When choosing college courses, the course time and professor are important to consider.</strong> To increase your chances of finding an enjoyable course and a good professor, ask around—if you're able to ask former or
    current college students for their opinions and recommendations, great! If not, you can also do a bit of research on
    your own: read the professor's research papers, watch interviews, etc. <em>Another common method used by students is the site "Rate My Teacher", but we advise against relying on this.</em></p>
    <br>
    <p><strong><u>Here's a brief guide to mandatory college courses</u> (required in order to obtain a Diploma of Collegial Studies—to
    graduate from CEGEP).</strong></p>
    <h3 class="silver-bg">English: 101, 102, 103, adapted to program</h3>
    <div class="rightsm-grid">
      <ul>
        <li>Course code begins with 603</li>
        <li>4 mandatory English courses and exit exam, as outlined below</li>
        <li>101: Introduction to College English (ICE)</li>
        <li>102: Literary Genres</li>
        <li>103: Literary Themes</li>
        <li>Adapted to Program (also called B-Block or Block B)</li>
        <li>603-001 courses are preparatory English courses
          <ul class="inner">
            <li>Often called "Remedial Activities for Secondary V English" and/or "Preparation for College English"</li>
          </ul>
        </li>
      </ul>
      <div class="image-label">
        <img loading="lazy" alt="Writing on lined paper with a fountain pen"
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80">
        <p class="caption">Photo by Aaron Burden on Unsplash</p>
      </div>
    </div>
    <p>English courses are normally taken in order; that is, 101 first, 102 second, 103 third, and Adapted to Program last. A
    student who has completed English 101, 102, and is completing or has completed English 103 is eligible to take the
    <strong>English Exit Exam</strong>, also a CEGEP graduation requirement.</p>
    <p>Furthermore, English 101 is split into two categories: Composition and Literature (CL) and Literature (L). <u>Students are
    placed into a Composition and Literature type English course if they need more assistance</u> with reading and writing
    <em>(usually determined through placement tests)</em>.</p>
    <ul class="ul-blue">
      <li><strong>English 101 courses may include</strong> <em>(NOT offered at every CEGEP)</em>: Short Stories, Poems, and the Novel (CL); Children's Literature (L), Dark Fiction (L), Epistolary Writing (L), Voices
      and Visions (L), Witches and Wizards (L)...</li>
      <li><strong>English 102 courses may include</strong> <em>(NOT offered at every CEGEP)</em>: 18th and 19th Century Literature, African Short Story, Tragedy, Magic Realism, The Art of Poetry, Comedy and the Body,
      Science and Ideology, Teen Spirit…</li>
      <li><strong>English 103 courses may include</strong> <em>(NOT offered at every CEGEP)</em>: Violence in Literature, Underdogs and Unlikely Heroes, Time Travel, Carpe Diem!, Shakespearean Families, Music and
      Literature, Food for Thought…</li>
      <li><strong>Adapted to program English courses may include</strong> <em>(these vary every CEGEP)</em>: Big Issues, Creative Nonfiction, Crime and Punishment, Writing on the Arts, Journalism, Mad Science, Satire and Critical
      Thinking, Rhetoric...</li>
    </ul>

    <h3 class="lightgreen-bg">French: Block A (general), Block B (program-adapted)</h3>
    <div class="rightsm-grid">
      <ul>
        <li>Course code begins with 602</li>
        <li>2 mandatory French courses, as outlined below</li>
        <li>Le cours A: formation générale commune
          <ul class="inner">
            <li>Also called "Block A" or "premier cours"</li>
          </ul>
        </li>
        <li>Le cours B: formation générale spécifique
          <ul class="inner">
            <li>Also called "Block B", "B-Block", "deuxième cours"</li>
          </ul>
        </li>
        <li>602-0XX course codes are generally "mise à niveau" (preparatory) courses</li>
        <li>Le cours A should be taken before le cours B</li>
      </ul>
      <div class="image-label">
        <img loading="lazy" alt="Flag of Quebec, blue rectangle with centered white cross and four fleurs de lys in each quarter of the rectangle"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Flag_of_Quebec.svg/1200px-Flag_of_Quebec.svg.png">
        <p class="caption">Flag and symbols in Canadian public domain</p>
      </div>
    </div>
    <p><u>Quebec's Bill 96 (May 2021) now requires students of English-language colleges to pass a French Exit Exam, the
    application of which has not yet been announced.</u></p>
    <p>There are <strong>four levels</strong> of cours A (Block A) French courses. Ordered from beginner to advanced, they typically are:
    <strong>602-100 (Langue et expression I), 602-101 (Langue et communication), 602-102 (Langue et culture), 602-103 (Culture et
    littérature)</strong>. For cours B (Block B) French courses, which usually have four levels as well <em>(often named differently from
    cours A levels)</em>, CEGEPs may prescribe a level transition based on your Block A course. <em>For example, Marianopolis
    students who take 602-101 French normally go on to take a 602-LPX Block B French course.</em></p>
    <p><strong>Placement in college French course levels are usually determined based on your high school French grades.</strong> Many CEGEPs
    administer placement tests as well.</p>
    <ul class="ul-blue">
      <li><strong>Cours B (block B) courses equivalent to level 100 may include</strong> <em>(these vary with every CEGEP)</em>: Comprendre et mieux s'exprimer, Langue française II...</li>
      <li><strong>Cours B (block B) courses equivalent to level 100 may include</strong> <em>(these vary with every CEGEP)</em>: Découvertes, Visions actuelles, Aspects des sciences et des techniques, Actualités des sciences humaines...</li>
      <li><strong>Cours B (block B) courses equivalent to level 100 may include</strong> <em>(these vary with every CEGEP)</em>: Fictions, Enjeux sociaux, En marge des mots, Regards sur les sciences humaines, Regards sur l'administration et le
      commerce...</li>
      <li><strong>Cours B (block B) courses equivalent to level 100 may include</strong> <em>(these vary with every CEGEP)</em>: Science moderne; Musique, littérature et cinéma; Découvertes et création, Réflexions sur les arts et les sciences
      humaines...</li>
    </ul>

    <h3 class="peach-bg">Humanities: 101, 102, adapted to program</h3>
    <div class="rightsm-grid">
      <ul>
        <li>Course code begins with 345</li>
        <li>3 mandatory Humanities courses, as outlined below</li>
        <li>101: Knowledge</li>
        <li>102: World Views</li>
        <li>Adapted to program: Ethics (also called Applied Ethics, etc.)
          <ul class="inner">
            <li>Has several topics such as Ethical Issues and Social Issues</li>
          </ul>
        </li>
        <li>Humanities courses should be taken in the following order: 101, 102, adapted to program</li>
      </ul>
      <div class="image-label">
        <img loading="lazy"
            alt="Collection of old books on shelves"
            src="https://images.unsplash.com/photo-1472173148041-00294f0814a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80">
        <p class="caption">Photo by Thomas Kelley on Unsplash</p>
      </div>
    </div>
    <ul class="ul-blue">
      <li><strong>Humanities 101 courses may include</strong> <em>(NOT offered at every CEGEP)</em>: Evolution, Modernity and Consumer Culture, Sounds of Music, Women and War, Biblical Literacy, The Nature of Propaganda,
      Greek Mythology...</li>
      <li><strong>Humanities 102 courses may include</strong> <em>(NOT offered at every CEGEP)</em>: Aspects of Freedom, Folklore and Fairytale, Capitalism as a Way of Life, Indigenous Cultures in Canada, Justice,
      Marxism, Religion and Politics, Valuing Diversity...</li>
      <li><strong>Adapted to program Humanities courses may include</strong> <em>(these vary with every CEGEP)</em>: The Ethics of Sport, Music and Ethical Issues, Introduction to Moral Philosophy, Prejudice, Image Ethics, Ethics: Love
      and Friendship...</li>
    </ul>

    <h3 class="lightblue-bg">Physical Education: 101, 102, 103</h3>
    <div class="rightsm-grid">
      <ul>
        <li>Course code begins with 109</li>
        <li>3 mandatory Physical Education courses, as outlined below</li>
        <li>101: Physical Education and Health (also called "Lifestyle")</li>
        <li>102: Physical Education and Effectiveness (also called "Activity")
          <ul class="inner">
            <li>Some are intensive or compressed courses</li>
          </ul>
        </li>
        <li>103: Physical Education and Autonomy (also called "Active Living")
          <ul class="inner">
            <li>Some are intensive or compressed courses</li>
          </ul>
        </li>
        <li>Physical Education (PE) courses should be taken in the following order: 101, 102, 103</li>
      </ul>
      <div class="image-label">
        <img loading="lazy" alt="Spalding brand basketball on running track next to green tarp"
            src="https://images.unsplash.com/photo-1484482340112-e1e2682b4856?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80">
        <p class="caption">Photo by Sabri Tuzcu on Unsplash</p>
      </div>
    </div>
    <ul class="ul-blue">
      <li><strong>PE 101 courses may include</strong> <em>(NOT offered at every CEGEP)</em>: Racquets, Fitness, Yoga, Zumba, Resistance Training, Day Hiking, Aquatics, Games Fitness...</li>
      <li><strong>PE 102 courses may include</strong> <em>(NOT offered at every CEGEP)</em>: Badminton, Basketball, Cycling Skills, Fitness, Aquatics, Cross Country Skiing, Golf...</li>
      <li><strong>PE 103 courses may include</strong> <em>(NOT offered at every CEGEP)</em>: Cardio Dance, Core Training, Nature Retreat, Soccer, Winter Camping, Team Sports…</li>
    </ul>
    <p class="sources">Sources: <a href="/cegep-links">CEGEP application guides, course lists and calendars</a>, <a href="https://www.bemarianopolis.ca/programs/">bemarianopolis</a>, <a href="https://www.johnabbott.qc.ca/program-structure/">John Abbott College</a>, <a href="https://www.cegepsquebec.ca/en/cegeps/presentation/systeme-scolaire-quebecois/grille-de-cours-et-ponderation/">Cégeps du Québec</a></p>
    <hr>
    <p><i class="fas fa-star"></i> <strong><u>Friendly reminder to frequently check your CEGEP student portal!</u></strong></p>
    <h4 style="line-height: 1.5; margin-bottom: 0;">And that's it for QUÉtudes-info's guide to CEGEP programs, admissions, and applications! <strong>We hope you've found our site helpful—if you did, share it with your friends and classmates so that everyone can
    understand CEGEP better!</strong></h4>
    <p class="py-1 rounded skyblue-bg"><i class="fas fa-share"></i> <strong>Share this link with your classmates:</strong> <span id="site-link">https://quetudesinfo.vercel.app/</span> </p>
    <hr><p class="mb-1">Curious about the student behind the QUÉtudes-info site? <a href="/about/me" class="btn btn-success">About Me</a></p>
    <p class="mb-1">Want to learn more about the QUÉtudes-info project and how it was created? <a href="/about/project" class="btn btn-dark">The QUÉtudes-info Project</a></p>
    <br>
  </div>

  <Pagination {section} {previous} {nextSection} {next} />
</section>