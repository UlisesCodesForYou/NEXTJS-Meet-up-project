// /api/newmeetUp  This will send queries to the mongoDB atlas cluster.

import { MongoClient } from "mongodb";

const Handler = async (req, res) => {
  if (req.method === "POST") {
    // This is only executed if it's a post request. If it is, then It'll run the code in the block.
    const data = req.body;

    // const {title, image, address, description} = data;  //This data obj is obtained from the component itself. They're from the meetup form.

    const client = await MongoClient.connect(
      "mongodb+srv://ulisesorozco6:3nkd513iNhKYH35y@cluster0.utzdw.mongodb.net/newmeetUp?retryWrites=true&w=majority"
    );
    const db = client.db(); // DB = database

    const meetupsCollection = db.collection("meetUp");
    const result = await meetupsCollection.insertOne(data);

    client.close()

    res.status(201).json({message: 'The meetup was successfully added!'})
  }
};

export default Handler;

// user password for dummy 3nkd513iNhKYH35y
