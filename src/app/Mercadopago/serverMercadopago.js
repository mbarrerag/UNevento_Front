// const mercadopago = require('mercadopago');
// const cors = require('cors');

// module.exports = {
//     getMercadoPago: async (req, res) => {
//       mercadopago.configure({
//         access_token: "APP_USR-5210675112328853-050421-46fbefcb9d6220c39df5051c721f31e1-1337650373",
//       });
      
//       let preference = {
//         items: [
//           {
//             title: req.body.description,
//             unit_price: Number(req.body.price),
//             quantity: Number(req.body.quantity),
//           },
//         ],
//         back_urls: {
//           success: "http://localhost:4200",
//           failure: "http://localhost:4200",
//           pending: "",
//         },
//         auto_return: "approved",
//       };
          
//       mercadopago.preferences.create(preference)
//       .then(function (response) {
//         const preferenceId = response.body.id;
//         console.log("El ID de la preferencia obtenido en el backend es:", preferenceId);
//         res.json({ preferenceId }); // Enviar el ID de la preferencia como respuesta al frontend
//       })
//       .catch(function (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error al crear preferencia de pago.' });
//       });
//     }
// }














// // const mercadopago = require('mercadopago');
// // const cors = require('cors');


// // module.exports = {
// //     getMercadoPago: async (req, res) => {
// //       mercadopago.configure({
// //         access_token: "APP_USR-5210675112328853-050421-46fbefcb9d6220c39df5051c721f31e1-1337650373",
// //       });
      
// //         let preference = {
// //             items: [
// //               {
// //                 title: req.body.description,
// //                 unit_price: Number(req.body.price),
// //                 quantity: Number(req.body.quantity),
// //               },
// //             ],
// //             back_urls: {
// //               success: "http://localhost:4200",
// //               failure: "http://localhost:4200",
// //               pending: "",
// //             },
// //             auto_return: "approved",
// //           };
          
// //           mercadopago.preferences.create(preference)
// //           .then(function (response) {
// //             global.id = response.body.id;
// //             res.json({
// //               id: response.body.id
// //             });
// //             console.log("el id obtenido en el back es:", global.id);
// //           })
// //           .catch(function (error) {
// //             console.error(error);
// //             res.status(500).json({ message: 'Error al crear preferencia de pago.' });
// //           });

// //         }
// // }