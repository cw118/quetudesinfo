<script>
  import { page } from '$app/stores';
  import Sitemap from '../components/Sitemap.svelte';
</script>

<h2 class="alert alert-danger w-100 text-center">{$page.status}: {$page.error?.message}</h2>
<div class="px-4 py-2">
  <h5 class="mb-4">Sorry about that! Here's a sitemap to get you back on track:</h5>
  <Sitemap />
</div>