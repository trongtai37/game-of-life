const generateRandomCells = (): number[][] => {
  let set = new Set<number>();
  while (set.size <= 40) {
    let randomNum: number = Math.floor(Math.random() * 100);
    if (!set.has(randomNum)) set.add(randomNum);
  }

  let results: number[][] = [];
  for (let cell of set.values()) {
    let i = Math.floor(cell / 10);
    let j = cell % 10;

    results.push([i, j]);
  }

  return results;
};

const board = new Array(10).fill(1).map((row) => new Array(10).fill(false));

let randomCells = generateRandomCells();

console.log(randomCells);

randomCells.forEach(([i, j]) => {
  board[i][j] = true;
});

// const board: boolean[][] = [
//   [false, false, false, false, false, false, false, false, false, false],
//   [false, false, false, false, false, false, false, false, false, false],
//   [false, false, false, false, false, false, true, false, false, false],
//   [false, false, false, true, false, true, false, false, false, false],
//   [false, true, false, false, true, true, true, false, false, false],
//   [false, true, false, true, true, false, true, false, false, false],
//   [false, true, false, false, false, true, false, false, false, false],
//   [false, false, false, true, true, true, true, false, false, false],
//   [false, false, false, false, true, false, true, false, false, false],
//   [false, false, false, false, false, false, false, false, false, false],
// ];

export default board;
