import { MongoClient } from "../deps.ts";
import { Product } from "../types/product.type.ts";

const client = new MongoClient();

try {
    await client.connect("mongodb+srv://user:user@clustercoderbackend.yov16h5.mongodb.net/?retryWrites=true&w=majority");
    console.log("🆗 Conectados a MongoDB");
} catch (error) {
    console.log(error);
}

const db = client.database('deno');

export const products = db.collection<Product>('products');