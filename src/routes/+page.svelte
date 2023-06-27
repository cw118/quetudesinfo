<svelte:head>
  <meta name="description" content="QUÉtudes-info, guide to CEGEP for prospective students">
  <title>QUÉtudes-info: Guide to CEGEP</title>
</svelte:head>

<script>
  import { fade } from "svelte/transition";

  let showAlert = true;

  const closeAlert = () => showAlert = false;
</script>

{#if showAlert}
<div class="custom-alert" out:fade>
  <span class="msg"><i class="fas fa-info-circle"></i> <strong>Disclaimer:</strong> QUÉtudes-info is <em>not</em> affiliated with any mentioned schools, organizations or institutions. <em>This is <strong>not</strong> an official website</em>. For more information, please see <a href="/about/disclaimersandterms" class="alert-link">Disclaimers and Terms of Use</a>.</span>
  <button class="close-btn" on:click={closeAlert}>
    <i class="fas fa-times"></i>
  </button>
</div>
{/if}

<div id="get-started" class="lightblue-bg">
  <h1>Welcome to QUÉtudes-info!</h1>
  <h4>As the transition from high school to university and to the workforce, CEGEP is a pivotal step for Quebec students.<br>Learn more about the CEGEP system and the options available to you:</h4>
</div>

<div id="start-cards">
  <div class="card-item text-center">                        
    <img class="p-0" src="/assets/home/quebec-scenery.webp" alt="Quebec scenery, by Rich Martello">
    <div class="overlay">
        <div class="citation">Photo by Rich Martello on Unsplash, 60% opacity</div>
        <div class="custom-card-title">Not sure what CEGEP is, or what CEGEPs are out there?</div>
        <div class="card-button"><a class="btn btn-light" href="/whatiscegep">What is CEGEP</a></div>
    </div>                        
  </div>
  <div class="card-item text-center">
    <img class="p-0" src="/assets/home/dawson-college.webp" alt="Dawson College, by Jean Gagnon">
    <div class="overlay">
        <div class="citation">Photo by Jean Gagnon, CC 3.0 licence, 60% opacity</div>
        <div class="custom-card-title">Want to know more about CEGEP admissions and applications?</div>
        <div class="card-button"><a class="btn btn-light" href="/applyingtocegep">Applying to CEGEP</a>
      </div>
    </div>
  </div>
  <div class="card-item text-center">
    <img class="p-0" src="/assets/home/scientist.webp"
        alt="Scientist in lab, by Talha Hassan">
    <div class="overlay">
        <div class="citation">Photo by Talha Hassan on Unsplash, 60% opacity</div>
        <div class="custom-card-title">Unsure about the differences between some CEGEP programs?</div>
        <div class="card-button"><a class="btn btn-light" href="/programcomparisontool">Program Comparison Tool</a>
        </div>
        <small>*Only pre-university programs can be compared</small>
    </div>
  </div>
  <div class="card-item text-center">
    <img class="p-0" src="/assets/home/computer-lab.webp"
        alt="Students in computer lab, by J. Paxon Reyes">
    <div class="overlay">
        <div class="citation">Photo by J. Paxon Reyes, CC BY-NC 2.0 licence, 60% opacity</div>
        <div class="custom-card-title">Already know about CEGEP and looking for the official sites?</div>
        <div class="card-button"><a class="btn btn-light" href="/usefullinks/cegeplinks">CEGEP Links</a>
        </div>
    </div>
  </div>
</div>

<div id="why-cegep">
  <h1><i class="fas fa-user-graduate"></i> WHY CEGEP?</h1>
  <div class="cegep-reasons">
    <div class="reason-column"><ul>
      <li>Internationally recognized for high-quality education</li>
      <li>A close-knit and stimulating learning environment for students</li>
      <li>Interactive and dynamic courses with a focus on student success</li>
      <li>Be part of a vibrant student life and community</li>
    </ul></div>
    <div class="reason-column"><ul>
      <li>Increased accessibility to higher education</li>
      <li>Explore your interests, passions, and career options</li>
      <li>Stepping stone to university and/or the workforce</li>
      <li>A CEGEP diploma is in increasing demand on the job market</li>
    </ul></div>
  </div>
  <div class="sources">
    <small class="text-muted">Sources: <a href="https://fedecegeps.ca/en/what-is-a-cegep/">Fédération des cégeps</a>, <a href="https://www.educationusacanada.ca/u-s-educators/cegep/">EducationUSA Canada</a>, <a href="https://www.sram.qc.ca/international-student/why-come-to-quebec-to-study-in-a-cegep">SRAM</a></small>
  </div>
</div>

<div id="dates-important">
  <h1><a href="/applyingtocegep/importantdates"><i class="fas fa-calendar-week"></i> DATES TO REMEMBER</a></h1>
  <div class="events">
    <div class="event clearfix">
        <div class="time">
          <h2><span>Oct. to Nov.</span><br><span>2023</span></h2>
        </div>
        <div class="details">
          <h3 class="px-0 py-2">Fall Open Houses</h3>
          <p>Open houses, whether in-person or virtual, are perfect for touring campuses, and meeting students and faculty. They're a great way to get to know a CEGEP better!</p>
        </div>
    </div>
    <div class="event clearfix">
        <div class="time">
          <h2>1<br><span>Nov</span><br><span>2023</span></h2>
        </div>
        <div class="details">
          <h3 class="px-0 py-2">Winter 2024 Deadline</h3>
          <p>For CEGEP transfer students: the application deadline for the 2024 winter semester is November 1. CEGEP application modules will open in mid-September.</p>
        </div>
    </div>
    <div class="event clearfix">
        <div class="time">
          <h2><span>Jan. to Feb.<br>2024</span></h2>
        </div>
        <div class="details">
          <h3 class="px-0 py-2">Winter Open Houses</h3>
          <p>Missed the fall open houses or still want to learn more about certain CEGEPs? Check for winter events! Open houses, whether in-person or virtual, are perfect for touring campuses, and meeting students and faculty.</p>
        </div>
    </div>
    <div class="event clearfix">
      <div class="time">
        <h2>1<br><span>March</span><br><span>2024</span></h2>
      </div>
      <div class="details">
        <h3 class="px-0 py-2">Fall 2024 Deadline</h3>
        <p>High school students and more: the 2024 Fall semester application deadline is March 1. CEGEP application modules typically start to open in mid-January.</p>
      </div>
    </div>
  </div>
</div>

<div id="resources-hero">
  <div class="hero-footer">
    <p class="text-white-50">Photo by Freddie Marriage on Unsplash</p>
  </div>
  <div class="hero-text">
    <h3>Looking for homework help, tutorials, or want to learn something new?</h3>
    <p>Check out these</p>
    <a class="btn btn-outline-light" href="/usefullinks/resources">Resources</a>
  </div>
</div>

<style>
.custom-alert {
  background: #ffdb9b;
  padding: 15px 25px;
  width: 100%;
  border-bottom: solid 1px black;
  border-left: 8px solid #ffa502;
  position: relative;
  z-index: 500;
}

.custom-alert .msg {
  font-size: 18px;
}

@media screen and (max-width: 767px) {
  .custom-alert {
    padding: 10px 15px;
  }
  .custom-alert .msg {
    font-size: 16px;
  }
}

.custom-alert a {
  color: #805100;
  font-weight: bold;
}

.custom-alert .close-btn {
  padding-left: 3px;
  font-size: 20px;
  transition: color 0.25s;
  background: none;
  border: none;
}
.close-btn:hover {
  color: #986300;
  cursor: pointer;
}

#get-started h1 {
  font-weight: bold;
  text-align: center;
  padding: 15px 20px;
  margin: 0;
}

