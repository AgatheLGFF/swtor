interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

function Button(props: ButtonProps) {
  return (
    <button type="button" {...props}>
      {props.children}
    </button>
  );
}

function App({ className }: { className: string }) {
  const toto = "tata";

  return (
    <main className={className}>
      <Button variant="primary">f</Button>
      <Button variant="secondary">Secondary</Button>
      <Button onClick={() => alert("Hello")}>Click me</Button>
      <Button aria-label="Ouvrir une fenêtre modale">Ouvrir</Button>
    </main>
  );
}

export default Button;
