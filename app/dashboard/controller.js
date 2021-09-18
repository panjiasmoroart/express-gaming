const Transaction = require("../transaction/model");
const Voucher = require("../voucher/model");
const Player = require("../api/player/model");
const Category = require("../category/model");

module.exports = {
  index: async (req, res) => {
    try {
      // console.log(req.session.user);
      // res.render("index", {
      //   name: req.session.user.name,
      //   title: "Halaman Dashboard",
      // });

      const transaction = await Transaction.countDocuments();
      const voucher = await Voucher.countDocuments();
      const player = await Player.countDocuments();
      const category = await Category.countDocuments();
      const listPlayer = await Player.find();

      res.render("admin/dashboard/view_dashboard", {
        name: req.session.user.name,
        title: "Halaman Dashboard",
        transaction,
        player,
        voucher,
        category,
        listPlayer,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
