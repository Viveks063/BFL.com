import React, { useState, useRef, useLayoutEffect, type ReactElement } from 'react';

export type NavItem = {
  id: string | number;
  icon: ReactElement<{ className?: string }>;
  label?: string;
  onClick?: () => void;
};

type LimelightNavProps = {
  items: NavItem[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  limelightClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
};

export const LimelightNav = ({
  items,
  defaultActiveIndex = 0,
  onTabChange,
  className,
  limelightClassName,
  iconContainerClassName,
  iconClassName,
}: LimelightNavProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (items.length === 0) return;

    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];

    if (limelight && activeItem) {
      const newLeft = activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2;
      limelight.style.left = `${newLeft}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50);
      }
    }
  }, [activeIndex, isReady, items]);

  if (items.length === 0) return null;

  const handleItemClick = (index: number, itemOnClick?: () => void) => {
    setActiveIndex(index);
    onTabChange?.(index);
    itemOnClick?.();
  };

  return (
    <nav className={`relative inline-flex items-center h-12 rounded-xl px-1 ${className}`}>
      {items.map(({ id, icon, label, onClick }, index) => (
        <a
          key={id}
          ref={(el: HTMLAnchorElement | null) => { navItemRefs.current[index] = el; }}
          className={`relative z-20 flex h-full cursor-pointer items-center justify-center px-4 ${iconContainerClassName || ''}`}
          onClick={() => handleItemClick(index, onClick)}
          aria-label={label}
        >
          {React.isValidElement(icon)
            ? React.cloneElement(icon, {
                className: `w-5 h-5 transition-opacity duration-200 ease-in-out ${
                  activeIndex === index ? 'opacity-100' : 'opacity-40'
                } ${(icon.props as { className?: string }).className || ''} ${iconClassName || ''}`,
              })
            : icon}
        </a>
      ))}

      <div
        ref={limelightRef}
        className={`absolute top-0 z-10 w-10 h-[4px] rounded-full bg-white shadow-[0_40px_12px_rgba(255,255,255,0.6)] ${
          isReady ? 'transition-[left] duration-400 ease-in-out' : ''
        } ${limelightClassName || ''}`}
        style={{ left: '-999px' }}
      >
        <div className="absolute left-[-30%] top-[4px] w-[160%] h-12 [clip-path:polygon(5%_100%,25%_0,75%_0,95%_100%)] bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />
      </div>
    </nav>
  );
};
