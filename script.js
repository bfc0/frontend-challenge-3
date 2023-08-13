document.querySelector('#btn').addEventListener('click', (e) => {
    e.preventDefault()
    const email = document.querySelector('#email').value
    const inputParent = document.querySelector('#input_parent')
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    if (regex.test(email)) {
        if (inputParent.classList.contains('invalid')) {
            inputParent.classList.toggle('invalid')
        }
        if (!inputParent.classList.contains('valid')) {
            inputParent.classList.toggle('valid')
        }
        setTimeout(() => {
            inputParent.classList.toggle('valid')
        }, 2000)
        return
    }
    inputParent.classList.toggle('invalid')
})
