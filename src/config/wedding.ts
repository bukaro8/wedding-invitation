export type Language = "es" | "en";

type LocalizedText = Record<Language, string>;
type ItineraryItem = { time: string; title: string };

export const weddingConfig = {
  features: {
    enableDigitalPass: false,
  },
  audio: {
    songPath: "/audio/song.mp3",
  },
  pdf: {
    passPath: "/pdf/invitation-pass.pdf",
  },
  couple: {
    displayName: {
      es: "Joselin y Wilmer",
      en: "Joselin and Wilmer",
    },
    brideName: "Joselin Rodriguez",
    groomName: "Wilmer Ramirez",
  },
  date: {
    targetDate: "2026-07-18T15:00:00+01:00",
    day: "18",
    monthYear: {
      es: "Julio 2026",
      en: "July 2026",
    },
    full: {
      es: "18 de julio de 2026",
      en: "18 July 2026",
    },
    rsvpDeadline: {
      es: "10 de julio de 2026",
      en: "10 July 2026",
    },
  },
  times: {
    ceremony: {
      es: "3:00 PM",
      en: "3:00 PM",
    },
    reception: {
      es: "6:00 PM",
      en: "6:00 PM",
    },
  },
  locations: {
    ceremony: {
      name: "George Meehan House and Haringey Register Office",
      address: {
        es: "N22 8JZ",
        en: "N22 8JZ",
      },
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=George%20Meehan%20House%20and%20Haringey%20Register%20Office%20N22%208JZ",
    },
    reception: {
      name: "Recepción",
      address: {
        es: "19 Brantwood Rd, N17 0DT",
        en: "19 Brantwood Rd, N17 0DT",
      },
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=19%20Brantwood%20Rd%2C%20N17%200DT",
    },
  },
  bibleQuote: {
    es: "Así que ya no son dos, sino uno solo. Por tanto, lo que Dios ha unido, que no lo separe el hombre.",
    en: "So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.",
  },
  romanticMessage: {
    es: "Ambos escogimos juntar nuestras vidas. Yo me entrego a ti sabiendo que la magia de nuestro amor es caminar juntos en la prosperidad y la adversidad. Quiero ser tu cómplice y que tú seas el mío por el resto de la vida.",
    en: "We both chose to join our lives together. I give myself to you knowing that the magic of our love is walking together through prosperity and adversity. I want to be your partner in everything, and for you to be mine for the rest of our lives.",
  },
  lovedOnes: {
    brideParents: ["Magdalena Rodriguez Santos"],
    groomParents: [
      "Dilcia Aracely Alvarado Mendez",
      "Edilberto Ramirez Godoy",
    ],
    witnesses: [
      "Bernardine Pamela Interiano Williams",
      "Edy Geovany Ramirez Alvarado",
    ],
  },
  guest: {
    namePlaceholder: {
      es: "Invitado especial",
      en: "Special guest",
    },
    reservedSeatsPlaceholder: {
      es: "Lugares reservados por confirmar",
      en: "Reserved seats to be confirmed",
    },
  },
  dressCode: {
    notes: {
      es: "Formal",
      en: "Formal",
    },
  },
  gifts: {
    message: {
      es: "Si deseas bendecirnos, agradeceríamos regalos en efectivo.",
      en: "If you would like to bless us, cash gifts would be greatly appreciated.",
    },
  },
  recommendations: {
    es: [
      "Recomendamos llegar al lugar de la ceremonia 20 minutos antes de la hora.",
    ],
    en: [
      "We recommend arriving at the ceremony venue 20 minutes before the scheduled time.",
    ],
  },
  itinerary: {
    es: [] as ItineraryItem[],
    en: [] as ItineraryItem[],
  },
} satisfies {
  features: {
    enableDigitalPass: boolean;
  };
  audio: {
    songPath: string;
  };
  pdf: {
    passPath: string;
  };
  couple: {
    displayName: LocalizedText;
    brideName: string;
    groomName: string;
  };
  date: {
    targetDate: string;
    day: string;
    monthYear: LocalizedText;
    full: LocalizedText;
    rsvpDeadline: LocalizedText;
  };
  times: {
    ceremony: LocalizedText;
    reception: LocalizedText;
  };
  locations: {
    ceremony: {
      name: string;
      address: LocalizedText;
      googleMapsUrl: string;
    };
    reception: {
      name: string;
      address: LocalizedText;
      googleMapsUrl: string;
    };
  };
  bibleQuote: LocalizedText;
  romanticMessage: LocalizedText;
  lovedOnes: {
    brideParents: string[];
    groomParents: string[];
    witnesses: string[];
  };
  guest: {
    namePlaceholder: LocalizedText;
    reservedSeatsPlaceholder: LocalizedText;
  };
  dressCode: {
    notes: LocalizedText;
  };
  gifts: {
    message: LocalizedText;
  };
  recommendations: Record<Language, string[]>;
  itinerary: Record<Language, ItineraryItem[]>;
};
