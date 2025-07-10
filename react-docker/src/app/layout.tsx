import './globals.css'
import NavLinkRow from './components/link_row';
import Footer from './components/footer';


export const metadata = {
  title: 'Jonathan Gao',
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
        <meta name="apple-mobile-web-app-title" content="Jonathan Gao" />
        
        <meta property="og:title" content="Jonathan Gao" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/propic.jpg" /> {/* TODO: fix previews */}
        <meta property="og:url" content="https://jontgao.github.io/" />
      </head>
      <body>
        <div className='w-full max-w-mx mx-auto overflow-hidden'>
          <NavLinkRow />
          {children}
          
          <Footer />
        </div>
      </body>
    </html>
  )
}
