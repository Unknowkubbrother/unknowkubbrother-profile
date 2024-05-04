import React from "react";
import axios from "axios";

function Works() {
  const [worksData, setWorksData] = React.useState([]);

  React.useEffect(() => {
    const getWorks = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/Unknowkubbrother/repos"
        );
        const newData = response.data.map(
          (work: {
            name: string;
            stargazers_count: number;
            html_url: string;
            readme: string;
            language: string;
          }) => ({
            name: work.name,
            stargazers_count: work.stargazers_count,
            html_url: work.html_url,
            language: work.language,
          })
        );
        setWorksData(newData);
      } catch (error) {
        console.log(error);
      }
    };

    getWorks();
  }, []);

  return (
    <div className="w-[75%] m-auto my-10">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold">Open Source on GitHub</h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-10 gap-y-5">
        {worksData.map(
          (
            work: {
              name: string;
              stargazers_count: number;
              html_url: string;
              readme: string;
              language: string;
            },
            idx
          ) => (
            <a
              className="bg-[#262626] rounded-lg p-5 hover:bg-[#262626]/40  duration-300"
              key={idx}
              href={work.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-between items-start gap-5">
                <h1 className="text-xl text-white font-semibold mb-2">
                  {work.name}
                </h1>
                <span className="text-[#36bcff] font-semibold">{work.language}</span>
              </div>
              <div className="flex justify-start items-center mt-2">
                <i className="far fa-star"></i> {/* FontAwesome icon */}
                <span className="pt-1 ml-1">{work.stargazers_count}</span>
              </div>
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Works;
