import { FaUserPlus } from "react-icons/fa";

import { NavLink, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDepartmentById, updateDepartment } from "../../utils/localStorage";
export default function UpdateDepartment() {
     const navigate = useNavigate();
  const { id } = useParams();

  const [department, setDepartment] = useState("");

  // Fetch department by id
  useEffect(() => {
    const data = getDepartmentById(Number(id)); // convert id to number

    if (data) {
      setDepartment(data.data);
    }
  
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();

    updateDepartment(Number(id), department);

    navigate("/dashboard/admin/department"); // redirect after update
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full h-full flex-col px-6 pb-0 lg:px-8 bg-[#333a56] ">
                    <h2 className='text-3xl font-bold text-[#e8e8e8] mt-5 '>Edit Department</h2>

        <div className="mt-5 mx-auto w-full shadow-md p-5 rounded bg-[#e8e8e8]">
          <form onSubmit={submitHandler} className="space-y-6">
            <div className="w-full">
              <label htmlFor="username" className="block text-sm/6 font-medium text-[#333a56]">
                Department Name
              </label>
              <div className="mt-2">
                <input
                  id="department"
                  name="department"
                  type="text"
                  value={department}
                  onChange={e=>setDepartment(e.target.value)}
                  required
                //   autoComplete="email"
                  className="block w-full rounded-md  px-3   bg-[#f7f5e6]   py-1.5 text-base border-[#333a56] border  outline-none sm:text-sm/6 text-[#333a56] focus:ring ring-[#333a56]"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex  justify-center rounded-md bg-[#52658F] px-3 py-2 text-sm/6 font-semibold text-[#e8e8e8] hover:bg-[#333a56] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
              Update Department
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-center text-sm/6 text-[#52658F]">
            Not a member?{' '}
            <NavLink to="/signup" className="font-semibold text-[#333a56] hover:text-[#52658F] underline">
              Sign up
            </NavLink>
          </p> */}
        </div>
      </div>
    </>
  )
}
