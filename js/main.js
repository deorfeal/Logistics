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

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.body.classList.add("body--scrolled");
  } else {
    document.body.classList.remove("body--scrolled");
  }
});

$(function () {
  // Если устройство мобильное, то используем событие клика
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

  $(".burger").on("click", function (event) {
    $("body").toggleClass("body--active");
  });

  $(".menu__link").on("click", function (event) {
    $("body").toggleClass("body--active");
  });
});

new Swiper(".stats-swiper", {
  slidesPerView: 3,
  loop: false,
  spaceBetween: 10,
  speed: 750,
  enabled: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: ".arrow--digits-prev",
    nextEl: ".arrow--digits-next",
  },
  scrollbar: {
    el: ".scrollbar--digits",
    draggable: true, // чтобы скролл можно было перетаскивать
  },
  breakpoints: {
    301: {
      slidesPerView: 1,
      loop: false,
      spaceBetween: 10,
      speed: 750,
      enabled: true,
    },
    769: {
      slidesPerView: 2,
      loop: false,
      spaceBetween: 10,
      speed: 750,
      enabled: true,
    },
    1201: {
      slidesPerView: 3,
      loop: false,
      spaceBetween: 10,
      speed: 750,
      enabled: false,
    },
  },
});

new Swiper(".numbers-swiper", {
  slidesPerView: 3,
  loop: false,
  spaceBetween: 10,
  speed: 750,
  enabled: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grid: {
    rows: 2, // количество строк
    fill: "row", // сначала заполняем по рядам
  },
  navigation: {
    prevEl: ".arrow--digits-prev",
    nextEl: ".arrow--digits-next",
  },
  scrollbar: {
    el: ".scrollbar--digits",
    draggable: true, // чтобы скролл можно было перетаскивать
  },
  breakpoints: {
    301: {
      slidesPerView: 1,
      loop: false,
      spaceBetween: 10,
      speed: 750,
      enabled: true,
      grid: {
        rows: 2, // количество строк
        fill: "row", // сначала заполняем по рядам
      },
    },
    769: {
      slidesPerView: 2,
      loop: false,
      spaceBetween: 10,
      speed: 750,
      enabled: true,
      grid: {
        rows: 2, // количество строк
        fill: "row", // сначала заполняем по рядам
      },
    },
    1201: {
      slidesPerView: 3,
      loop: false,
      spaceBetween: 10,
      speed: 750,
      enabled: false,
      grid: {
        rows: 2, // количество строк
        fill: "row", // сначала заполняем по рядам
      },
    },
  },
});

new Swiper(".technologies-swiper", {
  slidesPerView: 2,
  loop: false,
  spaceBetween: 10,
  speed: 750,
  enabled: false,
  grid: {
    rows: 2, // количество строк
    fill: "row", // сначала заполняем по рядам
  },
  navigation: {
    prevEl: ".arrow--technologies-prev",
    nextEl: ".arrow--technologies-next",
  },
  scrollbar: {
    el: ".scrollbar--technologies",
    draggable: true, // чтобы скролл можно было перетаскивать
  },
  breakpoints: {
    301: {
      slidesPerView: 1,
      loop: false,
      spaceBetween: 30,
      speed: 750,
      enabled: true,
      grid: {
        rows: 1, // количество строк
        fill: "row", // сначала заполняем по рядам
      },
    },
    1201: {
      slidesPerView: 2,
      loop: false,
      spaceBetween: 30,
      speed: 750,
      enabled: true,
      grid: {
        rows: 2, // количество строк
        fill: "row", // сначала заполняем по рядам
      },
    },
  },
});

new Swiper(".description-swiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 15,
  speed: 750,
  enabled: false,
  direction: "vertical",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    301: {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 15,
      speed: 750,
      enabled: true,
      direction: "horizontal",
    },
    769: {
      slidesPerView: 2,
      loop: true,
      spaceBetween: 15,
      speed: 750,
      enabled: true,
      direction: "horizontal",
    },
    993: {
      slidesPerView: 3,
      loop: true,
      spaceBetween: 15,
      speed: 750,
      enabled: false,
      direction: "vertical",
    },
  },
});

