import React, { useEffect, useState } from "react";
import ChangePage from "./contents/ChangePage";
import { motion } from "framer-motion";
import axios from "axios";
import HeatMap from "@uiw/react-heat-map";
import { createPortal } from "react-dom";

export default function () {
  const [RecentContrib, setRecentContrib] = useState(null);
  const [onHover, setHover] = useState(null);
  async function anim() {
    await animationControls.start();
  }

  useEffect(() => {
    axios
      .get("https://dongwontuna.net/static/mysite/json/data.json")
      .then((res) => {
        if (res.status === 200) {
          if (res.data?.errors) return;
          var items = [];
          var a =
            res.data.data.user.contributionsCollection.contributionCalendar;
          a.weeks.map((item) => {
            item.contributionDays.map((itm) => {
              items.push({ date: itm.date, count: itm.contributionCount });
            });
          });
          setRecentContrib({ count: a.totalContributions, items: items });
        }
      });
  }, []);
  return (
    <ChangePage style={{direction: 'rtl'}}>
      {RecentContrib !== null && (
        <div className="w-[1070px]  github m-auto mt-[1500px] bg-[#ffffff71] rounded-[10px] p-[20px] pl-[3px] pb-0 pt-[15px] relative min-h-[290px]" >
          <p className="text-[22px] text-[#ffffff96] ml-[30px] mb-10">
            トータルアップロード数 : {RecentContrib.count}
          </p>
          <div className="w-fit m-auto" >
            <HeatMap
              className="whitespace-nowrap overflow-hidden"
              value={RecentContrib.items}
              width={1020}
              height={230}
              style={{ color: "#ffffff", fontSize: "17px", direction: 'ltr'}}
              startDate={new Date(RecentContrib.items[60].date)}
              rectSize={20}
              space={2}
              endDate={Date(
                RecentContrib.items[RecentContrib.items.length - 1].date
              )}
              panelColors={{
                1: "#CBD5E099",
                3: "#aad2e3",
                5: "#7febe5",
                8: "#00c5db",
                10: "#20a1a8",
              }}
              weekLabels={["日", "月", "火", "水", "木", "金", "土"]}
              monthLabels={[
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
              ]}
              legendRender={(props) => (
                <rect {...props} y={props.y + 10} rx="2.5" />
              )}
              rectProps={{ rx: 2.5 }}
              rectRender={(props, data) => {
                if (data.count === undefined) props.style = { display: "none" };
                let date = data.date.split("/");
                return (
                  <>
                    <rect
                      {...props}
                      onMouseEnter={(e) => {
                        e.target.style.opacity = "0.5";
                        setHover(data.date);
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.opacity = "1";
                        setHover();
                      }}
                    />
                    {onHover === data.date &&
                      createPortal(
                        <div
                          className="w-fit h-fit absolute top-16 text-base"
                          style={{
                            transform: `translate(${props.x-850}px,${props.y}px)`,
                          }}
                        >
                          <p>
                            There is {data.count === 0 ? "no" : data.count}{" "}
                            contribution in {date[1]},{date[2]} on {date[0]}
                          </p>
                        </div>,
                        document.getElementsByClassName("github")[0]
                      )}
                  </>
                );
              }}
            />
          </div>
        </div>
      )}
    </ChangePage>
  );
}
