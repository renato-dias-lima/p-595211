// Mock data for performance evaluations
export interface Evaluation {
  id: string;
  title: string;
  type: "360°" | "180°" | "Por objetivos";
  period:
    | "Anual"
    | "Semestral"
    | "Trimestral"
    | "Bimestral"
    | "Mensal"
    | "Quinzenal";
  evaluators: {
    id: string;
    avatar: string;
  }[];
  startDate: string;
  endDate: string;
  areas: {
    name: string;
    color: string;
  }[];
  collaborators: number;
  status: "draft" | "in-progress" | "calibrate" | "completed" | "canceled";
  isNew?: boolean;
}

export const evaluations: Evaluation[] = [
  {
    id: "1",
    title: "Avaliação de Competências Gerais",
    type: "360°",
    period: "Anual",
    evaluators: [
      {
        id: "1",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/f6b9f688f17928793822bbafb2523976d902939deea65fefa067b076184dc052?placeholderIfAbsent=true",
      },
    ],
    startDate: "10/12/2024",
    endDate: "15/01/2024",
    areas: [{ name: "Administração", color: "#148EFF" }],
    collaborators: 120,
    status: "draft",
  },
  {
    id: "2",
    title: "Avaliação de Desempenho Individual",
    type: "180°",
    period: "Trimestral",
    evaluators: [
      {
        id: "2",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/f29fb9458cea5d92025ce591e039646caefd8ed65a7d5f164417f2e10636ed6a?placeholderIfAbsent=true",
      },
      {
        id: "3",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/59613584b250fe2c8bde7c7104696b29dc978279bf7726371f1c8fa4a1c4b3d9?placeholderIfAbsent=true",
      },
    ],
    startDate: "10/12/2024",
    endDate: "15/01/2024",
    areas: [
      { name: "Marketing", color: "#E05406" },
      { name: "+3", color: "#0671E0" },
    ],
    collaborators: 50,
    status: "in-progress",
    isNew: true,
  },
  {
    id: "3",
    title: "Revisão de Metas",
    type: "Por objetivos",
    period: "Semestral",
    evaluators: [
      {
        id: "2",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/f29fb9458cea5d92025ce591e039646caefd8ed65a7d5f164417f2e10636ed6a?placeholderIfAbsent=true",
      },
    ],
    startDate: "10/12/2024",
    endDate: "15/01/2024",
    areas: [{ name: "Engenharia", color: "#0643E0" }],
    collaborators: 34,
    status: "calibrate",
  },
  {
    id: "4",
    title: "Avaliação de Competências Técnicas",
    type: "180°",
    period: "Mensal",
    evaluators: [
      {
        id: "2",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/f29fb9458cea5d92025ce591e039646caefd8ed65a7d5f164417f2e10636ed6a?placeholderIfAbsent=true",
      },
      {
        id: "3",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/59613584b250fe2c8bde7c7104696b29dc978279bf7726371f1c8fa4a1c4b3d9?placeholderIfAbsent=true",
      },
      {
        id: "4",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/ff8d2614c62117813d303dafc80b655d45da79c8154fd64f9e627ac551b481f8?placeholderIfAbsent=true",
      },
      {
        id: "5",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/ff8d2614c62117813d303dafc80b655d45da79c8154fd64f9e627ac551b481f8?placeholderIfAbsent=true",
      },
      {
        id: "6",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/ff8d2614c62117813d303dafc80b655d45da79c8154fd64f9e627ac551b481f8?placeholderIfAbsent=true",
      },
      {
        id: "7",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/ff8d2614c62117813d303dafc80b655d45da79c8154fd64f9e627ac551b481f8?placeholderIfAbsent=true",
      },
    ],
    startDate: "10/12/2024",
    endDate: "15/01/2024",
    areas: [{ name: "Administração", color: "#148EFF" }],
    collaborators: 10,
    status: "completed",
  },
  {
    id: "5",
    title: "Avaliação de Liderança",
    type: "180°",
    period: "Quinzenal",
    evaluators: [
      {
        id: "2",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/f29fb9458cea5d92025ce591e039646caefd8ed65a7d5f164417f2e10636ed6a?placeholderIfAbsent=true",
      },
      {
        id: "3",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/34d763ac15fdbc996b7edafa6ecb189b07c0e744be83e4fe6a9a745d12c18543?placeholderIfAbsent=true",
      },
      {
        id: "4",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/ff8d2614c62117813d303dafc80b655d45da79c8154fd64f9e627ac551b481f8?placeholderIfAbsent=true",
      },
    ],
    startDate: "10/12/2024",
    endDate: "15/01/2024",
    areas: [{ name: "Design", color: "#F314F8" }],
    collaborators: 12,
    status: "canceled",
  },
  {
    id: "6",
    title: "Avaliação ciclo 04 2024",
    type: "360°",
    period: "Bimestral",
    evaluators: [
      {
        id: "2",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/f29fb9458cea5d92025ce591e039646caefd8ed65a7d5f164417f2e10636ed6a?placeholderIfAbsent=true",
      },
      {
        id: "3",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/34d763ac15fdbc996b7edafa6ecb189b07c0e744be83e4fe6a9a745d12c18543?placeholderIfAbsent=true",
      },
    ],
    startDate: "10/12/2024",
    endDate: "15/01/2024",
    areas: [{ name: "Design", color: "#F314F8" }],
    collaborators: 100,
    status: "completed",
  },
  {
    id: "7",
    title: "Avaliação ciclo 03 2024",
    type: "180°",
    period: "Bimestral",
    evaluators: [
      {
        id: "2",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/f29fb9458cea5d92025ce591e039646caefd8ed65a7d5f164417f2e10636ed6a?placeholderIfAbsent=true",
      },
      {
        id: "4",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/ff8d2614c62117813d303dafc80b655d45da79c8154fd64f9e627ac551b481f8?placeholderIfAbsent=true",
      },
    ],
    startDate: "10/12/2024",
    endDate: "15/01/2024",
    areas: [{ name: "Marketing", color: "#E05406" }],
    collaborators: 100,
    status: "completed",
  },
  {
    id: "8",
    title: "Avaliação ciclo 02 2024",
    type: "360°",
    period: "Bimestral",
    evaluators: [
      {
        id: "4",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/ff8d2614c62117813d303dafc80b655d45da79c8154fd64f9e627ac551b481f8?placeholderIfAbsent=true",
      },
    ],
    startDate: "10/12/2024",
    endDate: "15/01/2024",
    areas: [{ name: "Administração", color: "#148EFF" }],
    collaborators: 100,
    status: "completed",
  },
  {
    id: "9",
    title: "Avaliação ciclo 01 2024",
    type: "Por objetivos",
    period: "Bimestral",
    evaluators: [
      {
        id: "2",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/f29fb9458cea5d92025ce591e039646caefd8ed65a7d5f164417f2e10636ed6a?placeholderIfAbsent=true",
      },
      {
        id: "3",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/59613584b250fe2c8bde7c7104696b29dc978279bf7726371f1c8fa4a1c4b3d9?placeholderIfAbsent=true",
      },
      {
        id: "4",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/ff8d2614c62117813d303dafc80b655d45da79c8154fd64f9e627ac551b481f8?placeholderIfAbsent=true",
      },
    ],
    startDate: "10/12/2024",
    endDate: "15/01/2024",
    areas: [{ name: "Marketing", color: "#E05406" }],
    collaborators: 100,
    status: "completed",
  },
  {
    id: "10",
    title: "Avaliação ciclo 04 2023",
    type: "360°",
    period: "Bimestral",
    evaluators: [
      {
        id: "4",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/ff8d2614c62117813d303dafc80b655d45da79c8154fd64f9e627ac551b481f8?placeholderIfAbsent=true",
      },
    ],
    startDate: "10/12/2024",
    endDate: "15/01/2024",
    areas: [{ name: "Administração", color: "#148EFF" }],
    collaborators: 100,
    status: "completed",
  },
  {
    id: "11",
    title: "Avaliação ciclo 03 2023",
    type: "180°",
    period: "Bimestral",
    evaluators: [
      {
        id: "2",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/f29fb9458cea5d92025ce591e039646caefd8ed65a7d5f164417f2e10636ed6a?placeholderIfAbsent=true",
      },
      {
        id: "3",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/59613584b250fe2c8bde7c7104696b29dc978279bf7726371f1c8fa4a1c4b3d9?placeholderIfAbsent=true",
      },
      {
        id: "4",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/ff8d2614c62117813d303dafc80b655d45da79c8154fd64f9e627ac551b481f8?placeholderIfAbsent=true",
      },
    ],
    startDate: "10/12/2024",
    endDate: "15/01/2024",
    areas: [{ name: "Marketing", color: "#E05406" }],
    collaborators: 100,
    status: "completed",
  },
  {
    id: "12",
    title: "Avaliação ciclo 02 2023",
    type: "360°",
    period: "Bimestral",
    evaluators: [
      {
        id: "4",
        avatar:
          "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/ff8d2614c62117813d303dafc80b655d45da79c8154fd64f9e627ac551b481f8?placeholderIfAbsent=true",
      },
    ],
    startDate: "10/12/2024",
    endDate: "15/01/2024",
    areas: [{ name: "Administração", color: "#148EFF" }],
    collaborators: 100,
    status: "completed",
  },
];

