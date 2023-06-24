<script>
  export let before = null;
  export let next = null;
  export let section;
  export let otherSection = null;

  let prevText = 'Previous' + (otherSection ? `: ${otherSection}` : ' \u2190');
  let nextText = 'Next' + (otherSection ? `: ${otherSection}` : ' \u2192');
  let btnStyle = "btn" + (otherSection ? ` btn-info` : ' btn-warning');
</script>

<div class="pagination mb-2" role="navigation">
  {#if before}
  <a href={before} class={btnStyle}>{prevText}</a>
  {:else}
  <button class="btn placeholder">{prevText}</button>
  {/if}

  <span><strong>Current section:</strong> {section}</span>
  
  {#if next}
  <a href={next} class={btnStyle}>{nextText}</a>
  {:else}
  <button class="btn placeholder">{nextText}</button>
  {/if}
</div>

<style>
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: aliceblue;
}

.pagination a {
  margin: 10px;
}

@media screen and (max-width: 500px) {
  .pagination {
    display: block;
  }

  .pagination a {
    display: block;
  }
}

.pagination a {
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.placeholder {
  visibility: hidden;
}
</style>