         function reveal() {
         var reveals = document.querySelectorAll(".reveal");
       
         for (var i = 0; i < reveals.length; i++) {
           var windowHeight = window.innerHeight;
           var elementTop = reveals[i].getBoundingClientRect().top;
           var elementVisible = 100;
       
           if (elementTop < windowHeight - elementVisible) {
             reveals[i].classList.add("active1");
           } else {
             reveals[i].classList.remove("active1");
           }
         }
       }
       window.addEventListener("scroll", reveal);
         // To check the scroll position on page load
         reveal();
         
       function zoom() {
         var reveals = document.querySelectorAll(".zoom-in");
       
         for (var i = 0; i < reveals.length; i++) {
           var windowHeight = window.innerHeight;
           var elementTop = reveals[i].getBoundingClientRect().top;
           var elementVisible = 100;
       
           if (elementTop < windowHeight - elementVisible) {
             reveals[i].classList.add("active2");
           } else {
             reveals[i].classList.remove("active2");
           }
         }
       }
       window.addEventListener("scroll", zoom);
         // To check the scroll position on page load
       zoom();