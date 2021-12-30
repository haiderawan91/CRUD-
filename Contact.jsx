import React from 'react'
import Card from "./Card"
import CardData from './CardData';

const Contact = (props) => {

    const [data,setData] = React.useState({
        fullname:"",
        email:"",
        number:"",
        message:""
    });

    const InputEvent = (e) => {
        const {name, value} = e.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name] : value
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();

        var answer = window.confirm('Are you sure you want to submit this form?')

        if (answer) {
            alert("Form submitted successfully!");
        } else {
            alert("Operation cancelled :( ");
        }
    }


    return (
        <>
        <div className="my-2">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                    <div class="mb-3">
                            <label for="validationDefault01" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="validationDefault01" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Amanda Spallacci" required/>
                        </div>
                        <div class="mb-3">
                            <label for="validationDefault02" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="validationDefault02" name="email" value={data.email} onChange={InputEvent} placeholder="someone@example.com" required/>
                        </div>
                        <div class="mb-3">
                            <label for="validationDefault03" class="form-label">Contact Number</label>
                            <input type="integer" class="form-control" id="validationDefault03" name="number" value={data.number} onChange={InputEvent} placeholder="03XXXXXXX" required/>
                        </div>

                        <div class="mb-3">
                            <div class="col-md-3">
                                <label for="validationCustom04" class="form-label">Select Service</label>
                                <select class="form-select mx-10" id="validationCustom04" required>
                                <option selected disabled value="">Choose...</option>
                                <option>Web Development</option>
                                <option>Software Quality Assurance</option>
                                <option>Search Engine Optimization</option>
                                <option>Digital Marketing</option>
                                <option>Mobile Application Development</option>
                                <option>Software Development</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a valid Service.
                                </div>
                            </div>
                            <label for="validationDefault04" class="form-label">Message</label>
                            <textarea class="form-control" id="Optional" rows="4" name="message" value={data.message} onChange={InputEvent} placeholder="Optional"></textarea>
                        </div>
                        <div class="col-12">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                            <label class="form-check-label" for="invalidCheck">
                                I Agree to terms and conditions
                            </label>
                            <div class="invalid-feedback">
                                You must agree before submitting.
                            </div>
                        </div>
                    </div>
                        <div class="col-12">
                        <button class="btn btn-outline-primary my-3" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;