import './globals.css'
import NavLinkRow from './components/link_row';
import Footer from './components/footer';


export const metadata = {
  title: 'Jonathan Gao 🌟',
  description: "I'm a Masters student in computer science at the University of Illinois at Urbana-Champaign with a focus in AI/ML.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className='w-full max-w-mx mx-auto overflow-auto'>
          <NavLinkRow />
          {children}
          
          <Footer />
        </div>
      </body>
    </html>
  )
}
