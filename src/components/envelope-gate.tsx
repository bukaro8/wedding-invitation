"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EnvelopeClosedIcon, EnvelopeOpenIcon, WaxSealIcon } from "@/components/icons";

type EnvelopeGateProps = {
  children: React.ReactNode;
  openLabel: string;
};

export function EnvelopeGate({ children, openLabel }: EnvelopeGateProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const openInvitation = () => {
    if (isOpening || isOpen) {
      return;
    }

    setIsOpening(true);

    if (shouldReduceMotion) {
      setIsOpen(true);
      return;
    }

    window.setTimeout(() => {
      setIsOpen(true);
    }, 1200);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen ? (
          <motion.section
            aria-label={openLabel}
            className="grid min-h-screen place-items-center overflow-hidden bg-[#fbf8f1] px-6 py-20 text-center text-[#183653]"
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 1.04, y: -18 }
            }
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
              <motion.div
                animate={
                  isOpening && !shouldReduceMotion
                    ? { opacity: 0, scale: 0.92, y: 16 }
                    : { opacity: 1, scale: 1, y: 0 }
                }
                className="invitation-icon-fill-gold"
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                <EnvelopeClosedIcon className="h-52 w-52 sm:h-64 sm:w-64" />
              </motion.div>

              <motion.div
                animate={
                  isOpening && !shouldReduceMotion
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.94, y: 14 }
                }
                className="invitation-icon-fill-gold absolute top-0"
                initial={{ opacity: 0, scale: 0.94, y: 14 }}
                transition={{ delay: 0.34, duration: 0.5, ease: "easeOut" }}
              >
                <EnvelopeOpenIcon className="h-52 w-52 sm:h-64 sm:w-64" />
              </motion.div>

              <motion.button
                aria-label={openLabel}
                className="group relative -mt-20 inline-flex flex-col items-center gap-3 rounded-full focus:outline-none focus:ring-4 focus:ring-[#c9a45c]/30"
                disabled={isOpening}
                onClick={openInvitation}
                type="button"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                <span className="invitation-icon-fill-gold grid h-24 w-24 place-items-center rounded-full bg-[#fffdf8] shadow-xl shadow-[#173a5e]/15 transition group-hover:shadow-[#173a5e]/20">
                  <WaxSealIcon className="h-20 w-20" />
                </span>
                <span className="rounded-full border border-[#e4d5b8] bg-[#fffdf8]/90 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#173a5e] shadow-lg shadow-[#173a5e]/10">
                  {openLabel}
                </span>
              </motion.button>
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>

      {isOpen ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : null}
    </>
  );
}
