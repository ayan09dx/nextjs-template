import jwt from 'jsonwebtoken';
const SECRET_KEY = process.env.SECRET_KEY;

export default async function handleLogin(req,res){
 
    let data = req.body;
    data = JSON.parse(data);
    jwt.sign(
        data,
        SECRET_KEY,
        {
          expiresIn: 100000, // 1 year in seconds
        },
        (err, token) => {
          /* Send succes with token */
          res.status(200).json({
            success: true,
            token: 'Bearer ' + token
          });
        },
      );
//res.json({match:data});


}