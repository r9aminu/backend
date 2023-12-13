const mongoose = require('mongoose');
const dbConnect = require('./src/db/connect');
const { Partner } = require('./src/db');

const partnersData = [
    "https://www.emeraldcityresourceguide.org/images/SPL.jpg",
    "https://www.emeraldcityresourceguide.org/images/public-health-seattle.png",
    "https://www.emeraldcityresourceguide.org/images/historic-south-downtown.png",
    "https://www.emeraldcityresourceguide.org/images/nova-sunwave.png",
    "https://www.emeraldcityresourceguide.org/images/recovery-cafe.svg",
    "https://www.emeraldcityresourceguide.org/images/REACH.png",
    "https://www.emeraldcityresourceguide.org/images/providence-swedish.png",
    "https://www.emeraldcityresourceguide.org/images/peer-seattle.svg",
    "https://www.emeraldcityresourceguide.org/images/neighborcare-health.png",
    "https://www.emeraldcityresourceguide.org/images/ICHS-Logo-Color.png",
    "https://www.emeraldcityresourceguide.org/images/hep.png",
    "https://www.emeraldcityresourceguide.org/images/ballard-food-bank.svg",
  
  ];

async function insertPartnersData() {
  await dbConnect(); 
  await Partner.deleteMany(); 

  const partnerDocuments = partnersData.map(url => ({ imageUrl: url }));
  await Partner.insertMany(partnerDocuments);
  console.log('Partners data inserted successfully.');

  mongoose.disconnect();
}

insertPartnersData();
