
(function () {

  window.addEventListener('scroll', () => {
    const classList = document.querySelector('.navbar').classList
    if(document.documentElement.scrollTop >0) classList.add('scrolled')
    else classList.remove('scrolled')
  })

})()