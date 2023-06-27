<script>
  import { WhatIsCegep, ApplyingToCegep, UsefulLinks, AboutQuetudesInfo } from "../sectionPages";
  export let path = '';
</script>

<nav class="navbar navbar-expand-xl p-0 border-bottom border-white border-2" id="top">
  <div class="container-fluid topnav">
    <a class="navbar-brand" href="/">
      <img id="logo" src="/favicon.svg" alt="QUÉtudes-info" width="60" height="60">
    </a>
    
    <button class="navbar-toggler bg-white fs-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center align-items-center">
        <li class="nav-item">
          <a class={'nav-link' + (path === '/' ? ' active' : '')} aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class={'nav-link' + (path === '/faq' ? ' active' : '')} aria-current="page" href="/faq">FAQ</a>
        </li>
        <li class="nav-item dropdown">
          <a class={"nav-link dropdown-toggle" + (path.includes(WhatIsCegep[0].link) ? ' sect-active' : '')} href={WhatIsCegep[0].link} role="button" aria-label="Links to the What is CEGEP section" data-bs-toggle="dropdown" aria-expanded="false">
            {WhatIsCegep[0].name}
          </a>
          <ul class="dropdown-menu border border-black border-2">
            {#each WhatIsCegep as wicLink (WhatIsCegep.indexOf(wicLink))}
            <li><a class={'nav-link' + (path === wicLink.link ? ' active' : '')} href={wicLink.link}>{wicLink.name}</a></li>
            {/each}
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class={"nav-link dropdown-toggle" + (path.includes(ApplyingToCegep[0].link) ? ' sect-active' : '')} href={ApplyingToCegep[0].link} role="button" aria-label="Links to the Applying to CEGEP section" data-bs-toggle="dropdown" aria-expanded="false">
            {ApplyingToCegep[0].name}
          </a>
          <ul class="dropdown-menu border border-black border-2">
            {#each ApplyingToCegep as atcLink (ApplyingToCegep.indexOf(atcLink))}
            <li><a class={'nav-link' + (path === atcLink.link ? ' active' : '')} href={atcLink.link}>{atcLink.name}</a></li>
            {/each}
          </ul>
        </li>
        <li class="nav-item">
          <a class={'nav-link' + (path === '/programcomparisontool' ? ' active' : '')} href="/programcomparisontool">Program Comparison Tool</a>
        </li>
        <li class="nav-item dropdown">
          <a class={"nav-link dropdown-toggle" + (path.includes('/usefullinks') ? ' sect-active' : '')} href="/usefullinks" role="button" aria-label="Links to the Useful Links section" data-bs-toggle="dropdown" aria-expanded="false">
            Useful Links
          </a>
          <ul class="dropdown-menu border border-black border-2">
            {#each UsefulLinks as ulLink (UsefulLinks.indexOf(ulLink))}
              <li><a class={'nav-link' + (path === ulLink.link ? ' active' : '')} href={ulLink.link}>{ulLink.name}</a></li>
            {/each}
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class={"nav-link dropdown-toggle" + (path.includes('/about') ? ' sect-active' : '')} href={AboutQuetudesInfo[0].link} role="button" aria-label="Links to the About QUÉtudes-info section" data-bs-toggle="dropdown" aria-expanded="false">
            About QUÉtudes-info
          </a>
          <ul class="dropdown-menu border border-black border-2">
            {#each AboutQuetudesInfo as aqiLink (AboutQuetudesInfo.indexOf(aqiLink))}
            <li><a class={'nav-link' + (path === aqiLink.link ? ' active' : '')} href={aqiLink.link}>{aqiLink.name}</a></li>
            {/each}
          </ul>
        </li>
    </div>
  </div>
</nav>

<style>
.topnav, .topnav ul {
  background-color: #003399;
}

.topnav a.nav-link {
  transition: color, background-color 0.3s;
  border-radius: 5px;
  font-size: 1.1rem;
}

.topnav a, .topnav a:hover {
  color: white !important; /* override font color for open dropdowns */
}

.topnav a:hover {
  background-color: #004de6;
}

.sect-active {
  font-weight: 600;
}

.active {
  text-decoration: underline;
}

.nav-item.dropdown {
  z-index: 2000;
}

@media screen and (max-width: 1200px) {
  .topnav a.nav-link {
    padding-left: 0.65rem;
    padding-right: 0.65rem;
  }
}
</style>