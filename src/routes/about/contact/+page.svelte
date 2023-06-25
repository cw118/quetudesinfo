<script>
  import SideNav from "../../../components/SideNav.svelte";
  import Pagination from "../../../components/Pagination.svelte";
  import { AboutQuetudesInfo } from "../../../sectionPages";

  let validated = false, name, email, msg = '';

  const msgMin = 5, msgMax = 500, nameMin = 2, emailMin = 4;
  const pages = AboutQuetudesInfo, section = 'About QUÉtudes-info', previous = AboutQuetudesInfo[2].link;

  const chapters = [
    {
      name: 'Contact Me',
      link: 'contact-me',
    }
  ]

  // extra validation here in case the form is modified using devtools
  const validate = () => validated = (msg.trim().length >= msgMin) && (msg.trim().length <= msgMax) && (name.trim().length >= nameMin) && (email.trim().length >= emailMin) && (email.includes('@'));
</script>

<svelte:head>
  <meta name="description" content="Get in touch with QUÉtudes-info" />
  <title>Contact | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} {pages} />

<section>
  <Pagination {section} {previous} />

  <div id={chapters[0].link}>
    <h2 class="cadetblue-bg">{chapters[0].name}</h2>
    
    <form class="mb-5" method="POST" action="https://formsubmit.co/098e738602031196f8cce267164e6cde">
      <label for="name" class="form-label">Name:</label>
      <input name="Name" on:keyup={validate} type="text" class="form-control border border-secondary mb-4" id="name" placeholder="John Doe" minlength="2" bind:value={name} required>
        
      <label for="email-address" class="form-label">Email address:</label>
      <input name="Email" on:keyup={validate} type="email" class="form-control border border-secondary" id="email-address" bind:value={email} placeholder="name@example.com" aria-labelledby="valid-email" minlength="4" required>
      <div id="valid-email" class="form-text mb-4">Make sure you enter a valid, correct email address!</div>
      
      <label for="message" class="form-label">Message:</label>
      <textarea name="Message" on:keyup={validate} class="form-control border border-secondary" id="message" minlength="5" maxlength="500" bind:value={msg} rows="3" aria-labelledby="message-max-chars" placeholder="Your message here" required></textarea>
      <div id="message-max-chars" class="form-text mb-4">Maximum 500 characters, not including spaces.</div>
      <input type="text" name="_honey" style="display:none">

      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_next" value="https://quetudesinfo.vercel.app/about/contact/submitted">
      <input type="submit" class="form-control btn btn-primary" value="Submit" disabled={!validated}>
    </form>
  </div>

  <Pagination {section} {previous} />
</section>

<style>
  label {
    font-size: 1.15rem;
    font-weight: 600;
  }

  input, textarea {
    font-size: 1.1rem;
  }
</style>