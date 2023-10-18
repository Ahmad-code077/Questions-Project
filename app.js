// Using two method to show Answer using java Script

// 1- Using selectors inside the element
const questions = document.querySelectorAll('.question')

questions.forEach(function (title) {
  const btn = title.querySelector('.question-btn')
  // console.log(btn)
  btn.addEventListener('click', function () {
    questions.forEach(function (item) {
      if (item !== title) {
        item.classList.remove('show-text')
      }
    })

    title.classList.toggle('show-text')
  })
})

// 2- Traversing the dom
/*
const btns = document.querySelectorAll('.question-btn')

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const question = e.currentTarget.parentElement.parentElement
    question.classList.toggle('show-text')
  })
})
*/
