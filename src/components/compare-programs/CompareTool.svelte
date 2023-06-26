<script>
  export let title = '';
  export let anchor = '';

  import Form from "./Form.svelte";
</script>

<h2 class="py-3 ps-3 mt-4 mb-0" id={anchor}>{title}</h2>
<div class="bg-primary-subtle" id="tool-grid">
  <Form formId="one" />
  <Form formId="two" />
</div>

<style>
@media screen and (min-width: 768px) {
  #tool-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

#tool-grid {
  color: black;
}

#compare-cegep-programs {
  text-align: center;
  padding: 10px 5px;
  margin-bottom: 0;
  font-weight: 600;
  letter-spacing: 0.5px;
  background: #001a4d;
  color: white;
}
</style>