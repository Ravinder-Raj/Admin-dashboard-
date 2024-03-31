// import BarChart from "./BarChart";
// import jsonData from "../data/data.json";
// import StackedBarChart from "./StackedBarChart";
// import LineChart from "./LineChart";
// import PieChart from "./PieChart";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import like from "../assets/pngwing.com.png";
// import plus from "../assets/plus.png";
// import comment from '../assets/comment.png';
// import share from '../assets/share.png';
// import view from '../assets/views.png';

// const monthlyData = jsonData.performanceData.monthlyData;
// const colors = ["#1f77b4", "#ff7f0e", "#2ca02c"];
// const legends = ["Likes", "Comments", "Shares"];

// const Dashboard = () => {
//   const totalViews = monthlyData.reduce((acc, data) => acc + data.views, 0);
//   const totalLikes = monthlyData.reduce((acc, data) => acc + data.likes, 0);
//   const totalComments = monthlyData.reduce(
//     (acc, data) => acc + data.comments,
//     0
//   );
//   const totalShares = monthlyData.reduce((acc, data) => acc + data.shares, 0);

//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await axios.get(
//           "https://newsapi.org/v2/top-headlines",
//           {
//             params: {
//               pageSize: 3,
//               country: "in",
//               apiKey: "93b54445377142d6a87abe3f96e223aa", // Replace with your actual API key
//             },
//           }
//         );

//         setArticles(response.data.articles);
//       } catch (error) {
//         console.error("Error fetching articles:", error);
//       }
//     };

//     fetchArticles();
//   }, []);

//   return (
//     <>
//       <div className="flex   max-lg:flex-col w-full bg-slate-900 ">
//         <h1 className="absolute text-2xl mt-6 ml-10">Dashboard</h1>
//         <div className="grid grid-cols-2  max-lg:p-0 max-lg:mt-8 max-md:flex max-md:flex-col max-lg:w-full border border-sky-200 max-lg:h-full h-[35rem]  lg:w-3/4    bg-slate-800  mx-4 rounded-xl mt-5 max-sm:m-0 max-sm:space-y-10">
//           {/* <Barchart data={monthlyData} width={600} height={400} /> */}
//           <div className="border bg-slate-700  border-sky-200 rounded-lg m-auto mt-12  ">
//             <h1>Login Activity</h1>
//             <BarChart
//               data={monthlyData}
//               width={300}
//               height={200}
//               barWidth={30}
//               barColor="skyblue"
//             ></BarChart>
//           </div>
//           <div className="border bg-slate-700  border-sky-200 rounded-lg m-auto mt-12">
//             {" "}
//             <h1>Session Activity</h1>
//             <StackedBarChart
//               data={jsonData.performanceData}
//               width={300} // specify desired width
//               height={200} // specify desired height
//               color="skyblue"
//             />
//           </div>
//           <div className="border bg-slate-700  border-sky-200 rounded-lg m-auto">
//             {" "}
//             <h1>Activite users</h1>
//             <LineChart
//               data={jsonData.performanceData}
//               width={300} // specify desired width
//               height={200} // specify desired height
//               color="skyblue"
//             />
//           </div>
//           <div className=" border bg-slate-700  rounded-lg m-auto">
//             {" "}
//             <h1>Action taken</h1>
//             <PieChart
//               data={jsonData.performanceData}
//               width={190}
//               height={200}
//               colors={colors}
//               legends={legends}
//             />
//           </div>
//         </div>
//         {/* <div className="border border-black w-3/12 max-lg:w-full flex flex-col"> */}
//         <div className=" rounded w-3/12 max-lg:w-full flex flex-col bg-slate-900 mt-4 gap-4">
//           <div className="flex justify-center items-center m-auto border  rounded-xl h-28 bg-slate-700 w-[95%] ml-0 max-sm:ml-2">
//             <button className="w-72 h-20 bg-sky-300 border border-white rounded-md text-white text-xl flex items-center justify-center gap-5">
//               <h1 className="m-0">Create news feed</h1>
//               <img className="w-8" src={plus} alt="" />
//             </button>
//           </div>

