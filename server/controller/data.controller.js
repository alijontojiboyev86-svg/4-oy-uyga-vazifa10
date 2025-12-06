const { read_file } = require("../fs/file-maneger");
const { v4 } = require("uuid");

//1

const getAll_data = async (req, res) => {
  try {
    const fileData = read_file("data.json");
    res.status(200).json(fileData);
  } catch (error) {
    console.log(error.message);
  }
};

//2

const add_data = async (req, res) => {
  try {
    const { title, price, count } = req.body;
    const fileData = read_file("data.json");
    fileData.push({
      id: v4(),
      title,
      price,
      count,
    });
    write_file("data.json", fileData);
    res.status(201).joson({
      message: "Added new data",
    });
  } catch (error) {
    console.log(error.message);
  }
};

//3

const get_one_data = async (req, res) => {
  try {
    const fileData = read_file("data.json");
  } catch (error) {
    console.log(error.message);
  }
};

//4
const update_data = async (req, res) => {
  try {
    const fileData = read_file("data.json");
  } catch (error) {
    console.log(error.message);
  }
};

//5

const delete_data = async (req, res) => {
  try {
    const fileData = read_file("data.json");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAll_data,
  add_data,
  get_one_data,
  update_data,
  delete_data,
};
