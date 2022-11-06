function factorial(n) {
    if (n < 0) return
    if (n === 1) return n;
    return n * factorial(n - 1);
}
console.log(factorial(5))

function sumArray(arr) {
    if (arr.length === 0) return;
    if (arr.length === 1) return arr[0];
    return arr[0] + sumArray(arr.slice(1));
}
console.log(sumArray([1, 3, 4, 5, 1]))

function countArray(arr) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return 1;
    return 1 + countArr(arr.slice(1))
}
console.log(countArray([1, 3, 4, 5, 1]))

function largestNum(arr) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];
    if (arr[0] > largestNum(arr.slice(1))) {
        return arr[0];
    } else {
        return largestNum(arr.slice(1));
    }
}
console.log(largestNum([1, 3, 400, 5, 1000, 150]))

function searchBinary(arr, num) {
    if (arr.length === 1) {
        if (arr[0] === num) {
            return arr[0]
        } else { return `None in array` }
    }
    let end = arr.length;
    let mid = Math.floor(end / 2);
    if (num < arr[mid]) {
        return searchBinary(arr.slice(0, mid), num)
    } else if (num > arr[mid]) {
        return searchBinary(arr.slice(mid + 1), num)
    } else {
        return arr[mid]
    }
}
my_list = [1, 3, 5, 7, 9, 10, 11, 13, 14, 15, 16, 17];
console.log(my_list.indexOf(searchBinary(my_list, 14)))
