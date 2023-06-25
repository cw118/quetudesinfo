<script>
  import SideNav from "../../../components/SideNav.svelte";
  import Pagination from "../../../components/Pagination.svelte";
  import { AboutQuetudesInfo } from "../../../sectionPages";

  const pages = AboutQuetudesInfo, section = 'About QUÉtudes-info', previous = AboutQuetudesInfo[2].link;

  const chapters = [
    {
      name: 'Contact Me',
      link: 'contact-me',
    }
  ]
</script>

<svelte:head>
  <meta name="description" content="Get in touch with QUÉtudes-info" />
  <title>Contact | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {previous} />

  <div id={chapters[0].link}>
    <h2 class="skyblue-bg">{chapters[0].name}</h2>

    <form class="mb-5" method="POST" action="https://formsubmit.co/">
      <label for="name" class="form-label">Name:</label>
      <input type="text" class="form-control border border-secondary mb-3" id="name" placeholder="John Doe" required>
        
      <label for="email-address" class="form-label">Email address:</label>
      <input type="email" class="form-control border border-secondary mb-3" id="email-address" placeholder="name@example.com" required>

      <label for="message" class="form-label">Message:</label>
      <textarea class="form-control border border-secondary mb-4" id="message" rows="3" required></textarea>
      <input type="text" name="_honey" style="display:none">

      <input type="submit" class="form-control btn btn-primary" value="Submit">
    </form>
  </div>

  <Pagination {section} {previous} />
</section>

<style>
  label {
    font-size: 1.15rem;
  }

  input {
    font-size: 1.1rem;
  }
</style>