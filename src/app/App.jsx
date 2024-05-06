import React from "react";

const App = () => {
  const shadowColor = "#FF0000";
  const shadowBlur = "2px";
  return (
    <div className="relative">
      <div className="flex items-center justify-center gap-5 mt-20">
        <main className="flex flex-col gap-5 w-[595px] mt-20">
          <div
            className="loginfont-[700] text-[80px] font-montserrat"
            style={{
              color: "white",
              textShadow: `
              -2px -2px 0 ${shadowColor},
               2px -2px 0 ${shadowColor},
               -2px 2px 0 ${shadowColor},
                2px 2px 0 ${shadowColor}
            `,
            }}
          >
            LOGIN
          </div>
          <div className="flex flex-col gap-5">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                id
                placeholder="Username"
                className="p-3 border"
                name
              ></input>
              <input
                type="text"
                id
                placeholder="Password"
                className="p-3 border"
                name
              ></input>
            </form>
            <button className="p-2 bg-[#DA211C] text-white w-[313px] text-[25px] font-[700]">
              LOGIN
            </button>
            <div className="flex flex-row justify-between">
              <button className="font-[600] text-[20px] opacity-70">
                Forgot Password
              </button>
              <button className="font-[600] text-[20px] opacity-70">
                Register
              </button>
            </div>
          </div>
        </main>
        <div>
          <img
            src="/burgir.png"
            alt="burgir"
            style={{ width: "649.33px", height: "100%" }}
          />
        </div>
        <img
          src="/rectangle.png"
          alt="rectangle"
          style={{
            width: "649.33px",
            height: "1143.68px",
            position: "absolute",
            right: "0",
            zIndex: "-1",
          }}
        />
      </div>
    </div>
  );
};

export default App;
