import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-sky-900 text-white p-5'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
