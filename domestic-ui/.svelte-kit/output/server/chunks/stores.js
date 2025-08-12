import { w as writable } from "./index.js";
const status = writable({
  modality: null,
  input: null,
  output: null,
  error: null,
  loading: false,
  firstTime: true
});
export {
  status as s
};
