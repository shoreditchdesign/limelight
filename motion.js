// GSAP for Headings

window.onbeforeunload = function () {
window.scrollTo(0, 0);
}

window.addEventListener("DOMContentLoaded", (event) => {
// Delay execution for preloader animation
setTimeout(() => {
    // Ensure GSAP and plugins are loaded
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined" || typeof SplitType === "undefined") {
    console.error("GSAP, ScrollTrigger, or SplitType is not loaded.");
    return;
    }

    // Register ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Stagger Up Animation
    document.querySelectorAll("h1, h2").forEach((element) => {
    element.setAttribute("stagger-up", "");
    });

    // Split text into spans
    new SplitType("[stagger-up]", {
    tagName: "span",
    });

    function createScrollTrigger(triggerElement, timeline) {
    let hasPlayed = false;

    ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 80%", // Start the animation when the top of the element is at the bottom
        onEnter: () => {
        if (!hasPlayed) {
            timeline.play();
            hasPlayed = true;
        }
        },
        onEnterBack: () => {
        if (!hasPlayed) {
            timeline.play();
            hasPlayed = true;
        }
        },
        once: true // Ensures the animation runs only once
    });
    }

    document.querySelectorAll("[stagger-up]").forEach((element) => {
    let tl = gsap.timeline({ paused: true });
    tl.from(element.querySelectorAll(".line"), {
        opacity: 0,
        duration: 0.45,
        y: 20,
        ease: 'power1.Out',
        stagger: { each: 0.1 }, // Stagger each element by 100 ms
    });
    createScrollTrigger(element, tl);
    });

    // Avoid flash of unstyled content
    gsap.set("[stagger-up]", { opacity: 1 });


}, 0); // 0ms delay for preloader animation
});

//GSAP for Static Items

  document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll('[slide-up]');

    items.forEach((item) => {
      gsap.fromTo(item, 
                  {
        opacity: 0,
        y: 50 // Initial position (moved down 50px)
      },
                  {
        opacity: 1,
        y: 0,
        duration: 0.4,
        scrollTrigger: {
          trigger: item,
          start: "top 85%", // Animation starts when top of item reaches 80% of viewport height
          toggleActions: "play none none none", // Animation plays when the element comes into view
        }
      });
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll('[slide-down]');

    items.forEach((item) => {
      gsap.fromTo(item, 
                  {
        opacity: 0,
        y: -80 // Initial position (moved down 50px)
      },
                  {
        opacity: 1,
        y: 0,
        duration: 0.4,
        delay: 0.1,
        scrollTrigger: {
          trigger: item,
          start: "top 85%", // Animation starts when top of item reaches 80% of viewport height
          toggleActions: "play none none none", // Animation plays when the element comes into view
        }
      });
    });
  });

//GSAP for CMS Items

  document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll('[cms-slide-up]');

    items.forEach((item, index) => {
      gsap.fromTo(item, 
                  {
        opacity: 0,
        y: 80 // Adjust for initial position
      },
                  {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power1.Out',
        delay: index * 0.2, // Staggered delay
        scrollTrigger: {
          trigger: item,
          start: "top 80%", // Start animation when the top of the item hits 80% of the viewport height
          toggleActions: "play none none none", // Only play the animation when the item comes into view
        }
      });
    });
  });
