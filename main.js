function scrollTrigger(selector) {

  let els = document.querySelectorAll(selector);

  els = Array.from(els);

  els.forEach(el => {
    addObserver(el)
  })
}