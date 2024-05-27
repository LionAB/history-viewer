export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
      <p>
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by{" "}
        <a
          className="text-blue-500 hover:underline"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Lionel ABATAN
        </a>
      </p>
    </footer>
  );
}