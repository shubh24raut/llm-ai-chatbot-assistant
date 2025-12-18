export const renderTextWithLinks = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.split(urlRegex).map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline break-all hover:text-blue-800"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};
