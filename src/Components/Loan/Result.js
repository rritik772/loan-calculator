import React, {useState, useEffect} from 'react'

function Result({loanAmount, interest, tenureMonth}) {
    const [monthEMI, setMonthlyEMI] = useState(0);
    const [interestPayable, setInterestPayable] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);

    const calculateLoan = () => {
        // const tempPayment = ((loanAmount * interest * tenureMonth) / 100);
        const tempPayment = loanAmount * (1 + ((interest / 100) * (tenureMonth / 12)))
        setTotalPayment(Math.round(tempPayment * 100) / 100);

        setInterestPayable(Math.round((tempPayment - loanAmount) * 100) / 100);
        setMonthlyEMI(Math.round((tempPayment / tenureMonth) * 100) / 100);
    }

    useEffect(() => {
        calculateLoan()
    });

    return (
        <div>
            <div className="row mt-5">
                <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <div className="card bg-secondary">
                                <div className="card-body text-center">
                                    <h4 className="card-title">Monthly EMI</h4>
                                    <h2>{monthEMI}</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="card bg-secondary">
                                <div className="card-body text-center">
                                    <h4 className="card-title">Total Interest Payable</h4>
                                    <h2>{interestPayable}</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="card bg-secondary">
                                <div className="card-body text-center">
                                    <h4 className="card-title">Total Payment</h4>
                                    <h5>(Principal + Interest )</h5>
                                    <h2>{totalPayment}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card bg-secondary">
                        <div className="card-body">
                            <h3 className="card-title">Breakup of Total Payment</h3>
                            <h5>Result</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
