import { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const DEFAULT_COURSES = [
  {
    dept: "ITIS",
    num: "3135",
    name: "Front-End Web Application Development",
    reason:
      "Wanted to get a more formal learning experience for frontend development.",
  },
  {
    dept: "ITSC",
    num: "3688",
    name: "Computers and Their Impact on Society",
    reason: "Required for my major.",
  },
  {
    dept: "ITSC",
    num: "2181",
    name: "Introduction to Computer Systems",
    reason:
      "I feel like it could be interesting, and it gives me another language to add to my resume.",
  },
  {
    dept: "HIST",
    num: "1575",
    name: "American Democracy's Past and Promise",
    reason: "This class is required; I would not be in it otherwise.",
  },
];

function buildHeading(firstName, middleName, nickname, lastName, divider, adj, animal) {
  let fullName = firstName;
  if (middleName) fullName += ` ${middleName}.`;
  if (nickname) fullName += ` "${nickname}"`;
  fullName += ` ${lastName}`;
  return `${fullName} ${divider} ${adj} ${animal}`;
}

export function IntroFormPage() {
  useDocumentTitle("Introduction Form");
  const [courses, setCourses] = useState(() => [...DEFAULT_COURSES]);
  const [pictureSrc, setPictureSrc] = useState("/images/headshot.PNG");
  const [showResult, setShowResult] = useState(false);
  const [pageHeading, setPageHeading] = useState("Introduction Form");
  const [result, setResult] = useState(null);
  const [formKey, setFormKey] = useState(0);

  function addCourse(data = {}) {
    setCourses((c) => [
      ...c,
      {
        dept: data.dept ?? "",
        num: data.num ?? "",
        name: data.name ?? "",
        reason: data.reason ?? "",
      },
    ]);
  }

  function removeCourse(index) {
    setCourses((c) => c.filter((_, i) => i !== index));
  }

  function handlePictureChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setPictureSrc(ev.target?.result ?? "");
    reader.readAsDataURL(file);
  }

  function handleClearClick() {
    setPictureSrc("");
    setCourses([]);
    setFormKey((k) => k + 1);
  }

  function handleFormReset() {
    setTimeout(() => {
      setPictureSrc("/images/headshot.PNG");
      setCourses([...DEFAULT_COURSES]);
    }, 0);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    const firstName = form["first-name"].value.trim();
    const middleName = form["middle-name"].value.trim();
    const nickname = form.nickname.value.trim();
    const lastName = form["last-name"].value.trim();
    const mascotAdj = form["mascot-adj"].value.trim();
    const mascotAnimal = form["mascot-animal"].value.trim();
    const divider = form.divider.value.trim();
    const caption = form["picture-caption"].value.trim();
    const statement = form["personal-statement"].value.trim();
    const personalBg = form["personal-bg"].value.trim();
    const profBg = form["professional-bg"].value.trim();
    const acadBg = form["academic-bg"].value.trim();
    const subjectBg = form["subject-bg"].value.trim();
    const primaryComp = form["primary-computer"].value.trim();
    const secondComp = form["secondary-computer"].value.trim();
    const quote = form.quote.value.trim();
    const quoteAuthor = form["quote-author"].value.trim();
    const funnyThing = form["funny-thing"].value.trim();
    const shareThing = form["share-thing"].value.trim();

    const links = [1, 2, 3, 4, 5].map((n) => ({
      name: form[`link${n}-name`].value.trim(),
      href: form[`link${n}-url`].value.trim(),
    }));

    const heading = buildHeading(
      firstName,
      middleName,
      nickname,
      lastName,
      divider,
      mascotAdj,
      mascotAnimal,
    );

    const imgSrc = pictureSrc || "/images/headshot.PNG";

    const simpleBullets = [
      { label: "Personal Background", text: personalBg },
      { label: "Professional Background", text: profBg },
      { label: "Academic Background", text: acadBg },
      { label: "Background in this Subject", text: subjectBg },
      { label: "Primary Work Computer", text: primaryComp },
      { label: "Secondary Work Computer", text: secondComp },
    ].filter((b) => b.text);

    setResult({
      heading,
      imgSrc,
      caption,
      statement,
      simpleBullets,
      courses: [...courses],
      funnyThing,
      shareThing,
      quote: `"${quote}"`,
      quoteCite: `-${quoteAuthor}`,
      links: links.filter((l) => l.name && l.href),
      firstName,
      lastName,
    });
    setShowResult(true);
    setPageHeading("Landing Page");
  }

  function handleStartOver() {
    setShowResult(false);
    setPageHeading("Introduction Form");
    setResult(null);
  }

  return (
    <>
      <h2 id="page-heading">{pageHeading}</h2>
      {!showResult && (
        <h3>Please fill out the form below:</h3>
      )}

      {!showResult && (
        <form
          key={formKey}
          id="intro-form"
          onSubmit={handleSubmit}
          onReset={handleFormReset}
        >
          <fieldset>
            <legend>Name</legend>
            <label>
              First Name <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                id="first-name"
                name="first-name"
                defaultValue="Joshua"
                placeholder="First Name"
                required
              />
            </label>
            <label>Middle Name / Initial (optional)</label>
            <input
              type="text"
              id="middle-name"
              name="middle-name"
              placeholder="Middle Name / Initial"
            />
            <label>
              Nickname / Preferred Name (optional)
              <input
                type="text"
                id="nickname"
                name="nickname"
                defaultValue=""
                placeholder="Nickname or preferred name"
              />
            </label>
            <label>
              Last Name <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                id="last-name"
                name="last-name"
                defaultValue="Evans"
                placeholder="Last Name"
                required
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Acknowledgment</legend>
            <label>
              Acknowledgment Statement <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                id="ack-statement"
                name="ack-statement"
                defaultValue="I affirm that I have followed the academic integrity policy for this course."
                placeholder="Acknowledgment statement"
                required
              />
            </label>
            <label>
              Acknowledgment Date <span style={{ color: "red" }}>*</span>
              <input
                type="date"
                id="ack-date"
                name="ack-date"
                defaultValue="2025-08-25"
                required
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Mascot</legend>
            <label>
              Mascot Adjective <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                id="mascot-adj"
                name="mascot-adj"
                defaultValue="Landing"
                placeholder="e.g. Mighty"
                required
              />
            </label>
            <label>
              Mascot Animal <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                id="mascot-animal"
                name="mascot-animal"
                defaultValue="Page"
                placeholder="e.g. Niner"
                required
              />
            </label>
            <label>
              Divider Symbol <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                id="divider"
                name="divider"
                defaultValue="~"
                placeholder="e.g. ~, |, ♥️"
                required
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Picture</legend>
            <label>
              Upload Your Picture (optional — defaults to my image)
              <input
                type="file"
                id="picture-file"
                name="picture-file"
                accept="image/*"
                onChange={handlePictureChange}
              />
            </label>
            <label>
              Picture Caption <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                id="picture-caption"
                name="picture-caption"
                defaultValue="AI developed image of me using an input image."
                placeholder="Caption for your picture"
                required
              />
            </label>
            <input
              type="hidden"
              id="picture-src"
              name="picture-src"
              value={pictureSrc ?? ""}
              readOnly
            />
          </fieldset>
          <fieldset>
            <legend>Personal Statement</legend>
            <label>
              Personal Statement <span style={{ color: "red" }}>*</span>
              <textarea
                id="personal-statement"
                name="personal-statement"
                rows={3}
                placeholder="Write a short personal statement..."
                defaultValue={
                  "I am a junior at UNC Charlotte studying Computer Science with a focus in Software Engineering.\n      I enjoy developing web applications, both frontend and backend, as well as mobile apps."
                }
                required
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Background Bullets</legend>
            <label>
              Personal Background <span style={{ color: "red" }}>*</span>
              <textarea
                id="personal-bg"
                name="personal-bg"
                rows={2}
                placeholder="Personal background..."
                defaultValue={
                  "I am currently 21 years old, from Pinehurst, NC. I enjoy playing video games, cooking, and playing basketball at UREC."
                }
                required
              />
            </label>
            <label>
              Professional Background <span style={{ color: "red" }}>*</span>
              <textarea
                id="professional-bg"
                name="professional-bg"
                rows={2}
                placeholder="Professional background..."
                defaultValue={
                  "I currently work a retail job, but during the summers I do freelance development work with my friend."
                }
                required
              />
            </label>
            <label>
              Academic Background <span style={{ color: "red" }}>*</span>
              <textarea
                id="academic-bg"
                name="academic-bg"
                rows={3}
                placeholder="Academic background..."
                defaultValue={
                  "I am currently a junior here at UNCC studying computer science with a concentration in Software Engineering.\n      I transferred here from NC State University this fall, so this is only my second semester here, and still trying to get accustomed to everything Charlotte has to offer."
                }
                required
              />
            </label>
            <label>
              Background in this Subject <span style={{ color: "red" }}>*</span>
              <textarea
                id="subject-bg"
                name="subject-bg"
                rows={2}
                placeholder="Background in this subject..."
                defaultValue={
                  "I have experience in this subject, but it is all self-taught and learned through building real-world projects.\n      I took this course to gain a deeper understanding of concepts I already knew."
                }
                required
              />
            </label>
            <label>
              Primary Work Computer <span style={{ color: "red" }}>*</span>
              <textarea
                id="primary-computer"
                name="primary-computer"
                rows={2}
                placeholder="Primary work computer..."
                defaultValue={
                  "I split a lot of my work based on my location. If I am home, then I will do my work on the Windows PC that I built, and if I am in class, I have a MacBook Air."
                }
                required
              />
            </label>
            <label>
              Secondary Work Computer <span style={{ color: "red" }}>*</span>
              <textarea
                id="secondary-computer"
                name="secondary-computer"
                rows={2}
                placeholder="Secondary work computer..."
                defaultValue={
                  "The backup will be the computer that I am not currently working with. I have all of my files shared between the two."
                }
                required
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Courses I&apos;m Taking &amp; Why</legend>
            <div id="courses-container">
              {courses.map((course, index) => (
                <div key={index} className="course-entry">
                  <strong>{`Course ${index + 1}`}</strong>
                  <label>
                    Department <span style={{ color: "red" }}>*</span>
                    <input
                      type="text"
                      className="course-dept"
                      value={course.dept ?? ""}
                      onChange={(e) =>
                        setCourses((prev) =>
                          prev.map((c, i) =>
                            i === index ? { ...c, dept: e.target.value } : c,
                          ),
                        )
                      }
                      placeholder="e.g. ITIS"
                      required
                    />
                  </label>
                  <label>
                    Number <span style={{ color: "red" }}>*</span>
                    <input
                      type="text"
                      className="course-num"
                      value={course.num ?? ""}
                      onChange={(e) =>
                        setCourses((prev) =>
                          prev.map((c, i) =>
                            i === index ? { ...c, num: e.target.value } : c,
                          ),
                        )
                      }
                      placeholder="e.g. 3135"
                      required
                    />
                  </label>
                  <label>
                    Course Name <span style={{ color: "red" }}>*</span>
                    <input
                      type="text"
                      className="course-name"
                      value={course.name ?? ""}
                      onChange={(e) =>
                        setCourses((prev) =>
                          prev.map((c, i) =>
                            i === index ? { ...c, name: e.target.value } : c,
                          ),
                        )
                      }
                      placeholder="e.g. Front-End Web App Dev"
                      required
                    />
                  </label>
                  <label>
                    Reason Taking <span style={{ color: "red" }}>*</span>
                    <input
                      type="text"
                      className="course-reason"
                      value={course.reason ?? ""}
                      onChange={(e) =>
                        setCourses((prev) =>
                          prev.map((c, i) =>
                            i === index ? { ...c, reason: e.target.value } : c,
                          ),
                        )
                      }
                      placeholder="Why are you taking this course?"
                      required
                    />
                  </label>
                  <button
                    type="button"
                    className="delete-course-btn"
                    onClick={() => removeCourse(index)}
                  >
                    Delete Course
                  </button>
                </div>
              ))}
            </div>
            <button type="button" id="add-course-btn" onClick={() => addCourse()}>
              + Add Course
            </button>
          </fieldset>
          <fieldset>
            <legend>Quote</legend>
            <label>
              Quote <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                id="quote"
                name="quote"
                defaultValue="Who decided that?"
                placeholder="Your favorite quote"
                required
              />
            </label>
            <label>
              Quote Author <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                id="quote-author"
                name="quote-author"
                defaultValue="Lion Sin of Pride, Escanor"
                placeholder="Author of the quote"
                required
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Optional Fields</legend>
            <label>
              Funny/Interesting Thing (optional)
              <input
                type="text"
                id="funny-thing"
                name="funny-thing"
                defaultValue="I just transferred from NC State"
                placeholder="Something funny or interesting about you"
              />
            </label>
            <label>
              Something I&apos;d Like to Share (optional)
              <input
                type="text"
                id="share-thing"
                name="share-thing"
                defaultValue="I am ¼ Puerto Rican"
                placeholder="Something you'd like to share"
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Links</legend>
            <label>
              Link 1 Name <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                id="link1-name"
                name="link1-name"
                defaultValue="ITIS 3135"
                placeholder="e.g. GitHub"
                required
              />
            </label>
            <label>
              Link 1 URL <span style={{ color: "red" }}>*</span>
              <input
                type="url"
                id="link1-url"
                name="link1-url"
                defaultValue="https://j2wicee.github.io/itis3135/index.html"
                placeholder="https://..."
                required
              />
            </label>
            <label>
              Link 2 Name <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                id="link2-name"
                name="link2-name"
                defaultValue="GitHub"
                placeholder="e.g. GitHub"
                required
              />
            </label>
            <label>
              Link 2 URL <span style={{ color: "red" }}>*</span>
              <input
                type="url"
                id="link2-url"
                name="link2-url"
                defaultValue="https://github.com/j2wicee"
                placeholder="https://..."
                required
              />
            </label>
            <label>
              Link 3 Name <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                id="link3-name"
                name="link3-name"
                defaultValue="CLT Web"
                placeholder="e.g. CLT Website"
                required
              />
            </label>
            <label>
              Link 3 URL <span style={{ color: "red" }}>*</span>
              <input
                type="url"
                id="link3-url"
                name="link3-url"
                defaultValue="https://webpages.charlotte.edu/jevan138/"
                placeholder="https://..."
                required
              />
            </label>
            <label>
              Link 4 Name <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                id="link4-name"
                name="link4-name"
                defaultValue="Github.io"
                placeholder="e.g. Github.io page"
                required
              />
            </label>
            <label>
              Link 4 URL <span style={{ color: "red" }}>*</span>
              <input
                type="url"
                id="link4-url"
                name="link4-url"
                defaultValue="https://j2wicee.github.io"
                placeholder="https://..."
                required
              />
            </label>
            <label>
              Link 5 Name <span style={{ color: "red" }}>*</span>
              <input
                type="text"
                id="link5-name"
                name="link5-name"
                defaultValue="LinkedIn"
                placeholder="e.g. LinkedIn"
                required
              />
            </label>
            <label>
              Link 5 URL <span style={{ color: "red" }}>*</span>
              <input
                type="url"
                id="link5-url"
                name="link5-url"
                defaultValue="https://www.linkedin.com/in/joshua-evans-a1b936340/"
                placeholder="https://..."
                required
              />
            </label>
          </fieldset>
          <div className="button-row">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
            <button type="button" id="clear-btn" onClick={handleClearClick}>
              Clear
            </button>
          </div>
        </form>
      )}

      <div id="result" className={showResult ? "is-visible" : ""}>
        {result && (
          <>
            <h3 id="result-heading">{result.heading}</h3>
            <figure>
              <img id="result-img" src={result.imgSrc} alt={`Photo of ${result.firstName} ${result.lastName}`} />
              <figcaption>
                <em id="result-caption">{result.caption}</em>
              </figcaption>
            </figure>
            <p
              id="result-statement"
              dangerouslySetInnerHTML={{
                __html: result.statement.replace(/\n/g, "<br />"),
              }}
            />
            <ul id="result-bullets">
              {result.simpleBullets.map((b) => (
                <li
                  key={b.label}
                  dangerouslySetInnerHTML={{
                    __html: `<strong>${b.label}: </strong>${b.text.replace(/\n/g, "<br />")}`,
                  }}
                />
              ))}
              {result.courses.length > 0 && (
                <li>
                  <strong>Courses I&apos;m Taking &amp; Why:</strong>
                  <ol>
                    {result.courses.map((course) => (
                      <li
                        key={`${course.dept}-${course.num}-${course.name}`}
                        dangerouslySetInnerHTML={{
                          __html: `<strong>${course.dept} ${course.num} - ${course.name}: </strong>${course.reason}`,
                        }}
                      />
                    ))}
                  </ol>
                </li>
              )}
              {result.funnyThing && (
                <li>
                  <strong>Funny/Interesting item to remember me by: </strong>
                  {result.funnyThing}
                </li>
              )}
              {result.shareThing && (
                <li>
                  <strong>I&apos;d also like to share: </strong>
                  {result.shareThing}
                </li>
              )}
            </ul>
            <blockquote>
              <p id="result-quote">{result.quote}</p>
              <cite id="result-cite">{result.quoteCite}</cite>
            </blockquote>
            <ul id="result-links">
              {result.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <p>
              <button type="button" id="reset-result-btn" onClick={handleStartOver}>
                Start Over
              </button>
            </p>
          </>
        )}
      </div>
    </>
  );
}
