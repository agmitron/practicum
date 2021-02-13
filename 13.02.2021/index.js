let cards = [
    {
        id: 0,
        imageSrc: './1.jpg',
        title: 'Карачаевск'
    },
    {
        id: 1,
        imageSrc: './2.png',
        title: 'Гора Эльбрус'
    },
    {
        id: 2,
        imageSrc: './3.png',
        title: 'Домбай'
    },
]

function renderCard(item = {}, index, parent = document.body) {
    parent
        .insertAdjacentHTML('beforeend', `
            <div class="card" data-card-id="${index}">
                <button class="delete-button" data-delete-button="true"></button>
                <img src="${item.imageSrc}" alt="${item.title}" />
                <h3>${item.title}</h3>
                <button class="like-button" data-like="true">
                </button>
            </div>
        `)
}

cards.forEach((item, index) => renderCard(item, index))

document.querySelectorAll('[data-like]')
    .forEach(like => {
        like.addEventListener('click', () => {
            like.classList.toggle('like-button_liked')
        })
    })

document.querySelectorAll('[data-delete-button]')
    .forEach(deleteBtn => {
        deleteBtn.addEventListener('click', () => {
            const reallyDelete = confirm('Вы действительно хотите удалить карточку?')

            if (reallyDelete) {
                const { cardId } = deleteBtn.closest(`[data-card-id]`).dataset
                cards = cards.filter(card => card.id !== +cardId)
                document.querySelector(`[data-card-id="${cardId}"]`).remove()
            }
        })
    })


const popupTemplate = document.getElementById('popupTemplate')

document.querySelectorAll('[data-card-id]').forEach(card => {
    card.addEventListener('click', () => {
        const popup = popupTemplate.content.cloneNode(true).querySelector('.popup')

        const { cardId } = card.dataset
        const cardData = cards.find(card => card.id === +cardId)

        const img = popup.querySelector('img')
        const title = popup.querySelector('h4')
        img.setAttribute('src', cardData.imageSrc)
        img.setAttribute('alt', cardData.title)
        title.textContent = cardData.title

        popup.querySelector('[data-button-close]').addEventListener('click', () => {
            popup.remove()
        })

        document.body.append(popup)
    })
})