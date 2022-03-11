//método que me permite escuchar el estado de la promesa y obtener el valor de la respuesta
//devuelve un array con tantos objetos como promesas haya. Cada objeto tiene 2 propiedades:
//status: estado de la promesa y value: la respuesta
// Promise.allSettled(promises).then((responses) =>
//   responses.forEach((r) => {
//     console.log(r.value.url);
//     urlImages.push(r.value.url)
//   })
// );
//este método devuelve las promesas por separado
// Promise.all(promises).then((responses) => {
//   console.log(responses);
// });
