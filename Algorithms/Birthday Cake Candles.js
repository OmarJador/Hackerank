const candles = [ 3, 2, 1, 3 ]

let max = Math.max(...candles)

let tallestCandles = candles.filter(candle => candle == max)

console.log(tallestCandles.length)