<script>
  export let title = '';
  export let collapseId = '';
</script>

<div class="card">
  <div class="card-header gray-bg heading">
    <button class="btn btn-link btn-block text-left collapsed w-100 pb-0 text-decoration-none text-black text-start" type="button" data-bs-toggle="collapse"
      data-bs-target={`#${collapseId}`} aria-expanded="false" aria-controls={collapseId}>
      <h4 class="p-0">{title}</h4>
    </button>
  </div>

  <div id={collapseId} class="collapse" aria-labelledby={collapseId} data-parent="#progtool-accordion">
    <div class="card-body"><slot></slot></div>
  </div>
</div>

<style>
  .heading h2 button {
    color: black;
    font-weight: bold;
  }
</style>