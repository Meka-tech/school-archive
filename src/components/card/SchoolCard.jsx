import Card from "components/card";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";

import { useNavigate } from "react-router-dom";

const SchoolCard = ({ name, location, email, telephone, id, variant }) => {
  const navigate = useNavigate();
  return (
    <Card
      extra={`flex flex-col w-full  !p-4 3xl:p-![18px] bg-white cursor-pointer  h-fit shadow-md`}
      onClick={() => navigate("/admin/school", { state: { id } })}
    >
      <div className="flex items-center">
        <p
          className={`text-lg font-bold capitalize ${
            variant ? "text-[#166534]" : " text-navy-700"
          }`}
        >
          {name}
        </p>
      </div>

      <div className="mt-2">
        <div className=" mb-1 flex items-center">
          <MdLocationPin
            className={`mr-2 ${variant ? "text-[#059669]" : "text-navy-300"} `}
          />
          <p className="text-sm">{location}</p>
        </div>
        <div className="mb-1 flex items-center">
          <MdEmail
            className={`mr-2 ${variant ? "text-[#059669]" : "text-navy-300"} `}
          />
          <p className="text-sm">{email}</p>
        </div>
        <div className="flex items-center">
          <MdPhone
            className={`mr-2 ${variant ? "text-[#059669]" : "text-navy-300"} `}
          />
          <p className="text-sm"> {telephone}</p>
        </div>
      </div>
    </Card>
  );
};

export default SchoolCard;
