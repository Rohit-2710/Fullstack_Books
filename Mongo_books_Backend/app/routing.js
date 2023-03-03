module.exports = (app) => {
  const books = require("./controller");

  app.post("/books", books.addBook);
  app.get("/books", books.findAll);
  app.get("/find/:id", books.findOne);
  app.post("/update/:id/:title/:description/:cost", books.update);
  app.delete("/delete/:id", books.deleteByID);
};
