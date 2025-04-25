"use client";

import { useState } from "react";
import { FormInput } from "./form-input";

type AloneGoup = {
  label: string;
  id: string;
  type: string;
  name: string;
}

type Data = {
  isGroup?: boolean;
  inpts?: AloneGoup[];
  label?: string;
  id?: string;
  type?: string;
  name?: string;
}

export function FormGroup({ data } : { data: Data }) {
  const [ isNeed, setIsNeed ] = useState(false);

  return (
    data.isGroup ? (
      <>
        { data.type === "date" ? (
          <>
          <label htmlFor="is-need" onChange={() => setIsNeed(!isNeed)} className="form-label flex items-center gap-2 text-white font-bold text-[18px]">
            <span className="select-none">هل تريد تحديد موعد الاجتماع ؟</span>
            <input type="checkbox" name="is-need" id="is-need" />
          </label>
          { isNeed && (
            <div className="inpts-group flex items-center gap-3">
              { data.inpts?.map((ele, index) => (
                <FormInput data={ele} key={index} />
              )) }
            </div>
          ) }
          </>
        ) : (
          <div className="inpts-group flex items-center gap-3">
            { data.inpts?.map((ele, index) => (
              <FormInput data={ele} key={index} />
            )) }
          </div>
        ) }
      </>
    ) : (
      <div className="form-group">
        <FormInput data={data} />
      </div>
    )
  )
}