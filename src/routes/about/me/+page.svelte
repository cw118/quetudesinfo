<script>
  import SideNav from "../../../components/SideNav.svelte";
  import Pagination from "../../../components/Pagination.svelte";
  import { AboutQuetudesInfo } from "../../../sectionPages";

  const pages = AboutQuetudesInfo, section = 'About QUÉtudes-info', previous = AboutQuetudesInfo[1].link, next = AboutQuetudesInfo[3].link;

  const chapters = [
    {
      name: 'About Me',
      link: 'about-me',
    },
    {
      name: 'CS50x and Computer Science',
      link: 'cs50x-and-computer-science',
    },
    {
      name: 'Links',
      link: 'links',
    }
  ]
</script>

<svelte:head>
  <meta name="description" content="Learn more about the student who created and maintains QUÉtudes-info" />
  <title>About Me | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {previous} {next} />

  <div id={chapters[0].link}>
    <h2 class="salmon-bg">{chapters[0].name}</h2>
    <p>Hi there! First and foremost, as the developer of QUÉtudes-info, I truly hope you've found this site useful, or that it
    will help you in the future. And before I get to introducing myself, I have a final reminder for you that even after
    reading through everything here on QUÉtudes-info, you should <strong>check the official sites and documents for the most accurate and up-to-date information</strong>.</p>
    <p>And now, a bit about me. I myself was a high school student in Quebec when I started working on QUÉtudes-info (in sec 5
    as of the 2021-22 school year), so hello to the parents and fellow students who are reading this right now!</p>
    <p>CEGEP is a step that I had been researching and worrying about for a while, but this
    actually meant I understood CEGEP very thoroughly. I know firsthand that the process can be
    stressful, confusing, but also exciting, so I decided to combine my "experience" in this topic with my interests and
    skills to create a website about CEGEP. The idea with QUÉtudes-info is thus to gather information in one place <em>(and
    hopefully save you from hours of searching all over the place just looking for one tiny piece of info)</em>, reduce stress
    over CEGEP, as well as reassure students and parents.</p>
    <p>Now, on to my skills and interests. I absolutely love math, science, and really anything to do with technology and
    problem solving, so I wanted to try my hand at computer science and programming. Though I initially tried to learn
    coding through different websites, videos, and books on my own, I very quickly realized that I was getting nowhere with
    this method. So, the summer after sec 4, I made it my top priority to learn computer science (CS)—this time, by taking a free
    online course from Harvard University.</p>
  </div>

  <div id={chapters[1].link}>
    <h2 class="skyblue-bg">{chapters[1].name}</h2>
    <p>I began CS50x's Introduction to Computer Science, a free Harvard course available on edX and their OpenCourseWare (both
    linked <a href="#links">below</a> and in the <a href="/usefullinks/resources" target="_blank">Resources section</a>), in early July. I highly recommend CS50x for anyone interested in coding and
    computer science—it's nicely structured and provides you with a strong skill set that you'll find indispensable even
    beyond the course.</p>
    <div class="image-label">
      <img src="https://prod-discovery.edx-cdn.org/media/course/image/da1b2400-322b-459b-97b0-0c557f05d017-3b9fb73b5d5d.small.jpg" class="xsmall-img" alt="CS50 text over background of students attending Harvard CS50 lecture">
      <p class="caption">Photo by Harvard University. Copyright by The President and Fellows of Harvard College, 2021.</p>
    </div>
    <p>The lectures were super engaging and informative, the labs and problem sets got extremely challenging at times, but I
    found it all fun and fascinating. Thanks to CS50x, I learned about computer science principles, became proficient in
    multiple programming languages (C, Python, SQL, JavaScript and more!) and got the confidence to build this site on my
    own. A huge thank-you to professor David Malan, Doug Lloyd, Brian Yu, and the entire CS50 team for making CS50x possible
    and available to the world—the course was life-changing for me, so thank you all.</p>
    <p>Once I'd watched all the lectures and completed every lab and problem set, the last step was the final project. I really
    liked the idea of helping others better understand CEGEP, as well as sharing my knowledge on the subject with others,
    since I'd been doing research on the topic for such a long time. So I chose to create the QUÉtudes-info website as my
    final project <em>(read more about how I made the site <a href="/about/project">here</a>)</em>. I'd also been thinking about a tool that allowed people to
    compare CEGEP programs side-by-side, and thanks to CS50x, I was actually able to make this tool myself <em>(see the <a href="/programcomparisontool" target="_blank">Program
    Comparison Tool</a>)</em>.</p>
    <p>I learned so much as I developed QUÉtudes-info, both about CEGEP and web development. Web programming, for me, combines
    creativity, logic and technology into one discipline—I love how it allows you to be artistic and mathematical/scientific
    at once. I'm also continuing my CS journey by learning more programming languages and tools.</p>
    <p><em>Also, if any programmers out there look at my current code, I know it's a mess. I went into this project with
    just the very basics of HTML, CSS and JavaScript, so I was learning about new and more effective features along the way.
    I do hope to clean things up in the future.</em></p><hr>
    <p>And that's all I have to say about myself—if you're looking for the CS50x course, I've provided the links below in the
    <a href="#links">Links</a> part of this page. <strong>Thank you so much for visiting my site, and here's a final reminder</strong> in case you missed it
    earlier: I've worked and continue to work tirelessly to assure the correctness of the site's contents, but <strong><u>it is always
    best to check and/or double-check the official sites!</u></strong> I try to update QUÉtudes-info to the best of my ability, but with
    so much information from different institutions to keep track of, it's impossible to add and include every new update
    from every school or organization. I'll say it again here: <strong>always check and/or double-check the official sites for the most accurate and up-to-date information</strong>.</p>
  </div>

  <div id={chapters[2].link}>
    <h2 class="salmon-bg">{chapters[2].name}</h2>
    <ul>
      <li>The CS50 course on edX**: <a href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x" target="_blank">https://www.edx.org/course/introduction-computer-science-harvardx-cs50x</a></li>
      <li>CS50's OpenCourseWare (for Introduction to Computer Science, course is updated annually): <a href="https://cs50.harvard.edu/x/" target="_blank">https://cs50.harvard.edu/x/</a></li>
    </ul>
    <p><em>**Note that on edX, there's a paid verified certificate available for the course, but it is <strong>not</strong> necessary to enroll and
    complete CS50! Harvard's CS50 courses have their own gradebook that you'll use instead of edX's, and once you've
    completed 100% of the course in the official CS50 gradebook, you'll get a free certificate of completion.</em></p>
  </div>

  <Pagination {section} {previous} {next} />
</section>