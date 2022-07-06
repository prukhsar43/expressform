import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Show from './Show';

const Form = () => {

    const [state, setState] = useState({
        fname: "",
        lname: "",
        age: "",
        mobile: "",
        desc: ""
    });
    const [flag, setFlag] = useState(false)
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        dataCall()
    }, [flag])

    const onChangeHandeler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const onClickhandeler = () => {
        if(state.fname.trim()===""||state.lname.trim()===""||state.age.trim()===""||state.mobile.trim()===""||state.desc.trim()===""){
            alert("Fill all entries")
        }else{
        axios.post("http://localhost:5000", state).then((response) => {
            console.log(response.data)
            alert("Data is Saved")
            setFlag(!flag)
        }).catch((err) => {
            console.log(err)
        })
        setState({
            fname: "",
            lname: "",
            age: "",
            mobile: "",
            desc: ""
        })
    }}

    const dataCall = () => {
        axios.get("http://localhost:5000").then((resp) => {
            setApiData(resp.data)
            console.log(resp.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    const submitHandeler = (e) => {
        e.preventDefault()
    }
    return (<>
        <div className="container">

            <form className="mt-3" onSubmit={submitHandeler}>
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                        <input type="text" className="form-control" value={state.fname} name="fname" onChange={onChangeHandeler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                        <input type="text" className="form-control" value={state.lname} name="lname" onChange={onChangeHandeler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
                        <input type="number" className="form-control" value={state.age} name="age" onChange={onChangeHandeler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label">Mobile</label>
                        <input type="number" className="form-control" value={state.mobile} name="mobile" onChange={onChangeHandeler} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
                        <textarea name="desc" type="text" value={state.desc} onChange={onChangeHandeler} cols="150" rows="10"></textarea>
                    </div>
                    <button className="btn btn-primary" onClick={onClickhandeler}>
                        Done
                    </button>
                </div>
            </form>

        </div>
        {/* <div className="container"> */}
        {apiData.map((ele,i) => {
           return( 
           <Show ele={ele} i={i} />
           )
        })}
        {/* </div> */}
    </>
    )
}

export default Form
