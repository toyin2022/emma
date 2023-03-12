const { faker } = require("@faker-js/faker");
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main() {
  const url = "mongodb+srv://toyin:shevi234@cluster0.vllbaod.mongodb.net/test";
  const client = new MongoClient(url);

  try {
    await client.connect();

    const productCollection = client.db("scam").collection("products");
    productCollection.drop();
    const categoryCollection = client.db("scam").collection("category");
    let categories = [laptop, phones, appliances].map((category) => {
      return { name: category };
    });
    await categoryCollection.insertMany(categories);

    // let imgUrls = []
    let products = [];
    for (let i = 0; i < 10; i++) {
      let newProduct = {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        category: _.sample(categories),
        // imgUrl: _.sample(imdUrls)
      };
      products.push(newProduct);
    }
    await productCollection.insertMany(products);
  } catch (error) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main();
