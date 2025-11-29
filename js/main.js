// Aos - the right initialisation
jQuery(document).ready(function () {
    (function () {
        // your page initialization code here
        // the DOM will be available here
        AOS.init({
            duration: 750,
            offset: 0, // offset (in px) from the original trigger point
            anchorPlacement: 'top-bottom', // define where the AOS animations will be triggered
        });
    })();
});
// //

$(function () {
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  // Если устройство мобильное, то используем событие клика
  if (isMobileDevice()) {
    $(document).on("click", function (event) {
      // Проверяем, является ли цель клика элементом с классом '.lang'
      if (!$(event.target).closest(".dropdown").length) {
        // Если нет, убираем класс 'dropdown--active' у всех элементов с этим классом
        $(".dropdown").removeClass("dropdown--active");
      } else {
        // Иначе добавляем/убираем класс 'dropdown--active' для элемента с классом '.dropdown'
        $(event.target).closest(".dropdown").toggleClass("dropdown--active");
      }
    });
  } else {
    // Иначе используем событие ховера
    $(".dropdown").on("mouseover", function () {
      $(this).addClass("dropdown--active");
    });

    $(".dropdown").on("mouseout", function () {
      $(this).removeClass("dropdown--active");
    });
  }

  $(".burger").on("click", function (event) {
    $("body").toggleClass("body--active");
  });
});

new Swiper(".recalls-swiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  speed: 750,
  navigation: {
    prevEl: ".arrow--recalls-prev",
    nextEl: ".arrow--recalls-next",
  },
  pagination: {
    el: ".pagination--recalls",
    type: "bullets",
    clickable: true,
  },
  // autoplay: {
  //     delay: 5000, // задержка между слайдами в миллисекундах
  //     disableOnInteraction: false, // если true, автопрокрутка остановится при взаимодействии пользователя с swiper
  // },
  breakpoints: {
    301: {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 15,
      speed: 750,
    },
    769: {
      slidesPerView: 2,
      loop: true,
      spaceBetween: 20,
      speed: 750,
    },
    992: {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 30,
      speed: 750,
    },
  },
});

new Swiper(".partners-swiper", {
  slidesPerView: 8,
  loop: true,
  spaceBetween: 50,
  speed: 750,
  autoplay: {
    delay: 3000, // задержка между слайдами в миллисекундах
    disableOnInteraction: false, // если true, автопрокрутка остановится при взаимодействии пользователя с swiper
  },
  breakpoints: {
    301: {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 16,
      speed: 750,
    },
    551: {
      slidesPerView: 4,
      loop: true,
      spaceBetween: 24,
      speed: 750,
    },
    769: {
      slidesPerView: 6,
      loop: true,
      spaceBetween: 24,
      speed: 750,
    },
    1201: {
      slidesPerView: 8,
      loop: true,
      spaceBetween: 50,
      speed: 750,
    },
  },
});

new Swiper(".news-swiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 30,
  speed: 750,
  navigation: {
    prevEl: ".arrow--news-prev",
    nextEl: ".arrow--news-next",
  },
  pagination: {
    el: ".pagination--news",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    301: {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 15,
      speed: 750,
    },
    769: {
      slidesPerView: 2,
      loop: true,
      spaceBetween: 20,
      speed: 750,
    },
    1201: {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 30,
      speed: 750,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  // ----------------------
  // 1. Кастомный select
  // ----------------------
  var x = document.getElementsByClassName("custom-select");
  for (var i = 0; i < x.length; i++) {
    var selElmnt = x[i].getElementsByTagName("select")[0];
    var a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);

    var b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (var j = 1; j < selElmnt.length; j++) {
      var c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function () {
        var s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        var h = this.parentNode.previousSibling;
        for (var k = 0; k < s.length; k++) {
          if (s.options[k].innerHTML == this.innerHTML) {
            s.selectedIndex = k;
            h.innerHTML = this.innerHTML;
            var y = this.parentNode.getElementsByClassName("same-as-selected");
            for (var l = 0; l < y.length; l++) {
              y[l].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
        updateProgress(); // обновляем прогресс при выборе select
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);

    a.addEventListener("click", function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    var x = document.getElementsByClassName("select-items");
    var y = document.getElementsByClassName("select-selected");
    var arrNo = [];
    for (var i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (var i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i) === -1) {
        x[i].classList.add("select-hide");
      }
    }
  }

  document.addEventListener("click", closeAllSelect);

  // ----------------------
  // 2. Прогресс-бар формы
  // ----------------------
  var form = document.querySelector(".calculation");
  var progressBar = document.querySelector(".cost-progress__bar");

  function updateProgress() {
    var totalFields = form.querySelectorAll("input, select").length;
    var filledFields = 0;

    form.querySelectorAll("input, select").forEach(function (field) {
      if (field.value && field.value.trim() !== "") filledFields++;
    });

    var progressPercent = Math.round((filledFields / totalFields) * 100);
    progressBar.style.width = progressPercent + "%";
    progressBar.querySelector("span").textContent = progressPercent + "%";
  }

  // обновляем прогресс при изменении инпутов
  form.querySelectorAll("input, select").forEach(function (field) {
    field.addEventListener("input", updateProgress);
    field.addEventListener("change", updateProgress);
  });

  // инициализируем прогресс
  updateProgress();
});


