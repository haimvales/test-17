import {React,  useState, useContext } from 'react'
import Aside from '../comps/Aside'
import Table from '../comps/Table';

export default function Data() {

    const [Search,setSearch] = useState("");
    const [LargeNumber,setLargeNumber] = useState("");
    const [SmallNumber,setSmallNumber] = useState("");
  return (
    <div className='items-center  '>
        <Aside>
      <form
        // onSubmit={handleSubmit}
        className="   rounded-lg shadow-md flex w-full   ">

        <div className=" w-full      ">
          <label className="font-semibold ">Search:</label>
          <input
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
            className="border w-30 rounded-lg"
            >
          </input>
        </div>

        <div className=" w-full">
          <label className="font-semibold ">{"Year >"}</label>
          <input
            value={LargeNumber}
            onChange={(e) => setLargeNumber(e.target.value)}
            className="border w-30 rounded-lg"
            >
          </input>
        </div>

        <div className=" w-full">
          <label className="font-semibold ">{"Year <"}</label>
          <input
            value={SmallNumber}
            onChange={(e) => setSmallNumber(e.target.value)}
            className="border w-30 rounded-lg"
            >
          </input>
        </div>
        <div className=''>
        <button
        onClick={()=> change({Search,LargeNumber,SmallNumber})}
          type="submit"
          className="bg-green-600 text-white  font-bold py-2 rounded-md hover:bg-green-700 transition-colors cursor-pointer">
         Filter
        </button>
        </div>
      </form>
        </Aside>
        <hr className="w-[95%] ml-[1%]  text-gray-300"></hr>
        <Table p={Search}></Table>
    </div>
  )
}
