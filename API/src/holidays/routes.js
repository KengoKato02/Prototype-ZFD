const { Router } = require("express");
const controller = require ("./controller")

const router = Router();

router.get("/", controller.getHolidays);

router.get("/:id", controller.getHolidayById);

router.post("/", controller.addHolidays);

router.delete("/:id", controller.removeHoliday);

router.put("/:id", controller.updateHolidayType);

module.exports = router; 