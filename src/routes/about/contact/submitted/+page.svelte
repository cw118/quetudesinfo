<script>
  import SideNav from "../../../../components/SideNav.svelte";
  import Pagination from "../../../../components/Pagination.svelte";
  import Sitemap from "../../../../components/Sitemap.svelte";

  const pages = [
    {
      name: "Contact Me",
      link: "/about/contact"
    }
  ]
  const section = 'Contact Me';

  const chapters = [
    {
      name: 'Contact Me: Message Submitted',
      link: 'contact-me-message-submitted',
    },
    {
      name: 'Sitemap',
      link: 'sitemap',
    }
  ]
</script>

<svelte:head>
  <title>Message Submitted | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} />

  <div id={chapters[0].link}>
    <h2 class="cadetblue-bg">{chapters[0].name}</h2>
    
    <div class="alert alert-success">
      <i class="fa-solid fa-circle-check"></i>&nbsp;&nbsp;Your message was successfully submitted and we'll get back to you as soon as possible.
      Thanks for visiting QUÉtudes-info!
    </div>
  </div>

  <div id={chapters[1].link}>
    <h2 class="salmon-bg">{chapters[1].name}</h2>
    <Sitemap />
  </div>

  <Pagination {section} />
</section>