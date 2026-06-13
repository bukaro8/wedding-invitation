"use client";

import {
  CalendarDays,
  Clock,
  Gift,
  Heart,
  MapPin,
  Shirt,
  Sparkles,
  Ticket,
} from "lucide-react";
import { useState } from "react";
import { InfoCard, WeddingSection } from "@/components/wedding-section";

type Language = "es" | "en";

const translations = {
  es: {
    languageLabel: "English",
    ariaLanguageLabel: "Cambiar idioma a ingles",
    heroEyebrow: "Nuestra boda",
    heroTitle: "Valeria & Mateo",
    brideName: "Valeria",
    groomName: "Mateo",
    heroSubtitle:
      "Con mucha ilusion queremos compartir este dia tan especial con las personas que mas queremos.",
    weddingDate: "18 de octubre de 2026",
    viewInvitation: "Ver invitacion",
    saveTheDate: "Guardar la fecha",
    monthYear: "Octubre 2026",
    eventType: "Ceremonia y celebracion",
    venue: "Lugar por confirmar",
    dateEyebrow: "Fecha",
    dateTitle: "Falta poco para celebrar",
    countdownLabel: "Cuenta regresiva",
    countdownPlaceholder: "Muy pronto activaremos la cuenta regresiva.",
    countdownItems: ["Dias", "Horas", "Minutos", "Segundos"],
    messageEyebrow: "Invitacion",
    messageTitle: "Nos encantaria que nos acompañes",
    invitationMessage:
      "Estamos preparando una celebracion intima, elegante y llena de detalles. Tu presencia hara que este momento sea aun mas especial para nosotros.",
    itineraryEyebrow: "Agenda",
    itineraryTitle: "Itinerario del evento",
    itinerary: [
      { time: "16:30", title: "Recepcion de invitados" },
      { time: "17:00", title: "Ceremonia" },
      { time: "18:00", title: "Coctel" },
      { time: "19:30", title: "Cena" },
      { time: "21:00", title: "Baile y celebracion" },
    ],
    locationEyebrow: "Ubicacion",
    locationTitle: "Como llegar",
    ceremonyLocation: "Ceremonia",
    receptionLocation: "Recepcion",
    locationName: "Hacienda Azul",
    locationAddress: "Direccion pendiente de confirmar",
    openMap: "Abrir en Google Maps",
    copyAddress: "Copiar direccion",
    dressEyebrow: "Codigo de vestir",
    dressTitle: "Etiqueta formal",
    dressDescription:
      "Sugerimos tonos elegantes y comodos para una celebracion de tarde-noche. Reservamos el blanco para la novia.",
    dressNote: "Traje formal / vestido largo o midi",
    giftsEyebrow: "Regalos",
    giftsTitle: "Tu presencia es nuestro mejor regalo",
    giftsDescription:
      "Si deseas tener un detalle con nosotros, pronto compartiremos opciones de mesa de regalos y transferencia.",
    giftsPlaceholder: "Informacion de regalos proximamente",
    recommendationsEyebrow: "Consejos",
    recommendationsTitle: "Recomendaciones para invitados",
    recommendations: [
      "Llegar con 20 minutos de anticipacion.",
      "Confirmar asistencia cuando abramos el RSVP.",
      "Llevar una identificacion para el acceso.",
      "Evitar tacones muy delgados si el jardin esta disponible.",
    ],
    rsvpEyebrow: "RSVP",
    rsvpTitle: "Confirmacion de asistencia",
    rsvpDescription:
      "El formulario de confirmacion estara disponible pronto. Por ahora, esta seccion muestra una vista previa del flujo.",
    rsvpButton: "RSVP proximamente",
    pdfEyebrow: "Pase digital",
    pdfTitle: "Vista previa del pase PDF",
    pdfDescription:
      "Cada invitado tendra un pase digital descargable para presentar el dia del evento.",
    pdfName: "Invitado especial",
    pdfStatus: "Pase pendiente",
    footerText: "Con cariño, Valeria & Mateo",
    footerNote: "Gracias por formar parte de nuestra historia.",
  },
  en: {
    languageLabel: "Español",
    ariaLanguageLabel: "Switch language to Spanish",
    heroEyebrow: "Our wedding",
    heroTitle: "Valeria & Mateo",
    brideName: "Valeria",
    groomName: "Mateo",
    heroSubtitle:
      "With so much joy, we want to share this special day with the people we love most.",
    weddingDate: "October 18, 2026",
    viewInvitation: "View invitation",
    saveTheDate: "Save the date",
    monthYear: "October 2026",
    eventType: "Ceremony and celebration",
    venue: "Venue to be confirmed",
    dateEyebrow: "Date",
    dateTitle: "The celebration is getting closer",
    countdownLabel: "Countdown",
    countdownPlaceholder: "The countdown will be available soon.",
    countdownItems: ["Days", "Hours", "Minutes", "Seconds"],
    messageEyebrow: "Invitation",
    messageTitle: "We would love to celebrate with you",
    invitationMessage:
      "We are preparing an intimate, elegant celebration filled with meaningful details. Your presence will make this moment even more special for us.",
    itineraryEyebrow: "Schedule",
    itineraryTitle: "Event itinerary",
    itinerary: [
      { time: "4:30 PM", title: "Guest arrival" },
      { time: "5:00 PM", title: "Ceremony" },
      { time: "6:00 PM", title: "Cocktail hour" },
      { time: "7:30 PM", title: "Dinner" },
      { time: "9:00 PM", title: "Dancing and celebration" },
    ],
    locationEyebrow: "Location",
    locationTitle: "How to get there",
    ceremonyLocation: "Ceremony",
    receptionLocation: "Reception",
    locationName: "Hacienda Azul",
    locationAddress: "Address to be confirmed",
    openMap: "Open in Google Maps",
    copyAddress: "Copy address",
    dressEyebrow: "Dress code",
    dressTitle: "Formal attire",
    dressDescription:
      "We suggest elegant, comfortable outfits for an afternoon-evening celebration. White is reserved for the bride.",
    dressNote: "Formal suit / long or midi dress",
    giftsEyebrow: "Gifts",
    giftsTitle: "Your presence is our favorite gift",
    giftsDescription:
      "If you would like to send us a gift, registry and transfer details will be shared soon.",
    giftsPlaceholder: "Gift details coming soon",
    recommendationsEyebrow: "Tips",
    recommendationsTitle: "Guest recommendations",
    recommendations: [
      "Arrive 20 minutes early.",
      "Confirm attendance once RSVP opens.",
      "Bring an ID for access.",
      "Avoid very thin heels if the garden area is open.",
    ],
    rsvpEyebrow: "RSVP",
    rsvpTitle: "Attendance confirmation",
    rsvpDescription:
      "The confirmation form will be available soon. For now, this section previews the upcoming flow.",
    rsvpButton: "RSVP coming soon",
    pdfEyebrow: "Digital pass",
    pdfTitle: "PDF pass preview",
    pdfDescription:
      "Each guest will have a downloadable digital pass to present on the wedding day.",
    pdfName: "Special guest",
    pdfStatus: "Pass pending",
    footerText: "With love, Valeria & Mateo",
    footerNote: "Thank you for being part of our story.",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<Language>("es");
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "es" ? "en" : "es"));
  };

  return (
    <main className="min-h-screen bg-[#f8fbff] text-[#0b1f3a]">
      <div className="fixed right-4 top-4 z-20 sm:right-6 sm:top-6">
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={t.ariaLanguageLabel}
          className="rounded-full border border-[#d8e3f2] bg-white/90 px-4 py-2 text-sm font-semibold text-[#071a33] shadow-lg shadow-[#071a33]/10 backdrop-blur transition hover:border-[#9eb3cc] hover:bg-white"
        >
          {t.languageLabel}
        </button>
      </div>

      <HeroSection t={t} />
      <DateSection t={t} />
      <InvitationMessage t={t} />
      <ItinerarySection t={t} />
      <LocationSection t={t} />
      <DressCodeSection t={t} />
      <GiftsSection t={t} />
      <RecommendationsSection t={t} />
      <RsvpPreviewSection t={t} />
      <PdfPassSection t={t} />
      <Footer t={t} />
    </main>
  );
}

