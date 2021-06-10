
# Scramble Generator

## API Reference

#### Get item

```http
  GET /api/?puzzle=${puzzleType}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `puzzleType`      | `string` | **Required**. Id of item to fetch |

Takes Puzzle Type and returns the a random scramble.

#### Support puzzles are
2x2 , 3x3 , 4x4 , 5x5 , 6x6 , 7x7

  
