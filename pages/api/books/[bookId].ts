import { books } from "../../../db";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { bookId }: any = req.query;
  if (req.method === "GET") {
    const book = books.find((book) => book.id === parseInt(bookId));
    res.status(200).json(book);
  } else if (req.method === "DELETE") {
    const deleteBook = books.find((book) => book.id === parseInt(bookId));
    const index = books.findIndex((book) => book.id === parseInt(bookId));
    books.splice(index, 1);
    res.status(200).json(books);
  }
}
