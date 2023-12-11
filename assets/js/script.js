/*SALE*/
document.addEventListener('DOMContentLoaded', function () {

    const circles = document.querySelectorAll('.salecircle');
  
    window.addEventListener('scroll', function () {
      const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
  
      // Show/hide circles based on scroll position
      if (scrollPercentage >= 0.25) {
        circles[1].style.opacity = 1;
      }
  
      if (scrollPercentage >= 0.35) {
        circles[2].style.opacity = 1;
      }
    });
  });
/* Kevin JS-ANIMATION-1*/
const imagesKevin = document.querySelectorAll('#image-sequence img');
let currentIndex = 0;
let isAnimating = false;

function showNextImage() {
    if (!isAnimating) {
        isAnimating = true;
        setTimeout(() => {
            imagesKevin[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % imagesKevin.length;
            imagesKevin[currentIndex].classList.add('active');
            isAnimating = false;
        }, 100); // Adjust the delay (in milliseconds) as needed
    }
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -300 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to handle scroll events
function handleScroll() {
    if (isInViewport(document.getElementById('image-sequence'))) {
        showNextImage();
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initially check for images in the viewport
handleScroll();

/*ANIMATION-2*/
const images = document.querySelectorAll('.photos img');

function changePosition() {
    // Menyimpan referensi gambar terakhir
    const lastImageClass = images[0].className;

    // Menggeser kelas setiap gambar
    for (let i = 0; i < images.length - 1; i++) {
        images[i].className = images[i + 1].className;
    }

    // Memindahkan gambar pertama ke posisi terakhir
    images[images.length - 1].className = lastImageClass;
}

setInterval(changePosition, 2000);

/*ANIMATION-3*/
document.addEventListener('DOMContentLoaded', function () {
    let homepageDesc = document.querySelector('.homepage-desc');

    // Init ScrollMagic
    let controller = new ScrollMagic.Controller();

    // Create GSAP timeline for sub-heading animations
    let subHeadingTimeline = gsap.timeline();
    subHeadingTimeline.fromTo('.sub-heading-1', { marginTop: 0 }, { marginTop: 50, opacity: 1 });
    subHeadingTimeline.fromTo('.sub-heading-2', { marginTop: 0 }, { marginTop: 30, opacity: 1 });
    subHeadingTimeline.fromTo('.sub-heading-3', { marginTop: 0 }, { marginTop: 60, opacity: 1 });

    // Scene for revealing sub-headings
    let subHeadingScene = new ScrollMagic.Scene({
        triggerElement: '.homepage-desc',
        triggerHook: 0,
        duration: '100%' // Adjust duration as needed
    })
        .setTween(subHeadingTimeline)
        .addTo(controller);

    // Function to create scenes for each sub-heading and desc pair
    function createScene(subHeadingClass, descClass) {
        let subHeading = document.querySelector(subHeadingClass);
        let desc = document.querySelector(descClass);

        // Scene for sub-heading and desc
        let scene = new ScrollMagic.Scene({
            triggerElement: subHeading,
            triggerHook: 0.7, // Set triggerHook based on your preference
            duration: '100%', // Set the duration as needed
        })
            .setTween(gsap.fromTo(desc, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 },{ opacity: 1, y: 0, duration: 0.6 }))
            .addTo(controller);
    }

    // Create scenes for each sub-heading and desc pair
    createScene('.sub-heading-1', '.desc-1');
    createScene('.sub-heading-2', '.desc-2');
    createScene('.sub-heading-3', '.desc-3');


    // Scene to reveal homepage-desc and pin it
    let pinScene = new ScrollMagic.Scene({
        triggerElement: '.homepage-desc',
        triggerHook: 0,
        duration: '100%' // Set the duration as needed
    })
        .setPin('.homepage-desc')
        .addTo(controller);
});

/* HOMEPAGE-SCALENSIP */

const demo = document.querySelector('.homepage-snsdemo');
const thumbnail = demo.querySelector('.thumbnail');
const thumbnailVideo = demo.querySelector('.thumbnail-video');

demo.addEventListener('mouseover', () => {
    thumbnail.style.opacity = '0'; // Hide the image
    thumbnailVideo.play().catch(error => console.error(error)); // Start playing the video
});

demo.addEventListener('mouseout', () => {
    thumbnail.style.opacity = '1'; // Show the image on mouseout
    thumbnailVideo.pause(); // Pause the video
    thumbnailVideo.currentTime = 0; // Reset video to the beginning
});

/* ANIMATION-4 SALE */

/*PRODUCT-COLLABS*/
function hoverd100(img) {
    img.src = "assets/image/disney100logo.png"
}

function hoverOutd100(img) {
    img.src = "assets/image/collabdisney100.png"
}

function hoverhp(img) {
    img.src = "assets/image/hplogo.png"
}

function hoverOuthp(img) {
    img.src = "assets/image/collabharrypotter.png"
}

function hoversw(img) {
    img.src = "assets/image/starwarslogo.png"
}

function hoverOutsw(img) {
    img.src = "assets/image/collabstarwars.png"
}

function hovermarvel(img) {
    img.src = "assets/image/marvellogo.png"
}

function hoverOutmarvel(img) {
    img.src = "assets/image/collabmarvel.png"
}

function hoverprincess(img) {
    img.src = "assets/image/disneyprincesslogo.png"
}

function hoverOutprincess(img) {
    img.src = "assets/image/collabdineyprincess.png"
}

function hoverdisney(img) {
    img.src = "assets/image/disneylogo.png"
}

function hoverOutdisney(img) {
    img.src = "assets/image/collabdisney.png"
}

function hoverrifle(img) {
    img.src = "assets/image/riflepaperlogo.png"
}

function hoverOutrifle(img) {
    img.src = "assets/image/collabrifle.png"
}

function hovergray(img) {
    img.src = "assets/image/graymalinlogo.png"
}

function hoverOutgray(img) {
    img.src = "assets/image/collabgraymalin.png"
}

function hovervineyard(img) {
    img.src = "assets/image/vineyardlogo.png"
}

function hoverOutvineyard(img) {
    img.src = "assets/image/collabvineyard.png"
}

function hoverstance(img) {
    img.src = "assets/image/stancelogo.png"
}

function hoverOutstance(img) {
    img.src = "assets/image/collabstance.png"
}

function hovermatrix(img) {
    img.src = "assets/image/matrixlogo.png"
}

function hoverOutmatrix(img) {
    img.src = "assets/image/collabthematrix.png"
}


/* Animation 5 */
document.addEventListener("DOMContentLoaded", function () {
    let mainCircle = document.getElementById("mainCircle");
    let smallCircles = document.querySelectorAll(".circle");

    mainCircle.addEventListener("click", function () {
        mainCircle.classList.add("active");

        setTimeout(function () {
            smallCircles.forEach(function (circle) {
                circle.classList.add("active");
            });
            mainCircle.style.opacity = 0;
            mainCircle.style.cursor = 'default';
        }, 100);
    });
    VANTA.WAVES({
        el: "#waveBG",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x21018,
        shininess: 40.00,
        waveHeight: 8.00,
        waveSpeed: 0.80,
        zoom: 0.8});
});

/* COLOR-INTERACTIVE */
function changeContentColorInteractive(imageSrc, newText, element) {
    // Update the image and text as before
    document.getElementById('image').src = imageSrc;
    document.getElementById('text').textContent = newText;
    document.getElementById('text').className = 'new-text-style';

    // Remove 'color-choice-active' class from all grid items
    var gridItems = document.querySelectorAll('.grid-item-color-interactive');
    gridItems.forEach(function (item) {
        item.classList.remove('grid-item-active', 'color-choice-active');
    });

    // Add 'grid-item-active' and 'color-choice-active' classes to the clicked element
    element.classList.add('grid-item-active', 'color-choice-active');
}



document.addEventListener('DOMContentLoaded', function () {
    // Pilih elemen grid yang ingin diaktifkan secara otomatis
    var gridItemToActivate = document.querySelector('.grid-item-color-interactive:nth-child(1)'); // Ganti 'nth-child(1)' dengan urutan grid yang benar

    // Periksa apakah elemen tersebut ada, kemudian secara programatik memicu klik pada elemen itu
    if (gridItemToActivate) {
        gridItemToActivate.click();
    }
});


VANTA.FOG({
    el: "#animation-ourproduct",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0xd4e4ee,
    midtoneColor: 0xffffff,
    lowlightColor: 0x7d95a7,
    baseColor: 0xffffff,
    blurFactor: 0.5,
    speed: 1.50,
    scale: 2,
    scaleMobile: 4
});

