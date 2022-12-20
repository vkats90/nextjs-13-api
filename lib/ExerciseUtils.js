import User from '../models/User'

const errorHandle = (err) =>{
    console.log("Eroor: "+err);
  }

  export async function addExerciseToUser (id,desc,dur,date) {
    try {
      let user = await User.findById({_id:id});
    user.exercise.push({'description':desc,'duration':dur,'date':new Date(date).toDateString()});
    await user.save();
    return user 
    } catch(err) {
      errorHandle(err);
    }
  }

  export async function listUsers () {
    try {
      const list = User.find().select('username')
      return list;
    } catch(err) {
      errorHandle(err);
    }
  }

  export async function findUserById (id) {
    try {
      let user = await User.findById({_id:id});
      return user;
    } catch(err) {
      errorHandle(err);
    }
  }

  export async function createUser (uname) {
    try {
      await User.create({'username':uname})
    } catch(err) {
      errorHandle(err);
    }
  }

  export async function findUserByName (uname) {
    try {
      let found = await User.findOne({'username':uname});
      return found
    } catch(err) {
      errorHandle(err)
    }
  };

  export default {createUser,findUserByName,findUserById,listUsers,addExerciseToUser}