import React, { useEffect, useState } from "react";
import BtnsSection from "./BtnsSection";
import { tableDataStatus } from "../constants";
import TableData from "../../src/data/table.json";

const Table = () => {
  const [dataAction, setdataAction] = useState(tableDataStatus.PAYTYPE_ID);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(() => {
      const finalObj = {
        ...TableData,
        values: TableData.values.map((obj) => {
          const { paytype_id, provider_id, employee_type_id } = obj;

          const finalObj = {
            ...obj,
            [tableDataStatus.PAYTYPE_ID]:
              TableData.categories.paytype_id[paytype_id],
            [tableDataStatus.PROVIDER_ID]:
              TableData.categories.provider_id[provider_id],
            [tableDataStatus.EMPLOYEE_TYPE_ID]:
              TableData.categories.employee_type_id[employee_type_id],
          };

          return finalObj;
        }),
      };

      return finalObj;
    });
  }, [dataAction]);

  const handleControlsBtnsClick = (e) => {
    const { name, value } = e.target;

    setdataAction(value);
  };

  const RenderTableData = ({ arr = [], type, specialLabel = null }) => {
    return (
      <div className="grid-item">
        <div className="table-header">{specialLabel || type}</div>
        {arr.length &&
          arr?.map((obj, index) => <div className="table-entree" key={index}>{obj[type]}</div>)}
      </div>
    );
  };

  return (
    <>
      <section id="table" className="sub-heading">
        <div>Data Table</div>
        <div className="">
          <div className="">
            <BtnsSection
              data={{
                actionStatus: tableDataStatus,
                heading: "",
                defaultValue: dataAction,
                handleBtnsClick: handleControlsBtnsClick,
              }}
            />
            <div className="grid-container">
              {RenderTableData({ arr: data.values, type: "date" })}
              {RenderTableData({
                arr: data.values,
                type: dataAction,
                specialLabel: tableDataStatus[dataAction],
              })}
              {RenderTableData({ arr: data.values, type: "amount" })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Table;
