function WhatTag({ children }) {
  console.log(children);
  return (
    <>
      <h2>What's a tag or a balise !?</h2>
      <p>
        <strong>
          HTML is a markup language that defines the structure of your content.
        </strong>{" "}
        HTML consists of a series of elements, which you use to enclose, or
        wrap, different parts of the content to make it appear a certain way, or
        act a certain way. The enclosing tags can make a word or image hyperlink
        to somewhere else, can italicize words, can make the font bigger or
        smaller, and so on
      </p>
    </>
  );
}

export default WhatTag;
