import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllModules, fetchAllLesson } from "../redux/features/Course/courseSlice";
import { markLessonComplete, getProgress } from "../redux/features/Progress/progressSlice";
import { useParams } from "react-router-dom";

const CourseModule = () => {

  const { id: courseId } = useParams();
  const dispatch = useDispatch();

  const { moduleList, lessonList } = useSelector((state) => state.course);
  const { progressList } = useSelector((state) => state.progress);

  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [lessonTitle, setLessonTitle] = useState("");
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);

  useEffect(() => {
    if (!courseId) return;

    dispatch(fetchAllModules(courseId));
    dispatch(getProgress());

  }, [dispatch, courseId]);

  // Extract youtube video ID
  const getYoutubeId = (url) => {
    try {
      const regExp =
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/;
      const match = url.match(regExp);
      return match ? match[1] : null;
    } catch {
      return null;
    }
  };

  // When module clicked
  const handleModuleClick = (moduleId) => {
    setSelectedModule(moduleId);
    dispatch(fetchAllLesson(moduleId));
    setSelectedVideo(null);
    setLessonTitle("");
    setSelectedLessonIndex(0);
  };

  // Play lesson
  const playLesson = async (lesson, index) => {

    const videoId = getYoutubeId(lesson.videoUrl);
    if (!videoId) return;

    setSelectedVideo(videoId);
    setLessonTitle(lesson.lessonName);
    setSelectedLessonIndex(index);

    try {

      await dispatch(
        markLessonComplete({
          courseId,
          lessonId: lesson._id,
        })
      ).unwrap();

      dispatch(getProgress());

    } catch (err) {
      console.log(err);
    }

  };

  // Next lesson
  const nextLesson = () => {

    if (selectedLessonIndex < lessonList.length - 1) {

      const next = lessonList[selectedLessonIndex + 1];

      playLesson(next, selectedLessonIndex + 1);

    }

  };

  const progress =
    lessonList.length > 0
      ? ((selectedLessonIndex + 1) / lessonList.length) * 100
      : 0;

  return (

    <div className="grid md:grid-cols-[30%_70%] min-h-screen">

      {/* LEFT SIDE MODULES */}

      <div className="bg-white border-r overflow-y-auto p-5 order-2 md:order-1">

        <h2 className="text-xl font-bold mb-5">Course Content</h2>

        {moduleList.map((module) => (

          <div key={module._id} className="mb-4">

            <div
              onClick={() => handleModuleClick(module._id)}
              className="p-3 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 font-medium"
            >
              {module.moduleName}
            </div>

            {selectedModule === module._id && (

              <div className="ml-4 mt-2">

                {lessonList.map((lesson, index) => {

                  const lessonCompleted =
                    progressList
                      .find((p) => p.course._id === courseId)
                      ?.completedLessons.includes(lesson._id);

                  return (

                    <div
                      key={lesson._id}
                      onClick={() => playLesson(lesson, index)}
                      className={`py-2 cursor-pointer flex justify-between items-center hover:text-blue-600
                      ${
                        index === selectedLessonIndex
                          ? "text-blue-600 font-semibold"
                          : ""
                      }`}
                    >

                      <span>
                        {lesson.lessonName} {lessonCompleted && "✅"}
                      </span>

                      <span>▶</span>

                    </div>

                  );

                })}

              </div>

            )}

          </div>

        ))}

      </div>

      {/* RIGHT SIDE VIDEO */}

      <div className="p-6 bg-gray-50 flex justify-center items-start order-1 md:order-2">

        {selectedVideo ? (

          <div className="bg-white p-5 rounded shadow w-full max-w-3xl">

            <iframe
              className="w-full aspect-video rounded"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              allowFullScreen
              title={lessonTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />

            <h2 className="text-2xl font-bold mt-4">{lessonTitle}</h2>

            {/* PROGRESS BAR */}

            <div className="mt-4">

              <div className="w-full bg-gray-200 rounded h-3">

                <div
                  className="bg-blue-500 h-3 rounded"
                  style={{ width: `${progress}%` }}
                ></div>

              </div>

              <p className="text-sm mt-1 text-gray-600">
                {Math.round(progress)}% Completed
              </p>

            </div>

            {/* NEXT BUTTON */}

            <button
              onClick={nextLesson}
              className="mt-5 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Next Lesson →
            </button>

          </div>

        ) : (

          <div className="h-full w-full flex items-center justify-center bg-white rounded shadow text-gray-500">

            Select a lesson to start learning 🚀

          </div>

        )}

      </div>

    </div>

  );

};

export default CourseModule;