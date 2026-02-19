import React, {useContext, useEffect, useState } from 'react'

export default function Table({func}) {
    const [terrorData, setterrorData] = useState([]);
    const [terrorDataSearch, setterrorDataSearch] = useState([]);
    const [Search, setterrorSearch] = useState(false);
    // const [Search, setterrorSearch] = useState([]);
 


       useEffect(() => {
        const fetchterrorData = async ({pr}) => {
            const [p,setp] = useState(p);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/questions`, {
                    method: 'GET',
                });
                if (response.ok) {
                    const data = await response.json();
                    console.log(data[0])
                    setterrorData(data[0]); 
                } else {
                    setterrorData([{"data":"empty"}]);
                }
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }
              fetchterrorData()
        }, []);

        useEffect(() => {
        const searchArr=({cildern})=>{
            const [Search,LargeNumber,SmallNumber] = {cildern}
            setterrorDataSearch(terrorData.filter(e => {
                return ((e.city.includes(Search)||e.country_txt.includes(Search)) && e.iyear < LargeNumber  && e.iyear > SmallNumber)
            }))
            if(!Search.value &&!LargeNumber.value&&!SmallNumber.value){
                setterrorSearch(false)
            }
            else{
                setterrorSearch(true)
            }
        }
        }, [{pr}]);

  return (
    <div>
        <table className="w-full text-right">
    <thead className="bg-gray-100 border-b">
        <tr>
            <th className="p-4">eventid</th>
            <th className="p-4 w-1/2">year</th>
            <th className="p-4 text-center">country</th>
            <th className="p-4">city</th>
            <th className="p-4 w-1/2">attacktype</th>
            <th className="p-4 text-center">motive</th>
        </tr>
    </thead>
    <tbody>
        {!Search && terrorData.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">{item.eventid}</td>
                <td className="p-4 text-gray-600">{item.iyear}</td>
                <td className="p-4 text-center text-sm text-gray-400">{item.country_txt}</td>
                <td className="p-4 font-medium">{item.city}</td>
                <td className="p-4 text-gray-600">{item.attacktype1_txt}</td>
                <td className="p-4 text-center text-sm text-gray-400">{item.motive}</td>
            </tr>
        ))}
        {Search && terrorDataSearch.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">{item.eventid}</td>
                <td className="p-4 text-gray-600">{item.iyear}</td>
                <td className="p-4 text-center text-sm text-gray-400">{item.country_txt}</td>
                <td className="p-4 font-medium">{item.city}</td>
                <td className="p-4 text-gray-600">{item.attacktype1_txt}</td>
                <td className="p-4 text-center text-sm text-gray-400">{item.motive}</td>
            </tr>
        ))}

    </tbody>
</table>
    </div>
  )
}




