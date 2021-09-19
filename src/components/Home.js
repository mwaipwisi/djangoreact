import React,{Component} from "react";
import {Col,Container,Row} from "reactstrap";
import LeadsList from "./LeadsList";

import axios from "axios";
import {baseURL} from "../services/service"

class Home extends Component {
    state = {
        leads: []
    };

    componentDidMount() {
        this.resetState();
    }

    getLeads = () => {
        axios.get(baseURL).then(res => this.setState({leads: res.data}));
    };
    resetState = () => {
        this.getLeads();
    };


render(){
    return(
        <Container style ={{marginTop: "2px"}} >
            <Row>
                <Col>
                    <LeadsList
                        leads = {this.state.leads}
                        resetState={this.resetState}
                    />
                </Col>
            </Row>

        </Container>

    );
}

}export default Home