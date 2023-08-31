exports.get_maindata = async (req, res) => {
  // const test = await prisma.user.findMany();
  res.send("test");
};

exports.post_maindata = (req, res) => {
  res.send("msg from  POST useController");
};