//           <div className="border border-sky-200 h-[27rem]  flex flex-col   rounded-xl bg-slate-700 w-[95%] ml-2">
//             <h1 className="text-3xl text-center">Performance</h1>
//             <div className=" h-[28rem] grid grid-cols-2 m-auto gap-12  my-5 ">
//               <div  >
//                 <h1 className="border border-sky-200 rounded-lg text-3xl w-28   flex flex-col float-left bg-slate-500 ">
//                   <img className="w-9" src={like} alt="" />
//                   <p className="  text-base  ">Total likes</p>
//                   <h1 className="text-4xl  ">{totalLikes}</h1>
//                 </h1>
//               </div>
//               <div>
//                 <h1 className="border border-sky-200 rounded-lg text-3xl w-32  flex flex-col float-left bg-slate-500 ">
//                   <img className="w-9" src={comment} alt="" />
//                   <p className="  text-base  ">Total Comments</p>
//                   <h1 className="text-4xl  ">{totalComments}</h1>
//                 </h1>
//               </div>
//               <div>
//                 <h1 className="border border-bsky-200 rounded-lg text-3xl w-28   flex flex-col float-left bg-slate-500 ">
//                   <img className="w-9" src={share} alt="" />
//                   <p className="  text-base  ">Total Shares</p>
//                   <h1 className="text-4xl  ">{totalShares}</h1>
//                 </h1>
//               </div>
//               <div>
//                 <h1 className="border border-bsky-200 rounded-lg text-3xl w-28   flex flex-col float-left bg-slate-500 ">
//                   <img className="w-9" src={view} alt="" />
//                   <p className="  text-base  ">Total Views</p>
//                   <h1 className="text-4xl  ">{totalViews}</h1>
//                 </h1>
//               </div>
//             </div>
//             <div className="  mb-5 m-auto ">
              
//               <button className="w-44 h-12 border bg-sky-300  border-sky-200 rounded-md  text-white text-xl mt-2">
//                 View All
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full bg-slate-900 pt-5 ">
//         <div className="w-[98%] bg-slate-700 m-auto h-[20rem] scroll-m-4 border rounded-xl mt-0 ">
//           <div className="flex justify-between px-5   ">
//             <div className="p-5">
//               <h1 className="text-2xl max-sm:text-xl  text-white">News feeds</h1>
//             </div>
//             <div className="p-5 ">
//               <button className="border  bg-sky-300  border-white rounded-md h-full   ">
//                 <h1 className="text-xl text-white px-5  max-sm:text-base ">Manage News Feed</h1>
//               </button>
//             </div>
//           </div>
//           <div className="overflow-x-auto text-white ">
//             <table className="table-auto w-full">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-2 w-28">Sr. No</th>
//                   <th className="px-4 py-2 w-96">Title</th>
//                   <th className="px-4 py-2 w-32 max-sm:hidden">Category</th>
//                   <th className="px-4 py-2 w-48 max-sm:hidden ">Date</th>
//                   <th className="px-4 py-2 w-48">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {articles.map((article, index) => (
//                   <tr key={index}>
//                     <td className="border px-4 py-2 ">{index + 1}</td>
//                     <td className="border px-4 py-2">{article.title}</td>
//                     <td className="border px-4 py-2 max-sm:hidden">All</td>
//                     <td className="border px-4 py-2 max-sm:hidden">
//                       {article.publishedAt}
//                     </td>
//                     <td className="border px-4 py-2">Published</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import like from "../assets/pngwing.com.png";
import plus from "../assets/plus.png";
import comment from '../assets/comment.png';
import share from '../assets/share.png';
import view from '../assets/views.png';
import BarChart from "./BarChart";
import jsonData from "../data/data.json";
import StackedBarChart from "./StackedBarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const monthlyData = jsonData.performanceData.monthlyData;
const colors = ["#1f77b4", "#ff7f0e", "#2ca02c"];
const legends = ["Likes", "Comments", "Shares"];

