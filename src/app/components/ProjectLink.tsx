import { cn } from "./ui/utils";

interface ProjectLinkProps {
  href: string;
  label: string;
  className?: string;
}

function ProjectLink({ href, label, className }: ProjectLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-3 py-3 px-4",
        "border border-border",
        "text-foreground/80 hover:text-foreground hover:bg-foreground/[0.03]",
        "transition-all duration-200 group",
        "rounded-sm w-fit",
        className
      )}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 12 12"
        fill="none"
        className="shrink-0 text-muted-foreground group-hover:text-accent transition-colors duration-200"
      >
        <path
          d="M5 1H2C1.44772 1 1 1.44772 1 2V10C1 10.5523 1.44772 11 2 11H10C10.5523 11 11 10.5523 11 10V7"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path d="M7 1H11V5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M11 1L5.5 6.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      <span
        className="flex-1 group-hover:translate-x-0.5 transition-transform duration-200"
        style={{ fontSize: 'var(--text-body)' }}
      >
        {label}
      </span>
    </a>
  );
}

export { ProjectLink };
