import { connectToDatabase } from '../../lib/mongodb';

export default async function getPredictionData(req,res){
    let { db } = await connectToDatabase();
    let message=""
    let doc={}
    doc = await db.collection('predictions').findOne({});
    if(doc!=null){
      message="ok"
    }
    else {
      message="notok"
    }
res.json({message:message,prediction:doc});


}