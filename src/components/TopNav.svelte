<script>
  export let path = '';
</script>

<nav class="navbar navbar-expand-lg p-0 border-bottom border-white border-2" id="top">
  <div class="container-fluid topnav">
    <a class="navbar-brand" href="/">
      <img id="logo" src="/favicon.svg" alt="QUÉtudes-info" width="60">
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
          <a class={"nav-link dropdown-toggle" + (path.includes('/whatiscegep') ? ' sect-active' : '')} href="/whatiscegep" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            What is CEGEP
          </a>
          <ul class="dropdown-menu border border-black border-2">
            <li><a class={'nav-link' + (path === '/whatiscegep' ? ' active' : '')} href="/whatiscegep">What is CEGEP</a></li>
            <li><a class={'nav-link' + (path === '/whatiscegep/programs' ? ' active' : '')} href="/whatiscegep/programs">Programs</a></li>
            <li><a class={'nav-link' + (path === '/whatiscegep/englishcegeps' ? ' active' : '')} href="/whatiscegep/englishcegeps">English CEGEPs</a></li>
            <li><a class={'nav-link' + (path === '/whatiscegep/therscore' ? ' active' : '')} href="/whatiscegep/therscore">The R-Score</a></li>
            <li><a class={'nav-link' + (path === '/whatiscegep/alternativestocegep' ? ' active' : '')} href="/whatiscegep/alternativestocegep">Alternatives to CEGEP</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class={"nav-link dropdown-toggle" + (path.includes('/applyingtocegep') ? ' sect-active' : '')} href="/applyingtocegep/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Applying to CEGEP
          </a>
          <ul class="dropdown-menu border border-black border-2">
            <li><a class={'nav-link' + (path === '/applyingtocegep' ? ' active' : '')} href="/applyingtocegep/">Applying to CEGEP</a></li>
            <li><a class={'nav-link' + (path === '/applyingtocegep/choosingacegepandprogram' ? ' active' : '')} href="/applyingtocegep/choosingacegepandprogram">Choosing a CEGEP and Program</a></li>
            <li><a class={'nav-link' + (path === '/applyingtocegep/makingsmartchoices' ? ' active' : '')} href="/applyingtocegep/makingsmartchoices">Making Smart Choices</a></li>
            <li><a class={'nav-link' + (path === '/applyingtocegep/importantdates' ? ' active' : '')} href="/applyingtocegep/importantdates">Important Dates</a></li>
            <li><a class={'nav-link' + (path === '/applyingtocegep/applicationmodules' ? ' active' : '')} href="/applyingtocegep/applicationmodules">Application Modules</a></li>
            <li><a class={'nav-link' + (path === '/applyingtocegep/afterapplying' ? ' active' : '')} href="/applyingtocegep/afterapplying">After Applying</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class={'nav-link' + (path === '/programcomparisontool' ? ' nav-active' : '')} href="/programcomparisontool">Program Comparison Tool</a>
        </li>
        <li class="nav-item dropdown">
          <a class={"nav-link dropdown-toggle" + (['/cegeplinks', '/resources'].includes(path) ? ' sect-active' : '')} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Useful Links
          </a>
          <ul class="dropdown-menu border border-black border-2">
            <li><a class={'nav-link' + (path === '/cegeplinks' ? ' active' : '')} href="/cegeplinks">CEGEP Links</a></li>
            <li><a class={'nav-link' + (path === '/resources' ? ' active' : '')} href="/resources">Resources</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class={"nav-link dropdown-toggle" + (path.includes('/about') ? ' sect-active' : '')} href="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About QUÉtudes-info
          </a>
          <ul class="dropdown-menu border border-black border-2">
            <li><a class={'nav-link' + (path === '/about/disclaimersandterms' ? ' active' : '')} href="/about/disclaimersandterms">Disclaimers and Terms</a></li>
            <li><a class={'nav-link' + (path === '/about/project' ? ' active' : '')} href="/about/project">The QUÉtudes-info Project</a></li>
            <li><a class={'nav-link' + (path === '/about/me' ? ' active' : '')} href="/about/me">About Me</a></li>
            <li><a class={'nav-link' + (path === '/about/contact' ? ' active' : '')} href="/about/contact">Contact</a></li>
          </ul>
        </li>
    </div>
  </div>
</nav>

<style>
.topnav, .topnav ul {
  background-color: #003399;
}

.topnav a {
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
</style>