import cron from "node-cron";
import Driver from "../models/driver.model.js";

cron.schedule("0 0 * * *", async () => {
  const expiredDrivers = await Driver.find({
    licenseExpiryDate: { $lt: new Date() },
  });

  expiredDrivers.forEach(d => {
    console.log(`License expired: ${d.name}`);
  });
});