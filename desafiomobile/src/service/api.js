import axios from "axios";

const api = axios.create({
  baseURL: "https://desafio.mobfiq.com.br"
});

export default api;

// [
//   {
//     "Availability": true,
//     "Skus": [
//       {
//         "Id": "135342",
//         "Name": "Escova Rotating Air Brush Diamond Brilliance Conair | 127v",
//         "Order": null,
//         "Sellers": [
//           {
//             "Id": "1",
//             "Name": "polishop",
//             "Quantity": 2780,
//             "Price": 449.9,
//             "ListPrice": 449.9,
//             "BestInstallment": {
//               "Count": 10,
//               "Value": 44.99,
//               "Total": 449.9,
//               "Rate": 0.0
//             },
//             "Offer": null
//           }
//         ],
//         "Images": [
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/618462/mktplace-rotating_air_brush_diamond_brilliance-01-2.jpg?v=636869578537130000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/618462-#width#-#height#/mktplace-rotating_air_brush_diamond_brilliance-01-2.jpg?v=636869578537130000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614154/rotating_air_brush_diamond_brilliance-main-02.jpg?v=636848814187270000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614154-#width#-#height#/rotating_air_brush_diamond_brilliance-main-02.jpg?v=636848814187270000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614156/rotating_air_brush_diamond_brilliance-main-05.jpg?v=636848814356530000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614156-#width#-#height#/rotating_air_brush_diamond_brilliance-main-05.jpg?v=636848814356530000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614158/rotating_air_brush_diamond_brilliance-main-07.jpg?v=636848814772800000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614158-#width#-#height#/rotating_air_brush_diamond_brilliance-main-07.jpg?v=636848814772800000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614160/rotating_air_brush_diamond_brilliance-main-09.jpg?v=636848814936170000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614160-#width#-#height#/rotating_air_brush_diamond_brilliance-main-09.jpg?v=636848814936170000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614161/rotating_air_brush_diamond_brilliance-main-10.jpg?v=636848815023530000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614161-#width#-#height#/rotating_air_brush_diamond_brilliance-main-10.jpg?v=636848815023530000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614163/rotating_air_brush_diamond_brilliance-main-13.jpg?v=636848815821330000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614163-#width#-#height#/rotating_air_brush_diamond_brilliance-main-13.jpg?v=636848815821330000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614164/rotating_air_brush_diamond_brilliance-main-14.jpg?v=636848815927870000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614164-#width#-#height#/rotating_air_brush_diamond_brilliance-main-14.jpg?v=636848815927870000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614165/rotating_air_brush_diamond_brilliance-main-17.jpg?v=636848816022770000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614165-#width#-#height#/rotating_air_brush_diamond_brilliance-main-17.jpg?v=636848816022770000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614166/rotating_air_brush_diamond_brilliance-main-18.jpg?v=636848816093830000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614166-#width#-#height#/rotating_air_brush_diamond_brilliance-main-18.jpg?v=636848816093830000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614167/rotating_air_brush_diamond_brilliance-main-19.jpg?v=636848816165930000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614167-#width#-#height#/rotating_air_brush_diamond_brilliance-main-19.jpg?v=636848816165930000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614350/Selo--1-.jpg?v=636849684709770000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614350-#width#-#height#/Selo--1-.jpg?v=636849684709770000",
//             "Label": ""
//           }
//         ],
//         "Variations": {
//           "Voltagem": ["127v"],
//           "Cor": ["ND"]
//         },
//         "SkuName": "| 127v",
//         "UnitMultiplier": 1.0,
//         "ComplementName": "O Poder do Diamante para cabelos perfeitamente modelados, mais luminosos, cheios de vida e livres do frizz!",
//         "MeasurementUnit": "un",
//         "ReferenceId": [
//           {
//             "Key": "RefId",
//             "Value": "93.19.00"
//           }
//         ],
//         "EAN": "7909484009321"
//       },
//       {
//         "Id": "135344",
//         "Name": "Escova Rotating Air Brush Diamond Brilliance Conair | 220v",
//         "Order": null,
//         "Sellers": [
//           {
//             "Id": "1",
//             "Name": "polishop",
//             "Quantity": 325,
//             "Price": 449.9,
//             "ListPrice": 449.9,
//             "BestInstallment": {
//               "Count": 10,
//               "Value": 44.99,
//               "Total": 449.9,
//               "Rate": 0.0
//             },
//             "Offer": null
//           }
//         ],
//         "Images": [
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/618462/mktplace-rotating_air_brush_diamond_brilliance-01-2.jpg?v=636869578537130000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/618462-#width#-#height#/mktplace-rotating_air_brush_diamond_brilliance-01-2.jpg?v=636869578537130000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614154/rotating_air_brush_diamond_brilliance-main-02.jpg?v=636848814187270000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614154-#width#-#height#/rotating_air_brush_diamond_brilliance-main-02.jpg?v=636848814187270000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614156/rotating_air_brush_diamond_brilliance-main-05.jpg?v=636848814356530000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614156-#width#-#height#/rotating_air_brush_diamond_brilliance-main-05.jpg?v=636848814356530000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614158/rotating_air_brush_diamond_brilliance-main-07.jpg?v=636848814772800000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614158-#width#-#height#/rotating_air_brush_diamond_brilliance-main-07.jpg?v=636848814772800000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614160/rotating_air_brush_diamond_brilliance-main-09.jpg?v=636848814936170000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614160-#width#-#height#/rotating_air_brush_diamond_brilliance-main-09.jpg?v=636848814936170000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614161/rotating_air_brush_diamond_brilliance-main-10.jpg?v=636848815023530000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614161-#width#-#height#/rotating_air_brush_diamond_brilliance-main-10.jpg?v=636848815023530000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614163/rotating_air_brush_diamond_brilliance-main-13.jpg?v=636848815821330000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614163-#width#-#height#/rotating_air_brush_diamond_brilliance-main-13.jpg?v=636848815821330000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614164/rotating_air_brush_diamond_brilliance-main-14.jpg?v=636848815927870000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614164-#width#-#height#/rotating_air_brush_diamond_brilliance-main-14.jpg?v=636848815927870000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614165/rotating_air_brush_diamond_brilliance-main-17.jpg?v=636848816022770000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614165-#width#-#height#/rotating_air_brush_diamond_brilliance-main-17.jpg?v=636848816022770000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614166/rotating_air_brush_diamond_brilliance-main-18.jpg?v=636848816093830000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614166-#width#-#height#/rotating_air_brush_diamond_brilliance-main-18.jpg?v=636848816093830000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614167/rotating_air_brush_diamond_brilliance-main-19.jpg?v=636848816165930000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614167-#width#-#height#/rotating_air_brush_diamond_brilliance-main-19.jpg?v=636848816165930000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/614350/Selo--1-.jpg?v=636849684709770000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/614350-#width#-#height#/Selo--1-.jpg?v=636849684709770000",
//             "Label": null
//           }
//         ],
//         "Variations": {
//           "Voltagem": ["220v"],
//           "Cor": ["ND"]
//         },
//         "SkuName": "| 220v",
//         "UnitMultiplier": 1.0,
//         "ComplementName": "O Poder do Diamante para cabelos perfeitamente modelados, mais luminosos, cheios de vida e livres do frizz!",
//         "MeasurementUnit": "un",
//         "ReferenceId": [
//           {
//             "Key": "RefId",
//             "Value": "93.20.00"
//           }
//         ],
//         "EAN": "7909484009338"
//       }
//     ],
//     "Name": "Escova Rotating Air Brush Diamond Brilliance Conair",
//     "Id": "escova-modeladora-rotating-air-brush-diamond-brilliance-conair",
//     "Brand": "CONAIR",
//     "Description": "Conheça a novíssima <b>Rotating Air Brush Diamond Brilliance da Conair</b>! A inovação que traz o poder dos cristais de Diamante para você ter cabelos ainda mais macios, fios modelados e impecáveis por mais tempo, e uma luminosidade que você nunca viu!\r\n\r\n<b>Rotating Diamond Brilliance</b> alisa cabelos secos, úmidos e até molhados. Modela facilmente fios encaracolados, lisos e com química, e traz volume aos cabelos sem vida, deixando-os soltos, com balanço e movimento natural!\r\n\r\nQuer mais? Agora você vai contar não com uma, mas com duas escovas rotativas de tamanhos diferentes com cerdas especiais que deslizam suavemente para modelar cabelos curtos, médios e longos, além de finalizar perfeitamente pontas e franjas... Pra dentro ou pra fora!\r\n\r\nEnquanto sua escova rotativa com cerdas duplas desembaraça para secar, alisar e modelar facilmente as mechas, a combinação inteligente do calor da cerâmica com partículas de Diamante infundidas em sua placa, potencializa a ação transformadora através do condicionamento iônico, que sela as cutículas e elimina o frizz, para criar uma modelagem perfeita e duradoura, com um brilho incomparável e aspecto mais saudável para seus cabelos, todos os dias!\r\n\r\nTudo isso com uma única mão, mais rápido e sem você depender de ninguém!\r\n\r\n<b>Rotating Diamond Brilliance</b> possui aquecimento instantâneo, 900 Watts de potência para uma secagem rápida, e conta com 2 ajustes de temperatura mais jato de ar frio, para melhor fixação dos seus penteados! Seu cabo giratório 360º te oferece ainda mais liberdade de movimentos e facilidade na hora de cuidar dos cabelos. Demais, hein!?\r\n\r\nPara um show de estilos de cabelos prontos mais rápido, com efeito duradouro e mais brilho, todos os dias, <b>Rotating Diamond Brilliance</b> é a solução certa pra você!\r\n\r\n<b>Rotating Air Brush Diamond Brilliance</b> tem qualidade e tradição Conair e é mais um sucesso que você encontra na Polishop!",
//     "Category": "/Beleza/Escovas/",
//     "Categories": ["Beleza", "Escovas"],
//     "Specifications": {
//       "Peso e Dimensões": [
//         "<b>Peso aproximado:</b> 0,70 Kg\r\n<b>Dimensões Aproximadas:</b> 7,5 x 10 x 39,5 cm (A x L x P)"
//       ],
//       "Outros Detalhes": [
//         "<b>Benefícios</b>\r\n-  O Poder do Diamante para cabelos de salão, sem depender de ninguém!\r\n-  Brilho incrível, luminosidade sem igual e aspecto mais saudável, todos os dias;\r\n- Cabelos ainda mais macios*, fios com modelagem duradoura e penteados impecáveis;\r\n-  Modela facilmente fios encaracolados, lisos, com ou sem química;\r\n-  Finaliza perfeitamente pontas e franjas, para dentro ou para fora; \r\n-  Alcança melhor a raiz, para penteados uniformes;\r\n- Traz volume aos cabelos sem vida, deixando-os soltos, com balanço e movimento natural;\r\n-  Acabamento superior e alinhado por mais tempo;\r\n-  Pode ser usada em cabelos secos, úmidos e até molhados;\r\n-  Resultados surpreendentes, mais rápido e fácil: com uma única mão;\r\n-  Você sempre pronta para qualquer ocasião;\r\n-  Qualidade e tradição Conair!\r\n\r\n<b>Funcionalidades</b>\r\n- Placas térmicas de cerâmica com partículas de Diamante infundidas: distribuem e mantém o calor por igual, além de proteger e cuidar dos fios;\r\n- 2 escovas rotativas de tamanhos diferentes com cerdas especiais que deslizam suavemente para criar diferentes modelagens em cabelos curtos, médios e longos:\r\n- Avançado Condicionamento Iônico que sela as cutículas, neutraliza a eletricidade estática dos fios e elimina o frizz;\r\n- Aquecimento instantâneo e 900 Watts de potência: secagem rápida e resultado de salão, sem sair de casa;\r\n- Duplo sistema de rotação: modela o cabelo para dentro ou para fora, criando visuais diferentes todos os dias;\r\n- 2 ajustes de temperatura: perfeito para diferentes tipos de cabelo;\r\n- Jato de ar frio para melhor fixação dos seus penteados;\r\n- Cabo giratório 360º: oferece ainda mais liberdade de movimentos e facilidade na hora de cuidar dos cabelos;"
//       ],
//       "Marca": ["Conair"],
//       "Garantia do Fabricante": ["12 Meses"],
//       "Modelo": ["2735ABR"],
//       "Composição": ["Plástico resistente"],
//       "Cor": ["Preto e Prata"],
//       "Informações Importantes": [
//         "*Baseado em testes realizados nos Estados Unidos comparando produtos Conair aos principais produtos da concorrência."
//       ],
//       "Potência": ["900W"],
//       "Itens Inclusos": [
//         "01 Rotating Air Brush Diamond Brilliance Conair\r\n01 Escova de 50mm\r\n01 Escova de 32mm\r\n02 Capas protetoras para Escova\r\n01 Manual de Instrução"
//       ],
//       "Banner do Menu": [
//         "https://polishop.vteximg.com.br/arquivos/beleza-rotating-diamond.jpg?v=636892872548200000"
//       ]
//     },
//     "Variations": ["Voltagem", "Cor"],
//     "Videos": ["9s3GvgDebz0"],
//     "Images": null,
//     "RealId": "65366"
//   },
//   {
//     "Availability": true,
//     "Skus": [
//       {
//         "Id": "133406",
//         "Name": "Fritadeira Elétrica Airfryer Viva Philips Walita | 127V",
//         "Order": null,
//         "Sellers": [
//           {
//             "Id": "1",
//             "Name": "polishop",
//             "Quantity": 7195,
//             "Price": 799.9,
//             "ListPrice": 999.9,
//             "BestInstallment": {
//               "Count": 12,
//               "Value": 66.65,
//               "Total": 799.9,
//               "Rate": 0.0
//             },
//             "Offer": null
//           }
//         ],
//         "Images": [
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/600852/mktplace-airfryer-star-01.jpg?v=636753738568930000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/600852-#width#-#height#/mktplace-airfryer-star-01.jpg?v=636753738568930000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/600854/airfryer-star-main-02.jpg?v=636753738808200000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/600854-#width#-#height#/airfryer-star-main-02.jpg?v=636753738808200000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606011/airfryer_star_philips_walita-main-02.jpg?v=636784135750870000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606011-#width#-#height#/airfryer_star_philips_walita-main-02.jpg?v=636784135750870000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606012/airfryer_star_philips_walita-main-03.jpg?v=636784136383900000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606012-#width#-#height#/airfryer_star_philips_walita-main-03.jpg?v=636784136383900000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606013/airfryer_star_philips_walita-main-04.jpg?v=636784136673530000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606013-#width#-#height#/airfryer_star_philips_walita-main-04.jpg?v=636784136673530000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606014/airfryer_star_philips_walita-05.jpg?v=636784137485100000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606014-#width#-#height#/airfryer_star_philips_walita-05.jpg?v=636784137485100000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606018/airfryer_star_philips_walita-06.jpg?v=636784139074300000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606018-#width#-#height#/airfryer_star_philips_walita-06.jpg?v=636784139074300000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606019/airfryer_star_philips_walita-07.jpg?v=636784139364100000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606019-#width#-#height#/airfryer_star_philips_walita-07.jpg?v=636784139364100000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606020/airfryer_star_philips_walita-08.jpg?v=636784139594130000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606020-#width#-#height#/airfryer_star_philips_walita-08.jpg?v=636784139594130000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606091/airfryer_star_philips_walita-09.jpg?v=636784336006000000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606091-#width#-#height#/airfryer_star_philips_walita-09.jpg?v=636784336006000000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606092/airfryer_star_philips_walita-10.jpg?v=636784336301570000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606092-#width#-#height#/airfryer_star_philips_walita-10.jpg?v=636784336301570000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606094/airfryer_star_philips_walita-11.jpg?v=636784337503930000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606094-#width#-#height#/airfryer_star_philips_walita-11.jpg?v=636784337503930000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606095/airfryer_star_philips_walita-12.jpg?v=636784337993300000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606095-#width#-#height#/airfryer_star_philips_walita-12.jpg?v=636784337993300000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606096/airfryer_star_philips_walita-13.jpg?v=636784338588000000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606096-#width#-#height#/airfryer_star_philips_walita-13.jpg?v=636784338588000000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606097/airfryer_star_philips_walita-14.jpg?v=636784340747700000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606097-#width#-#height#/airfryer_star_philips_walita-14.jpg?v=636784340747700000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606099/airfryer_star_philips_walita-15--1-.jpg?v=636784341048670000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606099-#width#-#height#/airfryer_star_philips_walita-15--1-.jpg?v=636784341048670000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/609514/selo-dekra-main.jpg?v=636806464033370000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/609514-#width#-#height#/selo-dekra-main.jpg?v=636806464033370000",
//             "Label": ""
//           }
//         ],
//         "Variations": {
//           "Voltagem": ["127V"],
//           "Cor": ["ND"]
//         },
//         "SkuName": "| 127V",
//         "UnitMultiplier": 1.0,
//         "ComplementName": "Frituras crocantes, gostosas e suculentas, sem usar óleo!*",
//         "MeasurementUnit": "un",
//         "ReferenceId": [
//           {
//             "Key": "RefId",
//             "Value": "90.74.00"
//           }
//         ],
//         "EAN": "7909484005996"
//       },
//       {
//         "Id": "133408",
//         "Name": "Fritadeira Elétrica Airfryer Viva Philips Walita | 220V",
//         "Order": null,
//         "Sellers": [
//           {
//             "Id": "1",
//             "Name": "polishop",
//             "Quantity": 2196,
//             "Price": 799.9,
//             "ListPrice": 999.9,
//             "BestInstallment": {
//               "Count": 12,
//               "Value": 66.65,
//               "Total": 799.9,
//               "Rate": 0.0
//             },
//             "Offer": null
//           }
//         ],
//         "Images": [
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/600852/mktplace-airfryer-star-01.jpg?v=636753738568930000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/600852-#width#-#height#/mktplace-airfryer-star-01.jpg?v=636753738568930000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/600854/airfryer-star-main-02.jpg?v=636753738808200000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/600854-#width#-#height#/airfryer-star-main-02.jpg?v=636753738808200000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606011/airfryer_star_philips_walita-main-02.jpg?v=636784135750870000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606011-#width#-#height#/airfryer_star_philips_walita-main-02.jpg?v=636784135750870000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606012/airfryer_star_philips_walita-main-03.jpg?v=636784136383900000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606012-#width#-#height#/airfryer_star_philips_walita-main-03.jpg?v=636784136383900000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606013/airfryer_star_philips_walita-main-04.jpg?v=636784136673530000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606013-#width#-#height#/airfryer_star_philips_walita-main-04.jpg?v=636784136673530000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606014/airfryer_star_philips_walita-05.jpg?v=636784137485100000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606014-#width#-#height#/airfryer_star_philips_walita-05.jpg?v=636784137485100000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606018/airfryer_star_philips_walita-06.jpg?v=636784139074300000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606018-#width#-#height#/airfryer_star_philips_walita-06.jpg?v=636784139074300000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606019/airfryer_star_philips_walita-07.jpg?v=636784139364100000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606019-#width#-#height#/airfryer_star_philips_walita-07.jpg?v=636784139364100000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606020/airfryer_star_philips_walita-08.jpg?v=636784139594130000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606020-#width#-#height#/airfryer_star_philips_walita-08.jpg?v=636784139594130000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606091/airfryer_star_philips_walita-09.jpg?v=636784336006000000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606091-#width#-#height#/airfryer_star_philips_walita-09.jpg?v=636784336006000000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606092/airfryer_star_philips_walita-10.jpg?v=636784336301570000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606092-#width#-#height#/airfryer_star_philips_walita-10.jpg?v=636784336301570000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606094/airfryer_star_philips_walita-11.jpg?v=636784337503930000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606094-#width#-#height#/airfryer_star_philips_walita-11.jpg?v=636784337503930000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606095/airfryer_star_philips_walita-12.jpg?v=636784337993300000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606095-#width#-#height#/airfryer_star_philips_walita-12.jpg?v=636784337993300000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606096/airfryer_star_philips_walita-13.jpg?v=636784338588000000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606096-#width#-#height#/airfryer_star_philips_walita-13.jpg?v=636784338588000000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606097/airfryer_star_philips_walita-14.jpg?v=636784340747700000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606097-#width#-#height#/airfryer_star_philips_walita-14.jpg?v=636784340747700000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/606099/airfryer_star_philips_walita-15--1-.jpg?v=636784341048670000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/606099-#width#-#height#/airfryer_star_philips_walita-15--1-.jpg?v=636784341048670000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/609518/selo-dekra-main.jpg?v=636806477384670000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/609518-#width#-#height#/selo-dekra-main.jpg?v=636806477384670000",
//             "Label": ""
//           }
//         ],
//         "Variations": {
//           "Voltagem": ["220V"],
//           "Cor": ["ND"]
//         },
//         "SkuName": "| 220V",
//         "UnitMultiplier": 1.0,
//         "ComplementName": "Frituras crocantes, gostosas e suculentas, sem usar óleo!*",
//         "MeasurementUnit": "un",
//         "ReferenceId": [
//           {
//             "Key": "RefId",
//             "Value": "90.75.00"
//           }
//         ],
//         "EAN": "7909484006009"
//       }
//     ],
//     "Name": "Fritadeira Elétrica Airfryer Viva Philips Walita",
//     "Id": "fritadeira-eletrica-airfryer-viva-philips-walita",
//     "Brand": "Philips Walita",
//     "Description": "Com <b>Airfryer Viva Philips Walita</b> você irá saborear porções de batata frita, frango a passarinho, polenta e até churros, saborosos como frito e sem usar óleo para você e sua família se alimentarem de maneira deliciosa e muito saudável!\r\n\r\nGraças à sua exclusiva tecnologia Rapid Air, <b>Airfryer Viva</b>  acelera o ar quente a uma velocidade turbo, gerando um vórtice de calor que se choca contra os alimentos, fritando e assando mais rápido, sem precisar de óleo!\r\n\r\nO resultado é uma casquinha crocante por fora e macio e suculento por dentro, com sabor e textura de dar água na boca!\r\n\r\nSurpreenda-se com batatas fritas, bife à milanesa, kibes, coxinhas, peças de carne, e até churros preparados com muita praticidade e rapidez, sem sujar panelas e sem engordurar a sua cozinha!\r\n\r\nCom <b>Airfryer Viva</b>  você não precisa vigiar o preparo, porque seu timer sonoro com desligamento automático avisa quando a comida está pronta!\r\n\r\n<b>Airfryer Viva</b>  conta com a qualidade, tradição e 2 anos de garantia <b>Philips Walita! </b>\r\n\r\n\r\n<b>Segredo</b>\r\n\r\nSua exclusiva tecnologia Rapid Air acelera o ar quente a uma velocidade turbo, gerando um vórtice de calor que se choca contra os alimentos, fritando e assando mais rápido, sem precisar de óleo!",
//     "Category": "/Eletroportáteis/Airfryer/",
//     "Categories": ["Eletroportáteis", "Airfryer"],
//     "Specifications": {
//       "Peso e Dimensões": ["5,8KG\r\n35cmx38cmx35cm"],
//       "Tecnologia": ["Tecnologia RapidAir"],
//       "Bandeja de Resíduos": ["Não"],
//       "Outros Detalhes": [
//         "- Suas frituras favoritas sem usar óleo!*\r\n- Tudo crocante, gostoso e mais saudável!\r\n- Batatas fritas, bife à milanesa, kibes, coxinhas, peças de carne, churros e muito mais!\r\n- Prepara alimentos congelados ou in natura!\r\n- Resultados perfeitos: crocante por fora, macio e suculento por dentro!\r\n- Sem vigiar o prepararo: não deixa queimar!\r\n- Sem fumaça, sem sujar panelas e sem engordurar a sua cozinha!\r\n- Exclusiva Tecnologia RapidAir: choque de ar quente em alta velocidade que frita e assa os alimentos sem usar óleo;*\r\n- Elemento irradiante de calor superior: fornece calor intenso para preparar os alimentos;\r\n- Parte inferior com relevo em vórtice que contribui para a perfeita circulação do ar quente;\r\n- Timer sonoro de 30 minutos: avisa quando sua receita está pronta;\r\n- Desligamento automático: garante maior tranquilidade e segurança, evitando que os alimentos queimem;\r\n- Controle de temperatura ajustável de 80ºC a 200ºC para o resultado perfeito;\r\n- Partes removíveis podem ir na lava-louças;"
//       ],
//       "Antiaderente": ["Sim"],
//       "Garantia do Fabricante": ["24 meses"],
//       "Temperatura Ajustável": ["80ºC a 200ºC"],
//       "Informações Importantes": [
//         "* Para garantir a crocância de alimentos sem nenhuma gordura, recomenda-se a adição de meia colher de sopa de azeite. Crianças devem receber uma alimentação balanceada rica em todos os tipos de nutrientes. Alimentação balanceada é essencial para alcançar maior qualidade de vida. Utilize óleos, gorduras, sal e açúcar com moderação ao temperar e cozinhar alimentos e convertê-los em preparacões culinárias. Fonte: Ministério da Saúde - Guia alimentar para a população brasileira 2014"
//       ],
//       "Timer": ["30 minutos"],
//       "Composição": ["Plástico"],
//       "Cor": ["Branca"],
//       "Frequência": ["50-60Hz"],
//       "Potência": ["1425W"],
//       "Capacidade": ["0,8Kg ou 2,2L"],
//       "Painel Digital": ["Não"],
//       "Termostato": ["Não"],
//       "Modos (timer, sleep)": ["Sim"],
//       "Desligamento automático": ["Sim"],
//       "extraContentLink": [
//         "http://manuais.polishop.com.br/Livro_Receitas_Airfryer_Digital.pdf"
//       ],
//       "extraContentLabel": ["Livro de Receitas"],
//       "Itens Inclusos": [
//         "1 Airfryer Viva Philips Walita\r\n1 Manual de instruções"
//       ],
//       "cover": ["stories-cover-airfryer-viva"],
//       "Banner do Menu": [
//         "https://polishop.vteximg.com.br/arquivos/eletroportateis-powerpro.jpg?v=637008054343670000"
//       ]
//     },
//     "Variations": ["Voltagem", "Cor"],
//     "Videos": null,
//     "Images": null,
//     "RealId": "64876"
//   },
//   {
//     "Availability": true,
//     "Skus": [
//       {
//         "Id": "116195",
//         "Name": "Prancha Shine Therapy 2x Remington | Bivolt",
//         "Order": null,
//         "Sellers": [
//           {
//             "Id": "1",
//             "Name": "polishop",
//             "Quantity": 8902,
//             "Price": 349.9,
//             "ListPrice": 349.9,
//             "BestInstallment": {
//               "Count": 10,
//               "Value": 34.99,
//               "Total": 349.9,
//               "Rate": 0.0
//             },
//             "Offer": null
//           }
//         ],
//         "Images": [
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/426167/shine-therapy-2x-showcase.jpg?v=636005628810500000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/426167-#width#-#height#/shine-therapy-2x-showcase.jpg?v=636005628810500000",
//             "Label": "horizontal"
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/426168/shine-therapy-2x-main-01.jpg?v=636005629066100000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/426168-#width#-#height#/shine-therapy-2x-main-01.jpg?v=636005629066100000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/533363/sgs-conformidade-maxxi-turbo.jpg?v=636402978625230000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/533363-#width#-#height#/sgs-conformidade-maxxi-turbo.jpg?v=636402978625230000",
//             "Label": ""
//           }
//         ],
//         "Variations": {
//           "Voltagem": ["Bivolt"]
//         },
//         "SkuName": "| Bivolt",
//         "UnitMultiplier": 1.0,
//         "ComplementName": "Efeito liso progressivo instantâneo e sem química! Cabelo liso e sedoso por mais tempo!",
//         "MeasurementUnit": "un",
//         "ReferenceId": [
//           {
//             "Key": "RefId",
//             "Value": "79.70.00"
//           }
//         ],
//         "EAN": "7899583472891"
//       }
//     ],
//     "Name": "Prancha Shine Therapy 2x Remington",
//     "Id": "shine-remington",
//     "Brand": "Remington",
//     "Description": "Shine Therapy Abacate e Macadâmia proporciona aos seus cabelos um efeito de escova progressiva: liso instantâneo e duradouro, sem usar produtos químicos nem ficar horas no salão!\r\n\r\nSuas placas de cerâmica flutuantes pressionam suavemente e de forma uniforme cada mecha de cabelo para alisar sem marcar e liberar microcondicionadores de vitamina E e nano-partículas de óleo de abacate e macadâmia – que nutrem e hidratam profundamente fio a fio! É a combinação perfeita de beleza e cuidado!\r\n\r\nO resultado é um liso profissional, com toque macio e sedoso, que dura muito mais tempo – mesmo após lavar os cabelos!\r\nShine Therapy é uma verdadeira terapia para todo tipo de cabelo, até os fios mais grossos ou volumosos, pois com seu ajuste preciso de temperatura, você escolhe a temperatura adequada para cada tipo de cabelo: fino, grosso, encaracolado, ondulado ou até mesmo liso!\r\n\r\nShine Therapy Abacate e Macadâmia tem a qualidade Remington e é uma super exclusividade Polishop!",
//     "Category": "/Beleza/Chapinhas e Pranchas/",
//     "Categories": ["Beleza", "Chapinhas e Pranchas"],
//     "Specifications": {
//       "Peso e Dimensões": [
//         "Peso Aprox.: 370 g\r\nDimensões Aprox. (AxLxP): 3,7 x 27,1 x 3,2 cm"
//       ],
//       "Outros Detalhes": [
//         "Resultado profissional, sem fórmulas alisadoras e sem detonar o cabelo!\r\n\r\n- Choque de brilho instantâneo e um efeito muito mais duradouro.\r\n- Exclusiva tecnologia de micro-condicionadores de Vitamina E, que hidrata cada fio enquanto alisa intensamente.\r\n- Cabelos naturalmente lisos, profundamente hidratados e incrivelmente radiantes.\r\n- Suas placas flutuantes tocam suavemente seus cabelos e se ajustam perfeitamente a cada parte da mecha, dispensando a pressão excessiva e evitando assim, as marcas no cabelo.\r\n- Rápido e eficiente: atinge rapidamente a temperatura desejada para a aplicação imediata.\r\n- Temperatura na medida certa que hidrata e alisa qualquer tipo de cabelo.\r\n- Design moderno e ultrafino: alisa e modela os fios com facilidade\r\n- Bivolt: pode ser usada em qualquer lugar e sempre que precisar!"
//       ],
//       "Garantia do Fabricante": ["12 meses"],
//       "Cor": ["Verde"],
//       "Composição": ["Metal e plástico"],
//       "Frequência": ["50-60 Hz"],
//       "Potência": ["57W"],
//       "Temperatura máxima": ["230°C"],
//       "Controle de Temperatura": ["Sim"],
//       "Reservatorio de Água": ["Não"],
//       "Niveis de Temperatura": ["3"],
//       "Cabo Giratorio": ["Sim"],
//       "Tamanho do cabo": ["1,49 m"],
//       "Display Digital": ["Sim"],
//       "Pente Acoplado": ["Não"],
//       "Desligamento Automatico": ["Sim"],
//       "Material das placas": ["Abacate Macadâmia"],
//       "Itens Inclusos": ["1 Shine Therapy Remington\r\n1 Manual de instruções"],
//       "Texto complementação - SEO": [
//         "<b>Shine Therapy: a prancha de cabelo com efeito de escova progressiva</b>\r\n\r\nSair do salão de beleza com um liso incrível e aquela sensação de cabelo tratado é tudo de bom! Agora, já pensou desfilar esse resultado todos os dias, sem ter que gastar com tratamentos químicos? Um sonho, não é mesmo?! Pois é justamente isso o que a Shine Therapy Remington te oferece: cabelos com brilho intenso e efeito de escova progressiva sem sair de casa! A prancha de cabelos Polishop não é apenas mais uma chapinha convencional, mas um verdadeiro tratamento de beleza que alisa, nutre e deixa seus cabelos impecáveis, sem usar química! \r\nSe você não abre mão dos fios lisos, mas também se preocupa com a hidratação, nutrição e a integridade dos fios, essa é a escolha certa! Quer resultado duradouro, com mechas sedosas e altamente hidratadas? Então você acaba de encontrar a melhor chapinha para o seu dia a dia!\r\n\r\n<b>Liso profissional e bem tratado? Só com a Shine Therapy!</b>\r\n\r\nSe você acha que para conseguir um visual de salão é preciso um verdadeiro arsenal, precisa conhecer a inovadora prancha para cabelos Shine Therapy. Com ela, você consegue muito mais benefícios em um único produto! E o melhor: sem colocar em risco sua saúde capilar.  Isso porque a chapinha Polishop conta com placas de cerâmica capazes de nutrir seu cabelo durante o uso. Como? Sua superfície possui um exclusivo revestimento microcondicionador, composto por óleos funcionais de macadâmia e abacate que, ao entrar em contato com os fios, penetram nas cutículas proporcionando ultra-hidratação e um verdadeiro tratamento para os cabelos. E o efeito é progressivo viu? Você consegue cabelos cada vez mais sedosos e alinhados!\r\n\r\n<b>Chapinha Polishop: alisamento perfeito, em poucos minutos</b>\r\n\r\nQuem cuida dos fios em casa quer mais que qualidade, quer praticidade e eficiência. Afinal, a ideia é ganhar tempo e poupar as idas ao salão, não é mesmo? E neste momento, a prancha Shine Remington é sua melhor aliada! Com potência digna de uma chapinha profissional, fica pronta para uso em apenas trinta segundos. Até mesmo na sua temperatura mais elevada, de 230 graus! E esse é mais um segredo da melhor prancha para alisar os cabelos, pois seu intenso calor abre as cutículas, permitindo que as nanopartículas hidratantes entrem nos fios, tratando enquanto alisam. \r\n\r\n<b>Quer um liso natural? Essa é a melhor prancha – para todas!</b>\r\n\r\nSabe o que é mais legal? Ela é indicada para todos os tipos de cabelo, dos mais finos aos mais volumosos. Cachos, ondulações, crespos, pontas sem vida? Nada disso é problema para a potente Shine Therapy!  Ela garante liso perfeito e máximo cuidado para qualquer madeixa, mesmo as coloridas e quimicamente tratadas. E graças às suas placas flutuantes, não existe o risco de deixar o cabelo marcado: elas aderem à superfície dos fios, facilitando o alisamento e deixando um aspecto impecável. \r\nBrilho de dar inveja, liso escandaloso e efeito progressivo sem química? Só com a Prancha Shine Therapy 2x Remington!"
//       ],
//       "mobileImages": [
//         "pd-shine-01\r\npd-shine-02\r\npd-shine-03\r\npd-shine-04\r\npd-shine-05\r\npd-shine-06\r\npd-shine-07"
//       ],
//       "Instagram": ["395"],
//       "Banner do Menu": ["placeholder-menu-beemotion.png"]
//     },
//     "Variations": ["Voltagem"],
//     "Videos": ["6wmVixXbHto"],
//     "Images": null,
//     "RealId": "60709"
//   },
//   {
//     "Availability": true,
//     "Skus": [
//       {
//         "Id": "137565",
//         "Name": "Calça Modeladora Lejeans - 1 Unidade (Vintage)",
//         "Order": 0,
//         "Sellers": [
//           {
//             "Id": "1",
//             "Name": "polishop",
//             "Quantity": 28304,
//             "Price": 49.95,
//             "ListPrice": 99.95,
//             "BestInstallment": {
//               "Count": 2,
//               "Value": 24.97,
//               "Total": 49.95,
//               "Rate": 0.0
//             },
//             "Offer": null
//           }
//         ],
//         "Images": [
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/467180/lejeans-showcase-horizontal-azul-vintage.jpg?v=636149950545570000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/467180-#width#-#height#/lejeans-showcase-horizontal-azul-vintage.jpg?v=636149950545570000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/467181/lejeans-azul-vintage-main-01.jpg?v=636149950825370000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/467181-#width#-#height#/lejeans-azul-vintage-main-01.jpg?v=636149950825370000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/467182/lejeans-azul-vintage-main-02.jpg?v=636149950961800000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/467182-#width#-#height#/lejeans-azul-vintage-main-02.jpg?v=636149950961800000",
//             "Label": null
//           }
//         ],
//         "Variations": {
//           "Cor": ["ND"],
//           "Tamanho": ["ND"]
//         },
//         "SkuName": "Calça Modeladora Lejeans - 1 Unidade (Vintage)",
//         "UnitMultiplier": 1.0,
//         "ComplementName": "Veste e modela: empina o bumbum e define sua silhueta, na hora!",
//         "MeasurementUnit": "un",
//         "ReferenceId": [
//           {
//             "Key": "RefId",
//             "Value": "PRO-018565"
//           }
//         ],
//         "EAN": "7899583481534"
//       }
//     ],
//     "Name": "Calça Modeladora Lejeans - 1 Unidade (Vintage)",
//     "Id": "calca-modeladora-lejeans-despojada-vintage",
//     "Brand": "Polishop",
//     "Description": "Lejeans é a inovação que combina o conforto da legging com todo o design do jeans, para você exibir sem medo uma silhueta incrível com muito estilo!\r\n\r\nLejeans modela seu corpo, disfarça as gorduras localizadas, esconde os pneuzinhos, a celulite e ainda garante um bumbum empinado* sem precisar de modeladores, para você esbanjar confiança por onde passar.\r\n\r\nA exclusiva tecnologia Slim Tex da Lejeans conta com 3 camadas especialmente desenvolvidas para modelar e definir os contornos do seu corpo, na hora, enquanto garantem máximo conforto e liberdade de movimentos!\r\n\r\nIdeal para todos os tipos de corpo, Lejeans conta com diferentes estilos que vão do básico ao despojado e complementam seu look!\r\n\r\nTudo isso com um exclusivo design livre dos incômodos botões e zíperes, para garantir conforto extra! Você não vai mais querer tirar!\r\n\r\nE com a Lejeans Vintage você garante o estilo despojado que faltava no seu guarda-roupas! Não espere mais para ter a sua!\r\n\r\nLejeans é uma superexclusividade POLISHOP!",
//     "Category": "/Modeladores Corporais/Calças Modeladoras/",
//     "Categories": ["Modeladores Corporais", "Calças Modeladoras"],
//     "Specifications": {
//       "Outros Detalhes": [
//         "Disfarça os pneuzinhos, a flacidez e a celulite das pernas e bumbum\r\nGarante aparência de bumbum empinado*; \r\nCombina o conforto da legging com o design e estilo do jeans;\r\nExclusiva tecnologia Slim Tex: modela e define os contornos do seu corpo, com máximo conforto;\r\nDesign livre de botões e zíperes; \r\nEstilos que acompanham você: do básico ao despojado;\r\nIdeal para todos os tipos de corpo;\r\nValoriza sua silhueta;\r\nExclusividade Polishop.\r\nÚnico tamanho: veste do 34 ao 50!"
//       ],
//       "Garantia do Fabricante": ["3 meses"],
//       "Composição": ["90% poliéster, 10% elastano"],
//       "Informações Importantes": ["*Somente durante o uso do produto"],
//       "Tecnologia": ["Slim Tex"],
//       "Levanta bumbum": ["SIM"],
//       "Disfarça celulite ou flacidez": ["SIM"],
//       "Esconde pneuzinhos": ["SIM"],
//       "Redução de medidas (Durante o uso)": ["SIM"],
//       "Modela as coxas": ["SIM"],
//       "Evita atrito entre as coxas": ["SIM"],
//       "Sem costuras grossas, botões e ziper": ["SIM"],
//       "Gênero": ["FEMININO"],
//       "Indicações": ["Dia a Dia", "Atividade Fisica"],
//       "Instrução de Lavagem": [
//         "Esta é uma peça delicada.\r\nSiga as seguintes instruções de cuidados:\r\n- Lavar à mão;\r\n- Não esfregar com força;\r\n- Não torcer;\r\n- Não usar alvejante ou cloro;\r\n- Não secar na secadora;\r\n- Secar à sombra, de preferencia na horizontal;\r\n- Não passar - esta peça não amassa;\r\n- Não lavar a seco;"
//       ],
//       "Cor": ["Vintage"],
//       "Pode Passar Ferro": ["NÃO"],
//       "Pode ser Lavado": ["SIM"],
//       "Itens Inclusos": ["1 Lejeans despojada (vintage)"]
//     },
//     "Variations": ["Cor", "Tamanho"],
//     "Videos": ["C75Vvf8C-6c"],
//     "Images": null,
//     "RealId": "2000664"
//   },
//   {
//     "Availability": true,
//     "Skus": [
//       {
//         "Id": "137561",
//         "Name": "Calça Modeladora Lejeans - 1 Unidade (Azul)",
//         "Order": 0,
//         "Sellers": [
//           {
//             "Id": "1",
//             "Name": "polishop",
//             "Quantity": 14141,
//             "Price": 49.95,
//             "ListPrice": 99.95,
//             "BestInstallment": {
//               "Count": 2,
//               "Value": 24.97,
//               "Total": 49.95,
//               "Rate": 0.0
//             },
//             "Offer": null
//           }
//         ],
//         "Images": [
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/467172/lejeans-showcase-horizontal-azul.jpg?v=636149942481800000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/467172-#width#-#height#/lejeans-showcase-horizontal-azul.jpg?v=636149942481800000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/467174/lejeans-azul-main-01.jpg?v=636149942763070000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/467174-#width#-#height#/lejeans-azul-main-01.jpg?v=636149942763070000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/467175/lejeans-azul-main-02.jpg?v=636149943020970000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/467175-#width#-#height#/lejeans-azul-main-02.jpg?v=636149943020970000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/467176/lejeans-azul-main-03.jpg?v=636149943120370000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/467176-#width#-#height#/lejeans-azul-main-03.jpg?v=636149943120370000",
//             "Label": null
//           }
//         ],
//         "Variations": {
//           "Cor": ["ND"],
//           "Tamanho": ["ND"]
//         },
//         "SkuName": "Calça Modeladora Lejeans - 1 Unidade (Azul)",
//         "UnitMultiplier": 1.0,
//         "ComplementName": "Veste e modela: empina o bumbum e define sua silhueta, na hora!",
//         "MeasurementUnit": "un",
//         "ReferenceId": [
//           {
//             "Key": "RefId",
//             "Value": "PRO-018563"
//           }
//         ],
//         "EAN": "7899583481541"
//       }
//     ],
//     "Name": "Calça Modeladora Lejeans - 1 Unidade (Azul)",
//     "Id": "calca-modeladora-lejeans-classica-azul",
//     "Brand": "Polishop",
//     "Description": "Lejeans é a inovação que combina o conforto da legging com todo o design do jeans, para você exibir sem medo uma silhueta incrível com muito estilo!\r\n\r\nLejeans modela seu corpo, disfarça as gorduras localizadas, esconde os pneuzinhos, a celulite e ainda garante um bumbum empinado* sem precisar de modeladores, para você esbanjar confiança por onde passar.\r\n\r\nA exclusiva tecnologia Slim Tex da Lejeans conta com 3 camadas especialmente desenvolvidas para modelar e definir os contornos do seu corpo, na hora, enquanto garantem máximo conforto e liberdade de movimentos!\r\n\r\nIdeal para todos os tipos de corpo, Lejeans conta com diferentes estilos que vão do básico ao despojado e complementam seu look!\r\n\r\nTudo isso com um exclusivo design livre dos incômodos botões e zíperes, para garantir conforto extra! Você não vai mais querer tirar!\r\n\r\nSabe aquela peça-coringa do guarda-roupas que não dá para viver sem? Você pode contar com a Lejeans Azul clássica em qualquer ocasião, que não tem erro! Ela vai sempre estar com você! Não espere para ter a sua!\r\n\r\nLejeans é uma superexclusividade POLISHOP!",
//     "Category": "/Modeladores Corporais/Calças Modeladoras/",
//     "Categories": ["Modeladores Corporais", "Calças Modeladoras"],
//     "Specifications": {
//       "Outros Detalhes": [
//         "Disfarça os pneuzinhos, a flacidez e a celulite das pernas e bumbum\r\nGarante aparência de bumbum empinado*; \r\nCombina o conforto da legging com o design e estilo do jeans;\r\nExclusiva tecnologia Slim Tex: modela e define os contornos do seu corpo, com máximo conforto;\r\nDesign livre de botões e zíperes; \r\nEstilos que acompanham você: do básico ao despojado;\r\nIdeal para todos os tipos de corpo;\r\nValoriza sua silhueta;\r\nExclusividade Polishop.\r\nÚnico tamanho: veste do 34 ao 50!"
//       ],
//       "Garantia do Fabricante": ["3 meses"],
//       "Composição": ["90% poliéster, 10% elastano"],
//       "Tecnologia": ["Slim Tex"],
//       "Levanta bumbum": ["SIM"],
//       "Disfarça celulite ou flacidez": ["SIM"],
//       "Esconde pneuzinhos": ["SIM"],
//       "Redução de medidas (Durante o uso)": ["SIM"],
//       "Modela as coxas": ["SIM"],
//       "Evita atrito entre as coxas": ["SIM"],
//       "Sem costuras grossas, botões e ziper": ["SIM"],
//       "Gênero": ["FEMININO"],
//       "Indicações": ["Dia a Dia", "Atividade Fisica"],
//       "Instrução de Lavagem": [
//         "INSTRUÇÕES DE LAVAGEM:\r\n\r\nEsta é uma peça delicada.\r\nSiga as seguintes instruções de cuidados:\r\n- Lavar à mão;\r\n- Não esfregar com força;\r\n- Não torcer;\r\n- Não usar alvejante ou cloro;\r\n- Não secar na secadora;\r\n- Secar à sombra, de preferencia na horizontal;\r\n- Não passar - esta peça não amassa;\r\n- Não lavar a seco;"
//       ],
//       "Cor": ["Azul"],
//       "Pode Passar Ferro": ["NÃO"],
//       "Pode ser Lavado": ["SIM"],
//       "Itens Inclusos": ["1 Lejeans clássica (azul)"]
//     },
//     "Variations": ["Cor", "Tamanho"],
//     "Videos": ["C75Vvf8C-6c"],
//     "Images": null,
//     "RealId": "2000663"
//   },
//   {
//     "Availability": true,
//     "Skus": [
//       {
//         "Id": "137559",
//         "Name": "Calça Modeladora Lejeans - 1 Unidade (Preta)",
//         "Order": 0,
//         "Sellers": [
//           {
//             "Id": "1",
//             "Name": "polishop",
//             "Quantity": 23760,
//             "Price": 49.95,
//             "ListPrice": 99.95,
//             "BestInstallment": {
//               "Count": 2,
//               "Value": 24.97,
//               "Total": 49.95,
//               "Rate": 0.0
//             },
//             "Offer": null
//           }
//         ],
//         "Images": [
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/467165/lejeans-showcase-horizontal-preta.jpg?v=636149937452200000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/467165-#width#-#height#/lejeans-showcase-horizontal-preta.jpg?v=636149937452200000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/467167/lejeans-preta-main-01.jpg?v=636149937939870000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/467167-#width#-#height#/lejeans-preta-main-01.jpg?v=636149937939870000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/467168/lejeans-preta-main-02.jpg?v=636149938047200000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/467168-#width#-#height#/lejeans-preta-main-02.jpg?v=636149938047200000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/467169/lejeans-preta-main-03.jpg?v=636149938144770000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/467169-#width#-#height#/lejeans-preta-main-03.jpg?v=636149938144770000",
//             "Label": null
//           }
//         ],
//         "Variations": {
//           "Cor": ["ND"],
//           "Tamanho": ["ND"]
//         },
//         "SkuName": "Calça Modeladora Lejeans - 1 Unidade (Preta)",
//         "UnitMultiplier": 1.0,
//         "ComplementName": "Veste e modela: empina o bumbum e define sua silhueta, na hora!",
//         "MeasurementUnit": "un",
//         "ReferenceId": [
//           {
//             "Key": "RefId",
//             "Value": "PRO-018562"
//           }
//         ],
//         "EAN": "7899583481527"
//       }
//     ],
//     "Name": "Calça Modeladora Lejeans - 1 Unidade (Preta)",
//     "Id": "calca-modeladora-lejeans-basica-preta",
//     "Brand": "Polishop",
//     "Description": "Lejeans é a inovação que combina o conforto da legging com todo o design do jeans, para você exibir sem medo uma silhueta incrível com muito estilo!\r\n\r\nLejeans modela seu corpo, disfarça as gorduras localizadas, esconde os pneuzinhos, a celulite e ainda garante um bumbum empinado* sem precisar de modeladores, para você esbanjar confiança por onde passar.\r\n\r\nA exclusiva tecnologia Slim Tex da Lejeans conta com 3 camadas especialmente desenvolvidas para modelar e definir os contornos do seu corpo, na hora, enquanto garantem máximo conforto e liberdade de movimentos!\r\n\r\nIdeal para todos os tipos de corpo, Lejeans conta com diferentes estilos que vão do básico ao despojado e complementam seu look!\r\n\r\nTudo isso com um exclusivo design livre dos incômodos botões e zíperes, para garantir conforto extra! Você não vai mais querer tirar!\r\n\r\nE com a Lejeans Preta, você garante aquele toque básico no seu look, mas cheio de estilo, em qualquer lugar! Não espere mais para ter a sua! \r\n\r\n Lejeans é uma superexclusividade POLISHOP!",
//     "Category": "/Modeladores Corporais/Calças Modeladoras/",
//     "Categories": ["Modeladores Corporais", "Calças Modeladoras"],
//     "Specifications": {
//       "Outros Detalhes": [
//         "Disfarça os pneuzinhos, a flacidez e a celulite das pernas e bumbum\r\nGarante aparência de bumbum empinado*; \r\nCombina o conforto da legging com o design e estilo do jeans;\r\nExclusiva tecnologia Slim Tex: modela e define os contornos do seu corpo, com máximo conforto;\r\nDesign livre de botões e zíperes; \r\nEstilos que acompanham você: do básico ao despojado;\r\nIdeal para todos os tipos de corpo;\r\nValoriza sua silhueta;\r\nExclusividade Polishop.\r\nÚnico tamanho: veste do 34 ao 50!"
//       ],
//       "Garantia do Fabricante": ["3 meses"],
//       "Composição": ["90% poliéster, 10% elastano"],
//       "Informações Importantes": ["*Somente durante o uso do produto"],
//       "Tecnologia": ["Slim Tex"],
//       "Levanta bumbum": ["SIM"],
//       "Disfarça celulite ou flacidez": ["SIM"],
//       "Esconde pneuzinhos": ["SIM"],
//       "Redução de medidas (Durante o uso)": ["SIM"],
//       "Modela as coxas": ["SIM"],
//       "Evita atrito entre as coxas": ["SIM"],
//       "Sem costuras grossas, botões e ziper": ["SIM"],
//       "Gênero": ["FEMININO"],
//       "Indicações": ["Dia a Dia", "Atividade Fisica"],
//       "Instrução de Lavagem": [
//         "Esta é uma peça delicada.\r\nSiga as seguintes instruções de cuidados:\r\n- Lavar à mão;\r\n- Não esfregar com força;\r\n- Não torcer;\r\n- Não usar alvejante ou cloro;\r\n- Não secar na secadora;\r\n- Secar à sombra, de preferencia na horizontal;\r\n- Não passar - esta peça não amassa;\r\n- Não lavar a seco;"
//       ],
//       "Cor": ["Preta"],
//       "Pode Passar Ferro": ["NÃO"],
//       "Pode ser Lavado": ["SIM"],
//       "Itens Inclusos": ["1 Lejeans básica (preta)"]
//     },
//     "Variations": ["Cor", "Tamanho"],
//     "Videos": ["C75Vvf8C-6c"],
//     "Images": null,
//     "RealId": "2000662"
//   },
//   {
//     "Availability": true,
//     "Skus": [
//       {
//         "Id": "117796",
//         "Name": "Trio de Panelas Gourmet Plus Polishop + 1 Tampa 24cm",
//         "Order": null,
//         "Sellers": [
//           {
//             "Id": "1",
//             "Name": "polishop",
//             "Quantity": 1172,
//             "Price": 729.9,
//             "ListPrice": 844.67,
//             "BestInstallment": {
//               "Count": 10,
//               "Value": 72.99,
//               "Total": 729.9,
//               "Rate": 0.0
//             },
//             "Offer": null
//           }
//         ],
//         "Images": [
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/623975/trio1000x1000.jpg?v=636897429462900000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/623975-#width#-#height#/trio1000x1000.jpg?v=636897429462900000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/429523/saute-grand-24cm-main-02.jpg?v=636021906601830000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/429523-#width#-#height#/saute-grand-24cm-main-02.jpg?v=636021906601830000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/429524/flavorstone-tampa-24-cm-main-04.jpg?v=636021906839430000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/429524-#width#-#height#/flavorstone-tampa-24-cm-main-04.jpg?v=636021906839430000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/429525/flavorstone-tampa-24-cm-main-05.jpg?v=636021907061630000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/429525-#width#-#height#/flavorstone-tampa-24-cm-main-05.jpg?v=636021907061630000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/429526/flavorstone-tampa-28-cm-main-06.jpg?v=636021907336270000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/429526-#width#-#height#/flavorstone-tampa-28-cm-main-06.jpg?v=636021907336270000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/429527/day-by-day-deep-24cm-main-07.jpg?v=636021907688700000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/429527-#width#-#height#/day-by-day-deep-24cm-main-07.jpg?v=636021907688700000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/429528/family-size-24-cm-main-08.jpg?v=636021907775900000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/429528-#width#-#height#/family-size-24-cm-main-08.jpg?v=636021907775900000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/429529/family-size-24-cm-main-09.jpg?v=636021907856270000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/429529-#width#-#height#/family-size-24-cm-main-09.jpg?v=636021907856270000",
//             "Label": ""
//           }
//         ],
//         "Variations": {
//           "Voltagem": ["ND"],
//           "Cor": ["ND"]
//         },
//         "SkuName": "Trio de Panelas Gourmet Plus Polishop + 1 Tampa 24cm",
//         "UnitMultiplier": 1.0,
//         "ComplementName": "PROMOÇÃO!",
//         "MeasurementUnit": "un",
//         "ReferenceId": [
//           {
//             "Key": "RefId",
//             "Value": "PRO-015127"
//           }
//         ],
//         "EAN": "7899583456334"
//       }
//     ],
//     "Name": "Trio de Panelas Gourmet Plus Polishop + 1 Tampa 24cm",
//     "Id": "trio-de-panelas-goumet-plus-flavorstone-1-tampa-polishop",
//     "Brand": "Polishop",
//     "Description": "Delicie-se todos os dias com pratos de dar água na boca e prontos muito mais rápido!\r\n\r\nEla reúne alta tecnologia, que garante máxima velocidade no preparo de suas receitas, qualidade e resistência para acompanhar seu dia a dia e facilidade de limpar, conservar e usar novamente.\r\n\r\nSeu exclusivo revestimento com alto poder antiaderente, aliado às seis camadas estruturais, garante selagem superior para que os alimentos deslizem facilmente, sem grudar nada e sem usar uma gota de óleo!\r\n\r\nRetém e distribui o calor para preparar suas receitas com máxima eficiência mesmo a baixas temperaturas. E ainda garante máxima resistência e durabilidade para te acompanhar no dia a dia.\r\n\r\nCom o Trio de Panelas Gourmet Plus Polishop você tem toda tranquilidade e segurança porque ela é livre de PFOA e não solta resíduos! \r\n\r\nÉ leve, resistente, não lasca, não deforma e está sempre pronta para a próxima receita porque é super fácil de limpar!\r\n\r\n Panelas Gourmet Plus Polishop é uma super exclusividade Polishop!",
//     "Category": "/Casa e Cozinha/Panelas e Frigideiras/",
//     "Categories": ["Casa e Cozinha", "Panelas e Frigideiras"],
//     "Specifications": {
//       "Peso e Dimensões": ["Peso aprox. do kit: 4,5 kg"],
//       "Composição": [
//         "Panela: Alumínio com revestimento antiaderente\r\nCabo: Baquelite\r\nTampa em vidro temperado"
//       ],
//       "Cor": ["Vermelha"],
//       "Diâmetro": ["24 Cm"],
//       "Capacidade": ["Day by Day Deep: 2,7L / Sauté: 1,7L / Family: 3,8L"],
//       "Vai ao Forno": ["Não"],
//       "Número de Camadas": ["6"],
//       "Pode ser Lavada no Lava-Louças": ["Não"],
//       "Outros Detalhes": [
//         "6 camadas:\r\nRevestimento Top: mantém a propriedade antiaderente mesmo após muito uso;\r\nRevestimento Primer: resistente ao calor durante o cozimento;\r\nNúcleo de Alumínio: excelente condução térmica e distribuição de calor;\r\nPoliéster de Silicone: especialmente desenvolvido para manter a alta temperatura;\r\nBase de Indução: em aço inoxidável, ela distribui o calor de maneira uniforme;\r\nDay by Day: ideal para as refeições do dia a dia;\r\nSauté Grand: perfeita para o preparo de pratos rápidos;\r\nFamily Size: prepara refeições para a família inteira;\r\nTampa em vidro temperado; Saída de vapor\r\n\r\nPerfeito para todos os tipos de fogão, inclusive por indução"
//       ],
//       "Itens Inclusos": [
//         "1 Day by Day Deep de 24cm\r\n1 Sauté de 24cm\r\n1 Family de 24cm\r\n1 Tampa 24cm compatível com as 3 panelas do kit"
//       ],
//       "Vídeos Relacionados": ["yPtyyaiECes\r\nL0mJ2F5Rpyc"],
//       "Texto complementação - SEO": [
//         "É sinônimo de resistência, praticidade e rapidez no preparo de diversas receitas para o seu dia a dia! Com revestimento de alto poder antiaderente, aliado às seis camadas estruturais, as <b>panelas Polishop,</b> garantem selagem superior permitindo que os alimentos deslizem com muito mais facilidade, sem nada grudar! Surpreenda-se com o incrível sabor de pratos simples ou mais sofisticados e tenha os melhores resultados com o <b>jogo de panelas Polishop</b>, que aquece, frita, doura, grelha, refoga, assa, e até cozinha massas no vapor: tudo isso sem usar óleo!\r\n\r\nÚnica e versátil, a <b>frigideira</b> antiaderente Polishop não risca, não lasca, não deforma, é livre de PFOA e não solta resíduos! Sua tecnologia retém e distribui o calor por igual, com eficiência e rapidez, mesmo sob temperaturas mais baixas. E o que isso quer dizer? Com a <b>frigideira Polishop</b>, você terá mais agilidade na horade cozinhar e mais economia com a conta do gás ou de energia elétrica!\r\n\r\nAlém de ser ideal para todos os tipos de fogões: elétrico, de cerâmica, por indução e a gás, a <b>panela Polishop</b> oferece a garantia máxima de durabilidade, pois mantémintacta a sua propriedade antiaderente, mesmo após muito tempo de uso. Algunsmodelos, com bordas mais altas, evitam os indesejáveis respingos de molhos, cremesou frituras, impedindo o acúmulo de sujeira e gordura no seu fogão. E tem mais: pornão deixar nada grudar, ela também é muito mais fácil de limpar. Quanta praticidade, não?\r\n\r\n\r\nCada <b>conjunto de panelas Polishop</b> tem uma característica diferente, mas todos os modelos, inclusive os individuais, reúnem o melhor da qualidade <b>Polishop</b>. Escolha a que mais se encaixa em sua necessidade e descubra todos os benefíciosdessa incrível <b>panela antiaderente Polishop</b>. Com um design moderno einovador, as cores vermelho e cobre podem dar um toque todo especial na decoração da sua cozinha.\r\n\r\n\r\nE não esqueça: para manter a suculência natural dos alimentos e cozinhar deliciosas receitas por convecção, experimente também a exclusiva <b>tampa </b>, que proporciona uma excelente vedação durante o preparo dos alimentos. Esse acessório é perfeito para alguns modelos Family Size."
//       ],
//       "mobileImages": [
//         "pd-panelas-trio-vermelha-01\r\npd-panelas-trio-vermelha-02\r\npd-panelas-trio-vermelha-03\r\npd-panelas-trio-vermelha-04\r\npd-panelas-trio-vermelha-05\r\npd-panelas-trio-vermelha-06\r\npd-panelas-trio-vermelha-07"
//       ],
//       "Instagram": ["401"]
//     },
//     "Variations": ["Voltagem", "Cor"],
//     "Videos": ["Wow3GagqS_E"],
//     "Images": null,
//     "RealId": "2000644"
//   },
//   {
//     "Availability": true,
//     "Skus": [
//       {
//         "Id": "135207",
//         "Name": "Ventilador De Coluna New Ultra Wind Control 40cm Polishop | 127V",
//         "Order": null,
//         "Sellers": [
//           {
//             "Id": "1",
//             "Name": "polishop",
//             "Quantity": 319,
//             "Price": 299.9,
//             "ListPrice": 299.9,
//             "BestInstallment": {
//               "Count": 10,
//               "Value": 29.99,
//               "Total": 299.9,
//               "Rate": 0.0
//             },
//             "Offer": null
//           }
//         ],
//         "Images": [
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/636290/ventilador-40cm---controle.jpg?v=637012396836100000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/636290-#width#-#height#/ventilador-40cm---controle.jpg?v=637012396836100000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/611180/VENTILADOR-40-CM-torre-01.jpg?v=636824744109500000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/611180-#width#-#height#/VENTILADOR-40-CM-torre-01.jpg?v=636824744109500000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/611181/VENTILADOR-40-CM-torre-main-01.jpg?v=636824744433470000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/611181-#width#-#height#/VENTILADOR-40-CM-torre-main-01.jpg?v=636824744433470000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/611182/VENTILADOR-40-CM-torre-main-02.jpg?v=636824744536570000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/611182-#width#-#height#/VENTILADOR-40-CM-torre-main-02.jpg?v=636824744536570000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/611183/VENTILADOR-40-CM-torre-main-03.jpg?v=636824744622770000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/611183-#width#-#height#/VENTILADOR-40-CM-torre-main-03.jpg?v=636824744622770000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/611184/VENTILADOR-40-CM-torre-main-04.jpg?v=636824744876600000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/611184-#width#-#height#/VENTILADOR-40-CM-torre-main-04.jpg?v=636824744876600000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/611376/VENTILADOR-40-CM-torre-main-05--1-.jpg?v=636826387762670000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/611376-#width#-#height#/VENTILADOR-40-CM-torre-main-05--1-.jpg?v=636826387762670000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/611378/VENTILADOR-40-CM-torre-main-06--1-.jpg?v=636826387847930000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/611378-#width#-#height#/VENTILADOR-40-CM-torre-main-06--1-.jpg?v=636826387847930000",
//             "Label": ""
//           }
//         ],
//         "Variations": {
//           "Voltagem": ["127V"],
//           "Cor": ["ND"]
//         },
//         "SkuName": "| 127V",
//         "UnitMultiplier": 1.0,
//         "ComplementName": "A ultra ventilação silenciosa que você controla na palma da sua mão!",
//         "MeasurementUnit": "un",
//         "ReferenceId": [
//           {
//             "Key": "RefId",
//             "Value": "92.70.00"
//           }
//         ],
//         "EAN": "7899882307177"
//       },
//       {
//         "Id": "135209",
//         "Name": "Ventilador De Coluna New Ultra Wind Control 40cm Polishop | 220V",
//         "Order": null,
//         "Sellers": [
//           {
//             "Id": "1",
//             "Name": "polishop",
//             "Quantity": 72,
//             "Price": 299.9,
//             "ListPrice": 299.9,
//             "BestInstallment": {
//               "Count": 10,
//               "Value": 29.99,
//               "Total": 299.9,
//               "Rate": 0.0
//             },
//             "Offer": null
//           }
//         ],
//         "Images": [
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/636290/ventilador-40cm---controle.jpg?v=637012396836100000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/636290-#width#-#height#/ventilador-40cm---controle.jpg?v=637012396836100000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/611180/VENTILADOR-40-CM-torre-01.jpg?v=636824744109500000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/611180-#width#-#height#/VENTILADOR-40-CM-torre-01.jpg?v=636824744109500000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/611181/VENTILADOR-40-CM-torre-main-01.jpg?v=636824744433470000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/611181-#width#-#height#/VENTILADOR-40-CM-torre-main-01.jpg?v=636824744433470000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/611182/VENTILADOR-40-CM-torre-main-02.jpg?v=636824744536570000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/611182-#width#-#height#/VENTILADOR-40-CM-torre-main-02.jpg?v=636824744536570000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/611183/VENTILADOR-40-CM-torre-main-03.jpg?v=636824744622770000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/611183-#width#-#height#/VENTILADOR-40-CM-torre-main-03.jpg?v=636824744622770000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/611184/VENTILADOR-40-CM-torre-main-04.jpg?v=636824744876600000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/611184-#width#-#height#/VENTILADOR-40-CM-torre-main-04.jpg?v=636824744876600000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/611376/VENTILADOR-40-CM-torre-main-05--1-.jpg?v=636826387762670000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/611376-#width#-#height#/VENTILADOR-40-CM-torre-main-05--1-.jpg?v=636826387762670000",
//             "Label": null
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/611378/VENTILADOR-40-CM-torre-main-06--1-.jpg?v=636826387847930000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/611378-#width#-#height#/VENTILADOR-40-CM-torre-main-06--1-.jpg?v=636826387847930000",
//             "Label": null
//           }
//         ],
//         "Variations": {
//           "Voltagem": ["220V"],
//           "Cor": ["ND"]
//         },
//         "SkuName": "| 220V",
//         "UnitMultiplier": 1.0,
//         "ComplementName": "A ultra ventilação silenciosa que você controla na palma da sua mão!",
//         "MeasurementUnit": "un",
//         "ReferenceId": [
//           {
//             "Key": "RefId",
//             "Value": "92.71.00"
//           }
//         ],
//         "EAN": "7899882307184"
//       }
//     ],
//     "Name": "Ventilador De Coluna New Ultra Wind Control 40cm Polishop",
//     "Id": "polishop-ventilador-de-coluna-new-ultra-wind-control-40-cm-",
//     "Brand": "Mondial",
//     "Description": "Deixe os ambientes da sua casa ou escritório mais frescos, arejados e confortáveis com o ventilador Ultra Wind Control Polishop!\r\n\r\nAgora com 8 pás, Ultra Wind Control oferece um vento ainda mais intenso e poderoso que garante alta performance e uma incrível distribuição de ar, sem atrapalhar o seu sono, nem a sua concentração!\r\n\r\nUltra Wind Control possui um prático controle remoto para você ligar, desligar e regular a intensidade do vento, sem sair do lugar! Equipado com 3 ajustes de velocidade, ele ainda conta com sistema de oscilação horizontal e ajuste vertical que se adapta à sua necessidade e distribui o ar nos ambientes por igual!\r\n\r\nUltra Wind Control possui um design ultramoderno que combina e valoriza qualquer ambiente!\r\n\r\nO ventilador Ultra Wind Control é mais uma superexclusividade Polishop!",
//     "Category": "/Eletroportáteis/Ventiladores/",
//     "Categories": ["Eletroportáteis", "Ventiladores"],
//     "Specifications": {
//       "Peso e Dimensões": ["5,30 KG\r\n40 cm de diâmetro"],
//       "Regula Velocidade de Ventilação": ["Sim"],
//       "Outros Detalhes": [
//         "- Ambientes mais frescos e arejados!\r\n- 8 pás ultrapotentes: vento ainda mais intenso e poderoso!\r\n- Alta performance e maior distribuição de ar!\r\n- Controle remoto: a intensidade perfeita na palma da sua mão!\r\n- Extremamente silencioso: não atrapalha seu sono nem a sua concentração!\r\n- Altura ajustável: adapta-se perfeitamente à sua necessidade!\r\n- Exclusividade Polishop!"
//       ],
//       "Garantia do Fabricante": ["12 Meses"],
//       "Ajuste de Posição": ["Sim"],
//       "Função repelente de insetos": ["Não"],
//       "Rotação": ["Até 45° C Cada Lado"],
//       "Quantidade de Pás": ["8"],
//       "Cor": ["Preto / Vermelho"],
//       "Frequência": ["60 Hz"],
//       "Potência": ["140W"],
//       "Controle": ["Sim"],
//       "Itens Inclusos": [
//         "1 Ventilador Ultra Wind Control Polishop\r\n1 Manual de Assistência Técnica\r\n1 Controle Remoto"
//       ]
//     },
//     "Variations": ["Voltagem", "Cor"],
//     "Videos": null,
//     "Images": null,
//     "RealId": "65322"
//   },
//   {
//     "Availability": true,
//     "Skus": [
//       {
//         "Id": "130772",
//         "Name": "Removedor de Pelos Faciais Retratta Gold Be Emotion + Kit Facial Be Emotion de Presente",
//         "Order": null,
//         "Sellers": [
//           {
//             "Id": "1",
//             "Name": "polishop",
//             "Quantity": 5731,
//             "Price": 199.9,
//             "ListPrice": 319.84,
//             "BestInstallment": {
//               "Count": 10,
//               "Value": 19.99,
//               "Total": 199.9,
//               "Rate": 0.0
//             },
//             "Offer": null
//           }
//         ],
//         "Images": [
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/636360/mktplace-retratta-creme-nutritivo-hidratante-sabonete-facial.jpg?v=637013192374670000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/636360-#width#-#height#/mktplace-retratta-creme-nutritivo-hidratante-sabonete-facial.jpg?v=637013192374670000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/612964/be-emotion-retratta-creme-nutritivo-hidratante-sabonete-facial-main.jpg?v=636839472933700000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/612964-#width#-#height#/be-emotion-retratta-creme-nutritivo-hidratante-sabonete-facial-main.jpg?v=636839472933700000",
//             "Label": ""
//           }
//         ],
//         "Variations": {
//           "Voltagem": ["ND"]
//         },
//         "SkuName": "Removedor de Pelos Faciais Retratta Gold Be Emotion + Kit Facial Be Emotion de Presente",
//         "UnitMultiplier": 1.0,
//         "ComplementName": "A moderna e discreta solução para remover pelos do rosto sem dor* nem complicação!",
//         "MeasurementUnit": "un",
//         "ReferenceId": [
//           {
//             "Key": "RefId",
//             "Value": "PRO-017511"
//           }
//         ],
//         "EAN": ""
//       }
//     ],
//     "Name": "Removedor de Pelos Faciais Retratta Gold Be Emotion + Kit Facial Be Emotion de Presente",
//     "Id": "removedor-de-pelos-retratta-gold",
//     "Brand": "Be Emotion",
//     "Description": "Pelos faciais são um problema para as mulheres e sua remoção pode ser bem dolorosa. Mas, agora, você pode contar com Retratta Gold Be emotion: a moderna solução que remove os pelos do rosto sem dor* nem esforço!\r\n\r\nDiscreto, Retratta Gold tem aparência de um elegante batom, mas por dentro possui a mais avançada Tecnologia Alemã desenvolvida para remover até os pelos mais finos e curtos. O resultado é uma pele mais bonita, sedosa e macia, todos os dias!\r\n\r\nCom cabeçote flutuante e sistema de proteção à lâmina e à pele, Retratta Gold remove aqueles pelinhos faciais indesejados, em segundos... Sem dor*, com total segurança** e máxima precisão! Retratta Gold Be emotion é perfeito para todos os tipos e tons de pele!\r\n\r\nEle traz o mesmo resultado da cera, deixando a pele do rosto lisinha e suave ao toque, só que sem sofrimentos! E não precisa esperar os pelos crescerem. Você pode usar todo dia e ficar sempre despreocupada!\r\n\r\nSua luz integrada revela até os mínimos detalhes, facilitando localizar e remover até os pelos mais difíceis do buço, das bochechas, do queixo e de onde mais precisar.\r\n\r\nRetratta Gold tem um design lindo! É portátil e supercompacto, ideal para levar na sua bolsa ou nécessaire. Ele sempre estará pronto pra você!\r\n\r\nImpressione-se com a solução mais moderna, rápida e indolor para remover os temíveis pelinhos faciais indiscretos, sem risco* de cortes, queimaduras ou manchas na pele!\r\n\r\nRetratta Gold é uma exclusividade Polishop e mais um sucesso Be emotion!\r\n\r\nE para manter sua pele ainda mais saudável e bonita, todo dia, adquirindo seu Retratta Gold você RECEBE DE PRESENTE a linha exclusiva de cuidado Facial Be emotion! Receba o Sabonete Cremoso que limpa suavemente, enquanto seu incrível óleo de Monoi do Tahiti proporciona hidratação progressiva para a pele do seu rosto; mais o fantástico Hidratante Facial com Vitamina E Nanoencapsulada, que age nas camadas mais profundas da pele e oferece alto poder hidratante para suas manhãs; e ainda o poderoso Creme Nutritivo com Vitamina E Nanoencapsulada, colágeno e creatina, para nutrir a sua pele durante a noite!\r\n\r\nRetratta Gold é uma exclusividade Polishop e mais um sucesso Be emotion!",
//     "Category": "/Beleza/Depiladores/",
//     "Categories": ["Beleza", "Depiladores", "Be Emotion"],
//     "Specifications": {
//       "Peso e Dimensões": [
//         "<b>Retratta Gold</b>\r\nPeso aproximado: 80g\r\n10,8 x 2,3 x 2,7 cm (AxLxP)\r\n\r\n<b>Creme Nutritivo Facial Be Emotion</b>\r\n120 ml\r\n\r\n<b>Hidratante Facial Care Be Emotion</b>\r\n120 ml\r\n\r\n<b>Sabonete Facial Cremoso Monoi do Tahiti Be Emotion</b>\r\n120 ml"
//       ],
//       "Outros Detalhes": [
//         "<b>Retratta Gold</b>\r\n- Remove os pelos faciais, em segundos, sem dor nem esforço;\r\n- Tecnologia Alemã: desenvolvida para remover com precisão até os pelos mais finos;\r\n- Confortável, suave e eficiente;\r\n- Mais seguro*: sem risco de cortes, queimaduras ou manchas na pele;\r\n- Pode ser usado todo dia, não precisa esperar os pelos crescerem;\r\n- Perfeito para todos os tipos e tons de pele;\r\n- Prático e discreto: possui aparência de um batom;\r\n- Compacto e portátil, ideal para levar na bolsa ou nécessaire e usar em qualquer lugar;\r\n- Luz integrada: revela até os mínimos detalhes do seu rosto;\r\n- Design lindo, elegante e moderno;\r\n- Pele mais sedosa e macia para uma make perfeita;\r\n- Você livre e despreocupada com os temíveis pelinhos indiscretos;\r\n- Exclusividade Polishop.\r\n\r\n<b>Creme Nutritivo Facial Be Emotion</b>\r\nNanovit E: vitamina E nanoencapsulada.\r\nColágeno: pele macia e radiante.\r\nCreatina: Toque sedoso e suave.\r\n\r\n<b>Hidratante Facial Care Be Emotion</b>\r\nNanovit E: vitamina E nanoencapsulada.\r\n\r\n<b>Sabonete Facial Cremoso Monoi do Tahiti Be Emotion</b>\r\nMonoi do Tahiti: rico em propriedades hidratantes e nutritivas!"
//       ],
//       "Garantia do Fabricante": ["90 dias"],
//       "Cor": ["Branco e Rosé"],
//       "Composição": [
//         "<b>Retratta Gold</b>\r\nPlástico e Metal\r\n\r\n<b>Creme Nutritivo Facial Be Emotion</b>\r\nAQUA, CYCLOPENTASILOXANE, BUTYROSPERMUM PARKII BUTTER, ISONONYL ISONONANOATE, SQUALANE, SODIUM POLYACRYLATE, CREATINE, HYDROLYZED COLLAGEN, HYDROGENATED POLYDECENE, DMDM HYDANTOIN, PHENOXYETHANOL, BUTYLENE GLYCOL, PROPYLENE GLYCOL,\r\nATELOCOLLAGEN, DISODIUM EDTA, PARFUM, SODIUIM ONDROITIN SULFATE, METHYLISOTHIAZOLINONE, CITRONELLOL, GERANIOL, LIMONENE, LINALOOL.\r\n\r\n<b>Hidratante Facial Care Be Emotion</b>\r\nAQUA, CYCLOPENTASILOXANE, BUTYROSPERMUM PARKII BUTTER, ISODECYL NEOPENTANOATE, SQUALANE, SODIUM POLYACRYLATE, HYDROGENATED POLYDECENE, BIS-VINYLDIMETHICONE CROSSPOLYMER, DMDM HYDANTOIN, PHENOXYETHANOL, BUTYLENE GLYCOL, PROPYLENE GLYCOL, TOCOPHERYL ACETATE, ATECOLLAGEN, POLYSORBATE 20, XANTHAM GUM, TRIDECETH-6, PARFUM, SODIUM CHONDROITIN SULFATE, METHYLCHLOROISOTHIAZOLINONE /METHYLISOTHIAZOLINONE, CITRONELLOL, GERANIOL, LIMONENE, LINALLOL.\r\n\r\n<b>Sabonete Facial Cremoso Monoi do Tahiti Be Emotion</b>\r\nAQUA, SODIUM LAURETH SULFATE, COCAMIDOPROPYL BETAINE, LAURYL GLUCOSIDE, COCAMIDE DEA, POLYQUATERNIUM-7, ACETAMIDE MEA, GLYCOL DISTEARATE, PARFUM, GUAR HYDROXYPROPYLTRIMONIUM CHLORIDE, PEG-150 DISTEARATE, DISODIUM EDTA,  YDROXYETHYLCELLULOSE, CITRIC ACID, PEG-90M, COCOS NUCIFERA OIL, ,ETHYLCHLOROISOTHIAZOLINONE / METHYLISOTHIAZOLINONE,\r\nGARDENIA TAHITENSIS FLOWER EXTRACT, TOCOPHEROL, CITRONELLOL, GERANIOL, LIMONENE, LINALOOL."
//       ],
//       "Informações Importantes": [
//         "<b>Retratta Gold</b>\r\n\r\n- Quando comparado a outros métodos de depilação, como pinça, cera quente, à laser e aparador elétrico.\r\n- Quando comparado ao uso inadequado de lâmina comum, cera quente e métodos à laser. \r\n\r\nA cabeça com a lâmina removedora de pelos do Retratta Gold não é auto afiável. Caso perceba uma diminuição de sua performance, pode ser necessário adquirir seu refil, disponível em nossos canais de venda.\r\n\r\n<b>Hidratante Facial Care Be Emotion</b>\r\n\r\nValidade: 36 meses a partir da data de fabricação\r\n\r\nModo de usar: Após a limpeza da pele, aplique o Hidratante Facial sobre a pele molhada espalhando o produto até formar uma rica e cremosa espuma. Enxágue e se preferir repita a operação.\r\n\r\n<b>Sabonete Facial Cremoso Monoi do Tahiti Be Emotion</b>\r\n\r\nValidade: 36 meses a partir da data de fabricação\r\n\r\nModo de usar: Aplique sobre a pele molhada espalhando o produto até formar uma rica e cremosa espuma. Enxágue e se preferir repita a operação.\r\n\r\n<b>Creme Nutritivo Facial Be Emotion</b>\r\n\r\nValidade: 36 meses a partir da data de fabricação\r\n\r\nModo de usar: Após a limpeza da pele, aplique o Creme Nutritivo delicadamente sobre o rosto, pescoço e colo, em movimentos circulares e ascendentes.\r\n\r\n\r\nProcesso ANVISA nº: 25351.021792/2016-66\r\n\r\nFabricado por: Frosini Ind. e Com. de Cosméticos Ltda.\r\nAv. Industrial, 500 – Itaquaquecetuba-SP – CEP:08586-150\r\nIndústria Brasileira – CNPJ: 04.973.351/0001-30\r\nAFE: 2.03.707-0\r\n\r\nDistribuído por: Polimport Com. e Exp. Ltda.\r\nRua Kanebo, 175 – Galpão C7, C8, D1, D2, D3\r\nJundiaí-SP – CEP: 13213-090\r\nCNPJ: 00.436.042/0008-46"
//       ],
//       "Número pentes/cabeças/acessorios": ["1"],
//       "Tipo de Bateria/Alimentação": ["1 Pilha AA"],
//       "Uso/Molhado/Seco": ["Seco"],
//       "Iluminação": ["Sim"],
//       "Método de aplicação": ["Movimentos Circulares no Rosto."],
//       "Itens Inclusos": [
//         "1 Retratta Gold\r\n1 Escova de limpeza\r\n1 Manual de Instruções\r\nKit Facial Be Emotion de Presente"
//       ],
//       "Texto complementação - SEO": [
//         "Sabe aquele desconforto de achar alguns pelinhos no rosto e ficar na dúvida sobre qual a melhor forma de removê-los sem sofrimento? Essa dúvida acabou! \r\n\r\nAgora, você pode contar com o inovador <b>removedor de pelos</b> faciais <b>Retratta Gold</b> Be Emotion: a moderna solução que remove os <b>pelos do rosto</b> sem dor, sem esforço e com precisão absoluta!\r\n\r\nPerfeito para todos os tipos e tons de pele, o <b>aparador</b> Original <b>Retratta Gold</b> Be Emotion da Polishop vem fazendo a cabeça das mulheres exatamente por ser mais suave, mais rápido e muito mais prático que os métodos convencionais. \r\n\r\n<b>Discreto, portátil e supercompacto.</b>\r\n\r\nO <b>aparador de pelos</b> feminino Retratta Gold Be Emotion tem aparência de um elegante batom, fácil de levar na bolsa ou nécessaire, e você ainda pode usá-lo todos os dias, em qualquer horário e ocasião. Prático, não?\r\n\r\nCom ele você nem precisa esperar os pelos crescerem de novo para usá-lo novamente, pois a sua avançada tecnologia Alemã permite a remoção dos pelos mais finos e curtos do rosto. Sua luz integrada também revela os mínimos detalhes, facilitando localizar e remover os pelos mais difíceis e escondidos do buço, bochechas, queixo, entre as sobrancelhas e de onde mais você precisar. \r\n\r\nCom cabeçote flutuante e sistema de proteção à lâmina e à <b>pele</b>, o <b>removedor de pelos</b> faciais <b>Retratta Gold</b> Be Emotion remove em segundos aqueles pelinhos faciais indesejados, com total segurança, sem risco* de cortes, queimaduras ou manchas! O resultado é sempre uma pele mais bonita, sedosa e macia, todos os dias!\r\n\r\nE tem mais: o <b>removedor de pelos</b> Retratta Gold Be Emotion é mais econômico, pois só precisa de uma pilha para funcionar, não é demais?  \r\n\r\n\r\n<b>Adquirindo agora o seu Retratta Gold, você leva de presente a linha exclusiva de Cuidado Facial Be Emotion! </b>\r\n\r\nSão três itens de <b>cuidados com a pele</b> que vão ajudar a manter sua pele ainda mais bonita e saudável: um sabonete cremoso que limpa suavemente, enquanto seu incrível óleo de Monoi do Tahiti proporciona hidratação progressiva para a <b>pele</b> do rosto; um fantástico Hidratante Facial com vitamina E nanoencapsulada, que age nas camadas mais profundas da pele e oferece alto poder hidratante durante o dia; e o poderoso Creme Nutritivo com vitamina E nanoencapsulada, colágeno e creatina, para nutrir sua pele durante a noite. A linha exclusiva de Cuidado Facial é da Be Emotion, a marca de beleza da Polishop. \r\n\r\n\r\nRetratta Gold é uma exclusividade Polishop e mais um sucesso Be Emotion!"
//       ]
//     },
//     "Variations": ["Voltagem"],
//     "Videos": ["V9Xkkjg3VDE"],
//     "Images": null,
//     "RealId": "64120"
//   },
//   {
//     "Availability": true,
//     "Skus": [
//       {
//         "Id": "126894",
//         "Name": "Limpador Multiuso Wash &amp; Dry Fast Mop Polishop",
//         "Order": null,
//         "Sellers": [
//           {
//             "Id": "1",
//             "Name": "polishop",
//             "Quantity": 4588,
//             "Price": 199.9,
//             "ListPrice": 299.9,
//             "BestInstallment": {
//               "Count": 10,
//               "Value": 19.99,
//               "Total": 199.9,
//               "Rate": 0.0
//             },
//             "Offer": null
//           }
//         ],
//         "Images": [
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/572851/wash-dry-fast-mop-showcase.jpg?v=636564729341300000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/572851-#width#-#height#/wash-dry-fast-mop-showcase.jpg?v=636564729341300000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/572852/wash-dry-fast-mop-main-01.jpg?v=636564729479700000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/572852-#width#-#height#/wash-dry-fast-mop-main-01.jpg?v=636564729479700000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/572853/wash-dry-fast-mop-main-02.jpg?v=636564729573630000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/572853-#width#-#height#/wash-dry-fast-mop-main-02.jpg?v=636564729573630000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/572854/wash-dry-fast-mop-main-03.jpg?v=636564729711970000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/572854-#width#-#height#/wash-dry-fast-mop-main-03.jpg?v=636564729711970000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/572855/wash-dry-fast-mop-main-04.jpg?v=636564729798130000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/572855-#width#-#height#/wash-dry-fast-mop-main-04.jpg?v=636564729798130000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/572856/wash-dry-fast-mop-main-05.jpg?v=636564729867200000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/572856-#width#-#height#/wash-dry-fast-mop-main-05.jpg?v=636564729867200000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/572857/wash-dry-fast-mop-main-06.jpg?v=636564729962930000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/572857-#width#-#height#/wash-dry-fast-mop-main-06.jpg?v=636564729962930000",
//             "Label": ""
//           },
//           {
//             "ImageUrl": "https://polishop.vteximg.com.br/arquivos/ids/572858/wash-dry-fast-mop-main-07.jpg?v=636564730048500000",
//             "ImageTag": "https://www.polishop.com.br/arquivos/ids/572858-#width#-#height#/wash-dry-fast-mop-main-07.jpg?v=636564730048500000",
//             "Label": ""
//           }
//         ],
//         "Variations": {
//           "Voltagem": ["ND"],
//           "Cor": ["ND"]
//         },
//         "SkuName": "Limpador Multiuso Wash &amp; Dry Fast Mop Polishop",
//         "UnitMultiplier": 1.0,
//         "ComplementName": "Para qualquer ambiente. Para qualquer superfície. Limpa, seca, dá brilho e remove detritos, sem esforço e sem contato com a sujeira!",
//         "MeasurementUnit": "un",
//         "ReferenceId": [
//           {
//             "Key": "RefId",
//             "Value": "86.17.00"
//           }
//         ],
//         "EAN": "7899583496187"
//       }
//     ],
//     "Name": "Limpador Multiuso Wash &amp; Dry Fast Mop Polishop",
//     "Id": "wash-e-dry-fast-mop-polishop",
//     "Brand": "Polishop",
//     "Description": "Lavar e secar pisos e superfícies, fazer uma limpeza a seco, livrar-se dos pelos dos animais ou simplesmente remover o pó do dia a dia. Todas essas tarefas podem se tornar cansativas, desgastantes e chatas se você não tiver a ferramenta certa para fazer. \r\n\r\nWash & Dry Fast Mop Polishop chega para facilitar de verdade a sua vida na hora de manter a sua casa limpa e gostosa de viver! \r\n\r\nVersátil e extremamente fácil de usar, ele deixa qualquer ambiente limpo em minutos, com o mínimo de esforço, o mínimo de água e de produtos de limpeza, e sem você precisar recorrer a diferentes aparelhos para cada parte da parte da casa.\r\n\r\nSua base de Microfibra de Limpeza agarra cabelos, pelos e até as menores partículas de sujeira. E basta trocar pela Base de Microfibra de Alta Absorção para absorver em segundos qualquer líquido de pisos e outras superfícies, secando e dando um brilho a mais. É a combinação perfeita para acabar com todos os tipos de sujeiras!  \r\n\r\nWash & Dray Fast Mop possui um sistema exclusivo de roldanas que lava as fibras a cada passada, expulsa a sujeira e remove o excesso de umidade, para impedir que a sujeira retorne para o ambiente. \r\n\r\nSabe aquele cantinho da parede difícil de alcançar? Ele limpa!  \r\nEmbaixo do gabinete dos banheiros ou do rack da sala? Ele limpa!\r\nO contorno do vaso sanitário ou as frestas da porta-balcão? Ele limpa!\r\nJanelas impossíveis de alcançar? Ele resolve!  \r\n\r\nTudo isso, graças ao seu formato Flat, que alcança cantos difíceis, superfícies mais e altas e baixas, com total leveza e rapidez. \r\n\r\nWash & Dry Fast Mop é perfeito, pois não agride o piso, não risca o seu porcelanato nem os azulejos.\r\n\r\nPrático e compacto, você ainda pode guardar seus produtos de limpeza dentro o Wash & Dry Fast Mop, junto com a haste em inox desmontável.\r\n\r\nE mais: sua exclusiva drenagem descarta a água para que você não tenha contato nenhum com a sujeira!\r\n\r\n\r\nWash & Dry Fast Mop é mais uma super exclusividade que você só encontra na Polishop!",
//     "Category": "/Casa e Cozinha/Utensílios de Casa e Limpeza/",
//     "Categories": ["Casa e Cozinha", "Utensílios de Casa e Limpeza"],
//     "Specifications": {
//       "Peso e Dimensões": ["Peso: 1,99 Kg\r\nDimensões: 40 x 37 x 24 cm"],
//       "Composição": [
//         "- Wash & Dry Fast Mop: Plástico e Metal\r\n- Pano de Microfibra de Limpeza: 82% Poliéster, 18% Poliamida\r\n- Pano de Microfibra de Absorção: 100% Poliéster"
//       ],
//       "Cor": ["Verde"],
//       "Peso (em kg)": ["1,99"],
//       "Altura (em cm)": ["40"],
//       "Largura (em cm)": ["37"],
//       "Outros Detalhes": [
//         "- Versátil e extremamente fácil de usar: deixa qualquer ambiente limpo em minutos, com o mínimo de esforço, de água e de produtos de limpeza!\r\n- Agarra pelos cabelos e até as menores partículas de sujeira!\r\n- Absorve em segundos qualquer líquido, secando o piso e dando mais brilho! \r\n- Sistema de roldanas: lava as microfibras a cada passada!\r\n- Para todos os tipos de piso, cantos e frestas difíceis, embaixo dos móveis e até janelas e paredes com revestimento.\r\n- Prático e compacto: haste desmontável para facilitar na hora de guardar."
//       ],
//       "Profundidade (em cm)": ["24"],
//       "Tamanho das Hastes": ["120 cm"],
//       "Capacidade do Balde": ["7,7 L"],
//       "Itens Inclusos": [
//         "1 Wash & Dry Fast Mop\r\n3 Hastes Extensoras\r\n1 Base do Esfregão\r\n1 Pano de Microfibra de Limpeza\r\n1 Pano de Microfibra de Absorção\r\n1 Manual de Instruções"
//       ]
//     },
//     "Variations": ["Voltagem", "Cor"],
//     "Videos": ["3LaQOrLi60Y"],
//     "Images": null,
//     "RealId": "62946"
//   }
// ]
