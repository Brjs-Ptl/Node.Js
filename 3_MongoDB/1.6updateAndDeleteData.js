// if we inter 5 times data should be add or remove 5 times
// -------------Update Data or Replace Data-------------------
/*
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
*/
// --------------------Delete Data-------------------------

const dbConnect = require("./1.3mongoMainFile");

const deleteData = async () => {
    let data = dbConnect();
    let result = await (await data).deleteOne({name:"Raju"})  // if we use data.deleteMany then all record deleted from that name or that category
    console.log(result);
    if (result.acknowledge) {
        console.log("Record Deleted");
    }
}
deleteData();