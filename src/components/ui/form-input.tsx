type Option = {
  text: string;
  value: string;
}

type FormInput = {
  label?: string;
  id?: string;
  type?: string;
  name?: string;
  opts?: Option[];
}

export function FormInput({ data } : { data: FormInput }) {
  return (
    <div className="form-group grid gap-2 w-full">
      <label htmlFor={data.id} className="form-label text-white font-semibold">{data.label}</label>
      { data.type === "textarea" ? (
        <textarea name={data.name} id={data.id} rows={3} className="form-input py-2 resize-none w-full outline-0 bg-[#ffffff4d] rounded-md px-3 text-slate-200 transition-all border-solid border-2 border-transparent focus:bg-transparent focus:border-[#eadc9f]" required></textarea>
      ) : data.type === "select" ? (
        <select name={data.name} id={data.id} className="form-input h-[45px] w-full outline-0 bg-[#ffffff4d] rounded-md px-3 text-slate-200 transition-all border-solid border-2 border-transparent focus:bg-transparent focus:border-[#eadc9f]" required>
          { data.opts?.map((ele, index) => (
            <option value={ele.value} key={index} className="text-black">{ele.text}</option>
          )) }
        </select>
      ) : data.type === "tel" ? (
        <input type="tel" name={data.name} id={data.id} pattern="^(05\d{8}|5\d{9})$" title="يرجى إدخال رقم هاتف سعودي صالح" className="form-input h-[45px] w-full outline-0 bg-[#ffffff4d] rounded-md px-3 text-slate-200 transition-all border-solid border-2 border-transparent focus:bg-transparent focus:border-[#eadc9f]" required />
      ) : (
        <input type={data.type} id={data.id} name={data.name} className="form-input h-[45px] w-full outline-0 bg-[#ffffff4d] rounded-md px-3 text-slate-200 transition-all border-solid border-2 border-transparent focus:bg-transparent focus:border-[#eadc9f]" required />
      ) }
    </div>
  )
}