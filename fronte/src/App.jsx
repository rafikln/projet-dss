import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [liste, qetliste] = useState([]);

  return (
    <>
      <div class="max-w-md mx-auto  mt-5 ">
        <div class="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
          <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              class="bg-gray-100 outline-none"
              type="text"
              placeholder="Nom Artist"
            />
          </div>

          <div class="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
            <span>Search</span>
          </div>
        </div>
      </div>
      {liste ? (
        <>
          <div class="flex mt-10 items-center justify-center">
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white shadow-md rounded-xl">
                <thead>
                  <tr class="bg-blue-gray-100 text-gray-700">
                    <th class="py-3 px-4 text-left">Nom artist</th>
                    <th class="py-3 px-4 text-left">Origine</th>
                    <th class="py-3 px-4 text-left">Biographie</th>
                    <th class="py-3 px-4 text-left">Site Web</th>
                  </tr>
                </thead>
                <tbody class="text-blue-gray-900">
                  <tr class="border-b border-blue-gray-200">
                    <td class="py-3 px-4">Company A</td>
                    <td class="py-3 px-4">$50.25</td>
                    <td class="py-3 px-4">100</td>
                    <td class="py-3 px-4">
                      <button
                        class="middle none center mr-4 rounded-lg bg-green-400 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                      >
                        Voir
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>cc</h1>
        </>
      )}
    </>
  );
}

export default App;
