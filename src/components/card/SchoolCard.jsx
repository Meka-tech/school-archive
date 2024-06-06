import Card from "components/card";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";

import { useNavigate } from "react-router-dom";

const SchoolCard = ({ name, location, email, telephone, id }) => {
  const navigate = useNavigate();
  return (
    <Card
      extra={`flex flex-col w-full  !p-4 3xl:p-![18px] bg-white cursor-pointer mb-4 h-fit`}
      onClick={() => navigate("/admin/school", { state: { id } })}
    >
      <div className="flex items-center">
        <p className="text-xl font-bold capitalize text-navy-700">{name}</p>
      </div>

      <div className="mt-2">
        <div className=" mb-1 flex items-center">
          <MdLocationPin className="mr-2 text-navy-300" />
          <p>{location}</p>
        </div>
        <div className="mb-1 flex items-center">
          <MdEmail className="mr-2 text-navy-300" />
          <p>{email}</p>
        </div>
        <div className="flex items-center">
          <MdPhone className="mr-2 text-navy-300" />
          <p>{telephone}</p>
        </div>
      </div>
    </Card>
  );
};

export default SchoolCard;