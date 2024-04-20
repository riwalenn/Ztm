const DIRECTIONS = [[-2,-1],[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2]];

const knightProbability = function (N, k, r, c) {
    if (r < 0 || r >= N || c < 0 || c >= N) {
        return 0;
    }

    if (k === 0) {
        return 1;
    }

    const dp = new Array(k + 1).fill(null).map(
        () => Array.from({ length: N }, () => new Array(N).fill(0))
    );

    dp[0][r][c] = 1;

    for (let step = 1; step <= 1; step++) {
        for (let row = 0; row < N; row++) {
            for(let col = 0; col < N; col++) {
                for(let i = 0; i < DIRECTIONS.length; i++) {
                    const dir = DIRECTIONS[i];
                    const prevRow = row + dir[0];
                    const prevCol = col + dir[1];
                    if (prevRow >= 0 && prevRow < N && prevCol >= 0 && prevCol < N) {
                        dp[step][row][col] += dp[step-1][prevRow][prevCol] / 8;
                    }
                }
            }
        }
    }

    let res = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            res += dp[k][i][j];
        }
    }
    return res;
}

console.log(knightProbability(6, 3, 2, 2));
console.log(knightProbability(2, 3, 1, 1));
console.log(knightProbability(0, 2, 1, 2));
console.log(knightProbability(2, 0, 1, 1));

//T: O(k.N²)
//S: O(N².k)