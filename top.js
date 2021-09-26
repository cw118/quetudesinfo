// Show the mobile back to top button after scrolling past sidenav block, based on tutorial at https://usefulangle.com/post/118/javascript-intersection-observer
const backToTop = () => {
    const btn = document.querySelector('.gotopbtn');
    let observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting === true)
            btn.classList.add('btn-show');
    }, { threshold: [0.01] });
    observer.observe(document.querySelector('section'));
}

// Hide back to top button near page top
const hideTopBtn = () => {
    const btn = document.querySelector('.gotopbtn');
    let observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting === true)
            btn.classList.remove('btn-show');
    }, { threshold: [0.4] });
    observer.observe(document.querySelector('#sidenav'));
}

backToTop();
hideTopBtn();