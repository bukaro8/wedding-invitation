-- CreateTable
CREATE TABLE "Rsvp" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "attending" BOOLEAN NOT NULL,
    "guestsCount" INTEGER NOT NULL DEFAULT 0,
    "message" TEXT,
    "language" TEXT NOT NULL DEFAULT 'es',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rsvp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Rsvp_attending_idx" ON "Rsvp"("attending");

-- CreateIndex
CREATE INDEX "Rsvp_language_idx" ON "Rsvp"("language");

-- CreateIndex
CREATE INDEX "Rsvp_createdAt_idx" ON "Rsvp"("createdAt");
