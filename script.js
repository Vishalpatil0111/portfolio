
var tl = gsap.timeline()

const navItems = document.querySelectorAll("#nav-2 h5");
const sections = document.querySelectorAll("section[id]"); 




// Select all buttons inside #content-label
var buttons = document.querySelectorAll('#content-label button');
// Select all h4 elements
var texts = document.querySelectorAll('h4');

// Display the first text by default
texts[0].style.display = "block";
texts[0].style.width = "80%";
buttons[0].classList.add("active-button"); // Highlight the first button by default

// Attach click events to each button
buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        hideAllText(); // Hide all other texts
        resetButtonStyles(); // Reset styles for all buttons

        texts[index].style.display = "block"; // Show the corresponding text
        texts[index].style.width = "80%";

        this.classList.add("active-button"); // Highlight the clicked button
    });
});

// Function to hide all text
function hideAllText() {
    texts.forEach(function (text) {
        text.style.display = "none";
    });
}

// Function to reset button styles
function resetButtonStyles() {
    buttons.forEach(function (button) {
        button.classList.remove("active-button");
    });
}


tl.to("#initial h2",{
    x:0,
    y:'-40%',
    opacity:0,
    duration:2,
    stagger:0.6
})

tl.from("#page1 h3",{  
    x:0,
    y:0,
    opacity:0,
    duration:0.1
})


tl.from("#linebtn",{  
    x:0,
    y:0,
    opacity:0,
    duration:0.1
})

tl.from("#content",{
    y: 100,
    opacity:0,
    duration:0.5
})
tl.from("#nav-2 h5",{
    x:-10,
    stagger:0.2,
    opacity:0,
    duration:0.2
})

function togglelines(){
    const toggleButton = document.getElementById('linebtn');
    const toggleDiv = document.getElementById('bg-lines');

    toggleButton.addEventListener('click', function() {
        toggleDiv.style.display = (toggleDiv.style.display === 'none' || toggleDiv.style.display === '') ? 'flex' : 'none';
    });
        
}

function textSplit(){
    var allH1 = document.querySelectorAll('#pg2-content1 h3')

allH1.forEach(function(elem){
    var clutter = ""
    var h1text = elem.textContent
    var splitText = h1text.split("")
    splitText.forEach(function(e){
        clutter += `<span>${e}</span>`
    })

    elem.innerHTML = clutter
    
})

}

function animationText(){

    gsap.to("#pg2-content1 h3 span",{
        color:'#F4F0E7',
        stagger:0.1,
        scrollTrigger:{
            trigger:'#page2',
            scroller:'body',
            start:'top 60%',
            end:'top -3%',
            // markers:true,
            scrub:2
    
        }
    })
}






  function highlightNav() {
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop; // Section's top position
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop - 50 &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        const target = section.getAttribute("id");

        // Remove 'active' class from all nav items
        navItems.forEach((item) => {
          item.classList.remove("active");
        });

        // Add 'active' class to the corresponding nav item
        const activeNav = document.querySelector(
          `#nav-2 h5[data-target="${target}"]`
        );
        if (activeNav) activeNav.classList.add("active");
      }
    });
  }

  // Add scroll event listener
  window.addEventListener("scroll", highlightNav);

  // Initial check when the page loads
  highlightNav();


togglelines()
textSplit()
animationText()