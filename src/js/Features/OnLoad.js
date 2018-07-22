const form = document.querySelector('.form')

const onLoadFormAnim = () => {
  setTimeout(() => {
    form.classList.remove('off')
  },1000)
}

onLoadFormAnim()