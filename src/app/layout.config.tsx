import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <div style={{ 
          width: '24px', 
          height: '24px', 
          borderRadius: '50%', 
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Image
            src="/images/phoenix_app_icon.png"
            alt="Logo"
            width={24}
            height={24}
            style={{ objectFit: 'cover' }}
          />
        </div>
        Phoenix EEW
      </>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};