#get-started h4 {
  text-align: center;
  padding: 15px 25px 20px;
  margin: 0;
  color: #00001a;
  line-height: 1.8;
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  #start-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1024px) {
  #start-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}

#start-cards div.card-item {
  position: relative;
  overflow: hidden;
  border: solid 0.5px #f2f2f2;
  display: grid;
}

#start-cards div.card-item img {
  opacity: 0.6;
  width: 100%;
  height: 250px;
  transition: 0.5s all ease-in-out;
}

#start-cards div.card-item:hover img {
  transform: scale(1.05);
}

#start-cards div.card-item div.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 1rem;
}

#start-cards div.card-item div.overlay .custom-card-title {
  color: black;
  background: #ffffff35;
  border-radius: 15px;
  font-size: 26px;
  margin-top: 15px;
}

#start-cards div.card-item div.overlay div.card-button a {
  padding: 10px 15px;
  font-size: 20px;
  box-shadow: 4px 5px 12px 1px black;
}

#start-cards div.card-item div.overlay div.card-button {
  margin-top: 25px;
}

#start-cards div.card-item div.overlay div.citation {
  font-size: 10px;
  font-weight: normal;
  font-family: Arial;
  color: #1a1a1a;
}

@media only screen and (max-width: 300px) {
  #start-cards div.card-item div.overlay div.citation {
    font-size: 9px;
  }
  #start-cards div.card-item div.overlay div.card-button a {
    font-size: 20px;
  }
  #start-cards div.card-item div.overlay .custom-card-title {
    font-size: 23px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1199px) {
  #start-cards div.card-item div.overlay div.citation {
    font-size: 8px;
  }
  #start-cards div.card-item div.overlay div.card-button a {
    font-size: 18px;
  }
  #start-cards div.card-item div.overlay .custom-card-title {
    font-size: 22px;
  }
}

