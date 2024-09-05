import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import assets from "../../assets/assets";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatch = (path) => {
    if (path === location.pathname) return true;
    return false;
  };

  return (
    <div className="hidden w-[15rem] h-full bg-white  flex-col gap-5 items-center p-4 lg:flex">
      <div
        className="w-full h-[5rem] flex items-center justify-start"
        onClick={() => navigate("/admin")}
      >
        <img
          src={assets.Img.WowHRLogo}
          alt="logo"
          className="w-[70%] h-[40%] object-contain"
        />
      </div>
      <div
        onClick={() => navigate("/admin/coreteam")}
        className={`w-full h-11 cursor-pointer ${pathMatch("/admin/coreteam") && "bg-[#2984FF]"
          } p-1 rounded-lg flex  items-center pl-4`}
      >
        <img
          src={
            pathMatch("/admin") ? assets.Img.Leader_white : assets.Img.Leader_gray
          }
          alt="icon"
          className="w-10 h-7 object-contain"
        />
        <p className={`${pathMatch("/admin/coreteam") ? "text-white" : "text-gray-500"}`}>
          LeaderShip
        </p>
      </div>
      <div
        onClick={() => navigate("/admin/testimonials")}
        className={`w-full h-11 cursor-pointer ${pathMatch("/admin/testimonials") && "bg-[#2984FF]"
          }  p-1 rounded-lg flex items-center pl-4 `}
      >
        <img
          src={
            pathMatch("/admin/testimonials")
              ? assets.Img.Testimonial_white
              : assets.Img.Testimonial_gray
          }
          alt="icon"
          className="w-10 h-7 object-contain"
        />
        <p
          className={`${pathMatch("/admin/testimonials") ? "text-white" : "text-gray-500"
            }`}
        >
          Testimonials
        </p>
      </div>
      <div
        onClick={() => navigate("/admin/events")}
        className={`w-full h-11 cursor-pointer ${pathMatch("/admin/events") && "bg-[#2984FF]"
          }  p-1 rounded-lg flex items-center pl-4 `}
      >
        <img
          src={
            pathMatch("/admin/events")
              ? assets.Img.Calender_white
              : assets.Img.Calender_gray
          }
          alt="icon"
          className="w-10 h-7 object-contain"
        />
        <p
          className={`${pathMatch("/admin/events") ? "text-white" : "text-gray-500"}`}
        >
          Events
        </p>
      </div>
      <div
        onClick={() => navigate("/admin/knowledgeHub")}
        className={`w-full h-11 cursor-pointer ${pathMatch("/admin/knowledgeHub") && "bg-[#2984FF]"
          }  p-1 rounded-lg flex items-center pl-4`}
      >
        <img
          src={
            pathMatch("/admin/knowledgeHub")
              ? assets.Img.Knowledge_white
              : assets.Img.Knowledge_gray
          }
          alt="icon"
          className="w-10 h-7 object-contain"
        />
        <p
          className={`${pathMatch("/admin/knowledgeHub") ? "text-white" : "text-gray-500"
            }`}
        >
          Knowledge Hub
        </p>
      </div>
      <div
        onClick={() => navigate("/")}
        className="w-full h-11 mt-auto cursor-pointer p-1 rounded-lg flex items-center pl-4 "
      >
        <img
          src={assets.Img.LogOutIcon} // Add your logout icon to assets
          alt="Logout icon"
          className="w-10 h-7 object-contain"
        />
        <p className="text-grey">Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
