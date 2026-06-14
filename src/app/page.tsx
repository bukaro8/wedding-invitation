"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Countdown } from "@/components/countdown";
import { EnvelopeGate } from "@/components/envelope-gate";
import {
  CalendarHeartIcon,
  CardEnvelopeIcon,
  ClockIcon,
  DressCodeIcon,
  HeartShineIcon,
  MapLocationIcon,
  MessageReplyIcon,
  WeddingRingsIcon,
} from "@/components/icons";
import { MusicButton } from "@/components/music-button";
import { RsvpForm } from "@/components/rsvp-form";
import { InfoCard, WeddingSection } from "@/components/wedding-section";
import { type Language, weddingConfig } from "@/config/wedding";

const translations = {
  es: {
    languageLabel: "English",
    ariaLanguageLabel: "Cambiar idioma a inglés",
    openInvitation: "Abrir invitación",
    music: {
      play: "Reproducir",
      pause: "Detener",
    },
    heroEyebrow: "Nuestra boda",
    heroTitle: weddingConfig.couple.displayName.es,
    brideName: weddingConfig.couple.brideName,
    groomName: weddingConfig.couple.groomName,
    heroSubtitle:
      "Con mucha ilusión queremos compartir este día tan especial con las personas que más queremos.",
    weddingDate: weddingConfig.date.full.es,
    viewInvitation: "Ver invitación",
    saveTheDate: "Guardar la fecha",
    weddingDay: weddingConfig.date.day,
    monthYear: weddingConfig.date.monthYear.es,
    eventType: "Ceremonia y celebración",
    venue: weddingConfig.locations.ceremony.name,
    dateEyebrow: "Fecha",
    dateTitle: "Falta poco para celebrar",
    countdownLabel: "Cuenta regresiva",
    countdownLabels: {
      days: "Días",
      hours: "Horas",
      minutes: "Minutos",
      seconds: "Segundos",
      completed: "La celebración ya comenzó.",
    },
    storyEyebrow: "NUESTRA HISTORIA",
    storyTitle: "Nuestra historia",
    storySubtitle: weddingConfig.romanticMessage.es,
    storyPrevious: "Foto anterior",
    storyNext: "Siguiente foto",
    storyGoToSlide: "Ver foto",
    storyImages: [
      "Joselin y Wilmer sonriendo juntos.",
      "Joselin y Wilmer sentados junto al agua.",
      "Joselin besa a Wilmer junto al mar.",
      "Joselin y Wilmer frente a una iglesia.",
      "Joselin y Wilmer compartiendo una cena.",
      "Joselin y Wilmer en una noche especial.",
    ],
    lovedOnesEyebrow: "CON AMOR Y GRATITUD",
    lovedOnesTitle: "Nuestros padres y testigos",
    lovedOnesIntro:
      "Con alegría honramos a quienes nos han acompañado, guiado y bendecido en este camino hacia nuestro matrimonio.",
    brideParentsLabel: "Padres de Joselin",
    groomParentsLabel: "Padres de Wilmer",
    witnessesLabel: "Testigos",
    witnessesSubtitle: "Padrinos",
    messageEyebrow: "Invitación",
    messageTitle: "Nos encantaría que nos acompañes",
    bibleQuote: weddingConfig.bibleQuote.es,
    invitationMessage: weddingConfig.romanticMessage.es,
    itineraryEyebrow: "Agenda",
    itineraryTitle: "Itinerario del evento",
    itinerary: weddingConfig.itinerary.es,
    locationEyebrow: "Ubicación",
    locationTitle: "Como llegar",
    ceremonyLocation: "Ceremonia",
    receptionLocation: "Recepción",
    ceremonyTime: weddingConfig.times.ceremony.es,
    receptionTime: weddingConfig.times.reception.es,
    openMap: "Abrir en Google Maps",
    copyAddress: "Copiar dirección",
    dressEyebrow: "Código de vestir",
    dressTitle: "Etiqueta formal",
    dressDescription:
      "Sugerimos tonos elegantes y cómodos para una celebración de tarde-noche. Reservamos el blanco para la novia.",
    dressNote: weddingConfig.dressCode.notes.es,
    giftsEyebrow: "Regalos",
    giftsTitle: "Tu presencia es nuestro mejor regalo",
    giftsDescription: weddingConfig.gifts.message.es,
    giftsPlaceholder: "Información de regalos próximamente",
    recommendationsEyebrow: "Consejos",
    recommendationsTitle: "Recomendaciones para invitados",
    recommendations: weddingConfig.recommendations.es,
    rsvpEyebrow: "RSVP",
    rsvpTitle: "Confirmación de asistencia",
    rsvpDescription:
      `Confirma si podrás acompañarnos antes del ${weddingConfig.date.rsvpDeadline.es}. Esta información nos ayudará a preparar cada detalle de la celebración.`,
    rsvpForm: {
      description:
        "Completa tus datos y cuéntanos si asistirás. Puedes incluir un mensaje para los novios si lo deseas.",
      fullName: "Nombre completo",
      fullNamePlaceholder: "Tu nombre",
      email: "Correo electrónico",
      emailPlaceholder: "tu@email.com",
      phone: "Teléfono",
      phonePlaceholder: "Tu teléfono",
      attending: "¿Asistirás?",
      attendingYes: "Sí, asistiré",
      attendingNo: "No podré asistir",
      guestsCount: "Acompañantes",
      message: "Mensaje",
      messagePlaceholder: "Escribe un mensaje opcional",
      submit: "Enviar confirmación",
      submitting: "Enviando...",
      success: "Gracias. Tu confirmación fue registrada correctamente.",
      genericError:
        "No pudimos guardar tu confirmación. Inténtalo de nuevo en unos minutos.",
      requiredName: "Escribe tu nombre completo.",
      invalidEmail: "Escribe un correo válido.",
      requiredAttendance: "Selecciona si asistirás.",
      invalidGuests: "El número de acompañantes debe ser 0 o mayor.",
    },
    pdfEyebrow: "Pase digital",
    pdfTitle: "Vista previa del pase PDF",
    pdfDescription:
      "Cada invitado tendrá un pase digital descargable para presentar el día del evento.",
    pdfView: "Ver pase digital",
    pdfDownload: "Descargar pase",
    pdfName: weddingConfig.guest.namePlaceholder.es,
    pdfStatus: weddingConfig.guest.reservedSeatsPlaceholder.es,
    footerText: `Con cariño, ${weddingConfig.couple.displayName.es}`,
    footerNote: "Gracias por formar parte de nuestra historia.",
  },
  en: {
    languageLabel: "Español",
    ariaLanguageLabel: "Switch language to Spanish",
    openInvitation: "Open invitation",
    music: {
      play: "Play",
      pause: "Stop",
    },
    heroEyebrow: "Our wedding",
    heroTitle: weddingConfig.couple.displayName.en,
    brideName: weddingConfig.couple.brideName,
    groomName: weddingConfig.couple.groomName,
    heroSubtitle:
      "With so much joy, we want to share this special day with the people we love most.",
    weddingDate: weddingConfig.date.full.en,
    viewInvitation: "View invitation",
    saveTheDate: "Save the date",
    weddingDay: weddingConfig.date.day,
    monthYear: weddingConfig.date.monthYear.en,
    eventType: "Ceremony and celebration",
    venue: weddingConfig.locations.ceremony.name,
    dateEyebrow: "Date",
    dateTitle: "The celebration is getting closer",
    countdownLabel: "Countdown",
    countdownLabels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      completed: "The celebration has begun.",
    },
    storyEyebrow: "OUR STORY",
    storyTitle: "Our Story",
    storySubtitle: weddingConfig.romanticMessage.en,
    storyPrevious: "Previous photo",
    storyNext: "Next photo",
    storyGoToSlide: "View photo",
    storyImages: [
      "Joselin and Wilmer smiling together.",
      "Joselin and Wilmer sitting by the water.",
      "Joselin kisses Wilmer by the sea.",
      "Joselin and Wilmer in front of a church.",
      "Joselin and Wilmer sharing dinner.",
      "Joselin and Wilmer on a special evening.",
    ],
    lovedOnesEyebrow: "WITH LOVE AND GRATITUDE",
    lovedOnesTitle: "Our parents and witnesses",
    lovedOnesIntro:
      "With joy, we honour those who have accompanied, guided and blessed us on this journey towards our marriage.",
    brideParentsLabel: "Joselin's parents",
    groomParentsLabel: "Wilmer's parents",
    witnessesLabel: "Witnesses",
    witnessesSubtitle: "Godparents",
    messageEyebrow: "Invitation",
    messageTitle: "We would love to celebrate with you",
    bibleQuote: weddingConfig.bibleQuote.en,
    invitationMessage: weddingConfig.romanticMessage.en,
    itineraryEyebrow: "Schedule",
    itineraryTitle: "Event itinerary",
    itinerary: weddingConfig.itinerary.en,
    locationEyebrow: "Location",
    locationTitle: "How to get there",
    ceremonyLocation: "Ceremony",
    receptionLocation: "Reception",
    ceremonyTime: weddingConfig.times.ceremony.en,
    receptionTime: weddingConfig.times.reception.en,
    openMap: "Open in Google Maps",
    copyAddress: "Copy address",
    dressEyebrow: "Dress code",
    dressTitle: "Formal attire",
    dressDescription:
      "We suggest elegant, comfortable outfits for an afternoon-evening celebration. White is reserved for the bride.",
    dressNote: weddingConfig.dressCode.notes.en,
    giftsEyebrow: "Gifts",
    giftsTitle: "Your presence is our favorite gift",
    giftsDescription: weddingConfig.gifts.message.en,
    giftsPlaceholder: "Gift details coming soon",
    recommendationsEyebrow: "Tips",
    recommendationsTitle: "Guest recommendations",
    recommendations: weddingConfig.recommendations.en,
    rsvpEyebrow: "RSVP",
    rsvpTitle: "Attendance confirmation",
    rsvpDescription:
      `Please confirm whether you will join us by ${weddingConfig.date.rsvpDeadline.en}. This helps us prepare every detail of the celebration.`,
    rsvpForm: {
      description:
        "Share your details and let us know if you will attend. You can also leave a message for the couple.",
      fullName: "Full name",
      fullNamePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      phone: "Phone",
      phonePlaceholder: "Your phone",
      attending: "Will you attend?",
      attendingYes: "Yes, I will attend",
      attendingNo: "I cannot attend",
      guestsCount: "Additional guests",
      message: "Message",
      messagePlaceholder: "Write an optional message",
      submit: "Send confirmation",
      submitting: "Sending...",
      success: "Thank you. Your confirmation was saved successfully.",
      genericError:
        "We could not save your confirmation. Please try again in a few minutes.",
      requiredName: "Please enter your full name.",
      invalidEmail: "Please enter a valid email.",
      requiredAttendance: "Please select whether you will attend.",
      invalidGuests: "Additional guests must be 0 or more.",
    },
    pdfEyebrow: "Digital pass",
    pdfTitle: "PDF pass preview",
    pdfDescription:
      "Each guest will have a downloadable digital pass to present on the wedding day.",
    pdfView: "View digital pass",
    pdfDownload: "Download pass",
    pdfName: weddingConfig.guest.namePlaceholder.en,
    pdfStatus: weddingConfig.guest.reservedSeatsPlaceholder.en,
    footerText: `With love, ${weddingConfig.couple.displayName.en}`,
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
    <main className="min-h-screen bg-[#fbf8f1] text-[#183653]">
      <div className="fixed right-4 top-4 z-20 sm:right-6 sm:top-6">
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={t.ariaLanguageLabel}
          className="rounded-full border border-[#e4d5b8] bg-[#fffdf8]/90 px-4 py-2 text-sm font-semibold text-[#173a5e] shadow-lg shadow-[#173a5e]/10 backdrop-blur transition hover:border-[#c9a45c] hover:bg-[#fffdf8]"
        >
          {t.languageLabel}
        </button>
      </div>

      <EnvelopeGate openLabel={t.openInvitation}>
        <HeroSection t={t} />
        <DateSection t={t} />
        <StorySection t={t} />
        <LovedOnesSection t={t} />
        <InvitationMessage t={t} />
        <LocationSection language={language} t={t} />
        <DressCodeSection t={t} />
        <GiftsSection t={t} />
        <RecommendationsSection t={t} />
        <RsvpSection language={language} t={t} />
        {weddingConfig.features.enableDigitalPass ? <PdfPassSection t={t} /> : null}
        <Footer t={t} />
      </EnvelopeGate>
    </main>
  );
}

