const pets = [
  {
    animal: "gato1",
    contato: "7598007383",
    foto: " ",
    lat: -10.673489680109393, 
    lng: -37.87525666437494,
    status: "adotar",
  },
  {
    animal: "gato2",
    contato: "7598007383",
    foto: " ",
    lat: -10.673718049194136, 
    lng: -37.87509223575766,
    status: "adotar",
  },
  {
    animal: "gato3",
    contato: "7598007383",
    foto: " ",
    lat: -10.673759507092129, 
    lng: -37.87523173797941,
    status: "adotar",
  },
  {
    animal: "gato4",
    contato: "7598007383",
    foto: " ",
    lat: -10.673805262113074, 
    lng: -37.8750955676781,
    status: "adotar",
  },
  {
    animal: "Aira",
    contato: "7998254127",
    foto: "https://github.com/adotpetofc/adotpet/blob/main/aira.jpeg?raw=true",
    lat: -10.910174515908603,
    lng: -37.67860811084861,
    status: "adotar",
  },
  {
    animal: "Briana",
    contato: "7996701204",
    foto: "https://github.com/adotpetofc/adotpet/blob/main/briana.png?raw=true",
    lat: -10.773726750041178, 
    lng: -37.83775337580061,
    status: "adotar"
  },
  {
    animal: "Ariana",
    contato: "7996701204",
    foto: "https://github.com/adotpetofc/adotpet/blob/main/ariana.png?raw=true",
    lat: -10.773668143479119, 
    lng: -37.83769976810128,
    status: "adotar"
  },
  {
    animal: "Zoonoses",
    contato: "None",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/unnamed%20(1).png?raw=true",
    lat: -10.919417568714428,
    lng: -37.679622598948676,
    status: "apoiador"
  },
  {
    animal: "Marrom",
    contato: "7999386733",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/Marrom.jpg?raw=true",
    lat: -10.925187028930313,
    lng: -37.656179321166256,
    status: "resgatar"
  },
  {
    animal: "Ninhada de gatinhos (Energisa)",
    contato: "7999957345",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/gatos-origens.png?raw=true",
    lat: -10.918632954774361,
    lng: -37.664031901314374,
    status: "resgatar"
  },
  {
    animal: "Motoca",
    contato: "7999957345",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/Motoca.jpg?raw=true",
    lat: -10.91874671303335,
    lng: -37.66380285200526,
    status: "adotar"
  },
  {
    animal: "Pretinha",
    contato: "7996413969",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/Pretinha.jpg?raw=true",
    lat: -10.910973327182864,
    lng: -37.662836177397466,
    status: "resgatar"
  },
  {
    animal: "Ninhada de cachorrinhos (Gustavo Hora)",
    contato: "7999861877",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/Ninhada%20de%20cachorrinhos%20(Gustavo%20Hora).jpg?raw=true",
    lat: -10.921686946905048,
    lng: -37.68547848107608,
    status: "adotar"
  },
  {
    animal: "Ninhada de gatinhos (R. Raimundo Reis)",
    contato: "7996058608",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/gatos-origens.png?raw=true",
    lat: -10.91399764149734,
    lng: -37.67838171352178,
    status: "resgatar"
  },
  {
    animal: "Théo",
    contato: "79999487203",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/Th%C3%A9o.jpg?raw=true",
    lat: -10.925037257885851,
    lng: -37.655439031519045,
    status: "adotado"
  },
    {
    animal: "Gray",
    contato: "7998594019",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/WhatsApp%20Image%202026-04-13%20at%2014.25.23.jpeg?raw=true",
    lat: -11.071628293270324,
    lng: -37.72456063987997,
    status: "adotar"
  },
  {
    animal: "LIA - IFS",
    contato: "-",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/WhatsApp%20Image%202026-04-01%20at%2012.54.37.png?raw=true",
    lat: -10.93852888636687,
    lng: -37.65664191131559,
    status: "apoiador"
  },
  {
    animal: "Méd. Vet. Daiane Silva",
    contato: "7999751912",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/WhatsApp%20Image%202026-04-18%20at%2000.21.53.jpeg?raw=true",
    lat: -10.927275585854852,
    lng: -37.65915562555365,
    status: "apoiador"
  },
  {
    animal: "Elidoces Gourmet",
    contato: "7998793438",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/elidoce.png?raw=true",
    lat: -10.919472607510611,
    lng: -37.68176930609867,
    status: "apoiador"
  },
  {
    animal: "Ivanildo Santos (Colaborador)",
    contato: "-",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/ivan.jpg?raw=true",
    lat: -11.069704373684413,
    lng: -37.72683832687771,
    status: "colaborador"
  },
  {
    animal: "Ernesto Silva (Colaborador)",
    contato: "-",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/ernesto.jpg?raw=true",
    lat: -10.919292508155438,
    lng: -37.668182624562796,
    status: "colaborador"
  },
  {
    animal: "Leonardo (O Idealizador)",
    contato: "-",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/unnamed.jpg?raw=true",
    lat: -10.916728918514597,
    lng: -37.669135282506380,
    status: "colaborador"
  },
  {
    animal: "Secretaria Municipal de Saúde",
    contato: "-",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/unnamed.png?raw=true",
    lat: -10.918325697777808,
    lng: -37.67585382343458,
    status: "parceiro"
  },
  {
    animal: "Chico (Adotado)",
    contato: "-",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/chico.jpg?raw=true",
    lat: -10.917523221890216,
    lng: -37.66104200193335,
    status: "adotado"
  },
  {
    animal: "Tom (Adotado)",
    contato: "-",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/tom.jpg?raw=true",
    lat: -10.917403221890216,
    lng: -37.66084200193335,
    status: "adotado"
  },
  {
    animal: "Mel (Adotado)",
    contato: "-",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/mel.jpg?raw=true",
    lat: -10.920702061225724,
    lng: -37.66240529574209,
    status: "adotado"
  },
  {
    animal: "Ninhada de gatinhos (Horta)",
    contato: "79999165542",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/Ninhada%20de%20gatinhos%20(Horta).jpg?raw=true",
    lat: -10.925080831616562,
    lng: -37.656793242411,
    status: "resgatar"
  },
  {
    animal: "Ninhada de gatinhos (Rua D, Albano)",
    contato: "7999641504",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/Ninhada%20de%20gatos%20(Rua%20D,%20Albano).jpg?raw=true",
    lat: -10.930556151571192,
    lng: -37.67437740450676,
    status: "adotar"
  },
  {
    animal: "Ninhada de gatinhos (Barro Preto)",
    contato: "7996620681",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/barro%20preto.jpg?raw=true",
    lat: -11.065323559866082,
    lng: -37.76933872882397,
    status: "adotar"
  },
  {
    animal: "Astro (Laudelino Freire)",
    contato: "7998669447",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/Astro%20(Laudelino%20Freire).jpg?raw=true",
    lat: -10.91151476570264,
    lng: -37.68049201531701,
    status: "adotar"
  },
  {
    animal: "Digital Shelter",
    contato: " ",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/unnamed%20(2).png?raw=true",
    lat: -10.939100718057047,
    lng: -37.657256941250445,
    status: "parceiro"
  },
  {
    animal: "TSNB",
    contato: " ",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/tsnb.jpg?raw=true",
    lat: -10.925205986018973,
    lng: -37.65545920394519,
    status: "parceiro"
  },
  {
    animal: "Ninhada de gatos (Sergipe Madeiras)",
    contato: " ",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/Ninhada%20de%20gatos%20(Sergipe%20Madeiras)%20(2).jpg?raw=true",
    lat: -10.921138177386574,
    lng: -37.66335698552644,
    status: "resgatar"
  },
  {
    animal: "Pet p/ adoção - Cuidadora Keila",
    contato: "7981402153",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/cuidadores.jpg?raw=true",
    lat: -10.913140119327084,
    lng: -37.65102503482476,
    status: "apoiador"
  },
  {
    animal: "Walter (Adotado)",
    contato: "-",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/Walter.jpg?raw=true",
    lat: -10.909959123885038,
    lng: -37.67138099852364,
    status: "adotado"
  },
  {
    animal: "Casinha comunitária",
    contato: "7996701204",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/cazinha%20comunit%C3%A1ria.jpg?raw=true",
    lat: -10.909341587056023,
    lng: -37.65977485124454,
    status: "apoiador"
  },
  {
    animal: "Melinha",
    contato: "7996701204",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/melinha.png?raw=true",
    lat: -10.909201766364973,
    lng: -37.65959708421757,
    status: "adotar"
  },
  {
    animal: "Cãotinho da Elzy (Creche e Hotel)",
    contato: "7999862515",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/c%C3%A3otinho.png?raw=true",
    lat: -10.914749524225831,
    lng: -37.672208371553275,
    status: "apoiador"
  },
  {
    animal: "Pet p/ adoção - Cuidadora Monise",
    contato: "19991797609",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/cuidadores.jpg?raw=true",
    lat: -10.925250774788658,
    lng: -37.68620382378702,
    status: "apoiador"
  },
  {
    animal: "Pet p/ adoção - Cuidador João Neto",
    contato: "7996471900",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/cuidadores.jpg?raw=true",
    lat: -10.919355839413788,
    lng: -37.031921227891644,
    status: "apoiador"
  },
  {
    animal: "Ninhada de gatinhos (Filadelfo Dórea)",
    contato: "7988693666",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/WhatsApp%20Image%202026-05-27%20at%2012.51.37.jpeg?raw=true",
    lat: -10.916543119083107,
    lng: -37.66585640456769,
    status: "adotar"
  },
  {
    animal: "Doguinho do CentroSul (Adotado)",
    contato: "",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/Doguinho%20CentroSul.jpg?raw=true",
    lat: -10.923935861291268,
    lng: -37.6699154230232,
    status: "adotado"
  },
  {
    animal: "Pitibull 10 meses (Tutora Marleide)",
    contato: "7996729677",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/Pitibull%2010%20meses%20(Adotado).jpg?raw=true",
    lat: -10.915281154623473,
    lng: -37.66724692022351,
    status: "adotado"
  },
  {
    animal: "Pretinho.",
    contato: "7996701204",
    foto: "https://github.com/adotpetofc/adotpet/blob/main/pretinho.png?raw=true",
    lat: -10.909350097002461,
    lng: -37.65956199568748,
    status: "adotar"
  },
  {
    animal: "Diana",
    contato: "7996701204",
    foto: "https://github.com/LeonardoSaintAna/imagem_adotpet-/blob/main/Diana.jpeg?raw=true",
    lat: -10.773668832498164,
    lng: -37.83777687504117,
    status: "adotar"
  }
];
