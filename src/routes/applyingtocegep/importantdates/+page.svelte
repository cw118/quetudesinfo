<script>
  import SideNav from "../../../components/SideNav.svelte";
  import Pagination from "../../../components/Pagination.svelte";
  import Disclaimer from "../../../components/Disclaimer.svelte";
  import { ApplyingToCegep } from "../../../sectionPages";

  const pages = ApplyingToCegep, section = 'Applying to CEGEP', previous = ApplyingToCegep[2].link, next = ApplyingToCegep[4].link;

  const chapters = [
    {
      name: 'Important Dates',
      link: 'important-dates',
    },
    {
      name: 'October 2023',
      link: 'october-2023',
    },
    {
      name: 'November 2023',
      link: 'november-2023',
    },
    {
      name: 'December 2023',
      link: 'december-2023',
    },
    {
      name: 'January 2024',
      link: 'january-2024',
    },
    {
      name: 'February 2024',
      link: 'february-2024',
    },
    {
      name: 'March 2024',
      link: 'march-2024',
    },
  ]
</script>

<svelte:head>
  <meta name="description" content="Important dates concerning CEGEP" />
  <title>Important Dates | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {previous} {next} />

  <div id={chapters[0].link}>
    <h2 class="skyblue-bg">{chapters[0].name}</h2>
    <p>A condensed calendar of important events and deadlines for CEGEP applicants, parents, and curious students. For <strong>links to official CEGEP sites and (virtual) open house sites, see <a href="/cegep-links" target="_blank">CEGEP Links</a></strong> (opens in a new tab).</p>
    <p><strong>Student-for-a-Day</strong> visits can usually be scheduled at individual CEGEPs from October to February (time period/months vary for each
    college). <strong>Visit the <a href="/cegep-links" target="_blank">official sites</a> for details and to register.</strong></p>
    <Disclaimer> From March to April, most CEGEPs will begin sending out admission decisions (Also note that SRAM-affiliated CEGEPs are an exception). <strong>Make sure to check your email and application modules/statuses every so often, and confirm your acceptance (if offered admission) before the deadline provided!</strong></Disclaimer>
  </div>

  <div id={chapters[1].link}>
    <h2 class="lightblue-bg">{chapters[1].name}</h2>
  </div>

  <div id={chapters[2].link}>
    <h2 class="lightblue-bg">{chapters[2].name}</h2>
    <div class="event-row">
      <div class="event clearfix">
        <div class="time">
          <h2>1<br><span>Nov</span><br><span>2024</span></h2>
        </div>
        <div class="details">
          <h3>Winter 2024 Deadline</h3>
          <p>High school students and more: the 2024 Winter semester application deadline (and SRAM's round 1 deadline) is <strong>Wednesday, November 1, 2023</strong> at 11:59 PM. <a href="/usefullinks/cegeplinks#application-modules-and-guides" target="_blank">CEGEP application modules</a> will open in mid-September.</p>
        </div>
      </div>
    </div>
  </div>

  <div id={chapters[3].link}>
    <h2 class="lightblue-bg">{chapters[3].name}</h2>
  </div>

  <div id={chapters[4].link}>
    <h2 class="lightgreen-bg">{chapters[4].name}</h2>
  </div>

  <div id={chapters[5].link}>
    <h2 class="lightgreen-bg">{chapters[5].name}</h2>
  </div>

  <div id={chapters[6].link}>
    <h2 class="lightgreen-bg">{chapters[6].name}</h2>
    <div class="event-row">
      <div class="event clearfix">
        <div class="time">
          <h2>1<br><span>March</span><br><span>2024</span></h2>
        </div>
        <div class="details">
          <h3>Fall 2024 Deadline</h3>
          <p>High school students and more: the 2023 Fall semester application deadline (and SRAM's round 1 deadline) is <strong>Friday, March 1, 2024</strong> at 11:59 PM. <a href="/usefullinks/cegeplinks#application-modules-and-guides" target="_blank">CEGEP application modules</a> will open in mid-January.</p>
        </div>
      </div>
    </div>
  </div>

  <Pagination {section} {previous} {next} />
</section>

<style>
.event-row {
  margin: 5px 10px 45px 10px;
  display: grid;
}

.event-row .event {
  margin: 8px;
  height: 100%;
  border: solid white 0.5rem;
}

@media screen and (min-width: 1000px) {
  .event-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

.event-row .event .time {
  background: #262626;
  width: 30%;
  height: 100%;
  text-align: center;
  float: left;
  display: grid;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.event-row .event .time h2 {
  margin: 0;
  color: #fff;
  font-size: 40px;
}

.event-row .event .time h2 span {
  font-size: 25px;
}

.event-row .event .details {
  padding: 10px;
  background: #f2f2f2;
  color: black;
  float: left;
  width: 70%;
  height: 100%;
}

@media only screen and (max-width: 319px) {
  .event-row .event .time {
    display: none;
  }

  .event-row .event .details {
    width: 100%;
  }

  .event-row .event {
    border: inset 1px black;
  }
}
</style>