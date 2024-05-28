export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
      <p>
      &copy; {new Date().getFullYear()} - Développé par{" "} 
        <a
          className="text-blue-500 hover:underline"
          href="https://www.linkedin.com/in/lionel-abatan-3ab389127/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lionel ABATAN
        </a> .Tous droits réservés.
      </p>
    </footer>
  );
}