type Translation = (typeof translations)[Language];

const storyImages = [
  "/images/couple/hero.jpg",
  "/images/couple/gallery-1.jpg",
  "/images/couple/gallery-2.jpg",
  "/images/couple/gallery-3.jpg",
  "/images/couple/gallery-4.jpg",
  "/images/couple/gallery-5.jpg",
];

function HeroSection({ t }: { t: Translation }) {
  return (
    // TODO: Future feature: animated envelope opening interaction.
    <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-7 py-24 sm:px-10 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
      <div className="w-full max-w-xl text-center lg:text-left">
        <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-[#8f7747]">
          {t.heroEyebrow}
        </p>

        <h1 className="font-script text-6xl font-normal leading-[1.15] text-[#173a5e] sm:text-7xl lg:text-8xl">
          <span className="sr-only">{t.heroTitle}</span>
          <span aria-hidden="true" className="block">
            {t.brideName}
          </span>
          <span className="my-2 block text-5xl leading-none text-[#c9a45c] sm:my-3 sm:text-6xl lg:text-7xl">
            &
          </span>
          <span aria-hidden="true" className="block">
            {t.groomName}
          </span>
        </h1>

        <div className="mt-7 flex justify-center">
          <MusicButton labels={t.music} src={weddingConfig.audio.songPath} />
        </div>

        <p className="mx-auto mt-7 max-w-md text-[1.08rem] leading-8 text-[#42566f] lg:mx-0">
          {t.heroSubtitle}
        </p>

        <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">
          <a
            href="#invitation-content"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#173a5e] px-7 text-sm font-semibold text-white shadow-lg shadow-[#173a5e]/20 transition hover:bg-[#244c73] sm:w-auto"
          >
            {t.viewInvitation}
          </a>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#8f7747]">
            {t.weddingDate}
          </p>
        </div>
      </div>

      <InfoCard className="mt-14 w-full max-w-sm rounded-[2rem] p-7 lg:mt-0">
        <div className="rounded-[1.5rem] border border-[#eadcc2] px-7 py-12 text-center">
          <CalendarHeartIcon className="invitation-icon-gold mx-auto mb-8 h-16 w-16 md:h-24 md:w-24" />

          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#8f7747]">
            {t.saveTheDate}
          </p>
          <p className="mt-5 font-script text-6xl font-normal text-[#173a5e]">
            {t.weddingDay}
          </p>
          <p className="mt-1 text-base italic text-[#173a5e]">{t.monthYear}</p>

          <div className="mx-auto my-8 h-px w-24 bg-[#d9bf82]" />

          <p className="text-[1.05rem] leading-8 text-[#42566f]">
            {t.eventType}
            <span className="block font-medium text-[#173a5e]">{t.venue}</span>
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
      id="invitation-content"
      title={t.dateTitle}
      className="bg-[#fffdf8]"
    >
      <InfoCard className="mx-auto max-w-3xl text-center">
        <CalendarHeartIcon className="invitation-icon-gold mx-auto mb-5 h-16 w-16 md:h-24 md:w-24" />
        <p className="text-xl font-medium text-[#173a5e]">
          {t.weddingDate}
        </p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#8f7747]">
          {t.countdownLabel}
        </p>
        <Countdown
          labels={t.countdownLabels}
          targetDate={weddingConfig.date.targetDate}
        />
      </InfoCard>
    </WeddingSection>
  );
}

function StorySection({ t }: { t: Translation }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % storyImages.length);
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const selectSlide = (index: number) => {
    setIsPaused(true);
    setActiveIndex(index);
  };

  const showPrevious = () => {
    setIsPaused(true);
    setActiveIndex(
      (currentIndex) =>
        (currentIndex - 1 + storyImages.length) % storyImages.length,
    );
  };

  const showNext = () => {
    setIsPaused(true);
    setActiveIndex((currentIndex) => (currentIndex + 1) % storyImages.length);
  };

  const handleTouchEnd = (touchEndX: number) => {
    if (touchStartX === null) {
      return;
    }

    const swipeDistance = touchStartX - touchEndX;

    if (Math.abs(swipeDistance) > 48) {
      if (swipeDistance > 0) {
        showNext();
      } else {
        showPrevious();
      }
    }

    setTouchStartX(null);
  };

  return (
    <WeddingSection
      eyebrow={t.storyEyebrow}
      title={t.storyTitle}
      className="bg-[#fbf8f1]"
    >
      <div className="mx-auto max-w-4xl">
        <p className="mx-auto max-w-3xl text-center text-[1.08rem] leading-8 text-[#42566f]">
          {t.storySubtitle}
        </p>

        <InfoCard className="mx-auto mt-10 overflow-hidden rounded-[2rem] p-3 sm:p-4">
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#fffdf8] md:aspect-video"
            onMouseEnter={() => setIsPaused(true)}
            onTouchStart={(event) => {
              setIsPaused(true);
              setTouchStartX(event.changedTouches[0]?.clientX ?? null);
            }}
            onTouchEnd={(event) => {
              handleTouchEnd(event.changedTouches[0]?.clientX ?? 0);
            }}
          >
            {storyImages.map((src, index) => (
              <Image
                key={src}
                alt={t.storyImages[index]}
                className={`object-cover transition-opacity duration-700 ease-out ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
                fill
                priority={index === 0}
                sizes="(min-width: 768px) 896px, calc(100vw - 3.5rem)"
                src={src}
              />
            ))}

            <button
              aria-label={t.storyPrevious}
              className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#eadcc2] bg-[#fffdf8]/85 text-2xl leading-none text-[#173a5e] shadow-lg shadow-[#173a5e]/10 backdrop-blur transition hover:border-[#c9a45c] md:flex"
              onClick={showPrevious}
              type="button"
            >
              &lt;
            </button>
            <button
              aria-label={t.storyNext}
              className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#eadcc2] bg-[#fffdf8]/85 text-2xl leading-none text-[#173a5e] shadow-lg shadow-[#173a5e]/10 backdrop-blur transition hover:border-[#c9a45c] md:flex"
              onClick={showNext}
              type="button"
            >
              &gt;
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {storyImages.map((src, index) => (
              <button
                key={src}
                aria-label={`${t.storyGoToSlide} ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-[#c9a45c]"
                    : "w-2.5 bg-[#d9bf82]/45 hover:bg-[#d9bf82]"
                }`}
                onClick={() => selectSlide(index)}
                type="button"
              />
            ))}
          </div>
        </InfoCard>
      </div>
    </WeddingSection>
  );
}

function LovedOnesSection({ t }: { t: Translation }) {
  const groups = [
    {
      label: t.brideParentsLabel,
      names: weddingConfig.lovedOnes.brideParents,
    },
    {
      label: t.groomParentsLabel,
      names: weddingConfig.lovedOnes.groomParents,
    },
    {
      label: t.witnessesLabel,
      names: weddingConfig.lovedOnes.witnesses,
      subtitle: t.witnessesSubtitle,
    },
  ];

  return (
    <WeddingSection
      eyebrow={t.lovedOnesEyebrow}
      title={t.lovedOnesTitle}
      className="bg-[#fffdf8]"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mx-auto max-w-3xl text-center text-[1.08rem] leading-8 text-[#42566f]">
          {t.lovedOnesIntro}
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {groups.map((group) => (
            <InfoCard key={group.label} className="text-center">
              <HeartShineIcon className="invitation-icon-gold mx-auto mb-5 h-14 w-14 md:h-16 md:w-16" />
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8f7747]">
                {group.label}
              </p>
              {group.subtitle ? (
                <p className="mt-2 font-script text-4xl font-normal text-[#c9a45c]">
                  {group.subtitle}
                </p>
              ) : null}
              <div className="mt-5 space-y-3">
                {group.names.map((name) => (
                  <p
                    key={name}
                    className="text-[1.08rem] font-medium leading-7 text-[#173a5e]"
                  >
                    {name}
                  </p>
                ))}
              </div>
            </InfoCard>
          ))}
        </div>
      </div>
    </WeddingSection>
  );
}

function InvitationMessage({ t }: { t: Translation }) {
  return (
    <WeddingSection
      eyebrow={t.messageEyebrow}
      title={t.messageTitle}
      className="bg-[#fbf8f1]"
    >
      <p className="mx-auto max-w-3xl text-center text-[1.08rem] italic leading-8 text-[#42566f]">
        {t.bibleQuote}
      </p>
      <p className="mx-auto mt-6 max-w-3xl text-center text-[1.08rem] leading-8 text-[#42566f]">
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
      className="bg-[#fffdf8]"
    >
      <div className="mx-auto grid max-w-3xl gap-5">
        {t.itinerary.map((item) => (
          <InfoCard
            key={`${item.time}-${item.title}`}
            className="flex items-center gap-6"
          >
            <ClockIcon className="invitation-icon-gold h-16 w-16 shrink-0 md:h-20 md:w-20" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8f7747]">
                {item.time}
              </p>
              <p className="mt-1 text-base font-medium text-[#173a5e]">
                {item.title}
              </p>
            </div>
          </InfoCard>
        ))}
      </div>
    </WeddingSection>
  );
}

function LocationSection({
  language,
  t,
}: {
  language: Language;
  t: Translation;
}) {
  const locations = [
    {
      address: weddingConfig.locations.ceremony.address,
      label: t.ceremonyLocation,
      name: weddingConfig.locations.ceremony.name,
      time: t.ceremonyTime,
      url: weddingConfig.locations.ceremony.googleMapsUrl,
    },
    {
      address: weddingConfig.locations.reception.address,
      label: t.receptionLocation,
      name: weddingConfig.locations.reception.name,
      time: t.receptionTime,
      url: weddingConfig.locations.reception.googleMapsUrl,
    },
  ];

  return (
    <WeddingSection
      eyebrow={t.locationEyebrow}
      title={t.locationTitle}
      className="bg-[#fbf8f1]"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {locations.map((location) => (
          <InfoCard key={location.label}>
            <MapLocationIcon className="invitation-icon-fill-gold mx-auto mb-5 h-16 w-16 md:h-24 md:w-24" />
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8f7747]">
              {location.label}
            </p>
            <h3 className="mt-3 text-xl font-medium text-[#173a5e]">
              {location.name}
            </h3>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8f7747]">
              {location.time}
            </p>
            <p className="mt-3 text-[1.05rem] leading-8 text-[#42566f]">
              {location.address[language]}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-[#173a5e] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#244c73]"
                href={location.url}
                rel="noreferrer"
                target="_blank"
              >
                {t.openMap}
              </a>
              <button className="rounded-full border border-[#d9bf82] px-5 py-3 text-sm font-semibold text-[#173a5e] transition hover:border-[#c9a45c]">
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
      className="bg-[#fffdf8]"
    >
      <InfoCard className="mx-auto max-w-3xl text-center">
        <DressCodeIcon className="invitation-icon-gold mx-auto mb-5 h-24 w-32 md:h-28 md:w-40" />
        <p className="text-[1.08rem] leading-8 text-[#42566f]">
          {t.dressDescription}
        </p>
        <p className="mt-5 rounded-full bg-[#fbf8f1] px-5 py-3 text-sm font-medium text-[#173a5e]">
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
      className="bg-[#fbf8f1]"
    >
      <InfoCard className="mx-auto max-w-3xl text-center">
        <HeartShineIcon className="invitation-icon-gold mx-auto mb-5 h-16 w-16 md:h-24 md:w-24" />
        <p className="text-[1.08rem] leading-8 text-[#42566f]">
          {t.giftsDescription}
        </p>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#8f7747]">
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
      className="bg-[#fffdf8]"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {t.recommendations.map((recommendation, index) => {
          const RecommendationIcon = index === 1 ? MessageReplyIcon : ClockIcon;

          return (
            <InfoCard key={recommendation} className="flex gap-5">
              <RecommendationIcon className="invitation-icon-gold mt-0.5 h-12 w-12 shrink-0 md:h-14 md:w-14" />
              <p className="text-[1.05rem] leading-8 text-[#42566f]">
                {recommendation}
              </p>
            </InfoCard>
          );
        })}
      </div>
    </WeddingSection>
  );
}

function RsvpSection({
  language,
  t,
}: {
  language: Language;
  t: Translation;
}) {
  return (
    <WeddingSection
      eyebrow={t.rsvpEyebrow}
      title={t.rsvpTitle}
      className="bg-[#fbf8f1]"
    >
      <InfoCard className="mx-auto max-w-3xl">
        <MessageReplyIcon className="invitation-icon-gold mx-auto mb-5 h-16 w-16 md:h-24 md:w-24" />
        <p className="text-[1.08rem] leading-8 text-[#42566f]">
          {t.rsvpDescription}
        </p>
        <div className="mt-8">
          <RsvpForm language={language} text={t.rsvpForm} />
        </div>
      </InfoCard>
    </WeddingSection>
  );
}

function PdfPassSection({ t }: { t: Translation }) {
  return (
    <WeddingSection
      eyebrow={t.pdfEyebrow}
      title={t.pdfTitle}
      className="bg-[#fffdf8]"
    >
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-[1fr_0.9fr] md:items-center">
        <p className="text-center text-[1.08rem] leading-8 text-[#42566f] md:text-left">
          {t.pdfDescription}
        </p>

        <InfoCard className="rounded-[2rem]">
          <div className="rounded-[1.5rem] border border-dashed border-[#d9bf82] bg-[#fbf8f1] p-7">
            <div className="flex items-center justify-between gap-4">
              <CardEnvelopeIcon className="invitation-icon-fill-gold h-16 w-16 md:h-24 md:w-24" />
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#8f7747]">
                PDF
              </p>
            </div>
            <p className="mt-8 text-sm text-[#8f7747]">{t.pdfName}</p>
            <p className="mt-2 font-script text-5xl font-normal leading-none text-[#173a5e]">
              {t.heroTitle}
            </p>
            <p className="mt-5 rounded-full bg-[#fffdf8] px-4 py-3 text-center text-sm font-medium text-[#173a5e]">
              {t.pdfStatus}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-[#173a5e] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#244c73]"
                href={weddingConfig.pdf.passPath}
                rel="noreferrer"
                target="_blank"
              >
                {t.pdfView}
              </a>
              <a
                className="rounded-full border border-[#d9bf82] bg-[#fffdf8] px-5 py-3 text-center text-sm font-semibold text-[#173a5e] transition hover:border-[#c9a45c]"
                download
                href={weddingConfig.pdf.passPath}
              >
                {t.pdfDownload}
              </a>
            </div>
          </div>
        </InfoCard>
      </div>
    </WeddingSection>
  );
}

function Footer({ t }: { t: Translation }) {
  return (
    <footer className="bg-[#173a5e] px-6 py-12 text-center text-white sm:px-10">
      <WeddingRingsIcon className="invitation-icon-gold mx-auto mb-4 h-16 w-16 md:h-24 md:w-24" />
      <p className="font-script text-4xl font-normal">{t.footerText}</p>
      <p className="mt-3 text-sm text-white/70">{t.footerNote}</p>
      <p className="mt-8 text-xs text-white/60">
        Desarrollado con <span className="text-[#c9a45c]">♥</span> por{" "}
        <a
          aria-label="Visit VicStack portfolio"
          className="font-medium text-[#c9a45c]/85 transition hover:text-[#c9a45c] hover:underline"
          href="https://portfolio.vicstack.uk"
          rel="noopener noreferrer"
          target="_blank"
        >
          VicStack
        </a>
      </p>
    </footer>
  );
}
