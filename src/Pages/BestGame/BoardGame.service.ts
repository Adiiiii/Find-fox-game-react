import axios from "axios";
import { url } from "../../Constants/constants";
export const getImageUrl = (animalName: "fox" | "cat" | "dog") =>
  axios.get(url[animalName]);
