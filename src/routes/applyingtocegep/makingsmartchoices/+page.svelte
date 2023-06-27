<script>
  import SideNav from "../../../components/SideNav.svelte";
  import Pagination from "../../../components/Pagination.svelte";
  import Disclaimer from "../../../components/Disclaimer.svelte";
  import { ApplyingToCegep } from "../../../sectionPages";

  const pages = ApplyingToCegep, section = 'Applying to CEGEP', previous = ApplyingToCegep[1].link, next = ApplyingToCegep[3].link;

  const chapters = [
    {
      name: 'Making Smart Choices',
      link: 'making-smart-choices',
    },
    {
      name: 'Planning and Timeline',
      link: 'planning-and-timeline',
    },
    {
      name: 'Practice Applications',
      link: 'practice-applications',
    },
    {
      name: 'Second-choice Programs',
      link: 'second-choice-programs',
    },
    {
      name: 'Summary and Takeaways',
      link: 'summary-and-takeaways',
    }
  ]
</script>

<svelte:head>
  <meta name="description" content="Learn about plans and strategies regarding CEGEP applications" />
  <title>Making Smart Choices | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {previous} {next} />

  <div id={chapters[0].link}>
    <p><i class="fas fa-circle-exclamation"></i> <strong>This page is a continuation of "Choosing a CEGEP and Program". If you haven't read that page yet, check it out here: <a href="/applyingtocegep/choosingacegepandprogram">Choosing a CEGEP and Program</a>.</strong></p>
    <h2 class="skyblue-bg">{chapters[0].name}</h2>
    <p>There are certain strategies and things to keep in mind when you plan for and begin the application process. It's safer
    to <strong>avoid making any assumptions</strong> when you're applying to CEGEP—don't be overconfident about where you'll get accepted.
    Even if you know which CEGEP you want to attend, and even if you're somehow "certain" that you'll get accepted at a
    college, <strong>always apply to multiple CEGEPs</strong>!</p>
    <Disclaimer> This guide is primarily for Quebec high school students applying to CEGEP (day division, fall semester). The process may
    vary slightly for out-of-province (Canadian), international, CEGEP transfer and Continuing Education applicants.</Disclaimer>

  </div>
  
  <div id={chapters[1].link}>
    <h2 class="yellow-bg">{chapters[1].name}</h2>
    <p>Firstly, know that CEGEP applications are <strong>not</strong> first-come first-serve, provided you <strong>apply before the deadline</strong>. Modules open in January, and you must submit your
    application by March 1—this includes all documents and payment (application fees). While you technically have until the
    deadline to submit everything, it's crucial that you <strong>do not leave anything to the last minute</strong>. Not only would doing so
    make it easy to forget something and miss an application requirement, but it would also create stress as you rush to
    complete the application(s) correctly (don't forget that you have to balance applications and schoolwork!).</p>
    <p>Instead, start <strong>planning ahead</strong> before you apply. Ideally, you should do some <strong>practice runs</strong> before you actually apply.
    <strong>Know the program requirements, gather the necessary documentation, and be prepared to pay application fees.</strong> If a letter
    of intent, portfolio, or any requirement of the sort applies to your desired program(s), have them complete and prepared
    before applying.</p>
    <p><strong>Begin applying a good amount of time before the deadline</strong> (at least a week earlier) so that you can take your time: follow the instructions carefully, and ask your guidance
    counsellor or a trusted adult any questions that come up during the process. Then, once you're finalizing your
    applications, verify that you've done everything correctly, and that you've submitted everything required of you; if
    everything looks good and you're ready, submit your applications.</p>
  </div>
  
  <div id={chapters[2].link}>
    <h2 class="skyblue-bg">{chapters[2].name}</h2>
    <p>There are a few different application modules, most of which, if not all, give you the option of completing an
    <strong>application simulation</strong>. (We'll go over the application modules in more detail on the next page, <a href="/applyingtocegep/applicationmodules">Application Modules</a>.) If
    a simulation option is available, it is highly recommended that you <strong>do a practice run</strong>—familiarize yourself with the
    module, know what you'll need to apply (documents and more), and reduce the stress experienced during the real
    applications by going through the actual process risk-free. Just <strong>remember to submit a real application afterwards!</strong></p>
    <div class="image-label">
      <p class="label">Dawson College's Application Centre: Simulate or Start an Application</p>
      <img src="/assets/applyingtocegep/applications/dawson-applicationsystem.png"
          class="small-img" alt="Dawson College application module with buttons to apply and to simulate an application">
      <p class="caption">Photo by Dawson College. Copyright by Dawson College, 2021.</p>
    </div>
  </div>

  <div id={chapters[3].link}>
    <h2 class="yellow-bg">{chapters[3].name}</h2>
    <p>Many application modules require you to <strong>provide two program options</strong> right away (again, more on this in <a href="/applyingtocegep/applicationmodules">Application Modules</a>). There are some strategies when it comes to choosing the second option, since you don't want to select one
    that's harder to get into than your first choice. In short, <strong>a second-choice program should be easier to get into than
    your first choice</strong>.</p>
    <p>When applying (and asked to provide two program choices), <strong>AVOID</strong> the following combinations:</p>
    <ul>
      <li><strong>Two options/profiles of the same program:</strong>
        <ul class="inner ul-blue">
          <li>These generally have similar or even identical prerequisites, so if you don't qualify for admission to your first
          choice, you likely won't qualify for the 2nd choice program either.</li>
          <li>For example: Health Science (1st choice), Pure and Applied Science (2nd choice), or the other way around</li>
          <li>Example with Arts (ALC) at Dawson College: Graphic Design (1st choice), Illustration (2nd choice)</li>
          <li>Example with Arts (ALC) at Vanier College: Languages and Cultures (1st choice), Communications, Media and Studio Arts (2nd
          choice)</li>
        </ul>
      </li>
      <li><strong>Second-choice program with higher requirements/cutoffs:</strong>
        <ul class="inner ul-blue">
          <li>Make sure to select a second-choice program with less or lower requirements (prerequisites) than your first choice!
          Otherwise, if you don't qualify for your first choice program, you'll be even less qualified for the second. See the
          examples:</li>
          <li>General Social Science (1st choice), Commerce (2nd choice—<em>requires Math 506, which the 1st choice does not</em>)</li>
          <li>Example specific to Dawson College: Arts and Culture (1st choice), Visual Arts (2nd choice—<em>requires a portfolio, which the 1st choice does not</em>)</li>
          <li>Liberal Arts (1st choice), Arts and Sciences (2nd choice—<em>requires Math 506, Physics 504, Chemistry 504 and potentially a letter of intent, none of which are prerequisites for
          the 1st choice</em>)</li>
        </ul>
      </li>
      <li><strong>A pre-university program and a technical program:</strong>
        <ul class="inner ul-blue">
          <li>This one goes both ways: don't have a pre-university program as your second option with a technical program as your
          first option, and don't have a technical program as your second option with a pre-university program as your first
          option.</li>
          <li>Remember that technical programs accept a rather small number of students a year, which makes them quite competitive.</li>
        </ul>
      </li>
    </ul>
    <p>So, we repeat: <strong>do <em>NOT</em> choose the above combinations</strong> when applying to CEGEP! Always keep in mind that <strong>a second-choice program should be easier to get into than your first choice</strong>.</p>
  </div>

  <div id={chapters[4].link}>
    <h2 class="skyblue-bg">{chapters[4].name}</h2>
    <p>Here's a summary of the first three pages of the Applying to CEGEP section (<a href="/applyingtocegep">Applying to CEGEP</a>, <a href="/applyingtocegep/choosingacegepandprogram">Choosing a CEGEP and
    Program</a>, Making smart choices): the "Must Knows" of CEGEP admissions and applications in general.</p>
    <Disclaimer> Please note that these are general guidelines and that following them does <strong>not</strong> guarantee any outcomes, including but not
    limited to successful completion of an application, successful submission of an application, admission to a college,
    etc.</Disclaimer>
    <hr>
    <h4><strong>Program Checklist</strong> <i class="fas fa-tasks"></i></h4>
    <p>Some questions to ask yourself when choosing a CEGEP and program, ideally a good amount of time before you start
    applying.</p>
    <p>Is this CEGEP a good fit:</p>
    <ul class="ul-blue">
      <li><strong>Does it offer your desired program?</strong></li>
      <li>Does it have a strong support system? (Student services and support)</li>
      <li>What fees do you need to pay?</li>
      <li>How is its reputation?</li>
      <li>Is its location convenient, or do you like where it's located?</li>
      <li>What facilities does it have? What clubs and activities does it offer?</li>
    </ul>
    <p>Is this program a good fit:</p>
    <ul class="ul-blue">
      <li><strong>Does the discipline interest and/or intrigue you?</strong></li>
      <li>Do you wish to study this field after CEGEP, or to find a career in this field?</li>
      <li><strong>Do I have/meet all of the program requirements?</strong></li>
    </ul>
    <p>See <a href="/applyingtocegep/choosingacegepandprogram">Choosing a CEGEP and Program</a> for more details.</p><br>
    <p>A <strong>program's prerequisites and cutoffs (requirements)</strong> are determining factors in CEGEP admissions. Here are some important things to check and look out for when choosing a
    program/applying to CEGEP.</p>
    <p><strong>If you:</strong></p>
    <ul class="ul-blue">
      <li>don't have a prerequisite,</li>
      <li>aren't currently taking the prerequisite high school course,</li>
      <li>won't earn the prerequisite credits before the end of your secondary V school year,</li>
    </ul>
    <p>it may be best to avoid applying to this particular college program.</p>
    <p>A similar guideline applies to cutoffs. <strong>If your grades:</strong></p>
    <ul class="ul-blue">
      <li>don't meet the cutoffs,</li>
      <li>are just barely below or above the cutoffs,</li>
    </ul>
    <p>you may want to avoid applying to this particular college program.</p>
    <p>Another similar suggestion pertaining to cutoffs is the following: if your marks are borderline, don't take the risk of
    applying to this particular college program on more than 3 applications.</p>
    <hr>

    <h4><strong>TODO</strong> <i class="fas fa-check-square"></i></h4>
    <p>Here's a list of what to do and some recommendations when applying to CEGEP.</p>
    <ul class="ul-blue">
      <li><strong>Check program requirements!</strong></li>
      <li><strong>Apply to multiple CEGEPs!</strong></li>
      <li><strong>Respect deadlines!</strong></li>
      <li><strong>Remember that CEGEP applications are <u>not</u> first-come first-serve</strong>, as long as you apply <strong>before the deadline</strong></li>
      <li>Plan and strategize:
        <ul class="inner ul-blue">
          <li>Make a plan for each CEGEP you'll be applying to: figure out what program option/options you'll select</li>
          <li>Have the required documents prepared before you apply</li>
          <li>Start your applications early and give yourself a week or more before the deadline (you may wish to start earlier)</li>
          <li><strong>Double-check that you've done everything correctly</strong></li>
        </ul>
      </li>
      <li>Simulate applications:
        <ul class="inner ul-blue">
          <li>Do practice runs if an application module provides the option</li>
          <li><strong>Note that <u>you must then submit a real application</u>, even after completing a simulated application!</strong></li>
        </ul>
      </li>
      <li>Choose a second-choice program that is easier to get into than your first-choice program. Compare your first and
      potential second choices, ensuring that the second-choice program meets these criteria:
        <ul class="inner ul-blue">
          <li>Less requirements</li>
          <li>Lower cutoffs</li>
          <li>If your first choice is a pre-university program, make sure that your second choice is also a pre-university program</li>
          <li>If your first choice is a technical program, make sure that your second choice is also a technical program</li>
        </ul>
      </li>
    </ul>
    <p class="sources">Sources: <a href="https://loyola.ca/images/articlemedia/students/2019-2020/2020_-_CEGEP_Applications__Parent.pdf">Loyola High School — 2020 CEGEP Applications</a>, documents from various high schools, notes from previous CEGEP information sessions</p>
    <hr>
    <p><strong>Want to see some important dates, including deadlines and open houses?</strong> Continue to <strong><a href="/applyingtocegep/importantdates">Important Dates</a></strong>.</p>
    <p><strong>Ready to learn about each CEGEP's application module/how to actually apply?</strong> Go to <strong><a href="/applyingtocegep/applicationmodules">Application Modules</a></strong>.</p>
  </div>

  <Pagination {section} {previous} {next} />
</section>