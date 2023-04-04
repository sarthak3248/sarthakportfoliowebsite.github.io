$(document).ready(function(){

    // For Navbar to appear on scroll
    $(window).scroll(function(){
        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    var typed = new Typed(".typing-1", {
        strings:[
            "Software Developer", "Data Scientist", "Blogger",
            "FreeLancer"
        ],
        typeSpeed: 80,
        backSpeed: 50, 
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings:[
            "Software Developer", "Data Scientist", "Blogger",
            "FreeLancer"
        ],
        typeSpeed: 80,
        backSpeed: 50, 
        loop: true
    });

    // owl carousel styling animation
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        navigation: true,
        autoplay: true,
        autoplayTimeOut: true,
        autoplayHoverPause: true,

        responsive :{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });

    const showOnPx = 500;
    const backToTopButton = document.querySelector(".scroll-up-btn");

    const scrollContainer = () => {
    return document.documentElement || document.body;
    };

    document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("show");
    } else {
        backToTopButton.classList.add("show");
    }
    });

    const goToTop = () => {
        document.body.scrollIntoView({
          behavior: "smooth",
        });
    };

    backToTopButton.addEventListener("click", goToTop);

    const form = document.getElementById("form");
    const result = document.getElementById("result");

    form.addEventListener("message-btn", function (e) {
    const formData = new FormData(form);
    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });
    var json = JSON.stringify(object);
    result.innerHTML = "Please wait...";

    fetch("https://api.web3forms.com/message-btn", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        },
        body: json
    })
        .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-green-500");
        } else {
            console.log(response);
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-red-500");
        }
        })
        .catch((error) => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
        })
        .then(function () {
        form.reset();
        setTimeout(() => {
            result.style.display = "none";
        }, 5000);
        });
    });
});



