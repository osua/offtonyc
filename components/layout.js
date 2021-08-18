//import Alert from '../components/alert'; LINE 8         <Alert preview={preview} />
import Footer from '../components/footer';

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
