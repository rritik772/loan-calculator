import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Result from './Result';

function Calculator() {
    const [loanAmount, setLoanAmount] = useState(100000);
    const [interest, setInterest] = useState(10);
    const [tenure, setTenure] = useState(12)
    const [tenureTime, setTenureTime] = useState("Mo");

    const onCalculate = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <h1 className="mt-5 mb-5 text-light">Home Loan Calculator</h1>
            <form>
                <div className="row">
                    <div className="col-6"><h4 className="text-light">Home Loan Amount</h4></div>
                    <div className="col-6">
                        <div className="input-group">
                            <input type="number" id="loan-amount" className="form-control" value={loanAmount} onChange={(e) => {setLoanAmount(e.target.value)}}/>
                            <div className="input-group-append">
                                <span className="input-group-text" id="loan-amount">Rupees</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-6"><h4 className="text-light">Interest Rate</h4></div>
                    <div className="col-6">
                        <div className="input-group">
                            <input type="number" id="interest" className="form-control" value={interest} onChange={(e) => setInterest(e.target.value)}/>
                            <div className="input-group-append">
                                <span className="input-group-text" id="interest">%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-6"><h4 className="text-light">Loan Tenure</h4></div>
                    <div className="col-6">
                        <div className="input-group">
                            <input type="number" id="loan-tenure" className="form-control" value={tenure} onChange={(e) => setTenure(e.target.value)}/>
                            <div class="input-group-append">
                                <span class="btn btn-outline-primary bg-light" type="button" onClick={(e) => setTenureTime("Mo")} >Mo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <Result loanAmount={loanAmount} interest={interest} tenureMonth={tenure}/>
        </>
    )
}

export default Calculator
