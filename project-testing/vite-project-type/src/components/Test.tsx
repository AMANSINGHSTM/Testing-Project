import { useEffect } from "react";
// import resume_image from "../images/proofread_2.png";
// import gpt_prompt from "../images/gpt_prompt.png";
// import pros_cons from "../images/pros_and_cons_of_gpt.png";
// import hr_perspective from "../images/hr_perspective.png";
// import rejection from "../images/rejection.jpg";
// import resume_fixer from "../images/resume_fixer.png";
import { Helmet } from "react-helmet";
const Use_of_chatgpt = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
    document.body.style.setProperty("background-color", "#000000", "important");
    document.body.style.setProperty("color", "#FFFFFF", "important");
    return () => {
      document.body.style.removeProperty("background-color");
      document.body.style.removeProperty("color");
    };
  }, []);

  useEffect(() => {
    const footer = document.querySelector(
      "div.flex.bg-purple-800"
    ) as HTMLDivElement | null;
    if (footer) {
      footer.style.backgroundColor = "#000000";
      footer.style.color = "#FFFFFF";
      footer.style.opacity = "1";
    }
    return () => {
      if (footer) {
        footer.style.backgroundColor = ""; // Reset background color
        footer.style.color = ""; // Reset text color
        footer.style.opacity = ""; // Reset opacity
      }
    };
  }, []);

  useEffect(() => {
    const Navbar = document.querySelector(
      "div.bg-primary.bg-opacity-10.backdrop-blur-md"
    ) as HTMLDivElement | null;
    if (Navbar) {
      Navbar.style.backgroundColor = "#000000";
      Navbar.style.color = "#FFFFFF";
      Navbar.style.opacity = "1";
    }
    return () => {
      if (Navbar) {
        Navbar.style.backgroundColor = "";
        Navbar.style.color = "";
        Navbar.style.opacity = "";
      }
    };
  }, []);

  useEffect(() => {
    const mainElement = document.querySelector("main.min-h-screen");
    if (mainElement) {
      const paragraphs = mainElement.querySelectorAll("p");
      paragraphs.forEach((p) => {
        p.style.fontSize = "22px";
        p.style.color = "#FFFFFF";
      });

      const line = mainElement.querySelectorAll("li");
      line.forEach((li) => {
        li.style.fontSize = "22px";
        li.style.color = "#FFFFFF";
      });

      const strong = mainElement.querySelectorAll("strong");
      strong.forEach((strong) => {
        strong.style.fontSize = "22px";
        strong.style.color = "#FFFFFF";
      });

      const a = mainElement.querySelectorAll("a");
      a.forEach((a) => {
        a.style.fontSize = "22px";
        a.style.color = "#1E90FF"; // Maintain link contrast with blue color
      });
    }
    return () => {
      if (mainElement) {
        // Reset font size for paragraphs
        const paragraphs = mainElement.querySelectorAll("p");
        paragraphs.forEach((p) => {
          p.style.fontSize = "";
          p.style.color = "";
        });

        // Reset font size for list items
        const line = mainElement.querySelectorAll("li");
        line.forEach((li) => {
          li.style.fontSize = "";
          li.style.color = "";
        });

        // Reset font size for strong elements
        const strong = mainElement.querySelectorAll("strong");
        strong.forEach((strong) => {
          strong.style.fontSize = "";
          strong.style.color = "";
        });

        // Reset font size for anchor tags
        const a = mainElement.querySelectorAll("a");
        a.forEach((a) => {
          a.style.fontSize = "";
          a.style.color = "";
        });
      }
    };
  }, []);

  return (
    <div
      className="mx-auto max-w-screen-lg my-44 xl:px-0 px-6"
      style={{ backgroundColor: "#000", color: "#FFF" }}
    >
      {/* Meta information */}
      <Helmet>
        <link rel="canonical" href="https://jobbie.io/What-Is-An-ATS" />
        <title>
          Should You Submit The Resume Created From ChatGPT To Job Applications
        </title>
        <meta
          name="description"
          content="Know about whether you should create your Resume or CV from ChatGPT or AI tools and apply for Job."
        />
      </Helmet>
      <div className="blog-heading flex flex-col">
        <h1 className="font-primary text-3xl font-semibold md:text-5xl mb-2 !text-white">
          Can I Submit the Resume Created from ChatGPT to Job Applications?
        </h1>
      </div>
      <hr className="border-neutral-200 mt-10 mb-10" />
      <div className="flex flex-col items-start justify-between mt-8">
        <div className="">
          <p>
            In today's competitive job market, job seekers are constantly
            looking for ways to stand out. Many have turned to artificial
            intelligence tools like{" "}
            <a href="chatgpt.com" className="!text-blue-500">
              ChatGPT
            </a>{" "}
            for help with crafting their resumes. However, one question that
            often arises is whether a resume created using ChatGPT is suitable
            for submission to employers. This blog will explore the process of
            creating resumes with ChatGPT, the advantages and disadvantages of
            using it, and what hiring managers think about AI-generated resumes.
          </p>
          <br />
          <p>
            Resumes are often your first impression with potential employers, so
            it's crucial that they are professional, well-written, and tailored
            to the job you're applying for. While traditional resume-writing
            services or self-editing are common approaches, artificial
            intelligence (AI) has recently entered the scene, making it easier
            for candidates to generate resumes quickly and efficiently.
          </p>
          <br />
          <div className="flex justify-center">
            {/* <img
              src={resume_image}
              alt="Jobbie Resume"
              className="mt-4 rounded-xl w-1/2 h-auto"
            /> */}
          </div>
          <br />
          <p>
            ChatGPT, a language model developed by OpenAI, is one such tool that
            can help job seekers craft resumes. But while AI-generated resumes
            might save time, there are concerns about their quality,
            authenticity, and how HR professionals view them. In this article,
            we will dive into how ChatGPT can assist in resume creation, the
            benefits and drawbacks of using this tool, and what hiring
            professionals think of AI-generated resumes.
          </p>

          <br />
          <h2
            className="md:text-4xl text-3xl mt-10 mb-4 group flex font-semibold relative cursor-pointer !text-white"
            id="create_Resume_with_GPT"
          >
            How to Create Resumes with ChatGPT
          </h2>
          <p>
            Creating a resume with ChatGPT is a relatively straightforward
            process, though it requires some input and refinement to ensure the
            end product aligns with the job you're seeking.
          </p>
          <br />
          <p className="underline">
            Here’s a step-by-step guide on how to use ChatGPT to create a
            resume:
          </p>
          <br />
          <ul className="mt-2 mb-2 list-decimal list-inside space-y-4 !text-white">
            <li>
              <strong>Provide the Necessary Information</strong>: When starting
              a conversation with ChatGPT, give it the details it needs to
              generate a strong resume. This may include:
              <ul className="mt-2 mb-3 pl-6 list-disc list-inside space-y-1">
                <li>Personal information (name, contact details, etc.)</li>
                <li>
                  Work experience (job titles, companies, dates, and job
                  responsibilities)
                </li>
                <li>
                  Educational background (degrees, schools, graduation dates)
                </li>
                <li>Skills (both hard and soft skills)</li>
                <li>
                  Certifications, languages, volunteer work, and any other
                  relevant sections
                </li>
                <div className="flex justify-center">
                  {/* <img
                    src={gpt_prompt}
                    alt="Jobbie Resume"
                    className="mt-4 rounded-xl"
                  /> */}
                </div>
              </ul>
            </li>
            <li>
              <strong>Use Specific Prompts</strong>: To get the best results,
              give detailed prompts. For example, you could say, "Create a
              resume for a software developer with 5 years of experience in
              Python and Java, who has worked at a tech startup." The more
              specific the input, the more targeted and relevant the output.
            </li>
            <li>
              <strong>Review and Edit</strong>: Once ChatGPT generates your
              resume, review it for accuracy, clarity, and personalization.
              AI-generated content can sometimes lack a personal touch or
              contain generic language, so it’s important to ensure that the
              resume reflects your unique voice and experiences.
            </li>
            <li>
              <strong>Customize for Each Job</strong>: One of the best practices
              in resume writing is to tailor your resume for each job
              application. You can input the job description into ChatGPT to
              have it adjust the resume to highlight the most relevant skills
              and experiences for each position.
            </li>
          </ul>
          <br />
          <h2
            className="md:text-4xl text-3xl mt-10 mb-4 group flex font-semibold relative cursor-pointer !text-white"
            id="Pros_and_Cons_with_GPT"
          >
            Pros and Cons of Creating Resumes with ChatGPT
          </h2>
          <br />
          <div className="flex justify-center">
            {/* <img
              src={pros_cons}
              alt="Pros and Cons of Using ChatGPT"
              className="mt-4 rounded-xl w-1/2 h-auto"
            /> */}
          </div>
          <br />
          <p>
            <strong>Pros:</strong>
          </p>
          <ul className="mt-2 mb-2 pl-6 list-disc list-inside space-y-1">
            <li>
              <strong>Time-Saving</strong>: ChatGPT can quickly generate a
              resume draft, saving you hours of work compared to starting from
              scratch.
            </li>
            <li>
              <strong>Ease of Use</strong>: Even if you're not a skilled writer,
              ChatGPT can help you organize and phrase your experience and
              qualifications in a professional manner.
            </li>
            <li>
              <strong>Customization</strong>: ChatGPT allows for customization
              based on specific roles, industries, or skills, making it
              versatile for various job applications.
            </li>
            <li>
              <strong>Consistency</strong>: AI-generated resumes often maintain
              consistent formatting and structure, ensuring a clean,
              professional look.
            </li>
            <li>
              <strong>Affordable</strong>: Compared to hiring a professional
              resume writer, ChatGPT is a cost-effective alternative.
            </li>
          </ul>
          <p>
            <strong>Cons:</strong>
          </p>
          <ul className="mt-2 mb-2 pl-6 list-disc list-inside space-y-1">
            <li>
              <strong>Lack of Personalization</strong>: AI tends to generate
              content that is neutral and impersonal. It might not capture the
              unique aspects of your personality or the nuances of your
              experience.
            </li>
            <li>
              <strong>Potential Overuse of Generic Phrases</strong>: Sometimes,
              ChatGPT can rely on overused phrases or clichés, which might make
              your resume sound less distinctive.
            </li>
            <li>
              <strong>Risk of Inaccuracy</strong>: If the information you
              provide to ChatGPT is unclear or incomplete, the generated resume
              could contain errors or misrepresentations of your qualifications.
            </li>
            <li>
              <strong>Limited Creativity</strong>: While ChatGPT is proficient
              at generating structured, factual content, it may not offer
              creative insights or tailor the resume in a way that makes you
              stand out from other candidates.
            </li>
          </ul>

          <br />
          <h2
            className="md:text-4xl text-3xl mt-10 mb-4 group flex font-semibold relative cursor-pointer !text-white"
            id="HR_View_on_Resume"
          >
            HR's Perspective on the Resume that Have Been Created from ChatGPT
          </h2>
          <p>
            When it comes to hiring, HR professionals and recruiters have a keen
            eye for detail. I've personally been into hiring from past 4-5 years
            within seconds, after reading the content, can determine whether the
            person has written the resume manually or generated with an AI.
          </p>
          <br />
          <p className="underline">
            But how do they view AI-generated resumes like those from ChatGPT?
          </p>
          <br />
          <p>
            <strong>1. Authenticity and Personal Touch: </strong>Everyone value
            authenticity. A resume that lacks a personal touch or doesn’t
            reflect your true voice could raise red flags. Hiring managers may
            question whether the resume represents the applicant’s actual work
            or if it was simply generated by a machine.
          </p>
          <br />
          <p>
            <strong>2. Quality of Content: </strong>ChatGPT can produce
            high-quality content, but not all resumes are created equal. An
            AI-generated resume may be polished, but it might miss the depth of
            real-world context or fail to connect specific achievements to
            measurable outcomes. Plus adding a prompt to add measurable outcomes
            in the experience section makes it worst, because it sounds machine
            and then there is a horn effect for the applicant that person is a
            fake, which may result in rejection of an applicant.
          </p>
          <br />
          <p>
            <strong>3. Tailoring to the Job: </strong>A key part of a successful
            resume is tailoring it to the specific role and company. While
            ChatGPT can assist in this, it’s still important to review and
            fine-tune the resume for each job. HR professionals can tell when a
            resume feels generic or not fully aligned with the job description.
          </p>
          <br />
          <p>
            <strong>4. Over-reliance on Technology: </strong>Many hiring
            managers view resumes generated by ChatGPT as a sign that the
            applicant didn’t put in enough effort or thought, while created the
            resume and moreover the work done might be false.
          </p>
          <br />
          <div className="flex justify-center">
            {/* <img
              src={hr_perspective}
              alt="Resume Made for ChatGPT"
              className="mt-4 rounded-xl h-auto"
            /> */}
          </div>
          <br />
          <br />
          <h2
            className="md:text-4xl text-3xl mt-10 mb-4 group flex font-semibold relative cursor-pointer !text-white"
            id="Impact_on_ATS"
          >
            Impact on ATS with the Resumes created from ChatGPT
          </h2>
          <p>
            As AI becomes more common in various industries, many{" "}
            <a
              href="https://jobbie.io/What-Is-An-ATS/"
              className="!text-blue-500"
            >
              Applicant Tracking Systems (ATS)
            </a>{" "}
            are also using AI to screen resumes. These advanced systems can now
            do more than just look for keywords and check formatting—they can
            also tell if a resume was written by a machine. By analyzing writing
            patterns, they can spot content that doesn’t have the natural touch
            of a human writer. Because of this, resumes created by AI might get
            automatically rejected. As a result, candidates using AI-generated
            resumes may face challenges in getting their applications noticed.
          </p>
          <br />
          <div className="flex justify-center">
            {/* <img
              src={rejection}
              alt="Result from using ChatGPT for Resume Making"
              className="mt-4 rounded-xl"
            /> */}
          </div>
          <br />

          <br />
          <h2
            className="md:text-4xl text-3xl mt-10 mb-4 group flex font-semibold relative cursor-pointer !text-white"
            id="Submit_resume_done_by_GPT"
          >
            Should You Submit a Resume Made with ChatGPT?
          </h2>
          <p>
            When it comes to using ChatGPT for creating resumes, it’s important
            to weigh both the pros and cons. In most cases, the disadvantages of
            using an AI-generated resume outweigh the benefits. One major
            concern is that AI-generated resumes might be flagged or rejected by
            advanced Applicant Tracking Systems (ATS), which are increasingly
            able to detect machine-written content. If your resume gets rejected
            because it doesn’t pass ATS screening, all the effort put into
            creating it is essentially wasted.
          </p>
          <br />
          <p>
            Instead of relying solely on ChatGPT to generate your resume, a
            better approach would be to manually craft your resume and use AI
            tools to polish and optimize it. This allows you to personalize the
            content while also ensuring it’s error-free and ATS-friendly.
          </p>
          <br />
          <p>
            One such tool that can help is{" "}
            <a
              href="https://jobbie.io/resumefixscreen"
              className="!text-blue-500"
            >
              Jobbie’s AI Resume Fixer
            </a>
            . This tool rewrites your resume content while keeping the human
            touch intact, ensuring it's error-free and optimized for ATS. It
            also breaks down the content into sections like summary, work
            experience, projects, certifications, achievements, and education,
            helping you create a more effective, professional resume.
          </p>
          <br />
          <div className="flex justify-center">
            {/* <img
              src={resume_fixer}
              alt="AI Resume Fixer"
              className="mt-4 rounded-xl"
            /> */}
          </div>
          <br />
          <p>
            In conclusion, while submitting a fully AI-generated resume might
            not be the best approach, using AI tools to enhance and optimize
            your resume can be a smart strategy. By combining AI assistance with
            your personal input, you can create a polished, professional resume
            that is both ATS-friendly and uniquely yours, improving your chances
            of standing out to employers.
            <br />
            <br />
            <br />
            <hr />
            <br />
            Check Out:{" "}
            <a
              href="https://jobbie.io/resume-hacks-to-get-pass-ATS/"
              className="!text-blue-500"
            >
              Resume Hacks to get Pass ATS
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Use_of_chatgpt;
