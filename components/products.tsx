'use client';

import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';

export function Products() {
  const t = useTranslations('products');

  return (
    <section
      id='products'
      className='section-shell scroll-mt-24 border-t border-white/8'
    >
      <div className='mx-auto max-w-7xl'>
        <div className='section-heading-grid'>
          <div>
            <p className='section-kicker'>
              <span>03</span> / {t('title')}
            </p>
            <h2 className='section-title'>
              {t('displayTitle')}
              <span className='text-primary'>.</span>
            </h2>
          </div>
          <p className='section-lede'>{t('subtitle')}</p>
        </div>

        {PRODUCTS.length === 0 ? (
          <p className='mt-14 rounded-3xl border border-white/10 bg-card p-7 text-sm text-muted-foreground md:p-9'>
            {t('empty')}
          </p>
        ) : (
          <div className='mt-14 grid gap-4 md:grid-cols-2'>
            {PRODUCTS.map((product) => {
              const name = t(`apps.${product.id}.name`);
              const description = t(`apps.${product.id}.description`);

              return (
                <a
                  key={product.id}
                  href={product.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`${name}: ${t('visitProduct')}. ${t('opensInNewTab')}`}
                  className='group flex h-full min-h-72 flex-col rounded-3xl border border-white/10 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:p-9'
                >
                  <div className='flex items-start justify-end'>
                    <span className='grid size-12 shrink-0 place-items-center rounded-full border border-white/10 text-muted-foreground transition-all group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground'>
                      <ArrowUpRight className='size-5' aria-hidden='true' />
                    </span>
                  </div>

                  <h3 className='mt-8 font-heading text-3xl font-semibold tracking-[-0.04em] text-foreground'>
                    {name}
                  </h3>
                  <p className='mt-3 max-w-xl text-sm leading-6 text-muted-foreground'>
                    {description}
                  </p>

                  <div className='mt-auto flex flex-wrap items-center gap-2 pt-8'>
                    {product.platforms.map((platform) => (
                      <span key={platform} className='project-tag'>
                        {t(`metadata.platforms.${platform}`)}
                      </span>
                    ))}
                    <span className='project-tag'>
                      {t(`metadata.statuses.${product.status}`)}
                    </span>
                    <span className='ml-auto font-mono text-[10px] uppercase tracking-[0.16em] text-primary transition-colors group-hover:text-foreground'>
                      {t('visitProduct')}
                    </span>
                  </div>
                  <span className='sr-only'>{t('opensInNewTab')}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
