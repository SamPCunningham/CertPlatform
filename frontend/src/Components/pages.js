import React from 'react';
import homeTable from './Home/homeTable';
import myInfoList from './MyInfo/myInfoList';


export function Home() {
    return (
        <div className="container" style={{ marginTop: "40px" }}>
            <div className="row">
                <p className="col-10">Mainstream now offers HC/HFO Certification to EPA Section 608 certified techs. Find out more info here and click below to read the manual or begin the exam. HC/HFO Certification covers all aspects of techniques and regulations for the safe handling of flammable hydrocarbon and hydrofluoroolefin refrigerants.</p>
                <p className="col-2">IMG placeholder</p>
                <homeTable />
            </div>            
        </div>
    );
}

export function MyInfo() {
    return (
        <div>
           <myInfoList /> 
        </div>
        
    );
}

export function MyExams() {
    return (
        <div>
            <h1>Certifications and Exams</h1>
        </div>
    );
}

export function IndustryInfo() {
    return (
        <div>
            <p><strong>Type I Certification </strong>- Technicians receiving a passing grade on the Type I (small appliance) examination are certified to recover refrigerant during the maintenance, service or repair of packaged terminal air conditioners with 5 pounds or less of refrigerant. Only Type I or Universal certified technicians can recover refrigerant from these units</p>
            <p><strong>Type II Certification </strong>- Technicians receiving a passing grade on the Type II (high-pressure and very high pressure) examination are certified to recover refrigerant during the maintenance, service or repair of high-pressure equipment (High-Pressure R-12, R-114, R-134a, R-401A and R-500; Higher-Pressure R-22, R-502, R-402A, R-402B, R-404A, R-407A, R-407B, and R-407C; and Very-High-Pressure R-410A, R-410B, R-13, R-23, and R-503). Only Type II or Universal certified technicians can recover refrigerant from these units.</p>
            <p><strong>Type III Certification </strong>- Technicians receiving a passing grade on the Type III (low-pressure appliance) examination are certified to recover refrigerant during the maintenance, service or repair of low-pressure equipment (CFC-11, HCFC-123). Only Type III or Universal certified technicians can recover refrigerant from these units.</p>
            <p><strong>Universal Certification </strong></p>- Technicians receiving a Universal Certification are certified to recover refrigerant during the maintenance, service or repair of small appliances, high-pressure equipment and low-pressure equipment. That is, they are certified to work on any type of air conditioning and refrigeration equipment, except motor vehicle air conditioning (see Section 609 MVAC Certification).
        </div>
    );
}

export function Downloads() {
    return (
        <div>
            <h1>Software</h1>
        </div>
    );
}

export function Store() {
    return (
        <div>
            <h1>Store Page/Redirect</h1>
        </div>
    );
}