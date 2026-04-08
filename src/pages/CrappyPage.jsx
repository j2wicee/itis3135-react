import { useDocumentTitle } from "../hooks/useDocumentTitle";

export function CrappyPage() {
  useDocumentTitle("TERRIBLE website");
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        margin: "40px",
      }}
    >
      <h2>This is the wrong header because it is out of place.</h2>

      <h1 style={{ marginLeft: "5px" }}>Correct Header Lies Here</h1>

      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "2px",
        }}
      >
        This paragraph is centered and has a top margin of 20px.
      </p>

      <p style={{ fontSize: "48px", marginLeft: "150px" }}>
        This paragraph has a font size of 48px and a left margin of 150px.
      </p>

      <img
        src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
        alt="THIS DOESNT DESCRIBE ANYTHING AT ALL"
        width={400}
        height={200}
        style={{
          borderTop: "45px solid green",
          borderBottom: "30px solid pink",
          borderLeft: "15px solid blueviolet",
          borderRight: "60px solid orange",
        }}
      />
      <h4 style={{ fontFamily: "Papyrus" }}>
        This is a caption for the image but using the wrong thing to do so.
      </h4>

      <p style={{ fontFamily: '"Comic Sans MS"' }}>This is another p tag using a new font</p>

      <p style={{ fontFamily: "serif", backgroundColor: "lightyellow" }}>
        This paragraph has a serif font and a random background color.
      </p>

      <p style={{ color: "rgb(211, 211, 211)", backgroundColor: "rgb(255, 0, 0)" }}>
        This text has terrible contrast and is hard to read.
      </p>

      <p>
        <u>Here is some underlined text but it is not a link to anything.</u>
      </p>

      <div style={{ textAlign: "center" }}>
        <ul style={{ display: "inline-block", textAlign: "left" }}>
          <li>This is a random centered, bulleted list item.</li>
          <li>Another item in the list that is also centered.</li>
          <li>Yet another item to make the list longer.</li>
        </ul>
      </div>

      <p style={{ marginLeft: "3px", marginTop: "100px" }}>
        Another paragraph with a left margin of 3px and a top margin of 100px.
      </p>

      <p style={{ marginRight: "200px" }}>
        Mismatched paragraph tags with different margins
      </p>

      <p style={{ fontFamily: "Papyrus" }}>Using my favorite font, Papyrus</p>
    </div>
  );
}
