import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/DataProvider";
import PracticeArea from "../PracticeArea/PracticeArea";

const PracticeAreas = () => {
  const { practiceAreas } = useContext(DataContext);
  const demopracticeAreas = [
    {
      practiceName: "Cheyenne Stark",
      imgURL:
        "https://media.istockphoto.com/id/171096042/photo/lawyer-holding-document-and-speaking-to-jury-in-courtroom.jpg?s=612x612&w=0&k=20&c=gEh_JtKcg1KUk0Rw-urwMd3ZpTV_EtTSw7gQHgnND6g=",
      shortDescription:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in',
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      fee: "234",
      rating: "2.5",
      _id: 2841,
    },
    {
      practiceName: "Xander Grimes",
      imgURL:
        "https://t3.ftcdn.net/jpg/02/05/60/06/360_F_205600667_N6gr8oHn6du4nxH8zADIOuPpW3m1wX1A.jpg",
      shortDescription:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in',
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      fee: "432",
      rating: "4",
      _id: 3953,
    },
    {
      practiceName: "Xander Grimes",
      imgURL:
        "https://t3.ftcdn.net/jpg/02/05/60/06/360_F_205600667_N6gr8oHn6du4nxH8zADIOuPpW3m1wX1A.jpg",
      shortDescription:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in',
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      fee: "432",
      rating: "4",
      _id: 3973,
    },
  ];
  const practiceStore =
    (practiceAreas.length > 0 && practiceAreas) || demopracticeAreas;
  return (
    <div className="my-5 py-20 pb-16 bg-gray-600">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="mb-10">
          <h2 className="text-5xl text-gray-200">Attorney Practice Areas</h2>
          <hr className="max-w-[12rem] border-gray-400" />
        </div>
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-20 ">
          {practiceStore?.map((practiceArea) => (
            <PracticeArea key={Math.random()} practiceArea={practiceArea} />
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/practice-areas"
            className="px-10 py-2 text-lg font-semibold text-gray-200 border mt-10 inline-block "
          >
            See All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
