const dbConnect = require("./1.3mongoMainFile");

const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    // data = await data.find({name:"Brijesh"}).toArray(); // to find exact person with this name or category
    console.log(data);
}
main();  
