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
            <li><a class={'nav-link' + (path === '/whatiscegep/english-cegeps' ? ' active' : '')} href="/whatiscegep/english-cegeps">English-language CEGEPs</a></li>
            <li><a class={'nav-link' + (path === '/whatiscegep/r-score' ? ' active' : '')} href="/whatiscegep/r-score">The R-Score</a></li>
            <li><a class={'nav-link' + (path === '/whatiscegep/cegep-alternatives' ? ' active' : '')} href="/whatiscegep/cegep-alternatives">Alternatives to CEGEP</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class={"nav-link dropdown-toggle" + (path.includes('/apply') ? ' sect-active' : '')} href="/apply" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Applying to CEGEP
          </a>
          <ul class="dropdown-menu border border-black border-2">
            <li><a class={'nav-link' + (path === '/apply' ? ' active' : '')} href="/apply">Applying to CEGEP</a></li>
            <li><a class={'nav-link' + (path === '/apply/choose-a-cegep-program' ? ' active' : '')} href="/apply/choose-a-cegep-program">Choosing a CEGEP and program</a></li>
            <li><a class={'nav-link' + (path === '/apply/making-smart-choices' ? ' active' : '')} href="/apply/making-smart-choices">Making smart choices</a></li>
            <li><a class={'nav-link' + (path === '/apply/important-dates' ? ' active' : '')} href="/apply/important-dates">Important Dates</a></li>
            <li><a class={'nav-link' + (path === '/apply/application-modules' ? ' active' : '')} href="/apply/application-modules">Application systems</a></li>
            <li><a class={'nav-link' + (path === '/apply/after-applying' ? ' active' : '')} href="/apply/after-applying">After applying</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class={'nav-link' + (path === '/compare-programs' ? ' nav-active' : '')} href="/compare-programs">Program Comparison Tool</a>
        </li>
        <li class="nav-item dropdown">
          <a class={"nav-link dropdown-toggle" + (['/cegep-links', '/resources'].includes(path) ? ' sect-active' : '')} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Useful Links
          </a>
          <ul class="dropdown-menu border border-black border-2">
            <li><a class={'nav-link' + (path === '/cegep-links' ? ' active' : '')} href="/cegep-links">CEGEP links</a></li>
            <li><a class={'nav-link' + (path === '/resources' ? ' active' : '')} href="/resources">Resources</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class={"nav-link dropdown-toggle" + (path.includes('/about') ? ' sect-active' : '')} href="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About QUÉtudes-info
          </a>
          <ul class="dropdown-menu border border-black border-2">
            <li><a class={'nav-link' + (path === '/about/disclaimers-terms' ? ' active' : '')} href="/about/disclaimers-terms">Disclaimers and Terms</a></li>
            <li><a class={'nav-link' + (path === '/about/project' ? ' active' : '')} href="/about/project">The QUÉtudes-info project</a></li>
            <li><a class={'nav-link' + (path === '/about/me' ? ' active' : '')} href="/about/me">About me</a></li>
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
</style>