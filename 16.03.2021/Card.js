class Component {
    render() {}
    _setEventListeners() {}
}

class Card extends Component {
    constructor(templateSelector, data, imagePopup) {
        super()
        this.data = data
        this.$template = document.querySelector(templateSelector)
        this.imagePopup = imagePopup
    }

    _setEventListeners(handlers) {
        handlers.forEach(h => {
            h.el.addEventListener(h.listener, h.handler)
        })
    }

    _remove($parent, $el) {
        const really = confirm('Вы действительно хотите удалить карточку?')

        if (really) {
            $parent.removeChild($el)
        }
    }

    _like($like) {
        $like.classList.toggle('button_type_like_active_true')
        this.data.liked = !this.data.liked
    }

    _openImage() { 
        this.imagePopup.open(this.data.imgUrl, this.data.title)
    }

    render(parentSelector = 'body') {
        const { id, title, liked, imgUrl } = this.data

        const $el = this.$template.content.cloneNode(true).querySelector('.card')
        const $image = $el.querySelector('.card__image')
        const $title = $el.querySelector('.card__heading')
        const $like = $el.querySelector('.button_type_like')
        const $delete = $el.querySelector('.button_type_delete')

        $image.setAttribute('src', imgUrl)
        $title.textContent = title

        if (liked) {
            $like.classList.add('button_type_like_active_true')
        }

        const $parent = document.querySelector(parentSelector)
        $parent.insertAdjacentElement('beforeend', $el)

        this._setEventListeners([
            {
                el: $like, 
                listener: 'click', 
                handler: () => this._like($like)
            },
            {
                el: $delete, 
                listener: 'click',
                handler: () => this._remove($parent, $el)
            },
            {
                el: $image, 
                listener: 'click',
                handler: () => this._openImage()
            }
        ])
    }
}

class ImagePopup extends Component {
    constructor(selector) {
        super()
        this.$el = document.querySelector(selector)
        this._setEventListeners()
    }

    close() {
        this.$el.hidden = true
    }

    open(imgUrl, title) {
        this.$el.querySelector('img').setAttribute('src', imgUrl)
        this.$el.querySelector('h3').textContent = title
        this.$el.hidden = false 
    }

    _setEventListeners() {
        this.$el.addEventListener('click', () => this.close())
    }
}

const json = [
    {
        id: 0,
        title: 'Карачаевск',
        liked: false,
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Mount_Elbrus_May_2008.jpg'
    },
    {
        id: 1,
        title: 'Эльбрус',
        liked: true,
        imgUrl: 'https://strahu-net.com/upload/sprint.editor/eea/img_1511791232_673_poxod_na_elbrus_v_mae_2016_1.jpg'
    },
    {
        id: 2,
        title: 'Домбай',
        liked: false,
        imgUrl: 'https://mwtravel.ru/wp-content/uploads/2018/10/Jelbrus-ves-640x360.jpg'
    },
    {
        id: 3,
        title: 'Португалия',
        liked: false,
        imgUrl: 'https://mwtravel.ru/wp-content/uploads/2018/10/Jelbrus-ves-640x360.jpg'
    }
]

const CARD_TEMPLATE_SELECTOR = '.card-template'

const imagePopup = new ImagePopup('.image-popup')

json.forEach(data => {
    const card = new Card(CARD_TEMPLATE_SELECTOR, data, imagePopup)
    card.render()
})