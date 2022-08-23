// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Data = {
  id: number;
  title: string;
  pages: number;
  language: string;
};

const books: Data[] = [
  {
    id: 1,
    title: "Things fall apart",
    pages: 209,
    language: "English",
  },
  {
    id: 2,
    title: "Fairy tails",
    pages: 784,
    language: "Danish",
  },
  {
    id: 3,
    title: "The book of Job",
    pages: 176,
    language: "Hebrew",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    pages: 443,
    language: "French",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  if (req.method === "GET") {
    res.status(200).json(books);
  } else if (req.method === "POST") {
    const title = req.body.title;
    const pages = req.body.pages;
    const language = req.body.language;
    const newBook = {
      id: books.length + 1,
      title,
      pages,
      language,
    };
    books.push(newBook);
    res.status(201).json(books);
  }
}