type Translation = (typeof translations)[Language];

function HeroSection({ t }: { t: Translation }) {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-20 sm:px-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
      <div className="w-full max-w-xl text-center lg:text-left">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#46607f]">
          {t.heroEyebrow}
        </p>

        <h1 className="text-5xl font-semibold leading-tight text-[#071a33] sm:text-6xl lg:text-7xl">
          <span className="sr-only">{t.heroTitle}</span>
          <span aria-hidden="true">{t.brideName}</span>
          <span className="block font-light italic text-[#153b68]">&</span>
          <span aria-hidden="true">{t.groomName}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-base leading-7 text-[#42566f] sm:text-lg lg:mx-0">
          {t.heroSubtitle}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
          <a
            href="#invitacion"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#071a33] px-7 text-sm font-semibold text-white shadow-lg shadow-[#071a33]/20 transition hover:bg-[#123a66] sm:w-auto"
          >
            {t.viewInvitation}
          </a>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#153b68]">
            {t.weddingDate}
          </p>
        </div>
      </div>

      <InfoCard className="mt-12 w-full max-w-sm rounded-[2rem] p-6 lg:mt-0">
        <div className="rounded-[1.5rem] border border-[#e3ebf6] px-6 py-10 text-center">
          <div className="mx-auto mb-8 flex size-14 items-center justify-center rounded-full bg-[#071a33] text-white">
            <Heart className="size-6" aria-hidden="true" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6c7f98]">
            {t.saveTheDate}
          </p>
          <p className="mt-5 text-4xl font-semibold text-[#071a33]">18</p>
          <p className="mt-1 text-lg italic text-[#153b68]">{t.monthYear}</p>

          <div className="mx-auto my-8 h-px w-20 bg-[#c7d6e8]" />

          <p className="text-sm leading-6 text-[#42566f]">
            {t.eventType}
            <span className="block font-medium text-[#071a33]">{t.venue}</span>
          </p>
        </div>
      </InfoCard>
    </section>
  );
}

