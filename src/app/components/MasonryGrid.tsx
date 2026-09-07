import { type ReactNode } from 'react';

function splitIntoColumns<T>(items: T[], numCols: number): T[][] {
  const columns: T[][] = Array.from({ length: numCols }, () => []);
  items.forEach((item, i) => {
    columns[i % numCols].push(item);
  });
  return columns;
}

interface MasonryGridProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
}

export function MasonryGrid<T>({ items, renderItem, className = '' }: MasonryGridProps<T>) {
  const cols1 = splitIntoColumns(items, 1);
  const cols2 = splitIntoColumns(items, 2);
  const cols3 = splitIntoColumns(items, 3);

  const gap = 'gap-8 md:gap-10';
  const colClass = 'flex flex-col';

  return (
    <>
      {/* Mobile — 1 column */}
      <div className={`flex flex-col ${gap} md:hidden ${className}`}>
        {cols1[0].map((item, i) => (
          <div key={i}>{renderItem(item, i)}</div>
        ))}
      </div>

      {/* Tablet — 2 columns */}
      <div className={`hidden md:flex lg:hidden ${gap} ${className}`}>
        {cols2.map((col, colIndex) => (
          <div key={colIndex} className={`${colClass} ${gap} flex-1`}>
            {col.map((item, i) => (
              <div key={i}>{renderItem(item, colIndex * Math.ceil(items.length / 2) + i)}</div>
            ))}
          </div>
        ))}
      </div>

      {/* Desktop — 3 columns */}
      <div className={`hidden lg:flex ${gap} ${className}`}>
        {cols3.map((col, colIndex) => (
          <div key={colIndex} className={`${colClass} ${gap} flex-1`}>
            {col.map((item, i) => (
              <div key={i}>{renderItem(item, colIndex * Math.ceil(items.length / 3) + i)}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
