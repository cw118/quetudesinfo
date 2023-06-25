<script>
  export let previous, next, prevSection, nextSection = null;
  export let section;

  let prevText = (prevSection ? '' : '\u2190 ') + 'Previous' + (prevSection ? `: ${prevSection}` : '');
  let nextText = 'Next' + (nextSection ? `: ${nextSection}` : ' \u2192');
</script>

<div class="pagination mb-2" role="navigation">
  {#if previous || prevSection}
  <a href={previous} class={"btn" + (prevSection ? ` btn-info text-white` : ' btn-warning')}>{prevText}</a>
  {:else}
  <button class="btn placeholder">{prevText}</button>
  {/if}

  <span><strong>Current section:</strong> {section}</span>
  
  {#if next || nextSection}
  <a href={next} class={"btn" + (nextSection ? ` btn-info text-white` : ' btn-warning')}>{nextText}</a>
  {:else}
  <button class="btn placeholder">{nextText}</button>
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

.pagination a {
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.placeholder {
  visibility: hidden;
}
</style>