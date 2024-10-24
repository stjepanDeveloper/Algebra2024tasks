export default function BookComponent() {
  const book = {
    title: "To kill a Mockingbird",
    author: "Harper Lee",
  };

  return (
    <div>
      <p>
        `This is a book "{book.title}" by "{book.author}".`
      </p>
    </div>
  );
}
