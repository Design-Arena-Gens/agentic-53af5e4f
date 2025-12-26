import './globals.css';

export const metadata = {
  title: 'Cartoon Script Generator',
  description: 'A lighthearted cartoon script to spark smiles.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
