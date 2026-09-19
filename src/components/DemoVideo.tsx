import RibbonTag from "./RibbonTag";

export default function DemoVideo({ url }: { url: string }) {
  return (
    <div className="widget-card widget-cream relative p-4 sm:p-5">
      <RibbonTag color="var(--color-ink)" rotate={-2} className="absolute -top-3 left-4 z-10">
        90-second walkthrough
      </RibbonTag>
      <div className="mt-2 aspect-video overflow-hidden rounded-xl bg-ink">
        <iframe
          src={url}
          title="Project demo walkthrough"
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
