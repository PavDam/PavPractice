        let scrollContainer = document.querySelector(".tipstricksgallary")
        let LeftBtn = document.getElementById("LeftBtn")
        let RightBtn = document.getElementById("RightBtn")
        let pageIndicator = document.querySelectorAll(".inditips > div");
        let isScrolling = false;

        pageIndicator.forEach((indicator, index) => {
            indicator.addEventListener("click", () => {
                if (window.innerWidth >= 1024) {
                    TipsscrollToPage(index + 1);
                }
            });
            });
              
            function TipsscrollToPage(pageNumber) {
            if (!isScrolling) {
                isScrolling = true;
                scrollContainer.style.scrollBehavior = "smooth";
                scrollContainer.scrollLeft = (pageNumber - 1) * scrollContainer.offsetWidth;
                setTimeout(() => {
                    updatePageIndicator();
                    isScrolling = false;
                }, 500);
            }
            }

        LeftBtn.addEventListener("click", () => {
        if (!isScrolling) {
            isScrolling = true;
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft -= scrollContainer.offsetWidth;
            setTimeout(() => {
            updatePageIndicator();
            isScrolling = false;
            }, 500);
        }
        });

        RightBtn.addEventListener("click", () => {
        if (!isScrolling) {
            isScrolling = true;
            scrollContainer.style.scrollBehavior = "smooth";
            scrollContainer.scrollLeft += scrollContainer.offsetWidth;
            setTimeout(() => {
            updatePageIndicator();
            isScrolling = false;
            }, 500);
        }
        });

        function updatePageIndicator() {
            let scrollLeft = scrollContainer.scrollLeft;
            let galleryWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;
            let totalPages = pageIndicator.length;
            let currentPage = Math.floor((scrollLeft / galleryWidth) * totalPages) + 1;
            currentPage = Math.min(Math.max(currentPage, 1), totalPages)

            pageIndicator.forEach((indicator, index) => {
                if (index === currentPage - 1) {
                indicator.classList.add("bg-orange-300", "ring-1", "ring-orange-300", "ring-offset-[8px]");
                indicator.classList.remove("bg-zinc-300");
                } else {
                indicator.classList.add("bg-zinc-300");
                indicator.classList.remove("bg-orange-300", "ring-1", "ring-orange-300", "ring-offset-[8px]");
                }
            });
            
            if (currentPage === 1) {
                LeftBtn.classList.add("lg:invisible");
                LeftBtn.classList.remove("lg:visible");
            } else {
                LeftBtn.classList.add("lg:visible");
                LeftBtn.classList.remove("lg:invisible");
            }
            
            if (currentPage === 4) {
                RightBtn.classList.add("lg:invisible");
                RightBtn.classList.remove("lg:visible");
            } else {
                RightBtn.classList.add("lg:visible");
                RightBtn.classList.remove("lg:invisible");
            }
        }

        scrollContainer.addEventListener('scroll', updatePageIndicator);
        
        let BeascrollContainer = document.querySelector(".BeaGallery")
        let BeaRightBtn = document.getElementById("RightBtnBea")
        let BeaLeftBtn = document.getElementById("LeftBtnBea")
        let BeapageIndicator = document.querySelectorAll(".indibea > div");
        let BeapageIndicator2 = document.querySelectorAll(".indibea2 > div");
        let BeaIsScrolling = false;

        BeapageIndicator.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            if (window.innerWidth >= 1024) {
                BeascrollToPage(index + 1);
            }
        });
        });
          
        function BeascrollToPage(pageNumber) {
        if (!BeaIsScrolling) {
            BeaIsScrolling = true;
            BeascrollContainer.style.scrollBehavior = "smooth";
            BeascrollContainer.scrollLeft = (pageNumber - 1) * 1184;
            setTimeout(() => {
                BeaupdatePageIndicator();
                BeaIsScrolling = false;
            }, 500);
        }
        }

        BeaRightBtn.addEventListener("click", () => {
        if (!BeaIsScrolling) {
            BeaIsScrolling = true;
            BeascrollContainer.style.scrollBehavior = "smooth";
            BeascrollContainer.scrollLeft += 1184;
            setTimeout(() => {
            BeaupdatePageIndicator();
            BeaIsScrolling = false;
            }, 500);
        }
        });

        BeaLeftBtn.addEventListener("click", () => {
        if (!BeaIsScrolling) {
            BeaIsScrolling = true;
            BeascrollContainer.style.scrollBehavior = "smooth";
            BeascrollContainer.scrollLeft -= 5000;
            setTimeout(() => {
                BeaupdatePageIndicator();
            BeaIsScrolling = false;
            }, 500);
        }
        });

        function BeaupdatePageIndicator() {
            let scrollLeft = BeascrollContainer.scrollLeft;
            let galleryWidth = BeascrollContainer.scrollWidth - BeascrollContainer.clientWidth;
            let totalPages = BeapageIndicator.length;
            let currentPage = Math.floor((scrollLeft / galleryWidth) * totalPages) + 1;
            currentPage = Math.min(Math.max(currentPage, 1), totalPages)

            BeapageIndicator.forEach((indicator, index) => {
                if (index === currentPage - 1) {
                indicator.classList.add("bg-orange-300", "ring-1", "ring-orange-300", "ring-offset-[8px]", "ring-offset-orange-50");
                indicator.classList.remove("bg-zinc-300");
                } else {
                indicator.classList.add("bg-zinc-300");
                indicator.classList.remove("bg-orange-300", "ring-1", "ring-orange-300", "ring-offset-[8px]", "ring-offset-orange-50");
                }
            });

            BeapageIndicator2.forEach((indicator, index) => {
                if (index === currentPage - 1) {
                indicator.classList.add("bg-orange-300", "ring-1", "ring-orange-300", "ring-offset-[8px]", "ring-offset-orange-50");
                indicator.classList.remove("bg-zinc-300");
                } else {
                indicator.classList.add("bg-zinc-300");
                indicator.classList.remove("bg-orange-300", "ring-1", "ring-orange-300", "ring-offset-[8px]", "ring-offset-orange-50");
                }
            });

            if (currentPage < 4) {
                LeftBtnBea.classList.add("lg:invisible");
                LeftBtnBea.classList.remove("lg:visible");
            } else {
                LeftBtnBea.classList.add("lg:visible");
                LeftBtnBea.classList.remove("lg:invisible");
            }
            
            if (currentPage === 4) {
                RightBtnBea.classList.add("lg:invisible");
                RightBtnBea.classList.remove("lg:visible");
            } else {
                RightBtnBea.classList.add("lg:visible");
                RightBtnBea.classList.remove("lg:invisible");
            }
        }

        BeascrollContainer.addEventListener('scroll', BeaupdatePageIndicator);

        let HeadscrollContainer = document.querySelector(".HeadGallery")
        let HeadLeftBtn = document.getElementById("LeftBtnHead")
        let HeadRightBtn = document.getElementById("RightBtnHead")
        let HeadpageIndicator = document.querySelectorAll(".indihead > div");
        let HeadIsScrolling = false;

        HeadpageIndicator.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            if (window.innerWidth >= 1024) {
                scrollToPage(index + 1);
            }
         });
        });
          
        function scrollToPage(pageNumber) {
        if (!HeadIsScrolling) {
            HeadIsScrolling = true;
            HeadscrollContainer.style.scrollBehavior = "smooth";
            HeadscrollContainer.scrollLeft = (pageNumber - 1) * 966;
            setTimeout(() => {
                HeadupdatePageIndicator();
                HeadIsScrolling = false;
            }, 500);
        }
        }

        HeadLeftBtn.addEventListener("click", () => {
        if (!HeadIsScrolling) {
            HeadIsScrolling = true;
            HeadscrollContainer.style.scrollBehavior = "smooth";
            HeadscrollContainer.scrollLeft -= 966;
            setTimeout(() => {
                HeadupdatePageIndicator()
                HeadIsScrolling = false;
            }, 500);
        }
        });
        

        HeadRightBtn.addEventListener("click", () => {
        if (!HeadIsScrolling) {
            HeadIsScrolling = true;
            HeadscrollContainer.style.scrollBehavior = "smooth";
            HeadscrollContainer.scrollLeft += 966;
            setTimeout(() => {
                HeadupdatePageIndicator()
                HeadIsScrolling = false;
            }, 500);
        }
        });

        function HeadupdatePageIndicator() {
            let scrollLeft = HeadscrollContainer.scrollLeft;
            let galleryWidth = HeadscrollContainer.scrollWidth - HeadscrollContainer.clientWidth;
            let totalPages = HeadpageIndicator.length;
            let currentPage = Math.floor((scrollLeft / galleryWidth) * totalPages) + 1;
            currentPage = Math.min(Math.max(currentPage, 1), totalPages)
            
            HeadpageIndicator.forEach((indicator, index) => {
              if (index === currentPage - 1) {
                indicator.classList.add("bg-orange-300", "ring-1", "ring-orange-300", "ring-offset-[8px]", "ring-offset-orange-100");
                indicator.classList.remove("bg-zinc-300");
              } else {
                indicator.classList.add("bg-zinc-300");
                indicator.classList.remove("bg-orange-300", "ring-1", "ring-orange-300", "ring-offset-[8px]", "ring-offset-orange-100");
              }
            });
          
            if (currentPage === 1) {
              LeftBtnHead.classList.add("pointer-events-none", "bg-orange-200");
              LeftBtnHead.classList.remove("bg-orange-300");
            } else {
              LeftBtnHead.classList.add("bg-orange-300");
              LeftBtnHead.classList.remove("pointer-events-none", "bg-orange-200");
            }
            
            if (currentPage === totalPages) {
              RightBtnHead.classList.add("pointer-events-none", "bg-orange-200");
              RightBtnHead.classList.remove("bg-orange-300");
            } else {
              RightBtnHead.classList.add("bg-orange-300");
              RightBtnHead.classList.remove("pointer-events-none", "bg-orange-200");
            }
          }

        HeadscrollContainer.addEventListener('scroll', HeadupdatePageIndicator);