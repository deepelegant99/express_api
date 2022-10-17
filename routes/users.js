import express from "express";
import { v4 as uuidv4 } from "uuid";

const Router = express.Router();

let users = [];

Router.get("/", (req, res) => {
  res.send(users);
});

Router.post("/", (req, res) => {
  users.push({ ...req.body, id: uuidv4() });
  res.send(`The user name ${req.body.firstName} has been added`);
});

Router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  res.send(user);
});

Router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with id ${id}  is deleted`);
});

Router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id == id);

  if (firstName) {
    user.firstName = firstName;
    res.send(`user with id ${id} has been modified for firstName`);
  }
  if (lastName) {
    user.lastName = lastName;
    res.send(`user with id ${id} has been modified for lastName`);
  }
  if (age) {
    user.age = age;
    res.send(`user with id ${id} has been modified for age`);
  }
});

export default Router;
