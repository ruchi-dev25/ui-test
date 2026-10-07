import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, Grid, ChevronLeft, ChevronRight, Maximize2, X, Sparkles } from "lucide-react";
import RibbonTag from "./RibbonTag";

export type DeckCard = {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  badge?: string;
  image: string;
  annotation: string;
  details: string;
};

export default function CardDeckGallery({
  cards,
  liveUrl = "https://pixnlabs.com/",
}: {
  cards: DeckCard[];
  liveUrl?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"deck" | "grid">("deck");
  const [lightboxCard, setLightboxCard] = useState<DeckCard | null>(null);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="my-10">
      {/* Header bar with controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-deepink/15 pb-4">
        <div className="flex items-center gap-2">
          <RibbonTag color="var(--color-sage)" rotate={-1}>
            Live Product Artifacts
          </RibbonTag>
          <span className="font-hand text-lg text-ink/70">
            from <strong className="text-ink">pixnlabs.com</strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-parchment shadow-sm transition hover:-translate-y-0.5 hover:bg-deepink"
            >
              <Sparkles className="h-3 w-3 text-butter" />
              Visit pixnlabs.com <ExternalLink className="h-3 w-3" />
            </a>
          )}

          <div className="inline-flex rounded-lg border border-deepink/20 bg-white/70 p-0.5">
            <button
              type="button"
              onClick={() => setViewMode("deck")}
              className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition ${
                viewMode === "deck"
                  ? "bg-ink text-parchment shadow-xs"
                  : "text-ink/60 hover:text-ink"
              }`}
              title="Deck Stack View"
            >
              <Layers className="h-3.5 w-3.5" /> Deck
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium transition ${
                viewMode === "grid"
                  ? "bg-ink text-parchment shadow-xs"
                  : "text-ink/60 hover:text-ink"
              }`}
              title="Grid Gallery View"
            >
              <Grid className="h-3.5 w-3.5" /> Grid
            </button>
          </div>
        </div>
      </div>

      {/* View Mode: Interactive Stacked Card Deck */}
      {viewMode === "deck" ? (
        <div className="relative mt-8 select-none">
          <div className="relative mx-auto flex min-h-[440px] max-w-2xl items-center justify-center py-6 sm:min-h-[500px]">
            {cards.map((card, idx) => {
              // Calculate offset from active card
              const offset = (idx - activeIndex + cards.length) % cards.length;
              const isFront = offset === 0;
              const isNext = offset === 1;

              // Visual stacking rotations and transforms
              const rotation = isFront ? 0 : isNext ? 4 : -4;
              const translateX = isFront ? 0 : isNext ? 28 : -28;
              const translateY = isFront ? 0 : 12;
              const scale = isFront ? 1 : 0.94;
              const zIndex = isFront ? 30 : 20 - offset;
              const opacity = isFront ? 1 : 0.72;

              return (
                <motion.div
                  key={card.id}
                  animate={{
                    x: translateX,
                    y: translateY,
                    rotate: rotation,
                    scale,
                    opacity,
                    zIndex,
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 24 }}
                  onClick={() => setActiveIndex(idx)}
                  className={`absolute top-4 w-full max-w-xl cursor-pointer transition-shadow ${
                    isFront ? "shadow-2xl" : "shadow-lg hover:opacity-90"
                  }`}
                >
                  <div className="aged-paper relative rounded-xl border-2 border-deepink/25 bg-parchment p-3.5 shadow-md sm:p-5">
                    {/* Washi Tape / Pin Decor */}
                    <div
                      className="absolute -top-3 left-1/2 h-5 w-24 -translate-x-1/2 -rotate-2 rounded-xs shadow-xs"
                      style={{
                        background:
                          idx === 0
                            ? "repeating-linear-gradient(45deg, oklch(0.9 0.05 70 / 0.8) 0 8px, oklch(0.95 0.03 70 / 0.8) 8px 16px)"
                            : idx === 1
                            ? "repeating-linear-gradient(90deg, oklch(0.88 0.05 300 / 0.75) 0 6px, oklch(0.94 0.03 300 / 0.75) 6px 12px)"
                            : "repeating-linear-gradient(45deg, oklch(0.88 0.06 140 / 0.8) 0 8px, oklch(0.94 0.03 140 / 0.8) 8px 16px)",
                      }}
                    />

                    {/* Screenshot Frame */}
                    <div className="group relative overflow-hidden rounded-lg border border-deepink/15 bg-white shadow-inner">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.015]"
                        loading="lazy"
                      />
                      {isFront && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxCard(card);
                          }}
                          className="absolute right-2.5 bottom-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-ink/80 text-parchment backdrop-blur transition hover:bg-deepink"
                          title="Expand screenshot"
                        >
                          <Maximize2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    {/* Card Meta & Caption */}
                    <div className="mt-3.5 flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-sage/20 px-2 py-0.5 text-[11px] font-bold text-sage uppercase tracking-wider">
                            {card.tag}
                          </span>
                          {card.badge && (
                            <span className="rounded bg-lavender/30 px-2 py-0.5 text-[11px] font-semibold text-deepink">
                              {card.badge}
                            </span>
                          )}
                        </div>
                        <h3 className="font-display mt-1.5 text-lg font-bold text-ink">
                          {card.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-ink/75 sm:text-sm">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Handwritten annotation note */}
                    <div className="mt-3 border-t border-dashed border-deepink/15 pt-2.5">
                      <p className="font-hand text-base text-deepink/90 sm:text-lg">
                        ✍️ {card.annotation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Controls below deck */}
          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prevCard}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-deepink/20 bg-white/80 text-ink shadow-sm transition hover:bg-white hover:text-deepink"
              aria-label="Previous card"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-1.5">
              {cards.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIndex === i ? "w-7 bg-sage" : "w-2.5 bg-deepink/20 hover:bg-deepink/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextCard}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-deepink/20 bg-white/80 text-ink shadow-sm transition hover:bg-white hover:text-deepink"
              aria-label="Next card"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : (
        /* View Mode: Gallery Grid */
        <div className="mt-8 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={card.id}
              style={{ rotate: `${(i % 2 === 0 ? -1 : 1) * 1.2}deg` }}
              className="aged-paper flex flex-col rounded-xl border border-deepink/20 p-4 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Photo */}
              <div
                className="group relative cursor-pointer overflow-hidden rounded-lg border border-deepink/15 bg-white shadow-inner"
                onClick={() => setLightboxCard(card)}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink shadow">
                    Click to expand
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-3 flex flex-1 flex-col">
                <span className="self-start rounded bg-sage/20 px-2 py-0.5 text-[10px] font-bold text-sage uppercase tracking-wider">
                  {card.tag}
                </span>
                <h4 className="font-display mt-1 text-base font-bold text-ink">
                  {card.title}
                </h4>
                <p className="mt-1 text-xs text-ink/75">
                  {card.subtitle}
                </p>
                <p className="font-hand mt-auto pt-3 text-sm text-deepink">
                  ✍️ {card.annotation}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Lightbox for full screenshot view */}
      <AnimatePresence>
        {lightboxCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxCard(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-parchment shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setLightboxCard(null)}
                className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 text-parchment transition hover:bg-deepink"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="max-h-[72vh] overflow-y-auto bg-black/5 p-4 text-center">
                <img
                  src={lightboxCard.image}
                  alt={lightboxCard.title}
                  className="mx-auto h-auto max-h-[68vh] w-auto rounded-lg shadow-md"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="rounded bg-sage/20 px-2 py-0.5 text-xs font-bold text-sage uppercase">
                      {lightboxCard.tag}
                    </span>
                    <h3 className="font-display mt-1 text-xl font-bold text-ink">
                      {lightboxCard.title}
                    </h3>
                  </div>
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-ink px-4 py-2 text-xs font-semibold text-parchment hover:bg-deepink"
                    >
                      Open pixnlabs.com <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
                <p className="mt-2 text-sm text-ink/80">
                  {lightboxCard.details}
                </p>
                <p className="font-hand mt-3 text-base text-deepink">
                  ✍️ {lightboxCard.annotation}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
