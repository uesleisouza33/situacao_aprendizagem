import  { useState, type JSX } from "react";


export default function OhmCalculator(): JSX.Element {
const [voltage, setVoltage] = useState<number | "">("");
const [current, setCurrent] = useState<number | "">("");
const [resistance, setResistance] = useState<number | "">("");
const [power, setPower] = useState<number | "">("");


const handle = (setter: (v:number|"")=>void) => (e: React.ChangeEvent<HTMLInputElement>) => {
const v = e.target.value; setter(v === "" ? "" : Number(v));
};


const calcFromVandR = (v:number|"", r:number|"") => {
if (v === "" || r === "" || Number(r) === 0) return;
const i = Number(v) / Number(r); const p = Number(v) * i;
setCurrent(Number(i.toFixed(6))); setPower(Number(p.toFixed(6)));
};


const calcFromVandI = (v:number|"", i:number|"") => {
if (v === "" || i === "" || Number(i) === 0) return;
const r = Number(v) / Number(i); const p = Number(v) * Number(i);
setResistance(Number(r.toFixed(6))); setPower(Number(p.toFixed(6)));
};


const calcFromIandR = (i:number|"", r:number|"") => {
if (i === "" || r === "") return; const v = Number(i) * Number(r); const p = v * Number(i);
setVoltage(Number(v.toFixed(6))); setPower(Number(p.toFixed(6)));
};


const dv = (v:number|"") => v === "" ? "—" : String(v);


return (
<div className="max-w-md">
<label className="block text-sm text-slate-700">Tensão (V)</label>
<input type="number" value={voltage === "" ? "" : voltage} onChange={handle(setVoltage)} className="w-full p-2 border rounded mb-3" />


<label className="block text-sm text-slate-700">Corrente (A)</label>
<input type="number" value={current === "" ? "" : current} onChange={handle(setCurrent)} className="w-full p-2 border rounded mb-3" />


<label className="block text-sm text-slate-700">Resistência (Ω)</label>
<input type="number" value={resistance === "" ? "" : resistance} onChange={handle(setResistance)} className="w-full p-2 border rounded mb-3" />


<div className="flex gap-2 mt-2">
<button className="px-3 py-2 bg-indigo-600 text-white rounded" onClick={() => calcFromVandR(voltage, resistance)}>Calc I (V & R)</button>
<button className="px-3 py-2 bg-indigo-600 text-white rounded" onClick={() => calcFromVandI(voltage, current)}>Calc R (V & I)</button>
<button className="px-3 py-2 bg-indigo-600 text-white rounded" onClick={() => calcFromIandR(current, resistance)}>Calc V (I & R)</button>
</div>


<div className="mt-4 text-sm text-slate-700">
<div>Tensão (V): <strong>{dv(voltage)}</strong></div>
<div>Corrente (A): <strong>{dv(current)}</strong></div>
<div>Resistência (Ω): <strong>{dv(resistance)}</strong></div>
<div>Potência (W): <strong>{dv(power)}</strong></div>
</div>
</div>
);
}