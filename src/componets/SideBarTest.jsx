import React from "react";

function SideBarTest() {
  return (
    <>
      <div className="pt-16 p-4">
        {/* Profile Image and Name */}
        <div className="flex flex-row justify-center items-center mb-6">
          <div className="w-1/3">
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Surya"
              className="h-24 w-24 object-cover rounded-full"
            />
          </div>
          <div className="w-2/3 pl-6">
            <p className="text-3xl font-bold">Surya D</p>
          </div>
        </div>

        {/* Details Section with proper text wrapping and aligned colons */}
        <div className="text-lg">
          {/* Grid-based layout to align labels and values */}
          <div className="space-y-2">
            {/* Single line for each detail, using flexbox */}
            <div className="flex">
              <p className="font-bold ">School</p>
              <p className="">: Scope</p>
            </div>

            <div className="flex">
              <p className="font-bold ">College</p>
              <p className="">: Vit Chennai</p>
            </div>

            <div className="flex">
              <p className="font-bold ">Degree</p>
              <p className="">: B.Tech</p>
            </div>

            <div className="flex">
              <p className="font-bold ">Course</p>
              <p className=" overflow-hidden">: Computer Science Engineering</p>
            </div>

            <div className="flex">
              <p className="font-bold ">Ph No</p>
              <p className="">: 1234567890</p>
            </div>

            {/* Email with text wrapping */}
            <div className="flex">
              <p className="font-bold ">Email</p>
              <p className="break-words overflow-hidden">
                : surya.d.0004@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBarTest;
