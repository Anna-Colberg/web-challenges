import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  response.statusCode = 200;
  response.json(getProductById(id));
}
