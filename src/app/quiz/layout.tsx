import type { Metadata } from "next";
import  Container  from "react-bootstrap/Container";
import  Navbar  from "react-bootstrap/Navbar";
import NavbarBrand  from "react-bootstrap/NavbarBrand";
import '../globals.css';

export const metadata: Metadata = {
  title: "Taoscopie",
  description: "TAOSCOPIE - Découvre ton archétype",
};

export default function QuizLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBrand href="/">Taoscopie</NavbarBrand>
        </Container>
      </Navbar>
      <main>
        {children}
      </main>
    </>
  );
}
