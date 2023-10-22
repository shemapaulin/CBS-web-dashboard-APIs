 import jwt from 'jsonwebtoken'
 
 const isSecure = async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        return res.status(404).send("you're unauthorize");
      }
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      req.user = decodedToken;
      console.log(req.user);
      next();
    } catch (error) {
      console.error(`error during authorization: ${error}`)
      res.status(400).json({
        error
      })
    }
  }

  export default isSecure;