function DateSection({ t }: { t: Translation }) {
  return (
    <WeddingSection
      eyebrow={t.dateEyebrow}
      title={t.dateTitle}
      className="bg-white"
    >
      <InfoCard className="mx-auto max-w-3xl text-center">
        <CalendarDays className="mx-auto mb-5 size-9 text-[#153b68]" />
        <p className="text-2xl font-semibold text-[#071a33]">
          {t.weddingDate}
        </p>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#607899]">
          {t.countdownLabel}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {t.countdownItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#e3ebf6] bg-[#f8fbff] px-3 py-5"
            >
              <p className="text-3xl font-semibold text-[#071a33]">--</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#607899]">
                {item}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-[#42566f]">{t.countdownPlaceholder}</p>
      </InfoCard>
    </WeddingSection>
  );
}

function InvitationMessage({ t }: { t: Translation }) {
  return (
    <WeddingSection
      eyebrow={t.messageEyebrow}
      title={t.messageTitle}
      className="bg-[#f8fbff]"
    >
      <p
        id="invitacion"
        className="mx-auto max-w-3xl text-center text-lg leading-8 text-[#42566f]"
      >
        {t.invitationMessage}
      </p>
    </WeddingSection>
  );
}

function ItinerarySection({ t }: { t: Translation }) {
  return (
    <WeddingSection
      eyebrow={t.itineraryEyebrow}
      title={t.itineraryTitle}
      className="bg-white"
    >
      <div className="mx-auto grid max-w-3xl gap-4">
        {t.itinerary.map((item) => (
          <InfoCard
            key={`${item.time}-${item.title}`}
            className="flex items-center gap-5"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#071a33] text-white">
              <Clock className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#607899]">
                {item.time}
              </p>
              <p className="mt-1 text-lg font-semibold text-[#071a33]">
                {item.title}
              </p>
            </div>
          </InfoCard>
        ))}
      </div>
    </WeddingSection>
  );
}

function LocationSection({ t }: { t: Translation }) {
  const locations = [t.ceremonyLocation, t.receptionLocation];

  return (
    <WeddingSection
      eyebrow={t.locationEyebrow}
      title={t.locationTitle}
      className="bg-[#f8fbff]"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {locations.map((location) => (
          <InfoCard key={location}>
            <MapPin className="mb-5 size-8 text-[#153b68]" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#607899]">
              {location}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[#071a33]">
              {t.locationName}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#42566f]">
              {t.locationAddress}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-full bg-[#071a33] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#123a66]">
                {t.openMap}
              </button>
              <button className="rounded-full border border-[#c7d6e8] px-5 py-3 text-sm font-semibold text-[#071a33] transition hover:border-[#9eb3cc]">
                {t.copyAddress}
              </button>
            </div>
          </InfoCard>
        ))}
      </div>
    </WeddingSection>
  );
}

function DressCodeSection({ t }: { t: Translation }) {
  return (
    <WeddingSection
      eyebrow={t.dressEyebrow}
      title={t.dressTitle}
      className="bg-white"
    >
      <InfoCard className="mx-auto max-w-3xl text-center">
        <Shirt className="mx-auto mb-5 size-9 text-[#153b68]" />
        <p className="text-base leading-7 text-[#42566f]">
          {t.dressDescription}
        </p>
        <p className="mt-5 rounded-full bg-[#f8fbff] px-5 py-3 text-sm font-semibold text-[#071a33]">
          {t.dressNote}
        </p>
      </InfoCard>
    </WeddingSection>
  );
}

function GiftsSection({ t }: { t: Translation }) {
  return (
    <WeddingSection
      eyebrow={t.giftsEyebrow}
      title={t.giftsTitle}
      className="bg-[#f8fbff]"
    >
      <InfoCard className="mx-auto max-w-3xl text-center">
        <Gift className="mx-auto mb-5 size-9 text-[#153b68]" />
        <p className="text-base leading-7 text-[#42566f]">
          {t.giftsDescription}
        </p>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#607899]">
          {t.giftsPlaceholder}
        </p>
      </InfoCard>
    </WeddingSection>
  );
}

function RecommendationsSection({ t }: { t: Translation }) {
  return (
    <WeddingSection
      eyebrow={t.recommendationsEyebrow}
      title={t.recommendationsTitle}
      className="bg-white"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {t.recommendations.map((recommendation) => (
          <InfoCard key={recommendation} className="flex gap-4">
            <Sparkles
              className="mt-1 size-5 shrink-0 text-[#153b68]"
              aria-hidden="true"
            />
            <p className="text-sm leading-6 text-[#42566f]">
              {recommendation}
            </p>
          </InfoCard>
        ))}
      </div>
    </WeddingSection>
  );
}

function RsvpPreviewSection({ t }: { t: Translation }) {
  return (
    <WeddingSection
      eyebrow={t.rsvpEyebrow}
      title={t.rsvpTitle}
      className="bg-[#f8fbff]"
    >
      <InfoCard className="mx-auto max-w-3xl text-center">
        <Heart className="mx-auto mb-5 size-9 text-[#153b68]" />
        <p className="text-base leading-7 text-[#42566f]">
          {t.rsvpDescription}
        </p>
        <button className="mt-6 rounded-full bg-[#071a33] px-6 py-3 text-sm font-semibold text-white opacity-80">
          {t.rsvpButton}
        </button>
      </InfoCard>
    </WeddingSection>
  );
}

function PdfPassSection({ t }: { t: Translation }) {
  return (
    <WeddingSection
      eyebrow={t.pdfEyebrow}
      title={t.pdfTitle}
      className="bg-white"
    >
      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[1fr_0.9fr] md:items-center">
        <p className="text-center text-base leading-7 text-[#42566f] md:text-left">
          {t.pdfDescription}
        </p>

        <InfoCard className="rounded-[2rem]">
          <div className="rounded-[1.5rem] border border-dashed border-[#9eb3cc] bg-[#f8fbff] p-6">
            <div className="flex items-center justify-between gap-4">
              <Ticket className="size-9 text-[#153b68]" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#607899]">
                PDF
              </p>
            </div>
            <p className="mt-8 text-sm text-[#607899]">{t.pdfName}</p>
            <p className="mt-2 text-2xl font-semibold text-[#071a33]">
              {t.heroTitle}
            </p>
            <p className="mt-5 rounded-full bg-white px-4 py-3 text-center text-sm font-semibold text-[#153b68]">
              {t.pdfStatus}
            </p>
          </div>
        </InfoCard>
      </div>
    </WeddingSection>
  );
}

function Footer({ t }: { t: Translation }) {
  return (
    <footer className="bg-[#071a33] px-6 py-12 text-center text-white sm:px-10">
      <p className="text-2xl font-semibold">{t.footerText}</p>
      <p className="mt-3 text-sm text-white/70">{t.footerNote}</p>
    </footer>
  );
}
