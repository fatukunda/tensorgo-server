import User from "../models/User";
import { getApiUserData } from "../lib/userData";

const populateDatabase = async (req, res) => {
  const userData = await getApiUserData();
  const { pagination } = userData.meta;
  for (let page = 1; page < pagination.pages; page++) {
    const pageData = await getApiUserData(page);
    const { data } = pageData;
    try {
      await User.bulkCreate(data);
      console.log(`Populated Page ${page} of ${pagination.pages}`);
    } catch (error) {
      res
        .status(400)
        .send({ error: error.message || "Failed to populate Database" });
    }
  }
  return res.status(200).send({ message: "Database populated successfully!" });
};

const fetchUsers = async (req, res) => {
  try {
    const { page } = req.query;
    const limit = 10;
    const offset = (parseInt(page) - 1) * limit || 0;
    const users = await User.findAndCountAll({ limit, offset });
    return res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error.message || "Failed to fetch users");
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.update(req.body, { where: { id } });
    return res.status(200).send({ message: "User updated successfully!" });
  } catch (error) {
    res.status(400).send({
      error: error.message || "Failed to update user. An error happened",
    });
  }
};

const downloadCsv = async (req, res) => {
  try {
    const users = await User.findAll({});
    res.status(200).send(users);
  } catch (error) {
    res
      .status(400)
      .send({
        error: error.message || "An error occured downloading csv file.",
      });
  }
};

export { fetchUsers, updateUser, populateDatabase, downloadCsv };
