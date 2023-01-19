import React from 'react'
import '../styles/project.scss'
function LastProjects() {
  return (
    <div className="lastProjects">
      <h1>
        Recently <span className="text-[#0ea5e9]">Projects</span>
      </h1>
      {/* 1 */}
      <div data-aos="fade-right" className="lastProjects-project bg-[#161f2e]">
        <div className="project-img ">
          <img
            className="animate-spin-one"
            src="https://i.postimg.cc/yYwtQ99g/image-2023-01-20-01-07-20.png"
          />
        </div>
        <div className="project-info">
          <div className="flex items-center space-x-5 mb-5 ">
            <h2>Project 1</h2>
            <span id="first" className="text-[#10B981] text-[12px]">
              Web Design
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum. Nunc non posuere consectetur, justo erat semper enim, non
            hendrerit dui odio id enim.
          </p>
        </div>
      </div>
      {/* 2 */}
      <div data-aos="fade-left" className="lastProjects-project bg-[#161f2e]">
        <div className="project-img ">
          <img src="https://i.postimg.cc/V6GhPZGg/image.png" />
        </div>
        <div className="project-info">
          <div className="flex items-center space-x-5 mb-5 ">
            <h2>Project 2</h2>
            <span id="second" className="text-[#10B981] text-[12px]">
              Next JS
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum. Nunc non posuere consectetur, justo erat semper enim, non
            hendrerit dui odio id enim.
          </p>
        </div>
      </div>
      {/* 3 */}
      <div
        data-aos="fade-up-right"
        className="lastProjects-project bg-[#161f2e]"
      >
        <div className="project-img ">
          <img src="https://i.postimg.cc/Tw4t4L1H/image.png" />
        </div>
        <div className="project-info">
          <div className="flex items-center space-x-5 mb-5 ">
            <h2>Project 3</h2>
            <span id="third" className="text-[#10B981] text-[12px]">
              Awesome Feature
            </span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            bibendum. Nunc non posuere consectetur, justo erat semper enim, non
            hendrerit dui odio id enim.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LastProjects
