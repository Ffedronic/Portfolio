function ResumeButton() {
  return (
    <li>
      <a
        href="/documents/resume.pdf"
        download
        className="text-green border-2 border-green p-2 font-montserrat rounded-xl hover:bg-green hover:text-navy md:text-xl"
      >
        Resume
      </a>
    </li>
  );
}

export default ResumeButton;
