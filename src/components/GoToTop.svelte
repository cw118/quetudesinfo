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

<button class="gotopbtn" aria-label="Go to the top of the page" on:click={goToTop} class:hidden><i class="fas fa-arrow-up"></i></button>

<style>
  /* based on https://www.youtube.com/watch?v=Vef9bxTilCU */
  .gotopbtn {
    position: fixed;
    width: 50px;
    height: 50px;
    background-color: #ff4d4d;
    border: solid 1.5px #333;
    border-radius: 2px;
    box-shadow: 0px 0px 12px 1px rgba(0, 0, 0, 0.2);
    bottom: 40px;
    right: 30px;
    text-align: center;
    z-index: 1001;
    color: white;
    text-decoration: none;
    line-height: 50px;

    opacity: 1;
    visibility: visible;
    transition: opacity 0.4s, visibility 0.4s, background-color 0.25s;
    user-select: none;
  }

  .gotopbtn:hover {
    background-color: #e34545;
  }

  .gotopbtn.hidden {
    opacity: 0;
    visibility: hidden;
  }
</style>