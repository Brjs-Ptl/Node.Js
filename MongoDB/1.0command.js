// MongoDb is a NoSQL database we cant store data in table base 
// MongoDB data store in Collection
// collection dont have raw and coloumn
// Data is stored in form of Objects
// Mongo Dv and b compass is totally diff things
// MongoDb is cross-platform, document-oriented database program.
//Compass is a free interactive tool for querying, optimizing, and analyzing your MongoDB data.


// Welcome to MongoDb

// 1.create Database in MongoDb compass Database Name: "e-commerce" and collection name: "product" 

// 2. use e-commerse in MongoDb terminal
// 3. db.products.insertOne({name:"m 40", brand:"Samsung", price:250, category:"Mobile"})
// 4. refresh // one data is shown
// 5. again inter some another data to manupulate previous data and inter 

// 6. if you want to insert data from Add Data which is in dashbord
// 7.give full details without any change 
// 8. here both data in string like "name":"m 40", "brand":"Samsung"


// 9. to check the inserted data through command line
// 10. db.product.find 

// 11. Update data from dashbord go to 3 line toggle right side of ADD Data
// 12. And then change what you want

// 13. Update through Terminal
// 14. db.product.updateOne({name:"u10"}, {$set:{brand:"oppo"}}) 
// name of parameter which you want to change means where you want to change 
// and sec one is what you change instead of previous one


// 15. Delete through dashbord icon show
// 16. Delete from terminal d
// 17. db.product.deleteOne({brand:"apple"}) // which part uyou want to delete 

// CRUD :- Create Read Update and Delete
// 