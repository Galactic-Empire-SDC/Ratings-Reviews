import http from 'k6/http';
import { check, sleep, group } from 'k6';

// export let options = {
// vus: 1000, //stimulate how many virtual users
// duration: "30s", //how long you want it to run
// };

export const options = {
  stages: [
    { target: 5000, duration: '30s' },
  ],
};

export default function test() {
  const reviewTest = http.get(`http://127.0.0.1:3333/reviews?product_id=${Math.floor(Math.random() * (1000000 - 1 + 1)) + 1}`);
  check(reviewTest, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
  // const metaTest = http.get(`http://localhost:3333/reviews/meta?product_id=${Math.floor(Math.random() * (1000000 - 1 + 1)) + 1}`);
  // check(metaTest, { 'status was 200': (r) => r.status === 200 });
  // sleep(1);
}