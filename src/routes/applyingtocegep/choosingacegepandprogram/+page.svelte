<script>
  import SideNav from "../../../components/SideNav.svelte";
  import Pagination from "../../../components/Pagination.svelte";
  import Disclaimer from "../../../components/Disclaimer.svelte";
  import { ApplyingToCegep } from "../../../sectionPages";

  const pages = ApplyingToCegep, section = 'Applying to CEGEP', previous = ApplyingToCegep[0].link, next = ApplyingToCegep[2].link;

  const chapters = [
    {
      name: 'Choosing a CEGEP and Program',
      link: 'choosing-a-cegep-and-program',
    },
    {
      name: 'Factors to Consider: CEGEP',
      link: 'factors-to-consider-cegep',
    },
    {
      name: 'Factors to Consider: Program',
      link: 'factors-to-consider-program',
    },
  ]
</script>

<svelte:head>
  <meta name="description" content="A comprehensive look at factors to consider when choosing a CEGEP and program" />
  <title>Choosing a CEGEP and Program | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {previous} {next} />

  <div id={chapters[0].link}>
    <h2 class="skyblue-bg">{chapters[0].name}</h2>
    <p>With CEGEP, you have the freedom to choose and apply to the program/programs that truly interest you—whether you're
    passionate about social science, the arts, or the sciences, there's a college program out there for you!</p>
    <p>The first step to finding what fits you is to <strong>explore</strong>. This means exploring your interests, values, as well as
    identifying your goals and skills. You'll also want to explore your options—look at what CEGEPs have to offer and see
    how they match up to your personality. (We'll look at this in more depth in the <a href="#factors-to-consider-cegep">Factors to consider</a> parts of this page.)</p>
    <p>It's also important to keep in mind that many CEGEPs give you two choices on their application, so you'll likely want to
    identify two or three programs of interest for each college. Formulating strategies and back-up plans will be key for
    CEGEP applications. (We'll discuss this more in <a href="/applyingtocegep/makingsmartchoices">Making smart choices</a>.)</p>
  </div>

  <div id={chapters[1].link}>
    <h2 class="yellow-bg">{chapters[1].name}</h2>
    <p>Since you should always apply to multiple CEGEPs, this part is more to help you determine which ones could be the best
    fit. The following is a list of some criteria you may want to reflect on when researching and considering a CEGEP.</p>
    <Disclaimer>Disclaimer: This is not meant to substitute the advice of any guidance counsellor, academic advisor, or any school
    professional who provides services of the sort.</Disclaimer>

    <h3 class="green-bg mb-2">Location</h3>
    <div class="image-label">
      <p class="label">John Abbott College campus</p>
      <img src="https://www.macleans.ca/wp-content/uploads/2016/09/John-Abbott-College-Profile-Macleans.jpg" class="small-img" alt="Overhead view of John Abbott College's campus, source is Maclean's">
      <p class="caption">Photo by Maclean's. Copyright by St. Joseph Communications, 2021.</p>
    </div>
    <p>Would you prefer a campus in downtown or away from urban centres? Do you want to live directly on the school campus*?</p>
    <p>Depending on your situation, <strong>commute time</strong> and <strong>access
    to public transportation</strong> may be important factors when choosing a CEGEP. On the other hand, maybe you're simply looking
    for a college with <strong>places nearby</strong> to go for lunch or to study between classes.</p>
    <p><em>*Not all colleges are equipped with student residences.</em></p>

    <h3 class="silver-bg mb-1">Finances</h3>
    <div class="image-label">
      <img src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=695&q=80"
          class="small-img" alt="Spilled coins from a jar, by Michael Longmire">
      <p class="caption">Photo by Michael Longmire on Unsplash.</p>
    </div>
    <p>Finances primarily refer to tuition, scholarships, financial aid and bursaries. Are you willing and able to pay for
    private, or will you simply attend a public CEGEP? Do you require financial assistance? Will you apply for scholarships
    and/or bursaries?</p>
    <p>Student fees at public CEGEPs are relatively low: <u>Quebec residents</u> can expect <strong>registration and service fees</strong> totalling
    roughly $200 <strong>per semester</strong>, while <u>non-Quebec residents* and international students will be additionally charged tuition
    fees</u> (amounts vary by institution). You'll also want to keep <strong>textbook costs</strong> in mind, as those are never included in
    student fee totals.</p>
    <p><em>*To verify whether you qualify as a Quebec resident, see this form: <a href="https://www.dawsoncollege.qc.ca/public/services/finance_department/quebecresidenceformenglish.pdf" target="_blank">https://www.dawsoncollege.qc.ca/public/services/finance_department/quebecresidenceformenglish.pdf</a></em></p>
    <p>**This site does <strong>not</strong> provide financial information on any school. Visit the <a href="/cegep-links" target="_blank">official sites</a> for information on tuition,
    scholarships, financial aid and the like.</p>
    
    <h3 class="orange-bg mb-2">Program Options</h3>
    <div class="image-label">
      <p class="label">Child Studies at Dawson College</p>
      <img src="https://www.dawsoncollege.qc.ca/public/programs/header_images/Child-Studies-300FE.jpg" class="figure" alt="Child Studies students at Dawson College working in a group">
      <p class="caption">Photo by Dawson College. Copyright by Dawson College, 2021.</p>
    </div>
    <p>Does the CEGEP offer your <strong>program of interest</strong>? <strong>What distinguishes the program at this particular college</strong> from other
    colleges?</p>
    <p>Perhaps a CEGEP offers special opportunities such as field trips or exchanges for this program, or it has a unique
    program grid (unique courses, etc.) that interests you.</p>

    <h3 class="gold-bg mb-1">Reputation</h3>
    <p>Reputation isn't necessarily the same as ranking! You can certainly consider the ranking of a college if you'd like, but remember
    that the highest-ranked school may not be the best fit—everyone learns in different ways and at different paces.</p>
    <div class="image-label">
      <p class="label">Marianopolis College R-Score Statistics</p>
      <img src="https://www.bemarianopolis.ca/wp/wp-content/uploads/GC-R-Score-Chart-2019.jpg" class="figure" alt="Marianopolis student R-Scores in comparison to other English CEGEPs">
      <p class="caption">Graph and statistics by Marianopolis College. Copyright by Marianopolis College, 2021.</p>
    </div>
    <p>Taking into account the reputation of a CEGEP doesn't mean blindly believing every rumour about the college. While
    <strong>student testimonials</strong> can give you an idea of what the CEGEP is like, try looking at <strong>statistics, professors, alumni</strong>, and
    more. (Even better yet, go for a visit to see the CEGEP for yourself!)</p>
    
    <h3 class="lightblue-bg mb-2">Community, Resources and Services</h3>
    <p>Some students prefer the idea of being part of a large <strong>student population</strong>, while some favour a more close-knit <strong>school
    community</strong>, perhaps with smaller <strong>class sizes</strong> and/or a lower <strong>student-teacher ratio</strong>.</p>
    <p>Moreover, <strong>facilities</strong> are a key factor for students. It's probably safe to say that all CEGEPs have nice <strong>classrooms</strong>,
    advanced <strong>technology</strong> and excellent <strong>libraries</strong>, but that promise isn't quite enough. For those pursuing music,
    well-maintained practice and recording rooms, among other facilities and resources, are a must. In the case of Science
    students and more, modern computer labs and science labs are crucial to their learning, whereas a student athlete may
    look for high-quality athletic facilities and training equipment.</p>
    <div class="image-label">
      <p class="label">Fitness Room at Vanier College</p>
      <img src="https://www.vaniercollege.qc.ca/sports-recreation/files/2012/09/16395788_10154850931742667_602453780_n-1.jpg" class="small-img"
          alt="Vanier College fitness room with new training equipment">
      <p class="caption">Photo by Vanier College. Copyright by Vanier College, 2021.</p>
    </div>
    <p>Last but not least, you'll want to make sure the college has plenty of <strong>student services and support</strong> available. Some
    basic services involve academic advising, mental health support, health services, accessibility, learning resources, IT,
    language support, financial aid, and many others. If you require a specific kind of service or assistance, consult
    official college sites to ensure the institution provides it.</p>

    <h3 class="lightpurple-bg mb-2">Clubs and Activities</h3>
    <div class="image-label">
      <p class="label">Champlain St-Lambert Athletics: The Cavaliers</p>
      <img src="https://www.champlaincavaliers.com/wp-content/uploads/Cavs_CGlow.png"
          class="xsmall-img" alt="Champlain St-Lambert sports team mascot and logo, the Cavaliers">
      <p class="caption">Photo by Champlain St-Lambert. Copyright by Champlain College Saint-Lambert, 2018.</p>
    </div>
    <p><strong>Student life</strong> is a big part of college as well! CEGEPs have lots to offer when it comes to <strong>extracurriculars</strong>, the most
    obvious being student clubs and sports teams. There's more to look for, though: field trips, distinctive opportunities
    like a robotics team, cultural offerings...</p>
  </div>

  <div id={chapters[2].link}>
    <h2 class="skyblue-bg">{chapters[2].name}</h2>
    <p>Choosing a program isn't always easy. Maybe you're unsure of what you like, of what path you want to take, or you don't
    know what options are out there. (<em>If it's the latter, check out our <a href="/whatiscegep">What is CEGEP</a> section, which has information on CEGEPs, programs, and more.</em>)</p>
    <p>And without further ado, here are some factors to consider when choosing a CEGEP program.</p>

    <h3 class="goldenrod-bg mb-2">Type of program</h3>
    <p>What type of education are you looking for? In CEGEP, you have the choice of <strong>pre-university</strong> (typically 2 years) or
    <strong>technical</strong> (3 years) programs.</p>
    <div class="image-label">
      <p class="label">Visual Arts at John Abbott College</p>
      <img src="https://www.johnabbott.qc.ca/wp-content/uploads/2020/06/visual.png" class="xsmall-img"
          alt="Student in a pottery or sculpture class">
      <p class="caption">Photo by John Abbott College. Copyright by John Abbott College, 2020.</p>
    </div>
    <p>Are you in a hurry to join the workforce? A technical program may be the answer for you—technical programs concentrate
    on a specific technology, and after taking one of these, you'll be fully qualified to enter the workforce.</p>
    <p>Do you want to go to university after CEGEP? A pre-university program may be the better fit. Most pre-university
    programs are both subject-specific and general enough for you to explore your discipline of interest and learn about
    other fields.</p>

    <h3 class="brightyellow-bg mb-2">Prerequisites</h3>
    <p>This is perhaps the most important one of all: <strong><u>check every program's prerequisites!</u></strong> Many programs have more requirements in addition to a high school diploma, so you need to <strong>make sure you have all the
    credits</strong> needed to apply to the program and that you <strong>submit all necessary documents</strong> (ie. letter of intent)</p>
    <p>Some common additional prerequisites are: Secondary V Math SN/TS* (506), Secondary V Physics (504), Secondary V
    Chemistry (504), Letter of Intent, Portfolio. A few programs may even require an interview.</p>
    <p><u>Program prerequisites can be found on official CEGEP sites and in their
    viewbooks</u>, the links to which you can find at <a href="/cegep-links">CEGEP Links</a>. (<em>Our <a href="/programcomparisontool">Program Comparison Tool</a> also lists prerequisites,
    but we recommend visiting official sites and resources to confirm.</em>)</p>
    <p><em>*SN Math is commonly referred to as "scientific math" or "math science option". For youth sector secondary school
    students in Quebec, 6-credit math courses should meet the math prerequisite, but please double-check to confirm that you
    meet all requirements.</em></p>

    <h3 class="lightyellow-bg mb-2">Cutoffs</h3>
    <p>CEGEPs evaluate applications in slightly different ways, but your grades will always be a determining factor. In
    addition to checking for prerequisites, several programs have <strong>required average grades and/or minimum grades</strong>, and some
    have program-specific averages that are calculated in addition to your overall average.</p>
    <p>CEGEPs will post grade minimums online (some programs don't necessarily have any), which you'll want to look over if
    they're available. <i class="fas fa-circle-exclamation"></i> <strong>Note that the real cutoffs are calculated based on the grades of the previous year's applicants and tend to
    change every year. These "real" cutoffs are <u>NOT</u> the ones found online or in viewbooks.</strong></p>
    <p><em>You may also find the <a href="/programcomparisontool">Program Comparison Tool</a> on QUÉtudes-info helpful, as it lists prerequisites and cutoffs specified by CEGEPs on their websites, viewbooks, program brochures and more.</em></p>

    <h3 class="silver-bg mb-2">Passions and interests</h3>
    <p>Here are some simple but significant questions to reflect on: What drives you? What piques your curiosity? What
    motivates you?</p>
    <p>It's okay if you have multiple answers to these questions. If you're having trouble coming up with responses or
    narrowing things down, try thinking about your strengths, likes and dislikes. What are your strongest subjects at school
    or even outside of school? What do you enjoy learning or doing the most? What are the disciplines you'll want to avoid
    for sure?</p>
    
    <div class="about-grid">
      <div class="image-label">
        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=709&q=80"
            alt="Red apple on top of a pile of four books">
        <p class="caption">Photo by Element5 Digital on Unsplash.</p>
      </div>
      <ul>
        <li>Do you have a favourite subject at school?</li>
        <li>Do any particular disciplines interest you?
          <ul class="inner">
            <li>Math, the sciences (physics, biology...), the social sciences (geography, history, business...), the arts...</li>
          </ul>
        </li>
        <li>What are your hobbies? What are some things you like to do in your free time?
          <ul class="inner">
            <li>Photography, blogging, programming, solving puzzles, drawing, painting, woodworking, crafting, reading, writing, acting,
              singing, playing an instrument...</li>
          </ul>
        </li>
        <li>Is there anything you enjoy studying, whether it's at school or in your own time? Do you like to self-learn?</li>
      </ul>
    </div>
    <p>Give the <strong>future</strong> some thought as well—what are some prospective university majors or careers for you? Do you aspire to be
    a scientist? An engineer? An educator? Do you see yourself becoming an artist or performer?</p>
    <p>These are some things to think about on your own, but also to discuss with someone else if you so wish—that person may
    be the guidance counsellor, a teacher, your parents, a trusted adult…</p>
    <div class="about-grid">
      <ul>
        <li>Do you have a dream job? What are some careers you think you'll enjoy?</li>
        <li>How do different jobs align with the disciplines you like? With your strengths and traits?</li>
        <li>What about the careers that would be a mismatch? Why do you think that those jobs wouldn't suit you?</li>
        <li>Where do you see yourself in the near future? In 5 or 10 years?</li>
        <li>Think on your past experiences and opportunities—what did you learn from them? What was the best part of an activity?
        What were your favourite memories?</li>
      </ul>
      <div class="image-label">
        <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Man facing three computer monitors while sitting">
        <p class="caption">Photo by Max Duzij on Unsplash.</p>
      </div>
    </div>
    <p>At the end of the day, just do your best to <strong>choose a program that aligns with your passions and interests</strong>: if you're undecided, start by eliminating anything that doesn't appeal to you, and pay attention to what you like, both
    at and outside of school. Do you enjoy reading, analyzing texts, or writing? Perhaps you like technology, computer
    programming, problem solving or conducting experiments? Or maybe you find that you love to socialize, that helping
    others and empathizing with them comes naturally to you… the list of possibilities goes on and on. <strong>Get to know yourself and understand who you are</strong>—interests, hobbies, values, goals, skills, character traits and habits—it's all part of exploring your personality and
    what the future holds for you.</p>
    <hr>
    <Disclaimer> Tip: try comparing pre-university programs with our <a href="/programcomparisontool" target="_blank" class="btn btn-primary">Program Comparison Tool</a></Disclaimer>
  </div>

  <Pagination {section} {previous} {next} />
</section>