.cegep-reasons {
  padding: 15px 45px;
  background: #fcfcfc;
}

.reason-column ul {
  font-size: 20px;
  margin: 0;
}

.reason-column ul li {
  display: list-item;
  padding: 8px;
  list-style-type: square;
}

@media screen and (max-width: 640px) {
  #why-cegep h1 {
    font-size: 32px;
  }
  .reason-column ul {
    font-size: 16px;
  }
}

@media screen and (min-width: 768px) {
  .cegep-reasons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .reason-column {
    padding-left: 10px;
    padding-right: 10px;
  }
}

#why-cegep h1 {
  text-align: center;
  padding: 15px 15px 10px;
  margin: 0;
  background: navy;
  color: #fcfcfc;
}

.sources {
  padding: 0px 5px 5px;
}

#why-cegep small a {
  color: #262626;
}

#dates-important h1 {
  background: deepskyblue;
  padding: 15px;
  margin: 0;
  text-align: center;
}

#dates-important h1 a {
  color: #000;
  text-decoration: none;   
  transition: color 0.2s;
}

#dates-important h1 a:hover {
  color: #333;
}

#dates-important .events .event {
  padding: 10px 5px;
  margin-left: 1px;
  margin-right: 1px;
  height: 100%;
}

#dates-important .events {
  border-top: solid 1px lightgray;
  border-bottom: solid 1px lightgray;
  display: grid;
}

@media screen and (max-width: 767px) {
  #dates-important .events {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (min-width: 768px) and (max-width: 1199px) {
  #dates-important .events {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 1200px) {
  #dates-important .events {
    grid-template-columns: repeat(4, 1fr);
  }
}

#dates-important .events .event .time {
  background: #262626;
  width: 30%;
  height: 100%;
  text-align: center;
  float: left;
  display: grid;
  align-items: center;
  margin: 0;
  padding: 0;
}

#dates-important .events .event .time h2 {
  margin: 0;
  color: #fff;
  font-size: 45px;
}

#dates-important .events .event .time h2 span {
  font-size: 30px;
}

#dates-important .events .event .details {
  padding: 10px 15px;
  background: #f2f2f2;
  color: black;
  float: left;
  width: 70%;
  height: 100%;
}

#resources-hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80');
  height: 300px;
  padding: 7px 10px;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

#resources-hero .hero-text {
  text-align: center;
  margin: auto;
  color: white;
  font-weight: bold;
}

#resources-hero .hero-text p {
  font-size: 20px;
  font-weight: normal;
  margin-top: 15px;
}

#resources-hero .hero-text a {
  font-size: 22px;
  padding: 10px 15px;
}

#resources-hero .hero-footer {
  margin-left: 2px;
  font-size: 11px;
}

@media screen and (max-width: 315px) {
  #resources-hero .hero-text h3 {
    font-size: 18px;
  }
  #resources-hero .hero-text p {
    font-size: 16px;
  }
  #resources-hero .hero-text a {
    font-size: 16px;
    padding: 8px;
  }
}

@media screen and (min-width: 316px) and (max-width: 355px) {
  #resources-hero .hero-text h3 {
    font-size: 20px;
  }
  #resources-hero .hero-text p {
    font-size: 16px;
  }
  #resources-hero .hero-text a {
    font-size: 18px;
    padding: 8px;
  }
}

@media screen and (min-width: 356px) and (max-width: 568px) {
  #resources-hero .hero-text h3 {
    font-size: 22px;
  }
  #resources-hero .hero-text p {
    font-size: 18px;
  }
  #resources-hero .hero-text a {
    font-size: 20px;
    padding: 10px;
  }
}
</style>