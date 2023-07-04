import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/DarkModeToggle/ThemeContext';
import AuthProvider from '@/components/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Js Case | Next Js developers',
  description: 'Js Case - team developers using Next Js framework. ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
