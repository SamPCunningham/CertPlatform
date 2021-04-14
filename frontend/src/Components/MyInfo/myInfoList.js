import { React, useState } from 'react';

const MyInfoList = () => {
    // this is dates for drop down menu
    const [daynum] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, 31]);
    const years = [];
    const currentYear = new Date().getFullYear();
    for ( let i=currentYear; i >= 1900; i -= 1) { years.push(i);}
    return ( 
        <form>
            <div className="col-xs-12 col-sm-6">
                <p><span style={{ color: "red" }}>*</span> Indicates a required field</p>
            </div>
            <div className="form-group row">
	            <label className="col-sm-5 col-md-4 control-label">Social Security #:<span style={{ color: "red"}}>*</span></label>
			      <div className="col-sm-7 col-md-8">
			          <input type="text" size="3" value="XXX" disabled />-
			          <input type="text" size="2" value="XX" disabled />-
			          <input type="text" size="4" value="XXXX" disabled />
			      </div>
	         </div>
             <div className="form-group row">
	            <label className="col-sm-5 col-md-4 control-label">First Name:<span style={{ color: "red"}}>*</span></label>
	            <div className="col-sm-7 col-md-8">
	                <input type="text" name="fname" />
	            </div>
	         </div>
             <div className="form-group row">
	            <label className="col-sm-5 col-md-4 control-label">Middle Initial:</label>
	            <div className="col-sm-7 col-md-8">
	                <input type="text" name="mi" size="1" />
	            </div>
	         </div>
             <div className="form-group row">
	             <label className="col-sm-5 col-md-4 control-label">Last Name:<span style={{ color: "red"}}>*</span></label>
	             <div className="col-sm-7 col-md-8">
	                 <input name="lname" type="text" />
	             </div>
	         </div>
             <div className="form-group row">
	             <label className="col-sm-5 col-md-4 control-label">Email Address:<span style={{ color: "red"}}>*</span></label>
	             <div className="col-sm-7 col-md-8">
	                 <input  name="email" type="email" id="email" />
	             </div>
	         </div>
             <div className="form-group row">
                <label className="col-sm-5 col-md-4 control-label">Date of Birth:<span style={{ color: "red"}}>*</span></label>
                <select className="offset-md-3">
                    <option value="January">Jan</option>
                    <option value="February">Feb</option>
                    <option value="March">Mar</option>
                    <option value="April">Apr</option>
                    <option value="May">May</option>
                    <option value="June">Jun</option>
                    <option value="July">Jul</option>
                    <option value="August">Aug</option>
                    <option value="September">Sep</option>
                    <option value="October">Oct</option>
                    <option value="November">Nov</option>
                    <option value="December">Dec</option>
                </select>
                <select>
                    {daynum.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                <select>
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
             </div>



        </form>
     );
}
 
export default MyInfoList;