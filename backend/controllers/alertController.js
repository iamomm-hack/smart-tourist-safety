import Alert from "../models/Alert.js";

export const getAlerts = async (req, res) => {
  const alerts = await Alert.find().sort({ time: -1 });
  res.json(alerts);
};
