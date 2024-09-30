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
          <div className="w-2/3">
            <p className="text-3xl font-bold">Surya D</p>
          </div>
        </div>

        {/* Details Section with proper text wrapping and aligned colons */}
        <div className="text-lg">
          {/* Grid-based layout to align labels and values */}
          <div className="space-y-2">
            {/* Single line for each detail, using flexbox */}
            <div className="flex">
              <p className="font-bold min-w-[120px]">School</p>
              <p className="whitespace-nowrap">: Scope</p>
            </div>

            <div className="flex">
              <p className="font-bold min-w-[120px]">College</p>
              <p className="whitespace-nowrap">: Vit Chennai</p>
            </div>

            <div className="flex">
              <p className="font-bold min-w-[120px]">Degree</p>
              <p className="whitespace-nowrap">: B.Tech</p>
            </div>

            <div className="flex">
              <p className="font-bold min-w-[120px]">Course</p>
              <p className="whitespace-nowrap overflow-hidden">
                : Computer Science Engineering
              </p>
            </div>

            <div className="flex">
              <p className="font-bold min-w-[120px]">Ph No</p>
              <p className="whitespace-nowrap">: 1234567890</p>
            </div>

            {/* Email with text wrapping */}
            <div className="flex">
              <p className="font-bold min-w-[120px]">Email</p>
              <p className="break-words overflow-hidden">
                : suryaaverylongemailaddress1234567890@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBarTest;
