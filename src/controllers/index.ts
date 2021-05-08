import { Request, Response } from "express";
import puzzleTypeMap, { Puzzle } from "../Puzzle";

export const getPuzzle = (req: Request, res: Response) => {
  const { puzzleType } = req.query;

  const { length, range, type } = puzzleTypeMap.get(puzzleType);

  const puzzle = new Puzzle(length, range, type);

  res.json({
    scramble: puzzle.scrambleGenrator()
  });
}