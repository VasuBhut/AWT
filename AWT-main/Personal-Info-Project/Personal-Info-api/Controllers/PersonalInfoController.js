const PersonalInfo = require("../Models/PersonalInfo");

exports.createPersonalInfo = async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const newInfo = new PersonalInfo({ name, age, email });
    await newInfo.save();
    return res.status(200).send({
      success: true,
      Your_info: newInfo,
      message: "Your Information Added Successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
  }
};

exports.GetAllInfo = async (req, res) => {
  try {
    const Infos = await PersonalInfo.find({});
    return res.status(200).send({ success: true, Infos });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
  }
};

exports.GetInfobyId = async (req, res) => {
  try {
    const InfoId = req.params.id;
    const Info = await PersonalInfo.findById(InfoId);
    if (!Info) {
      return res
        .status(404)
        .json({ success: false, message: "Info not found." });
    }
    const responseData = {
      name: Info.name,
      age: Info.age,
      email: Info.email,
    };
    res.status(200).json({
      success: true,
      data: responseData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
  }
};

exports.UpdatePersonalInfo = async (req, res) => {
  try {
    const InfoId = req.params.id;
    const { name, age, email } = req.body;
    const Info = await PersonalInfo.findById(InfoId);
    if (name !== Info.name) {
      Info.name = name;
    }
    if (age !== Info.age) {
      Info.age = age;
    }
    if (email !== Info.email) {
      Info.email = email;
    }
    const updatedInfo = await Info.save();
    return res.status(200).send({
      success: true,
      Your_info: updatedInfo,
      message: "Your Information Updated Successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
  }
};

exports.DeletePersonalInfo = async (req, res) => {
  try {
    const InfoId = req.params.id;
    const deletedInfo = await PersonalInfo.findByIdAndDelete(InfoId);
    if (!deletedInfo) {
      return res
        .status(400)
        .json({ success: false, message: "Info not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Info deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error.", error });
  }
};