new Swiper(".documents-swiper", {
  slidesPerView: 6,
  loop: false,
  spaceBetween: 30,
  speed: 750,
  navigation: {
    prevEl: ".arrow--documents-prev",
    nextEl: ".arrow--documents-next",
  },
  scrollbar: {
    el: ".scrollbar--documents",
    draggable: true, // чтобы скролл можно было перетаскивать
  },
  breakpoints: {
    301: {
      slidesPerView: 2,
      loop: false,
      spaceBetween: 15,
      speed: 750,
    },
    577: {
      slidesPerView: 3,
      loop: false,
      spaceBetween: 30,
      speed: 750,
    },
    769: {
      slidesPerView: 4,
      loop: false,
      spaceBetween: 30,
      speed: 750,
    },
    1101: {
      slidesPerView: 5,
      loop: false,
      spaceBetween: 30,
      speed: 750,
    },
    1401: {
      slidesPerView: 6,
      loop: false,
      spaceBetween: 30,
      speed: 750,
    },
  },
});

const swiper = new Swiper(".scroller", {
  slidesPerView: 1,
  loop: false,
  speed: 750,
  direction: "vertical", // по умолчанию horizontal, но лучше явно указать
  effect: "fade", // включаем эффект fade
  fadeEffect: {
    crossFade: true, // плавное перекрытие слайдов
  },
  navigation: {
    prevEl: ".arrow--scroller-prev",
    nextEl: ".arrow--scroller-next",
  },
});

