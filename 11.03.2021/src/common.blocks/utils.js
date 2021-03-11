export function dataAttributeSnakeCaseToCamelCase(snakeCaseString = '') {
    return snakeCaseString
        .replace('[', '')
        .replace(']', '')
        .split('-')
        .filter(substring => substring !== 'data')
        .map((substring, i) => {
            if (i === 0) return substring
            return substring[0].toUpperCase() + substring.slice(1)
        })
        .join('')
}