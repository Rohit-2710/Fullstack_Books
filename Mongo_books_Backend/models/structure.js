module.exports = (mongoose) => {
  // const mongoose = require("mongoose");
  const Schema = mongoose.Schema(
    {
      title: String,
      author: String,
      description: String,
      cost: Number,
    },
    {
      timestamps: true,
    }
  );
  Schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Books = mongoose.model("books", Schema);
  return Books;
};

// module.exports = mongoose.model("books", Schema);
