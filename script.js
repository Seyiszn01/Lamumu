// Animate hero section on load
gsap.from(".glow", {
    duration: 1.2,
    opacity: 0,
    y: -50,
    ease: "power2.out"
  });
  
  gsap.from(".subtitle", {
    duration: 1,
    delay: 0.3,
    opacity: 0,
    y: 20,
    ease: "power2.out"
  });
  
  gsap.from(".btn", {
    duration: 1,
    delay: 0.6,
    opacity: 0,
    scale: 0.8,
    ease: "back.out(1.7)"
  });
  
  // Animate section titles on scroll
  gsap.utils.toArray(".section-title").forEach(title => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out"
    });
  });
  
  // Animate NFT cards on scroll
  gsap.from(".nft-card", {
    scrollTrigger: {
      trigger: ".grid",
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });