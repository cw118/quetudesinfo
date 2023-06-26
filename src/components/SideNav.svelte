<script>
  import { page } from '$app/stores';

  $: path = $page.url.pathname;

  export let chapters = [];
  export let pages = [];
</script>

<nav class="nav border-end border-light-subtle" id="sidenav">
  <p>On this page</p>
  <ul class="list-group-flush ps-3 mb-3">
    {#each chapters as chapter (chapters.indexOf(chapter))}
      <a class="nav-link list-group-item ps-2 border-start border-dark-subtle" href={'#' + chapter.link}>{chapter.name}</a>
    {/each}
  </ul>
  <hr class="m-0 border border-black" />
  <p>In this section</p>
  <ul class="list-group-flush ps-3 mb-2">
    {#each pages as page (pages.indexOf(page))}
      <a href={page.link} class={"nav-link list-group-item ps-2 border-start border-dark-subtle" + (path === page.link ? ' active' : '')}>{page.name}</a>
    {/each}
  </ul>
</nav>

<style>
/* Sidebar for site sections with more information and parts */
#sidenav {
  background-color: #f0f0f0;
  z-index: 999;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(min-content, max-content);
  padding-right: 1rem;
}

#sidenav p {
  font-size: 20px;
  font-weight: bold;
  padding-top: 15px;
  padding-left: 15px;
  margin-bottom: 10px;
  color: #3f3f3f;
}

#sidenav a {
  color: black;
  padding-top: 15px;
  padding-bottom: 15px;
}

#sidenav a.active {
  background-color: #666666;
  color: white;
}

#sidenav a:not(.active):hover {
  background-color: black;
  color: white;
}

@media only screen and (max-width: 767px) {
  #sidenav {
    display: block;
    width: 100%;
    padding: 18px 18px 2px;
    height: auto;
  }
}

@media screen and (min-width: 768px) {
  #sidenav {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 30%;
    float: left;
    overflow-y: auto;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1119px) {
  #sidenav {
      width: 28%;
  }
}

@media only screen and (min-width: 1200px) {
  #sidenav {
    width: 18%;
  }
}
</style>