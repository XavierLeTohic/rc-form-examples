import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html>
        <Head>
          <title>rc-form exemples</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`

            form {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                flex-direction: column;
            }

            input {
                transition: 250ms;
                border: 2px solid #dadada;
                border-radius: 3px;
                height: 30px;
                text-indent: 10px;
                margin-bottom: 20px;
            }

            input:focus {
              border: 2px solid #4e7ae4;
            }

            button {
              color: white;
              background-color: #4e7ae4;
              height: 38px;
              border: none;
              border-radius: 3px;
              padding: 5px 25px;
              font-size: 14px;
              cursor: pointer;
            }

            .errors {
              margin-top: -10px;
              margin-bottom: 20px;
              color: red;
            }

          `}</style>
        </body>
      </html>
    )
  }
}