import React from "react";



const Table = (props) =>{
    const payBill = async(bill) =>{

        const res = await fetch("http://localhost:8080/pay_bills",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name:bill.invoiceID,
                amount:bill.amount,

            })
        })

        const json = await res.json();
        window.location = json.url;
    }
    return(
        <table className="table-fixed w-full">
                    <thead className="bg-gray-200 text-gray-800 ">
                        <tr className="text-center border">
                        <th className="capitalize border lg:px-4 py-2">Invoice ID</th>
                        <th className="capitalize border lg:px-4 py-2">Invoice</th>
                        <th className="capitalize border lg:px-4 py-2">Amount</th>
                        <th className="capitalize border lg:px-4 py-2">Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                       {
                        props.bills.map((bill,key) => (
                            <tr id={key} className="text-center border">
                                <td className="capitalize border lg:px-4 py-2">{bill.invoiceID}</td>
                                <td className="capitalize border lg:px-4 py-2">{bill.invoice}</td>
                                <td className="border lg:px-4 py-2 ">₹{bill.amount}</td>
                                <td className={`border lg:px-4 py-2 capitalize ${bill.status?"text-green-600":"text-red-600 hover:underline"}`}><a onClick={() => payBill(bill)} href="#">{bill.status == false?"pay now" : "paid"}</a></td>
                            </tr>
                        ))
                       }
                    </tbody>
                </table>
    )
}


export default Table;