import App from 'next/app';
import '../css/tailwind.css';

class TailwindApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default TailwindApp;
