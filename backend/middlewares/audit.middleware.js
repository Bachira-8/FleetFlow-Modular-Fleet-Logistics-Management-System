export const auditLog = (action) => (req, res, next) => {
  console.log(`${req.user?.id} performed ${action}`);
  next();
};