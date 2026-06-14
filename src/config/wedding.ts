export type Language = "es" | "en";

type LocalizedText = Record<Language, string>;

export const weddingConfig = {
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
    brideName: "Joselin",
    groomName: "Wilmer",
  },
  date: {
    targetDate: "2026-10-18T17:00:00",
    day: "18",
    monthYear: {
      es: "Octubre 2026",
      en: "October 2026",
    },
    full: {
      es: "18 de octubre de 2026",
      en: "October 18, 2026",
    },
  },
  times: {
    ceremony: {
      es: "17:00",
      en: "5:00 PM",
    },
    reception: {
      es: "18:00",
      en: "6:00 PM",
    },
  },
  locations: {
    ceremony: {
      name: "Hacienda Azul",
      address: {
        es: "Dirección de ceremonia pendiente de confirmar",
        en: "Ceremony address to be confirmed",
      },
      googleMapsUrl: "https://maps.google.com/?q=Hacienda+Azul",
    },
    reception: {
      name: "Hacienda Azul",
      address: {
        es: "Dirección de recepción pendiente de confirmar",
        en: "Reception address to be confirmed",
      },
      googleMapsUrl: "https://maps.google.com/?q=Hacienda+Azul",
    },
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
      es: "Traje formal / vestido largo o midi",
      en: "Formal suit / long or midi dress",
    },
  },
  gifts: {
    message: {
      es: "Si deseas tener un detalle con nosotros, pronto compartiremos opciones de mesa de regalos y transferencia.",
      en: "If you would like to send us a gift, registry and transfer details will be shared soon.",
    },
  },
  recommendations: {
    es: [
      "Llegar con 20 minutos de anticipación.",
      "Confirmar asistencia desde el formulario RSVP.",
      "Llevar una identificación para el acceso.",
      "Evitar tacones muy delgados si el jardín está disponible.",
    ],
    en: [
      "Arrive 20 minutes early.",
      "Confirm attendance through the RSVP form.",
      "Bring an ID for access.",
      "Avoid very thin heels if the garden area is open.",
    ],
  },
  itinerary: {
    es: [
      { time: "16:30", title: "Recepción de invitados" },
      { time: "17:00", title: "Ceremonia" },
      { time: "18:00", title: "Cóctel" },
      { time: "19:30", title: "Cena" },
      { time: "21:00", title: "Baile y celebración" },
    ],
    en: [
      { time: "4:30 PM", title: "Guest arrival" },
      { time: "5:00 PM", title: "Ceremony" },
      { time: "6:00 PM", title: "Cocktail hour" },
      { time: "7:30 PM", title: "Dinner" },
      { time: "9:00 PM", title: "Dancing and celebration" },
    ],
  },
} satisfies {
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
  itinerary: Record<Language, { time: string; title: string }[]>;
};
