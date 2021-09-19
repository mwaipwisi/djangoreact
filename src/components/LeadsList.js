import React,{Component} from "react";
import {Table} from "reactstrap";
class LeadsList extends Component{
    render() {
        const leads = this.props.leads;
        return(
            <Table dark table-hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>CREATED AT</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>MESSAGE</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {!leads|| leads.length<=0?(
                    <tr>
                        <td colSpan="6" align="center">
                            <b>Ops, no one here yet</b>
                        </td>
                    </tr>
                ):(
                    leads.map(leads=>(
                        <tr key={leads.id}>
                            <td>{leads.id}</td>
                            <td>{leads.created_at}</td>
                            <td>{leads.name}</td>
                            <td>{leads.email}</td>
                            <td>{leads.message}</td>
                        </tr>
                    ))
                )}
                </tbody>
            </Table>

        )
    }
}export  default LeadsList