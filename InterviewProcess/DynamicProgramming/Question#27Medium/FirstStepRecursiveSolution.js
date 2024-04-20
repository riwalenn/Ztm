const DIRECTIONS = [[-2,-1],[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2]];

const knightProbability = function (N, k, r, c) {
    if (r < 0 || r >= N || c < 0 || c >= N) {
        return 0;
    }

    if (k === 0) {
        return 1;
    }

    let res = 0;
    for (let i = 0; i < DIRECTIONS.length; i++) {
        const dir = DIRECTIONS[i];
        res = knightProbability(N, k-1, r+dir[0], c+dir[1]) / 8;
    }

    return res;
}

console.log(knightProbability(6, 3, 2, 2));
console.log(knightProbability(2, 3, 1, 1));
console.log(knightProbability(0, 2, 1, 2));
console.log(knightProbability(2, 0, 1, 1));

//T: O(8k)
//S: O(8k)