const Dashboard = () => {
  const [totalLikes, setTotalLikes] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [totalShares, setTotalShares] = useState(0);
  const [totalViews, setTotalViews] = useState(0);

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const fetchData = async () => {
      // Fetch articles
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              pageSize: 3,
              country: "in",
              apiKey: "93b54445377142d6a87abe3f96e223aa", // Replace with your actual API key
            },
          }
        );

        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }

      // Increment counts gradually
      const incrementCounts = async () => {
        const totals = {
          likes: monthlyData.reduce((acc, data) => acc + data.likes, 0),
          comments: monthlyData.reduce((acc, data) => acc + data.comments, 0),
          shares: monthlyData.reduce((acc, data) => acc + data.shares, 0),
          views: monthlyData.reduce((acc, data) => acc + data.views, 0),
        };

        for (let i = 70; i <= 100; i++) {
          await delay(50); // Adjust the delay time as needed
          setTotalLikes(Math.round(totals.likes * (i / 100)));
          setTotalComments(Math.round(totals.comments * (i / 100)));
          setTotalShares(Math.round(totals.shares * (i / 100)));
          setTotalViews(Math.round(totals.views * (i / 100)));
        }
        setIsLoading(false); // Set loading to false after counts are updated
      };

      incrementCounts();
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex max-lg:flex-col w-full bg-slate-900">
        <h1 className="absolute text-2xl mt-6 ml-10">Dashboard</h1>
        <div className="grid grid-cols-2 max-lg:p-0 max-lg:mt-8 max-md:flex max-md:flex-col max-lg:w-full border border-sky-200 max-lg:h-full h-[35rem] lg:w-3/4 bg-slate-800 mx-4 rounded-xl mt-5 max-sm:m-0 max-sm:space-y-10">
          <div className="border bg-slate-700 border-sky-200 rounded-lg m-auto mt-12 ">
            <h1>Login Activity</h1>
            <BarChart
              data={monthlyData}
              width={300}
              height={200}
              barWidth={30}
              barColor="skyblue"
            ></BarChart>
          </div>
          <div className="border bg-slate-700 border-sky-200 rounded-lg m-auto mt-12">
            {" "}
            <h1>Session Activity</h1>
            <StackedBarChart
              data={jsonData.performanceData}
              width={300} 
              height={200} 
              color="skyblue"
            />
          </div>
          <div className="border bg-slate-700 border-sky-200 rounded-lg m-auto">
            {" "}
            <h1>Activite users</h1>
            <LineChart
              data={jsonData.performanceData}
              width={300} 
              height={200} 
              color="skyblue"
            />
          </div>
          <div className="border bg-slate-700 rounded-lg m-auto">
            {" "}
            <h1>Action taken</h1>
            <PieChart
              data={jsonData.performanceData}
              width={190}
              height={200}
              colors={colors}
              legends={legends}
            />
          </div>
        </div>
        <div className="rounded w-3/12 max-lg:w-full flex flex-col bg-slate-900 mt-4 gap-4">
          <div className="flex justify-center items-center m-auto border rounded-xl h-28 bg-slate-700 w-[95%] ml-0 max-sm:ml-2">
            <button className="w-72 h-20 bg-sky-300 border border-white rounded-md text-white text-xl flex items-center justify-center gap-5 hover:contrast-75">
              <h1 className="m-0">Create news feed</h1>
              <img className="w-8" src={plus} alt="" />
            </button>
          </div>

          <div className="border border-sky-200 h-[27rem] flex flex-col rounded-xl bg-slate-700 w-[95%] ml-2">
            <h1 className="text-3xl text-center">Performance</h1>
            <div className="h-[28rem] grid grid-cols-2 m-auto gap-12 my-5 ">
              <div>
                <h1 className="border border-sky-200 rounded-lg text-3xl w-28 flex flex-col float-left bg-slate-500 ">
                  <img className="w-9" src={like} alt="" />
                  <p className="text-base">Total likes</p>
                  <h1 className="text-4xl">{totalLikes}</h1>
                </h1>
              </div>
              <div>
                <h1 className="border border-sky-200 rounded-lg text-3xl w-32 flex flex-col float-left bg-slate-500 ">
                  <img className="w-9" src={comment} alt="" />
                  <p className="text-base">Total Comments</p>
                  <h1 className="text-4xl">{totalComments}</h1>
                </h1>
              </div>
              <div>
                <h1 className="border border-bsky-200 rounded-lg text-3xl w-28 flex flex-col float-left bg-slate-500 ">
                  <img className="w-9" src={share} alt="" />
                  <p className="text-base">Total Shares</p>
                  <h1 className="text-4xl">{totalShares}</h1>
                </h1>
              </div>
              <div>
                <h1 className="border border-bsky-200 rounded-lg text-3xl w-28 flex flex-col float-left bg-slate-500 ">
                  <img className="w-9" src={view} alt="" />
                  <p className="text-base">Total Views</p>
                  <h1 className="text-4xl">{totalViews}</h1>
                </h1>
              </div>
            </div>
            <div className="mb-5 m-auto ">
              <button className="w-44 h-12 border bg-sky-300 border-sky-200 rounded-md text-white text-xl mt-2 hover:contrast-75">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-900 pt-5 ">
        <div className="w-[98%] bg-slate-700 m-auto h-[20rem] scroll-m-4 border rounded-xl mt-0 ">
          <div className="flex justify-between px-5 ">
            <div className="p-5">
              <h1 className="text-2xl max-sm:text-xl text-white">News feeds</h1>
            </div>
            <div className="p-5 ">
              <button className="border bg-sky-300 border-white rounded-md h-full hover:contrast-75 ">
                <h1 className="text-xl text-white px-5 max-sm:text-base ">Manage News Feed</h1>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto text-white ">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 w-28">Sr. No</th>
                  <th className="px-4 py-2 w-96">Title</th>
                  <th className="px-4 py-2 w-32 max-sm:hidden">Category</th>
                  <th className="px-4 py-2 w-48 max-sm:hidden ">Date</th>
                  <th className="px-4 py-2 w-48">Status</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2 ">{index + 1}</td>
                    <td className="border px-4 py-2">{article.title}</td>
                    <td className="border px-4 py-2 max-sm:hidden">All</td>
                    <td className="border px-4 py-2 max-sm:hidden">
                      {article.publishedAt}
                    </td>
                    <td className="border px-4 py-2">Published</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
