function reverseArray(n, arr) {
    const newArray = arr.slice(0, n);

    const reversedArray = newArray.reverse();

    console.log(reversedArray.join(' '));
}

