<script>
  // Based on https://svelte.dev/repl/cb199730e83f41beb484ff522c64bec1?version=4.0.0
  let showOnPx = 200;
  let hidden = true;

  const goToTop = () => document.body.scrollIntoView();

  const scrollContainer = () => {
    return document.documentElement || document.body;
  }

  const handleOnScroll = () => {
    if (!scrollContainer()) return;

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<svelte:window on:scroll={handleOnScroll} />

<button class="gotopbtn" on:click={goToTop} class:hidden><i class="fas fa-arrow-up"></i></button>

<style>
  /* based on https://www.youtube.com/watch?v=Vef9bxTilCU */
  .gotopbtn {
    position: fixed;
    width: 50px;
    height: 50px;
    background: #ff4d4d;
    border: solid 1px gray;
    bottom: 115px;
    right: 20px;
    text-align: center;
    z-index: 1001;
    color: white;
    text-decoration: none;
    line-height: 50px;

    opacity: 1;
    visibility: visible;
    transition: opacity 0.4s, visibility 0.4s;
    user-select: none;
  }

  .gotopbtn.hidden {
    opacity: 0;
    visibility: hidden;
  }
</style>