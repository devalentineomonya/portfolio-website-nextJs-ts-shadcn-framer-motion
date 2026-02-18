interface EmbeddedVideoProps {
  src: string;
  title?: string;
}

export function EmbeddedVideo({
  src,
  title = "Embedded video",
}: EmbeddedVideoProps) {
  const isYouTube = src.includes("youtube.com") || src.includes("youtu.be");
  const embedUrl = isYouTube
    ? src
        .replace("watch?v=", "embed/")
        .replace("youtu.be/", "youtube.com/embed/")
    : src;

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
      <div className="relative aspect-video">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      {title && title !== "Embedded video" && (
        <p className="border-t border-zinc-200 bg-zinc-50 px-4 py-2 text-center text-sm text-muted-foreground dark:border-zinc-800 dark:bg-zinc-900">
          {title}
        </p>
      )}
    </div>
  );
}
