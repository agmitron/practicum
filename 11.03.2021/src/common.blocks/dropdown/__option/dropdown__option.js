import { dataAttributeSnakeCaseToCamelCase } from '../../utils.js'

export default class DropdownOption {
    constructor($el, optionIdSelector) {
        this.$el = $el

        const camelCasedOptionId = dataAttributeSnakeCaseToCamelCase(
            optionIdSelector
        )

        const id = $el
            .dataset[camelCasedOptionId]

        this.id = id
    }

    _setEventListeners() {}
}