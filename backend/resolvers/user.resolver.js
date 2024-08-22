
import { users } from "../dummyData/date.js";
import User from "../models/user.model.js";
import  bcrypt  from "bcryptjs";

const userResolver = {

    Mutation: {
        signUp: async(_,{input},context) => {
            try {
                const {username,name,password,gender} = input;
                if(!username || !name || !password || !gender) {
                    throw new Error("All Fields Are Required")
                }
                const existing = await User.findOne({username});
                if(existing) {
                    throw new Error("User With The Username Already Exist")
                }

                const salt = await bcrypt.genSalt(12)
                const hashedPassword = await bcrypt.hash(password, salt);
                //profile picture from api avator.iram
                const boyProfilePic = `https//avator.iran.liara.run/public/boy?username=${username}`;
                const girlProfilePic = `https//avator.iran.liara.run/public/girl?username=${username}`;

                const newUser = new User({
                    username,
                    name,
                    password:hashedPassword,
                    gender,
                    profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
                })

                await newUser.save();
                await context.login(newUser);
                return newUser;
            } catch (err) {
                console.error("Error in signUp:",err);
                throw new Error(err.message || "Internal server error")
            }
        },
        login: async(_,{input},context) => {
            try {
                const {username,password} = input;
                const {user} = await context.authenticate("graphql-local",{username,password})  

                await context.login(user);
                return user;
            } catch (error) {
                console.error("Error in login:",err);
                throw new Error(err.message || "Internal server error")
            }
        },
        logout: async(_,__,context) => {
            try {
                await context.logout();
                req.session.destroy((err) => {
                    if(err) throw err;
                })
                resizeBy.clearCookie("connect.sid");
                return { message: "Logged out successfully"}
            } catch (err) {
                console.error("Error in logout:",err);
                throw new Error(err.message || "Internal server error")
            }
        }
    },
    Query: {
        authUser: async(_,__,context) => {
            try {
                const user = await context.getUser()
                return user;
            } catch (err) {
                console.error("Error in auth:",err);
                throw new Error(err.message || "Internal server error")
            }
        },
        user: async (_,{userId}) => {
            
            try {
                const user = await User.findById(userId);
                return user;
            } catch (error) {
                console.error("Error in user query:",err);
                throw new Error(err.message || "Internal server error")
            }
        }
    },
    //add user/transacton relaation
}

export default userResolver