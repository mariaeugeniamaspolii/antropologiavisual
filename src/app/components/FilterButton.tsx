interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className="transition-all duration-200"
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.72rem',
        letterSpacing: '0.04em',
        padding: '5px 14px',
        border: '1px solid',
        borderColor: active ? 'var(--foreground)' : 'var(--border)',
        backgroundColor: active ? 'var(--foreground)' : 'transparent',
        color: active ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
        borderRadius: 'var(--radius)',
      }}
    >
      {label}
    </button>
  );
}
