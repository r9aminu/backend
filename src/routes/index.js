const router = require("express").Router();
const controller = require("../controllers");
const { Resource } = require("../db/index"); 

router.post('/send-email', controller.sendUserEmail);
router.get("/partners", controller.getAllPartners);

router.get("/", (req, res) => res.json({ message: "Service Guide API" }));
router.get("/services", controller.getAllServices);
router.get("/service-categories/:serviceId", controller.getAllServiceCategories);
router.get("/resources/:serviceId", controller.getAllFilterResources);

router.get("/search", async (req, res) => {
  try {
    const searchTerm = req.query.query;
    console.log("Search term received:", searchTerm); 

    if (!searchTerm || searchTerm.trim() === '') {
      console.log("Invalid search term");
      return res.status(400).json({ message: "Invalid search term" });
    }

    const regex = new RegExp(searchTerm, 'i');
    const results = await Resource.find({
      $or: [
        { title: { $regex: regex } },
        { subTitle: { $regex: regex } },
        { description: { $regex: regex } },
        // Include any other fields if necessary
      ]
    }).populate('service').populate('categories');

    console.log("Number of search results:", results.length); // Log the number of results
    res.json(results);
  } catch (error) {
    console.error("Search error:", error); // Log the error
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
