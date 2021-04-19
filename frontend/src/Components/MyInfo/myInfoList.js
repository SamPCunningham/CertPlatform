import { React, useState } from 'react';
import StateDrop from './stateDrop';

const MyInfoList = () => {
    // this is dates for drop down menu
    const [daynum] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, 31]);
    const years = [];
    const currentYear = new Date().getFullYear();
    for ( let i=currentYear; i >= 1900; i -= 1) { years.push(i);}
    const country = ["U.S.A", "Mexico","Canada", "Bahamas"]
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
             <div className="form-group row">
                 <label className="col-sm-5 col-md-4 control-label">Home Phone:<span style={{ color: "red" }}>*</span></label>
                 <div className="col-sm-7 col-md-8">
                     <input name="phone1" type="text" size="3" maxLength="3"></input>
                     <input name="phone2" type="text" size="3" maxLength="3"></input>
                     <input name="phone3" type="text" size="4" maxLength="4"></input>
                 </div>
             </div>
             <div className="form-group row">
                 <label className="col-sm-5 col-md-4 control-label">Work Phone:</label>
                 <div className="col-sm-7 col-md-8">
                     <input name="wphone1" type="text" size="3" maxLength="3"></input>
                     <input name="wphone2" type="text" size="3" maxLength="3"></input>
                     <input name="wphone3" type="text" size="4" maxLength="4"></input>
                 </div>
             </div>
             <div className="form-group row">
                 <label className="col-sm-5 col-md-4 control-label">Fax:</label>
                 <div className="col-sm-7 col-md-8">
                     <input name="fax1" type="text" size="3" maxLength="3"></input>
                     <input name="fax2" type="text" size="3" maxLength="3"></input>
                     <input name="fax3" type="text" size="4" maxLength="4"></input>
                 </div>
             </div>
             <div className="form-group row">
	             <label className="col-sm-6 col-md-4 control-label">Address:<span style={{ color: "red" }}>*</span></label>
	             <div className="col-sm-7 col-md-8">
	                 <input  name="addr1" type="text" defaultValue="" />
	             </div>
	         </div>
	         <div className="form-group row">
	             <label className="col-sm-6 col-md-4 control-label">Address 2:</label>
	             <div className="col-sm-7 col-md-8">
	                 <input  name="addr2" type="text" defaultValue="" />
	             </div>
	         </div>
             <div className="form-group row">
                 <label className="col-sm- col-md-4 control-label">State:<span style={{ color: "red" }}>*</span></label>
                 <span className="col-3"></span>
                 <StateDrop />
             </div>
             <div className="form-group row">
                <label className="col-sm- col-md-4 control-label">Country:<span style={{ color: "red" }}>*</span></label>
                <select className="offset-md-3">
                    {country.map(country => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
             </div>
             <div className="form-group row">
	             <label className="col-sm-6 col-md-4 control-label">Zip:<span style={{ color: "red" }}>*</span></label>
	             <div className="col-sm-7 col-md-8">
	                 <input  name="zip" type="text" defaultValue="" />
	             </div>
	         </div>
             <div className="form-group row">
	             <label className="col-sm-6 col-md-4 control-label">Tech ID</label>
	             <div className="col-sm-7 col-md-8">
	                 <input  name="zip" type="text" defaultValue="" disabled />
	             </div>
	         </div>
             <div>
                 <label className="col-xs-12"><strong>Would you like to receive new product updates via email?</strong><span style={{ color: "red" }}>*</span></label>
                 <div className="form-group" style={{textAlign: "center"}}>
                 <label className="radio-inline">
                     <input type="radio" value="Y" name="emailUpdates" /> Yes 
                 </label>
                 <label className="radio-inline" style={{paddingLeft: "5px"}}>
                     <input type="radio" value="N" name="emailUpdates" /> No
                 </label>
                </div>
             </div>
             <div className="form-group">
                 <label className="col-xs-12">The EPA requires we publicly list 608 certifications received after 2017. Would you like to opt out of having your certification listed publicly online?<span style={{ color: "red" }}>*</span></label>
                 <input type="checkbox" value="true" name="epaListOptOut" />
             </div>
             




        </form>
     );
}
 
export default MyInfoList;