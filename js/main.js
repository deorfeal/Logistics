// Aos - the right initialisation
jQuery(document).ready(function () {
  (function () {
    // your page initialization code here
    // the DOM will be available here
    AOS.init({
      duration: 750,
      offset: 0, // offset (in px) from the original trigger point
      anchorPlacement: "top-bottom", // define where the AOS animations will be triggered
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

//
if (document.querySelector(".services-items")) {
  const items = document.querySelectorAll(".services-items__item");
  const backgrounds = document.querySelectorAll(".services-bg");

  const DEFAULT_INDEX = 0;

  function setActive(index) {
    items.forEach((item) => item.classList.remove("services-item--active"));
    backgrounds.forEach((bg) => bg.classList.remove("services-bg--active"));

    items[index].classList.add("services-item--active");
    backgrounds[index].classList.add("services-bg--active");
  }

  // hover по айтему
  items.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      setActive(index);
    });
  });

  // уход мыши со всего блока айтемов → вернуть первый
  const itemsWrapper = document.querySelector(".services-items");

  itemsWrapper.addEventListener("mouseleave", () => {
    setActive(DEFAULT_INDEX);
  });
}
//

new Swiper(".partners-swiper", {
  slidesPerView: 10,
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
      slidesPerView: 10,
      loop: true,
      spaceBetween: 50,
      speed: 750,
    },
  },
});

new Swiper(".news-swiper", {
  slidesPerView: 4,
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
      slidesPerView: 4,
      loop: true,
      spaceBetween: 30,
      speed: 750,
    },
  },
});

new Swiper(".advantages-swiper", {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 30,
  speed: 750,
  navigation: {
    prevEl: ".arrow--advantages-prev",
    nextEl: ".arrow--advantages-next",
  },
  pagination: {
    el: ".pagination--advantages",
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
    551: {
      slidesPerView: 2,
      loop: true,
      spaceBetween: 20,
      speed: 750,
    },
    993: {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 20,
      speed: 750,
    },
    1201: {
      slidesPerView: 5,
      loop: true,
      spaceBetween: 30,
      speed: 750,
    },
  },
});

if (document.querySelector(".langs")) {
  const langs = document.querySelector(".langs");
  const langsList = document.querySelector(".langs-list");
  const items = langsList.querySelectorAll(".langs-item");

  // Создаем кружок
  const highlight = document.createElement("div");
  highlight.classList.add("langs__highlight");
  langs.appendChild(highlight);

  // Находим активный элемент
  let activeItem = langsList.querySelector(".langs-item--active");

  function moveHighlight(target) {
    const rect = target.getBoundingClientRect();
    const parentRect = langsList.getBoundingClientRect();
    const left = rect.left - parentRect.left;
    highlight.style.transform = `translate(${left}px, -50%)`;
  }

  // Изначально на активном
  moveHighlight(activeItem);

  // Ховер по элементам
  items.forEach((item) => {
    item.addEventListener("mouseenter", () => moveHighlight(item));
    item.addEventListener("mouseleave", () => moveHighlight(activeItem));
  });
}

// *** Tabs ***
document.querySelectorAll(".tub[data-tubs]").forEach((tab, index, tabList) => {
  tab.addEventListener("click", () => {
    const group = tab.dataset.tubs;

    // Найдём все табы и элементы контента с тем же data-tubs
    const tabs = Array.from(
      document.querySelectorAll(`.tub[data-tubs="${group}"]`)
    );
    const contents = Array.from(
      document.querySelectorAll(`.tub-element[data-tubs="${group}"]`)
    );

    const tabIndex = tabs.indexOf(tab);

    // Сброс классов у всех табов этой группы
    tabs.forEach((t) => t.classList.remove("tub--active"));
    tab.classList.add("tub--active");

    // Сброс классов у всех элементов этой группы
    contents.forEach((el) => el.classList.remove("tub-element--active"));
    if (contents[tabIndex]) {
      contents[tabIndex].classList.add("tub-element--active");
    }
  });
});
// //

document.addEventListener("DOMContentLoaded", function () {
  if (!document.querySelector(".calculation")) return;
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
