// server.js
require("dotenv").config();
const express = require("express");

const sequelize = require("./dbConfig"); // Sequelize initialization

const db = require("./dbConfig"); // Sequelize models
const app = express();
const PORT = process.env.PORT || 3000;
const Address = db.address;
const Profile = db.profile;
const User = db.user;

// Define associations
User.hasOne(Profile);
Profile.belongsTo(User);
User.hasOne(Address);
Address.belongsTo(User);

// app.use(express.json());

// // Create a new user with profile and address
// app.post('/users', async (req, res) => {
//     try {
//         const { username, profile, address } = req.body;

//         const user = await User.create({
//             username,
//             Profile: profile, // Assuming profile is an object with fullName and age
//             Address: address, // Assuming address is an object with street, city, and zipCode
//         }, {
//             include: [Profile, Address],
//         });

//         res.json(user);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Unable to create user.' });
//     }
// });

// // Get all users with their profiles and addresses
// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.findAll({
//             include: [Profile, Address],
//         });

//         res.json(users);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Unable to fetch users.' });
//     }
// });

// // Get a specific user by ID with their profile and address
// app.get('/users/:id', async (req, res) => {
//     try {
//         const userId = req.params.id;

//         const user = await User.findByPk(userId, {
//             include: [Profile, Address],
//         });

//         if (!user) {
//             return res.status(404).json({ error: 'User not found.' });
//         }

//         res.json(user);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Unable to fetch user.' });
//     }
// });

// // Update user information by ID
// app.put('/users/:id', async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const { username, profile, address } = req.body;

//         const user = await User.findByPk(userId);

//         if (!user) {
//             return res.status(404).json({ error: 'User not found.' });
//         }

//         // Update user fields
//         user.username = username;
//         await user.save();

//         // Update associated profile and address
//         if (user.Profile) {
//             user.Profile.fullName = profile.fullName;
//             user.Profile.age = profile.age;
//             await user.Profile.save();
//         }

//         if (user.Address) {
//             user.Address.street = address.street;
//             user.Address.city = address.city;
//             user.Address.zipCode = address.zipCode;
//             await user.Address.save();
//         }

//         res.json(user);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Unable to update user.' });
//     }
// });

// Start the Express server
// sequelize.sync({ force: true }).then(() => {
//     console.log('Database is ready.');

// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
