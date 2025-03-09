export default function CourseLecture({
  num,
  text,
  tag,
  requirements,
  startText,
  sections,
}) {
  return (
    <details className="bg-gray-dark bg-opacity-15 p-3 md:p-4 rounded-lg items-center gap-4">
      <summary className="font-semibold cursor-pointer">
        <span className="px-2 mr-auto">
          Lecture {num} - {text}
        </span>
        {tag && (
          <span className="bg-red-light text-sm px-2 rounded-md py-0.5">
            {tag}
          </span>
        )}
      </summary>
      <hr className="bg-gray-dark border-gray-dark text-gray-dark my-4 cursor-default" />
      {requirements && (
        <div className=" sm:m-4 ">
          <span className="font-semibold text-orange">Requirements: </span>
          <span className="text-gray-light text-justify">{requirements}</span>
        </div>
      )}
      {startText && (
        <div className="sm:m-4 m-2 text-gray-light text-justify">
          <span>{startText}</span>
        </div>
      )}
      <div>
        {sections.map((s, index) => (
          <div
            key={num + index}
            className="flex gap-1 last:border-hidden border-b border-gray-dark sm:ml-6 py-3 "
          >
            <div className="basis-1/12">
              {num}.{index + 1}
            </div>
            <div className="basis-10/12">
              <a
                className={`${s.link && "hover:text-blue-500 hover:underline"}`}
                target={s.link && "_blank"}
                href={s.link}
              >
                {s.text}
              </a>{" "}
              {s.type && (
                <span className="px-1 py-0.5 font-semibold text-sm bg-red-light rounded-md mx-2">
                  {s.type}
                </span>
              )}
              {s.items && (
                <ul className="list-disc flex flex-col gap-1 my-4 text-gray-mid">
                  {s.items.map((item, index) => (
                    <li key={item + index}>
                      <a
                        className={`${
                          item.link && "hover:text-blue-500 hover:underline"
                        }`}
                        href={item.link}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="basis-1/12 text-gray-mid text-sm mt-0.5">
              {s.labelInfo}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}
