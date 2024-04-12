import axios from "axios";

export class kistuAPI {
  async getData(text: string) {
    try {
      await axios
        .get(`https://kitsu.io/api/edge/anime?filter[text]=${text}`)
        .then((res) => res);
    } catch (error) {}
  }
}
