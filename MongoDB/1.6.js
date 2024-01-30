const dbConnect = require("./1.3mongoMainFile");

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { name:"Brijesh"},{
            $set:{name:"Brijesh Patel", Age: 27, sex: "Unknown", place:"Universe"}

    })
    console.log(result);
}

updateData();