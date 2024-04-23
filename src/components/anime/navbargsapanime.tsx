import gsap from 'gsap';

function GsapanimateNavbar() {
   // Animating .navcontainer on hover
   const navContainer = document.querySelector('.navcontainer');
   (navContainer as any).addEventListener('mouseenter', () => {
     gsap.to('.navcontainer', {
       duration: 0.3, // Animation duration
       ease: 'power2.inOut' // Easing function
     });
   });
   (navContainer as any).addEventListener('mouseleave', () => {
     gsap.to('.navcontainer', {
       duration: 0.3, // Animation duration
       ease: 'power2.inOut' // Easing function
     });
   });
 
   // Animating .navbarcontent on hover
   const navbarContent = document.querySelector('.firsttitle');
   (navbarContent as any).addEventListener('mouseenter', () => {
     gsap.to('.firsttitle', {
       duration: 0.3, // Animation duration
       ease: 'power2.inOut' ,
       scaleX: 1.2, // Scale X
       scaleY: 1.2,
     });
   });
   (navbarContent as any).addEventListener('mouseleave', () => {
     gsap.to('.firsttitle', {
       duration: 0.3, // Animation duration
       ease: 'power2.inOut', // Easing function
     });
   });
   const thirdtitle=document.querySelector('.thirdtitle');
   (thirdtitle as any).addEventListener('mouseenter', () => {
      gsap.to('.thirdtitle', {
        duration: 0.3, // Animation duration
        ease: 'power2.inOut' ,
        padding:"10px",
        backgroundColor:"red",
        borderRadius:20,
      });
    });
    (thirdtitle as any).addEventListener('mouseleave', () => {
        gsap.to('.thirdtitle', {
          duration: 0.3, // Animation duration
          ease: 'power2.inOut' ,
          padding: '0',
          backgroundColor: 'transparent',
          borderRadius: '0',
        });
      });

      const secondtitle=document.querySelector('.secondtitle');
      (secondtitle as any).addEventListener('mouseenter', () => {
         gsap.to('.secondtitle', {
           duration: 0.3, // Animation duration
           ease: 'power2.inOut' ,
           padding:"10px",
           backgroundColor:"red",
           borderRadius:20,
           scaleX: 1.2, // Scale X
           scaleY: 1.2, // Scale Y
         });
       });
       (secondtitle as any).addEventListener('mouseleave', () => {
           gsap.to('.secondtitle', {
             duration: 0.1, // Animation duration
             ease: 'power2.inOut' ,
             padding: '0',
             backgroundColor: 'transparent',
             borderRadius: '0',
             scaleX: 1, // Scale X
             scaleY: 1, // Scale Y
           });
         });
}

export default GsapanimateNavbar;
