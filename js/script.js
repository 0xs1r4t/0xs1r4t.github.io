gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'power1.inOut',
  scrollTrigger: { scrub: 1 }
});