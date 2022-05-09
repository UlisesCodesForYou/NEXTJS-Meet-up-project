// /api/newmeetUp

import {MongoClient} from 'mongodb'

const Handler = async (req, res) => {

    if (req.method === 'POST') { // This is only executed if it's a post request. If it is, then It'll run the code in the block. 
        const data = req.body

        const {title, image, address, description} = data;  //This data obj is obtained from the component itself. They're from the meetup form. 

        await MongoClient.connect('mongodb+srv://ulisesorozco6:3nkd513iNhKYH35y@cluster0.utzdw.mongodb.net/newmeetUp?retryWrites=true&w=majority')
        
    }


};

export default Handler; 

// user password for dummy 3nkd513iNhKYH35y