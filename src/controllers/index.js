const dbModels = require("../db");
const sendEmail = require('../services/mailer'); 
const { Partner } = require('../db');

async function getAllServices(_, res) {
  try {
    const services = await dbModels.Service.find({});
    res.json({ services });
  } catch (err) {
    res.status(400).send(err);
  }
}

async function getAllServiceCategories(req, res) {
  try {
    const serviceId = req.params.serviceId;
    const categories = await dbModels.Category.find({ service: serviceId });
    res.json({ categories });
  } catch (err) {
    res.status(400).send(err);
  }
}

async function getAllFilterResources(req, res) {
  try {
    const serviceId = req.params.serviceId;
    const category = req.query.category;
    let categories = [];

    console.log("queryParam", req.query);

    let queryFilter = { service: serviceId };
    if (category) {
      categories = typeof category === "string" ? [category] : category;
    }

    if (categories.length > 0) queryFilter = { ...queryFilter, categories: { $in: categories } };

    const resources = await dbModels.Resource.find(queryFilter);

    res.json({ resources });
  } catch (err) {
    res.status(400).send(err);
  }
}

async function sendUserEmail(req, res) {
  const { to, subject, message } = req.body;
  try {
    await sendEmail({
      from: 'your-email@example.com', 
      to: to,
      subject: subject,
      text: message
    });
    res.json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Error in sending email:', err);
    res.status(500).json({ message: 'Error in sending email' });
  }
}

async function getAllPartners(req, res) {
  try {
    const partners = await Partner.find({});
    res.json(partners); // Send the partners data as JSON
  } catch (err) {
    res.status(500).json({ message: 'Error fetching partners', error: err });
  }
}

module.exports = { getAllServices, getAllServiceCategories, getAllFilterResources, sendUserEmail, getAllPartners };
