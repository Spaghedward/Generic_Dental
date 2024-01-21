const router = require('express').Router();

const departmentRoutes = require('./departmentRoutes');
router.use('/department', departmentRoutes);

const roleRoutes = require('./roleRoutes');
router.use('/role', roleRoutes);

const employeeRoutes = require('./employeeRoutes');
router.use('/employee', employeeRoutes);

module.exports = router;