if (document.querySelector(".scroller")) {
  // Переменные для управления состоянием
  let isScrollingBlocked = true;
  let scrollTimeout = null;
  let lastScrollTime = 0;
  const scrollDelay = 100;
  let savedScrollPosition = 0;

  // Touch переменные для мобильных устройств
  let touchStartY = 0;
  let touchEndY = 0;
  let isTouching = false;
  let touchStartTime = 0;
  let isTransitioning = false; // Добавлено для предотвращения конфликтов
  const minSwipeDistance = 50;
  const maxSwipeTime = 500;

  // Определение мобильного устройства
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ||
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0;

  // Функция для блокировки скролла страницы
  function blockPageScroll() {
    savedScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    document.body.style.position = "fixed";
    document.body.style.top = `-${savedScrollPosition}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    isScrollingBlocked = true;
    document.body.classList.add("slider-mode");
  }

  // Функция для разблокировки скролла страницы
  function unblockPageScroll() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflow = "";

    window.scrollTo(0, savedScrollPosition);

    isScrollingBlocked = false;
    document.body.classList.remove("slider-mode");
  }

  // Улучшенная функция для плавного перехода к скроллу страницы
  function transitionToPageScroll() {
    if (isTransitioning) return;
    isTransitioning = true;

    unblockPageScroll();

    // Для мобильных устройств делаем более агрессивный переход
    setTimeout(() => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollDistance = isMobile ? 150 : 100;

      window.scrollTo({
        top: currentScroll + scrollDistance,
        behavior: "smooth",
      });

      // Сбрасываем флаг перехода
      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }, 50);
  }

  // Функция для обработки вертикального свайпа
  function handleSwipe(direction, distance, duration) {
    if (isTransitioning) return;

    const currentSlide = swiper.activeIndex;
    const totalSlides = swiper.slides.length;

    if (distance < minSwipeDistance || duration > maxSwipeTime) {
      return;
    }

    if (isScrollingBlocked) {
      if (direction === "up") {
        if (currentSlide < totalSlides - 1) {
          swiper.slideNext();
        } else {
          // На последнем слайде - переключаемся на скролл страницы
          transitionToPageScroll();
        }
      } else if (direction === "down") {
        if (currentSlide > 0) {
          swiper.slidePrev();
        }
      }
    } else {
      // В режиме скролла страницы
      if (direction === "down" && window.scrollY <= 50) {
        blockPageScroll();
        swiper.slideTo(totalSlides - 1, 0);
      }
    }
  }

  // Обработчик wheel события для десктопа
  function handleWheelEvent(event) {
    if (isTransitioning) {
      event.preventDefault();
      return;
    }

    const currentTime = Date.now();

    if (currentTime - lastScrollTime < scrollDelay) {
      if (isScrollingBlocked) {
        event.preventDefault();
      }
      return;
    }
    lastScrollTime = currentTime;

    const delta = event.deltaY;
    const currentSlide = swiper.activeIndex;
    const totalSlides = swiper.slides.length;

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    if (isScrollingBlocked) {
      event.preventDefault();

      if (delta > 0) {
        if (currentSlide < totalSlides - 1) {
          swiper.slideNext();
        } else {
          transitionToPageScroll();
        }
      } else if (delta < 0) {
        if (currentSlide > 0) {
          swiper.slidePrev();
        }
      }
    } else {
      if (delta < 0 && window.scrollY <= 50) {
        event.preventDefault();
        blockPageScroll();
        swiper.slideTo(totalSlides - 1, 0);
      }
    }
  }

  // Улучшенные Touch обработчики для мобильных устройств
  function handleTouchStart(event) {
    if (!isMobile || isTransitioning) return;

    const touch = event.touches[0];
    touchStartY = touch.clientY;
    touchStartTime = Date.now();
    isTouching = true;

    // Предотвращаем стандартное поведение только в режиме слайдера
    if (isScrollingBlocked) {
      event.preventDefault();
    }
  }

  function handleTouchMove(event) {
    if (!isMobile || !isTouching || isTransitioning) return;

    // В режиме слайдера блокируем стандартный скролл
    if (isScrollingBlocked) {
      event.preventDefault();
    }
  }

  function handleTouchEnd(event) {
    if (!isMobile || !isTouching || isTransitioning) return;

    const touch = event.changedTouches[0];
    touchEndY = touch.clientY;
    const touchDuration = Date.now() - touchStartTime;
    const distance = Math.abs(touchEndY - touchStartY);

    isTouching = false;

    if (distance > minSwipeDistance && touchDuration <= maxSwipeTime) {
      const direction = touchEndY < touchStartY ? "up" : "down";
      handleSwipe(direction, distance, touchDuration);
    }
  }

  // Обработчик скролла страницы
  function handlePageScroll() {
    if (!isScrollingBlocked && !isTransitioning) {
      savedScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
    }
  }

  // Добавление обработчиков событий
  if (!isMobile) {
    // Десктоп - wheel события
    window.addEventListener("wheel", handleWheelEvent, { passive: false });
  } else {
    // Мобильные - touch события на документе для глобального охвата
    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd, { passive: false });
  }

  // Общий обработчик скролла
  window.addEventListener("scroll", handlePageScroll, { passive: true });

  // Обработчик изменений слайдов
  swiper.on("slideChange", function () {
    if (!isScrollingBlocked && !isTransitioning) {
      blockPageScroll();
    }
  });

  // Инициализация
  document.addEventListener("DOMContentLoaded", function () {
    blockPageScroll();
    window.scrollTo(0, 0);
    savedScrollPosition = 0;
  });

  // Обработка изменения ориентации на мобильных
  window.addEventListener("orientationchange", function () {
    setTimeout(() => {
      swiper.update();
      if (isScrollingBlocked) {
        window.scrollTo(0, 0);
        savedScrollPosition = 0;
      }
    }, 200);
  });

  // Глобальная блокировка bounce эффекта на iOS
  document.addEventListener(
    "touchmove",
    function (event) {
      if (isScrollingBlocked) {
        event.preventDefault();
      }
    },
    { passive: false }
  );

  // API для управления
  window.swiperScrollControl = {
    enableSliderMode: function () {
      if (!isTransitioning) {
        blockPageScroll();
        swiper.slideTo(0);
      }
    },

    enablePageScrollMode: function () {
      if (!isTransitioning) {
        unblockPageScroll();
      }
    },

    getCurrentMode: function () {
      return isScrollingBlocked ? "slider" : "page";
    },

    isTransitioning: function () {
      return isTransitioning;
    },

    isMobileDevice: function () {
      return isMobile;
    },

    getSavedScrollPosition: function () {
      return savedScrollPosition;
    },
  };

  // Обработка закрытия/перезагрузки страницы
  window.addEventListener("beforeunload", function () {
    if (isScrollingBlocked) {
      unblockPageScroll();
    }
  });

  // CSS стили для предотвращения проблем
  const additionalStyles = `
    <style>
      /* Предотвращаем bounce эффект и улучшаем производительность */
      body {
        overscroll-behavior: none;
        -webkit-overflow-scrolling: touch;
      }
      
      body.slider-mode {
        touch-action: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
      }
      
      .heading-swiper {
        touch-action: none;
        position: relative;
        z-index: 10;
      }
      
      /* Предотвращаем скачки при блокировке скролла */
      html {
        scroll-behavior: auto !important;
      }
      
      /* Дополнительные стили для мобильных */
      @media (max-width: 768px) {
        body.slider-mode {
          position: fixed !important;
          width: 100% !important;
          height: 100% !important;
        }
      }
    </style>
  `;

  // Добавляем стили в head
  if (!document.querySelector("#swiper-scroll-styles")) {
    const styleElement = document.createElement("div");
    styleElement.id = "swiper-scroll-styles";
    styleElement.innerHTML = additionalStyles;
    document.head.appendChild(styleElement);
  }
}

new Swiper(".heading-swiper", {
  slidesPerView: 1,
  loop: false,
  spaceBetween: 30,
  speed: 750,
  effect: "fade", // включаем эффект fade
  fadeEffect: {
    crossFade: true, // плавное перекрытие слайдов
  },
  navigation: {
    prevEl: ".arrow--heading-prev",
    nextEl: ".arrow--heading-next",
  },
  scrollbar: {
    el: ".scrollbar--heading",
    draggable: true, // чтобы скролл можно было перетаскивать
  },
});

new Swiper(".partners-swiper", {
  slidesPerView: 9,
  grid: {
    rows: 2, // количество строк
    fill: "row", // сначала заполняем по рядам
  },
  loop: false,
  spaceBetween: 10,
  speed: 750,
  navigation: {
    prevEl: ".arrow--partners-prev",
    nextEl: ".arrow--partners-next",
  },
  scrollbar: {
    el: ".scrollbar--partners",
    draggable: true, // чтобы скролл можно было перетаскивать
  },
  breakpoints: {
    301: {
      slidesPerView: 2,
      grid: {
        rows: 2, // количество строк
        fill: "row", // сначала заполняем по рядам
      },
      loop: false,
      spaceBetween: 10,
      speed: 750,
    },
    577: {
      slidesPerView: 4,
      grid: {
        rows: 2, // количество строк
        fill: "row", // сначала заполняем по рядам
      },
      loop: false,
      spaceBetween: 10,
      speed: 750,
    },
    769: {
      slidesPerView: 6,
      grid: {
        rows: 2, // количество строк
        fill: "row", // сначала заполняем по рядам
      },
      loop: false,
      spaceBetween: 10,
      speed: 750,
    },
    1101: {
      slidesPerView: 8,
      grid: {
        rows: 2, // количество строк
        fill: "row", // сначала заполняем по рядам
      },
      loop: false,
      spaceBetween: 10,
      speed: 750,
    },
    1401: {
      slidesPerView: 9,
      grid: {
        rows: 2, // количество строк
        fill: "row", // сначала заполняем по рядам
      },
      loop: false,
      spaceBetween: 10,
      speed: 750,
    },
  },
});

new Swiper(".news-swiper", {
  slidesPerView: 3,
  loop: false,
  spaceBetween: 30,
  speed: 750,
  navigation: {
    prevEl: ".arrow--news-prev",
    nextEl: ".arrow--news-next",
  },
  scrollbar: {
    el: ".scrollbar--news",
    draggable: true, // чтобы скролл можно было перетаскивать
  },
  breakpoints: {
    301: {
      slidesPerView: 1,
      loop: false,
      spaceBetween: 15,
      speed: 750,
    },
    769: {
      slidesPerView: 2,
      loop: false,
      spaceBetween: 30,
      speed: 750,
    },
    993: {
      slidesPerView: 3,
      loop: false,
      spaceBetween: 30,
      speed: 750,
    },
  },
});