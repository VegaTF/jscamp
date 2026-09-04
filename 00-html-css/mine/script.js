// const botones = document.querySelectorAll('.button-apply-job');

// botones.forEach(boton => {
//     boton.addEventListener(
//         'click',
//         function() {
//             boton.textContent = '¡Aplicado!'
//             boton.classList.add('applied')
//             boton.disabled = 'true'
//         }
//     )
// })

const jobsListingSection = document.querySelector('.jobs-listing')

jobsListingSection?.addEventListener(
    'click',
    function(event) {
        const element = event.target

        if (element.classList.contains('button-apply-job')) {
            element.textContent = '¡Aplicado!'
            element.classList.add('applied')
            element.disabled = 'true'
        }
    }
)

const filter = document.getElementById('filter-technology')
const jobsCards = document.querySelectorAll('.jobs-listing article')

filter.addEventListener(
    'change',
    function () {
        const selectedTech = filter.value.toLowerCase()

        jobsCards.forEach(
            function (article) {
                const articleText = article.textContent.toLowerCase()

                if (selectedTech === '' || articleText.includes(selectedTech)) {
                    article.classList.remove('job-hidden')
                } else {
                    article.classList.add('job-hidden')
                }
            }
        )
    }
)

