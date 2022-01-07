export function emptyValue(value) {
    if (value === undefined || value.toString() === '') {
        return false
    }
    return true
}

