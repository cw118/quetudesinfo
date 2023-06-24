<script>
  import '../styles.css';
  import TopNav from '../components/TopNav.svelte';
  import GoToTop from '../components/GoToTop.svelte';
  import Footer from '../components/Footer.svelte';

  import { page } from '$app/stores';
  let path;

  $: path = $page.url.pathname;
</script>

<TopNav {path} />

<main id="content">
  <slot></slot>
</main>

<GoToTop />

<Footer />