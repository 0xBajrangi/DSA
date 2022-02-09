function pickUpToys(toys, k) {

    let obj = {};
    let i = 0, j = 0;
    let index = [];

    let ans = 0;
    while (j < toys.length) {
        if (obj[toys[j]] == undefined) {
            obj[toys[j]] = 1;
        } else {
            obj[toys[j]]++;
        }

        if (Object.keys(obj).length < k) {
            j++;
        } else if (Object.keys(obj).length === k) {
            ans = Math.max(ans, j - i + 1);
            index = [i,j]
            j++;
        } else {
            while (Object.keys(obj).length > k) {
                if (obj[toys[i]] == 1) {
                    delete obj[toys[i]];
                } else {
                    obj[toys[i]]--;
                }
                i++;

            }
            j++;
        }
    }
    console.log(ans)
    console.log(toys.slice(index[0],index[1]+1))
}

pickUpToys("abaccccccccab", 2);


/*

john is in mall with his mother 
he see a your shop and want to buy toys 
so his mother has some condition so that he will select the toys faster
the toys are arranged in the form of a 1d array with
1.whatever toys you are selecting it should be in continious manner
2.you can have only two types of toys in


*/ 