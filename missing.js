function missingElement(arr1) {
    for (let i = 0; i < arr1.length - 1; i++) {
        let add = arr1[i + 1] - arr1[i]
            //console.log(add)
        if (add == 2) {
            return arr1[i] + 1
        } else if (add == -2) {
            return arr1[i] - 1
        }
    }

}
console.log(missingElement([1, 2, 3, 5, 7]))
console.log(missingElement([19, 18, 17, 15]))