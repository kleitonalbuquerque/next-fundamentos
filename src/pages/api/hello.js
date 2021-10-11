// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function hello(req, res) {
  res.status(200).json([
    { name: "John Doe", age: 34 },
    { name: "Maria", age: 36 },
    { name: "José", age: 65 },
    { name: "Amanda", age: 19 },
    { name: "Pedro", age: 22 },
  ]);
}
