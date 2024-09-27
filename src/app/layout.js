import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import toast, { Toaster } from 'react-hot-toast';
import AuthProvider from '@/Components/AuthProvider';
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Shayan Mart',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <AuthProvider>
          <Navbar></Navbar>
          <div className="max-w-7xl mx-auto pl-3 lg:pl-0">{children}</div>
          <Toaster />
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  );
}
