gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 1 }
});
console.log(ScrollTrigger, 'scrolling!');