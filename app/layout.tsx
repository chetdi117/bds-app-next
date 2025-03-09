import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@styles/global.scss';
import NavbarComponent from '@components/nav';

export const metadata: Metadata = {
  title: 'Trang rao bặt Nhà cửa uy tính',
  description: 'Bds uy tinh lắm',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/images/symbol-only.svg"
          type="image/svg+xml"
        />
      </head>
      <body>
        <NavbarComponent />
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
