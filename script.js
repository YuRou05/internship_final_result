// nav
// nav
// nav

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".sub-nav");
  // sub-nav
  const sections = document.querySelectorAll("section");
  const header = document.querySelector("header");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        if (id === "top") {
          navLinks.forEach((link) => link.classList.remove("active"));
        } else {
          navLinks.forEach((link) => {
            if (link.getAttribute("href").substring(1) === id) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      }
    });
  }, observerOptions);

  // 觀察每個 section
  sections.forEach((section) => {
    observer.observe(section);
  });

  // 觀察 header
  // observer.observe(header);

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // 去掉 "#" 符號
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});



// 圖片
// 圖片
// 圖片

const imageLinks = document.querySelectorAll(".image-container");

imageLinks.forEach((link) => {
  // 監聽觸控事件，切換圖片
  link.addEventListener("touchstart", () => {
    const hoverImage = link.querySelector(".hover-image");
    const mainImage = link.querySelector(".main-image");
    if (hoverImage && mainImage) {
      hoverImage.style.opacity = "1";
      mainImage.style.opacity = "0";
    }
  });

  // 監聽觸控結束後恢復原狀
  link.addEventListener("touchend", () => {
    const hoverImage = link.querySelector(".hover-image");
    const mainImage = link.querySelector(".main-image");
    if (hoverImage && mainImage) {
      hoverImage.style.opacity = "0";
      mainImage.style.opacity = "1";
    }
  });
});



// to the top
// to the top
// to the top
function scrollToTop() {
  window.scrollTo({
    top: 0, // 滾動到頂部
    behavior: "smooth", // 平滑滾動效果
  });
}



// 動畫
// 動畫
// 動畫
document.addEventListener('DOMContentLoaded', () => {
  const boxs = document.querySelectorAll(".from-bottom, .from-right, .from-left, .from-center");
  // console.log(boxs)
  let lastScrollY = window.scrollY; // 儲存上次的滾動位置

    const observer = new IntersectionObserver(
        (entries) => {
            const currentScrollY = window.scrollY; // 取得當前滾動位置
            const isScrollingUp = currentScrollY < lastScrollY; // 判斷滾動方向：true 為往上

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 滑入畫面時，一律顯示
                    entry.target.classList.add('show');
                } else if (isScrollingUp) {
                    // 僅當往上滾動且元素離開畫面時，淡出
                    entry.target.classList.remove('show');
                }
            });

            lastScrollY = currentScrollY; // 更新滾動位置
        },
        {
            threshold: 0.1 // 元素進入或離開視窗 10% 時觸發
        }
    );

  boxs.forEach(box => {
      observer.observe(box);
  });
});


