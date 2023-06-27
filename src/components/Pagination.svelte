<script>
  export let previous, next, prevSection, nextSection = null;
  export let section;

  let prevText = (prevSection ? '' : '\u2190 ') + 'Previous' + (prevSection ? `: ${prevSection}` : '');
  let nextText = 'Next' + (nextSection ? `: ${nextSection}` : ' \u2192');
</script>

<div class="pagination py-1 mb-2" role="navigation">
  {#if previous || prevSection}
  <a href={previous} class={"btn" + (prevSection ? ` btn-info text-white btn-min` : ' btn-warning')}>{prevText}</a>
  {:else}
  <button class="btn placeholder" aria-label="Placeholder for pagination button">{prevText}</button>
  {/if}

  <span><strong>Current section:</strong> {section}</span>
  
  {#if next || nextSection}
  <a href={next} class={"btn" + (nextSection ? ` btn-info text-white btn-min` : ' btn-warning')}>{nextText}</a>
  {:else}
  <button class="btn placeholder" aria-label="Placeholder for pagination button">{nextText}</button>
  {/if}
</div>

<style>
.pagination {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  text-align: center;
  background: aliceblue;
}

.pagination a {
  margin: 10px;
  width: fit-content;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.pagination a:nth-child(3) {
  justify-self: last baseline;
}

@media screen and (max-width: 500px) {
  .pagination {
    display: flex;
    flex-direction: column;
  }

  .pagination a {
    display: block;
  }

  .pagination span {
    margin: 7.5px 15px 5px;
  }
}

@media screen and (min-width: 501px) and (max-width: 1024px) {
  .pagination a.btn-min {
    width: min-content;
  }
}

.placeholder {
  visibility: hidden;
}
</style>