export const getStatusInfo = (status: Evaluation["status"]) => {
  switch (status) {
    case "draft":
      return {
        label: "Rascunho",
        bgColor: "rgba(241,242,246,1)",
        borderColor: "rgba(88,107,120,1)",
        textColor: "#586B78",
        icon: "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/a0d282de9d4f1828c0d6fecef166ad1a3b2199ce050bde1f40a0c528d6a9921c?placeholderIfAbsent=true",
      };
    case "in-progress":
      return {
        label: "Em andamento",
        bgColor: "rgba(255,253,214,1)",
        borderColor: "rgba(218,187,28,1)",
        textColor: "#DABB1C",
        icon: "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/b6a8c60b88ee08018d0892c59e2c6265c36ac0288993d58d1043d77daf3072c7?placeholderIfAbsent=true",
      };
    case "calibrate":
      return {
        label: "Calibrar",
        bgColor: "rgba(255,245,225,1)",
        borderColor: "rgba(255,171,0,1)",
        textColor: "#FFAB00",
        icon: "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/c35dce9b8ff0bb71690841d8dfaf554e67796b821b66499c327fdd0ceeb94496?placeholderIfAbsent=true",
      };
    case "completed":
      return {
        label: "Concluída",
        bgColor: "rgba(243,255,242,1)",
        borderColor: "rgba(81,170,98,1)",
        textColor: "#51AA62",
        icon: "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/355dc5c6ba447f73b5c2780c461e6623754576ce2e9488712626660b587b0060?placeholderIfAbsent=true",
      };
    case "canceled":
      return {
        label: "Cancelada",
        bgColor: "rgba(255,246,246,1)",
        borderColor: "rgba(255,62,50,1)",
        textColor: "#FF3E32",
        icon: "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/2178bfec6f190a806ad338acecf82253e293b8ddb9e6b075697a6cb18c2741e1?placeholderIfAbsent=true",
      };
    default:
      return {
        label: "Desconhecido",
        bgColor: "rgba(241,242,246,1)",
        borderColor: "rgba(88,107,120,1)",
        textColor: "#586B78",
        icon: "https://cdn.builder.io/api/v1/image/assets/ab3ccf89ba3b43bc9b15a40c1d47692a/a0d282de9d4f1828c0d6fecef166ad1a3b2199ce050bde1f40a0c528d6a9921c?placeholderIfAbsent=true",
      };
  }
};
