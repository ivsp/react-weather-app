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

//comentarios de la funcion geolocation

// const getHour = new Date((data.dt + data.timezone - 3600) * 1000);
// console.log(getHour);
// const hour = Math.floor(getHour.getHours() / 2);
// console.log(hour);
// console.log(data.clouds.all);
// if (data.clouds.all <= 25) {
//   setCamParameters(camParams.hora[hour].nubes[0]);
//   const arr = [];
//   camParams.hora[hour].nubes[0][0].keyWord.split("/").map((k) => {
//     console.log("en el 0");
//     console.log(k);
//     arr.push(k);
//   });
//   console.log(arr);
//   setKeyWords(arr);

//   console.log(arr);
// } else if (data.clouds.all > 25 && data.clouds.all <= 50) {
//   setCamParameters(camParams.hora[hour].nubes[1]);
//   camParams.hora[hour].nubes[1][0].keyWord.split("/").forEach((k) => {
//     console.log("en el 1");
//     keyWords.push(k);
//     setKeyWords([...keyWords]);
//   });
// } else if (data.clouds.all > 50 && data.clouds.all <= 75) {
//   setCamParameters(camParams.hora[hour].nubes[2]);
//   camParams.hora[hour].nubes[2][0].keyWord.split("/").forEach((k) => {
//     console.log("en el 2");
//     keyWords.push(k);
//     setKeyWords([...keyWords]);
//   });
// } else if (data.clouds.all > 75 && data.clouds.all <= 100) {
//   setCamParameters(camParams.hora[hour].nubes[3]);
//   camParams.hora[hour].nubes[3][0].keyWord.split("/").forEach((k) => {
//     console.log("en el 3");
//     keyWords.push(k);
//     setKeyWords([...keyWords]);
//   });
// }
