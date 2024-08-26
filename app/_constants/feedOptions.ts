// interface FeedOptions {
//   name: string;
//   id: number;
//   imageUrl: string;
//   uploadedAt: string;
//   caption: string;
//   likes: number;
//   comments: number;
//   shares: number;
// }

// export const feedOptions: FeedOptions[] = [
//   {
//     "name": "Guinness",
//     "id": 1,
//     "imageUrl": "https://utfs.io/f/0c4788b3-6b17-41eb-9b1c-6a6fbf5f10ab-lklk0m.png",
//     "uploadedAt": "2024-08-05T14:27:33.000Z",
//     "caption": "Uma famosa cerveja stout irlandesa, conhecida por seu sabor encorpado e suave.",
//     "likes": 546,
//     "comments": 283,
//     "shares": 129
//   },
//   {
//     "name": "Lone Can",
//     "id": 2,
//     "imageUrl": "https://utfs.io/f/9db41044-04f1-406c-93b0-919a314889d0-ybym45.png",
//     "uploadedAt": "2024-08-10T08:12:45.000Z",
//     "caption": "Cerveja artesanal embalada em uma lata única, perfeita para degustação individual.",
//     "likes": 673,
//     "comments": 191,
//     "shares": 222
//   },
//   {
//     "name": "Oland",
//     "id": 3,
//     "imageUrl": "https://utfs.io/f/3e6ff720-b027-49a2-be5f-11e6110c52e9-1r072y.png",
//     "uploadedAt": "2024-08-15T20:49:51.000Z",
//     "caption": "Cerveja europeia com um toque de malte e um acabamento limpo e refrescante.",
//     "likes": 489,
//     "comments": 150,
//     "shares": 201
//   },
//   {
//     "name": "Miller",
//     "id": 4,
//     "imageUrl": "https://utfs.io/f/b0982144-dfe5-439c-b4bd-4c4feb1ab43e-hrhliv.png",
//     "uploadedAt": "2024-08-02T11:36:22.000Z",
//     "caption": "Uma cerveja lager americana leve e refrescante, ideal para qualquer ocasião.",
//     "likes": 711,
//     "comments": 324,
//     "shares": 157
//   },
//   {
//     "name": "Blue Ribbon",
//     "id": 5,
//     "imageUrl": "https://utfs.io/f/50a3b56d-516a-4828-9773-287eb23e6e0d-ff55y3.png",
//     "uploadedAt": "2024-08-21T17:05:14.000Z",
//     "caption": "Cerveja clássica americana com um sabor suave e fácil de beber.",
//     "likes": 582,
//     "comments": 174,
//     "shares": 233
//   },
//   {
//     "name": "Brock St",
//     "id": 6,
//     "imageUrl": "https://utfs.io/f/d289eff3-0250-4460-8abd-d915bd5e0c1e-61lcd5.png",
//     "uploadedAt": "2024-08-11T09:47:03.000Z",
//     "caption": "Cerveja artesanal de uma microcervejaria local, conhecida por sua riqueza de sabor.",
//     "likes": 432,
//     "comments": 136,
//     "shares": 112
//   },
//   {
//     "name": "Dales",
//     "id": 7,
//     "imageUrl": "https://utfs.io/f/a26ac76c-4e7a-4658-9d58-a08da7bf811a-1krnnh.png",
//     "uploadedAt": "2024-08-19T15:25:55.000Z",
//     "caption": "Cerveja americana com forte presença de lúpulo e notas cítricas.",
//     "likes": 758,
//     "comments": 200,
//     "shares": 145
//   },
//   {
//     "name": "Kozel",
//     "id": 8,
//     "imageUrl": "https://utfs.io/f/fc93df7d-06c8-41a9-9c06-c04565c0564d-1ovfzx.png",
//     "uploadedAt": "2024-08-23T07:32:29.000Z",
//     "caption": "Cerveja tcheca tradicional com um sabor equilibrado e ligeiramente amargo.",
//     "likes": 615,
//     "comments": 168,
//     "shares": 194
//   },
//   {
//     "name": "Alhambra",
//     "id": 9,
//     "imageUrl": "https://utfs.io/f/7e2974cd-033a-45ab-9c74-0ef772daae31-rvfo4o.png",
//     "uploadedAt": "2024-08-08T13:11:49.000Z",
//     "caption": "Cerveja espanhola premium com um sabor encorpado e aroma floral.",
//     "likes": 580,
//     "comments": 221,
//     "shares": 167
//   },
//   {
//     "name": "Break Side",
//     "id": 10,
//     "imageUrl": "https://utfs.io/f/ee136984-8f4a-4023-a8e0-bdc86a9dcf3e-lk1dw7.png",
//     "uploadedAt": "2024-08-28T16:54:07.000Z",
//     "caption": "Cerveja artesanal americana, conhecida por sua criatividade e sabores únicos.",
//     "likes": 834,
//     "comments": 289,
//     "shares": 184
//   },
//   {
//     "name": "Chang",
//     "id": 11,
//     "imageUrl": "https://utfs.io/f/d1acc407-e501-464b-b1df-67b67f1ac099-1kc40l.png",
//     "uploadedAt": "2024-08-03T10:23:45.000Z",
//     "caption": "Cerveja tailandesa com sabor suave e refrescante, ideal para climas quentes.",
//     "likes": 456,
//     "comments": 102,
//     "shares": 153
//   },
//   {
//     "name": "Dogma Smash",
//     "id": 12,
//     "imageUrl": "https://utfs.io/f/73d58293-9f58-4897-a607-9cce3fb517aa-nge8nn.png",
//     "uploadedAt": "2024-08-07T14:38:20.000Z",
//     "caption": "Cerveja artesanal sérvia com um forte perfil de lúpulo e amargor equilibrado.",
//     "likes": 512,
//     "comments": 150,
//     "shares": 174
//   },
//   {
//     "name": "Schultenbrau",
//     "id": 13,
//     "imageUrl": "https://utfs.io/f/9ac41ebc-eef2-4a81-b413-3fedfef5f194-x81kdq.png",
//     "uploadedAt": "2024-08-12T18:47:10.000Z",
//     "caption": "Cerveja alemã acessível com sabor leve e refrescante, popular na Europa.",
//     "likes": 629,
//     "comments": 198,
//     "shares": 221
//   },
//   {
//     "name": "Miss Kiwi",
//     "id": 14,
//     "imageUrl": "https://utfs.io/f/0bc5cf06-972c-43a6-8f9f-34d857b5b59a-kf0fmb.png",
//     "uploadedAt": "2024-08-15T11:22:59.000Z",
//     "caption": "Cerveja artesanal com um toque frutado de kiwi, perfeita para o verão.",
//     "likes": 457,
//     "comments": 110,
//     "shares": 130
//   },
//   {
//     "name": "Bud Light",
//     "id": 15,
//     "imageUrl": "https://utfs.io/f/4b22b685-a802-4eaf-a16c-46c73b9a3755-vjsq48.png",
//     "uploadedAt": "2024-08-18T19:05:33.000Z",
//     "caption": "Cerveja lager americana leve, uma escolha popular para eventos sociais.",
//     "likes": 744,
//     "comments": 212,
//     "shares": 185
//   }
// ];

