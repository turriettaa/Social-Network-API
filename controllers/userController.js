// controllers/userController.js
const { User, Thought } = require('../models');
module.exports = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a single user by id
  async getUserById(req, res) {
    console.log('Received userId:', req.params.userId); // Add this line
    try {
      const user = await User.findById(req.params.userId)
        .populate('thoughts')
        .populate('friends');
      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
      res.json(user);
    } catch (err) {
      console.error('Error in getUserById:', err);
      res.status(500).json(err);
    }
  },
  // Create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.error(err); // Add this line for debugging
      res.status(400).json(err);
    }
  },
  // Update a user
  async updateUser(req, res) {
    console.log('Updating user with ID:', req.params.userId);
    console.log('Update data:', req.body);
    
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true, runValidators: true }
      );
      
      if (!updatedUser) {
        console.log('User not found');
        return res.status(404).json({ message: 'No user found with this id!' });
      }
      
      console.log('User updated:', updatedUser);
      res.json(updatedUser);
    } catch (err) {
      console.error('Error updating user:', err);
      res.status(500).json(err);
    }
  },
  // Delete a user
  async deleteUser(req, res) {
    console.log('Attempting to delete user with ID:', req.params.userId);
    
    try {
      const user = await User.findById(req.params.userId);
      
      if (!user) {
        console.log('User not found in database');
        return res.status(404).json({ message: 'No user found with this id!' });
      }
  
      console.log('User found:', user);
  
      await User.findByIdAndDelete(req.params.userId);
      
      console.log('User deleted successfully');
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      console.error('Error deleting user:', err);
      res.status(500).json(err);
    }
  },
  // Add a friend
  async addFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove a friend
  async removeFriend(req, res) {
    console.log('Attempting to remove friend. User ID:', req.params.userId, 'Friend ID:', req.params.friendId);
    
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        console.log('User not found');
        return res.status(404).json({ message: 'No user found with this id!' });
      }
  
      const friend = await User.findById(req.params.friendId);
      if (!friend) {
        console.log('Friend not found');
        return res.status(404).json({ message: 'No friend found with this id!' });
      }
  
      if (!user.friends.includes(req.params.friendId)) {
        console.log('Friend not in user\'s friend list');
        return res.status(400).json({ message: 'This user is not in the friend list!' });
      }
  
      user.friends.pull(req.params.friendId);
      await user.save();
  
      console.log('Friend removed successfully');
      res.json({ message: 'Friend removed successfully', user });
    } catch (err) {
      console.error('Error removing friend:', err);
      res.status(500).json(err);
    }
  },
}