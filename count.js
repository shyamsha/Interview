function counting(a, b) {
    count = 0
    each = a.split(' ')

    for (let i = 0; i < each.length; i++) {
        if (each[i] == b) {
            count += 1
        }
    }
    return count
}
console.log(counting('the count the count and', 'the'))