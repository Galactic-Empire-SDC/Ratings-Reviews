import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
vus: 1000, //stimulate how many virtual users
duration: "30s", //how long you want it to run
};
//Below randomize the endpoints
export default function reviewtest() {
  const min = Math.ceil(0);
  const max = Math.floor(20);
  http.get(`http://localhost:3333/reviews?product_id=${Math.floor(Math.random() * (1000000 - 1 + 1)) + 1}&page=${Math.floor(Math.random() * (max - min) + min)}&count=${Math.floor(Math.random() * (6 - 1) + 1)}`);
}

// export default function metatest() {
//   http.get(`http://localhost:3333/reviews/meta?product_id=${Math.floor(Math.random() * (1000000 - 1 + 1)) + 1}`);
// }