export default function (response) {
  response.json = (obj) => response.end(JSON.stringify(obj))
}
