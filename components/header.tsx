'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/language-switcher';

const sectionIds = [
  'about',
  'tech-stack',
  'products',
  'projects',
  'contact',
] as const;

export function Header() {
  const t = useTranslations('navigation');
  const heroT = useTranslations('hero');
  const accessibilityT = useTranslations('accessibility');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileMenuItemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const navigation = [
    { id: 'about', label: t('about') },
    { id: 'tech-stack', label: t('techStack') },
    { id: 'products', label: t('products') },
    { id: 'projects', label: t('projects') },
    { id: 'contact', label: t('contact') },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: '-28% 0px -62% 0px', threshold: [0, 0.2, 0.5, 0.8] },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const closeMobileMenu = useCallback((restoreFocus = false) => {
    setIsMobileMenuOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => menuToggleRef.current?.focus());
    }
  }, []);

  const getScrollBehavior = () => (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  );

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const frame = requestAnimationFrame(() => mobileMenuItemRefs.current[0]?.focus());
    const handleDocumentKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeMobileMenu(true);
      }
    };

    document.addEventListener('keydown', handleDocumentKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, [closeMobileMenu, isMobileMenuOpen]);

  const scrollToSection = (sectionId: string, restoreMenuFocus = false) => {
    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const hash = `#${sectionId}`;
    if (window.location.hash !== hash) {
      window.history.pushState(null, '', hash);
    }

    target.scrollIntoView({ behavior: getScrollBehavior() });
    closeMobileMenu(restoreMenuFocus);
  };

  return (
    <header className='fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5'>
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 md:px-5 ${
          isScrolled || isMobileMenuOpen
            ? 'border border-white/10 bg-[#07101d]/90 shadow-2xl shadow-black/20 backdrop-blur-xl'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: getScrollBehavior() })}
          className='group flex items-center gap-3 text-left'
          aria-label={accessibilityT('home')}
        >
          <span className='grid size-9 place-items-center rounded-xl border border-primary/30 bg-primary/10 font-heading text-sm font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground'>
            AV
          </span>
          <span className='hidden sm:block'>
            <span className='block font-heading text-sm font-semibold leading-none text-foreground'>
              Anibal Ventura
            </span>
            <span className='mt-1 block text-[10px] uppercase tracking-[0.18em] text-muted-foreground'>
              {heroT('title')}
            </span>
          </span>
        </button>

        <nav
          aria-label={accessibilityT('primaryNavigation')}
          className='hidden items-center gap-1 rounded-xl border border-white/8 bg-white/[0.025] p-1 md:flex'
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(item.id);
              }}
              className={`rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                activeSection === item.id
                  ? 'bg-white/10 text-foreground'
                  : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
              }`}
              aria-current={activeSection === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className='flex items-center gap-1.5'>
          <LanguageSwitcher />
          <Button
            onClick={() => scrollToSection('contact')}
            className='hidden rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 lg:inline-flex'
          >
            {t('letsTalk')}
            <ArrowUpRight className='ml-1.5 size-4' />
          </Button>
          <Button
            ref={menuToggleRef}
            variant='ghost'
            size='icon'
            onClick={() => (isMobileMenuOpen ? closeMobileMenu(true) : setIsMobileMenuOpen(true))}
            className='rounded-xl md:hidden'
            aria-label={isMobileMenuOpen ? accessibilityT('closeMobileMenu') : accessibilityT('openMobileMenu')}
            aria-expanded={isMobileMenuOpen}
            aria-controls='mobile-primary-navigation'
          >
            {isMobileMenuOpen ? (
              <X className='size-5' />
            ) : (
              <Menu className='size-5' />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav
          id='mobile-primary-navigation'
          aria-label={accessibilityT('mobileNavigation')}
          className='mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#07101d]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden'
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              ref={(element) => {
                mobileMenuItemRefs.current[navigation.indexOf(item)] = element;
              }}
              href={`#${item.id}`}
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(item.id, true);
              }}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors ${
                activeSection === item.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground hover:bg-white/5'
              }`}
              aria-current={activeSection === item.id ? 'location' : undefined}
            >
              {item.label}
              <span
                aria-hidden
                className='font-mono text-[10px] text-muted-foreground'
              >
                0{navigation.findIndex((entry) => entry.id === item.id) + 1}
              </span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
