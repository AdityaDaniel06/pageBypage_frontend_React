import AreaGraph from "./AreaGraph";
import BGraph from "./BGraph";
import PChart from "./PChart";
import { GiMoneyStack } from "react-icons/gi";
import { BsSuitcaseLg } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { LuThumbsDown } from "react-icons/lu";
import { TbTruckReturn } from "react-icons/tb";

function MyCharts() {
  return (
    <>
      <main className="flex-1 bg-gray-100 p-6">
        <div className="flex justify-end gap-4">
          <button className="rounded-sm bg-slate-200 px-3 py-2 text-xs font-semibold text-emerald-500 hover:bg-emerald-500 hover:text-white">
            Last 7 Days
          </button>
          <button className="rounded-sm bg-slate-200 px-3 py-2 text-xs font-semibold text-emerald-500 hover:bg-emerald-500 hover:text-white">
            Last 30 Days
          </button>
          <button className="rounded-sm bg-slate-200 px-3 py-2 text-xs font-semibold text-emerald-500 hover:bg-emerald-500 hover:text-white">
            Last 90 Days
          </button>
        </div>
        <div className="mt-3 flex justify-around space-x-6 bg-slate-200 p-4">
          <div className="bg-slate-300 px-4 py-3 hover:shadow-lg">
            <h2 className="text-lg font-semibold text-emerald-500">
              Active Users
            </h2>
            <div className="flex gap-2">
              <span className="m-1 rounded-full bg-yellow-100 p-2">
                <GoGraph className="text-2xl text-yellow-400" />
              </span>
              <span>
                <p className="text-sm text-slate-500">Last 30 days</p>
                <p className="font-semibold">1310</p>
              </span>
            </div>
            <p></p>
          </div>
          <div className="bg-slate-300 px-4 py-3 hover:shadow-lg">
            <h2 className="text-lg font-semibold text-emerald-500">Orders</h2>
            <div className="flex gap-2">
              <span className="m-1 rounded-full bg-purple-200 p-2">
                <BsSuitcaseLg className="text-2xl text-purple-500" />
              </span>
              <span>
                <p className="text-sm text-slate-500">Last 30 days</p>
                <p className="font-semibold">3100</p>
              </span>
            </div>
          </div>
          <div className="bg-slate-300 px-4 py-3 hover:shadow-lg">
            <h2 className="text-lg font-semibold text-emerald-500">Revenue</h2>
            <div className="flex gap-2">
              <span className="m-1 rounded-full bg-emerald-100 p-2">
                <GiMoneyStack className="text-2xl text-emerald-500" />
              </span>
              <span>
                <p className="text-sm text-slate-500">Last 30 days</p>
                <p className="font-semibold">₹ 10000</p>
              </span>
            </div>
          </div>
          <div className="bg-slate-300 px-4 py-3 hover:shadow-lg">
            <h2 className="text-lg font-semibold text-emerald-500">Returns</h2>
            <div className="flex gap-2">
              <span className="m-1 rounded-full bg-orange-100 p-2">
                <TbTruckReturn className="text-2xl text-orange-400" />
              </span>
              <span>
                <p className="text-sm text-slate-500">Last 30 days</p>
                <p className="font-semibold">31</p>
              </span>
            </div>
          </div>
          <div className="bg-slate-300 px-4 py-3 hover:shadow-lg">
            <h2 className="text-lg font-semibold text-emerald-500">
              Complaints
            </h2>
            <div className="flex gap-2">
              <span className="m-1 rounded-full bg-red-100 p-2">
                <LuThumbsDown className="text-2xl text-red-500" />
              </span>
              <span>
                <p className="text-sm text-slate-500">Last 30 days</p>
                <p className="font-semibold">67</p>
              </span>
            </div>
          </div>
        </div>
        <div className="bg-slate-200">
          <AreaGraph />
        </div>
        <div className="mt-6 flex items-start justify-center space-x-6 bg-slate-200 pt-4">
          <PChart />
          <BGraph />
        </div>
      </main>
    </>
  );
}

export default MyCharts;
