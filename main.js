$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
      $('.menu-toggler').removeClass('open');
      $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').not("#blog").on("click", function () {
      $("#js-menu").toggleClass('active');
   $("html, body").animate({
  scrollTop: $($(this).attr("href")).offset().top
   }, 500);
    });

    $("#up").on("click", function () {
      $("html, body").animate({
        scrollTop: 0
         }, 1000); 
    });

    // animations
    AOS.init({
    easing: "ease",
    duration: 1200,
    once: true
    })

    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


    $(".expandDetails").on("click", function () {
        $(this).parent().siblings(".portfolio-long").slideToggle(500);
        $(this).children(".arrowDown").toggle();
        $(this).children(".arrowUp").toggle();
        });


        var modalInfo = {
            1: {
              title: "A|B Home Removlas",
              aboutp: "About This Project:",
              info: "My objective here was to create a fully responsive website for a friends business to give them some form of online presence. Having little to no knowledge about the home removals industry, a portion of time was spent on competition analysis and trying to understand customer needs and requirements, along with understanding the user experience. Through this project I gained some insight into the level of assets that are required to fully build out a web page. The page is designed to introduce customers to the business and act somewhat like a sales funnel. ",
              summary: "Summary:",
              summaryp: "This project was my first commercial project, actually designed for deployment and use. The page is still static, and I want to introduce a contact us form into the page. I believe I can continue to build on this project, improving functionality and, ultimately, creating a back-end system that can automate the sales and logistical process, allowing for a more hands off approach to the business.  This functionality, is the ultimate goal.",
              link: "https://karan-ghatt.github.io/HomeRemoval/",
              github: "https://github.com/Karan-Ghatt/HomeRemoval"
            },
            2: {
              title: "Resume",
              aboutp: "About This Project:",
              info: "My goal in this project was to make an personal site showcasing my life science resume and highlight my technical skills and work experience and in a more visually appealing way than just sending a resume PDF. This project was initiated with an existing Bootstrap theme.  From there, I added a number of custom elements, such as, additional profile picture only appearing on mobile view, animated gear icon above navigation menu for a thematic touch along with a thematic background. I also wanted the page to be fully responsive, which was achieved through the CSS and JS within the bootstrap initial file.",
              summary: "Summary:",
              summaryp: "This was one my first projects after getting started in web design and development. Although already familiar with the concepts and principles of HTML, CSS and JS, it has been some time since I had use those skills, thus this project provided a nice transition into more complex projects and functionality. Through this project I was also able to become familiar with GitHub Pages and hosting.",
              link: "https://karan-ghatt.github.io/Resume/",
              github: "https://github.com/Karan-Ghatt/Resume"
            },
            3: {
              title: "Portfolio",
              aboutp: "About This Project:",
              info: "The goal for me in this project was to make a fluid single-page personal portfolio site showcasing my skills as a developer. Maintaining aesthetic appeal, while ensuring functionality and responsiveness was a concern; the page uses some Animate On Scroll animations, although visually appealing, I am conscious of the impact this may have on page load-time.  Making this site from scratch, with vanilla CSS/HTML, not using any frameworks that do the alignments and responsiveness thinking for me, gave me the amazing opportunity to practice flexbox. Finding a suitable portfolio gallery solution was a challenge.",
              summary: "Summary:",
              summaryp: "I learnt a lot though this project, from coding a web-page from scratch, to working with existing libraries such as Animate On Scroll, to working with CSS media functions and maintain the responsive design and functionality across devices and resolutions. This project was also my first real jerouney into JavaScript. At several points I needed to completely re-think my approach, manage my time and use creative solutions. I'm quite happy with the end result, but there is still room for improvement.",
              link: "#",
              github: "#"
            },
            4: {
              title: "Dash & Data",
              aboutp: "About This Project:",
              info: "I have made a number of data visulation projects with python and the Dash framework. The view button bellow will take you to my Covid-19 dashboard which uses data provided by JHI to display current rates of infection and associated data by country. The data is pulled from an online CSV file, thus is automtaicly updtated. This project expanded my understanding and use of pandas for data analysis and dash. After this project I made a a dash app that performed sentiment analysis on live tweets, usuing TextBlob and the Twitter API. I used sqlite as the database for the incoming tweets, but soon realsied that it dosen't deal well with multipul requests and couldn't really support the size of the data and the fucntionality i was looking for.",
              summary: "Summary:",
              summaryp: "The code for both projects can be found following the GitHub button bellow, and you can access the Covid-Dashboard by following the view button bellow. The Covid-Dash project gave me my first understanding and use of Dash and using it with pandas, from there the Twitter project taught me a lot about database management and functionality, along with giving me insight into TextBlob and it's range of analysis features.",
              link: "https://covid-data-dash.herokuapp.com/",
              github: "https://github.com/Karan-Ghatt?tab=repositories"
            },
            5: {
              title: "Colour Detection",
              aboutp: "About This Project:",
              info: "The python application allows the user to automatically get the name of the color by clicking on any area of an image. Colour detection is a relatively easy task for humans, but becomes more difficult when we try to achieve the same results with computers. Human eyes and brains work together to translate light into color. Light receptors that are present in our eyes transmit the signal to the brain. Our brain then recognizes the color. Since childhood, we have mapped certain lights with their color names. I used a somewhat similar approach in this project. The dataset used can be found  by follwing the view button below. Follow the GitHub button to view the project code",
              summary: "Summary:",
              summaryp: "This project let me learn a lot; I learned about colors and how to extract color RGB values and the color name of a pixel. How to handle events like double-clicking on the window and saw how to read CSV files with pandas and perform operations on data. This is used in numerous image editing and drawing apps.",
              link: "https://github.com/codebrainz/color-names/blob/master/output/colors.csv.",
              github: "https://github.com/Karan-Ghatt/ColourDetetion"
            },
            6: {
              title: "Face Detection",
              aboutp: "About This Project:",
              info: "This python project allows the user to perform face detection from incoming live video source, in this case thier webcam. An image or other video souce can also be used. This project was another utilization of the openCV python module. OpenCV uses machine learning algorithms to search for faces within a picture. Because faces are so complicated, there isn’t one simple test that will tell you if it found a face or not. Rather the algorithm uses a number of smaller tasks and patterns to identify a face, these smaller tasks are called classifiers. This can quickly become a long and unefficent process. To optimize this function a cascade is usesd.     ",
              summary: "Summary:",
              summaryp: "This project continued my use and understanding of the openCV package, along with improving my undertaning of the way cascades are put together, and optimizing for distance of a face from the camerea by using the scaleFactor operation. The cascade for this project, and the accompanying background can be found by following the veiw button below. You can view the code and relevent files by following the GitHub button bellow.  ",
              link: "https://realpython.com/traditional-face-detection-python/",
              github: "https://github.com/Karan-Ghatt/FaceDetection"
            },
            7: {
                title: "Password Vault",
                aboutp: "About This Project:",
                info: "This is a very simple project, that evolved from a basic terminal based password generator. From the terminal version I developed a tkinter application that provided a GUI for the application. From there I wanted to take it online, that's where Flask came in. I also wanted to have conditional formatting on the input form. The project uses a simple textbook file to store the data, not very secure at all. Going forward I want to improve the secuirty of the data and create a log-in page and seperate account for each usere.",
                summary: "Summary:",
                summaryp: "This is one of my first python projects, altough not supper pretty, it's a project I am proud of as it was a natural evelution of my inital, simple project. Watching this grow was, and continues to be, very satisfying. Altough simple, I beleive the project caputures the functionality I was looking for, the code for the project can be found by following the GitHub button below, and you can view the live project by following the view button.",  
                link: "https://password-vault-flask.herokuapp.com/",
                github: "https://github.com/Karan-Ghatt/password-vault"
              },
            8: {
                title: "Instagram Bot",
                aboutp: "About This Project:",
                info: "This project is a colabatration between a friend and I, the intention is to create an Insatgram bot that will help a user grow their audience, and provide engagement. Along with this, the aim is it gather a number of metrics from Instagra, i.e follow-count, porfile/post engagement, and display that information using a web dashboard. Selienium is use for web automation, and the InsyaPy API may be encorperated at a later date.",
                summary: "Summary:",
                summaryp: "This is still an on going project, and something my friend and I hope to potentialy monatize in the future, using a test case profile, if we can show organic growth and engagement, it will help prove the concept and product. This project offeres me continued chaces of growth and development. You can follow either the View or GitHub buttons bellow to view the code.",  
                link: "https://github.com/Karan-Ghatt/Instagram-bot",
                github: "https://github.com/Karan-Ghatt/Instagram-bot"
            }
          };
          
          // Get the modal
          var modal = document.getElementById('preview');
          
          // button that opens the modal
          var btn = document.getElementsByClassName("button");
          
          // <span> that closes the modal
          var span = document.getElementsByClassName("close")[0];
          
          // open modal 
          for(let i = 0; i < btn.length; i++){
            btn[i].addEventListener("click", function() {
              var project = btn[i].parentElement;
              openModal(project);
            })
          };
          
          function openModal(project){
            var id = project.id;
            fillOut(id);
            modal.style.display = "block";
            document.getElementsByClassName("modal-content")[0].classList.add("scale");
          }
          
          function fillOut(id){
            document.getElementById("title").innerHTML = modalInfo[id].title;
            document.getElementById("aboutp").innerHTML = modalInfo[id].aboutp;
            document.getElementById("info").innerHTML = modalInfo[id].info;
            document.getElementById("summary").innerHTML = modalInfo[id].summary;
            document.getElementById("summaryp").innerHTML = modalInfo[id].summaryp;
            document.getElementById("live").onclick = function(){
              window.open(modalInfo[id].link,'_blank');
            }
            document.getElementById("github").onclick = function(){
              window.open(modalInfo[id].github,'_blank');
            }
          }
          
          // close the modal
          span.onclick = function() {
              modal.style.display = "none";
          }
          
          window.onclick = function(event) {
              if (event.target == modal) {
                  modal.style.display = "none";
              }
          }
          
          
            // landingbutton scroll
            $(".landingbtn").on("click", function () {
              $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top
              }, 500);
   });


});