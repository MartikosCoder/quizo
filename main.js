const quiz_block = document.querySelector('.quiz')
const result_block = document.querySelector('.result')

document.querySelectorAll('.answer').forEach(answer => {
    answer.addEventListener('click', e => {
        quiz_block.classList.remove('opened')
        result_block.classList.add('opened')
    })
})