import { FadeIn } from './FadeIn';

interface Stat {
  num: string;
  label: string;
}

interface StatsHighlightProps {
  stats: Stat[];
  description: string;
}

export function StatsHighlight({ stats, description }: StatsHighlightProps) {
  return (
    <FadeIn className="mt-20 pt-12 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-baseline">
        <div className="flex flex-col gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <span
                className="text-foreground shrink-0"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </span>
              <span
                className="text-muted-foreground"
                style={{ fontSize: '0.8rem' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <p
          className="text-muted-foreground leading-relaxed max-w-lg"
          style={{ fontSize: 'var(--text-body)', lineHeight: 1.8 }}
        >
          {description}
        </p>
      </div>
    </FadeIn>
  );
}
