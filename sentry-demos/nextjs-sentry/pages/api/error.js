export default (req, res) => {
  throw new Error("API throw error test");
  res.status(200).json({ name: "John Doe" });
};