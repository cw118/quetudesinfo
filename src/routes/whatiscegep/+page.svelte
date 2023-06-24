<script>
  import SideNav from '../../components/SideNav.svelte';
  import { WhatIsCegep } from '../../sectionPages';

  const chapters = [
    {
      name: 'What is CEGEP?',
      link: 'what-is-cegep',
    },
    {
      name: 'Quebec\'s School System',
      link: 'quebec-school-system',
    },
    {
      name: 'Diploma of Collegial Studies',
      link: 'diploma-of-collegial-studies',
    },
    {
      name: 'Studying at CEGEP',
      link: 'studying-at-cegep',
    }
  ]
</script>

<svelte:head>
  <meta name="description" content="QUÉtudes-info's guide to what CEGEP is" />
  <title>What is CEGEP? | QUÉtudes-info</title>
</svelte:head>

<SideNav {chapters} pages={WhatIsCegep} />