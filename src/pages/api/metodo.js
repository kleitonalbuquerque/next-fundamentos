const metodo = (req, res) => {
  if (req.method === "GET") {
    res.status(200).json({ nome: "João" });
  } else {
    res.status(200).json({ nome: "Maria" });
  }
};

export default metodo;
