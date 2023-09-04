import bcrypt from "bcrypt";

const saltRounds = 10;

 const encode = async (password) => {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash the password with the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);
    
    return hashedPassword;
  } catch (error) {
    console.error(error);
  }
};

try {
    
} catch (error) {
    
}


export default encode