const dbConnect = require("./1.3mongoMainFile");

const insertData = async () => {
    const db = await dbConnect();
    const result = await db.insertMany([   // if you want to add single data then use insertOne without an array[].
        {name:"Sohan", sex:"Male", category:"Kutta"},
        {name:"Kunu", sex:"Male", category:"Manav"},
        {name:"Bunu", sex:"Unknown", category:"Adianav"},

    ]);
    if (result.acknowledged) {
        console.log("data inserted");

    }
}
insertData();