interface FeedOptions {
  name: string
  id: number
  imageUrl: string
  uploadedAt: string
  caption: string
  likes: number
  comments: number
  shares: number
  handle: string
}

export const feedOptions: FeedOptions[] = [
  {
    name: "Guinness",
    id: 1,
    imageUrl: "/guinness.png",
    uploadedAt: "2024-08-05T14:27:33.000Z",
    caption:
      "Uma famosa cerveja stout irlandesa, conhecida por seu sabor encorpado e suave.",
    likes: 546,
    comments: 283,
    shares: 129,
    handle: "@guinness",
  },
  {
    name: "Lone Can",
    id: 2,
    imageUrl: "/lone_can.png",
    uploadedAt: "2024-08-10T08:12:45.000Z",
    caption:
      "Em sua solidão silenciosa, uma lata de cerveja vazia é o eco de celebrações passadas e momentos compartilhados. Ela testemunhou a efemeridade dos encontros e a transitoriedade do prazer. Agora, sua presença solitária é um lembrete de que, mesmo nas coisas mais simples, reside a beleza da passagem do tempo e a promessa de novos começos.",
    likes: 673,
    comments: 191,
    shares: 222,
    handle: "@lonecan",
  },
  {
    name: "Oland",
    id: 3,
    imageUrl: "/oland.png",
    uploadedAt: "2024-08-15T20:49:51.000Z",
    caption:
      "Cerveja europeia com um toque de malte e um acabamento limpo e refrescante.",
    likes: 489,
    comments: 150,
    shares: 201,
    handle: "@oland",
  },
  {
    name: "Miller",
    id: 4,
    imageUrl: "/miller.png",
    uploadedAt: "2024-08-02T11:36:22.000Z",
    caption:
      "Uma cerveja lager americana leve e refrescante, ideal para qualquer ocasião.",
    likes: 711,
    comments: 324,
    shares: 157,
    handle: "@miller",
  },
  {
    name: "Blue Ribbon",
    id: 5,
    imageUrl: "/blue_ribbon.png",
    uploadedAt: "2024-08-21T17:05:14.000Z",
    caption: "Cerveja clássica americana com um sabor suave e fácil de beber.",
    likes: 582,
    comments: 174,
    shares: 233,
    handle: "@blueribbon",
  },
  {
    name: "Brock St",
    id: 6,
    imageUrl: "/brock_st.png",
    uploadedAt: "2024-08-11T09:47:03.000Z",
    caption:
      "Cerveja artesanal de uma microcervejaria local, conhecida por sua riqueza de sabor.",
    likes: 432,
    comments: 136,
    shares: 112,
    handle: "@brockst",
  },
  {
    name: "Dales",
    id: 7,
    imageUrl: "/dales.png",
    uploadedAt: "2024-08-19T15:25:55.000Z",
    caption: "Cerveja americana com forte presença de lúpulo e notas cítricas.",
    likes: 758,
    comments: 200,
    shares: 145,
    handle: "@dales",
  },
  {
    name: "Kozel",
    id: 8,
    imageUrl: "/kozel.png",
    uploadedAt: "2024-08-23T07:32:29.000Z",
    caption:
      "Cerveja tcheca tradicional com um sabor equilibrado e ligeiramente amargo.",
    likes: 615,
    comments: 168,
    shares: 194,
    handle: "@kozel",
  },
  {
    name: "Alhambra",
    id: 9,
    imageUrl: "/alhambra.png",
    uploadedAt: "2024-08-08T13:11:49.000Z",
    caption: "Cerveja espanhola premium com um sabor encorpado e aroma floral.",
    likes: 580,
    comments: 221,
    shares: 167,
    handle: "@alhambra",
  },
  {
    name: "Break Side",
    id: 10,
    imageUrl: "/break_side.png",
    uploadedAt: "2024-08-28T16:54:07.000Z",
    caption:
      "Cerveja artesanal americana, conhecida por sua criatividade e sabores únicos.",
    likes: 834,
    comments: 289,
    shares: 184,
    handle: "@breakside",
  },
  {
    name: "Chang",
    id: 11,
    imageUrl: "/chang.png",
    uploadedAt: "2024-08-03T10:23:45.000Z",
    caption:
      "Cerveja tailandesa com sabor suave e refrescante, ideal para climas quentes.",
    likes: 456,
    comments: 102,
    shares: 153,
    handle: "@chang",
  },
  {
    name: "Dogma Smash",
    id: 12,
    imageUrl: "/dogma_smash.png",
    uploadedAt: "2024-08-07T14:38:20.000Z",
    caption:
      "Cerveja artesanal sérvia com um forte perfil de lúpulo e amargor equilibrado.",
    likes: 512,
    comments: 150,
    shares: 174,
    handle: "@dogmasmash",
  },
  {
    name: "Schultenbrau",
    id: 13,
    imageUrl: "/schultenbrau.png",
    uploadedAt: "2024-08-12T18:47:10.000Z",
    caption:
      "Cerveja alemã acessível com sabor leve e refrescante, popular na Europa.",
    likes: 629,
    comments: 198,
    shares: 221,
    handle: "@schultenbrau",
  },
  {
    name: "Miss Kiwi",
    id: 14,
    imageUrl: "/miss_kiwi.png",
    uploadedAt: "2024-08-15T11:22:59.000Z",
    caption:
      "Cerveja artesanal com um toque frutado de kiwi, perfeita para o verão.",
    likes: 457,
    comments: 110,
    shares: 130,
    handle: "@misskiwi",
  },
  {
    name: "Bud Light",
    id: 15,
    imageUrl: "/bud_light.png",
    uploadedAt: "2024-08-18T19:05:33.000Z",
    caption:
      "Cerveja lager americana leve, uma escolha popular para eventos sociais.",
    likes: 744,
    comments: 212,
    shares: 185,
    handle: "@budlight",
  },
]
