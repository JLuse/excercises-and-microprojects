export default (req, res) => {
  throw new Error("More API test errors");

  res.status(200).json({ name: "John Doe" });
};