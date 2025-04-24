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
  return (
    data.isGroup ? (
      <div className="inpts-group flex items-center gap-3">
        { data.inpts?.map((ele, index) => (
          <FormInput data={ele} key={index} />
        )) }
      </div>
    ) : (
      <div className="form-group">
        <FormInput data={data} />
      </div>
    )
  )
}