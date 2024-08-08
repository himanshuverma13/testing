import Parent from "../../model/farmData/farmDataParentModel.js";
import Child from "../../model/farmData/farmDataChildModel.js";

export const createParent = async (req, res) => {
  try {
    const user = await Parent.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getParent = async (req, res) => {
  try {
    const parentData = await Parent.find({
      uid: req.params.id,
      animal: req.query.name,
    });
    const childData = await Child.find({
      uid: req.params.id,
      animal: req.query.name,
    });
    const user = parentData.concat(childData);
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


export const updateParent = async (req, res) => {
  try {
    const parentUpdate = await Parent.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (parentUpdate) {
      res.send(parentUpdate);
    }
    const childUpdate = await Child.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (childUpdate) {
      res.send(childUpdate);
    }

  } catch (error) {
    res.status(400).send(error.message);
  }
};



export const deleteParent = async (req, res) => {
  try {
    // Attempt to delete a parent
    const parentDeleted = await Parent.findByIdAndDelete(req.params.id);
    if (parentDeleted) {
      res.send({ message: "Parent deleted" });
    }
    // Attempt to delete a child
    const childDeleted = await Child.findByIdAndDelete(req.params.id);
    if (childDeleted) {
      res.send({ message: "Child deleted" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: "An error occurred", error: error.message });
  }
};

export default { createParent, getParent, updateParent, deleteParent };
