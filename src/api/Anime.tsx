import axios from "axios";

export class Anime {
  async getAPI(API: string) {
    try {
      console.log(API);
      const { data } = await axios.get(API);
      const object = data as Array<object>;
      return object;
    } catch (error) {
      console.error(error);
    }
  }
}
