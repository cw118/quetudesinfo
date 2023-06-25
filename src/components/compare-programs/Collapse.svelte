<script>
  export let title = '';
  export let collapseId = '';
</script>

<div class="card">
  <div class="card-header gray-bg" id="headingOne">
    <button class="btn btn-link btn-block text-left collapsed w-100 text-decoration-none text-black text-start" type="button" data-bs-toggle="collapse"
      data-bs-target={`#${collapseId}`} aria-expanded="false" aria-controls={collapseId}>
      <h4 class="mb-0">{title}</h4>
    </button>
  </div>

  <div id={collapseId} class="collapse" aria-labelledby="headingOne" data-parent="#progtool-accordion">
    <div class="card-body"><slot></slot></div>
  </div>
</div>