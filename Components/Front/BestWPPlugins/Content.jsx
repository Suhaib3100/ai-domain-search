export default function Content({ content }) {
  return (
    <>
      <div
        className="space-y-5 md:space-y-8 blog text-xl px-8 md:px-32"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </>
  );
}
